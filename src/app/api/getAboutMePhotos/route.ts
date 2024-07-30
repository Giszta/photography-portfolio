import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
	try {
		const photos = [];
		let nextCursor: string | undefined = undefined;

		do {
			const resources = await cloudinary.api.resources({
				type: "upload",
				prefix: "AboutMe/",
				max_results: 500,
				next_cursor: nextCursor,
				tags: true,
			});

			photos.push(
				...resources.resources.map((resource) => ({
					public_id: resource.public_id,
					url: resource.secure_url
						.replace("upload/", "upload/f_auto,q_auto/")
						.replace("http://", "https://"),
					tags: resource.tags,
					created_at: resource.created_at,
					width: resource.width,
					height: resource.height,
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
