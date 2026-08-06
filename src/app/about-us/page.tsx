import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.about}`;

export const metadata: Metadata = {
  title: "About Teen Patti Gold | Pakistan Card Gaming Information Hub",
  description: `Learn about ${SITE.name} and ${SITE.domain} — independent guides for APK download, JazzCash deposits, withdrawals, and safe play tips for Pakistani users.`,
  keywords: [
    "About Teen Patti Gold",
    "Teen Patti Gold Pakistan",
    "Teen Patti Gold guide",
    "3 Patti Gold information",
    "getteenpattigold about",
  ],
  alternates: { canonical },
  openGraph: {
    title: "About Teen Patti Gold",
    description: `Independent information about ${SITE.name} for players in Pakistan.`,
    url: canonical,
    siteName: SITE.name,
    type: "website",
    images: [{ url: `${SITE.origin}${SITE.images.logo}`, alt: `About ${SITE.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Teen Patti Gold",
    description: `Mission and purpose of ${SITE.domain} — Teen Patti Gold guides for Pakistan.`,
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
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href={SITE.routes.home} className="hover:text-[#FFA500] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium">About Us</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About {SITE.name}</h1>
          <p className="text-gray-400 text-lg">Clear guides for Pakistani players — no hype, no guaranteed wins</p>
        </div>

        <div className="bg-[#1A140C] rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Link href={SITE.routes.home} className="flex-shrink-0">
              <div className="relative w-[280px] h-[280px] rounded-lg overflow-hidden bg-[#1a140c]">
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
                — the Android card platform trusted by {SITE.downloadsLabel} players across Pakistan for Teen Patti tables, Rummy rooms, daily bonuses, and mini arcade titles.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Our writers focus on install safety, JazzCash and EasyPaisa wallet flows, emulator setup for PC users, and honest expectations around real-money play. We explain what the app can and cannot do — without promising profits or fixed withdrawal times.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {SITE.domain} is an editorial information site. We are not necessarily the app developer unless explicitly stated. Download links may redirect to external hosts vetted for the current {SITE.version} build ({SITE.fileSize}).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FFA500] to-[#FFC107] rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">What We Publish</h2>
          <ul className="space-y-3 text-primary/90 text-lg max-w-2xl mx-auto">
            <li>✓ Official APK download steps and version notes ({SITE.version}, updated {SITE.updateDate})</li>
            <li>✓ Deposit &amp; withdraw walkthroughs with {SITE.minDeposit} / {SITE.minWithdraw} thresholds</li>
            <li>✓ PC emulator guides for Windows users who prefer a larger screen</li>
            <li>✓ Blog articles on OTP delays, IP limits, password recovery, and weekly bonus wagering</li>
            <li>✓ Safety reminders about clone APKs, WhatsApp agent scams, and responsible budgets</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#1a140c] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-[#FFA500] mb-3">Editorial Standards</h2>
            <p className="text-gray-300 leading-relaxed">
              Content is written for readers in Pakistan in plain English. We refresh pages when APK versions or payment flows change. Screenshots use official {SITE.name} assets hosted on {SITE.domain}.
            </p>
          </div>
          <div className="bg-[#1a140c] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-[#FFA500] mb-3">Who We Serve</h2>
            <p className="text-gray-300 leading-relaxed">
              New players looking for a safe install path, experienced users troubleshooting wallet delays, and PC gamers setting up emulators. Rated {SITE.ratingValue}/5 by {SITE.ratingCountLabel} users in app stores — we cite that figure to match public listings, not as an endorsement of earnings.
            </p>
          </div>
          <div className="bg-[#1a140c] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-[#FFA500] mb-3">Responsible Play</h2>
            <p className="text-gray-300 leading-relaxed">
              Card games involve financial risk. We encourage strict budgets, regular breaks, and awareness of local laws. If play stops being fun, pause and seek support. Our disclaimer page expands on liability limits.
            </p>
          </div>
          <div className="bg-[#1a140c] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-[#FFA500] mb-3">Corrections Welcome</h2>
            <p className="text-gray-300 leading-relaxed">
              App interfaces change without notice. If a step on our site no longer matches your screen, email {SITE.supportEmail} with a screenshot — we update guides when readers report drift.
            </p>
          </div>
        </div>

        <div className="bg-[#1A140C] rounded-2xl shadow-xl p-8 text-center">
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
      </div>
    </article>
  );
}
