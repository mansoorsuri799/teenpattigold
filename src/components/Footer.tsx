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
              {SITE.name} is a Teen Patti earning app guide for Pakistani players, with JazzCash and EasyPaisa support, clear install steps, and practical troubleshooting.
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
                <Link href="/blog/recover-teen-patti-gold-account-password" className="text-gray-300 hover:text-accent transition-colors">
                  Password Recovery
                </Link>
              </li>
              <li>
                <Link href="/blog/fix-teen-patti-gold-ip-exceeds-limit" className="text-gray-300 hover:text-accent transition-colors">
                  IP Limit Fix
                </Link>
              </li>
              <li>
                <Link href="/blog/enable-teen-patti-gold-weekly-bonus" className="text-gray-300 hover:text-accent transition-colors">
                  Weekly Bonus Guide
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
              Get the latest {SITE.name} APK ({SITE.version}, {SITE.fileSize}) for Android in Pakistan.
            </p>
            <a
              href={SITE.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
            >
              DOWNLOAD NOW
            </a>
            <p className="text-xs text-gray-500 mt-4">
              Contact:{" "}
              <a href={`mailto:${SITE.supportEmail}`} className="text-accent hover:underline">
                {SITE.supportEmail}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {SITE.domain}. All rights reserved. Play responsibly. 18+.
          </p>
        </div>
      </div>
    </footer>
  );
}
