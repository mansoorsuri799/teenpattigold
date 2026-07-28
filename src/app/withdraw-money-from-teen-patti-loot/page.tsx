import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.withdraw}`;

export const metadata: Metadata = {
  title: "Withdraw Money from Teen Patti Loot | JazzCash & EasyPaisa Payout Guide",
  description: `Withdraw from Teen Patti Loot to JazzCash or EasyPaisa. Minimum ${SITE.minWithdraw}. Processing tips, eligibility checks, and troubleshooting for Pakistani users.`,
  keywords: [
    "Teen Patti Loot withdraw",
    "cash out Teen Patti Loot",
    "Teen Patti Loot JazzCash withdraw",
    "Teen Patti Loot EasyPaisa payout",
  ],
  openGraph: {
    title: "Withdraw Money from Teen Patti Loot",
    description: `Step-by-step withdrawal guide — min ${SITE.minWithdraw}. JazzCash & EasyPaisa supported.`,
    url: canonical,
    siteName: SITE.name,
    type: "article",
    images: [{ url: `${SITE.origin}${SITE.images.withdraw}`, alt: "Teen Patti Loot withdraw screen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Withdraw Money from Teen Patti Loot",
    description: `How to request payouts from Teen Patti Loot — min ${SITE.minWithdraw}.`,
  },
  alternates: { canonical },
};

export default function WithdrawMoneyPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Withdraw Money from Teen Patti Loot",
    description: `Withdrawal guide for Teen Patti Loot with minimum ${SITE.minWithdraw}.`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Open Withdraw", text: "Go to Wallet → Withdraw inside Teen Patti Loot." },
      { "@type": "HowToStep", position: 2, name: "Bind wallet", text: "Link JazzCash or EasyPaisa if not already verified." },
      { "@type": "HowToStep", position: 3, name: "Enter amount", text: `Request at least ${SITE.minWithdraw} if balance allows.` },
      { "@type": "HowToStep", position: 4, name: "Submit & wait", text: "Confirm OTP if asked and monitor wallet for incoming transfer." },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Withdraw Money", item: canonical },
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
              <li aria-current="page" className="text-[#FFC107] font-medium">Withdraw Money</li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Withdraw Money from Teen Patti Loot
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              JazzCash &amp; EasyPaisa payouts — minimum {SITE.minWithdraw}
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Withdrawals depend on account verification and in-app rules. Processing times vary; this page explains the usual flow for Pakistani players.
            </p>
            <Image
              src={SITE.images.withdraw}
              alt="Teen Patti Loot withdraw money screen"
              title="Withdraw from Teen Patti Loot"
              width={1200}
              height={560}
              className="object-contain drop-shadow-2xl mx-auto rounded-xl w-full max-w-2xl h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Withdrawal Basics</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cash-out requests inside <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:underline font-semibold">{SITE.name}</Link> typically route to the same JazzCash or EasyPaisa wallet used for deposits. The stated minimum withdrawal is <strong className="text-[#FFC107]">{SITE.minWithdraw}</strong>, though bonus balance or wagering rules may apply before funds become withdrawable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Payout speed is not fixed — some transfers arrive in minutes, others during peak hours or maintenance windows. Past successful withdrawals do not guarantee future timing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Request a Withdrawal</h2>
          <ol className="space-y-6 list-none">
            {[
              {
                title: "Check withdrawable balance",
                body: "Open Wallet and confirm how much is eligible. Promo chips or locked bonus value may not count toward payout.",
              },
              {
                title: "Verify wallet binding",
                body: "Bind the JazzCash or EasyPaisa number you control. Mismatched numbers are a common rejection reason.",
              },
              {
                title: "Enter payout amount",
                body: `Type an amount from ${SITE.minWithdraw} up to your available limit. Double-check digits before submitting.`,
              },
              {
                title: "Complete security step",
                body: "OTP or transaction PIN may appear. Never share codes with third-party “agents” on WhatsApp or Telegram.",
              },
              {
                title: "Track status in-app",
                body: "Pending, Processing, and Completed labels differ by version. Screenshot the reference ID if shown.",
              },
              {
                title: "Confirm in your wallet app",
                body: "Open JazzCash/EasyPaisa and verify the incoming transfer. SMS alerts can lag behind the in-app credit.",
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
          <h2 className="text-3xl font-bold text-center text-[#FFA500] mb-8">Processing Tips</h2>
          <ul className="space-y-4">
            {[
              "Submit withdrawals during off-peak hours when possible (late night maintenance can delay queues).",
              "Keep your app on the latest version from our official download link.",
              "Ensure KYC or email binding is complete if the app prompts you.",
              "Avoid submitting duplicate requests — this can freeze the queue until support clears it.",
              "Use the same device and network you normally play on to reduce fraud flags.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 bg-[#0A1029] rounded-lg p-4">
                <span className="text-[#FFC107] font-bold">✓</span>
                <span className="text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Troubleshooting</h2>
          <div className="space-y-6">
            {[
              {
                q: "Withdrawal stuck on Pending",
                a: "Wait at least 30–60 minutes. If unchanged, note the order ID and contact in-app support — avoid repeated submissions.",
              },
              {
                q: "Minimum not met error",
                a: `Your withdrawable balance must reach ${SITE.minWithdraw} after any bonus rules. Check the wallet breakdown screen.`,
              },
              {
                q: "Wallet number rejected",
                a: "Re-bind using the SIM registered on JazzCash/EasyPaisa. Third-party accounts are usually blocked.",
              },
              {
                q: "Deposit needed first?",
                a: "Some accounts require an initial top-up before first payout. See our deposit guide for safe funding steps.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#0A1029] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href={SITE.routes.deposit} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
            ← Deposit Guide
          </Link>
          <Link href={SITE.routes.download} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
            Download APK →
          </Link>
        </div>
      </section>
    </article>
  );
}
