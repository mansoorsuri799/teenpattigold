import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.download}`;

export const metadata: Metadata = {
  title: "Download Teen Patti Loot APK Android | Official Free APK 2026",
  description: `Download Teen Patti Loot APK free for Android ${SITE.version}. ${SITE.fileSize}, ${SITE.os}. Play Teen Patti, Rummy & mini games. JazzCash & EasyPaisa supported. ${SITE.downloadsLabel} downloads.`,
  keywords: [
    "Download Teen Patti Loot",
    "Teen Patti Loot APK",
    "Teen Patti Loot download",
    "Teen Patti Loot Android",
    "3 Patti Loot APK Pakistan",
    "Teen Patti Loot latest version",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical },
  openGraph: {
    title: "Download Teen Patti Loot APK Android",
    description: `Get the official Teen Patti Loot APK (${SITE.version}, ${SITE.fileSize}). Trusted by ${SITE.downloadsLabel} players in Pakistan.`,
    url: canonical,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE.origin}${SITE.images.logo}`,
        width: 1200,
        height: 630,
        alt: "Download Teen Patti Loot APK for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Teen Patti Loot APK Android",
    description: `Official Teen Patti Loot APK ${SITE.version} — free download for Android in Pakistan.`,
    images: [`${SITE.origin}${SITE.images.hero}`],
  },
};

function DownloadButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center px-10 py-5 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl ${className}`}
    >
      <span className="mr-4">DOWNLOAD NOW</span>
      <div className="bg-[#f97316] rounded-full p-3 group-hover:scale-110 transition-transform">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </a>
  );
}

export default function DownloadPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    operatingSystem: SITE.os,
    applicationCategory: "GameApplication",
    offers: {
      "@type": "Offer",
      price: SITE.price,
      priceCurrency: SITE.currency,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.ratingValue,
      ratingCount: SITE.ratingCount,
      bestRating: "5",
    },
    downloadUrl: SITE.downloadUrl,
    softwareVersion: SITE.version,
    fileSize: SITE.fileSize,
    datePublished: "2026-07-29",
    description: `Download Teen Patti Loot APK for Android. Play card games with JazzCash and EasyPaisa wallet support in Pakistan.`,
    image: `${SITE.origin}${SITE.images.logo}`,
    author: {
      "@type": "Organization",
      name: SITE.developer,
      url: SITE.origin,
    },
    inLanguage: ["en", "ur"],
    countriesSupported: "PK",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Install Teen Patti Loot APK on Android",
    description: "Step-by-step guide to download and install Teen Patti Loot APK on Android devices in Pakistan.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Download the APK",
        text: "Tap DOWNLOAD NOW on this page to fetch the latest Teen Patti Loot APK file.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Allow unknown sources",
        text: "Open Android Settings → Security/Privacy → Install unknown apps → allow your browser or file manager.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Install the APK",
        text: "Open the downloaded file from Notifications or Downloads and tap Install.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Open and register",
        text: "Launch Teen Patti Loot, complete OTP login, and explore games at your own pace.",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Download Teen Patti Loot", item: canonical },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
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
            <li aria-current="page" className="text-[#FFC107] font-medium">
              Download Teen Patti Loot
            </li>
          </ol>
        </nav>
      </div>

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Download </span>
            <span className="text-[#FFA500]">Teen Patti Loot APK</span>
            <span className="text-white"> for Android</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
            Get the official {SITE.name} APK ({SITE.version}) built for Pakistani players. Play Teen Patti tables, Rummy rooms, and arcade-style mini games from one app — wallet top-ups via JazzCash and EasyPaisa when you choose to add funds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8" aria-label={`Rating: ${SITE.ratingValue} out of 5 based on ${SITE.ratingCountLabel} ratings`}>
            <div className="flex text-[#FFC107] text-xl" aria-hidden="true">
              {"★".repeat(4)}
              <span className="text-[#FFC107]/50">★</span>
            </div>
            <span className="text-white font-semibold">{SITE.ratingValue} / 5</span>
            <span className="text-gray-400">({SITE.ratingCountLabel} ratings · {SITE.downloadsLabel} installs)</span>
          </div>

          <DownloadButton />
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src={SITE.images.hero}
            alt={`${SITE.name} APK download — Teen Patti and card games for Android in Pakistan`}
            title={`Download ${SITE.name} APK ${SITE.version}`}
            width={320}
            height={320}
            className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">APK File Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", SITE.name],
                ["Version", SITE.version],
                ["File Size", SITE.fileSize],
                ["Required OS", SITE.os],
                ["Last Update", SITE.updateDate],
                ["Languages", SITE.languages],
                ["Price", `Free (${SITE.price} ${SITE.currency})`],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                  <td className="py-4 px-6 font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <DownloadButton />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="install-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
            Install Teen Patti Loot on Android
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "Step 1 — Grab the APK",
                color: "#FFA500",
                body: "Use the DOWNLOAD NOW button above. The file saves to your Downloads folder — usually under 60 seconds on 4G.",
              },
              {
                title: "Step 2 — Enable Unknown Sources",
                color: "#4ade80",
                body: 'Go to Settings → Security (or Privacy) → Install unknown apps. Turn it on for Chrome, Files, or whichever app opens the APK. On newer Android versions this appears per-app rather than a global toggle.',
              },
              {
                title: "Step 3 — Run the Installer",
                color: "#60a5fa",
                body: "Tap the APK notification or open Downloads, select Teen Patti Loot, and confirm Install. Wait until Android shows App installed.",
              },
              {
                title: "Step 4 — Sign In Safely",
                color: "#f97316",
                body: "Open the app, verify your mobile number with OTP, and bind email if prompted. Outcomes vary by game — only add money you can afford to lose.",
              },
            ].map((step) => (
              <div key={step.title} className="bg-[#0A1029] rounded-lg p-6 border-l-4" style={{ borderColor: step.color }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">System Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Operating System", desc: SITE.os },
            { title: "Storage", desc: `At least ${SITE.fileSize} free space plus cache headroom` },
            { title: "RAM", desc: "2 GB minimum; 3 GB+ recommended for smooth tables" },
            { title: "Network", desc: "Stable Wi‑Fi or mobile data for login and wallet actions" },
          ].map((item) => (
            <div key={item.title} className="bg-[#0A1029] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500] text-center">Related Guides</h2>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:text-[#FFA500] font-medium transition-colors">Home</Link>
          <Link href={SITE.routes.deposit} className="text-[#0ea5e9] hover:text-[#FFA500] font-medium transition-colors">Deposit Guide</Link>
          <Link href={SITE.routes.withdraw} className="text-[#0ea5e9] hover:text-[#FFA500] font-medium transition-colors">Withdraw Guide</Link>
          <Link href={SITE.routes.pc} className="text-[#0ea5e9] hover:text-[#FFA500] font-medium transition-colors">Play on PC</Link>
        </div>
        <div className="flex justify-center mt-10">
          <DownloadButton />
        </div>
      </section>
    </article>
  );
}
