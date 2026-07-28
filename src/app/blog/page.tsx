import Link from "next/link";
import { Metadata } from "next";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.blog}`;

export const metadata: Metadata = {
  title: "Teen Patti Loot Blog",
  description:
    "Guides, safety checks, account setup, bonuses, and troubleshooting for Teen Patti Loot APK players in Pakistan. Updated July 2026.",
  keywords: [
    "Teen Patti Loot blog",
    "Teen Patti Loot guide",
    "Teen Patti Loot tips",
    "Teen Patti Loot Pakistan",
    "Teen Patti Loot APK help",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical },
  openGraph: {
    title: "Teen Patti Loot Blog",
    description:
      "Safety guides, login help, bonus breakdowns, and install fixes for Teen Patti Loot players in Pakistan.",
    url: canonical,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE.origin}${SITE.images.logo}`,
        width: 1200,
        height: 630,
        alt: "Teen Patti Loot Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Loot Blog",
    description: "Guides and tips for Teen Patti Loot APK in Pakistan.",
    images: [`${SITE.origin}${SITE.images.hero}`],
  },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Blog", item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href={SITE.routes.home} className="hover:text-[#FFA500] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">
              /
            </li>
            <li aria-current="page" className="text-[#FFC107] font-medium">
              Blog
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFA500]">
          Teen Patti Loot Blog
        </h1>
        <p className="text-gray-300 mb-10 text-lg max-w-3xl">
          Practical guides for Pakistani players — safety checks, account setup, bonus breakdowns,
          and install fixes for the official {SITE.name} APK on {SITE.domain}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE.blogs.map((post, index) => (
            <article
              key={post.slug}
              className={`bg-[#0A1029] px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
                index === 0
                  ? "border-[#FFA500]"
                  : "border-gray-700 hover:border-[#FFA500]"
              }`}
            >
              {index === 0 && (
                <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  LATEST
                </div>
              )}
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">{post.title}</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">{post.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <span>📅 July 2026</span>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </div>
              <Link
                href={`${SITE.routes.blog}/${post.slug}`}
                className="text-[#FFA500] hover:underline font-semibold"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center bg-secondary rounded-xl p-8 border border-gray-800">
          <p className="text-gray-300 mb-6">
            New to {SITE.name}? Start with the official APK, then explore deposit and withdraw
            guides when you are ready.
          </p>
          <a
            href={SITE.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
          >
            <span className="mr-4">DOWNLOAD NOW</span>
            <span className="bg-[#f97316] rounded-full p-3 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
