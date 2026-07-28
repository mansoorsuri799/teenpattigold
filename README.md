# Teen Patti Gold — getteenpattigold.com.pk

Next.js App Router site for **Teen Patti Gold** APK guides in Pakistan: download, JazzCash/EasyPaisa deposit & withdraw, PC emulator, and support blogs.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS (Poppins via `next/font`)
- Static/SSG pages with FAQ, HowTo, SoftwareApplication, and Breadcrumb JSON-LD

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Brand config

Domain, download URL, images, and blog list live in `src/lib/site.ts`. Update `SITE.downloadUrl` with your live APK / affiliate link before launch.

## SEO endpoints

- `/robots.txt`
- `/sitemap-index.xml` → `/index.xml` + `/image-sitemap.xml`

## Deploy

Deploy the Next.js app to Vercel, Netlify, or any Node host. Point `getteenpattigold.com.pk` DNS at the host and submit `https://getteenpattigold.com.pk/sitemap-index.xml` in Google Search Console.
