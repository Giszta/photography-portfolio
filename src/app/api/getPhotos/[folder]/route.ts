import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
interface CloudinaryResource {
	public_id: string;
	secure_url: string;
	bytes: number;
	tags: string[];
	created_at: string;
}

interface Photo {
	public_id: string;
	url: string;
	tags: string[];
	created_at: string;
}

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
				tags: true,
			});
			photos.push(
				...(resources.resources
					.map((resource: CloudinaryResource) => {
						if (resource.bytes === 0) {
							return undefined;
						}
						return {
							public_id: resource.public_id,
							url: resource.secure_url
								.replace("upload/", "upload/f_auto,q_auto/")
								.replace("http://", "https://"),
							tags: resource.tags,
							created_at: resource.created_at,
						};
					})
					.filter(Boolean) as Photo[])
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
