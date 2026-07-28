import { SITE } from "@/lib/site";

export type SitemapImage = {
  loc: string;
  title: string;
  caption: string;
};

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: SitemapImage[];
};

const LASTMOD = "2026-07-29";

export const SITE_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: SITE.images.hero,
        title: `${SITE.name} - Official App Icon`,
        caption: `${SITE.name} APK for Android in Pakistan. Play Teen Patti with JazzCash and EasyPaisa support.`,
      },
      {
        loc: SITE.images.game,
        title: `${SITE.name} Game Lobby`,
        caption: `${SITE.name} game lobby screenshot`,
      },
      {
        loc: SITE.images.pakistan,
        title: `${SITE.name} Pakistan`,
        caption: `${SITE.name} for Pakistani players`,
      },
      {
        loc: SITE.images.bonus,
        title: `${SITE.name} Bonuses`,
        caption: `${SITE.name} bonuses and rewards screen`,
      },
      {
        loc: SITE.images.deposit,
        title: `${SITE.name} Deposit`,
        caption: `${SITE.name} deposit money screen`,
      },
      {
        loc: SITE.images.withdraw,
        title: `${SITE.name} Withdraw`,
        caption: `${SITE.name} withdraw money screen`,
      },
      {
        loc: SITE.images.refer,
        title: `${SITE.name} Refer and Earn`,
        caption: `${SITE.name} referral program screen`,
      },
      {
        loc: SITE.images.userAccount,
        title: `${SITE.name} User Account`,
        caption: `${SITE.name} account and login screen`,
      },
    ],
  },
  {
    path: SITE.routes.download,
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: SITE.images.hero,
        title: `Download ${SITE.name}`,
        caption: `Download ${SITE.name} APK for Android`,
      },
    ],
  },
  {
    path: SITE.routes.deposit,
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: SITE.images.deposit,
        title: `${SITE.name} Deposit Guide`,
        caption: `How to deposit money in ${SITE.name}`,
      },
    ],
  },
  {
    path: SITE.routes.withdraw,
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: SITE.images.withdraw,
        title: `${SITE.name} Withdraw Guide`,
        caption: `How to withdraw money from ${SITE.name}`,
      },
    ],
  },
  {
    path: SITE.routes.pc,
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: SITE.images.hero,
        title: `${SITE.name} for PC`,
        caption: `Play ${SITE.name} on PC with an Android emulator`,
      },
    ],
  },
  {
    path: SITE.routes.about,
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: SITE.images.hero,
        title: `About ${SITE.name}`,
        caption: `About the ${SITE.name} guide site for Pakistan`,
      },
    ],
  },
  {
    path: SITE.routes.blog,
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.8,
    images: [
      {
        loc: SITE.images.hero,
        title: `${SITE.name} Blog`,
        caption: `Guides and tips for ${SITE.name}`,
      },
    ],
  },
  {
    path: SITE.routes.contact,
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: SITE.routes.privacy,
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  {
    path: SITE.routes.disclaimer,
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  ...SITE.blogs.map((post) => ({
    path: `/blog/${post.slug}`,
    lastMod: post.date,
    changeFreq: "monthly" as const,
    priority: 0.8,
  })),
];

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.origin}${path.startsWith("/") ? path : `/${path}`}`;
}
