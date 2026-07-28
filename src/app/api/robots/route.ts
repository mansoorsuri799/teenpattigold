import { NextResponse } from "next/server";

/** Legacy endpoint — canonical robots is /robots.txt */
export function GET() {
  return NextResponse.redirect(
    new URL("/robots.txt", "https://teenpattilootapp.com.pk"),
    308
  );
}
