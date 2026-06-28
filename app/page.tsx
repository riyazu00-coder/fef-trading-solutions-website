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
      <HeroVisual />

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