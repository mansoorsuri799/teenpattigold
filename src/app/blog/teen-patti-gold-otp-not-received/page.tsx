import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import { SITE } from "@/lib/site";

const slug = "teen-patti-gold-otp-not-received";
const title = "Teen Patti Gold OTP Not Received? Fix Login SMS Delay";
const description =
  "Practical fixes when Teen Patti Gold OTP SMS is delayed or missing during registration and login — wrong number, network, spam, and retry cooldown for Pakistan.";
const canonical = `${SITE.origin}/blog/${slug}`;

const articleBody =
  "Teen Patti Gold OTP SMS usually arrives within 30 to 90 seconds on Pakistani networks. If missing, check the registered 03XX number, disable VPN, verify signal strength, inspect SMS spam folders, wait 60 seconds before resend, and avoid airplane mode toggles during delivery. For password reset after OTP works, see the account recovery guide. Contact support with user ID if codes fail for 24 hours.";

const faqs = [
  {
    q: "How long should I wait for Teen Patti Gold OTP?",
    a: "Wait at least 60 to 90 seconds before tapping resend. Most Jazz, Zong, Telenor, and Ufone codes arrive within two minutes on a stable signal.",
  },
  {
    q: "Why is Teen Patti Gold OTP going to spam?",
    a: "Some Android SMS apps filter short-code senders. Open your messages app spam or blocked folder and mark the sender as not spam if you find the code there.",
  },
  {
    q: "Can VPN block Teen Patti Gold login OTP?",
    a: "Yes. VPNs can delay or block SMS routing and trigger IP limits. Turn VPN off, use mobile data, and retry login.",
  },
  {
    q: "What if OTP works but I forgot my password?",
    a: "Use the OTP to verify identity, then follow the password recovery guide to set a new login password and bind email for next time.",
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
    "Teen Patti Gold OTP not received",
    "Teen Patti Gold SMS delay",
    "Teen Patti Gold login OTP",
    "Teen Patti Gold verification code",
    "Teen Patti Gold OTP Pakistan",
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
        url: `${SITE.origin}${SITE.images.userAccount}`,
        width: 1200,
        height: 630,
        alt: "Teen Patti Gold OTP login and SMS verification help",
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

export default function OtpNotReceivedPage() {
  return (
    <article>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished="2026-07-29"
        dateModified="2026-07-29"
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
              <Link href={SITE.routes.blog} className="text-[#FFA500] transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium line-clamp-1">
              OTP Not Received
            </li>
          </ol>
        </nav>
      </div>

      <header className="max-w-4xl mx-auto px-4 md:px-8 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-[#FFA500]">Teen Patti Gold OTP Not Received?</span>
          <span className="text-white"> Fix Login SMS Delay</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Published July 29, 2026 · 6 min read
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Waiting on a verification code that never lands? These fixes cover Pakistani mobile
          networks, wrong numbers, spam filters, and safe retry timing for {SITE.name} login.
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 space-y-10">
        <div className="flex justify-center">
          <Image
            src={SITE.images.userAccount}
            alt="Teen Patti Gold login screen waiting for OTP SMS verification"
            title="Fix Teen Patti Gold OTP not received"
            width={1200}
            height={560}
            className="object-contain drop-shadow-2xl rounded-xl w-full max-w-3xl h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Why OTP SMS Delays Happen</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {SITE.name} uses SMS one-time passwords to confirm your mobile number at registration,
            login, password reset, and sometimes wallet actions. The code is short-lived — usually
            valid for a few minutes — and travels from the game server through Pakistani carrier
            gateways to your inbox.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Delays rarely mean your account is banned. More often, the issue is local: weak tower
            signal during load-shedding, a typo in the 03XX field, VPN interference, or an overactive
            SMS spam filter on Samsung or Xiaomi phones. Understanding that saves you from
            unnecessary reinstalls or duplicate registrations.
          </p>
          <p className="text-gray-300 leading-relaxed">
            OTP codes are for the app field on your phone only. Anyone asking you to forward SMS to
            WhatsApp is running a scam — not {SITE.name} support.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Fix 1: Confirm the Registered Number</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The most common OTP failure is a wrong digit. Pakistani numbers should be entered as{" "}
            <strong className="text-white">03XXXXXXXXX</strong> — eleven digits starting with 03.
            Do not add +92 unless the screen explicitly asks for international format.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Check the SIM active in slot 1 matches the number you typed.</li>
            <li>If you dual-SIM, temporarily disable the secondary SIM and retry.</li>
            <li>Recently ported your number? Wait up to 24 hours for routing to stabilise.</li>
            <li>New SIM replacement — update binding via support if old number is dead.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            After OTP login succeeds, bind email so future recovery is easier — see our{" "}
            <Link
              href="/blog/recover-teen-patti-gold-account-password"
              className="text-[#FFA500] hover:underline"
            >
              password recovery guide
            </Link>
            .
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Fix 2: Network and Signal Checks</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            SMS delivery needs stable carrier connectivity — not just Wi-Fi for the app. Walk through
            these steps on Jazz, Zong, Telenor, or Ufone:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-4">
            <li className="leading-relaxed">
              Turn off VPN, proxy, and battery saver apps that restrict background data.
            </li>
            <li className="leading-relaxed">
              Switch from Wi-Fi-only to mobile data — or vice versa if tower congestion is suspected.
            </li>
            <li className="leading-relaxed">
              Toggle aeroplane mode off for ten seconds, then wait on full signal bars before resend.
            </li>
            <li className="leading-relaxed">
              Move near a window or outdoors if indoor coverage is weak — common in basements.
            </li>
            <li className="leading-relaxed">
              Confirm you have SMS balance or an active bundle that includes incoming texts.
            </li>
          </ol>
          <p className="text-gray-300 leading-relaxed">
            Peak hours (8–11 PM PKT) and cricket match nights can slow gateway delivery by one to
            three minutes. Patience beats hammering the resend button.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Fix 3: Check Spam and Blocked Senders</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Android SMS apps increasingly filter unknown short codes into spam folders — especially
            after MIUI or One UI updates. Open your default Messages app and search:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Spam / junk folder</li>
            <li>Blocked numbers list</li>
            <li>OTP or verification keyword in all messages</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you find the code buried in spam, mark the sender as trusted and request a fresh OTP
            inside {SITE.name}. Third-party SMS apps (some WhatsApp-style inboxes) may not show
            banking-style codes — switch to the stock Messages app temporarily.
          </p>
          <div className="flex justify-center my-6">
            <Image
              src={SITE.images.liveChat}
              alt="Teen Patti Gold live chat for OTP and login support"
              title="Contact Teen Patti Gold support for OTP issues"
              width={1200}
              height={560}
              className="object-contain drop-shadow-xl rounded-xl w-full max-w-2xl h-auto"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Fix 4: Respect Retry Cooldown</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Tapping &quot;Resend OTP&quot; five times in thirty seconds triggers anti-abuse cooldowns
            on both the app and carrier side. The UI may still look ready even when the server blocks
            new codes — making it feel like SMS is broken when you are actually rate-limited.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Safe retry pattern:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-4">
            <li className="leading-relaxed">Request OTP once and wait a full 90 seconds.</li>
            <li className="leading-relaxed">If nothing arrives, fix network issues above first.</li>
            <li className="leading-relaxed">Request a second code — then wait 3 to 5 minutes.</li>
            <li className="leading-relaxed">Third attempt only after switching mobile data vs Wi-Fi.</li>
          </ol>
          <p className="text-gray-300 leading-relaxed">
            During cooldown, older codes may still work if they arrived late. Scroll SMS history before
            requesting yet another — duplicate texts sometimes batch-deliver.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">When OTP Works but Login Still Fails</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Received the code but password screen rejects you? That is a separate issue from SMS
            delay. Use OTP to verify identity, then reset password through the{" "}
            <Link
              href="/blog/recover-teen-patti-gold-account-password"
              className="text-[#FFA500] hover:underline"
            >
              account recovery walkthrough
            </Link>
            . IP exceeds limit errors during login need the dedicated network fix article on our blog.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Keep the app on {SITE.version} from the official download link — outdated builds
            occasionally mishandle OTP input fields after Android security patches.
          </p>
        </section>

        <section className="bg-[#1A140C] rounded-xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Contact Support After 24 Hours</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If no OTP arrives across two different networks and a confirmed-correct number over 24
            hours, escalate with in-app live chat or{" "}
            <Link href={SITE.routes.contact} className="text-[#FFA500] hover:underline">
              contact us
            </Link>
            . Include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Mobile number attempted (last three digits masked in email if you prefer)</li>
            <li>User ID if already partially registered</li>
            <li>Carrier name and city</li>
            <li>Screenshots of empty SMS after timed waits</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Support may suggest alternate verification or check server-side blocks tied to your
            number. Never pay third parties for &quot;OTP bypass&quot; — they cannot access carrier
            gateways legally.
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
            OTP sorted? Download or update {SITE.name} and complete login from the official app.
          </p>
          <DownloadButton />
        </div>
      </div>
    </article>
  );
}
