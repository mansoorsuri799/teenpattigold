import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.download}`;

export const metadata: Metadata = {
  title: "Download Teen Patti Gold APK Android | Official Free APK 2026",
  description: `Download Teen Patti Gold APK free for Android ${SITE.version}. ${SITE.fileSize}, ${SITE.os}. Play Teen Patti, Rummy & mini games. JazzCash & EasyPaisa supported. ${SITE.downloadsLabel} downloads.`,
  keywords: [
    "Download Teen Patti Gold",
    "Teen Patti Gold APK",
    "Teen Patti Gold download",
    "Teen Patti Gold Android",
    "3 Patti Gold APK Pakistan",
    "Teen Patti Gold latest version",
    "getteenpattigold APK",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical },
  openGraph: {
    title: "Download Teen Patti Gold APK Android",
    description: `Get the official Teen Patti Gold APK (${SITE.version}, ${SITE.fileSize}). Trusted by ${SITE.downloadsLabel} players in Pakistan.`,
    url: canonical,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE.origin}${SITE.images.logo}`,
        width: 512,
        height: 512,
        alt: "Download Teen Patti Gold APK for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Teen Patti Gold APK Android",
    description: `Official Teen Patti Gold APK ${SITE.version} — free download for Android in Pakistan.`,
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
    description: `Download Teen Patti Gold APK for Android. Play card games with JazzCash and EasyPaisa wallet support in Pakistan.`,
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
    name: "How to Install Teen Patti Gold APK on Android",
    description: "Step-by-step guide to download and install Teen Patti Gold APK on Android devices in Pakistan.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Download the APK",
        text: "Tap DOWNLOAD NOW on this page to fetch the latest Teen Patti Gold APK file.",
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
        text: "Launch Teen Patti Gold, complete OTP login, and explore games at your own pace.",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Download Teen Patti Gold", item: canonical },
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
              Download Teen Patti Gold
            </li>
          </ol>
        </nav>
      </div>

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Download </span>
            <span className="text-[#FFA500]">Teen Patti Gold APK</span>
            <span className="text-white"> for Android</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
            Get the official {SITE.name} APK ({SITE.version}) built for Pakistani players. Enjoy classic Teen Patti tables, Rummy rooms, and arcade-style side games from one polished app — with optional JazzCash and EasyPaisa wallet top-ups when you choose to play with real PKR.
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

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#1a140c] rounded-xl p-8 md:p-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Why Download from {SITE.domain}?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Clone APKs circulate on WhatsApp groups and random file-hosting sites. Those repacks may steal OTP codes, inject ads, or fail wallet checks. This page documents the safe path: fetch {SITE.name} from our verified download button, confirm the file size matches {SITE.fileSize}, and install only on your own Android device.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The app is free to install ({SITE.price} {SITE.currency}). Real-money play is optional. If you later add funds, use our{" "}
            <Link href={SITE.routes.deposit} className="text-[#0ea5e9] hover:underline">deposit guide</Link> and never exceed a budget you set before opening the lobby.
          </p>
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
                ["Category", SITE.category],
                ["Developer", SITE.developer],
                ["Price", `Free (${SITE.price} ${SITE.currency})`],
                ["Min Deposit", SITE.minDeposit],
                ["Min Withdraw", SITE.minWithdraw],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-[#1A140C]/50" : "bg-[#0C0906]/50"}>
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

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">What You Get After Install</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Classic Teen Patti tables",
              desc: "Public and private 3 Patti rooms with blind, chaal, and show-down flows familiar to Pakistani card players.",
            },
            {
              title: "Rummy & mini games",
              desc: "Side lobbies for Rummy variants and quick arcade titles when you want a break from the main table.",
            },
            {
              title: "Daily bonus screen",
              desc: "Check-in rewards and promo tiles — always read wagering rules before claiming bonus chips.",
            },
            {
              title: "Local wallet rails",
              desc: `JazzCash, EasyPaisa, and bank options when shown in Wallet. Minimum top-up from ${SITE.minDeposit}.`,
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#1a140c] rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Image
            src={SITE.images.games}
            alt={`${SITE.name} game lobby — Teen Patti and Rummy tables`}
            title={`${SITE.name} games interface`}
            width={1200}
            height={560}
            className="object-contain rounded-xl w-full max-w-3xl h-auto drop-shadow-2xl"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="install-steps">
        <div className="bg-[#1A140C] rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
            Install Teen Patti Gold on Android
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "Step 1 — Download the APK",
                color: "#FFA500",
                body: "Tap DOWNLOAD NOW above. Chrome or your default browser saves the file to Downloads — usually under a minute on 4G. Note the filename and expected size (" + SITE.fileSize + ") before opening it.",
              },
              {
                title: "Step 2 — Enable Unknown Sources",
                color: "#4ade80",
                body: "Go to Settings → Security or Privacy → Install unknown apps. Enable permission for Chrome, Files, or whichever app will open the APK. On Android 13+, this is per-app, not a single global switch.",
              },
              {
                title: "Step 3 — Run the Installer",
                color: "#60a5fa",
                body: "Open the download notification or browse to Downloads, tap the Teen Patti Gold APK, and confirm Install. Wait until Android shows App installed — do not force-close mid-install.",
              },
              {
                title: "Step 4 — First Launch & OTP Login",
                color: "#f97316",
                body: "Open the app, enter your Pakistani mobile number, and verify OTP. Bind email in Profile if prompted — it helps with password recovery and withdrawal eligibility later.",
              },
              {
                title: "Step 5 — Optional Wallet Setup",
                color: "#a78bfa",
                body: "You can explore free tables first. When ready to add PKR, open Wallet and follow our deposit walkthrough. Outcomes vary; only stake money you can afford to lose.",
              },
            ].map((step) => (
              <div key={step.title} className="bg-[#1A140C] rounded-lg p-6 border-l-4" style={{ borderColor: step.color }}>
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
            { title: "Storage", desc: `At least ${SITE.fileSize} free space plus cache headroom for updates` },
            { title: "RAM", desc: "2 GB minimum; 3 GB+ recommended for smooth multi-table sessions" },
            { title: "Network", desc: "Stable Wi‑Fi or mobile data for OTP login and wallet actions" },
            { title: "SIM", desc: "Active Pakistani number for OTP — use the SIM registered on JazzCash/EasyPaisa if you plan to deposit" },
            { title: "Permissions", desc: "Storage for APK install; notifications optional for promo alerts" },
          ].map((item) => (
            <div key={item.title} className="bg-[#1a140c] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Install Troubleshooting</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "Parse error or package invalid",
              a: "Re-download from this page. Corrupted downloads often come from interrupted connections or mirror sites.",
            },
            {
              q: "App not installed — conflicting package",
              a: "Uninstall any older Teen Patti Gold build first, then install the fresh APK. Do not stack modded versions.",
            },
            {
              q: "OTP not arriving",
              a: "Wait 60 seconds, toggle airplane mode, and retry. See our blog post on OTP delays for deeper fixes.",
            },
            {
              q: "Play on laptop instead?",
              a: "Use an Android emulator — full steps on our PC guide.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#1A140C] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
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
          <Link href={SITE.routes.blog} className="text-[#0ea5e9] hover:text-[#FFA500] font-medium transition-colors">Blog</Link>
        </div>
        <div className="flex justify-center mt-10">
          <DownloadButton />
        </div>
      </section>
    </article>
  );
}
