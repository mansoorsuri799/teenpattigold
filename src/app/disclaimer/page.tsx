import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.disclaimer}`;

export const metadata: Metadata = {
  title: "Disclaimer — Teen Patti Loot | Legal Information",
  description: `Legal disclaimer for ${SITE.domain}. Important notices about ${SITE.name} guides, third-party apps, and real-money gaming risks in Pakistan.`,
  keywords: ["Teen Patti Loot disclaimer", "legal disclaimer", "gambling disclaimer Pakistan"],
  openGraph: {
    title: "Disclaimer — Teen Patti Loot",
    description: `Legal disclaimer and risk notices for ${SITE.name} content.`,
    url: canonical,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer — Teen Patti Loot",
    description: "Read important legal information before using this site.",
  },
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Disclaimer — ${SITE.name}`,
    description: `Legal disclaimer for ${SITE.domain}.`,
    url: canonical,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Disclaimer", item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li><Link href={SITE.routes.home} className="hover:text-[#FFA500]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium">Disclaimer</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Disclaimer</h1>
          <p className="text-lg text-gray-400">Please read before relying on any content on {SITE.domain}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
          <div className="bg-[#0A1029] border-l-4 border-[#FFA500] p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold text-[#FFC107] mb-2">Important Notice</h2>
            <p className="text-gray-300">
              Information on {SITE.origin} about{" "}
              <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:underline font-semibold">{SITE.name}</Link>{" "}
              is provided for general education and entertainment purposes only.
            </p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">No Financial Guarantees</h2>
              <p className="leading-relaxed">
                We do not promise profits, fixed returns, or successful withdrawals. Card gaming outcomes are uncertain. Any amounts you deposit may be lost. Past experiences described in guides or user reviews do not predict future results.
              </p>
            </section>

            <section className="bg-[#0A1029] rounded-xl p-6 border border-red-500/30">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Real-Money Risk</h2>
              <p className="leading-relaxed mb-4">
                {SITE.name} and similar apps may allow real-money play through JazzCash, EasyPaisa, or bank channels. You are solely responsible for compliance with Pakistani federal and provincial rules that may apply to online gaming or wagering in your area.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Only participate if you are 18 or older</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Never borrow money to play or chase losses</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Set a strict budget and stop when it is reached</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Apps &amp; Links</h2>
              <p className="leading-relaxed">
                {SITE.domain} is an independent information site. We are not necessarily affiliated with the {SITE.name} app developer. Download links may redirect to external hosts. APK files from unofficial mirrors can contain malware — use our documented official flow and verify file size ({SITE.fileSize}) when possible.
              </p>
            </section>

            <section className="bg-[#0A1029] rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                We are not liable for losses, account bans, payment delays, legal penalties, device damage, or disputes arising from your use of third-party platforms. All trademarks, logos, and app names belong to their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Accuracy of Content</h2>
              <p className="leading-relaxed">
                Guides are updated in good faith (current APK {SITE.version}, updated {SITE.updateDate}). App interfaces change without notice. Confirm critical steps inside the live app before transferring money.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Affiliate &amp; Advertising</h2>
              <p className="leading-relaxed">
                Some outbound links may be monetized. Compensation does not influence our obligation to flag risks honestly. We still recommend reading this disclaimer and our{" "}
                <Link href={SITE.routes.privacy} className="text-[#0ea5e9] hover:underline">Privacy Policy</Link>.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-[#0A1029] rounded-xl border-2 border-[#0ea5e9]/40 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Questions?</h2>
            <p className="text-gray-300 mb-4">Contact {SITE.supportEmail} for clarification about this disclaimer.</p>
            <Link
              href={SITE.routes.contact}
              className="inline-block bg-[#FFA500] hover:bg-[#FFC107] text-primary font-bold py-3 px-6 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
