import { NextResponse } from "next/server";
import { absoluteUrl, escapeXml } from "@/lib/sitemap-data";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${escapeXml(absoluteUrl("/index.xml"))}</loc>
    <lastmod>2026-07-29</lastmod>
  </sitemap>
  <sitemap>
    <loc>${escapeXml(absoluteUrl("/image-sitemap.xml"))}</loc>
    <lastmod>2026-07-29</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

