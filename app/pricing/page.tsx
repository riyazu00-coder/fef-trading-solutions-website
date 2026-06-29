import type { Metadata } from "next";
import {
  BookOpen,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Layers3,
  PackageCheck,
  Route,
  ShieldCheck,
  Store,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Official FEF Trading Solutions purchase paths for MetaTrader 5 software through MQL5 Market product pages.",
};

const trustCards = [
  "Official MQL5 Delivery",
  "MT5 Software Products",
  "Documentation & Support",
];

const productCards = [
  {
    name: "FEF Professional Trade Copier MT5",
    label: "Available on MQL5 Market",
    platform: "MetaTrader 5",
    description:
      "Professional master/slave trade copier for MetaTrader 5 account synchronization.",
    href: brand.mql5Url,
    productHref: "/trade-copier",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    name: "FEF Manual Trade Manager Pro MT5",
    label: "Available on MQL5 Market",
    platform: "MetaTrader 5",
    description:
      "Manual trade management and visual market assistant dashboard for MetaTrader 5.",
    href: brand.manualTradeManagerMql5Url,
    productHref: "/manual-trade-manager",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
];

const includedItems = [
  {
    title: "Product access through official MQL5 Market",
    description:
      "Public FEF products are purchased, installed and updated through their official MQL5 Market pages.",
    icon: <Store className="h-5 w-5" />,
  },
  {
    title: "Documentation and setup guidance",
    description:
      "Use FEF documentation to prepare configuration, testing and safe operation steps.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Product-focused support paths",
    description:
      "Support routes are organized around Trade Copier and Manual Trade Manager workflows.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Downloads and release notes",
    description:
      "The Downloads and Changelog areas centralize official links and product update notes.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Safe deployment checklist",
    description:
      "Review demo testing, broker symbols, settings and monitoring checks before live use.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Connected software ecosystem",
    description:
      "FEF products are presented as part of a growing professional MT5 software ecosystem.",
    icon: <Boxes className="h-5 w-5" />,
  },
];

const purchaseFlow = [
  "Choose the FEF product",
  "Open the official MQL5 Market page",
  "Complete purchase through MQL5",
  "Install in MetaTrader 5",
  "Follow documentation",
  "Test on demo before live use",
];

const comparisonRows = [
  {
    label: "Product purpose",
    copier: "Copy trades from master to slave accounts",
    manager:
      "Manage manual trades with SL/TP, breakeven, trailing, partial close and visual tools",
  },
  {
    label: "Main user",
    copier: "Traders/operators managing multiple MT5 accounts",
    manager: "Manual traders who want structured management",
  },
  {
    label: "Core workflow",
    copier: "Synchronization",
    manager: "Manual trade control",
  },
  {
    label: "Best for",
    copier: "Multi-account execution workflows",
    manager: "Disciplined manual trade management",
  },
  {
    label: "Related page",
    copier: "/trade-copier",
    manager: "/manual-trade-manager",
  },
  {
    label: "Official purchase",
    copier: "MQL5 Market",
    manager: "MQL5 Market",
  },
];

const riskChecklist = [
  "Review product documentation before use",
  "Test on demo first",
  "Understand MT5 and broker execution differences",
  "Check symbol names and broker conditions",
  "Start with conservative settings",
  "Trading software does not remove market risk",
];

const faqs = [
  {
    question: "Where can I buy FEF products?",
    answer:
      "Current public FEF products are available through their official MQL5 Market product pages. Use the MQL5 buttons on this page for the correct product path.",
  },
  {
    question: "Why are prices not shown here?",
    answer:
      "Pricing and purchase options are managed on the official MQL5 Market product pages, so this page links to those sources instead of duplicating or inventing prices.",
  },
  {
    question: "Are the products subscriptions?",
    answer:
      "Any available purchase or rental options are shown on the relevant MQL5 Market product page. Check the official page before purchasing.",
  },
  {
    question: "Does purchase guarantee profit?",
    answer:
      "No. FEF develops software tools only. Purchasing software does not guarantee profit, remove market risk or guarantee trading performance.",
  },
  {
    question: "Should I test on demo first?",
    answer:
      "Yes. Demo testing is strongly recommended before using any trading software on live accounts.",
  },
  {
    question: "Can I use both products together?",
    answer:
      "They can support different MT5 workflows, but any combined setup should be tested carefully on demo accounts before live deployment.",
  },
  {
    question: "Where do I get setup help?",
    answer:
      "Start with the documentation, downloads and support pages. Prepare product name, MT5 version, broker, symbol details and screenshots when requesting help.",
  },
];

export default function PricingPage() {
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
              FEF Software Pricing
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Official purchase paths for{" "}
              <span className="text-gradient">FEF MT5 software</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              FEF products are distributed through official MQL5 Market pages,
              with documentation and support resources available from the FEF
              website.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/downloads">View Downloads</ButtonLink>
              <ButtonLink href="/documentation" variant="secondary">
                View Documentation
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {trustCards.map((card) => (
              <div
                key={card}
                className="premium-card rounded-2xl border border-line bg-panel/70 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                  {card}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Product purchase cards
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Pricing is shown on the official MQL5 product pages
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            This page keeps the purchase paths clean and separate for each FEF
            product. No fake plans, bundles or copied prices are shown here.
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
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-electric/25 bg-electric/10 text-electric">
                    {product.icon}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-emerald/35 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                      {product.label}
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

                <div className="mt-7 rounded-2xl border border-line bg-ink/65 p-5">
                  <p className="text-sm font-semibold leading-6 text-white">
                    Pricing and purchase options are available on the official
                    MQL5 Market product page.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink
                    href={product.href}
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
            What is included
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            A software ecosystem around official product delivery
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {includedItems.map((item) => (
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
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.96),rgba(11,18,32,0.94))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mb-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Purchase flow
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              From product selection to demo testing
            </h2>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {purchaseFlow.map((step, index) => (
              <div
                key={step}
                className="premium-card rounded-2xl border border-line bg-panel/80 p-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald/25 bg-emerald/10 text-sm font-black text-emerald">
                  {index + 1}
                </span>
                <p className="mt-5 text-sm font-bold leading-6 text-white">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Compare products
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Choose the product that matches your MT5 workflow
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Layers3 className="h-6 w-6 text-electric" />
              <h3 className="text-2xl font-black text-white">
                Trade Copier
              </h3>
            </div>
            <div className="mt-6 space-y-4">
              {comparisonRows.map((row) => (
                <div key={row.label} className="rounded-2xl border border-line bg-ink/60 p-4">
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
                <div key={row.label} className="rounded-2xl border border-line bg-ink/60 p-4">
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
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/20 bg-[linear-gradient(135deg,rgba(11,18,32,0.95),rgba(5,7,13,0.98))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10">
          <div
            className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                Enterprise / future licensing note
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Current public products are delivered through MQL5 Market
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                Future FEF ecosystem tools may include a customer portal,
                license manager, update center and enterprise workflows. These
                are roadmap directions, not currently available packages or
                prices.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Customer portal", "License manager", "Update center", "Enterprise workflows"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-line bg-ink/60 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Route className="h-5 w-5 text-emerald" />
                      <p className="font-bold text-white">{item}</p>
                    </div>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-steel">
                      Future roadmap
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Risk-aware purchase guidance
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Buy software only after reviewing the operating workflow
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Trading software can support operational discipline, but it does
              not remove market risk, execution differences or the need for
              careful testing.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {riskChecklist.map((item) => (
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
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Pricing and purchase questions
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="premium-card rounded-2xl border border-line bg-panel/75 p-6 transition hover:border-electric/45 hover:bg-panel"
            >
              <h3 className="text-lg font-black text-white">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-steel">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <RiskWarning />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <PackageCheck className="h-4 w-4" />
            Official MQL5 purchase paths
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Choose the FEF software product for your{" "}
            <span className="text-gradient">MT5 workflow</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Open the official MQL5 page for the product you need, then use the
            FEF documentation to prepare setup and demo testing.
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
