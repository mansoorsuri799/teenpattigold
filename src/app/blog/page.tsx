import Link from "next/link";
import { Metadata } from "next";
import { SITE } from "@/lib/site";
import DownloadButton from "@/components/DownloadButton";

const canonical = `${SITE.origin}${SITE.routes.blog}`;

export const metadata: Metadata = {
  title: "Teen Patti Gold Blog",
  description:
    "Guides for Teen Patti Gold in Pakistan — weekly bonus wagering, password recovery, IP exceeds limit, and OTP SMS fixes. Updated October 2026.",
  keywords: [
    "Teen Patti Gold blog",
    "Teen Patti Gold guide",
    "Teen Patti Gold tips",
    "Teen Patti Gold Pakistan",
    "Teen Patti Gold APK help",
    "getteenpattigold blog",
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
    title: "Teen Patti Gold Blog",
    description:
      "Weekly bonus, login recovery, IP limit, and OTP fixes for Teen Patti Gold players in Pakistan.",
    url: canonical,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE.origin}${SITE.images.logo}`,
        width: 512,
        height: 512,
        alt: SITE.images.appIconAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Gold Blog",
    description: "Guides and tips for Teen Patti Gold APK in Pakistan.",
    images: [`${SITE.origin}${SITE.images.hero}`],
  },
};

function formatBlogDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href={SITE.routes.home} className="hover:text-[#FFA500] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium">Blog</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFA500]">
          Teen Patti Gold Blog
        </h1>
        <p className="text-gray-300 mb-4 text-lg max-w-3xl leading-relaxed">
          Practical guides for Pakistani players — weekly bonus unlock, fast wager games, password recovery, IP limit fixes, JazzCash and EasyPaisa payout timing, and OTP troubleshooting for the official {SITE.name} APK on {SITE.domain}.
        </p>
        <p className="text-gray-400 mb-10 max-w-3xl">
          Each article is written for Android {SITE.os} builds around {SITE.version}. Wallet labels inside the app may differ slightly — confirm steps in your live install before moving money.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE.blogs.map((post, index) => (
            <article
              key={post.slug}
              className={`bg-[#1a140c] px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
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
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
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

        <div className="mt-12 text-center bg-[#1A140C] rounded-xl p-8 border border-gray-800">
          <p className="text-gray-300 mb-6 leading-relaxed">
            New to {SITE.name}? Start with the official APK ({SITE.version}, {SITE.fileSize}), then explore our{" "}
            <Link href={SITE.routes.deposit} className="text-[#0ea5e9] hover:underline">deposit</Link> and{" "}
            <Link href={SITE.routes.withdraw} className="text-[#0ea5e9] hover:underline">withdraw</Link> guides when you are ready to use JazzCash or EasyPaisa.
          </p>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}
