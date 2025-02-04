export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
	secure_url: string;
	width: number;
	height: number;
}

interface Photo {
	url: string;
	width: number;
	height: number;
}

export async function GET(request: Request) {
	try {
		const url = new URL(request.url);
		const folder = url.searchParams.get("folder");
		if (!folder) {
			return NextResponse.json(
				{ error: "Folder parameter is required" },
				{ status: 400 }
			);
		}
		const resources = await cloudinary.api.resources({
			type: "upload",
			prefix: folder,
			max_results: 100,
		});
		const photos: Photo[] = resources.resources.map(
			(resource: CloudinaryResource) => ({
				url: resource.secure_url,
				width: resource.width,
				height: resource.height,
			})
		);
		return NextResponse.json(photos);
	} catch (error) {
		console.error("Error fetching photos from Cloudinary:", error);
		return NextResponse.json(
			{ error: "Failed to fetch photos" },
			{ status: 500 }
		);
	}
}
