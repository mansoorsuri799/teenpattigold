import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import { SITE } from "@/lib/site";

const slug = "teen-patti-loot-bonuses-vip-guide";
const title = "Teen Patti Loot Bonuses and VIP Guide 2026";
const description =
  "Welcome offers, weekly rewards, referral value, and VIP perks explained for Teen Patti Loot.";
const canonical = `${SITE.origin}/blog/${slug}`;

const articleBody =
  "Teen Patti Loot offers welcome bonuses, recharge rebates, weekly missions, referral rewards, and VIP tiers for active players in Pakistan. Bonuses usually carry wagering requirements before withdrawal. VIP levels unlock faster support and higher rebate percentages based on play volume — not guaranteed profit. Use official in-app promo screens and read terms before claiming any offer.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Teen Patti Loot bonuses",
    "Teen Patti Loot VIP",
    "Teen Patti Loot referral",
    "Teen Patti Loot recharge rebate",
    "Teen Patti Loot welcome bonus",
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
    images: [
      {
        url: `${SITE.origin}${SITE.images.earnBonus}`,
        width: 1200,
        height: 630,
        alt: "Teen Patti Loot bonuses and VIP guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE.origin}${SITE.images.earnBonus}`],
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

export default function BonusesVipGuidePage() {
  return (
    <article className="min-h-screen bg-primary">
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished="2026-07-29"
        articleBody={articleBody}
        image={`${SITE.origin}${SITE.images.earnBonus}`}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href={SITE.routes.home} className="hover:text-[#FFA500] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li>
              <Link href={SITE.routes.blog} className="hover:text-[#FFA500] hover:underline transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium line-clamp-1">
              Bonuses &amp; VIP Guide
            </li>
          </ol>
        </nav>
      </div>

      <header className="max-w-4xl mx-auto px-4 md:px-8 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-[#FFA500]">Teen Patti Loot</span>
          <span className="text-white"> Bonuses and VIP Guide 2026</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Published July 29, 2026 · 7 min read
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Understand welcome offers, recharge rebates, referral rewards, and VIP tiers — what they
          actually do, and what they never promise.
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 space-y-10">
        <div className="flex justify-center">
          <Image
            src={SITE.images.earnBonus}
            alt="Teen Patti Loot bonus and VIP rewards screen"
            title="Teen Patti Loot bonuses guide"
            width={1200}
            height={560}
            className="object-contain drop-shadow-2xl rounded-xl w-full max-w-3xl h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">How Bonuses Work in {SITE.name}</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Bonuses inside {SITE.name} are marketing credits and rebate mechanics — not free cash you
            can instantly withdraw. Pakistani players often see welcome packs, daily check-ins, and
            recharge rebates stacked in the Promotions tab. Each offer has rules: minimum deposit,
            eligible games, expiry timers, and wagering multiples before cash-out.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Treat bonuses as extra play time, not income. A 100% recharge match sounds generous, but
            if wagering requires ten times turnover on Teen Patti tables, you can still lose the
            underlying deposit. Read the popup terms before tapping Claim.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When you are ready to add funds, follow our{" "}
            <Link href={SITE.routes.deposit} className="text-[#FFA500] hover:underline">
              deposit money guide
            </Link>{" "}
            for JazzCash and EasyPaisa steps — this article focuses on reward types, not payment
            mechanics.
          </p>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Welcome and New Player Offers</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            New accounts often receive a starter bundle after first login — coins, table vouchers, or
            a matched first recharge. The exact percentage changes by season, so screenshot the
            official in-app banner instead of trusting old Facebook posts.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Benefits of claiming carefully: you stretch a small {SITE.minDeposit} test deposit into
            more hands at low-stake Teen Patti tables, letting you learn UI flow without jumping to
            high blinds immediately.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you have not registered yet, start with the{" "}
            <Link href="/blog/create-teen-patti-loot-account-and-login" className="text-[#FFA500] hover:underline">
              account creation guide
            </Link>{" "}
            and install from the{" "}
            <Link href={SITE.routes.download} className="text-[#FFA500] hover:underline">
              download page
            </Link>
            .
          </p>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Recharge Rebates and Weekly Missions</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
            <Image
              src={SITE.images.rechargeRebate}
              alt="Teen Patti Loot recharge rebate promotion"
              title="Recharge rebate in Teen Patti Loot"
              width={1200}
              height={560}
              className="object-contain rounded-lg w-full max-w-xs h-auto mx-auto md:mx-0"
              sizes="320px"
            />
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Recharge rebates return a slice of your top-up as bonus balance or coins — usually
                tied to specific days or VIP level. Weekly missions ask you to complete tasks like
                playing a set number of Rummy hands or logging in seven days straight.
              </p>
              <p className="text-gray-300 leading-relaxed">
                These features reward consistent play, not guaranteed profit. Skip missions that push
                you beyond your budget. Rebates stack best when you already planned to deposit — not
                when you chase losses to hit a threshold.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Referral Program</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Image
              src={SITE.images.refer}
              alt="Teen Patti Loot refer and earn program"
              title="Teen Patti Loot referral rewards"
              width={1200}
              height={560}
              className="object-contain rounded-lg w-full max-w-xs h-auto mx-auto md:mx-0"
              sizes="320px"
            />
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every account gets a referral code in the Invite section. When friends install{" "}
                {SITE.name} through your link and meet activity requirements, both sides may receive
                coin rewards or rebate boosts. Share only with people who understand real-money risk.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Referral income varies by invite quality and platform rules — never promise friends a
                fixed daily amount. Fake promoters who guarantee PKR 5,000 per referral outside the
                app are not official.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Withdraw referral earnings through the normal wallet flow described in our{" "}
                <Link href={SITE.routes.withdraw} className="text-[#FFA500] hover:underline">
                  withdraw guide
                </Link>
                , subject to minimum limits and verification.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">VIP Tiers Explained</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            VIP levels track cumulative play volume and recharge activity. Higher tiers may unlock
            faster support queues, birthday gifts, exclusive rebate percentages, and access to
            private table limits. Progress bars live under Profile → VIP.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            VIP status reflects engagement, not skill. Moving from Bronze to Silver might need more
            monthly turnover than casual players want — that is fine. Playing within your budget at
            lower tiers is smarter than forcing volume to chase a badge.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Rebate boost on selected recharge days</li>
            <li>Priority ticket handling at {SITE.supportEmail}</li>
            <li>Seasonal gift boxes (coins or vouchers — terms vary)</li>
            <li>Higher daily mission caps for experienced players</li>
          </ul>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Smart Bonus Habits</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Screenshot every claimed offer with timestamp and wagering text. Decline third-party
            &quot;bonus loaders&quot; who ask for your login. Use bonuses on games you already
            understand — Teen Patti blind rules, Rummy sequences — instead of experimental mini
            games with unclear odds.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When bonus balance blocks withdrawal, finish required turnover or forfeit unused promo
            funds according to in-app rules. For safety context, read{" "}
            <Link href="/blog/is-teen-patti-loot-safe-real-pakistan" className="text-[#FFA500] hover:underline">
              Is Teen Patti Loot safe in Pakistan?
            </Link>
          </p>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Can I withdraw bonus money instantly?</h3>
              <p className="text-gray-300 leading-relaxed">
                Usually no — most bonuses require wagering on eligible tables first. Check the
                promotion details screen for the exact multiplier and expiry.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Do VIP levels expire?</h3>
              <p className="text-gray-300 leading-relaxed">
                Some seasons reset partial progress if account activity drops for long periods. The
                VIP page shows your current tier and maintenance requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Where do I deposit for rebate offers?</h3>
              <p className="text-gray-300 leading-relaxed">
                Use the in-app wallet — see our{" "}
                <Link href={SITE.routes.deposit} className="text-[#FFA500] hover:underline">
                  deposit guide
                </Link>{" "}
                for JazzCash and EasyPaisa steps. Never send money to personal accounts claiming to
                activate bonuses.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center bg-secondary rounded-xl p-8 border border-gray-800">
          <p className="text-gray-300 mb-6">
            Install {SITE.name}, check live promotions inside the app, and play responsibly within
            your budget.
          </p>
          <DownloadButton />
        </div>
      </div>
    </article>
  );
}
