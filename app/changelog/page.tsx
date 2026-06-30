import type { Metadata } from "next";
import {
  BadgeCheck,
  BookOpen,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Download,
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
  title: "Product Changelog",
  description:
    "Track FEF Trading Solutions product updates, release notes, improvements, and version history for MetaTrader 5 trade copier and manual trade management software.",
  alternates: {
    canonical: "https://www.feftradingsolutions.com/changelog",
  },
  openGraph: {
    title: "Product Changelog | FEF Trading Solutions",
    description:
      "Track FEF Trading Solutions product updates, release notes, improvements, and version history for MetaTrader 5 trade copier and manual trade management software.",
    url: "https://www.feftradingsolutions.com/changelog",
    images: ["/images/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Changelog | FEF Trading Solutions",
    description:
      "Track FEF Trading Solutions product updates, release notes, improvements, and version history for MetaTrader 5 trade copier and manual trade management software.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const heroStatusCards = [
  "MQL5 Market Delivery",
  "Product Release Notes",
  "Documentation Updates",
];

const releaseChannels = [
  {
    title: "Stable Public Releases",
    description:
      "Public product builds are distributed through official MQL5 Market product pages.",
    icon: <PackageCheck className="h-5 w-5" />,
  },
  {
    title: "MQL5 Market Updates",
    description:
      "Users should install and update FEF products from the relevant MQL5 Market page.",
    icon: <Store className="h-5 w-5" />,
  },
  {
    title: "Documentation Revisions",
    description:
      "Setup guidance and safe deployment notes are maintained through the documentation area.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Support Notes",
    description:
      "Support guidance helps users prepare product details, screenshots and terminal logs.",
    icon: <Headphones className="h-5 w-5" />,
  },
];

const productUpdateCards = [
  {
    name: "FEF Professional Trade Copier MT5",
    status: "Official MQL5 Market Product",
    focusAreas: [
      "Synchronization workflow",
      "Operator controls",
      "Symbol handling",
      "Monitoring",
      "Setup guidance",
    ],
    productHref: "/trade-copier",
    mql5Url: brand.mql5Url,
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    name: "FEF Manual Trade Manager Pro MT5",
    status: "Official MQL5 Market Product",
    focusAreas: [
      "Manual trade management",
      "SL/TP workflow",
      "Breakeven",
      "Trailing",
      "Partial close",
      "Visual market tools",
    ],
    productHref: "/manual-trade-manager",
    mql5Url: brand.manualTradeManagerMql5Url,
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
];

const timelineEntries = [
  {
    label: "Current",
    title: "Current Public Release Channel",
    description:
      "Current public product access is handled through official MQL5 Market product pages.",
    icon: <PackageCheck className="h-5 w-5" />,
  },
  {
    label: "Documentation",
    title: "Product Documentation Update Path",
    description:
      "Documentation is the central reference for setup guidance, testing checks and safe operation notes.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    label: "Delivery",
    title: "MQL5 Market Delivery",
    description:
      "FEF directs users to official MQL5 Market pages for product installation and update handling.",
    icon: <Store className="h-5 w-5" />,
  },
  {
    label: "Roadmap",
    title: "Future FEF Ecosystem Updates",
    description:
      "Future ecosystem notes will remain clearly positioned as roadmap items until released.",
    icon: <Boxes className="h-5 w-5" />,
  },
];

const updateChecklist = [
  "Install/update only through official MQL5 Market product pages",
  "Read documentation before updating live workflows",
  "Test changes on demo first",
  "Review product settings after update",
  "Check broker symbol names and permissions",
  "Monitor first live sessions after an update",
  "Keep screenshots/logs if support is needed",
];

const roadmapItems = [
  "Risk Manager",
  "Trade Scanner",
  "Customer Portal",
  "License Manager",
  "Update Center",
  "Video Tutorials",
];

const quickLinks = [
  {
    title: "Downloads",
    href: "/downloads",
    description: "Official product access paths and safe setup reminders.",
    icon: <Download className="h-5 w-5" />,
  },
  {
    title: "Documentation",
    href: "/documentation",
    description: "Setup, configuration and safe operation guidance.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Support",
    href: "/support",
    description: "Troubleshooting paths and support preparation guidance.",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    title: "Products",
    href: "/products",
    description: "The FEF MT5 software ecosystem and product pages.",
    icon: <Boxes className="h-5 w-5" />,
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Official MQL5 Market purchase paths for public products.",
    icon: <FileText className="h-5 w-5" />,
  },
];

export default function ChangelogPage() {
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
              FEF Release Notes
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Software updates, release notes and{" "}
              <span className="text-gradient">product improvements</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              A central update hub for FEF Trading Solutions products, MQL5
              Market delivery notes, documentation updates and safe deployment
              guidance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/downloads">Visit Downloads</ButtonLink>
              <ButtonLink href="/documentation" variant="secondary">
                View Documentation
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStatusCards.map((item) => (
              <div
                key={item}
                className="premium-card rounded-2xl border border-line bg-panel/70 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Release channel overview
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Official delivery, documentation and support channels
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            FEF product delivery and updates are handled through MQL5 Market
            pages, with documentation and support pages used for setup guidance
            and user-facing release notes.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {releaseChannels.map((channel) => (
            <article
              key={channel.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                {channel.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {channel.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {channel.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Product update cards
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Product release paths remain separated by official market page
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {productUpdateCards.map((product) => (
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

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {product.focusAreas.map((area) => (
                    <div
                      key={area}
                      className="rounded-2xl border border-line bg-ink/60 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                        <p className="text-sm font-semibold leading-6 text-white">
                          {area}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink href={product.productHref}>View Product</ButtonLink>
                  <ButtonLink
                    href={product.mql5Url}
                    external
                    variant="secondary"
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Buy on MQL5
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

          <div className="relative mb-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Release notes timeline
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Safe update milestones without fake dates or version numbers
            </h2>
          </div>

          <div className="relative grid gap-5 lg:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-electric/0 via-emerald/60 to-electric/0 lg:block"
              aria-hidden="true"
            />
            {timelineEntries.map((entry) => (
              <article
                key={entry.title}
                className="premium-card relative rounded-2xl border border-line bg-panel/80 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                    {entry.icon}
                  </div>
                  <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-steel">
                    {entry.label}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-black text-white">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-steel">
                  {entry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Safe update checklist
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Update product workflows with controlled testing
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Before changing a live workflow, confirm the official source,
              review documentation and test behavior on demo accounts.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {updateChecklist.map((item) => (
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
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/20 bg-[linear-gradient(135deg,rgba(11,18,32,0.95),rgba(5,7,13,0.98))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10">
          <div
            className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mb-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
              Roadmap / future notes
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Planned ecosystem items remain clearly marked
            </h2>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roadmapItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line bg-ink/60 p-5"
              >
                <div className="flex items-center gap-3">
                  <RefreshCcw className="h-5 w-5 text-emerald" />
                  <p className="font-bold text-white">{item}</p>
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-steel">
                  Planned
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Quick links
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Navigate product access, documentation and support
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {quickLinks.map((link) => (
            <article
              key={link.href}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                {link.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {link.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {link.description}
              </p>
              <ButtonLink href={link.href} variant="ghost" className="mt-5 px-0">
                Open
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <RiskWarning />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <FileText className="h-4 w-4" />
            Official update center
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Stay aligned with official{" "}
            <span className="text-gradient">FEF software updates</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Use the downloads, documentation and support areas to keep product
            workflows clear, current and safely tested.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/downloads">Visit Downloads</ButtonLink>
            <ButtonLink href="/documentation" variant="secondary">
              View Documentation
            </ButtonLink>
            <ButtonLink href="/support" variant="ghost">
              Support Center
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
