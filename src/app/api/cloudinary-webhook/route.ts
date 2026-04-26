import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

function isAuthorized(request: Request) {
  const headerSecret = request.headers.get("x-webhook-secret");

  const url = new URL(request.url);
  const querySecret = url.searchParams.get("secret");

  const expectedSecret = process.env.CLOUDINARY_WEBHOOK_SECRET;

  if (!expectedSecret) {
    console.warn("Missing CLOUDINARY_WEBHOOK_SECRET env variable");
    return false;
  }

  return headerSecret === expectedSecret || querySecret === expectedSecret;
}

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const publicId = body?.public_id as string | undefined;
    const resourceType = body?.resource_type as string | undefined;

    if (resourceType === "image" && publicId?.startsWith("gallery/")) {
      revalidateTag("cloudinary-gallery");
      revalidatePath("/Albums");

      return NextResponse.json({
        success: true,
        revalidated: "gallery",
        public_id: publicId,
      });
    }

    if (resourceType === "image" && publicId?.startsWith("AboutMe/")) {
      revalidateTag("cloudinary-about");
      revalidatePath("/AboutMe");

      return NextResponse.json({
        success: true,
        revalidated: "about",
        public_id: publicId,
      });
    }

    revalidateTag("cloudinary-home");
    revalidatePath("/");

    return NextResponse.json({
      success: true,
      revalidated: "home",
      public_id: publicId ?? null,
    });
  } catch (error) {
    console.error("Cloudinary webhook error:", error);

    return NextResponse.json(
      { error: "Failed to process Cloudinary webhook" },
      { status: 500 },
    );
  }
}
