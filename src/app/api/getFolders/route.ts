import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const dynamic = "force-dynamic";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface Folder {
	name: string;
	path: string;
}

export async function GET() {
	try {
		const result = await cloudinary.api.sub_folders("gallery");

		const folders: Folder[] = result.folders.map((folder: any) => ({
			name: folder.name,
			path: folder.path,
		}));

		return NextResponse.json(folders, {
			headers: {
				"Cache-Control": "public, max-age=60, stale-while-revalidate=300",
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

export async function POST(req: Request) {
	try {
		const body = await req.json();

		if (
			body?.resource_type === "image" &&
			body.public_id.startsWith("gallery/")
		) {
			console.log("Nowy obraz w galerii:", body.public_id);

			await fetch(
				`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATION_SECRET}`
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Błąd obsługi webhooka Cloudinary:", error);
		return NextResponse.json(
			{ error: "Błąd przetwarzania webhooka" },
			{ status: 500 }
		);
	}
}
