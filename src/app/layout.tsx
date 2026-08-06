import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SITE } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0C0906",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: "Teen Patti Gold Pakistan v1.660 Download Official APK",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Download Teen Patti Gold APK for Android in Pakistan. Install guide, JazzCash & EasyPaisa tips, bonuses, and safe play steps on getteenpattigold.com.pk.",
  keywords: [
    "Teen Patti Gold",
    "Teen Patti Gold APK",
    "3 Patti Gold",
    "Teen Patti Gold download",
    "Teen Patti Gold Pakistan",
    "3 Patti Gold APK",
    "Teen Patti earning app",
    "JazzCash Teen Patti",
    "EasyPaisa Teen Patti",
    "Teen Patti Gold 2026",
  ],
  authors: [{ name: `${SITE.name} Team` }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: SITE.images.logo, type: "image/webp", sizes: "192x192" },
      { url: SITE.images.hero, type: "image/webp", sizes: "512x512" },
    ],
    apple: [{ url: SITE.images.logo, sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  alternates: {
    canonical: SITE.origin,
  },
  openGraph: {
    title: "Teen Patti Gold Pakistan v1.660 Download Official APK",
    description:
      "Download Teen Patti Gold APK for Android in Pakistan. JazzCash & EasyPaisa tips, bonuses, and safe install steps.",
    url: SITE.origin,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE.origin}${SITE.images.og}`,
        width: 512,
        height: 512,
        alt: `${SITE.name} - Teen Patti APK for Pakistan`,
      },
      {
        url: `${SITE.origin}${SITE.images.ogSquare}`,
        width: 512,
        height: 512,
        alt: `${SITE.name} - Teen Patti APK for Pakistan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Gold Pakistan v1.660 Download Official APK",
    description:
      "Download Teen Patti Gold APK for Android in Pakistan. JazzCash & EasyPaisa tips, bonuses, and safe install steps.",
    images: [
      {
        url: `${SITE.origin}${SITE.images.twitter}`,
        width: 512,
        height: 512,
        alt: `${SITE.name} - Teen Patti APK for Pakistan`,
      },
    ],
  },
  applicationName: SITE.name,
  category: "Gaming",
  classification: "Teen Patti Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href={SITE.images.logo} type="image/webp" sizes="192x192" />
        <link rel="icon" href={SITE.images.hero} type="image/webp" sizes="1024x1024" />
        <link rel="apple-touch-icon" href={SITE.images.logo} sizes="180x180" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(40, 28, 12, 0.55) 0%, rgba(12, 9, 6, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.origin,
              logo: `${SITE.origin}${SITE.images.logo}`,
              description:
                "Teen Patti Gold is a Teen Patti APK guide and download hub for Pakistani players with JazzCash and EasyPaisa support.",
            }),
          }}
        />

        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: SITE.name,
              operatingSystem: "Android",
              applicationCategory: "GameApplication",
              offers: {
                "@type": "Offer",
                price: SITE.price,
                priceCurrency: SITE.currency,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: SITE.ratingValue,
                bestRating: "5",
                ratingCount: SITE.ratingCount,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
