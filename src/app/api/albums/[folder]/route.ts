import { NextResponse } from "next/server";

import { getAlbumPhotos } from "@/lib/gallery.service";

export const revalidate = 3600;

export async function GET(
  _request: Request,
  { params }: { params: { folder: string } },
) {
  try {
    const folder = decodeURIComponent(params.folder);
    const photos = await getAlbumPhotos(folder);

    return NextResponse.json(photos, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching album photos:", error);

    return NextResponse.json(
      { error: "Failed to fetch album photos" },
      { status: 500 },
    );
  }
}
