import {
  Activity,
  BadgeCheck,
  Building2,
  Cpu,
  ExternalLink,
  Layers3,
  Radio,
  ShieldCheck,
  Store,
} from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ProductCard } from "@/components/ProductCard";
import { RiskWarning } from "@/components/RiskWarning";
import { TradeCopyDemo } from "@/components/TradeCopyDemo";
import { brand, products } from "@/lib/site-data";

const whyItems = [
  {
    title: "Official MQL5 Release",
    description:
      "FEF Professional Trade Copier MT5 is available through the official MQL5 Market for MetaTrader 5 users.",
    icon: <Store className="h-5 w-5" />,
  },
  {
    title: "Professional Dashboard",
    description:
      "Clean operator interface built for monitoring copier status, sync events, accounts and actions.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Multi-Broker Ready",
    description:
      "Designed for different MT5 brokers, account types and symbol naming conditions.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Reliable Synchronization",
    description:
      "State-aware Master/Slave copying logic for trade opens, modifications, closures and recovery.",
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: "Stable Architecture",
    description:
      "Built with retry handling, recovery logic and practical workflows for extended trading sessions.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Dedicated Support",
    description:
      "Direct product support through Telegram, WhatsApp and email for setup and configuration guidance.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const trustStats = [
  {
    value: "MQL5",
    label: "Official Market Release",
    detail: "Distributed through the trusted MetaTrader marketplace.",
  },
  {
    value: "MT5",
    label: "Professional Platform",
    detail: "Built for MetaTrader 5 operator workflows.",
  },
  {
    value: "24 Hours",
    label: "Customer Support",
    detail: "Setup guidance available for active customers.",
  },
  {
    value: "UAE",
    label: "Business Location",
    detail: "Clear business presence and direct contact channels.",
  },
];

const releaseItems = [
  "Official MQL5 Market product page",
  "Secure MQL5 delivery and licensing",
  "MetaTrader 5 / Windows compatible",
  "Professional setup support available",
];

const marketPulseItems = [
  {
    symbol: "XAUUSD",
    bias: "Bullish",
    change: "+1.25%",
    note: "Gold strength",
  },
  {
    symbol: "EURUSD",
    bias: "Neutral",
    change: "+0.08%",
    note: "Range market",
  },
  {
    symbol: "GBPUSD",
    bias: "Bearish",
    change: "-0.34%",
    note: "Sterling pressure",
  },
  {
    symbol: "BTCUSD",
    bias: "Bullish",
    change: "+2.18%",
    note: "Crypto risk-on",
  },
  {
    symbol: "DXY",
    bias: "Bearish",
    change: "-0.41%",
    note: "Dollar weakness",
  },
  {
    symbol: "USOIL",
    bias: "Neutral",
    change: "+0.12%",
    note: "Energy stable",
  },
];

const tradingOpportunities = [
  {
    market: "Gold",
    setup: "Watching Breakout",
    bias: "Bullish",
    risk: "Medium",
  },
  {
    market: "EURUSD",
    setup: "Waiting Confirmation",
    bias: "Neutral",
    risk: "Low",
  },
  {
    market: "BTCUSD",
    setup: "Momentum Active",
    bias: "Bullish",
    risk: "High",
  },
];

const workflowFeatures = [
  {
    title: "Low Latency Synchronization",
    description: "Trade actions are processed through a fast replication path.",
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: "Multi-Broker Compatible",
    description: "Built for practical MT5 setups across different brokers.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Secure Trade Replication",
    description: "Copy logic is structured around controlled account linking.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Automatic Position Updates",
    description: "Open, modified and closed positions stay synchronized.",
    icon: <Activity className="h-5 w-5" />,
  },
];

const slaveAccounts = [
  "Slave Account 1",
  "Slave Account 2",
  "Slave Account 3",
  "Slave Account 4",
];

const whyFefReasons = [
  {
    title: "Native MetaTrader 5 Architecture",
    description:
      "Purpose-built around MT5 trading workflows, account behavior and operator expectations.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Multi-Account Operations",
    description:
      "Designed for teams and traders managing master and slave account structures.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Professional Dashboard Experience",
    description:
      "Clear status views help operators monitor synchronization, accounts and copier activity.",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "Secure MQL5 Market Delivery",
    description:
      "Official marketplace delivery supports licensing, access and product distribution.",
    icon: <Store className="h-5 w-5" />,
  },
  {
    title: "Direct Product Support",
    description:
      "Setup and configuration guidance is available through clear support channels.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Continuous Software Roadmap",
    description:
      "FEF continues building practical tools for trading operations, risk and automation.",
    icon: <Radio className="h-5 w-5" />,
  },
];

const ecosystemGroups = [
  {
    status: "Released",
    accent: "emerald",
    modules: [
      {
        name: "Trade Copier MT5",
        description: "Master/slave trade replication for professional MT5 workflows.",
        icon: <Radio className="h-5 w-5" />,
      },
      {
        name: "Manual Trade Manager PRO",
        description: "Manual execution controls for active MetaTrader 5 operators.",
        icon: <Activity className="h-5 w-5" />,
      },
    ],
  },
  {
    status: "In Development",
    accent: "electric",
    modules: [
      {
        name: "Gold Master EA",
        description: "Specialized gold trading automation for XAUUSD workflows.",
        icon: <Cpu className="h-5 w-5" />,
      },
      {
        name: "Risk Manager",
        description: "Account protection and exposure controls for trading teams.",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
      {
        name: "Trade Scanner",
        description: "Market scanning tools for identifying actionable setups.",
        icon: <BadgeCheck className="h-5 w-5" />,
      },
      {
        name: "Smart Trader",
        description: "Decision-support tools for disciplined trading workflows.",
        icon: <Layers3 className="h-5 w-5" />,
      },
    ],
  },
  {
    status: "Future Platform",
    accent: "cyan",
    modules: [
      {
        name: "Customer Portal",
        description: "Central workspace for customer access and account resources.",
        icon: <Building2 className="h-5 w-5" />,
      },
      {
        name: "License Manager",
        description: "License visibility and product entitlement management.",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
      {
        name: "Downloads Center",
        description: "Organized delivery hub for installers and product files.",
        icon: <Store className="h-5 w-5" />,
      },
      {
        name: "Update Manager",
        description: "Version tracking and structured software release handling.",
        icon: <Radio className="h-5 w-5" />,
      },
    ],
  },
];

const faqItems = [
  {
    question: "Does FEF Professional Trade Copier MT5 work with any broker?",
    answer:
      "It is designed for MetaTrader 5 environments and supports broker-specific symbol naming conditions, but users should always test on demo accounts first.",
  },
  {
    question: "Is it available on MQL5 Market?",
    answer:
      "Yes. FEF Professional Trade Copier MT5 is officially available on the MQL5 Market.",
  },
  {
    question: "Can I copy trades to multiple slave accounts?",
    answer:
      "Yes. The software is designed for Master/Slave trade copying workflows across multiple connected MT5 accounts.",
  },
  {
    question: "Does it support different symbol names?",
    answer:
      "Yes. The copier includes symbol detection logic for common broker prefixes, suffixes and symbol variations.",
  },
  {
    question: "Do you provide support?",
    answer:
      "Yes. Support is available through Telegram, WhatsApp and email for setup and product guidance.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. FEF Trading Solutions develops software tools only and does not provide financial advice or profit guarantees.",
  },
];

const softwareStatusItems = [
  {
    label: "Trade Copier MT5",
    status: "Operational",
    icon: <Radio className="h-5 w-5" />,
    tone: "emerald",
  },
  {
    label: "Manual Trade Manager PRO",
    status: "Available",
    icon: <Activity className="h-5 w-5" />,
    tone: "emerald",
  },
  {
    label: "Market Pulse",
    status: "Preview Mode",
    icon: <BadgeCheck className="h-5 w-5" />,
    tone: "electric",
  },
  {
    label: "Downloads Center",
    status: "Active",
    icon: <Store className="h-5 w-5" />,
    tone: "emerald",
  },
  {
    label: "Documentation",
    status: "Updated",
    icon: <Layers3 className="h-5 w-5" />,
    tone: "cyan",
  },
];

const supportDeliveryItems = [
  {
    label: "MQL5 Market",
    status: "Published",
    icon: <Store className="h-5 w-5" />,
    tone: "emerald",
  },
  {
    label: "Customer Support",
    status: "Online",
    icon: <ShieldCheck className="h-5 w-5" />,
    tone: "emerald",
  },
  {
    label: "Secure Delivery",
    status: "Active",
    icon: <BadgeCheck className="h-5 w-5" />,
    tone: "cyan",
  },
  {
    label: "Product Updates",
    status: "Roadmap Active",
    icon: <Radio className="h-5 w-5" />,
    tone: "electric",
  },
];

const operationsHighlights = [
  "Official MQL5 Product",
  "UAE Business Location",
  "24 Hours Support",
  "MT5 Software Ecosystem",
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(5,7,13,0.24),rgba(7,17,31,0.72)_34%,rgba(5,7,13,0.36))]">
      <section className="relative overflow-hidden px-5 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_28rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald shadow-emerald">
              <span className="h-2 w-2 rounded-full bg-emerald shadow-emerald" />
              Official MQL5 Market Product
            </div>

            <h1 className="mt-8 text-balance text-5xl font-black leading-[0.94] text-white sm:text-6xl lg:text-8xl">
              FEF Professional{" "}
              <span className="bg-gradient-to-r from-electric via-cyan to-emerald bg-clip-text text-transparent">
                Trade Copier MT5
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-steel">
              Professional Master/Slave Trade Copier for MetaTrader 5. Exact
              mirror, every trade, every time.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
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

            <div className="mx-auto mt-11 grid max-w-4xl gap-4 text-sm font-semibold text-steel sm:grid-cols-3">
              <div className="premium-card rounded-2xl border border-line bg-panel/70 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
                <BadgeCheck className="mx-auto mb-3 h-5 w-5 text-electric" />
                Official Market Release
              </div>
              <div className="premium-card rounded-2xl border border-line bg-panel/70 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
                <ShieldCheck className="mx-auto mb-3 h-5 w-5 text-electric" />
                Secure MQL5 Delivery
              </div>
              <div className="premium-card rounded-2xl border border-line bg-panel/70 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
                <Activity className="mx-auto mb-3 h-5 w-5 text-electric" />
                Real-Time Synchronization
              </div>
            </div>
          </div>

          <div className="relative mt-16 lg:mt-20">
            <div
              className="absolute -inset-x-6 bottom-0 top-12 rounded-[2rem] bg-electric/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="premium-card relative overflow-hidden rounded-[2rem] border border-electric/30 bg-panel/80 p-2 shadow-[0_30px_110px_rgba(0,0,0,0.46)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald shadow-emerald" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-electric/80" />
                </div>
                <p className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-steel sm:block">
                  MT5 Trade Copier Interface
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-ink">
                <Image
                  src="/images/hero.png"
                  alt="FEF Professional Trade Copier MT5 dashboard and trade copying interface"
                  width={1536}
                  height={864}
                  priority
                  className="h-auto w-full"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/80 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-ink/75 px-4 py-3 backdrop-blur">
                  <p className="text-sm font-semibold text-white">
                    Clean monitoring for master and slave account activity
                  </p>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                    Live sync ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/20 bg-[linear-gradient(135deg,rgba(11,18,32,0.94),rgba(5,7,13,0.96))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/70 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-electric">
                <Activity className="h-4 w-4" />
                Static preview snapshot
              </div>

              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                FEF Market Pulse
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
                A professional snapshot of major markets for traders who
                monitor momentum, volatility and risk mood.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {marketPulseItems.map((item) => (
                  <div
                    key={item.symbol}
                    className="premium-card rounded-2xl border border-line bg-ink/55 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.24)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-lg font-black text-white">
                          {item.symbol}
                        </p>
                        <p className="mt-2 text-sm text-steel">{item.note}</p>
                      </div>
                      <span
                        className={
                          item.bias === "Bullish"
                            ? "rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold text-emerald"
                            : item.bias === "Bearish"
                              ? "rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-bold text-electric"
                              : "rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-xs font-bold text-steel"
                        }
                      >
                        {item.bias}
                      </span>
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-4">
                      <p
                        className={
                          item.change.startsWith("-")
                            ? "font-mono text-2xl font-black text-electric"
                            : "font-mono text-2xl font-black text-emerald"
                        }
                      >
                        {item.change}
                      </p>
                      <div className="h-10 flex-1 overflow-hidden rounded bg-white/[0.04]">
                        <svg
                          viewBox="0 0 140 42"
                          className={
                            item.change.startsWith("-")
                              ? "h-full w-full text-electric/70"
                              : "h-full w-full text-emerald/70"
                          }
                          aria-hidden="true"
                        >
                          <polyline
                            points={
                              item.change.startsWith("-")
                                ? "0,10 18,15 34,13 52,21 70,18 88,27 106,30 124,35 140,32"
                                : "0,32 18,27 34,28 52,20 70,22 88,14 106,16 124,8 140,10"
                            }
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-6 text-steel">
                Market Pulse is informational only and does not provide
                financial advice.
              </p>
            </div>

            <div className="lg:self-start">
              <aside className="premium-card premium-glow rounded-3xl border border-emerald/25 bg-panel/75 p-5 shadow-emerald lg:max-h-[680px] lg:overflow-hidden">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">
                      Trading Opportunities
                    </p>
                    <h3 className="mt-2 text-xl font-black text-white">
                      Watchlist focus
                    </h3>
                  </div>
                  <Radio className="h-5 w-5 text-emerald" />
                </div>

                <div className="mt-5 space-y-3 lg:max-h-[560px] lg:overflow-y-auto lg:pr-1">
                  {tradingOpportunities.map((item) => (
                    <div
                      key={item.market}
                      className="rounded-2xl border border-line bg-ink/55 p-3.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-mono text-sm font-black text-white">
                            {item.market}
                          </p>
                          <p className="mt-1 text-xs font-semibold leading-5 text-steel">
                            {item.setup}
                          </p>
                        </div>
                        <span
                          className={
                            item.risk === "High"
                              ? "rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-bold text-electric"
                              : item.risk === "Medium"
                                ? "rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold text-emerald"
                                : "rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-xs font-bold text-steel"
                          }
                        >
                          {item.risk} Risk
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                          <p className="uppercase tracking-[0.18em] text-steel">
                            Bias
                          </p>
                          <p className="mt-1 font-bold text-white">
                            {item.bias}
                          </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                          <p className="uppercase tracking-[0.18em] text-steel">
                            Risk
                          </p>
                          <p className="mt-1 font-bold text-white">
                            {item.risk}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.96),rgba(11,18,32,0.94))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-electric/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                <Cpu className="h-4 w-4" />
                Copier workflow
              </div>

              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                How FEF Trade Copier Works
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
                Trades from the master account are automatically synchronized to
                connected slave accounts while preserving the execution workflow
                traders expect inside MetaTrader 5.
              </p>

              <div className="mt-8 rounded-3xl border border-line bg-ink/55 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-6">
                <div className="mx-auto flex max-w-3xl flex-col items-center">
                  <div className="w-full rounded-2xl border border-electric/25 bg-panel/80 p-5 text-center">
                    <Activity className="mx-auto h-6 w-6 text-electric" />
                    <p className="mt-3 font-mono text-sm font-black uppercase tracking-[0.18em] text-white">
                      Master Account
                    </p>
                  </div>

                  <div className="h-8 w-px bg-gradient-to-b from-electric to-emerald" />

                  <div className="w-full rounded-2xl border border-cyan/25 bg-white/[0.035] p-5 text-center">
                    <Radio className="mx-auto h-6 w-6 text-cyan" />
                    <p className="mt-3 font-mono text-sm font-black uppercase tracking-[0.18em] text-white">
                      Trade Detected
                    </p>
                  </div>

                  <div className="h-8 w-px bg-gradient-to-b from-cyan to-emerald" />

                  <div className="w-full rounded-2xl border border-emerald/30 bg-emerald/10 p-5 text-center shadow-emerald">
                    <Cpu className="mx-auto h-6 w-6 text-emerald" />
                    <p className="mt-3 font-mono text-sm font-black uppercase tracking-[0.18em] text-white">
                      FEF Synchronization Engine
                    </p>
                  </div>

                  <div className="relative h-10 w-full max-w-lg">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-emerald/70" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent" />
                  </div>

                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {slaveAccounts.map((account) => (
                      <div
                        key={account}
                        className="rounded-2xl border border-line bg-panel/75 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-electric" />
                          <p className="font-mono text-sm font-black text-white">
                            {account}
                          </p>
                        </div>
                        <div className="mt-4 grid gap-2 text-sm font-semibold text-steel">
                          <span className="inline-flex items-center gap-2">
                            <BadgeCheck className="h-4 w-4 text-emerald" />
                            Connected
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <BadgeCheck className="h-4 w-4 text-emerald" />
                            Synchronized
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {workflowFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-steel">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-electric">
                <BadgeCheck className="h-4 w-4" />
                FEF advantage
              </div>
              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                Why Professional Traders Choose FEF
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-steel lg:justify-self-end">
              FEF Trading Solutions focuses on reliable MT5 software, clear
              operator dashboards and tools built for serious trading
              operations.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyFefReasons.map((reason) => (
              <div
                key={reason.title}
                className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-steel">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/20 bg-[linear-gradient(135deg,rgba(6,12,22,0.98),rgba(11,18,32,0.92))] p-6 shadow-[0_30px_105px_rgba(0,0,0,0.44)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/70 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-emerald/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-24 bottom-12 h-72 w-72 rounded-full bg-electric/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
              <Layers3 className="h-4 w-4" />
              FEF Software Ecosystem
            </div>
            <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
              One Platform. Multiple Professional Trading Solutions.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-steel">
              FEF Trading Solutions is building an integrated ecosystem of
              MetaTrader 5 software designed for professional traders,
              portfolio managers and multi-account operations.
            </p>
          </div>

          <div className="relative mt-12">
            <div
              className="absolute left-1/2 top-20 hidden h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-electric/70 via-emerald/45 to-cyan/35 lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute left-[8%] right-[8%] top-52 hidden h-px bg-gradient-to-r from-transparent via-electric/45 to-transparent lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute left-[8%] right-[8%] top-[34rem] hidden h-px bg-gradient-to-r from-transparent via-emerald/35 to-transparent lg:block"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-sm rounded-3xl border border-emerald/30 bg-panel/90 p-6 text-center shadow-emerald">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/25 bg-electric/10 text-electric">
                <Cpu className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-steel">
                Center Node
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                FEF Trading Solutions
              </h3>
            </div>

            <div className="relative mt-10 grid gap-6 lg:grid-cols-3">
              {ecosystemGroups.map((group) => (
                <div key={group.status} className="relative">
                  <div
                    className="mx-auto mb-5 hidden h-8 w-px bg-gradient-to-b from-emerald/60 to-transparent lg:block"
                    aria-hidden="true"
                  />
                  <div className="rounded-3xl border border-line bg-ink/55 p-4 shadow-[0_22px_75px_rgba(0,0,0,0.3)] sm:p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                        {group.status}
                      </p>
                      <span
                        className={
                          group.accent === "emerald"
                            ? "rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold text-emerald"
                            : group.accent === "cyan"
                              ? "rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan"
                              : "rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-bold text-electric"
                        }
                      >
                        Connected
                      </span>
                    </div>

                    <div className="grid gap-4">
                      {group.modules.map((module) => (
                        <div
                          key={module.name}
                          className="premium-card premium-glow relative rounded-2xl border border-line bg-panel/75 p-5"
                        >
                          <div
                            className="absolute -left-5 top-1/2 hidden h-px w-5 bg-gradient-to-r from-transparent to-emerald/40 lg:block"
                            aria-hidden="true"
                          />
                          <div className="flex items-start gap-4">
                            <div
                              className={
                                group.accent === "emerald"
                                  ? "rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald"
                                  : group.accent === "cyan"
                                    ? "rounded-xl border border-cyan/25 bg-cyan/10 p-3 text-cyan"
                                    : "rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric"
                              }
                            >
                              {module.icon}
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-base font-black text-white">
                                  {module.name}
                                </h3>
                                <span
                                  className={
                                    group.accent === "emerald"
                                      ? "rounded-full bg-emerald/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald"
                                      : group.accent === "cyan"
                                        ? "rounded-full bg-cyan/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan"
                                        : "rounded-full bg-electric/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-electric"
                                  }
                                >
                                  {group.status}
                                </span>
                              </div>
                              <p className="mt-3 text-sm leading-6 text-steel">
                                {module.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.98),rgba(11,18,32,0.94))] p-6 shadow-[0_30px_105px_rgba(0,0,0,0.44)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-electric/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-24 bottom-8 h-72 w-72 rounded-full bg-emerald/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-electric">
                <Cpu className="h-4 w-4" />
                Operations dashboard
              </div>
              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                FEF Operations Center
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-steel lg:justify-self-end">
              A professional overview of product status, support availability
              and trading software operations.
            </p>
          </div>

          <div className="relative rounded-3xl border border-line bg-ink/60 p-4 shadow-[0_24px_85px_rgba(0,0,0,0.34)] sm:p-5 lg:p-6">
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border border-line bg-panel/75 p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald">
                      Software Status
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      Product operations
                    </h3>
                  </div>
                  <Activity className="h-6 w-6 text-emerald" />
                </div>

                <div className="grid gap-3">
                  {softwareStatusItems.map((item) => (
                    <div
                      key={item.label}
                      className="premium-card rounded-2xl border border-line bg-ink/55 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={
                              item.tone === "emerald"
                                ? "rounded-xl border border-emerald/25 bg-emerald/10 p-2.5 text-emerald"
                                : item.tone === "cyan"
                                  ? "rounded-xl border border-cyan/25 bg-cyan/10 p-2.5 text-cyan"
                                  : "rounded-xl border border-electric/25 bg-electric/10 p-2.5 text-electric"
                            }
                          >
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-semibold text-white">
                              {item.label}
                            </p>
                            <p className="mt-1 text-xs text-steel">
                              MT5 software operation
                            </p>
                          </div>
                        </div>
                        <span
                          className={
                            item.tone === "emerald"
                              ? "inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold text-emerald"
                              : item.tone === "cyan"
                                ? "inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan"
                                : "inline-flex shrink-0 items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-bold text-electric"
                          }
                        >
                          <span className="h-2 w-2 rounded-full bg-current" />
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-line bg-panel/75 p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-electric">
                      Support & Delivery
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      Availability layer
                    </h3>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-electric" />
                </div>

                <div className="grid gap-3">
                  {supportDeliveryItems.map((item) => (
                    <div
                      key={item.label}
                      className="premium-card rounded-2xl border border-line bg-ink/55 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={
                              item.tone === "emerald"
                                ? "rounded-xl border border-emerald/25 bg-emerald/10 p-2.5 text-emerald"
                                : item.tone === "cyan"
                                  ? "rounded-xl border border-cyan/25 bg-cyan/10 p-2.5 text-cyan"
                                  : "rounded-xl border border-electric/25 bg-electric/10 p-2.5 text-electric"
                            }
                          >
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-semibold text-white">
                              {item.label}
                            </p>
                            <p className="mt-1 text-xs text-steel">
                              Delivery and support status
                            </p>
                          </div>
                        </div>
                        <span
                          className={
                            item.tone === "emerald"
                              ? "inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold text-emerald"
                              : item.tone === "cyan"
                                ? "inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan"
                                : "inline-flex shrink-0 items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-bold text-electric"
                          }
                        >
                          <span className="h-2 w-2 rounded-full bg-current" />
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 border-t border-white/[0.08] pt-5 sm:grid-cols-2 lg:grid-cols-4">
              {operationsHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-4 text-center"
                >
                  <BadgeCheck className="mx-auto h-5 w-5 text-emerald" />
                  <p className="mt-3 text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="premium-card premium-glow rounded-3xl border border-emerald/25 bg-[linear-gradient(135deg,rgba(11,18,32,0.96),rgba(5,7,13,0.92))] p-7 shadow-glow sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
                <Store className="h-4 w-4" />
                Official Release
              </div>

              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                Live on the <span className="text-gradient">MQL5 Market</span>
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
                Purchase and access the official MetaTrader 5 version directly
                through the MQL5 Market ecosystem with secure delivery,
                licensing and future updates.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={brand.mql5Url}
                  external
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Open MQL5 Product Page
                </ButtonLink>

                <ButtonLink href="/trade-copier" variant="secondary">
                  Product Details
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {releaseItems.map((item) => (
                <div
                  key={item}
                  className="premium-card rounded-2xl border border-line bg-white/[0.035] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.2)]"
                >
                  <BadgeCheck className="h-5 w-5 text-emerald" />
                  <p className="mt-4 text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TradeCopyDemo />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Why Professional Traders Choose FEF
          </p>

          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Built for serious MT5 trade operations
          </h2>

          <p className="mt-5 max-w-3xl text-steel">
            FEF focuses on practical trading software: clear dashboards,
            reliable synchronization, direct support and tools designed around
            real MetaTrader 5 workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-panel/75 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.36)] sm:p-8 lg:p-10">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.38fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
                Trust Signals
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
                Practical credibility before the first setup.
              </h2>
              <p className="mt-5 text-steel">
                Clear marketplace delivery, platform focus and direct support
                help traders evaluate the product before adding it to their MT5
                workflow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="premium-card premium-glow rounded-2xl border border-line bg-ink/50 p-6"
                >
                  <p className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-4xl font-black text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              FEF Product Line
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              A growing MetaTrader 5 software ecosystem
            </h2>
            <p className="mt-5 max-w-2xl text-steel">
              Start with the released Trade Copier and explore the upcoming FEF
              software roadmap for trading operations, risk control and market
              scanning.
            </p>
          </div>

          <ButtonLink href="/products" variant="secondary">
            View All Products
          </ButtonLink>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              status={product.status}
              description={product.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(11,18,32,0.92),rgba(5,7,13,0.96))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.38)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-electric/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mb-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                <BadgeCheck className="h-4 w-4" />
                FAQ
              </div>
              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-steel lg:justify-self-end">
              Quick answers for traders, portfolio managers and MT5 users
              considering FEF Professional Trade Copier MT5.
            </p>
          </div>

          <div className="relative grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="premium-card premium-glow rounded-2xl border border-line bg-panel/70 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl border border-electric/25 bg-electric/10 p-2.5 text-electric">
                    <ShieldCheck className="h-5 w-5" />
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
        </div>
      </section>

      <RiskWarning />
      <CTASection />
    </main>
  );
}
