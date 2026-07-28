import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const canonical = `${SITE.origin}${SITE.routes.pc}`;

export const metadata: Metadata = {
  title: "Teen Patti Loot for PC | Play on Windows with Android Emulator 2026",
  description: `Play Teen Patti Loot on PC using BlueStacks, LDPlayer, or GameLoop. Download APK ${SITE.version}, emulator setup, requirements, and performance tips for Pakistan.`,
  keywords: [
    "Teen Patti Loot for PC",
    "Teen Patti Loot PC download",
    "Teen Patti Loot BlueStacks",
    "Teen Patti Loot emulator",
    "play Teen Patti on Windows",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Teen Patti Loot for PC — Emulator Guide",
    description: "Run Teen Patti Loot on Windows via Android emulator. Full setup walkthrough.",
    url: canonical,
    siteName: SITE.name,
    type: "article",
    images: [{ url: `${SITE.origin}${SITE.images.hero}`, alt: "Teen Patti Loot on PC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Loot for PC",
    description: "BlueStacks / LDPlayer / GameLoop setup for Teen Patti Loot on Windows.",
  },
};

export default function PcPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Play Teen Patti Loot on PC",
    description: "Install an Android emulator, sideload the Teen Patti Loot APK, and play on a larger screen.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Install emulator", text: "Download BlueStacks, LDPlayer, or GameLoop for Windows." },
      { "@type": "HowToStep", position: 2, name: "Download APK", text: "Get Teen Patti Loot APK from the official download page." },
      { "@type": "HowToStep", position: 3, name: "Install in emulator", text: "Drag the APK into the emulator or use Install APK." },
      { "@type": "HowToStep", position: 4, name: "Launch game", text: "Open Teen Patti Loot inside the emulator and sign in." },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Teen Patti Loot for PC", item: canonical },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li><Link href={SITE.routes.home} className="hover:text-[#FFA500]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#FFC107] font-medium">Teen Patti Loot for PC</li>
          </ol>
        </nav>
      </div>

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-[#FFA500]">Teen Patti Loot for PC</span>
          <br />
          <span className="text-white text-3xl md:text-4xl">Windows Emulator Guide {new Date().getFullYear()}</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          {SITE.name} ships as an Android APK — there is no native Windows installer. You can still play on a laptop or desktop by running the app inside BlueStacks, LDPlayer, or GameLoop.
        </p>
        <div className="flex justify-center mb-10">
          <Image
            src={SITE.images.hero}
            alt="Teen Patti Loot on PC via Android emulator"
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
                ["Network", "Stable broadband for live tables"],
              ].map(([k, v], i) => (
                <tr key={k} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                  <td className="py-4 px-6 font-medium text-white">{k}</td>
                  <td className="py-4 px-6 text-gray-300">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why Play on a Bigger Screen?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Clearer card layout", desc: "Teen Patti tables are easier to read on a 1080p monitor than a small phone." },
              { title: "Stable session length", desc: "Desktops stay plugged in — fewer mid-hand disconnects from low battery." },
              { title: "Keyboard shortcuts", desc: "Some emulators map keys for faster bet actions (configure in emulator settings)." },
              { title: "Stream or record", desc: "Content creators can capture gameplay with OBS while the emulator runs windowed." },
            ].map((f) => (
              <div key={f.title} className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#FFC107]">
                <h3 className="text-lg font-bold text-[#FFA500] mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Setup Steps (BlueStacks / LDPlayer / GameLoop)</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Install your chosen emulator",
                body: "Download from the official vendor site only. Run the installer as administrator and sign in with a Google account if prompted.",
              },
              {
                step: "2",
                title: "Fetch the Teen Patti Loot APK",
                body: `Visit our download page or use the button above to save ${SITE.version} (${SITE.fileSize}) to your PC.`,
              },
              {
                step: "3",
                title: "Load APK into the emulator",
                body: 'Drag the file onto the emulator home screen, or click "Install APK" / "Add App" and browse to Downloads.',
              },
              {
                step: "4",
                title: "Adjust performance settings",
                body: "Allocate 4 CPU cores and 4 GB RAM in emulator settings if your hardware allows. Enable high FPS mode for smoother animations.",
              },
              {
                step: "5",
                title: "Launch and log in",
                body: "Open Teen Patti Loot inside the virtual Android environment. Complete OTP login the same way you would on a phone.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#0ea5e9]">
                <h3 className="text-lg font-bold text-white mb-2">Step {item.step}: {item.title}</h3>
                <p className="text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Emulator Tips</h2>
        <ul className="max-w-3xl mx-auto space-y-3">
          {[
            "Close Chrome tabs and other heavy apps before opening live tables.",
            "Use wired Ethernet instead of weak Wi‑Fi to reduce lag on timed bets.",
            "If the app crashes on launch, switch emulator graphics mode from OpenGL to DirectX (or vice versa).",
            "Wallet deposits still flow through JazzCash/EasyPaisa on your phone — the emulator does not replace mobile banking apps.",
            "Uninstall repacked or mod APKs; they often fail integrity checks on PC emulators.",
          ].map((tip) => (
            <li key={tip} className="bg-[#0A1029] rounded-lg p-4 text-gray-300 flex gap-3">
              <span className="text-[#FFC107]">•</span>
              {tip}
            </li>
          ))}
        </ul>
        <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
          Playing on PC does not change game odds. Only wager amounts you can afford to lose, and verify local regulations before participating.
        </p>
      </section>

      <section className="py-8 px-4 text-center">
        <Link href={SITE.routes.download} className="text-[#0ea5e9] hover:text-[#FFA500] font-semibold">
          ← Back to Android Download
        </Link>
      </section>
    </article>
  );
}
