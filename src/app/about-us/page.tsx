import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.about}`;

export const metadata: Metadata = {
  title: "About Teen Patti Loot | Pakistan Card Gaming Information Hub",
  description: `Learn about ${SITE.name} and ${SITE.domain} — independent guides for APK download, JazzCash deposits, withdrawals, and safe play tips for Pakistani users.`,
  keywords: [
    "About Teen Patti Loot",
    "Teen Patti Loot Pakistan",
    "Teen Patti Loot guide",
    "3 Patti Loot information",
  ],
  alternates: { canonical },
  openGraph: {
    title: "About Teen Patti Loot",
    description: `Independent information about ${SITE.name} for players in Pakistan.`,
    url: canonical,
    siteName: SITE.name,
    type: "website",
    images: [{ url: `${SITE.origin}${SITE.images.logo}`, alt: `About ${SITE.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Teen Patti Loot",
    description: `Mission and purpose of ${SITE.domain} — Teen Patti Loot guides for Pakistan.`,
    images: [`${SITE.origin}${SITE.images.logo}`],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.origin,
      logo: `${SITE.origin}${SITE.images.logo}`,
      description: `${SITE.name} information hub covering APK install, wallet guides, and responsible play notes for Pakistan.`,
      foundingLocation: { "@type": "Country", name: "Pakistan" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "About Us", item: canonical },
    ],
  };

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li><Link href={SITE.routes.home} className="hover:text-[#FFA500]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium">About Us</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About {SITE.name}</h1>
          <p className="text-gray-400 text-lg">Clear guides for Pakistani players — no hype, no guaranteed wins</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Link href={SITE.routes.home} className="flex-shrink-0">
              <div className="relative w-[280px] h-[280px] rounded-lg overflow-hidden bg-[#0A1029]">
                <Image
                  src={SITE.images.hero}
                  alt={`${SITE.name} — Pakistan card gaming guides`}
                  title={`About ${SITE.name}`}
                  width={320}
                  height={320}
                  className="object-contain p-4 w-full h-full"
                  priority
                />
              </div>
            </Link>
            <div className="md:flex-1">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Welcome to{" "}
                <a href={SITE.origin} className="text-[#FFA500] hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                  {SITE.domain}
                </a>
                . We publish practical, up-to-date information about{" "}
                <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:underline font-semibold">{SITE.name}</Link>{" "}
                — the Android card platform used by {SITE.downloadsLabel} players across Pakistan for Teen Patti tables, Rummy rooms, and mini arcade titles.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our writers focus on install safety, JazzCash/EasyPaisa wallet flows, emulator setup for PC, and honest expectations around real-money play. We are an editorial site, not the app developer, and we do not promise earnings.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FFA500] to-[#FFC107] rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">What We Publish</h2>
          <ul className="space-y-3 text-primary/90 text-lg max-w-2xl mx-auto">
            <li>✓ Official APK download steps and version notes ({SITE.version})</li>
            <li>✓ Deposit &amp; withdraw walkthroughs with {SITE.minDeposit} / {SITE.minWithdraw} thresholds</li>
            <li>✓ PC emulator guides for Windows users</li>
            <li>✓ Safety articles and troubleshooting for common install errors</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#0A1029] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#FFA500] mb-3">Editorial Standards</h2>
            <p className="text-gray-300 leading-relaxed">
              Content is written for readers in Pakistan using plain English (and Urdu terms where helpful). We update pages when APK versions or payment flows change — last refresh aligned with {SITE.updateDate}.
            </p>
          </div>
          <div className="bg-[#0A1029] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#FFA500] mb-3">Responsible Play</h2>
            <p className="text-gray-300 leading-relaxed">
              Card games involve financial risk. We encourage budgets, breaks, and awareness of local laws. If play stops being fun, pause and seek support.
            </p>
          </div>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Questions or Corrections?</h2>
          <p className="text-gray-300 mb-6">
            Reach us at{" "}
            <a href={`mailto:${SITE.supportEmail}`} className="text-[#0ea5e9] hover:underline">{SITE.supportEmail}</a>{" "}
            or visit the contact page.
          </p>
          <Link
            href={SITE.routes.contact}
            className="inline-block bg-[#FFA500] hover:bg-[#FFC107] text-primary font-bold py-3 px-8 rounded-full transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}
