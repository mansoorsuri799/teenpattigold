import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { SITE } from "@/lib/site";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";

const PAGE_TITLE = "Teen Patti Gold Game Download APK - Pakistani Earning";
const META_DESCRIPTION =
  "Teen Patti Gold is a popular online card game that allows you to enjoy a wide variety of games with its smooth graphics and fast gameplay. Download APK for Pakistan.";

const heroImageUrl = `${SITE.origin}${SITE.images.hero}`;
const logoImageUrl = `${SITE.origin}${SITE.images.logo}`;
const ogImageUrl = `${SITE.origin}${SITE.images.og}`;
const ogSquareUrl = `${SITE.origin}${SITE.images.ogSquare}`;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "Teen Patti Gold",
    "3 Patti Gold",
    "Teen Patti Gold APK",
    "Teen Patti Gold download",
    "Teen Patti Gold Pakistan",
    "3 Patti Gold APK",
    "Teen Patti Gold JazzCash",
    "Teen Patti Gold EasyPaisa",
    "Teen Patti Gold 2026",
    "download Teen Patti Gold",
    "Teen Patti Gold Android",
    "getteenpattigold",
    "PKR card game app",
    "online Teen Patti Pakistan",
  ],
  alternates: {
    canonical: SITE.origin,
  },
  openGraph: {
    title: PAGE_TITLE,
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
        alt: `${SITE.name} – 3 Patti Gold card game app`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    images: [heroImageUrl, ogImageUrl],
  },
};

const TOC_ITEMS = [
  { href: "#teen-patti-gold-game-download", label: "Teen Patti Gold Game Download" },
  { href: "#introduction", label: "Introduction to Teen Patti Gold" },
  { href: "#what-makes-teen-patti-gold-unique", label: "What Makes Teen Patti Gold Unique" },
  { href: "#key-gaming-features", label: "Key Gaming Features" },
  { href: "#download-install", label: "How to Download & Install" },
  { href: "#registration", label: "Create Account & Login" },
  { href: "#deposit-withdraw", label: "Deposit & Withdraw" },
  { href: "#bonuses", label: "Bonuses & Promotions" },
  { href: "#payment-methods", label: "Payment Methods" },
  { href: "#troubleshooting", label: "Troubleshooting" },
  { href: "#tips", label: "Smart Play Tips" },
  { href: "#pros-cons", label: "Pros & Cons" },
  { href: "#safety", label: "Safety & Responsible Play" },
  { href: "#support", label: "Customer Support" },
  { href: "#faq", label: "FAQs" },
  { href: "#conclusion", label: "Conclusion" },
] as const;

const FAQ_ITEMS = [
  {
    question: "What is Teen Patti Gold?",
    answer:
      "Teen Patti Gold is a mobile card and casino-style gaming app for Pakistani Android users. It offers classic Teen Patti (3 Patti) tables plus popular side games. Players can add PKR via JazzCash or EasyPaisa and request withdrawals to local wallets or bank accounts when the wallet section allows it.",
  },
  {
    question: "How do I download Teen Patti Gold APK in Pakistan?",
    answer: `Visit ${SITE.domain}, tap DOWNLOAD NOW, and save the APK to your phone. Enable Install from Unknown Sources in Android settings, open the file, and complete installation. The app is free and works on ${SITE.os}.`,
  },
  {
    question: "Is Teen Patti Gold safe to use?",
    answer:
      "Always download Teen Patti Gold from this official guide site, avoid cloned APKs, and never share your OTP or password. Use a strong password and bind email or phone recovery. Online gaming rules vary by region—check local laws before playing with real money.",
  },
  {
    question: "What is the minimum deposit on Teen Patti Gold?",
    answer: `The minimum deposit on Teen Patti Gold usually starts from ${SITE.minDeposit}, depending on the payment channel shown in the Wallet section.`,
  },
  {
    question: "What is the minimum withdrawal on Teen Patti Gold?",
    answer: `Withdrawals typically start from ${SITE.minWithdraw}. JazzCash, EasyPaisa, and bank transfer options are listed inside the app with current limits and processing times.`,
  },
  {
    question: "Which payment methods does Teen Patti Gold support?",
    answer:
      "Teen Patti Gold commonly supports JazzCash, EasyPaisa, and bank card transfers for deposits and withdrawals in PKR. Exact options can change—check Wallet → Recharge / Withdraw for the live list.",
  },
  {
    question: "Can I play Teen Patti Gold on iPhone or PC?",
    answer: `The official Teen Patti Gold APK is built for Android. PC players can follow our ${SITE.name} for PC guide using a trusted Android emulator. iPhone options are limited unless the developer publishes a separate iOS build.`,
  },
  {
    question: "How do Teen Patti Gold bonuses work?",
    answer:
      "New users may receive welcome chips or deposit-match offers. Daily login rewards, referral commissions, and VIP rebates may also appear. Bonus terms and wagering requirements are shown before you claim each offer.",
  },
  {
    question: "How do I contact Teen Patti Gold support?",
    answer: `Use in-app live chat when available, or email ${SITE.supportEmail}. Support can help with login, OTP, IP limit errors, deposits, and withdrawals.`,
  },
  {
    question: "Can I lose money on Teen Patti Gold?",
    answer:
      "Yes. Real-money games carry financial risk. Set a budget, play responsibly, and treat winnings as uncertain—not guaranteed income.",
  },
] as const;

const INSTALL_STEPS = [
  {
    name: "Download the APK",
    text: `Open ${SITE.domain} in your mobile browser and tap DOWNLOAD NOW. Wait until the Teen Patti Gold APK (${SITE.fileSize}) finishes downloading.`,
  },
  {
    name: "Allow unknown sources",
    text: "Go to Settings → Security (or Apps → Special access) and enable Install unknown apps for your browser or file manager.",
  },
  {
    name: "Install the APK",
    text: "Open your Downloads folder, tap the Teen Patti Gold APK file, confirm permissions, and wait for installation to complete.",
  },
  {
    name: "Launch and register",
    text: "Open Teen Patti Gold, sign up with your mobile number or continue as guest, then explore games and wallet options.",
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
          <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d={starPath} />
          </svg>
        ))}
        <span className="relative w-5 h-5 inline-block" aria-hidden="true">
          <svg className="absolute inset-0 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d={starPath} />
          </svg>
          <svg className="absolute inset-0 w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: "inset(0 50% 0 0)" }}>
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
    <details className="group bg-[#1a140c]/80 rounded-xl border border-gray-700 hover:border-accent/50 transition-all duration-300 shadow-md hover:shadow-lg">
      <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-accent transition-colors list-none">
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
          "Official Teen Patti Gold APK download site for Pakistan — 3 Patti Gold games, JazzCash & EasyPaisa wallet support.",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE.origin}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.origin}/#webpage`,
        url: `${SITE.origin}/`,
        name: PAGE_TITLE,
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
            "#teen-patti-gold-game-download",
            "#what-makes-teen-patti-gold-unique",
            "#key-gaming-features",
            "#download-install",
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
        description: `${SITE.name} – 3 Patti Gold card game APK for Pakistani Android players.`,
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
        name: "How to Download and Install Teen Patti Gold APK on Android",
        description:
          "Step-by-step guide to download, install, and open Teen Patti Gold on Android devices in Pakistan.",
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
      {
        "@type": "SiteNavigationElement",
        name: "Teen Patti Gold Game Download",
        url: `${SITE.origin}/#teen-patti-gold-game-download`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "What Makes Teen Patti Gold Unique",
        url: `${SITE.origin}/#what-makes-teen-patti-gold-unique`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Key Gaming Features",
        url: `${SITE.origin}/#key-gaming-features`,
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.origin}/#toc`,
        name: "Teen Patti Gold Table of Contents",
        itemListElement: TOC_ITEMS.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          url: `${SITE.origin}/${item.href}`,
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section
        id="teen-patti-gold-game-download"
        className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24"
        style={{ minHeight: "400px" }}
      >
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">{SITE.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold">
                Game Download APK — Pakistani Earning App 2026
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Teen Patti Gold brings classic 3 Patti tables, smooth graphics, and Fast JazzCash / EasyPaisa wallet
                flows to Android players in Pakistan. Download the latest APK, register in minutes, and explore
                bonuses built for everyday play.
              </p>
            </div>

            <StarRating />

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <DownloadButton />
              <Link
                href={SITE.routes.download}
                className="text-accent underline underline-offset-4 hover:text-white transition-colors font-medium"
              >
                Full install guide →
              </Link>
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {[
                ["Version", SITE.version],
                ["Size", SITE.fileSize],
                ["OS", SITE.os],
                ["Updated", SITE.updateDate],
                ["Downloads", SITE.downloadsLabel],
                ["Price", "Free"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#1a140c]/80 border border-gray-800 rounded-lg p-3">
                  <dt className="text-gray-400 text-xs uppercase tracking-wide">{label}</dt>
                  <dd className="text-white font-semibold mt-1">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src={SITE.images.hero}
                alt="Teen Patti Gold official app icon"
                width={512}
                height={512}
                priority
                fetchPriority="high"
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* APK details table */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-12">
        <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#1a140c]/60">
          <table className="w-full text-left text-sm md:text-base">
            <caption className="sr-only">Teen Patti Gold APK information</caption>
            <thead className="bg-[#120e0a] text-accent">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Detail
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Information
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-200 divide-y divide-gray-800">
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-gray-400">
                  App Name
                </th>
                <td className="px-4 py-3">{SITE.name} / 3 Patti Gold</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-gray-400">
                  Version
                </th>
                <td className="px-4 py-3">{SITE.version}</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-gray-400">
                  Size
                </th>
                <td className="px-4 py-3">{SITE.fileSize}</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-gray-400">
                  Platforms
                </th>
                <td className="px-4 py-3">Android ({SITE.os})</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-gray-400">
                  Languages
                </th>
                <td className="px-4 py-3">{SITE.languages}</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-gray-400">
                  Country focus
                </th>
                <td className="px-4 py-3">Pakistan</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-gray-400">
                  Rating
                </th>
                <td className="px-4 py-3">
                  {SITE.ratingValue} / 5 ({SITE.ratingCountLabel} ratings) · Free · Android · Game
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Table of Contents — critical for Google jump-link sitelinks */}
      <nav
        aria-label="Table of contents"
        className="px-4 md:px-8 max-w-7xl mx-auto mb-14"
        id="table-of-contents"
      >
        <div className="rounded-xl border border-accent/30 bg-[#1a140c]/80 p-5 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-accent mb-4">Table of Contents</h2>
          <ol className="grid sm:grid-cols-2 gap-2 text-sm md:text-base list-decimal list-inside">
            {TOC_ITEMS.map((item) => (
              <li key={item.href} className="text-gray-300">
                <a href={item.href} className="text-white hover:text-accent underline-offset-2 hover:underline transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <article className="px-4 md:px-8 max-w-7xl mx-auto space-y-16 pb-20 prose-headings:scroll-mt-24">
        <section id="introduction" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Introduction to Teen Patti Gold</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Teen Patti Gold is built around the familiar South Asian three-card game that Pakistani players already
            know as Flash or 3 Patti. The app packages that classic feel with a modern lobby, clear tables, and side
            games that keep sessions fresh after a few rounds.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            On getteenpattigold.com.pk we focus on practical guidance: safe APK install steps, JazzCash and EasyPaisa
            wallet habits, and fixes for issues people actually search for—password recovery, IP exceeds limit, OTP
            delays, and deposit or withdrawal timing.
          </p>
          <div className="relative aspect-[1200/560] max-w-3xl overflow-hidden rounded-xl border border-gray-800">
            <Image
              src={SITE.images.pakistan}
              alt="Teen Patti Gold Pakistan gameplay interface"
              width={1200}
              height={560}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </section>

        <section id="what-makes-teen-patti-gold-unique" className="scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-bold text-accent">What Makes Teen Patti Gold Unique</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Ranking pages for Teen Patti Gold often list features without explaining why they matter on Pakistani
            phones and payment rails. Here is what actually stands out when you compare Teen Patti Gold with generic
            card APKs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Smooth performance on mid-range phones",
                body: "Teen Patti Gold keeps tables responsive on common Android devices used in Pakistan. Fast dealing and light loading help when you play on 4G rather than Wi-Fi.",
              },
              {
                title: "Active multiplayer community",
                body: "Public tables fill quickly during peak evening hours, so you spend less time waiting and more time in real rounds against other players.",
              },
              {
                title: "Classic modes players recognize",
                body: "Classic Teen Patti, Joker, Muflis, and AK47-style variants give beginners a familiar ladder while experienced players can switch tables for variety.",
              },
              {
                title: "Local wallet-friendly flow",
                body: "Deposit and withdraw screens are designed around JazzCash, EasyPaisa, and bank options that Pakistani users already trust for everyday transfers.",
              },
              {
                title: "Private rooms for friends",
                body: "Invite-only tables let you host family or friends without joining a crowded public lobby—useful for practice before higher stakes.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a140c]/80 border border-gray-800 rounded-xl p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="key-gaming-features" className="scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-bold text-accent">Key Gaming Features</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Teen Patti Gold combines the main 3 Patti experience with supporting tools that make long sessions easier
            to manage—chat, bonuses, practice options, and clear wallet entry points.
          </p>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li>
              <strong className="text-white">Smooth graphics:</strong> Clean card animations and readable table UI so
              you can track bets without squinting on smaller screens.
            </li>
            <li>
              <strong className="text-white">Multiple Teen Patti variations:</strong> Switch between classic ranking,
              lowest-hand Muflis, and joker-assisted modes when you want a different pace.
            </li>
            <li>
              <strong className="text-white">Local payment options:</strong> JazzCash and EasyPaisa keep PKR top-ups
              close to how you already send money in Pakistan.
            </li>
            <li>
              <strong className="text-white">Bonuses & rewards:</strong> Daily login, referral, and recharge-style
              offers can stretch a starting balance when terms are clear.
            </li>
            <li>
              <strong className="text-white">In-game chat:</strong> Emotes and messages add a social layer without
              leaving the table.
            </li>
            <li>
              <strong className="text-white">24/7 support access:</strong> Live chat or ticket help for login, OTP, and
              wallet questions when something blocks play.
            </li>
            <li>
              <strong className="text-white">Regular updates:</strong> Fresh events and lobby content keep the Teen
              Patti Gold download worth updating from this site.
            </li>
          </ul>
          <div className="relative aspect-[1200/560] max-w-3xl overflow-hidden rounded-xl border border-gray-800">
            <Image
              src={SITE.images.game}
              alt="Teen Patti Gold key gaming features in the lobby"
              width={1200}
              height={560}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </section>

        <section id="download-install" className="scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-bold text-accent">How to Download and Install Teen Patti Gold APK</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Google Play may not always list every regional Teen Patti Gold build. Installing from a trusted APK source
            is normal in Pakistan—just keep Unknown Sources limited to the browser you trust.
          </p>
          <ol className="space-y-4">
            {INSTALL_STEPS.map((step, index) => (
              <li key={step.name} className="flex gap-4 bg-[#1a140c]/80 border border-gray-800 rounded-xl p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-primary font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.name}</h3>
                  <p className="text-gray-300 mt-1">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <DownloadButton />
          <p className="text-gray-400 text-sm">
            Need more detail? Read the full{" "}
            <Link href={SITE.routes.download} className="text-accent hover:underline">
              Teen Patti Gold download guide
            </Link>
            .
          </p>
        </section>

        <section id="registration" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Create Account and Login on Teen Patti Gold</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            After install, open Teen Patti Gold and register with a Pakistani mobile number. Enter the OTP carefully,
            set a password you can remember, and bind email if the app offers it—this makes password recovery much
            easier later.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Guest play is fine for a quick look at the lobby, but convert to a full account before any deposit. For
            forgotten passwords, follow our{" "}
            <Link href="/blog/recover-teen-patti-gold-account-password" className="text-accent hover:underline">
              account password recovery guide
            </Link>
            . If SMS never arrives, see{" "}
            <Link href="/blog/teen-patti-gold-otp-not-received" className="text-accent hover:underline">
              OTP not received fixes
            </Link>
            .
          </p>
          <div className="relative aspect-[1200/560] max-w-3xl overflow-hidden rounded-xl border border-gray-800">
            <Image
              src={SITE.images.userAccount}
              alt="Teen Patti Gold user account registration screen"
              width={1200}
              height={560}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </section>

        <section id="deposit-withdraw" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Deposit and Withdraw on Teen Patti Gold</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Open Wallet → Recharge, choose JazzCash, EasyPaisa, or bank transfer, enter an amount at or above{" "}
            {SITE.minDeposit}, and confirm with the OTP from your wallet app. Keep the payment screenshot until the
            balance updates.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Withdrawals usually start from {SITE.minWithdraw}. Complete any KYC or binding steps the app requests
            before your first cash-out. Typical timing varies by channel—read{" "}
            <Link href="/blog/teen-patti-gold-deposit-withdraw-time" className="text-accent hover:underline">
              how long deposits and withdrawals take
            </Link>
            , then use the dedicated{" "}
            <Link href={SITE.routes.deposit} className="text-accent hover:underline">
              deposit guide
            </Link>{" "}
            and{" "}
            <Link href={SITE.routes.withdraw} className="text-accent hover:underline">
              withdraw guide
            </Link>
            .
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative aspect-[1200/560] overflow-hidden rounded-xl border border-gray-800">
              <Image
                src={SITE.images.deposit}
                alt="Teen Patti Gold deposit money with JazzCash EasyPaisa"
                width={1200}
                height={560}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[1200/560] overflow-hidden rounded-xl border border-gray-800">
              <Image
                src={SITE.images.withdraw}
                alt="Teen Patti Gold withdraw money screen"
                width={1200}
                height={560}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section id="bonuses" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Teen Patti Gold Bonuses and Promotions</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Teen Patti Gold often surfaces welcome chips, daily login rewards, recharge rebates, referral commissions,
            and event cashback. Always read wagering rules before claiming—free chips that cannot be withdrawn until
            conditions are met should not be treated as cash.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            The weekly bonus unlocks after a one-time{" "}
            <strong className="text-white">1000 PKR</strong> deposit and stays enabled forever on that account. After
            you claim, clear wager faster with eligible short-round games such as Fortune Gems and Dragon vs Tiger —
            full steps in our{" "}
            <Link href="/blog/enable-teen-patti-gold-weekly-bonus" className="text-accent hover:underline">
              weekly bonus &amp; fast wager guide
            </Link>
            .
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Referral programs work best when friends install from a trusted link and complete registration. Our refer
            screen below shows the kind of invite flow you will see inside the app.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative aspect-[1200/560] overflow-hidden rounded-xl border border-gray-800">
              <Image
                src={SITE.images.bonus}
                alt="Teen Patti Gold daily bonus rewards"
                width={1200}
                height={560}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[1200/560] overflow-hidden rounded-xl border border-gray-800">
              <Image
                src={SITE.images.refer}
                alt="Teen Patti Gold refer and earn program"
                width={1200}
                height={560}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section id="payment-methods" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Payment Methods for Pakistani Players</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            JazzCash and EasyPaisa remain the fastest paths for most Teen Patti Gold users. Bank transfers help for
            larger amounts but can take longer to confirm. Match the account name and number carefully—wrong details
            are the top cause of delayed credits.
          </p>
        </section>

        <section id="troubleshooting" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Teen Patti Gold Troubleshooting</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            The searches that actually matter after install are rarely “what is Teen Patti.” Players need password
            recovery, IP limit fixes, OTP delivery, and wallet timing answers. Start here:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
            <li>
              <Link href="/blog/recover-teen-patti-gold-account-password" className="text-accent hover:underline">
                Recover Teen Patti Gold account password
              </Link>
            </li>
            <li>
              <Link href="/blog/fix-teen-patti-gold-ip-exceeds-limit" className="text-accent hover:underline">
                Fix IP exceeds limit issue
              </Link>
            </li>
            <li>
              <Link href="/blog/teen-patti-gold-otp-not-received" className="text-accent hover:underline">
                OTP SMS not received
              </Link>
            </li>
            <li>
              <Link href="/blog/teen-patti-gold-deposit-withdraw-time" className="text-accent hover:underline">
                Deposit and withdraw timing
              </Link>
            </li>
          </ul>
        </section>

        <section id="tips" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Smart Tips for Teen Patti Gold</h2>
          <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside">
            <li>Start on low boot tables until you learn opponents’ betting rhythm.</li>
            <li>Do not chase losses after a bad streak—set a session limit before you open the wallet.</li>
            <li>Fold weak hands early; Teen Patti rewards patience more than constant calling.</li>
            <li>Bind recovery email and keep your APK updated from {SITE.domain} only.</li>
          </ul>
        </section>

        <section id="pros-cons" className="scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-bold text-accent">Pros and Cons of Teen Patti Gold</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a140c]/80 border border-green-900/40 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-green-400 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Familiar 3 Patti gameplay with multiple variants</li>
                <li>JazzCash / EasyPaisa friendly wallet flow</li>
                <li>Lightweight enough for everyday Android phones</li>
                <li>Bonuses and referral value when terms are clear</li>
              </ul>
            </div>
            <div className="bg-[#1a140c]/80 border border-red-900/40 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Real-money play can become addictive</li>
                <li>Requires stable internet for live tables</li>
                <li>APK installs need careful Unknown Sources settings</li>
                <li>Bonus wagering can limit instant withdrawals</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="safety" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Safety and Responsible Gaming</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Download Teen Patti Gold only from this site, never share OTPs, and treat the app as entertainment—not a
            salary replacement. If play stops being fun, take a break and use bank or wallet spending limits.
          </p>
        </section>

        <section id="support" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Customer Support for Teen Patti Gold</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Use in-app live chat for account locks, missing deposits, or IP errors. You can also email{" "}
            <a href={`mailto:${SITE.supportEmail}`} className="text-accent hover:underline">
              {SITE.supportEmail}
            </a>{" "}
            with your user ID, device model, and screenshots. Our{" "}
            <Link href={SITE.routes.contact} className="text-accent hover:underline">
              contact page
            </Link>{" "}
            lists the same channels.
          </p>
          <div className="relative aspect-[1200/560] max-w-3xl overflow-hidden rounded-xl border border-gray-800">
            <Image
              src={SITE.images.liveChat}
              alt="Teen Patti Gold live chat customer support"
              width={1200}
              height={560}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-bold text-accent">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        <section id="conclusion" className="scroll-mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-accent">Conclusion</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Teen Patti Gold remains one of the strongest branded 3 Patti downloads for Pakistani Android users who want
            classic tables, local wallets, and clear support paths. Use getteenpattigold.com.pk for the APK, follow the
            install steps, and keep our troubleshooting blogs bookmarked for password, IP, OTP, and timing issues.
          </p>
          <DownloadButton />
        </section>
      </article>
    </>
  );
}
