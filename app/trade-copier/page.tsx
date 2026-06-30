import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  DatabaseZap,
  ExternalLink,
  Gauge,
  HeartPulse,
  Infinity,
  Layers3,
  ListChecks,
  Power,
  Radio,
  RefreshCcw,
  RefreshCw,
  Route,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { brand, copierFeatures } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FEF Professional Trade Copier MT5",
  description:
    "Professional MetaTrader 5 trade copier software built for copying trades between MT5 accounts with workflow-focused controls, documentation, download access, and MQL5 Market availability.",
  alternates: {
    canonical: "https://www.feftradingsolutions.com/trade-copier",
  },
  openGraph: {
    title: "FEF Professional Trade Copier MT5 | FEF Trading Solutions",
    description:
      "Professional MetaTrader 5 trade copier software built for copying trades between MT5 accounts with workflow-focused controls, documentation, download access, and MQL5 Market availability.",
    url: "https://www.feftradingsolutions.com/trade-copier",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FEF Professional Trade Copier MT5 | FEF Trading Solutions",
    description:
      "Professional MetaTrader 5 trade copier software built for copying trades between MT5 accounts with workflow-focused controls, documentation, download access, and MQL5 Market availability.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const heroStats = [
  { label: "Platform", value: "MT5" },
  { label: "Workflow", value: "Master/Slave" },
  { label: "Delivery", value: "MQL5 Market" },
];

const capabilityIcons = [
  <Route key="route" className="h-5 w-5" />,
  <Layers3 key="layers" className="h-5 w-5" />,
  <ShieldCheck key="shield" className="h-5 w-5" />,
  <Radio key="radio" className="h-5 w-5" />,
  <Infinity key="infinity" className="h-5 w-5" />,
  <Gauge key="gauge" className="h-5 w-5" />,
  <HeartPulse key="heart" className="h-5 w-5" />,
  <RefreshCw key="refresh" className="h-5 w-5" />,
  <DatabaseZap key="database" className="h-5 w-5" />,
  <ListChecks key="list" className="h-5 w-5" />,
  <BarChart3 key="bar" className="h-5 w-5" />,
  <Activity key="activity" className="h-5 w-5" />,
];

const workflowSteps = [
  {
    title: "Master Trade Opens",
    description: "The master MT5 account creates or modifies a position.",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "FEF Detects Action",
    description: "The copier reads the trade event and resolves symbol rules.",
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: "Synchronization Engine",
    description: "Position state, sizing mode and recovery rules are applied.",
    icon: <RefreshCw className="h-5 w-5" />,
  },
  {
    title: "Slave Accounts Update",
    description: "Connected accounts receive the matching open, modify or close action.",
    icon: <Layers3 className="h-5 w-5" />,
  },
];

const masterSlaveBenefits = [
  {
    title: "Master Account Control",
    description:
      "Keep decision-making centralized while the copier distributes execution to connected slave accounts.",
    icon: <Power className="h-5 w-5" />,
  },
  {
    title: "Slave Account Consistency",
    description:
      "Preserve account alignment with copied opens, modifications, closures and recovery handling.",
    icon: <RefreshCcw className="h-5 w-5" />,
  },
  {
    title: "Multi-Account Scaling",
    description:
      "Operate multiple MT5 accounts from one trade source with flexible sizing workflows.",
    icon: <Infinity className="h-5 w-5" />,
  },
];

const operatorControls = [
  "Dashboard status monitoring",
  "Heartbeat and connection checks",
  "Retry queue and recovery logic",
  "Manual sync command",
  "Panic close workflow",
  "Event log visibility",
];

const tradeCopierStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FEF Professional Trade Copier MT5",
  applicationCategory: "FinanceApplication",
  operatingSystem: "MetaTrader 5",
  url: "https://www.feftradingsolutions.com/trade-copier",
  image: "https://www.feftradingsolutions.com/images/og-image.png",
  publisher: {
    "@type": "Organization",
    name: "FEF Trading Solutions",
    url: "https://www.feftradingsolutions.com/",
  },
  description:
    "Professional MetaTrader 5 trade copier software built for copying trades between MT5 accounts with workflow-focused controls, documentation, download access, and MQL5 Market availability.",
  offers: {
    "@type": "Offer",
    url: brand.mql5Url,
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

export default function TradeCopierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tradeCopierStructuredData),
        }}
      />
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
                <span className="h-2 w-2 rounded-full bg-emerald shadow-emerald" />
                {brand.status}
              </div>

              <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                FEF Professional{" "}
                <span className="text-gradient">Trade Copier MT5</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
                Premium Master/Slave trade copying software for MetaTrader 5,
                built for reliable multi-account synchronization, operator
                visibility and professional execution workflows.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={brand.mql5Url}
                  external
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Buy on MQL5
                </ButtonLink>

                <ButtonLink href="/documentation" variant="secondary">
                  View Documentation
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-line bg-panel/70 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-steel">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-black text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
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
                    Product Dashboard
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-ink">
                  <Image
                    src="/images/hero.png"
                    alt="FEF Professional Trade Copier MT5 dashboard screenshot"
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
            Key capabilities
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Built for serious MT5 copy operations
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            The copier combines account synchronization, symbol handling,
            recovery tools and operator visibility in one professional product.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {copierFeatures.slice(0, 12).map((feature, index) => (
            <div
              key={feature.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                {capabilityIcons[index] ?? <CheckCircle2 className="h-5 w-5" />}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {feature.description}
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
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              From master execution to synchronized slave accounts
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              FEF detects trade actions, applies synchronization rules and
              routes updates to connected accounts while preserving the MT5
              execution workflow.
            </p>
          </div>

          <div className="relative grid gap-5 lg:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-electric/0 via-emerald/60 to-electric/0 lg:block"
              aria-hidden="true"
            />
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="premium-card relative rounded-2xl border border-line bg-panel/80 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-black uppercase tracking-[0.22em] text-steel">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-black text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-steel">
                  {step.description}
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
              Master/Slave benefits
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Scale trade execution without losing operational control
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Keep the master account as the command source while slave accounts
              stay aligned through a state-aware synchronization process.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {masterSlaveBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
              >
                <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                  {benefit.icon}
                </div>
                <h3 className="mt-5 text-lg font-black text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-steel">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/20 bg-[linear-gradient(135deg,rgba(11,18,32,0.95),rgba(5,7,13,0.98))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10">
          <div
            className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                Operator controls
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                A dashboard built for monitoring and action
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                The product is designed for operators who need clear status,
                recovery visibility and decisive controls during extended
                trading sessions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {operatorControls.map((control) => (
                <div
                  key={control}
                  className="premium-card rounded-2xl border border-line bg-ink/60 p-5"
                >
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-emerald" />
                    <p className="font-bold text-white">{control}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RiskWarning />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <CheckCircle2 className="h-4 w-4" />
            Official MQL5 Market Product
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Get <span className="text-gradient">FEF Professional Trade Copier MT5</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Purchase through the official MQL5 Market and use the documentation
            to prepare a clean demo test before live deployment.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={brand.mql5Url}
              external
              icon={<ExternalLink className="h-4 w-4" />}
            >
              Buy on MQL5
            </ButtonLink>
            <ButtonLink href="/documentation" variant="secondary">
              View Documentation
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
