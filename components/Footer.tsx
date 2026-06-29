import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  Download,
  ExternalLink,
  FileText,
  Headphones,
  Layers3,
  Store,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { brand } from "@/lib/site-data";

const trustBadges = [
  "MT5 Software",
  "MQL5 Market Products",
  "Documentation & Support",
];

const productLinks = [
  { label: "FEF Professional Trade Copier MT5", href: "/trade-copier" },
  { label: "FEF Manual Trade Manager Pro MT5", href: "/manual-trade-manager" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
];

const softwareCenterLinks = [
  { label: "Downloads", href: "/downloads" },
  { label: "Changelog", href: "/changelog" },
  { label: "Documentation", href: "/documentation" },
  { label: "Support Center", href: "/support" },
];

const companyLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
  { label: "Documentation", href: "/documentation" },
];

const bottomLinks = [
  { label: "Documentation", href: "/documentation" },
  { label: "Support", href: "/support" },
  { label: "Downloads", href: "/downloads" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-steel transition hover:text-white"
    >
      <span>{label}</span>
      <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  );
}

function MarketLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:text-white"
    >
      <span>{label}</span>
      <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink">
      <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_20%_15%,rgba(29,168,255,0.20),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.84))] p-6 shadow-glow sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
                <BadgeCheck className="h-4 w-4" />
                FEF Trading Solutions
              </span>

              <h2 className="mt-6 max-w-3xl text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Build a professional{" "}
                <span className="text-gradient">MT5 software workflow</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-steel">
                Connect official FEF products, documentation, downloads and
                support into one software ecosystem.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/products"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-gradient px-5 py-3 text-sm font-semibold text-ink shadow-glow transition hover:brightness-110"
              >
                View Products
              </Link>
              <Link
                href="/downloads"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-electric/70 hover:bg-electric/10"
              >
                Visit Downloads
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          <section className="premium-card rounded-[2rem] border border-line bg-panel/70 p-6 sm:p-8">
            <Logo />

            <p className="mt-6 max-w-lg text-sm leading-7 text-steel">
              Professional MetaTrader 5 software for trade copying, manual trade
              management, documentation, downloads and support workflows.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl border border-line bg-ink/55 p-4">
                <Layers3 className="h-5 w-5 text-electric" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-steel">
                  Products
                </p>
                <p className="mt-1 text-sm font-bold text-white">MT5 tools</p>
              </div>
              <div className="rounded-2xl border border-line bg-ink/55 p-4">
                <Download className="h-5 w-5 text-electric" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-steel">
                  Center
                </p>
                <p className="mt-1 text-sm font-bold text-white">Downloads</p>
              </div>
              <div className="rounded-2xl border border-line bg-ink/55 p-4">
                <Headphones className="h-5 w-5 text-electric" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-steel">
                  Support
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {brand.support}
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <div className="premium-card rounded-2xl border border-line bg-panel/70 p-6">
              <h3 className="flex items-center gap-2 font-black text-white">
                <Layers3 className="h-4 w-4 text-electric" />
                Products
              </h3>
              <div className="mt-5 grid gap-3">
                {productLinks.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </div>
            </div>

            <div className="premium-card rounded-2xl border border-line bg-panel/70 p-6">
              <h3 className="flex items-center gap-2 font-black text-white">
                <BookOpen className="h-4 w-4 text-electric" />
                Software Center
              </h3>
              <div className="mt-5 grid gap-3">
                {softwareCenterLinks.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </div>
            </div>

            <div className="premium-card rounded-2xl border border-line bg-panel/70 p-6">
              <h3 className="flex items-center gap-2 font-black text-white">
                <Store className="h-4 w-4 text-electric" />
                Official Market
              </h3>
              <div className="mt-5 grid gap-3">
                <MarketLink
                  href={brand.mql5Url}
                  label="Trade Copier on MQL5"
                />
                <MarketLink
                  href={brand.manualTradeManagerMql5Url}
                  label="Manual Manager on MQL5"
                />
              </div>
              <p className="mt-5 text-xs leading-6 text-steel">
                Public product access and updates are handled through official
                MQL5 Market delivery paths.
              </p>
            </div>

            <div className="premium-card rounded-2xl border border-line bg-panel/70 p-6">
              <h3 className="flex items-center gap-2 font-black text-white">
                <Boxes className="h-4 w-4 text-electric" />
                Company
              </h3>
              <div className="mt-5 grid gap-3">
                {companyLinks.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-red-500/25 bg-red-500/[0.04] p-5">
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <p className="text-sm leading-7 text-steel">
              <span className="font-bold text-red-200">Risk note:</span>{" "}
              Trading involves risk. FEF software tools are designed to support
              workflow management and do not guarantee profit or remove market
              risk. Always test on demo before live use.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/[0.08] pt-8 text-sm text-steel lg:flex-row lg:items-center lg:justify-between">
          <p>
            Copyright {year} {brand.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {bottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
