import type { Metadata } from "next";
import {
  BadgeCheck,
  BookOpen,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Download,
  ExternalLink,
  Headphones,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Store,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "MT5 Trading Software Products",
  description:
    "Explore FEF Trading Solutions products for MetaTrader 5, including professional trade copying tools, manual trade management software, documentation, downloads, and workflow-focused trading utilities.",
  alternates: {
    canonical: "https://www.feftradingsolutions.com/products",
  },
  openGraph: {
    title: "MT5 Trading Software Products | FEF Trading Solutions",
    description:
      "Explore FEF Trading Solutions products for MetaTrader 5, including professional trade copying tools, manual trade management software, documentation, downloads, and workflow-focused trading utilities.",
    url: "https://www.feftradingsolutions.com/products",
    images: ["/images/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MT5 Trading Software Products | FEF Trading Solutions",
    description:
      "Explore FEF Trading Solutions products for MetaTrader 5, including professional trade copying tools, manual trade management software, documentation, downloads, and workflow-focused trading utilities.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const heroStats = [
  "Official MQL5 Products",
  "MetaTrader 5 Workflow",
  "Documentation & Support",
];

const mainProducts = [
  {
    name: "FEF Professional Trade Copier MT5",
    status: "Available on MQL5 Market",
    description:
      "Professional master/slave trade copier for MetaTrader 5 account synchronization.",
    benefits: [
      "Master/slave synchronization",
      "Multi-account workflow",
      "Operator monitoring",
      "MQL5 Market delivery",
    ],
    mql5Url: brand.mql5Url,
    productHref: "/trade-copier",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    name: "FEF Manual Trade Manager Pro MT5",
    status: "Available on MQL5 Market",
    description:
      "Manual trade management and visual market assistant dashboard for MetaTrader 5.",
    benefits: [
      "Manual trade protection",
      "SL/TP, breakeven, trailing and partial close",
      "Visual market tools",
      "MQL5 Market delivery",
    ],
    mql5Url: brand.manualTradeManagerMql5Url,
    productHref: "/manual-trade-manager",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
];

const comparisonRows = [
  {
    label: "Purpose",
    copier: "Copy trades from master to slave accounts",
    manager: "Manage manual trades with structured controls and visual context",
  },
  {
    label: "Best for",
    copier: "Multi-account execution workflows",
    manager: "Manual traders and operators",
  },
  {
    label: "Main workflow",
    copier: "Synchronization",
    manager: "Manual trade management",
  },
  {
    label: "Availability",
    copier: "MQL5 Market",
    manager: "MQL5 Market",
  },
  {
    label: "Related page",
    copier: "/trade-copier",
    manager: "/manual-trade-manager",
  },
];

const roadmapItems = [
  { name: "Trade Copier", status: "Available", available: true },
  { name: "Manual Trade Manager", status: "Available", available: true },
  { name: "Downloads Center", status: "Available", available: true },
  { name: "Documentation", status: "Available", available: true },
  { name: "Support Center", status: "Available", available: true },
  { name: "Risk Manager", status: "Planned", available: false },
  { name: "Trade Scanner", status: "Planned", available: false },
  { name: "Customer Portal", status: "Planned", available: false },
  { name: "License Manager", status: "Planned", available: false },
];

const workflowStack = [
  {
    title: "Trade Copier handles account synchronization",
    description:
      "Master and slave account workflows stay organized through a dedicated copier product.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Manual Manager supports manual trade control",
    description:
      "Manual traders can structure SL/TP, breakeven, trailing and visual context workflows.",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "Downloads Center centralizes official product access",
    description:
      "Product access paths point to official MQL5 Market pages instead of fake direct files.",
    icon: <Download className="h-5 w-5" />,
  },
  {
    title: "Documentation supports setup and safe operation",
    description:
      "Guidance helps users prepare configuration, demo testing and product review steps.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Support Center helps users troubleshoot product workflows",
    description:
      "Support paths are organized around product setup, MQL5 delivery and practical checks.",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    title: "Future tools expand the FEF ecosystem",
    description:
      "Planned roadmap modules remain clearly marked as future ecosystem direction.",
    icon: <Boxes className="h-5 w-5" />,
  },
];

const safeUsageItems = [
  "Use official MQL5 Market product pages",
  "Read documentation before deployment",
  "Test on demo first",
  "Confirm broker symbol names and settings",
  "Monitor first live sessions manually",
  "Trading software does not remove market risk",
];

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald shadow-emerald">
              <span className="h-2 w-2 rounded-full bg-emerald shadow-emerald" />
              FEF Software Ecosystem
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Professional MT5 software products for{" "}
              <span className="text-gradient">serious trading workflows</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              FEF Trading Solutions is building a trading technology ecosystem
              for trade copying, manual trade management, documentation,
              downloads, support and future professional MT5 tools.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/downloads">Visit Downloads</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View Pricing
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat}
                className="premium-card rounded-2xl border border-line bg-panel/70 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Main products
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Official FEF products available through MQL5 Market
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {mainProducts.map((product) => (
            <article
              key={product.name}
              className="premium-card premium-glow relative overflow-hidden rounded-[2rem] border border-line bg-panel/80 p-6 sm:p-8"
            >
              <div className="site-grid absolute inset-0 opacity-15" aria-hidden="true" />
              <div
                className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-electric/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-electric/25 bg-electric/10 text-electric">
                    {product.icon}
                  </span>
                  <span className="rounded-full border border-emerald/35 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black text-white sm:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-steel">
                  {product.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {product.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="rounded-2xl border border-line bg-ink/60 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                        <p className="text-sm font-semibold leading-6 text-white">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink
                    href={product.mql5Url}
                    external
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Buy on MQL5
                  </ButtonLink>
                  <ButtonLink href={product.productHref} variant="secondary">
                    View Product
                  </ButtonLink>
                  <ButtonLink href="/documentation" variant="ghost">
                    Documentation
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Product comparison
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Choose the product that matches your operating workflow
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Layers3 className="h-6 w-6 text-electric" />
              <h3 className="text-2xl font-black text-white">Trade Copier</h3>
            </div>
            <div className="mt-6 space-y-4">
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-line bg-ink/60 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">
                    {row.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white">
                    {row.copier}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/trade-copier" variant="secondary">
                Related Page
              </ButtonLink>
              <ButtonLink
                href={brand.mql5Url}
                external
                variant="ghost"
                icon={<ExternalLink className="h-4 w-4" />}
              >
                Official Purchase
              </ButtonLink>
            </div>
          </article>

          <article className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-6 w-6 text-emerald" />
              <h3 className="text-2xl font-black text-white">
                Manual Trade Manager
              </h3>
            </div>
            <div className="mt-6 space-y-4">
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-line bg-ink/60 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">
                    {row.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white">
                    {row.manager}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/manual-trade-manager" variant="secondary">
                Related Page
              </ButtonLink>
              <ButtonLink
                href={brand.manualTradeManagerMql5Url}
                external
                variant="ghost"
                icon={<ExternalLink className="h-4 w-4" />}
              >
                Official Purchase
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.96),rgba(11,18,32,0.94))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mb-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              FEF ecosystem roadmap
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Available products today, planned ecosystem tools ahead
            </h2>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roadmapItems.map((item) => (
              <div
                key={item.name}
                className="premium-card rounded-2xl border border-line bg-panel/80 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.name}
                    </h3>
                    <p
                      className={`mt-3 text-xs font-bold uppercase tracking-[0.16em] ${
                        item.available ? "text-emerald" : "text-steel"
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${
                      item.available
                        ? "border-emerald/25 bg-emerald/10 text-emerald"
                        : "border-line bg-white/[0.04] text-steel"
                    }`}
                  >
                    <PackageCheck className="h-5 w-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Workflow stack
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            How the FEF product ecosystem connects
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workflowStack.map((item) => (
            <article
              key={item.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Trust and safe usage
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Professional software workflows start with controlled testing
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              FEF software is designed to support MT5 workflow management, but
              users should review documentation, test settings and monitor
              early sessions carefully.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {safeUsageItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <p className="text-sm font-semibold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <Store className="h-4 w-4" />
            Official FEF product paths
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Build your MT5 workflow with{" "}
            <span className="text-gradient">official FEF products</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Use official MQL5 Market product pages, then follow FEF
            documentation and downloads guidance for setup and testing.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={brand.mql5Url}
              external
              icon={<ExternalLink className="h-4 w-4" />}
            >
              Trade Copier on MQL5
            </ButtonLink>
            <ButtonLink
              href={brand.manualTradeManagerMql5Url}
              external
              variant="secondary"
              icon={<ExternalLink className="h-4 w-4" />}
            >
              Manual Manager on MQL5
            </ButtonLink>
            <ButtonLink href="/downloads" variant="ghost">
              Visit Downloads
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
