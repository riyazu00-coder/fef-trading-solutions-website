import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Building2,
  Cpu,
  Layers3,
  Network,
  Radio,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroVisual } from "@/components/HeroVisual";
import { ProductCard } from "@/components/ProductCard";
import { RiskWarning } from "@/components/RiskWarning";
import { TradeCopyDemo } from "@/components/TradeCopyDemo";
import { brand, products } from "@/lib/site-data";

const whyItems = [
  {
    title: "High Performance",
    description:
      "Optimized synchronization workflows designed for fast, stable and efficient multi-account trade copying.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Professional Software",
    description:
      "Clean interfaces, structured dashboards and practical tools built for serious MetaTrader 5 users.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Multi-Broker Ready",
    description:
      "Designed to work across different MT5 brokers, account types and symbol naming conditions.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Reliable Synchronization",
    description:
      "State-aware Master/Slave copying logic built to track trades, updates, closures and recovery events.",
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: "Stable Architecture",
    description:
      "Built with retry handling, recovery logic and clean workflows to support extended trading sessions.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Dedicated Support",
    description:
      "Direct product support through Telegram, WhatsApp and email for setup, configuration and product guidance.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const ecosystemItems = [
  "Trade Copier",
  "Manual Trade Manager",
  "Smart Trader",
  "Risk Manager",
  "Trade Scanner",
  "Gold Master EA",
  "Downloads Center",
  "Customer Portal",
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto grid min-h-[calc(100vh-var(--header-height))] max-w-7xl items-center gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-2 text-sm text-steel">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            {brand.product} - {brand.status}
          </div>

          <h1 className="mt-10 max-w-3xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Professional Trading Software for{" "}
            <span className="bg-gradient-to-r from-electric via-cyan to-emerald bg-clip-text text-transparent">
              MetaTrader 5
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-steel">
            Powerful, reliable and intelligent trading solutions engineered for
            professional traders, portfolio managers and multi-account trading.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href="/contact"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Buy Now
            </ButtonLink>
            <ButtonLink href="/products" variant="secondary">
              Explore Products
            </ButtonLink>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 text-sm text-steel">
            <div>
              <BadgeCheck className="mb-3 h-5 w-5 text-electric" />
              Low-latency engine
            </div>

            <div>
              <ShieldCheck className="mb-3 h-5 w-5 text-electric" />
              Multi-broker ready
            </div>

            <div>
              <Activity className="mb-3 h-5 w-5 text-electric" />
              Real-time sync
            </div>
          </div>
        </div>

        <HeroVisual />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Why Choose FEF
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Built for professional MT5 trade operations
          </h2>
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-line bg-panel/70 p-8 shadow-2xl shadow-black/20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-electric/10 text-electric ring-1 ring-electric/20">
              <Network className="h-7 w-7" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              FEF Software Ecosystem
            </p>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              More than one EA. A complete MT5 software platform.
            </h2>

            <p className="mt-6 text-lg leading-8 text-steel">
              FEF Trading Solutions is building a connected ecosystem of MT5
              tools for trade copying, manual management, risk control, market
              scanning, automation, downloads, licensing and customer support.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ecosystemItems.map((item) => (
              <div
                key={item}
                className="premium-card premium-glow rounded-2xl border border-line bg-white/[0.03] p-5 text-center"
              >
                <p className="text-sm font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "8+", label: "Software Products" },
            { value: "24 Hours", label: "Customer Support" },
            { value: "MT5", label: "Professional Platform" },
            { value: "UAE", label: "Business Location" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/70 p-7 text-center"
            >
              <p className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-4xl font-black text-transparent">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-steel">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Featured Products
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Professional MT5 software built for real trading operations
            </h2>
            <p className="mt-5 max-w-2xl text-steel">
              Explore the main FEF Trading Solutions products available now and
              in development for the MetaTrader 5 ecosystem.
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

      <DashboardPreview />
      <TradeCopyDemo />
      <RiskWarning />
      <CTASection />
    </main>
  );
}