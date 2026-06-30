import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const siteUrl = "https://www.feftradingsolutions.com/";
const siteName = "FEF Trading Solutions";
const siteDescription =
  "Professional MetaTrader 5 trading software for trade copying, manual trade management, documentation, downloads, support, and workflow-focused trading tools.";
const socialImage = "/images/hero.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "FEF Trading Solutions",
    "MT5 trade copier",
    "MetaTrader 5 software",
    "trade copier MT5",
    "manual trade manager MT5",
    "trading software",
    "MQL5 Market",
    "MT5 tools",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    siteName,
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: socialImage,
        alt: `${siteName} MetaTrader 5 trading software`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
