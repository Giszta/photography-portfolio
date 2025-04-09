import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const dynamic = "force-dynamic";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
interface CloudinaryResource {
	public_id: string;
	bytes: number;
}
interface Folder {
	name: string;
	path: string;
}

export async function GET() {
	try {
		const folderSet = new Set<string>();
		let nextCursor: string | undefined = undefined;
		do {
			const resources = await cloudinary.api.resources({
				type: "upload",
				prefix: "gallery/",
				max_results: 500,
				next_cursor: nextCursor,
			});
			resources.resources.forEach((resource: CloudinaryResource) => {
				if (resource.bytes > 0) {
					const folderPath = resource.public_id
						.split("/")
						.slice(0, 2)
						.join("/");
					if (folderPath.startsWith("gallery/")) {
						folderSet.add(folderPath);
					}
				}
			});
			nextCursor = resources.next_cursor;
		} while (nextCursor);
		const folders: Folder[] = Array.from(folderSet).map((folder) => ({
			name: folder.split("/").slice(1).join("/"),
			path: folder,
		}));
		return NextResponse.json(folders, {
			headers: {
				"Cache-Control": "no-store, max-age=0",
			},
		});
	} catch (error) {
		console.error("Error fetching folders from Cloudinary:", error);
		return NextResponse.json(
			{ error: "Failed to fetch folders" },
			{ status: 500 }
		);
	}
}
