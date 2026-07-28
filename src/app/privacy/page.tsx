import { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.privacy}`;

export const metadata: Metadata = {
  title: "Privacy Policy — Teen Patti Loot | Data Protection",
  description: `Privacy policy for ${SITE.domain}. How we collect, use, and protect information when you read ${SITE.name} guides and use our contact form.`,
  keywords: ["Teen Patti Loot privacy policy", "privacy", "data protection", SITE.domain],
  openGraph: {
    title: "Privacy Policy — Teen Patti Loot",
    description: `How ${SITE.name} handles your data on ${SITE.domain}.`,
    url: canonical,
    siteName: SITE.name,
    type: "website",
  },
  alternates: { canonical },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li><Link href={SITE.routes.home} className="hover:text-[#FFA500]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium">Privacy Policy</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-lg text-gray-400">Last Updated: {SITE.updateDate}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
          <div className="bg-[#0A1029] border-l-4 border-[#FFA500] rounded-r-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
            <p className="text-gray-300 mb-4">
              This Privacy Policy describes how{" "}
              <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:underline font-semibold">{SITE.name}</Link>{" "}
              ({SITE.domain}) collects and uses information when you visit our website. We operate an informational hub about the {SITE.name} Android app — we are not the app publisher unless explicitly stated.
            </p>
            <p className="text-gray-300">
              By using {SITE.origin}, you agree to the practices outlined here. If you disagree, please discontinue use of the site.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-6 text-white">Information We Collect</h2>

          <div className="bg-[#0A1029] rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-[#FFC107]">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Name, email, subject, and message when you submit our contact form</li>
              <li>Any details you voluntarily include in support correspondence to {SITE.supportEmail}</li>
            </ul>
          </div>

          <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#FFC107]">Automatically Collected Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>IP address, browser type, device type, and referring URLs</li>
              <li>Pages viewed, time on page, and approximate region (derived from IP)</li>
              <li>Cookies and similar technologies for analytics and site performance</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-white">How We Use Information</h2>
          <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Respond to contact form submissions and email inquiries</li>
              <li>Improve content accuracy for download, deposit, and withdraw guides</li>
              <li>Monitor traffic patterns and fix technical issues</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We do not sell your personal information. We do not guarantee earnings or outcomes related to third-party apps linked from this site.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-white">Third-Party Services</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Our site may link to external download hosts, payment wallets (JazzCash, EasyPaisa), analytics providers, and social platforms. Those services have their own privacy policies. Data you share inside the {SITE.name} mobile app is governed by the app operator, not necessarily by this website.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-white">Data Retention &amp; Security</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Contact messages are retained only as long as needed to resolve your request. We apply reasonable technical measures to protect data on {SITE.domain}, but no online transmission is 100% secure.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-white">Your Rights</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            You may request access, correction, or deletion of personal data we hold from web interactions by emailing{" "}
            <a href={`mailto:${SITE.supportEmail}`} className="text-[#0ea5e9] hover:underline">{SITE.supportEmail}</a>.
            We will respond within a reasonable timeframe subject to legal requirements.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-white">Children</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            This site is intended for adults (18+) interested in card gaming information. We do not knowingly collect data from minors.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-white">Policy Updates</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            We may revise this policy when our practices or legal requirements change. The &quot;Last Updated&quot; date at the top reflects the latest revision.
          </p>

          <div className="mt-10 p-6 bg-[#0A1029] rounded-xl border border-[#0ea5e9]/30">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
            <p className="text-gray-300 mb-4">Privacy questions? Email us:</p>
            <a href={`mailto:${SITE.supportEmail}`} className="text-[#FFA500] hover:underline font-semibold">{SITE.supportEmail}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
