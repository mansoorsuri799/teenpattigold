import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

/** Legacy endpoint — canonical sitemap is /sitemap-index.xml */
export function GET() {
  return NextResponse.redirect(new URL("/sitemap-index.xml", SITE.origin), 308);
}
