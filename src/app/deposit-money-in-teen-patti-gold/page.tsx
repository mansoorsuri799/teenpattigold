import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.deposit}`;

export const metadata: Metadata = {
  title: "Deposit Money in Teen Patti Gold | JazzCash & EasyPaisa Guide 2026",
  description: `Add funds to Teen Patti Gold with JazzCash, EasyPaisa, or bank transfer. Minimum deposit ${SITE.minDeposit}. Step-by-step wallet top-up guide for Pakistani players.`,
  keywords: [
    "Teen Patti Gold deposit",
    "add money Teen Patti Gold",
    "JazzCash Teen Patti Gold",
    "EasyPaisa Teen Patti Gold",
    "Teen Patti Gold recharge",
    "3 Patti Gold wallet top up",
  ],
  openGraph: {
    title: "Deposit Money in Teen Patti Gold",
    description: `Learn how to deposit from ${SITE.minDeposit} using JazzCash, EasyPaisa, and bank options inside Teen Patti Gold.`,
    url: canonical,
    siteName: SITE.name,
    type: "article",
    images: [{ url: `${SITE.origin}${SITE.images.deposit}`, alt: "Teen Patti Gold deposit guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deposit Money in Teen Patti Gold",
    description: `JazzCash & EasyPaisa deposit walkthrough — min ${SITE.minDeposit}.`,
  },
  alternates: { canonical },
};

export default function DepositMoneyPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Deposit Money in Teen Patti Gold",
    description: `Deposit guide for Teen Patti Gold using JazzCash, EasyPaisa, or bank transfer. Minimum ${SITE.minDeposit}.`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Open Wallet", text: "Launch Teen Patti Gold and tap the Wallet or Add Money section." },
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
    <article>
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
            <li aria-hidden="true" className="text-gray-600">
              /
            </li>
            <li aria-current="page" className="text-[#FFC107] font-medium">
              Deposit Money
            </li>
          </ol>
        </nav>
      </div>

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How to Deposit Money in Teen Patti Gold
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            JazzCash, EasyPaisa &amp; bank options — minimum {SITE.minDeposit}
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Adding PKR to your {SITE.name} wallet lets you join real-stake Teen Patti and Rummy tables. This guide walks
            through each payment channel used by Pakistani players. Deposits are optional — never add more than you are
            comfortable losing.
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </span>
          </a>
          <div className="mt-10 flex justify-center">
            <Image
              src={SITE.images.deposit}
              alt="Teen Patti Gold add money screen — JazzCash and EasyPaisa deposit"
              title="Deposit money in Teen Patti Gold"
              width={1200}
              height={560}
              className="object-contain drop-shadow-2xl rounded-xl w-full max-w-2xl h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A140C] rounded-2xl p-8 md:p-12 border border-gray-800">
            <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Before You Add Funds</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:underline font-semibold">{SITE.name}</Link> routes deposits through payment rails familiar in Pakistan — JazzCash, EasyPaisa, and sometimes direct bank transfer. You need the app installed from our{" "}
              <Link href={SITE.routes.download} className="text-[#0ea5e9] hover:underline">official download page</Link> and a verified login on the same device you use for wallet approvals.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Minimum deposit is <strong className="text-[#FFC107]">{SITE.minDeposit}</strong>. Preset buttons (500, 1,000, 5,000 PKR) may appear depending on your account tier. Bonus chips attached to recharge promos often carry wagering requirements — read the promo popup before confirming.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Keep your JazzCash or EasyPaisa app updated and ensure the SIM in your phone matches the wallet account. Third-party &quot;agents&quot; who offer to deposit on your behalf are a common scam vector — only pay through the in-app merchant flow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Wallet Top-Up Steps</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Labels inside the app may say Wallet, Shop, Recharge, or Add Money — the flow is the same across recent {SITE.version} builds.
          </p>
          <ol className="space-y-6 list-none">
            {[
              {
                title: "Sign in to Teen Patti Gold",
                body: "Open the app on a stable Wi‑Fi or 4G connection. Log in with your registered Pakistani mobile number and OTP. If you see a session timeout, restart the app before opening Wallet.",
              },
              {
                title: "Open the Wallet / Add Money menu",
                body: "From the home lobby, tap the wallet icon or Add Money banner. Your current chip balance and withdrawable amount (if any) appear at the top.",
              },
              {
                title: "Select JazzCash, EasyPaisa, or Bank",
                body: "Pick the method linked to your own account. Icons for JazzCash (red) and EasyPaisa (green) are standard. Bank transfer may show IBAN or reference fields — copy them exactly.",
              },
              {
                title: "Choose your deposit amount",
                body: `Enter a custom value or tap a preset starting from ${SITE.minDeposit}. Confirm the total including any displayed fee before proceeding.`,
              },
              {
                title: "Approve in your payment app",
                body: "You may be redirected to JazzCash/EasyPaisa or receive a push notification. Verify the merchant name and amount, enter your wallet PIN, and approve once — do not double-tap if the first attempt hangs.",
              },
              {
                title: "Wait for balance refresh",
                body: "Most deposits reflect within 30–90 seconds. Pull down to refresh the lobby balance. If nothing changes after five minutes, check SMS from your wallet provider before retrying.",
              },
            ].map((step, i) => (
              <li key={step.title} className="bg-[#1A140C] rounded-xl p-8 flex gap-6">
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

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#FFA500] mb-8">Payment Method Notes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "JazzCash",
                tip: "Ensure balance covers the deposit plus any JazzCash transfer fee. Biometric login speeds up merchant approvals. Failed attempts often mean incorrect PIN or daily send limit reached.",
              },
              {
                name: "EasyPaisa",
                tip: "Use the same SIM registered on your EasyPaisa wallet. If OTP to EasyPaisa fails, toggle mobile data and retry once. Keep the app on the latest Play Store version.",
              },
              {
                name: "Bank Transfer",
                tip: "When available, copy the reference number character-for-character. Bank deposits can take 15–60 minutes versus near-instant mobile wallets. Screenshot the transfer receipt.",
              },
            ].map((m) => (
              <div key={m.name} className="bg-[#1a140c] rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{m.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{m.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Common Deposit Issues</h2>
          <div className="space-y-4">
            {[
              {
                q: "Money deducted but chips not added",
                a: "Wait five minutes, then restart the app. If still missing, note the JazzCash/EasyPaisa transaction ID and contact in-app support with a screenshot — do not submit a second payment.",
              },
              {
                q: "Minimum amount error",
                a: `The in-app floor is usually ${SITE.minDeposit}. Smaller custom amounts may be blocked even if your wallet allows micro-transfers.`,
              },
              {
                q: "Payment method greyed out",
                a: "Maintenance windows or regional routing can temporarily hide a channel. Try an alternate method or check back after an hour.",
              },
              {
                q: "Bonus not credited",
                a: "Recharge rebates often require entering a promo code or selecting a tagged preset amount. Read the promo terms — wagering may apply before withdrawal.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#1A140C] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need to Cash Out Later?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            After playing, follow our withdraw guide to request a payout to the same wallet type when your balance becomes eligible. Processing times vary — we explain typical JazzCash and EasyPaisa delays there.
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
