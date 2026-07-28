import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import { SITE } from "@/lib/site";

const slug = "teen-patti-gold-deposit-withdraw-time";
const title = "How Long Do Teen Patti Gold Deposits and Withdrawals Take?";
const description =
  "Typical JazzCash, EasyPaisa, and bank timing for Teen Patti Gold deposits and withdrawals in Pakistan — plus delay causes and what to do if stuck.";
const canonical = `${SITE.origin}/blog/${slug}`;

const articleBody =
  "Teen Patti Gold JazzCash and EasyPaisa deposits usually credit within 1 to 5 minutes when the wallet payment succeeds. Withdrawals often take 15 minutes to 2 hours on mobile wallets, and bank transfers may need several hours on business days. Delays come from OTP pending, name mismatch, peak queue, or carrier SMS lag. For step-by-step how-to, see the deposit and withdraw guides on getteenpattigold.com.pk.";

const faqs = [
  {
    q: "How long does a Teen Patti Gold JazzCash deposit take?",
    a: "Most successful JazzCash deposits reflect in the app within 1 to 5 minutes. If the Easypaisa or Jazz app shows payment complete but game balance is unchanged after 10 minutes, screenshot the wallet receipt before contacting support.",
  },
  {
    q: "Why is my Teen Patti Gold withdrawal still pending?",
    a: "Withdrawals can queue during evening peak hours, first-time wallet binding review, or if the requested amount needs manual verification. Wait at least 2 hours on mobile wallets before escalating.",
  },
  {
    q: "Do bank withdrawals take longer than JazzCash?",
    a: "Yes. Bank transfers typically need longer processing — often same day on business hours, sometimes next banking day if submitted late evening or on holidays.",
  },
  {
    q: "Where are the full deposit and withdraw steps?",
    a: "This article covers timing only. For button-by-button instructions, read the deposit money guide and withdraw money guide linked from getteenpattigold.com.pk.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Teen Patti Gold deposit time",
    "Teen Patti Gold withdrawal time",
    "Teen Patti Gold JazzCash processing",
    "Teen Patti Gold EasyPaisa delay",
    "Teen Patti Gold payout Pakistan",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: SITE.name,
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-29",
    modifiedTime: "2026-07-29",
    images: [
      {
        url: `${SITE.origin}${SITE.images.deposit}`,
        width: 1200,
        height: 630,
        alt: "Teen Patti Gold deposit and withdrawal timing guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE.origin}${SITE.images.deposit}`],
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

export default function DepositWithdrawTimePage() {
  return (
    <article>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished="2026-07-29"
        dateModified="2026-07-29"
        articleBody={articleBody}
        image={`${SITE.origin}${SITE.images.deposit}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href={SITE.routes.home} className="hover:text-[#FFA500] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li>
              <Link href={SITE.routes.blog} className="text-[#FFA500] transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium line-clamp-1">
              Deposit &amp; Withdraw Time
            </li>
          </ol>
        </nav>
      </div>

      <header className="max-w-4xl mx-auto px-4 md:px-8 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-[#FFA500]">How Long Do</span>
          <span className="text-white"> Teen Patti Gold Deposits and Withdrawals Take?</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Published July 29, 2026 · 6 min read
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Typical JazzCash, EasyPaisa, and bank timing for Pakistani players — not step-by-step
          buttons. For how-to walkthroughs, use our dedicated wallet guides.
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 space-y-10">
        <div className="flex justify-center">
          <Image
            src={SITE.images.deposit}
            alt="Teen Patti Gold deposit screen — JazzCash and EasyPaisa timing"
            title="Teen Patti Gold deposit processing time"
            width={1200}
            height={560}
            className="object-contain drop-shadow-2xl rounded-xl w-full max-w-3xl h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Why Timing Matters Before You Retry</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Nothing spikes anxiety like sending {SITE.minDeposit} or more to {SITE.name} and watching
            the in-game balance stay frozen. Most delays are normal queue time — not lost money.
            Knowing typical windows stops you from double-paying or spamming withdraw requests that
            slow review further.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            This article covers <strong className="text-white">how long transfers usually take</strong>.
            For screen-by-screen instructions, open our separate guides:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>
              <Link href={SITE.routes.deposit} className="text-[#FFA500] hover:underline">
                How to deposit money in Teen Patti Gold
              </Link>
            </li>
            <li>
              <Link href={SITE.routes.withdraw} className="text-[#FFA500] hover:underline">
                How to withdraw money from Teen Patti Gold
              </Link>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Winnings and payout speed vary by account history and payment rail. No guide can promise
            instant cash every time — treat timelines below as typical ranges seen by Pakistani
            players, not guarantees.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Typical Deposit Times (JazzCash &amp; EasyPaisa)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Mobile wallet deposits are the fastest route for most {SITE.name} users in Pakistan.
            After you approve payment inside JazzCash or EasyPaisa, the game wallet usually updates
            quickly if OTP and account name match.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-gray-300 text-sm md:text-base">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 pr-4 text-[#FFC107]">Method</th>
                  <th className="py-3 pr-4 text-[#FFC107]">Typical credit time</th>
                  <th className="py-3 text-[#FFC107]">When to worry</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4">JazzCash</td>
                  <td className="py-3 pr-4">1–5 minutes</td>
                  <td className="py-3">After 15 minutes with successful SMS receipt</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4">EasyPaisa</td>
                  <td className="py-3 pr-4">1–5 minutes</td>
                  <td className="py-3">After 15 minutes with wallet debit confirmed</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Bank transfer</td>
                  <td className="py-3 pr-4">30 min – few hours (business hours)</td>
                  <td className="py-3">Next working day if sent after bank cut-off</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Minimum deposit is <strong className="text-[#FFC107]">{SITE.minDeposit}</strong>. Smaller
            test amounts may still follow the same timing window. Peak hours — roughly 8 PM to midnight
            PKT — can add a few extra minutes when servers handle high lobby traffic plus wallet
            callbacks together.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Typical Withdrawal Times</h2>
          <div className="flex justify-center my-6">
            <Image
              src={SITE.images.withdraw}
              alt="Teen Patti Gold withdraw screen — payout timing to JazzCash or EasyPaisa"
              title="Teen Patti Gold withdrawal processing time"
              width={1200}
              height={560}
              className="object-contain drop-shadow-xl rounded-xl w-full max-w-2xl h-auto"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Withdrawals almost always take longer than deposits because {SITE.name} runs eligibility
            checks — wagering rules, bound wallet verification, and queue order. Minimum withdraw is{" "}
            <strong className="text-[#FFC107]">{SITE.minWithdraw}</strong> when your playable balance
            allows.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-gray-300 text-sm md:text-base">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 pr-4 text-[#FFC107]">Method</th>
                  <th className="py-3 pr-4 text-[#FFC107]">Typical payout time</th>
                  <th className="py-3 text-[#FFC107]">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4">JazzCash</td>
                  <td className="py-3 pr-4">15 min – 2 hours</td>
                  <td className="py-3">First withdraw may need extra review</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4">EasyPaisa</td>
                  <td className="py-3 pr-4">15 min – 2 hours</td>
                  <td className="py-3">Name on wallet must match binding</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Bank account</td>
                  <td className="py-3 pr-4">2 – 24 hours (business days)</td>
                  <td className="py-3">Weekends and public holidays extend wait</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Status may show &quot;processing&quot; inside the app while the wallet SMS has not arrived
            yet. Check both the game history tab and your JazzCash/EasyPaisa inbox before opening a
            second ticket.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Common Delay Causes</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4">
            <li>
              <strong className="text-white">Pending OTP:</strong> Deposit or withdraw stuck until
              you confirm the code in JazzCash/EasyPaisa — complete the wallet step first.
            </li>
            <li>
              <strong className="text-white">Wallet name mismatch:</strong> CNIC name on Easypaisa
              differs from bound profile; review can pause payout.
            </li>
            <li>
              <strong className="text-white">Unstable internet:</strong> Payment succeeded locally but
              callback to game server failed — balance catches up on reconnect.
            </li>
            <li>
              <strong className="text-white">Bonus wagering not met:</strong> Some promo balances
              cannot withdraw until playthrough rules clear — read offer terms in-app.
            </li>
            <li>
              <strong className="text-white">Duplicate requests:</strong> Submitting three withdraws
              in five minutes creates queue clutter; cancel extras if the app allows.
            </li>
            <li>
              <strong className="text-white">Carrier or bank maintenance:</strong> Jazz or SBP
              maintenance windows occasionally delay all wallet rails nationwide.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Step-by-step deposit troubleshooting lives on the{" "}
            <Link href={SITE.routes.deposit} className="text-[#FFA500] hover:underline">
              deposit guide
            </Link>
            . Withdraw binding and OTP tips are on the{" "}
            <Link href={SITE.routes.withdraw} className="text-[#FFA500] hover:underline">
              withdraw guide
            </Link>
            .
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">What to Do If a Transfer Is Stuck</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-4">
            <li className="leading-relaxed">
              Wait the full typical window from the tables above before retrying payment.
            </li>
            <li className="leading-relaxed">
              Screenshot the in-app transaction ID <strong className="text-white">and</strong> the
              JazzCash/EasyPaisa receipt SMS — support needs both.
            </li>
            <li className="leading-relaxed">
              Force-close {SITE.name}, reopen on stable Wi-Fi or 4G, and pull down to refresh wallet
              history.
            </li>
            <li className="leading-relaxed">
              Do <strong className="text-white">not</strong> send the same deposit amount twice unless
              support confirms the first failed.
            </li>
            <li className="leading-relaxed">
              Open in-app live chat with user ID, amount, time (PKT), and payment method.
            </li>
          </ol>
          <p className="text-gray-300 leading-relaxed">
            If money left your wallet but never credited after documented wait time, support can
            trace the merchant reference. Keep calm — duplicate panic deposits cause more reconciliation
            work than a single well-documented ticket.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Weekend and Holiday Expectations</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            JazzCash and EasyPaisa often stay fast on weekends because mobile wallets run 24/7.
            Bank-linked withdraw routes may slip to the next business day if you submit after Friday
            evening cut-offs or during Eid holidays when banking staff volume drops.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Plan larger withdraws earlier in the week if you rely on bank accounts instead of mobile
            wallets. Entertainment budgets still apply — faster deposits do not mean safer bets or
            assured profit.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-6">FAQ</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-lg font-semibold text-white mb-2">{q}</h3>
                <p className="text-gray-300 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center bg-[#1A140C] rounded-xl p-8 border border-gray-800">
          <p className="text-gray-300 mb-6">
            Ready to add funds or cash out? Open the wallet guides for steps, then use this page as
            your timing reference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              href={SITE.routes.deposit}
              className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white border-2 border-[#FFA500] hover:bg-[#FFA500]/10 transition-all"
            >
              Deposit Guide
            </Link>
            <Link
              href={SITE.routes.withdraw}
              className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
            >
              Withdraw Guide
            </Link>
          </div>
          <DownloadButton />
        </div>
      </div>
    </article>
  );
}
