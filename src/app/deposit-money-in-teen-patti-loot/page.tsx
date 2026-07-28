import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.deposit}`;

export const metadata: Metadata = {
  title: "Deposit Money in Teen Patti Loot | JazzCash & EasyPaisa Guide 2026",
  description: `Add funds to Teen Patti Loot with JazzCash, EasyPaisa, or bank transfer. Minimum deposit ${SITE.minDeposit}. Step-by-step wallet top-up guide for Pakistani players.`,
  keywords: [
    "Teen Patti Loot deposit",
    "add money Teen Patti Loot",
    "JazzCash Teen Patti Loot",
    "EasyPaisa Teen Patti Loot",
    "Teen Patti Loot recharge",
  ],
  openGraph: {
    title: "Deposit Money in Teen Patti Loot",
    description: `Learn how to deposit from ${SITE.minDeposit} using JazzCash, EasyPaisa, and bank options inside Teen Patti Loot.`,
    url: canonical,
    siteName: SITE.name,
    type: "article",
    images: [{ url: `${SITE.origin}${SITE.images.addMoney}`, alt: "Teen Patti Loot deposit guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deposit Money in Teen Patti Loot",
    description: `JazzCash & EasyPaisa deposit walkthrough — min ${SITE.minDeposit}.`,
  },
  alternates: { canonical },
};

export default function DepositMoneyPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Deposit Money in Teen Patti Loot",
    description: `Deposit guide for Teen Patti Loot using JazzCash, EasyPaisa, or bank transfer. Minimum ${SITE.minDeposit}.`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Open Wallet", text: "Launch Teen Patti Loot and tap the Wallet or Add Money section." },
      { "@type": "HowToStep", position: 2, name: "Pick payment method", text: "Choose JazzCash, EasyPaisa, or bank transfer." },
      { "@type": "HowToStep", position: 3, name: "Enter amount", text: `Select an amount from ${SITE.minDeposit} upward.` },
      { "@type": "HowToStep", position: 4, name: "Confirm payment", text: "Approve the request in your wallet app and wait for balance update." },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Deposit Money", item: canonical },
    ],
  };

  return (
    <article className="min-h-screen bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li><Link href={SITE.routes.home} className="hover:text-[#FFA500]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#FFC107] font-medium">Deposit Money</li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Deposit Money in Teen Patti Loot
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              JazzCash, EasyPaisa &amp; bank options — minimum {SITE.minDeposit}
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              This guide explains wallet top-ups inside {SITE.name}. Deposits are optional; never add more than you are comfortable losing.
            </p>
            <a
              href={SITE.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full font-bold text-white border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
            >
              <span className="mr-3">DOWNLOAD NOW</span>
              <span className="bg-[#f97316] rounded-full p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>
            <div className="mt-10 flex justify-center">
              <Image
                src={SITE.images.addMoney}
                alt="Teen Patti Loot add money screen — JazzCash and EasyPaisa deposit"
                title="Deposit money in Teen Patti Loot"
                width={1200}
                height={560}
                className="object-contain drop-shadow-2xl rounded-xl w-full max-w-2xl h-auto"
                priority
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Before You Add Funds</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:underline font-semibold">{SITE.name}</Link> supports local payment rails popular in Pakistan. You will need the app installed — see our{" "}
              <Link href={SITE.routes.download} className="text-[#0ea5e9] hover:underline">download page</Link> if you have not set it up yet.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Minimum deposit is <strong className="text-[#FFC107]">{SITE.minDeposit}</strong>. Larger preset amounts may appear in the wallet screen. Winnings are never guaranteed; treat deposits as entertainment spend.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Wallet Top-Up Steps</h2>
          <ol className="space-y-6 list-none">
            {[
              {
                title: "Sign in to Teen Patti Loot",
                body: "Open the app on a stable connection. Log in with your registered mobile number and OTP.",
              },
              {
                title: "Open the Wallet / Add Money menu",
                body: "From the home lobby, tap Wallet, Shop, or Add Money — label varies by app version.",
              },
              {
                title: "Select JazzCash, EasyPaisa, or Bank",
                body: "Pick the method linked to your own account. Do not use someone else's wallet.",
              },
              {
                title: "Choose your deposit amount",
                body: `Enter or tap a preset from ${SITE.minDeposit} upward. Confirm the total before proceeding.`,
              },
              {
                title: "Approve in your payment app",
                body: "You may receive a push notification or in-app PIN prompt. Complete approval only if the merchant name matches.",
              },
              {
                title: "Wait for balance refresh",
                body: "Most deposits reflect within a minute. If delayed, check SMS from JazzCash/EasyPaisa before retrying.",
              },
            ].map((step, i) => (
              <li key={step.title} className="bg-[#0A1029] rounded-xl p-8 flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFA500] text-primary rounded-full flex items-center justify-center text-xl font-bold" aria-hidden="true">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#FFA500] mb-8">Payment Method Notes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "JazzCash",
                tip: "Ensure sufficient balance plus any transfer fee. Keep the app updated for smoother merchant approvals.",
              },
              {
                name: "EasyPaisa",
                tip: "Use the same SIM registered on your wallet. Failed attempts often mean incorrect PIN or daily limit reached.",
              },
              {
                name: "Bank Transfer",
                tip: "When available, copy reference numbers exactly. Bank deposits may take longer than mobile wallets.",
              },
            ].map((m) => (
              <div key={m.name} className="bg-[#0A1029] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{m.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{m.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need to Cash Out Later?</h2>
          <p className="text-gray-300 mb-6">
            After playing, follow our withdraw guide to request a payout to the same wallet type when eligible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={SITE.routes.withdraw} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
              Withdraw Money Guide →
            </Link>
            <Link href={SITE.routes.download} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
              Download APK →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
