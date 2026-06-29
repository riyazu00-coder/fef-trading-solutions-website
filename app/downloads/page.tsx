import type { Metadata } from "next";
import {
  BadgeCheck,
  BookOpen,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Headphones,
  Layers3,
  PackageCheck,
  RefreshCcw,
  ShieldCheck,
  Store,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Official FEF Trading Solutions software center for MT5 product links, documentation, release notes and safe setup guidance.",
};

const heroStats = [
  "Official MQL5 Products",
  "MT5 Software Ecosystem",
  "Documentation & Support",
];

const productCards = [
  {
    name: "FEF Professional Trade Copier MT5",
    description:
      "Professional master/slave trade copier for MetaTrader 5 account synchronization.",
    status: "Available on MQL5 Market",
    platform: "MT5",
    mql5Url: brand.mql5Url,
    productHref: "/trade-copier",
    accent: "text-electric",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    name: "FEF Manual Trade Manager Pro MT5",
    description:
      "Manual trade management and visual market assistant dashboard for MetaTrader 5.",
    status: "Available on MQL5 Market",
    platform: "MT5",
    mql5Url: brand.manualTradeManagerMql5Url,
    productHref: "/manual-trade-manager",
    accent: "text-emerald",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
];

const releaseCards = [
  {
    title: "Stable Release Channel",
    description:
      "Latest public versions are distributed through official MQL5 Market product pages.",
    icon: <PackageCheck className="h-5 w-5" />,
  },
  {
    title: "MQL5 Market Delivery",
    description:
      "Users should install and update products from the official MQL5 Market pages.",
    icon: <Store className="h-5 w-5" />,
  },
  {
    title: "Documentation Updates",
    description:
      "Setup guidance and product notes are centralized in the FEF documentation area.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Changelog Tracking",
    description:
      "Release updates and product notes are published through FEF release channels.",
    icon: <RefreshCcw className="h-5 w-5" />,
  },
];

const installationChecklist = [
  "Install only from official MQL5 Market links",
  "Confirm MetaTrader 5 account access",
  "Test on demo before live use",
  "Check broker symbol names and suffixes",
  "Review lot/risk settings",
  "Monitor first live sessions manually",
  "Keep product versions updated",
];

const ecosystemItems = [
  { name: "Trade Copier", status: "Available", available: true },
  { name: "Manual Trade Manager", status: "Available", available: true },
  { name: "Future Risk Manager", status: "Planned", available: false },
  { name: "Future Trade Scanner", status: "Planned", available: false },
  { name: "Future Customer Portal", status: "Planned", available: false },
  { name: "Documentation", status: "Active", available: true },
  { name: "Support Center", status: "Active", available: true },
];

const supportLinks = [
  {
    title: "Documentation",
    description: "Setup guidance, configuration notes and safe operation guidance.",
    href: "/documentation",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Support Center",
    description: "Central support routes for product questions and setup help.",
    href: "/support",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    title: "Changelog",
    description: "Release notes and product update tracking for FEF software.",
    href: "/changelog",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Products",
    description: "Explore the FEF MT5 software ecosystem and product pages.",
    href: "/products",
    icon: <Boxes className="h-5 w-5" />,
  },
];

export default function DownloadsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald shadow-emerald">
              <span className="h-2 w-2 rounded-full bg-emerald shadow-emerald" />
              FEF Software Downloads
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Professional MT5{" "}
              <span className="text-gradient">Software Center</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              A central portal for official FEF Trading Solutions products,
              documentation, release notes and safe setup guidance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products">View Products</ButtonLink>
              <ButtonLink href="/documentation" variant="secondary">
                View Documentation
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
            Official products
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Install through official MQL5 Market pages
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            FEF does not publish fake direct download files here. Product access,
            installation and updates should be handled through the official
            MQL5 Market links below.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {productCards.map((product) => (
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
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl border border-electric/25 bg-electric/10 ${product.accent}`}
                  >
                    {product.icon}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-emerald/35 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                      {product.status}
                    </span>
                    <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-steel">
                      {product.platform}
                    </span>
                  </div>
                </div>

                <h3 className="mt-7 text-2xl font-black text-white sm:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-steel">
                  {product.description}
                </p>

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
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.96),rgba(11,18,32,0.94))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
                Version / release status
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Release delivery without unsafe direct files
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                Latest public versions are distributed through MQL5 Market.
                Release updates and product notes are published through FEF
                release channels.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/changelog" variant="secondary">
                View Changelog
              </ButtonLink>
              <ButtonLink href="/documentation" variant="ghost">
                Documentation
              </ButtonLink>
            </div>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {releaseCards.map((card) => (
              <div
                key={card.title}
                className="premium-card rounded-2xl border border-line bg-panel/80 p-5"
              >
                <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                  {card.icon}
                </div>
                <h3 className="mt-5 text-lg font-black text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-steel">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Safe installation checklist
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Prepare MT5 products with a controlled setup process
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Download-center actions should support safe installation,
              verification and testing. Always confirm settings before using
              trading software on live accounts.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {installationChecklist.map((item) => (
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
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Software ecosystem
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Connected FEF software for professional MT5 workflows
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Available products, support resources and planned platform modules
            are organized as one ecosystem. Future items are marked clearly as
            planned.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
          <div className="site-grid absolute inset-0 opacity-15" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-electric/40 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {ecosystemItems.map((item) => (
              <div
                key={item.name}
                className="premium-card rounded-2xl border border-line bg-ink/65 p-5 text-center"
              >
                <div
                  className={`mx-auto grid h-10 w-10 place-items-center rounded-xl border ${
                    item.available
                      ? "border-emerald/30 bg-emerald/10 text-emerald"
                      : "border-line bg-white/[0.04] text-steel"
                  }`}
                >
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-black text-white">
                  {item.name}
                </h3>
                <p
                  className={`mt-3 text-xs font-bold uppercase tracking-[0.14em] ${
                    item.available ? "text-emerald" : "text-steel"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Support & documentation
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Setup guidance, release notes and product support in one place
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6 transition hover:border-electric/45 hover:bg-panel"
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
            </a>
          ))}
        </div>
      </section>

      <RiskWarning />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <Store className="h-4 w-4" />
            Official FEF software center
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Build your MT5 workflow with{" "}
            <span className="text-gradient">official FEF software</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Use the official MQL5 Market pages for product access, then follow
            FEF documentation and release notes for safe setup guidance.
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
            <ButtonLink href="/documentation" variant="ghost">
              View Documentation
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
