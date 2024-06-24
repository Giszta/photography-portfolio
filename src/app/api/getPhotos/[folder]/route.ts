// app/api/getPhotos/[folder]/route.ts
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(
	request: Request,
	{ params }: { params: { folder: string } }
) {
	try {
		const { folder } = params;
		const photos = [];
		let nextCursor: string | undefined = undefined;

		do {
			const resources = await cloudinary.api.resources({
				type: "upload",
				prefix: `gallery/${folder}/`,
				max_results: 500,
				next_cursor: nextCursor,
			});

			photos.push(
				...resources.resources.map((resource) => ({
					public_id: resource.public_id,
					url: resource.secure_url,
				}))
			);

			nextCursor = resources.next_cursor;
		} while (nextCursor);

		return NextResponse.json(photos);
	} catch (error) {
		console.error("Error fetching photos from Cloudinary:", error);
		return NextResponse.json(
			{ error: "Failed to fetch photos" },
			{ status: 500 }
		);
	}
}
