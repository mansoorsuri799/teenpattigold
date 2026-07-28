/** Central brand / SEO config for Teen Patti Loot */
export const SITE = {
  name: "Teen Patti Loot",
  shortName: "Teen Patti Loot",
  domain: "teenpattilootapp.com.pk",
  origin: "https://teenpattilootapp.com.pk",
  supportEmail: "support@teenpattilootapp.com.pk",
  downloadUrl:
    "https://3pattilootpkk1.com/?from_gameid=4742809&channelCode=200000",
  version: "V1.232",
  fileSize: "48.5MB",
  os: "Android 5.0+",
  updateDate: "29-July-2026",
  ratingValue: "4.5",
  ratingCount: "125000",
  ratingCountLabel: "125,000",
  downloadsLabel: "300K+",
  price: "0",
  currency: "PKR",
  minDeposit: "10 PKR",
  minWithdraw: "100 PKR",
  languages: "English, Urdu, Hindi",
  category: "Cards, Game",
  developer: "Teen Patti Loot",
  facebookUrl: "https://www.facebook.com/",
  routes: {
    home: "/",
    download: "/download-teen-patti-loot",
    deposit: "/deposit-money-in-teen-patti-loot",
    withdraw: "/withdraw-money-from-teen-patti-loot",
    pc: "/teen-patti-loot-for-pc",
    about: "/about-us",
    blog: "/blog",
    contact: "/contact-us",
    privacy: "/privacy",
    disclaimer: "/disclaimer",
  },
  images: {
    /** 512×512 app icon / brand mark */
    logo: "/teen-patti-loot.webp",
    hero: "/teen-patti-loot.webp",
    /** 1200×560 screenshots */
    game: "/teen-patti-loot-game.webp",
    pakistan: "/teen-patti-loot-pakistan.webp",
    bonus: "/teen-patti-loot-bonus.webp",
    deposit: "/teen-patti-loot-deposit-money.webp",
    withdraw: "/teen-patti-loot-withdraw-money.webp",
    refer: "/teen-patti-loot-refer-and-earn.webp",
    userAccount: "/teen-patti-loot-user-account.webp",
    /** Aliases used across pages */
    gameInterface: "/teen-patti-loot-game.webp",
    games: "/teen-patti-loot-pakistan.webp",
    earnBonus: "/teen-patti-loot-bonus.webp",
    addMoney: "/teen-patti-loot-deposit-money.webp",
    bindMail: "/teen-patti-loot-user-account.webp",
    rechargeRebate: "/teen-patti-loot-bonus.webp",
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
      slug: "is-teen-patti-loot-safe-real-pakistan",
      title: "Is Teen Patti Loot Safe and Real in Pakistan?",
      description:
        "A practical safety check for Teen Patti Loot APK in Pakistan — payments, install risks, and how to spot fake apps.",
      date: "2026-07-29",
      readTime: "8 min read",
    },
    {
      slug: "create-teen-patti-loot-account-and-login",
      title: "How to Create a Teen Patti Loot Account and Login",
      description:
        "Step-by-step Teen Patti Loot registration, OTP login, and email binding for Pakistani players.",
      date: "2026-07-29",
      readTime: "6 min read",
    },
    {
      slug: "teen-patti-loot-bonuses-vip-guide",
      title: "Teen Patti Loot Bonuses and VIP Guide 2026",
      description:
        "Welcome offers, weekly rewards, referral value, and VIP perks explained for Teen Patti Loot.",
      date: "2026-07-29",
      readTime: "7 min read",
    },
    {
      slug: "teen-patti-loot-tips-troubleshooting",
      title: "Teen Patti Loot Tips and Common Install Fixes",
      description:
        "Smart play tips plus fixes for Unknown Sources, login, and install issues on Teen Patti Loot APK.",
      date: "2026-07-29",
      readTime: "7 min read",
    },
  ],
} as const;

export type SiteBlog = (typeof SITE.blogs)[number];
