import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { SITE } from "@/lib/site";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";

const META_DESCRIPTION =
  "Download Teen Patti Loot APK for Android in Pakistan 2026. Play 3 Patti Loot with JazzCash & EasyPaisa deposits, fast PKR withdrawals, and free bonuses.";

const heroImageUrl = `${SITE.origin}${SITE.images.hero}`;
const logoImageUrl = `${SITE.origin}${SITE.images.logo}`;
const ogImageUrl = `${SITE.origin}${SITE.images.og}`;
const ogSquareUrl = `${SITE.origin}${SITE.images.ogSquare}`;
export const metadata: Metadata = {
  title: "Teen Patti Loot APK Download Pakistan 2026",
  description: META_DESCRIPTION,
  keywords: [
    "Teen Patti Loot",
    "3 Patti Loot",
    "Teen Patti Loot APK",
    "Teen Patti Loot download",
    "Teen Patti Loot Pakistan",
    "3 Patti Loot APK",
    "Teen Patti Loot JazzCash",
    "Teen Patti Loot EasyPaisa",
    "Teen Patti Loot 2026",
    "download Teen Patti Loot",
    "Teen Patti Loot Android",
    "Teen Patti Loot real money",
    "PKR card game app",
    "online Teen Patti Pakistan",
  ],
  alternates: {
    canonical: SITE.origin,
  },
  openGraph: {
    title: "Teen Patti Loot APK Download Pakistan 2026",
    description: META_DESCRIPTION,
    url: SITE.origin,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: heroImageUrl,
        width: 512,
        height: 512,
        alt: `${SITE.name} – Official APK for Android in Pakistan`,
      },
      {
        url: ogImageUrl,
        width: 512,
        height: 512,
        alt: `${SITE.name} – Download APK Pakistan 2026`,
      },
      {
        url: ogSquareUrl,
        width: 512,
        height: 512,
        alt: `${SITE.name} – 3 Patti Loot card game app`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Loot APK Download Pakistan 2026",
    description: META_DESCRIPTION,
    images: [heroImageUrl, ogImageUrl],
  },
};

const FAQ_ITEMS = [
  {
    question: "What is Teen Patti Loot?",
    answer:
      "Teen Patti Loot is a mobile card and casino-style gaming app for Pakistani Android users. It combines classic Teen Patti (3 Patti) tables with slots, Dragon vs Tiger, Andar Bahar, and other games. Players can add PKR via JazzCash or EasyPaisa and request withdrawals to local wallets or bank accounts.",
  },
  {
    question: "How do I download Teen Patti Loot APK in Pakistan?",
    answer:
      `Visit ${SITE.domain}, tap DOWNLOAD NOW, and save the APK to your phone. Enable Install from Unknown Sources in Android settings, open the file, and complete installation. The app is free and works on ${SITE.os}.`,
  },
  {
    question: "Is Teen Patti Loot safe to use?",
    answer:
      "Teen Patti Loot uses encrypted connections for account and payment data. Always download from the official website, avoid cloned APKs, and never share your OTP or password. Online gaming rules vary by region—check local laws before playing with real money.",
  },
  {
    question: "What is the minimum deposit on Teen Patti Loot?",
    answer: `The minimum deposit on Teen Patti Loot starts from ${SITE.minDeposit}, depending on the payment channel shown in the Wallet section.`,
  },
  {
    question: "What is the minimum withdrawal on Teen Patti Loot?",
    answer: `Withdrawals typically start from ${SITE.minWithdraw}. JazzCash, EasyPaisa, and bank transfer options are listed inside the app with current limits.`,
  },
  {
    question: "Which payment methods does Teen Patti Loot support?",
    answer:
      "Teen Patti Loot supports JazzCash, EasyPaisa, and bank card transfers for deposits and withdrawals in PKR. Processing times depend on the method and verification status.",
  },
  {
    question: "Can I play Teen Patti Loot on iPhone?",
    answer:
      "The official Teen Patti Loot APK is built for Android. iPhone users may explore the PC guide or check the official site for any updated iOS options.",
  },
  {
    question: "How do Teen Patti Loot bonuses work?",
    answer:
      "New users may receive welcome chips or deposit-match offers. Daily login rewards, referral commissions, and VIP rebates are also available. Bonus terms and wagering requirements are shown before you claim each offer.",
  },
  {
    question: "How do I contact Teen Patti Loot support?",
    answer: `Use in-app live chat, WhatsApp if listed in the app, or email ${SITE.supportEmail}. Support can help with login, deposits, withdrawals, and install issues.`,
  },
  {
    question: "Can I lose money on Teen Patti Loot?",
    answer:
      "Yes. Real-money games carry financial risk. Set a budget, play responsibly, and treat winnings as uncertain—not guaranteed income.",
  },
] as const;

const INSTALL_STEPS = [
  {
    name: "Download the APK",
    text: `Open ${SITE.domain} in your mobile browser and tap DOWNLOAD NOW. Wait until the Teen Patti Loot APK (${SITE.fileSize}) finishes downloading.`,
  },
  {
    name: "Allow unknown sources",
    text: "Go to Settings → Security (or Apps → Special access) and enable Install unknown apps for your browser or file manager.",
  },
  {
    name: "Install the APK",
    text: "Open your Downloads folder, tap the Teen Patti Loot APK file, confirm permissions, and wait for installation to complete.",
  },
  {
    name: "Launch and register",
    text: "Open Teen Patti Loot, sign up with your mobile number or continue as guest, then explore games and wallet options.",
  },
] as const;

function DownloadButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group ${className}`}
    >
      <span>DOWNLOAD NOW</span>
      <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </div>
    </a>
  );
}

function StarRating() {
  const starPath =
    "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base"
      aria-label={`Rated ${SITE.ratingValue} out of 5 from ${SITE.ratingCountLabel} ratings`}
    >
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4].map((star) => (
          <svg key={star} className="w-5 h-5 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d={starPath} />
          </svg>
        ))}
        <span className="relative w-5 h-5 inline-block" aria-hidden="true">
          <svg className="absolute inset-0 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d={starPath} />
          </svg>
          <svg className="absolute inset-0 w-5 h-5 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: "inset(0 50% 0 0)" }}>
            <path d={starPath} />
          </svg>
        </span>
        <span className="ml-1 text-white font-bold">{SITE.ratingValue}</span>
      </div>
      <span className="text-gray-400">·</span>
      <span className="text-gray-300">{SITE.ratingCountLabel} ratings</span>
      <span className="text-gray-400">·</span>
      <span className="text-gray-300">Free · Android · Game</span>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
      <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors list-none">
        <span>{question}</span>
        <span className="transition group-open:rotate-180 shrink-0 ml-4">
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>
      <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">{answer}</div>
    </details>
  );
}

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.origin}/#website`,
        url: `${SITE.origin}/`,
        name: SITE.name,
        description:
          "Official Teen Patti Loot APK download site for Pakistan — 3 Patti Loot games, JazzCash & EasyPaisa wallet support.",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE.origin}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.origin}/#webpage`,
        url: `${SITE.origin}/`,
        name: "Teen Patti Loot APK Download Pakistan 2026",
        description: META_DESCRIPTION,
        isPartOf: { "@id": `${SITE.origin}/#website` },
        about: { "@id": `${SITE.origin}/#software` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${heroImageUrl}#primary`,
          url: heroImageUrl,
          width: 512,
          height: 512,
          name: SITE.name,
          description: `${SITE.name} official brand image for Android APK download in Pakistan.`,
          ...imageObjectLicensing,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#introduction",
            "#features",
            "#download-install",
            "#registration",
            "#login",
            "#deposit-withdraw",
            "#faq",
          ],
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${heroImageUrl}#primary`,
        url: heroImageUrl,
        contentUrl: heroImageUrl,
        name: SITE.name,
        description: `${SITE.name} – 3 Patti Loot card game APK for Pakistani Android players.`,
        width: 512,
        height: 512,
        ...imageObjectLicensing,
      },
      {
        "@type": "Organization",
        "@id": `${SITE.origin}/#organization`,
        name: SITE.developer,
        url: `${SITE.origin}/`,
        logo: {
          "@type": "ImageObject",
          url: logoImageUrl,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
          creditText: `${SITE.name} logo`,
        },
        sameAs: [SITE.facebookUrl],
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE.supportEmail,
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE.origin}/#software`,
        name: SITE.name,
        operatingSystem: SITE.os,
        applicationCategory: "GameApplication",
        image: heroImageUrl,
        logo: logoImageUrl,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.ratingValue,
          ratingCount: SITE.ratingCount,
          bestRating: "5",
        },
        offers: {
          "@type": "Offer",
          price: SITE.price,
          priceCurrency: SITE.currency,
        },
        downloadUrl: SITE.downloadUrl,
        softwareVersion: SITE.version,
        fileSize: SITE.fileSize,
        description: META_DESCRIPTION,
        screenshot: [
          heroImageUrl,
          `${SITE.origin}${SITE.images.game}`,
          `${SITE.origin}${SITE.images.bonus}`,
          `${SITE.origin}${SITE.images.deposit}`,
          `${SITE.origin}${SITE.images.withdraw}`,
          `${SITE.origin}${SITE.images.refer}`,
          `${SITE.origin}${SITE.images.userAccount}`,
          `${SITE.origin}${SITE.images.pakistan}`,
        ],
        author: { "@id": `${SITE.origin}/#organization` },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE.origin}/#howto-install`,
        name: "How to Download and Install Teen Patti Loot APK on Android",
        description:
          "Step-by-step guide to download, install, and open Teen Patti Loot on Android devices in Pakistan.",
        totalTime: "PT5M",
        tool: [{ "@type": "HowToTool", name: "Android smartphone" }],
        step: INSTALL_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.origin}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  const screenshots = [
    { src: SITE.images.game, alt: "Teen Patti Loot game lobby and tables", label: "Game Lobby" },
    { src: SITE.images.pakistan, alt: "Teen Patti Loot for players in Pakistan", label: "Pakistan Play" },
    { src: SITE.images.bonus, alt: "Teen Patti Loot bonuses and rewards", label: "Bonuses & Rewards" },
    { src: SITE.images.deposit, alt: "Teen Patti Loot deposit money screen", label: "Deposit Money" },
    { src: SITE.images.withdraw, alt: "Teen Patti Loot withdraw money screen", label: "Withdraw Money" },
    { src: SITE.images.refer, alt: "Teen Patti Loot refer and earn", label: "Refer & Earn" },
    { src: SITE.images.userAccount, alt: "Teen Patti Loot user account and login", label: "User Account" },
  ] as const;

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">{SITE.name}</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">APK Download</span>{" "}
                <span className="text-white">Pakistan 2026</span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href={SITE.routes.home} className="text-accent hover:underline">
                {SITE.name}
              </Link>{" "}
              (also searched as 3 Patti Loot) is a popular Android card-game app for Pakistani players.
              Download the official APK, play Teen Patti tables and arcade-style games, and manage your
              wallet with JazzCash, EasyPaisa, or bank transfer in PKR. This guide covers install steps,
              bonuses, deposits, withdrawals, and safety tips—without income promises.
            </p>

            <div className="flex justify-center my-6">
              <DownloadButton />
            </div>

            <div className="bg-[#0A1029] rounded-2xl px-6 py-4">
              <StarRating />
            </div>

            <div className="flex flex-row gap-4 justify-center mt-6 mb-4">
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <svg
                  className="w-6 h-6 mb-3 text-[#FFA500] mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{SITE.downloadsLabel}</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <svg
                  className="w-6 h-6 mb-3 text-[#FFA500] mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{SITE.ratingCountLabel}</div>
                <div className="text-gray-400 text-sm">Ratings</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <svg
                  className="w-6 h-6 mb-3 text-[#FFA500] mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{SITE.fileSize}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          <figure
            className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="name" content={SITE.name} />
            <meta
              itemProp="description"
              content={`${SITE.name} – Official APK for Android download in Pakistan 2026`}
            />
            <meta itemProp="url" content={heroImageUrl} />
            <Image
              src={SITE.images.hero}
              alt={`${SITE.name} – Download 3 Patti Loot APK for Android in Pakistan`}
              title={`${SITE.name} – Official APK Download Pakistan 2026`}
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 260px, 320px"
              itemProp="image"
            />
            <figcaption className="sr-only">
              {SITE.name} official app image — download APK for Teen Patti and wallet games in Pakistan.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* APK Details Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Teen Patti Loot APK Details</h2>
        <div className="mb-6">
          <StarRating />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ["App Name", SITE.name],
                  ["Developer", SITE.developer],
                  ["Category", SITE.category],
                  ["Size", SITE.fileSize],
                  ["Latest Version", SITE.version],
                  ["Required OS", SITE.os],
                  ["Update", SITE.updateDate],
                  ["Downloads", SITE.downloadsLabel],
                  ["Rating Count", `${SITE.ratingCountLabel} (${SITE.ratingValue}★)`],
                  ["Language", SITE.languages],
                  ["Price", "Free (0 PKR)"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-[#0a1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                    <td className="py-4 px-6 text-left text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <DownloadButton />
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">
            What Is Teen Patti Loot for Pakistani Players?
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Teen Patti Loot is a mobile gaming platform built around the classic three-card Teen Patti
              format that millions of Pakistanis already know from family gatherings and local card culture.
              The app wraps that familiar 3 Patti experience in a digital lobby where you can join tables,
              try side games like Dragon vs Tiger or Andar Bahar, and move PKR through a built-in wallet.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Unlike generic casino clones, Teen Patti Loot targets Pakistani users with Urdu-friendly menus,
              JazzCash and EasyPaisa checkout, and support channels that understand local payment delays.
              The APK is distributed outside Google Play, so this official site helps you verify version{" "}
              {SITE.version}, file size, and update date before installing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you search &quot;Teen Patti Loot&quot; or &quot;3 Patti Loot,&quot; you are looking for
              the same product: a free Android download, optional real-money play, and fast local withdrawals.
              Read our{" "}
              <Link href="/blog/is-teen-patti-loot-safe-real-pakistan" className="text-accent hover:underline">
                safety guide for Pakistan
              </Link>{" "}
              before adding funds.
            </p>
          </div>
        </div>
      </section>

      {/* Features — expanded subsections */}
      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 space-y-10">
          <h2 className="text-3xl font-bold text-[#FFA500]">Teen Patti Loot Features Explained</h2>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFC107]">What the app includes</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Teen Patti Loot bundles card tables, quick arcade rounds, and promotional events into one APK.
              The home screen highlights hot games, wallet balance, and daily reward banners so you can jump
              into a Teen Patti room or explore slots without switching apps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Classic Teen Patti tables",
                  body: "Multiple stake levels for 3 Patti Loot rooms—from practice tables to higher-limit sessions.",
                },
                {
                  title: "Arcade & instant games",
                  body: "Dragon vs Tiger, Andar Bahar, crash-style games, and mini slots for variety between card rounds.",
                },
                {
                  title: "PKR wallet",
                  body: "Deposit and withdraw in Pakistani rupees using channels shown in the Wallet menu.",
                },
                {
                  title: "Daily rewards",
                  body: "Login chips, spin wheels, and event calendars that refresh on a schedule inside the app.",
                },
                {
                  title: "Referral program",
                  body: "Share your invite link and earn commission when friends register and play.",
                },
                {
                  title: "VIP tiers",
                  body: "Higher activity unlocks rebate percentages and priority support—details in the VIP section.",
                },
              ].map((f) => (
                <div key={f.title} className="bg-[#0A1029] px-6 py-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-accent">{f.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFC107]">How Teen Patti Loot works</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              After you install the APK and create an account, the app assigns a player ID tied to your mobile
              number. You receive starter chips from welcome promotions, then choose a game category. Card games
              match you with other online players or house tables depending on the mode selected.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you want to play with deposited balance, open Wallet → Deposit, pick JazzCash or EasyPaisa,
              and confirm the PKR amount. Winnings return to the same wallet. Withdrawals reverse the flow:
              select a method, enter account details, and submit. Processing time varies by channel and
              verification—not every request clears instantly.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Bonuses often carry wagering rules. The app displays required turnover before a bonus balance
              becomes withdrawable. Always read the promo popup before accepting—this avoids surprise holds on
              your PKR balance.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFC107]">Why it is useful in Pakistan</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pakistani players need payment rails they already trust. Teen Patti Loot integrates JazzCash and
              EasyPaisa instead of forcing international cards that many users do not have. Language options
              including Urdu reduce friction for first-time APK installers who are new to sideloading apps.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The lightweight APK ({SITE.fileSize}) runs on mid-range phones common in Lahore, Karachi, and
              Islamabad. Offline marketing often spreads WhatsApp download links—using {SITE.domain} helps you
              confirm you have the latest build ({SITE.version}) rather than an outdated or modified copy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFC107]">Who benefits most</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li>
                <strong className="text-white">Teen Patti fans</strong> who want mobile 3 Patti Loot tables
                without visiting a physical venue.
              </li>
              <li>
                <strong className="text-white">Casual gamers</strong> exploring Dragon vs Tiger or slots during
                short breaks—provided they treat spend as entertainment budget.
              </li>
              <li>
                <strong className="text-white">Referral marketers</strong> sharing invite links with friends who
                already use JazzCash wallets.
              </li>
              <li>
                <strong className="text-white">Returning users</strong> looking for updated APK builds, bonus
                calendars, and{" "}
                <Link href="/blog/teen-patti-loot-bonuses-vip-guide" className="text-accent hover:underline">
                  VIP rebate guides
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500] text-center">
            Teen Patti Loot App Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((shot) => (
              <div key={shot.src} className="w-full">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1200}
                    height={560}
                    className="w-full h-auto"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="text-center text-gray-300 mt-3 font-medium">{shot.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section id="bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Teen Patti Loot Bonuses & Promotions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">Welcome & first deposit offers</h3>
              <p className="text-gray-300 leading-relaxed">
                New accounts may receive free chips on registration plus a first-deposit match on selected PKR
                amounts. Percentages and caps change during Eid or cricket seasons—check the Promotions tab on
                launch day. Bonuses are not guaranteed profit; they extend playtime if terms are met.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">Daily login & spin rewards</h3>
              <p className="text-gray-300 leading-relaxed">
                Open Teen Patti Loot once per day to collect streak rewards. Missing a day may reset the streak
                depending on the active event. Spin wheels and check-in calendars appear on the home banner—tap
                before playing to avoid losing unclaimed chips.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">Referral commissions</h3>
              <p className="text-gray-300 leading-relaxed">
                Share your referral code from the Invite section. When a friend registers through your link and
                meets activity thresholds, you earn a commission credited to your wallet. Spamming random groups
                violates fair-use rules and can freeze referral earnings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">VIP & recharge rebates</h3>
              <p className="text-gray-300 leading-relaxed">
                Higher VIP levels unlock daily rebate percentages on qualifying deposits. Rebates usually require
                minimum turnover before withdrawal. See our{" "}
                <Link href="/blog/teen-patti-loot-bonuses-vip-guide" className="text-accent hover:underline">
                  bonuses & VIP guide
                </Link>{" "}
                for tier breakdowns and wagering examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download & Installation */}
      <section id="download-install" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">
            Download & Install Teen Patti Loot APK
          </h2>
          <p className="text-gray-300 mb-6">
            Follow these steps to install version {SITE.version} on Android. For a dedicated download page with
            extra checks, visit{" "}
            <Link href={SITE.routes.download} className="text-accent hover:underline">
              download Teen Patti Loot
            </Link>
            . PC users can read{" "}
            <Link href={SITE.routes.pc} className="text-accent hover:underline">
              Teen Patti Loot for PC
            </Link>
            .
          </p>
          <ol className="list-decimal pl-5 space-y-4 text-gray-300 mb-8">
            {INSTALL_STEPS.map((step) => (
              <li key={step.name}>
                <strong className="text-white">{step.name}:</strong> {step.text}
              </li>
            ))}
          </ol>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Requirement</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Minimum</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50">
                  <td className="py-3 px-6 text-gray-300">OS</td>
                  <td className="py-3 px-6 text-gray-300">{SITE.os}</td>
                  <td className="py-3 px-6 text-gray-300">Android 10+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-3 px-6 text-gray-300">RAM</td>
                  <td className="py-3 px-6 text-gray-300">2 GB</td>
                  <td className="py-3 px-6 text-gray-300">4 GB+</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-3 px-6 text-gray-300">Storage</td>
                  <td className="py-3 px-6 text-gray-300">500 MB free</td>
                  <td className="py-3 px-6 text-gray-300">1 GB free</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-3 px-6 text-gray-300">Internet</td>
                  <td className="py-3 px-6 text-gray-300">Stable 3G/Wi‑Fi</td>
                  <td className="py-3 px-6 text-gray-300">4G/Wi‑Fi</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">How to Register on Teen Patti Loot</h2>
          <p className="text-gray-300 mb-4">
            Registration links your mobile number to a secure wallet. Full walkthrough:{" "}
            <Link
              href="/blog/create-teen-patti-loot-account-and-login"
              className="text-accent hover:underline"
            >
              create account & login guide
            </Link>
            .
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open Teen Patti Loot after installation.</li>
            <li>Tap Register or Sign Up on the welcome screen.</li>
            <li>Enter a valid Pakistani mobile number.</li>
            <li>Create a strong password you do not reuse on banking apps.</li>
            <li>Enter the OTP sent via SMS to verify ownership.</li>
            <li>Optionally bind email later under Profile → Security for recovery.</li>
            <li>Claim any new-user bonus shown on the popup—read wagering terms first.</li>
          </ol>
        </div>
      </section>

      {/* Login */}
      <section id="login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">How to Login to Teen Patti Loot</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-6">
            <li>Launch the app and tap Login.</li>
            <li>Enter your registered mobile number and password.</li>
            <li>Complete OTP verification if prompted on a new device.</li>
            <li>Use Forgot Password if you cannot sign in—reset via SMS OTP.</li>
            <li>Enable any in-app security lock if available before adding PKR.</li>
          </ol>
          <p className="text-gray-300">
            Guest mode may limit withdrawals. For full wallet access, complete registration and bind payment
            details under Wallet settings.
          </p>
        </div>
      </section>

      {/* Deposit & Withdrawal overview */}
      <section id="deposit-withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">
            Deposits & Withdrawals Overview
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Teen Patti Loot uses an in-app PKR wallet. Minimum deposit starts around {SITE.minDeposit}; minimum
            withdrawal around {SITE.minWithdraw}. Exact limits appear inside Wallet before you confirm a
            transaction. Outcomes depend on game results—never deposit money you cannot afford to lose.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">Adding funds</h3>
              <p className="text-gray-300 mb-4">
                Open Wallet → Deposit, choose JazzCash, EasyPaisa, or bank transfer, enter PKR amount, and
                approve the payment on your wallet app. Balance updates after the gateway confirms—usually within
                minutes.
              </p>
              <Link href={SITE.routes.deposit} className="text-accent hover:underline font-semibold">
                Full deposit guide →
              </Link>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">Cashing out</h3>
              <p className="text-gray-300 mb-4">
                Open Wallet → Withdraw, select the same channel if possible, enter account details accurately,
                and submit. First withdrawals may need identity or phone verification. Delays can occur during
                peak hours or bank maintenance.
              </p>
              <Link href={SITE.routes.withdraw} className="text-accent hover:underline font-semibold">
                Full withdrawal guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section id="payment-methods" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Payment Methods in Pakistan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">JazzCash</h3>
              <p className="text-gray-300 leading-relaxed">
                JazzCash is widely used across Pakistan for mobile wallet deposits and withdrawals. Link the
                same number registered on JazzCash, approve prompts in the JazzCash app, and keep transaction
                screenshots until balance reflects in Teen Patti Loot.
              </p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">EasyPaisa</h3>
              <p className="text-gray-300 leading-relaxed">
                EasyPaisa offers a similar flow for PKR transfers. Confirm merchant details match the in-app
                payment screen before approving. Mismatch is a common sign of phishing—cancel and contact
                support if amounts or names differ.
              </p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">Bank transfer</h3>
              <p className="text-gray-300 leading-relaxed">
                Bank card or IBFT options suit larger withdrawals. Enter account title exactly as on your passbook.
                Processing may take longer than mobile wallets but supports higher single-transaction limits where
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section id="troubleshooting" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Troubleshooting Common Issues</h2>
          <p className="text-gray-300 mb-6">
            More fixes in our{" "}
            <Link href="/blog/teen-patti-loot-tips-troubleshooting" className="text-accent hover:underline">
              tips & troubleshooting article
            </Link>
            .
          </p>
          <div className="space-y-6">
            {[
              {
                title: "APK will not install",
                body: "Enable Unknown Sources, delete old Teen Patti Loot versions, ensure at least 500 MB free storage, and re-download from the official link.",
              },
              {
                title: "Parse error or corrupt file",
                body: "The download may have interrupted. Clear browser cache, use stable Wi‑Fi, and download again. Avoid third-party Telegram APK channels.",
              },
              {
                title: "Login OTP not received",
                body: "Check SMS spam folders, confirm correct country code (+92), wait two minutes, then request a new OTP. Do not share OTP with anyone claiming to be support.",
              },
              {
                title: "Deposit not credited",
                body: "Verify payment succeeded in JazzCash/EasyPaisa history first. If debited but not credited after 30 minutes, save receipt ID and contact in-app chat with timestamp.",
              },
              {
                title: "Withdrawal pending",
                body: "Complete KYC if prompted, ensure wager requirements on active bonuses are cleared, and confirm account numbers match your wallet registration.",
              },
              {
                title: "App crashes on launch",
                body: "Update to {SITE.version}, restart phone, clear app cache (not data if logged in), or reinstall from official APK after noting your player ID.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#0A1029] p-5 rounded-lg border-l-4 border-[#FFA500]">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.body.replace("{SITE.version}", SITE.version)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Smart Tips for Teen Patti Loot Players</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            <li>Start with low-stake Teen Patti tables until you understand table pace and side-show rules.</li>
            <li>Set a daily PKR limit before opening the wallet—treat it as entertainment spend.</li>
            <li>Claim daily bonuses but read turnover requirements before mixing bonus and cash balance.</li>
            <li>Withdraw portions of winnings periodically instead of rolling entire balance into high-variance games.</li>
            <li>Use referral links responsibly; fake accounts can trigger commission reversals.</li>
            <li>Keep the app updated to {SITE.version} for security patches and payment gateway fixes.</li>
            <li>Never install &quot;mod APKs&quot; promising guaranteed wins—they often steal credentials.</li>
            <li>Take breaks; long sessions increase impulsive bets after losses.</li>
          </ul>
        </div>
      </section>

      {/* Pros & Cons */}
      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Pros & Cons of Teen Patti Loot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#4ade80]">Pros</h3>
              <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Free APK download for Android</li>
                  <li>Familiar Teen Patti / 3 Patti Loot gameplay</li>
                  <li>JazzCash & EasyPaisa support in PKR</li>
                  <li>Multiple game modes beyond classic cards</li>
                  <li>Daily bonuses and referral commissions</li>
                  <li>Urdu-friendly interface options</li>
                  <li>In-app support channels</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#f87171]">Cons</h3>
              <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Real-money loss risk on every session</li>
                  <li>Not listed on Google Play—requires sideloading</li>
                  <li>Withdrawals can delay during verification or peak load</li>
                  <li>Bonus wagering rules can confuse new users</li>
                  <li>Addictive gameplay patterns possible</li>
                  <li>Legal status of online gaming varies—check local rules</li>
                  <li>Fake APK copies circulate on social media</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Safety & Security</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Teen Patti Loot encrypts traffic between the app and servers for account login and payment requests.
            Still, APKs installed outside official stores carry inherent risk if sourced from random links. Only
            download from {SITE.domain} or the verified redirect linked on this page.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Protect your OTP, avoid screen-sharing during wallet transfers, and use a device PIN. Support will
            never ask for your full password. Read{" "}
            <Link href="/blog/is-teen-patti-loot-safe-real-pakistan" className="text-accent hover:underline">
              Is Teen Patti Loot safe in Pakistan?
            </Link>{" "}
            for a deeper checklist on clones, permissions, and payment scams.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Gaming should remain recreational. If deposits strain your budget or mood, stop playing and seek
            local responsible-gaming resources. This site does not guarantee earnings or financial freedom.
          </p>
        </div>
      </section>

      {/* Customer Support */}
      <section id="support" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Customer Support</h2>
          <p className="text-gray-300 mb-8">
            Need help with install, login, or wallet issues? Contact Teen Patti Loot support through these
            channels:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">In-app live chat</h3>
              <p className="text-gray-300">
                Fastest for deposit/withdraw tickets. Open Profile → Customer Service, describe the issue, and
                attach payment receipt IDs when money is missing.
              </p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">Email</h3>
              <p className="text-gray-300">
                Write to{" "}
                <a href={`mailto:${SITE.supportEmail}`} className="text-accent hover:underline">
                  {SITE.supportEmail}
                </a>{" "}
                with your player ID, device model, and screenshots. Allow 24–48 hours on busy days.
              </p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC107]">WhatsApp / social</h3>
              <p className="text-gray-300">
                Official WhatsApp numbers appear inside the app only—avoid random numbers from Facebook groups.
                Use our{" "}
                <Link href={SITE.routes.contact} className="text-accent hover:underline">
                  contact page
                </Link>{" "}
                for site-related questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion + CTA */}
      <section id="conclusion" className="pt-12 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Ready to Try Teen Patti Loot?</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
            Teen Patti Loot brings 3 Patti Loot tables, local PKR payments, and regular promotions to Android
            users across Pakistan. Download version {SITE.version} from the official link, register with your
            mobile number, and explore games responsibly—only with money you can afford to lose.
          </p>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8">
            Updated {SITE.updateDate}. Ratings: {SITE.ratingValue}/5 from {SITE.ratingCountLabel} users. Free ·
            Android · Game.
          </p>
          <div className="flex flex-col items-center gap-6">
            <DownloadButton />
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href={SITE.routes.download} className="text-accent hover:underline">
                Download page
              </Link>
              <Link href={SITE.routes.blog} className="text-accent hover:underline">
                Blog guides
              </Link>
              <Link href={SITE.routes.disclaimer} className="text-accent hover:underline">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
