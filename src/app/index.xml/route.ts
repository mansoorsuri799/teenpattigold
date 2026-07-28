import { NextResponse } from "next/server";
import {
  SITE_PAGES,
  absoluteUrl,
  escapeXml,
} from "@/lib/sitemap-data";

export function GET() {
  const body = SITE_PAGES.map((page) => {
    return `  <url>
    <loc>${escapeXml(absoluteUrl(page.path))}</loc>
    <lastmod>${escapeXml(page.lastMod)}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
