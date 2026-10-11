import type { Metadata, Viewport } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || "http://localhost:3000"),
  title: { default: "شیلو | فهم رفتار، طراحی تغییر", template: "%s | شیلو" },
  description: siteConfig.description,
  openGraph: {
    title: "شیلو | فهم رفتار، طراحی تغییر",
    description: siteConfig.description,
    locale: "fa_IR",
    type: "website",
    siteName: "SHILOO | شیلو",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "شیلو؛ فهم رفتار، طراحی تغییر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شیلو | فهم رفتار، طراحی تغییر",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#285C61" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          رفتن به محتوای اصلی
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
