import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">{SITE.name}</h2>
            <p className="text-sm text-gray-300 mb-4">
              {SITE.name} is a Teen Patti earning app for Pakistani players, with JazzCash and EasyPaisa support, clear install guidance, and practical bonus tips.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={SITE.routes.home} className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={SITE.routes.download} className="text-gray-300 hover:text-accent transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href={SITE.routes.pc} className="text-gray-300 hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href={SITE.routes.blog} className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={SITE.routes.about} className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={SITE.routes.contact} className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={SITE.routes.deposit} className="text-gray-300 hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <Link href={SITE.routes.withdraw} className="text-gray-300 hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/create-teen-patti-loot-account-and-login" className="text-gray-300 hover:text-accent transition-colors">
                  Account & Login
                </Link>
              </li>
              <li>
                <Link href="/blog/teen-patti-loot-tips-troubleshooting" className="text-gray-300 hover:text-accent transition-colors">
                  Tips & Fixes
                </Link>
              </li>
              <li>
                <Link href={SITE.routes.privacy} className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={SITE.routes.disclaimer} className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Download {SITE.name} APK for Android and start with clear deposit, withdraw, and bonus guidance.
            </p>
            <a
              href={SITE.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${SITE.name} app for Android`}
              className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
            >
              <span>DOWNLOAD NOW</span>
              <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">© 2026 {SITE.name}. All rights reserved. | <Link href="/" className="hover:text-accent">{SITE.domain}</Link></p>
        </div>
      </div>
    </footer>
  );
}
