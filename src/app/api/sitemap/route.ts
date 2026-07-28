import { NextResponse } from "next/server";

/** Legacy endpoint — canonical sitemap is /sitemap-index.xml */
export function GET() {
  return NextResponse.redirect(
    new URL("/sitemap-index.xml", "https://teenpattilootapp.com.pk"),
    308
  );
}
