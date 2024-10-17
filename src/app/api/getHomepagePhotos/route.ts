import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

		console.log(`Fetching photos from folder: ${folder}`);

		const resources = await cloudinary.api.resources({
			type: "upload",
			prefix: folder,
			max_results: 100,
		});

		const photos = resources.resources.map((resource) => ({
			src: resource.secure_url,
			width: resource.width,
			height: resource.height,
		}));

		return NextResponse.json(photos);
	} catch (error) {
		console.error("Error fetching photos from Cloudinary:", error);
		return NextResponse.json(
			{ error: "Failed to fetch photos" },
			{ status: 500 }
		);
	}
}
