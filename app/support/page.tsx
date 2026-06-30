import type { Metadata } from "next";
import {
  BookOpen,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  Headphones,
  HelpCircle,
  Layers3,
  Mail,
  MessageCircle,
  Phone,
  RefreshCcw,
  ShieldCheck,
  Store,
  Wrench,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "MT5 Software Support",
  description:
    "Get support guidance for FEF Trading Solutions MetaTrader 5 software, including trade copier setup, manual trade manager usage, downloads, documentation, troubleshooting, and product workflow help.",
  alternates: {
    canonical: "https://www.feftradingsolutions.com/support",
  },
  openGraph: {
    title: "MT5 Software Support | FEF Trading Solutions",
    description:
      "Get support guidance for FEF Trading Solutions MetaTrader 5 software, including trade copier setup, manual trade manager usage, downloads, documentation, troubleshooting, and product workflow help.",
    url: "https://www.feftradingsolutions.com/support",
    images: ["/images/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MT5 Software Support | FEF Trading Solutions",
    description:
      "Get support guidance for FEF Trading Solutions MetaTrader 5 software, including trade copier setup, manual trade manager usage, downloads, documentation, troubleshooting, and product workflow help.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const heroStatusCards = [
  "Product Setup Help",
  "MQL5 Market Guidance",
  "Documentation & Release Notes",
];

const supportCategories = [
  {
    title: "Installation Support",
    description:
      "Guidance for installing FEF products through official MQL5 Market delivery.",
    href: "/downloads",
    label: "Downloads",
    icon: <Download className="h-5 w-5" />,
  },
  {
    title: "MQL5 Purchase Help",
    description:
      "Pointers for product access, purchase flow and MQL5 Market installation steps.",
    href: "/downloads",
    label: "MQL5 links",
    icon: <Store className="h-5 w-5" />,
  },
  {
    title: "Trade Copier Setup",
    description:
      "Support path for master/slave setup, account sync and monitoring checks.",
    href: "/trade-copier",
    label: "Trade Copier",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Manual Trade Manager Setup",
    description:
      "Help route for manual trade management, SL/TP logic and dashboard tools.",
    href: "/manual-trade-manager",
    label: "Manual Manager",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "Symbol Mapping Issues",
    description:
      "Review broker symbol names, prefixes, suffixes and symbol availability.",
    href: "/documentation",
    label: "Documentation",
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    title: "Risk & Demo Testing",
    description:
      "Prepare conservative testing workflows before using products on live accounts.",
    href: "/documentation",
    label: "Safe setup",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Updates & Release Notes",
    description:
      "Track product changes, update notes and release communication channels.",
    href: "/changelog",
    label: "Changelog",
    icon: <RefreshCcw className="h-5 w-5" />,
  },
  {
    title: "General Product Questions",
    description:
      "Explore the software ecosystem before choosing the right support route.",
    href: "/products",
    label: "Products",
    icon: <HelpCircle className="h-5 w-5" />,
  },
];

const productSupportPaths = [
  {
    product: "FEF Professional Trade Copier MT5",
    focus:
      "Master/slave setup, account synchronization, symbol mapping, copier monitoring and MQL5 purchase/install help.",
    href: "/trade-copier",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    product: "FEF Manual Trade Manager Pro MT5",
    focus:
      "Manual trade management setup, SL/TP handling, breakeven, trailing stop, partial close and dashboard/visual tools.",
    href: "/manual-trade-manager",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
];

const beforeContactChecklist = [
  "Confirm the product was installed from the official MQL5 Market page",
  "Confirm MetaTrader 5 is updated",
  "Test on a demo account first",
  "Check symbol names, prefixes, and suffixes",
  "Check lot/risk settings",
  "Check dashboard status messages",
  "Prepare screenshots of settings and journal/errors",
  "Note broker name, account type, symbol, and timeframe",
];

const commonIssues = [
  {
    title: "Product not appearing in MT5",
    guidance:
      "Confirm the product is installed from MQL5 Market, signed into the correct MQL5 account and visible in the MT5 terminal purchases area.",
  },
  {
    title: "Trade copier not syncing",
    guidance:
      "Check master/slave setup, account connection, symbol availability and dashboard status before testing again on demo.",
  },
  {
    title: "Symbols do not match",
    guidance:
      "Compare broker symbol names, suffixes, prefixes and contract availability across the accounts involved.",
  },
  {
    title: "Manual Manager not managing a trade",
    guidance:
      "Review eligibility filters, symbol settings, magic number conditions and whether the trade was opened in the intended workflow.",
  },
  {
    title: "SL/TP not being applied",
    guidance:
      "Check stop/freeze levels, product settings, broker conditions and journal messages for rejected modifications.",
  },
  {
    title: "Dashboard shows missing data",
    guidance:
      "Review MT5 permissions, chart symbol, active terminal connection and any visible dashboard status messages.",
  },
  {
    title: "MQL5 purchase/install issue",
    guidance:
      "Use the official MQL5 Market product page and confirm you are logged into the same MQL5 account inside MetaTrader 5.",
  },
  {
    title: "Need product documentation",
    guidance:
      "Start with the documentation area, then prepare screenshots and exact setup details if you still need support.",
  },
];

const contactCards = [
  {
    title: "Official Contact Channels",
    description:
      "Use the listed FEF email, Telegram and WhatsApp channels for product support requests.",
    detail: brand.email,
    href: `mailto:${brand.email}`,
    icon: <Mail className="h-5 w-5" />,
  },
  {
    title: "Documentation First",
    description:
      "Review setup guidance and release notes before requesting hands-on troubleshooting.",
    detail: "Open documentation",
    href: "/documentation",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Product Setup Details",
    description:
      "Include product name, MT5 version, broker, symbol, timeframe and exact issue details.",
    detail: brand.workingHours,
    href: "/contact",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "Screenshot & Error Logs",
    description:
      "Prepare screenshots of settings, dashboard messages, journal errors and any repeated steps.",
    detail: "Attach clear evidence",
    href: "/support",
    icon: <FileText className="h-5 w-5" />,
  },
];

const quickLinks = [
  { title: "Documentation", href: "/documentation", icon: <BookOpen className="h-5 w-5" /> },
  { title: "Downloads", href: "/downloads", icon: <Download className="h-5 w-5" /> },
  { title: "Changelog", href: "/changelog", icon: <FileText className="h-5 w-5" /> },
  { title: "Products", href: "/products", icon: <Boxes className="h-5 w-5" /> },
  { title: "Trade Copier", href: "/trade-copier", icon: <Layers3 className="h-5 w-5" /> },
  {
    title: "Manual Trade Manager",
    href: "/manual-trade-manager",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
];

export default function SupportPage() {
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
              FEF Support Center
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Professional support for{" "}
              <span className="text-gradient">FEF trading software</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              A central support hub for setup guidance, documentation, product
              troubleshooting, MQL5 purchase help and safe deployment checks.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/documentation">View Documentation</ButtonLink>
              <ButtonLink href="/downloads" variant="secondary">
                Visit Downloads
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
            Support categories
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Choose the right support path before opening a request
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Start with the area closest to your issue so setup guidance,
            product documentation and release information stay easy to find.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportCategories.map((item) => (
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
              <ButtonLink href={item.href} variant="ghost" className="mt-5 px-0">
                {item.label}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {productSupportPaths.map((path) => (
            <article
              key={path.product}
              className="premium-card premium-glow relative overflow-hidden rounded-[2rem] border border-line bg-panel/80 p-6 sm:p-8"
            >
              <div className="site-grid absolute inset-0 opacity-15" aria-hidden="true" />
              <div
                className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-electric/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-emerald/25 bg-emerald/10 text-emerald">
                    {path.icon}
                  </span>
                  <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-steel">
                    Product support path
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-black text-white sm:text-3xl">
                  {path.product}
                </h2>
                <p className="mt-4 text-base leading-7 text-steel">
                  Focus: {path.focus}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink href={path.href}>View Product</ButtonLink>
                  <ButtonLink href="/documentation" variant="secondary">
                    Documentation
                  </ButtonLink>
                  <ButtonLink href="/downloads" variant="ghost">
                    Downloads
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Before contacting support
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Prepare the details that make troubleshooting faster
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Support is most effective when the product, account environment,
              broker conditions and exact terminal messages are clear from the
              beginning.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {beforeContactChecklist.map((item) => (
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
            Common issues
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Practical first checks for common support requests
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            These checks do not access your terminal or replace support, but
            they help narrow the most common setup and configuration causes.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commonIssues.map((issue) => (
            <article
              key={issue.title}
              className="premium-card rounded-2xl border border-line bg-panel/75 p-6"
            >
              <h3 className="text-lg font-black text-white">{issue.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {issue.guidance}
              </p>
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
              Contact channels
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Send clear setup details through the official FEF channels
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Include the product name, MT5 version, broker, symbol,
              screenshots and exact issue details when requesting support.
            </p>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="premium-card rounded-2xl border border-line bg-panel/80 p-6"
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
                <ButtonLink href={card.href} variant="ghost" className="mt-5 px-0">
                  {card.detail}
                </ButtonLink>
              </article>
            ))}
          </div>

          <div className="relative mt-8 grid gap-4 rounded-2xl border border-line bg-ink/60 p-5 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-emerald" />
              <span className="text-sm font-bold text-white">
                {brand.telegram}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-emerald" />
              <span className="text-sm font-bold text-white">
                {brand.whatsapp}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-emerald" />
              <span className="text-sm font-bold text-white">{brand.email}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Knowledge base
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Quick links for product setup and release information
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <article
              key={link.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                {link.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {link.title}
              </h3>
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
            <Headphones className="h-4 w-4" />
            FEF support workflow
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Get help setting up your{" "}
            <span className="text-gradient">FEF software workflow</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Start with documentation, confirm official downloads and review the
            product pages before preparing a focused support request.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/documentation">View Documentation</ButtonLink>
            <ButtonLink href="/downloads" variant="secondary">
              Visit Downloads
            </ButtonLink>
            <ButtonLink href="/products" variant="ghost">
              View Products
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
