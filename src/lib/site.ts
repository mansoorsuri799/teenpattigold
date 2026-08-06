/** Central brand / SEO config for Teen Patti Gold */
export const SITE = {
  name: "Teen Patti Gold",
  shortName: "Teen Patti Gold",
  domain: "getteenpattigold.com.pk",
  origin: "https://getteenpattigold.com.pk",
  supportEmail: "support@getteenpattigold.com.pk",
  /** Replace with your live APK / affiliate download URL when ready */
  downloadUrl:
    "https://getteenpattigold.com.pk/download-teen-patti-gold",
  version: "V1.660",
  fileSize: "54MB",
  os: "Android 5.0+",
  updateDate: "06-August-2026",
  ratingValue: "4.5",
  ratingCount: "500000",
  ratingCountLabel: "500,000",
  downloadsLabel: "500K+",
  price: "0",
  currency: "PKR",
  minDeposit: "100 PKR",
  minWithdraw: "100 PKR",
  /** App UI languages (Teen Patti Gold supports these in-app) */
  languages: "English, Urdu, Hindi",
  category: "Cards, Game",
  developer: "Teen Patti Gold",
  facebookUrl: "",
  routes: {
    home: "/",
    download: "/download-teen-patti-gold",
    deposit: "/deposit-money-in-teen-patti-gold",
    withdraw: "/withdraw-money-from-teen-patti-gold",
    pc: "/teen-patti-gold-for-pc",
    about: "/about-us",
    blog: "/blog",
    contact: "/contact-us",
    privacy: "/privacy",
    disclaimer: "/disclaimer",
  },
  images: {
    /** 512×512 app icon / brand mark */
    logo: "/teen-patti-gold.webp",
    hero: "/teen-patti-gold.webp",
    /**
     * Primary Image SEO alt for teen-patti-gold.webp (homepage LCP + download hero).
     * Keyword-led for “Teen Patti Gold” image search, still describes the app icon.
     */
    appIconAlt:
      "Teen Patti Gold APK Download — 3 Patti Gold Game Icon Pakistan 2026",
    /** Shorter mark for header/nav chrome */
    logoAlt: "Teen Patti Gold — 3 Patti Gold Official App Icon",
    /** 1200×560 screenshots */
    game: "/teen-patti-gold-games.webp",
    games: "/teen-patti-gold-games.webp",
    pakistan: "/teen-patti-gold-pakistan.webp",
    bonus: "/teen-patti-gold-daily-bonus.webp",
    dailyBonus: "/teen-patti-gold-daily-bonus.webp",
    deposit: "/teen-patti-gold-deposit-money.webp",
    withdraw: "/teen-patti-gold-withdraw-money.webp",
    refer: "/teen-patti-gold-refer-and-earn.webp",
    userAccount: "/teen-patti-gold-user-account.webp",
    hots: "/teen-patti-gold-hots.webp",
    liveChat: "/teen-patti-gold-live-chat-support.webp",
    freeProgram: "/7-get-1-free-program-teen-patti-gold.webp",
    /** Aliases used across pages */
    gameInterface: "/teen-patti-gold-games.webp",
    earnBonus: "/teen-patti-gold-daily-bonus.webp",
    addMoney: "/teen-patti-gold-deposit-money.webp",
    bindMail: "/teen-patti-gold-user-account.webp",
    rechargeRebate: "/teen-patti-gold-daily-bonus.webp",
    og: "/feature/og-image.webp",
    ogSquare: "/feature/og-image-square.webp",
    twitter: "/feature/twitter-card.webp",
  },
  imageSizes: {
    icon: { width: 512, height: 512 },
    screenshot: { width: 1200, height: 560 },
    og: { width: 512, height: 512 },
  },
  blogs: [
    {
      slug: "enable-teen-patti-gold-weekly-bonus",
      title: "How to Enable Teen Patti Gold Weekly Bonus & Clear Wager Fast",
      description:
        "Deposit 1000 PKR once to unlock the weekly bonus forever, then use Fortune Gems, Dragon vs Tiger, and other fast games to finish wagering.",
      date: "2026-08-06",
      readTime: "8 min read",
    },
    {
      slug: "recover-teen-patti-gold-account-password",
      title: "How to Recover Teen Patti Gold Account Password?",
      description:
        "Reset a forgotten Teen Patti Gold password with OTP, email, or live chat — safe steps for Pakistani players.",
      date: "2026-08-06",
      readTime: "7 min read",
    },
    {
      slug: "fix-teen-patti-gold-ip-exceeds-limit",
      title: "How to Fix Teen Patti Gold IP Exceeds Limit Issue?",
      description:
        "Clear causes and fixes for the Teen Patti Gold IP exceeds limit error on Android Wi-Fi and mobile data.",
      date: "2026-08-06",
      readTime: "8 min read",
    },
    {
      slug: "teen-patti-gold-otp-not-received",
      title: "Teen Patti Gold OTP Not Received? Fix Login SMS Delay",
      description:
        "Practical fixes when Teen Patti Gold OTP SMS is delayed or missing during registration and login.",
      date: "2026-08-06",
      readTime: "6 min read",
    },
  ],
} as const;

export type SiteBlog = (typeof SITE.blogs)[number];
