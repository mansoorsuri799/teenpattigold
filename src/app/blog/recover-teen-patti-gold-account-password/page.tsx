import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import { SITE } from "@/lib/site";
import DownloadButton from "@/components/DownloadButton";

const slug = "recover-teen-patti-gold-account-password";
const title = "How to Recover Teen Patti Gold Account Password?";
const description =
  "Reset a forgotten Teen Patti Gold password with OTP, email bind, or live chat — safe recovery steps for Pakistani players on getteenpattigold.com.pk.";
const canonical = `${SITE.origin}/blog/${slug}`;

const articleBody =
  "Forgot your Teen Patti Gold password? Most Pakistani players recover access through OTP on their registered mobile number, email binding inside the app, or in-app live chat support. Never share OTP with WhatsApp agents. Bind email early for faster recovery. If OTP fails, see the OTP troubleshooting guide and contact support with your user ID.";

const faqs = [
  {
    q: "Can I reset Teen Patti Gold password without my phone number?",
    a: "Recovery usually needs the registered mobile number for OTP. If you changed SIMs, bind email in advance or contact support with proof of ownership through live chat or the contact page.",
  },
  {
    q: "How long does Teen Patti Gold password OTP take?",
    a: "Most OTP codes arrive within 30 to 90 seconds on Jazz, Zong, Telenor, and Ufone. Wait at least 60 seconds before requesting again to avoid cooldown blocks.",
  },
  {
    q: "Is live chat safe for password recovery?",
    a: "Use only the live chat button inside the official Teen Patti Gold app. Never send OTP or passwords to Telegram or WhatsApp accounts claiming to be support.",
  },
  {
    q: "What if I forgot both password and registered number?",
    a: "Open a support ticket via contact us with any bound email, recent deposit screenshots, or user ID. Support may verify ownership before resetting access.",
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
    "Teen Patti Gold password recovery",
    "Teen Patti Gold forgot password",
    "Teen Patti Gold reset password",
    "Teen Patti Gold OTP login",
    "Teen Patti Gold account recovery Pakistan",
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
    publishedTime: "2026-10-09",
    modifiedTime: "2026-10-09",
    images: [
      {
        url: `${SITE.origin}${SITE.images.userAccount}`,
        width: 1200,
        height: 630,
        alt: "Teen Patti Gold account password recovery screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE.origin}${SITE.images.userAccount}`],
  },
};


export default function RecoverPasswordPage() {
  return (
    <article>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished="2026-10-09"
        dateModified="2026-10-09"
        articleBody={articleBody}
        image={`${SITE.origin}${SITE.images.userAccount}`}
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
              <Link href={SITE.routes.blog} className="hover:text-[#FFA500] transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium line-clamp-1">
              Password Recovery
            </li>
          </ol>
        </nav>
      </div>

      <header className="max-w-4xl mx-auto px-4 md:px-8 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-[#FFA500]">How to Recover</span>
          <span className="text-white"> Teen Patti Gold Account Password?</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Published October 9, 2026 · 7 min read
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Locked out of {SITE.name}? This guide walks Pakistani players through OTP reset, email
          binding, and official live chat recovery — without risky third-party &quot;hack&quot; tools.
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 space-y-10">
        <div className="flex justify-center">
          <Image
            src={SITE.images.userAccount}
            alt="Teen Patti Gold user account screen for password and profile settings"
            title="Recover Teen Patti Gold account password"
            width={1200}
            height={560}
            className="object-contain drop-shadow-2xl rounded-xl w-full max-w-3xl h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Why Password Recovery Matters</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {SITE.name} ties your wallet balance, bonus progress, and referral rewards to a single
            account. Forgetting your login password is common — especially if you registered quickly
            during a promo and never wrote credentials down. The good news: official recovery paths
            exist inside the app and do not require paid &quot;account unlock&quot; services floating
            around Facebook groups.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Before you panic, confirm you are on the genuine APK from{" "}
            <Link href={SITE.routes.home} className="text-[#FFA500] hover:underline">
              {SITE.domain}
            </Link>
            . Fake clones mimic login screens to steal numbers and OTP codes. If you have not
            installed yet, use our{" "}
            <Link href={SITE.routes.download} className="text-[#FFA500] hover:underline">
              download page
            </Link>{" "}
            for the current {SITE.version} build ({SITE.fileSize}).
          </p>
          <p className="text-gray-300 leading-relaxed">
            Recovery is about proving you own the registered mobile number or bound email — not
            guessing old passwords endlessly. That keeps accounts safer for everyone on Pakistani
            networks.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Method 1: Reset Password with OTP</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            OTP (one-time password) is the fastest route when you remember your mobile number but
            forgot the app password. {SITE.name} sends a short numeric code by SMS to the number you
            used at registration.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-4">
            <li className="leading-relaxed">
              Open {SITE.name} and tap <strong className="text-white">Login</strong> on the welcome
              screen.
            </li>
            <li className="leading-relaxed">
              Select <strong className="text-white">Forgot Password</strong> or{" "}
              <strong className="text-white">Reset via OTP</strong> (wording may vary by app version).
            </li>
            <li className="leading-relaxed">
              Enter your registered number in <strong className="text-white">03XX</strong> format
              without country code mistakes.
            </li>
            <li className="leading-relaxed">
              Wait for the SMS code — usually under two minutes on Jazz, Zong, Telenor, or Ufone.
            </li>
            <li className="leading-relaxed">
              Type the OTP in the app field, set a new password, and log in again.
            </li>
          </ol>
          <p className="text-gray-300 leading-relaxed">
            If the SMS never arrives, read our dedicated{" "}
            <Link
              href="/blog/teen-patti-gold-otp-not-received"
              className="text-[#FFA500] hover:underline"
            >
              OTP not received guide
            </Link>{" "}
            before spamming the resend button. Rapid retries can trigger a temporary cooldown.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Method 2: Bind Email for Backup Recovery</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Email binding is the safety net most players skip until they need it. Once linked, support
            can verify ownership faster and you may receive recovery options when SMS routes fail
            during load-shedding hours or tower maintenance in Lahore, Karachi, or Islamabad.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-4">
            <li className="leading-relaxed">
              Log in and open <strong className="text-white">Profile → Account Settings</strong> or{" "}
              <strong className="text-white">Security</strong>.
            </li>
            <li className="leading-relaxed">
              Tap <strong className="text-white">Bind Email</strong> and enter an inbox you check
              regularly (Gmail, Outlook, etc.).
            </li>
            <li className="leading-relaxed">
              Confirm the verification link or code sent to that email.
            </li>
            <li className="leading-relaxed">
              Keep the email active — changing it later may need support assistance.
            </li>
          </ol>
          <p className="text-gray-300 leading-relaxed">
            Even if you recover via OTP today, bind email now while you still have access. Future
            password resets become smoother, especially if you upgrade phones or swap SIM cards.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Method 3: Live Chat Recovery</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            When OTP and email both fail — wrong number on file, lost SIM, or repeated error messages
            — use in-app live chat. This is the official channel for account verification beyond
            automated SMS reset.
          </p>
          <div className="flex justify-center my-6">
            <Image
              src={SITE.images.liveChat}
              alt="Teen Patti Gold live chat support for account recovery"
              title="Teen Patti Gold live chat password help"
              width={1200}
              height={560}
              className="object-contain drop-shadow-xl rounded-xl w-full max-w-2xl h-auto"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Prepare these details before opening chat: registered mobile number (if known), user ID
            shown in profile, bound email, and screenshots of recent wallet activity if asked. Support
            may request deposit or withdraw proof to confirm the account belongs to you — not to
            invade privacy, but to block takeover attempts.
          </p>
          <p className="text-gray-300 leading-relaxed">
            You can also reach the editorial team for site-related questions via{" "}
            <Link href={SITE.routes.contact} className="text-[#FFA500] hover:underline">
              contact us
            </Link>
            . For in-game account locks, live chat inside the app remains the primary route.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4">
            <li>
              <strong className="text-white">Sharing OTP on WhatsApp:</strong> Real {SITE.name} staff
              never ask for login codes in private messages.
            </li>
            <li>
              <strong className="text-white">Using VPN during reset:</strong> Can trigger IP limits
              or delay SMS delivery on some carriers.
            </li>
            <li>
              <strong className="text-white">Creating a duplicate account:</strong> A second registration
              on the same device does not merge old balance — recover the original instead.
            </li>
            <li>
              <strong className="text-white">Weak new passwords:</strong> Use something unique; avoid
              reusing your JazzCash PIN or email password.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Card games involve real money deposits for many players. Treat account credentials like
            wallet access — no guarantees on winnings, but you can protect what you already have in
            the balance.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">When to Contact Support Directly</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Escalate to support if: OTP works but password reset button stays greyed out; you see
            &quot;account not found&quot; for a number you definitely registered; or balance visible
            before logout is missing after recovery. Include date, time, and network (Jazz 4G, home
            Wi-Fi, etc.) in your message.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Email {SITE.supportEmail} for documentation on {SITE.domain}, or use{" "}
            <Link href={SITE.routes.contact} className="text-[#FFA500] hover:underline">
              our contact form
            </Link>{" "}
            for guide corrections. In-app live chat handles gameplay account issues faster during
            peak evening hours in Pakistan.
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
            Need a fresh install before resetting? Download the latest {SITE.name} APK and retry
            password recovery from the official login screen.
          </p>
          <DownloadButton />
        </div>
      </div>
    </article>
  );
}
