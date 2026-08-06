import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.pc}`;

export const metadata: Metadata = {
  title: "Teen Patti Gold for PC | Play on Windows with Android Emulator 2026",
  description: `Play Teen Patti Gold on PC using BlueStacks, LDPlayer, or GameLoop. Download APK ${SITE.version}, emulator setup, requirements, and performance tips for Pakistan.`,
  keywords: [
    "Teen Patti Gold for PC",
    "Teen Patti Gold PC download",
    "Teen Patti Gold BlueStacks",
    "Teen Patti Gold emulator",
    "play Teen Patti Gold on Windows",
    "3 Patti Gold PC",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Teen Patti Gold for PC — Emulator Guide",
    description: "Run Teen Patti Gold on Windows via Android emulator. Full setup walkthrough.",
    url: canonical,
    siteName: SITE.name,
    type: "article",
    images: [{ url: `${SITE.origin}${SITE.images.hero}`, alt: "Teen Patti Gold on PC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Gold for PC",
    description: "BlueStacks / LDPlayer / GameLoop setup for Teen Patti Gold on Windows.",
  },
};

export default function PcPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    operatingSystem: "Windows 10+, Android (via emulator)",
    applicationCategory: "GameApplication",
    inLanguage: ["en", "ur", "hi"],
    offers: {
      "@type": "Offer",
      price: SITE.price,
      priceCurrency: SITE.currency,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.ratingValue,
      ratingCount: SITE.ratingCount,
      bestRating: "5",
    },
    softwareVersion: SITE.version,
    fileSize: SITE.fileSize,
    downloadUrl: SITE.downloadUrl,
    description: `Play Teen Patti Gold on PC using an Android emulator with the official APK.`,
    image: `${SITE.origin}${SITE.images.logo}`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Play Teen Patti Gold on PC",
    description: "Install an Android emulator, sideload the Teen Patti Gold APK, and play on a larger screen.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Install emulator", text: "Download BlueStacks, LDPlayer, or GameLoop for Windows." },
      { "@type": "HowToStep", position: 2, name: "Download APK", text: "Get Teen Patti Gold APK from the official download page." },
      { "@type": "HowToStep", position: 3, name: "Install in emulator", text: "Drag the APK into the emulator or use Install APK." },
      { "@type": "HowToStep", position: 4, name: "Launch game", text: "Open Teen Patti Gold inside the emulator and sign in." },
    ],
  };

  const pcFaq = [
    {
      question: "Is there a native Teen Patti Gold Windows installer?",
      answer:
        "No. Teen Patti Gold ships as an Android APK. On PC you install an Android emulator, then sideload the same APK used on phones.",
    },
    {
      question: "Which emulator is best for Teen Patti Gold in Pakistan?",
      answer:
        "BlueStacks is easiest for beginners, LDPlayer is lighter on mid-range laptops, and GameLoop is a solid alternative. Choose based on your RAM and which official installer you trust.",
    },
    {
      question: "Can I deposit with JazzCash from the PC emulator?",
      answer:
        "Approvals still happen on your physical phone JazzCash or EasyPaisa app. The emulator runs the game; mobile wallets complete merchant OTPs and PINs.",
    },
    {
      question: "Teen Patti Gold crashes or shows a black screen on PC?",
      answer:
        "Switch emulator graphics between OpenGL and DirectX, update GPU drivers, allocate more RAM, and reinstall a clean APK from this site — not a mod pack.",
    },
  ] as const;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pcFaq.map((item) => ({
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
      { "@type": "ListItem", position: 2, name: "Teen Patti Gold for PC", item: canonical },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li><Link href={SITE.routes.home} className="hover:text-[#FFA500]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium">Teen Patti Gold for PC</li>
          </ol>
        </nav>
      </div>

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-[#FFA500]">Teen Patti Gold for PC</span>
          <br />
          <span className="text-white text-3xl md:text-4xl">Windows Emulator Guide {new Date().getFullYear()}</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
          {SITE.name} ships as an Android APK — there is no native Windows .exe installer. Pakistani players who prefer a laptop or desktop screen run the app inside BlueStacks, LDPlayer, or GameLoop while keeping the same OTP login and wallet flows as on mobile.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10" aria-label={`Rating: ${SITE.ratingValue} out of 5 based on ${SITE.ratingCountLabel} ratings`}>
          <div className="flex text-[#FFC107] text-xl" aria-hidden="true">
            {"★".repeat(4)}
            <span className="text-[#FFC107]/50">★</span>
          </div>
          <span className="text-white font-semibold">{SITE.ratingValue} / 5</span>
          <span className="text-gray-400">({SITE.ratingCountLabel} ratings)</span>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src={SITE.images.hero}
            alt="Teen Patti Gold on PC via Android emulator"
            title={`${SITE.name} for PC`}
            width={320}
            height={320}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
        <a
          href={SITE.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-5 text-white font-bold rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
        >
          <span className="mr-4">DOWNLOAD NOW</span>
          <span className="bg-[#f97316] rounded-full p-3 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
        </a>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">PC Requirements</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody>
              {[
                ["OS", "Windows 10 or 11 (64-bit recommended)"],
                ["Processor", "Intel i5 / Ryzen 5 or better"],
                ["RAM", "8 GB minimum; 16 GB for smooth multitasking"],
                ["Storage", `${SITE.fileSize} APK plus 5+ GB for emulator image`],
                ["Virtualization", "Enable VT-x / AMD-V in BIOS for best FPS"],
                ["Network", "Stable broadband for live tables and OTP SMS relay"],
                ["APK Version", `${SITE.version} (${SITE.updateDate})`],
              ].map(([k, v], i) => (
                <tr key={k} className={i % 2 === 0 ? "bg-[#1A140C]/50" : "bg-[#0C0906]/50"}>
                  <td className="py-4 px-6 font-medium text-white">{k}</td>
                  <td className="py-4 px-6 text-gray-300">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#1A140C] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why Play on a Bigger Screen?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Clearer card layout", desc: "Teen Patti hand rankings and pot totals are easier to read on a 1080p monitor than a 6-inch phone." },
              { title: "Stable session length", desc: "Desktops stay plugged in — fewer mid-hand disconnects from low battery during long Rummy rounds." },
              { title: "Keyboard shortcuts", desc: "BlueStacks and LDPlayer let you map keys for fold, call, or raise — faster than repeated taps during turbo tables." },
              { title: "Stream or record", desc: "Content creators can capture gameplay with OBS while the emulator runs windowed, useful for tutorial videos." },
            ].map((f) => (
              <div key={f.title} className="bg-[#1a140c] p-6 rounded-lg border-l-4 border-[#FFC107]">
                <h3 className="text-lg font-bold text-[#FFA500] mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Emulator Comparison</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "BlueStacks 5", pros: "Polished UI, good for beginners, built-in APK install button.", cons: "Heavier RAM use; disable extra bloat on low-spec PCs." },
            { name: "LDPlayer 9", pros: "Lightweight, strong FPS on mid-range laptops, popular in South Asia.", cons: "Occasional ad prompts — skip bundled offers during install." },
            { name: "GameLoop", pros: "Stable for gaming APKs, decent keyboard mapping.", cons: "Less frequent updates than BlueStacks; check official site only." },
          ].map((emu) => (
            <div key={emu.name} className="bg-[#1a140c] rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-[#FFC107] mb-3">{emu.name}</h3>
              <p className="text-gray-300 text-sm mb-2"><strong className="text-green-400">Pros:</strong> {emu.pros}</p>
              <p className="text-gray-300 text-sm"><strong className="text-orange-400">Cons:</strong> {emu.cons}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#1A140C] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Setup Steps (BlueStacks / LDPlayer / GameLoop)</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Install your chosen emulator",
                body: "Download from the official vendor site only — never from repack torrents. Run the installer as administrator, sign in with a Google account if prompted, and let the virtual Android image finish downloading.",
              },
              {
                step: "2",
                title: "Fetch the Teen Patti Gold APK",
                body: `Visit our download page or use the button above to save ${SITE.version} (${SITE.fileSize}) to your PC Downloads folder. Verify file size before sideloading.`,
              },
              {
                step: "3",
                title: "Load APK into the emulator",
                body: 'Drag the file onto the emulator home screen, or click "Install APK" / "Add App" and browse to Downloads. Wait for the install progress bar to complete.',
              },
              {
                step: "4",
                title: "Adjust performance settings",
                body: "Allocate 4 CPU cores and 4 GB RAM in emulator settings if your hardware allows. Enable high FPS mode and set resolution to 1080p for readable cards.",
              },
              {
                step: "5",
                title: "Launch and log in",
                body: "Open Teen Patti Gold inside the virtual Android environment. Complete OTP login — keep your phone nearby for SMS. Bind email in Profile for recovery.",
              },
              {
                step: "6",
                title: "Wallet deposits from phone",
                body: "JazzCash and EasyPaisa approvals still happen on your physical phone. The emulator does not replace mobile banking apps — approve merchant requests there when prompted.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#1A140C] rounded-lg p-6 border-l-4 border-[#0ea5e9]">
                <h3 className="text-lg font-bold text-white mb-2">Step {item.step}: {item.title}</h3>
                <p className="text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center mb-10">
          <Image
            src={SITE.images.games}
            alt={`${SITE.name} gameplay on PC emulator — Teen Patti table view`}
            title={`${SITE.name} PC gameplay`}
            width={1200}
            height={560}
            className="object-contain rounded-xl w-full max-w-3xl h-auto"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Emulator Tips</h2>
        <ul className="max-w-3xl mx-auto space-y-3">
          {[
            "Close Chrome tabs and other heavy apps before opening live tables.",
            "Use wired Ethernet instead of weak Wi‑Fi to reduce lag on timed bets.",
            "If the app crashes on launch, switch emulator graphics from OpenGL to DirectX (or vice versa).",
            "Uninstall repacked or mod APKs — they often fail integrity checks on PC emulators.",
            "Update GPU drivers; outdated Intel HD graphics cause black-screen launches.",
            "Playing on PC does not change game odds — set a budget before joining high-stake rooms.",
          ].map((tip) => (
            <li key={tip} className="bg-[#1a140c] rounded-lg p-4 text-gray-300 flex gap-3 border border-gray-800">
              <span className="text-[#FFC107]">•</span>
              {tip}
            </li>
          ))}
        </ul>
        <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
          Verify local regulations before participating in real-money play. {SITE.name} on PC is the same Android app — responsible gaming rules apply regardless of screen size.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">PC Setup FAQs</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {pcFaq.map((item) => (
            <div key={item.question} className="bg-[#1A140C] rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-[#FFC107] mb-2">{item.question}</h3>
              <p className="text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-4 text-center flex flex-wrap justify-center gap-6">
        <Link href={SITE.routes.download} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
          ← Android Download
        </Link>
        <Link href={SITE.routes.deposit} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
          Deposit Guide →
        </Link>
        <Link href={SITE.routes.home} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
          Home →
        </Link>
      </section>
    </article>
  );
}
