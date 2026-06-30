import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Layers3,
  ListChecks,
  Monitor,
  Power,
  Radio,
  RefreshCcw,
  Route,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "MT5 Product Documentation",
  description:
    "Read FEF Trading Solutions documentation for MetaTrader 5 software setup, trade copier workflows, manual trade management tools, downloads, support guidance, and professional trading operations.",
  alternates: {
    canonical: "https://www.feftradingsolutions.com/documentation",
  },
  openGraph: {
    title: "MT5 Product Documentation | FEF Trading Solutions",
    description:
      "Read FEF Trading Solutions documentation for MetaTrader 5 software setup, trade copier workflows, manual trade management tools, downloads, support guidance, and professional trading operations.",
    url: "https://www.feftradingsolutions.com/documentation",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MT5 Product Documentation | FEF Trading Solutions",
    description:
      "Read FEF Trading Solutions documentation for MetaTrader 5 software setup, trade copier workflows, manual trade management tools, downloads, support guidance, and professional trading operations.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const quickStartItems = [
  {
    title: "Install from MQL5 Market",
    description:
      "Access the official product through the MQL5 Market and install it inside your MetaTrader 5 environment.",
    icon: <ExternalLink className="h-5 w-5" />,
  },
  {
    title: "Attach to Master Account",
    description:
      "Set the source account that sends open, modify and close trade actions to the copier workflow.",
    icon: <Power className="h-5 w-5" />,
  },
  {
    title: "Attach to Slave Account",
    description:
      "Connect receiving accounts and confirm symbol, lot and risk settings before copying trades.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Test on Demo First",
    description:
      "Validate synchronization, broker conditions and dashboard status before any live deployment.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const installationSteps = [
  "Open MetaTrader 5",
  "Log in to MQL5 account",
  "Download product from Market/Purchases",
  "Attach EA to chart",
  "Allow required MT5 settings",
  "Check dashboard status",
];

const setupChecks = {
  master: [
    "Confirm the master account is the intended source account.",
    "Review open, modify and close trade behavior during testing.",
    "Check symbol names, lot mode, connection status and trade permissions.",
    "Use demo testing before considering live account operation.",
  ],
  slave: [
    "Confirm each slave account receives copied trade actions as expected.",
    "Review symbol mapping, lot settings, risk settings and broker compatibility.",
    "Monitor copied trades manually during early testing sessions.",
    "Compare master and slave execution behavior before increasing size.",
  ],
};

const configurationCards = [
  {
    title: "Symbol Mapping",
    description:
      "Helps match symbols across brokers with common prefixes, suffixes and naming variations.",
    icon: <Route className="h-5 w-5" />,
  },
  {
    title: "Lot Mode",
    description:
      "Supports controlled sizing workflows such as same-lot or multiplier-style allocation.",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "Retry Queue",
    description:
      "Keeps failed copy actions visible for controlled retry and recovery workflows.",
    icon: <RefreshCcw className="h-5 w-5" />,
  },
  {
    title: "Heartbeat Monitoring",
    description:
      "Provides status visibility for connection and account monitoring during operation.",
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: "Manual Sync",
    description:
      "Lets the operator request a fresh synchronization check when account state needs review.",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "Panic Close",
    description:
      "Provides an emergency action workflow for controlled shutdown scenarios.",
    icon: <Power className="h-5 w-5" />,
  },
  {
    title: "Event Logs",
    description:
      "Gives operators visibility into copy events, retries and important account changes.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Dashboard Status",
    description:
      "Displays copier state, account readiness and synchronization visibility in one surface.",
    icon: <Monitor className="h-5 w-5" />,
  },
];

const deploymentChecklist = [
  "Test on demo first",
  "Compare master and slave symbols",
  "Start with small lot settings",
  "Check spread and execution conditions",
  "Monitor first sessions manually",
  "Never assume copy trading removes risk",
];

const faqItems = [
  {
    question: "Does it guarantee profit?",
    answer:
      "No. FEF Professional Trade Copier MT5 is software for trade copying workflows. It does not guarantee profit or trading performance.",
  },
  {
    question: "Can it copy between different brokers?",
    answer:
      "It is designed for MetaTrader 5 environments and broker-specific symbol naming conditions, but users should test each broker combination on demo first.",
  },
  {
    question: "What should I test before live deployment?",
    answer:
      "Test symbol mapping, lot mode, order behavior, connection status, dashboard state and how copied trades behave under your broker conditions.",
  },
  {
    question: "What if symbols have suffixes or prefixes?",
    answer:
      "The copier includes symbol detection logic for common broker prefixes, suffixes and symbol variations. Confirm mapping during demo testing.",
  },
  {
    question: "Should I use demo first?",
    answer:
      "Yes. Demo testing is strongly recommended before any live deployment so you can review configuration and execution behavior safely.",
  },
  {
    question: "Where can I buy it?",
    answer:
      "FEF Professional Trade Copier MT5 is officially available through the MQL5 Market.",
  },
];

export default function DocumentationPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald shadow-emerald">
                <BookOpen className="h-4 w-4" />
                Product Documentation
              </div>

              <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                FEF Professional{" "}
                <span className="text-gradient">Trade Copier MT5</span>{" "}
                Documentation
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
                A clear support and manual page for setup, configuration,
                testing and safe operation of FEF Professional Trade Copier MT5.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={brand.mql5Url}
                  external
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Buy on MQL5
                </ButtonLink>

                <ButtonLink href="/trade-copier" variant="secondary">
                  View Trade Copier
                </ButtonLink>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-electric/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="premium-card relative overflow-hidden rounded-[2rem] border border-electric/25 bg-panel/80 p-2 shadow-[0_30px_110px_rgba(0,0,0,0.46)]">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald shadow-emerald" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-electric/80" />
                  </div>
                  <p className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-steel sm:block">
                    Setup Manual
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-ink">
                  <Image
                    src="/images/hero.png"
                    alt="FEF Professional Trade Copier MT5 dashboard documentation visual"
                    width={1536}
                    height={864}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Quick start
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            From purchase to first demo test
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Start with a controlled setup process, confirm account roles and
            validate behavior in demo conditions before using live funds.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickStartItems.map((item) => (
            <div
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
            </div>
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
              Installation steps
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Install and verify the copier carefully
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Use a careful installation flow and confirm that the product
              dashboard reports the expected state before testing copy behavior.
            </p>
          </div>

          <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {installationSteps.map((step, index) => (
              <div
                key={step}
                className="premium-card rounded-2xl border border-line bg-panel/75 p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald/25 bg-emerald/10 font-mono text-sm font-black text-emerald">
                    {index + 1}
                  </span>
                  <p className="font-bold text-white">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="premium-card premium-glow rounded-3xl border border-line bg-panel/75 p-7">
            <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
              <Power className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-white">
              Master Account Setup
            </h2>
            <p className="mt-4 text-sm leading-7 text-steel">
              The master account is the source account. It sends open, modify
              and close trade actions into the copier workflow for connected
              slave accounts to receive.
            </p>
            <div className="mt-6 grid gap-3">
              {setupChecks.master.map((item) => (
                <p
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-6 text-steel"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="premium-card premium-glow rounded-3xl border border-line bg-panel/75 p-7">
            <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
              <Layers3 className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-white">
              Slave Account Setup
            </h2>
            <p className="mt-4 text-sm leading-7 text-steel">
              Slave accounts receive copied actions from the master account.
              Each account should be checked independently for symbol mapping,
              lot settings and broker-specific conditions.
            </p>
            <div className="mt-6 grid gap-3">
              {setupChecks.slave.map((item) => (
                <p
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-6 text-steel"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Configuration reference
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Core settings and operator tools
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Review these areas during setup and testing so the copier matches
            your account structure and operating rules.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {configurationCards.map((item) => (
            <div
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
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(11,18,32,0.92),rgba(5,7,13,0.96))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.38)] sm:p-8 lg:p-10">
          <div
            className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-electric/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                <ShieldCheck className="h-4 w-4" />
                Risk-aware deployment
              </div>
              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                Checklist before live operation
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                Copy trading is still trading. Use a measured deployment process
                and monitor early sessions manually.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deploymentChecklist.map((item) => (
                <div
                  key={item}
                  className="premium-card rounded-2xl border border-line bg-panel/75 p-4"
                >
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-emerald" />
                    <p className="font-semibold text-white">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Documentation questions
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Concise answers for traders preparing setup, testing and deployment.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-xl border border-electric/25 bg-electric/10 p-2.5 text-electric">
                  <ListChecks className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black leading-7 text-white">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <CheckCircle2 className="h-4 w-4" />
            Official MQL5 Market Product
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Prepare your{" "}
            <span className="text-gradient">
              FEF Professional Trade Copier MT5
            </span>{" "}
            setup with confidence
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Use this documentation to configure the copier carefully, test on
            demo accounts and review the product page before deployment.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={brand.mql5Url}
              external
              icon={<ExternalLink className="h-4 w-4" />}
            >
              Buy on MQL5
            </ButtonLink>
            <ButtonLink href="/trade-copier" variant="secondary">
              View Trade Copier
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
