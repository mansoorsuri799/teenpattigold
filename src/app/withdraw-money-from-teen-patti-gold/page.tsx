import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.withdraw}`;

export const metadata: Metadata = {
  title: "Withdraw Money from Teen Patti Gold | JazzCash & EasyPaisa Payout Guide",
  description: `Withdraw from Teen Patti Gold to JazzCash or EasyPaisa. Minimum ${SITE.minWithdraw}. Processing tips, eligibility checks, and troubleshooting for Pakistani users.`,
  keywords: [
    "Teen Patti Gold withdraw",
    "cash out Teen Patti Gold",
    "Teen Patti Gold JazzCash withdraw",
    "Teen Patti Gold EasyPaisa payout",
    "3 Patti Gold withdrawal Pakistan",
  ],
  openGraph: {
    title: "Withdraw Money from Teen Patti Gold",
    description: `Step-by-step withdrawal guide — min ${SITE.minWithdraw}. JazzCash & EasyPaisa supported.`,
    url: canonical,
    siteName: SITE.name,
    type: "article",
    images: [{ url: `${SITE.origin}${SITE.images.withdraw}`, alt: "Teen Patti Gold withdraw screen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Withdraw Money from Teen Patti Gold",
    description: `How to request payouts from Teen Patti Gold — min ${SITE.minWithdraw}.`,
  },
  alternates: { canonical },
};

export default function WithdrawMoneyPage() {
  const withdrawFaq = [
    {
      question: "Teen Patti Gold withdrawal stuck on Pending?",
      answer:
        "Wait at least 30–60 minutes. If unchanged, note the order ID and contact in-app support once — avoid hammering duplicate requests.",
    },
    {
      question: "Minimum not met when withdrawing from Teen Patti Gold?",
      answer: `Your withdrawable balance must reach ${SITE.minWithdraw} after bonus rules. Check the wallet breakdown screen for locked vs available chips.`,
    },
    {
      question: "Teen Patti Gold wallet number rejected?",
      answer:
        "Re-bind using the SIM registered on JazzCash or EasyPaisa. Third-party or family member wallets are usually blocked for AML checks.",
    },
    {
      question: "Does the first Teen Patti Gold payout require a deposit?",
      answer:
        "Some new accounts need an initial top-up before the first cash-out clears. See the deposit guide for safe funding steps.",
    },
    {
      question: "Why is the JazzCash or EasyPaisa amount less than requested?",
      answer:
        "Wallet providers may deduct their own fee on incoming transfers. Compare gross request vs net credit in both apps.",
    },
    {
      question: "How long do Teen Patti Gold withdrawals take?",
      answer:
        "Many JazzCash and EasyPaisa payouts complete within minutes to a few hours when queues are clear. Peak evenings, KYC holds, and bank rails can take longer. Timing is never guaranteed.",
    },
  ] as const;

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Withdraw Money from Teen Patti Gold",
    description: `Withdrawal guide for Teen Patti Gold with minimum ${SITE.minWithdraw}.`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Open Withdraw", text: "Go to Wallet → Withdraw inside Teen Patti Gold." },
      { "@type": "HowToStep", position: 2, name: "Bind wallet", text: "Link JazzCash or EasyPaisa if not already verified." },
      { "@type": "HowToStep", position: 3, name: "Enter amount", text: `Request at least ${SITE.minWithdraw} if balance allows.` },
      { "@type": "HowToStep", position: 4, name: "Submit & wait", text: "Confirm OTP if asked and monitor wallet for incoming transfer." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: withdrawFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              Withdraw Money
            </li>
          </ol>
        </nav>
      </div>

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How to Withdraw Money from Teen Patti Gold
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            JazzCash &amp; EasyPaisa payouts — minimum {SITE.minWithdraw}
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Cashing out from {SITE.name} sends PKR to your linked JazzCash or EasyPaisa wallet when account rules are met.
            This page explains eligibility, step-by-step submission, and what to do when a payout stalls — without
            promising fixed timing or guaranteed success.
          </p>
          <Image
            src={SITE.images.withdraw}
            alt="Teen Patti Gold withdraw money screen"
            title="Withdraw from Teen Patti Gold"
            width={1200}
            height={560}
            className="object-contain drop-shadow-2xl mx-auto rounded-xl w-full max-w-2xl h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A140C] rounded-2xl p-8 md:p-12 border border-gray-800">
            <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Withdrawal Basics</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cash-out requests inside <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:underline font-semibold">{SITE.name}</Link> typically route to the same JazzCash or EasyPaisa number used for deposits. The displayed minimum withdrawal is <strong className="text-[#FFC107]">{SITE.minWithdraw}</strong>, though bonus chips, referral rewards, or promo balance may remain locked until wagering conditions clear.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Payout speed is not fixed. Some transfers land in minutes during quiet hours; others queue during peak evening play or server maintenance. A past successful withdrawal does not guarantee the next one will match that timing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Bind email and complete any KYC prompts in Profile before your first large payout. Accounts that skip verification steps often see requests rejected with generic error codes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Request a Withdrawal</h2>
          <ol className="space-y-6 list-none">
            {[
              {
                title: "Check withdrawable balance",
                body: "Open Wallet and review the breakdown. Promo chips, locked bonus value, and referral pending amounts may not count toward payout. Only submit what the withdrawable line shows.",
              },
              {
                title: "Verify wallet binding",
                body: "Bind the JazzCash or EasyPaisa number you control — same SIM registered on the wallet. Mismatched numbers are the top rejection reason for Pakistani players.",
              },
              {
                title: "Enter payout amount",
                body: `Type an amount from ${SITE.minWithdraw} up to your daily limit. Double-check digits; reversing a wrong submission may require support intervention.`,
              },
              {
                title: "Complete security step",
                body: "OTP or transaction PIN may appear. Enter it only inside the official app. Never share codes with WhatsApp agents claiming to speed up payouts.",
              },
              {
                title: "Track status in-app",
                body: "Statuses like Pending, Processing, and Completed vary by version. Screenshot the order ID or reference number if displayed — useful when contacting support.",
              },
              {
                title: "Confirm in your wallet app",
                body: "Open JazzCash or EasyPaisa and verify the incoming transfer. SMS alerts can lag behind the in-app credit by several minutes.",
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
        <div className="max-w-4xl mx-auto bg-[#1A140C] rounded-2xl p-8 md:p-10 border border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-4">How Long Withdrawals Usually Take</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            When your account is verified and the withdrawable balance clears bonus rules, JazzCash and EasyPaisa
            payouts often land within minutes to a few hours. Bank destinations and peak evening queues can take longer.
            A previous fast cash-out does not lock in the same timing for the next request.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Pending status for under an hour is common. After that, use the order ID once with support instead of
            stacking duplicate requests. Deposit timing and funding steps stay on the{" "}
            <Link href={SITE.routes.deposit} className="text-[#0ea5e9] hover:underline">
              deposit guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#FFA500] mb-8">Processing Tips</h2>
          <ul className="space-y-4">
            {[
              "Submit withdrawals during off-peak hours when possible — late-night maintenance windows can delay queues.",
              "Keep the app on the latest build from our official download link before requesting large amounts.",
              "Ensure email binding and any ID verification steps are complete if the app prompts you.",
              "Avoid duplicate requests for the same amount — repeated submissions can freeze the queue until support clears them.",
              "Use the same device and network you normally play on to reduce automated fraud flags.",
              "Match deposit and withdraw wallet types when the app requires it — some accounts block cross-wallet payouts.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 bg-[#1a140c] rounded-lg p-4 border border-gray-800">
                <span className="text-[#FFC107] font-bold">✓</span>
                <span className="text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Troubleshooting</h2>
          <div className="space-y-6">
            {withdrawFaq.map((item) => (
              <div key={item.question} className="bg-[#1A140C] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto pb-16 text-center">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href={SITE.routes.deposit} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
            ← Deposit Guide
          </Link>
          <Link href={SITE.routes.download} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
            Download APK →
          </Link>
          <Link href={SITE.routes.blog} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
            Support Blog →
          </Link>
        </div>
      </section>
    </article>
  );
}
