import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://feftradingsolutions.com"),
  title: {
    default: `${brand.name} | Professional MT5 Trading Software`,
    template: `%s | ${brand.name}`
  },
  description:
    "Premium MetaTrader 5 trading software from FEF Trading Solutions, including the FEF Professional Trade Copier MT5.",
  keywords: [
    "FEF Trading Solutions",
    "FEF Professional Trade Copier MT5",
    "MT5 trade copier",
    "MetaTrader 5 software",
    "master slave trade copier",
    "multi-account trading software"
  ],
  openGraph: {
    title: `${brand.name} | Professional MT5 Trading Software`,
    description:
      "Powerful, reliable and intelligent trading solutions engineered for professional traders, portfolio managers and multi-account trading.",
    url: "https://feftradingsolutions.com",
    siteName: brand.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Professional MT5 Trading Software`,
    description:
      "Built for Traders. Engineered for Performance. Professional MetaTrader 5 software tools from FEF Trading Solutions."
  }
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
