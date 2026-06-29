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

const marketIntelligenceItems = [
  {
    headline: "Gold traders watch dollar weakness and breakout momentum.",
    description:
      "XAUUSD remains in focus as traders monitor breakout confirmation.",
  },
  {
    headline: "Crypto risk appetite improves as BTC holds key levels.",
    description:
      "BTCUSD momentum stays active while buyers defend major support.",
  },
  {
    headline: "Forex majors remain mixed ahead of US economic data.",
    description:
      "EURUSD and GBPUSD traders wait for clearer dollar direction.",
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

              <div className="premium-card mt-5 overflow-hidden rounded-3xl border border-electric/20 bg-ink/60 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)] sm:p-6">
                <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-5 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-electric">
                      Market Intelligence Feed
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-white">
                      Static trader context
                    </h3>
                  </div>
                  <p className="rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald">
                    Static preview data. Live market feed coming soon.
                  </p>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {marketIntelligenceItems.map((item) => (
                    <div
                      key={item.headline}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
                    >
                      <span className="mb-4 block h-2.5 w-2.5 rounded-full bg-emerald shadow-emerald" />
                      <p className="text-sm font-bold leading-6 text-white">
                        {item.headline}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-steel">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <aside className="premium-card premium-glow rounded-3xl border border-emerald/25 bg-panel/75 p-6 shadow-emerald">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald">
                      Trading Opportunities
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-white">
                      Watchlist focus
                    </h3>
                  </div>
                  <Radio className="h-6 w-6 text-emerald" />
                </div>

                <div className="mt-7 space-y-4">
                  {tradingOpportunities.map((item) => (
                    <div
                      key={item.market}
                      className="rounded-2xl border border-line bg-ink/55 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-base font-black text-white">
                            {item.market}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-steel">
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

                      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-steel">
                            Bias
                          </p>
                          <p className="mt-2 font-bold text-white">
                            {item.bias}
                          </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-steel">
                            Risk
                          </p>
                          <p className="mt-2 font-bold text-white">
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

      <RiskWarning />
      <CTASection />
    </main>
  );
}
