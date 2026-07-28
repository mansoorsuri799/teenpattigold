import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export function GET() {
  const robotsTxt = `# robots.txt for ${SITE.domain}

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE.origin}/sitemap-index.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
