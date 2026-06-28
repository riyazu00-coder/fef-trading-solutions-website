import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bolt,
  Building2,
  CheckCircle2,
  Cpu,
  Layers3,
  Radio,
  ShieldCheck,
  Zap
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroVisual } from "@/components/HeroVisual";
import { ProductCard } from "@/components/ProductCard";
import { RiskWarning } from "@/components/RiskWarning";
import { TradeCopyDemo } from "@/components/TradeCopyDemo";
import { brand, copierFeatures, products } from "@/lib/site-data";

const whyItems = [
  {
    title: "High Performance",
    description: "Optimized synchronization workflows designed for fast, stable and efficient multi-account trade copying.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Professional Software",
    description: "Clean interfaces, structured dashboards and practical tools built for serious MetaTrader 5 users.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Multi-Broker Ready",
    description: "Designed to work across different MT5 brokers, account types and symbol naming conditions.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Reliable Synchronization",
    description: "State-aware Master/Slave copying logic built to track trades, updates, closures and recovery events.",
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: "Stable Architecture",
    description: "Built with retry handling, recovery logic and clean workflows to support extended trading sessions.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Dedicated Support",
    description: "Direct product support through Telegram and email for setup, configuration and product guidance.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
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
        <ButtonLink href="/contact" icon={<ArrowRight className="h-4 w-4" />}>
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

      <DashboardPreview />
      <TradeCopyDemo />
      <RiskWarning />
      <CTASection />
    </main>
  );
}