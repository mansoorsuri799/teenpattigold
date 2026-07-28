import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import { SITE } from "@/lib/site";

const slug = "create-teen-patti-loot-account-and-login";
const title = "How to Create a Teen Patti Loot Account and Login";
const description =
  "Step-by-step Teen Patti Loot registration, OTP login, and email binding for Pakistani players.";
const canonical = `${SITE.origin}/blog/${slug}`;

const articleBody =
  "Creating a Teen Patti Loot account starts with downloading the official APK from teenpattilootapp.com.pk, installing on Android 5.0+, and registering with a Pakistani mobile number. OTP verification secures login on new devices. Bind email inside the profile menu to recover access and unlock withdrawal features. Never share OTP codes with agents or Telegram support impersonators.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Teen Patti Loot account",
    "Teen Patti Loot login",
    "Teen Patti Loot registration",
    "Teen Patti Loot OTP",
    "Teen Patti Loot email bind",
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
        url: `${SITE.origin}${SITE.images.bindMail}`,
        width: 1200,
        height: 630,
        alt: "Create Teen Patti Loot account and login guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE.origin}${SITE.images.bindMail}`],
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

export default function CreateAccountLoginPage() {
  return (
    <article className="min-h-screen bg-primary">
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished="2026-07-29"
        articleBody={articleBody}
        image={`${SITE.origin}${SITE.images.bindMail}`}
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
              <Link href={SITE.routes.blog} className="hover:text-[#FFA500] transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium line-clamp-1">
              Create Account &amp; Login
            </li>
          </ol>
        </nav>
      </div>

      <header className="max-w-4xl mx-auto px-4 md:px-8 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-white">How to Create a </span>
          <span className="text-[#FFA500]">Teen Patti Loot</span>
          <span className="text-white"> Account and Login</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Published July 29, 2026 · 6 min read
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From APK install to OTP verification and email binding — a clear walkthrough for new
          Pakistani players joining {SITE.name}.
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 space-y-10">
        <div className="flex justify-center">
          <Image
            src={SITE.images.bindMail}
            alt="Teen Patti Loot account registration and email binding screen"
            title="Teen Patti Loot login and email bind"
            width={1200}
            height={560}
            className="object-contain drop-shadow-2xl rounded-xl w-full max-w-3xl h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Before You Register</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Account creation only takes a few minutes, but starting with the wrong APK wastes time
            and can put your number at risk. Install {SITE.name} from the{" "}
            <Link href={SITE.routes.download} className="text-[#FFA500] hover:underline">
              official download page
            </Link>{" "}
            on {SITE.domain} so your login connects to the real server cluster.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            You need an active Pakistani SIM that receives SMS OTP codes. VoIP or inactive numbers
            often fail verification. The app supports {SITE.languages} in the lobby, so you can
            switch language after login if Urdu or Hindi menus are easier.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Registration is free — you are not required to deposit immediately. Many players explore
            free tables or low-stake rooms first, then read the{" "}
            <Link href={SITE.routes.deposit} className="text-[#FFA500] hover:underline">
              deposit guide
            </Link>{" "}
            when they choose to add funds.
          </p>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Step-by-Step Registration</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li className="leading-relaxed">
              <strong className="text-white">Download and install:</strong> Tap DOWNLOAD NOW on{" "}
              {SITE.domain}, allow unknown sources if Android prompts you, and open the app.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">Enter mobile number:</strong> Use your personal SIM —
              the same number you want tied to withdrawals later.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">Verify OTP:</strong> Type the six-digit SMS code
              promptly. Codes expire quickly; request a fresh OTP if the timer runs out.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">Set profile details:</strong> Choose a display name and
              avatar. Avoid using your full legal name in public tables if privacy matters to you.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">Explore the lobby:</strong> Browse Teen Patti, Rummy,
              and mini games before adding money.
            </li>
          </ol>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Login on a New Phone</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {SITE.name} uses OTP login instead of memorizing long passwords — convenient for players
            who switch devices often. Open the app, enter your registered number, and confirm the
            fresh SMS code. If OTP never arrives, check signal strength, disable SMS filters, and
            wait sixty seconds before retrying.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Logging in on multiple devices may trigger security checks. That is normal. What is not
            normal is someone asking for your OTP on WhatsApp pretending to be support. {SITE.name}{" "}
            staff will never request your SMS code through social chat.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For install issues on new phones, see our{" "}
            <Link href="/blog/teen-patti-loot-tips-troubleshooting" className="text-[#FFA500] hover:underline">
              tips and troubleshooting guide
            </Link>
            .
          </p>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Why Email Binding Matters</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Email binding is easy to skip during excitement of a first win, but it becomes important
            when you request withdrawals or recover a locked account. Inside Profile → Security, add
            a Gmail or Outlook address you control and confirm the verification link.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Bound email helps support verify ownership if you lose SIM access. It also pairs with
            wallet KYC steps described in our{" "}
            <Link href={SITE.routes.withdraw} className="text-[#FFA500] hover:underline">
              withdraw guide
            </Link>
            . Complete binding early so your first cash-out is smoother.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Use an inbox only you access — shared family email accounts create recovery disputes
            later. After binding, screenshot the confirmation screen for your records.
          </p>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Account Security Tips</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Never share OTP, referral codes, or wallet PINs with &quot;agents.&quot;</li>
            <li>Log out on shared phones after playing.</li>
            <li>Update to {SITE.version} when prompted — older builds may lose login compatibility.</li>
            <li>Contact {SITE.supportEmail} from the email you bound, not random Telegram groups.</li>
          </ul>
        </section>

        <section className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Can I use two numbers on one account?</h3>
              <p className="text-gray-300 leading-relaxed">
                Each account is tied to one registered mobile number. Creating duplicate accounts on
                the same device may trigger anti-fraud limits.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">I did not receive OTP — what now?</h3>
              <p className="text-gray-300 leading-relaxed">
                Confirm the number format (+92), disable airplane mode, and retry after one minute.
                Persistent failures may mean carrier SMS delay — try again during off-peak hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Is email binding required?</h3>
              <p className="text-gray-300 leading-relaxed">
                You can play without it, but withdrawal and recovery flows work better once email is
                verified. Bind early to avoid delays later.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center bg-secondary rounded-xl p-8 border border-gray-800">
          <p className="text-gray-300 mb-6">
            Install the official APK, register with OTP, and bind email — then explore games at your
            own pace.
          </p>
          <DownloadButton />
        </div>
      </div>
    </article>
  );
}
