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

function revalidateCloudinaryCache() {
  revalidateTag("cloudinary-gallery");
  revalidateTag("cloudinary-about");
  revalidateTag("cloudinary-home");

  revalidatePath("/");
  revalidatePath("/Albums");
  revalidatePath("/AboutMe");
}

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let body: unknown = null;

    try {
      body = await request.json();
    } catch {
      body = null;
    }

    revalidateCloudinaryCache();

    return NextResponse.json({
      success: true,
      revalidated: true,
      body,
    });
  } catch (error) {
    console.error("Cloudinary webhook error:", error);

    return NextResponse.json(
      { error: "Failed to process Cloudinary webhook" },
      { status: 500 },
    );
  }
}
