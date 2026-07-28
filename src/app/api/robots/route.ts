import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

/** Legacy endpoint — canonical robots is /robots.txt */
export function GET() {
  return NextResponse.redirect(new URL("/robots.txt", SITE.origin), 308);
}
