import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.contact}`;

export const metadata: Metadata = {
  title: "Contact Us — Teen Patti Loot Support & Help",
  description: `Contact the ${SITE.name} editorial team at ${SITE.supportEmail}. Questions about APK guides, deposits, privacy, or site content.`,
  keywords: "contact Teen Patti Loot, Teen Patti Loot support, Teen Patti Loot email",
  openGraph: {
    title: "Contact Us — Teen Patti Loot",
    description: `Get help with ${SITE.name} guides and site content.`,
    url: canonical,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Teen Patti Loot",
    description: `Email ${SITE.supportEmail} for support.`,
  },
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.origin,
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE.supportEmail,
        contactType: "Customer Support",
        availableLanguage: ["English", "Urdu"],
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li><Link href={SITE.routes.home} className="hover:text-[#FFA500]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium">Contact Us</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-lg text-gray-400">We respond to guide updates, corrections, and general site questions</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Use this page for questions about{" "}
            <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:underline font-semibold">{SITE.name}</Link>{" "}
            content on {SITE.domain} — including{" "}
            <Link href={SITE.routes.download} className="text-[#0ea5e9] hover:underline">APK download</Link>,{" "}
            <Link href={SITE.routes.privacy} className="text-[#0ea5e9] hover:underline">privacy policy</Link>, and{" "}
            <Link href={SITE.routes.about} className="text-[#0ea5e9] hover:underline">about us</Link>.
            For in-app wallet or account issues, use the support channel inside the app when available.
          </p>

          <div className="bg-[#0A1029] rounded-xl p-6 md:p-8 border-2 border-[#0ea5e9]/40 mb-10">
            <div className="flex justify-center mb-4">
              <svg aria-hidden="true" className="w-14 h-14 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4 text-white">Email Support</h2>
            <p className="text-center text-gray-400 mb-4">Typical reply within 1–3 business days</p>
            <div className="flex justify-center">
              <a
                href={`mailto:${SITE.supportEmail}`}
                aria-label={`Email ${SITE.name} support`}
                className="inline-flex flex-wrap items-center justify-center gap-2 bg-[#FFA500] hover:bg-[#FFC107] text-primary font-bold py-3 px-6 rounded-full transition-all"
              >
                {SITE.supportEmail}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Download Guide", href: SITE.routes.download, desc: "APK install help" },
            { title: "Privacy Policy", href: SITE.routes.privacy, desc: "How we handle data" },
            { title: "Disclaimer", href: SITE.routes.disclaimer, desc: "Legal notices" },
          ].map((card) => (
            <div key={card.title} className="bg-secondary rounded-xl shadow-lg p-6 text-center">
              <div className="bg-[#0A1029] rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#FFC107] text-xl">→</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
              <p className="text-gray-400 mb-4">{card.desc}</p>
              <Link href={card.href} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
                View →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
