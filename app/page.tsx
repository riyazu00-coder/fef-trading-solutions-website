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
    description: "Low-latency execution focus with optimized operator workflows.",
    icon: <Zap className="h-5 w-5" />
  },
  {
    title: "Professional Software",
    description: "Purpose-built screens, clear states and clean implementation patterns.",
    icon: <Cpu className="h-5 w-5" />
  },
  {
    title: "Multi-Broker Support",
    description: "Designed around real broker symbol differences and account setups.",
    icon: <Building2 className="h-5 w-5" />
  },
  {
    title: "Reliable Synchronization",
    description: "Stateful master-to-slave syncing built for clear account control.",
    icon: <Radio className="h-5 w-5" />
  },
  {
    title: "Stable Architecture",
    description: "Retry queues, recovery logic and resilient operator workflows.",
    icon: <Layers3 className="h-5 w-5" />
  },
  {
    title: "Continuous Updates",
    description: "Product development driven by real trader and operator needs.",
    icon: <Activity className="h-5 w-5" />
  },
  {
    title: "Dedicated Support",
    description: "Direct contact via Telegram and email for product questions.",
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: "Enterprise Design",
    description: "A premium software experience focused on clarity and trust.",
    icon: <BadgeCheck className="h-5 w-5" />
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="site-grid absolute inset-0" />
        <div className="relative mx-auto grid min-h-[calc(100vh-var(--header-height))] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-2 text-xs font-medium text-steel shadow-glow">
              <span className="h-2 w-2 rounded-full bg-emerald" />
              {brand.product} - {brand.status}
            </div>
            <h1 className="mt-8 max-w-4xl text-balance text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Professional Trading Software for <span className="text-gradient">MetaTrader 5</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-steel sm:text-xl">
              Powerful, reliable and intelligent trading solutions engineered for professional traders, portfolio managers
              and multi-account trading.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" icon={<ArrowRight className="h-4 w-4" />}>
                Buy Now
              </ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                Explore Products
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-xs text-steel">
              {[
                ["Low-latency engine", <Bolt key="bolt" className="h-4 w-4 text-electric" />],
                ["Multi-broker ready", <ShieldCheck key="shield" className="h-4 w-4 text-electric" />],
                ["Real-time sync", <Activity key="activity" className="h-4 w-4 text-electric" />]
              ].map(([label, icon]) => (
                <div key={String(label)} className="min-w-0">
                  {icon}
                  <p className="mt-3 leading-5">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-7 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-emerald/35 bg-emerald/10 px-4 py-1 text-xs font-bold text-emerald">
                {brand.status}
              </span>
              <h2 className="mt-6 text-balance text-4xl font-black text-white sm:text-5xl">
                FEF Professional <span className="text-gradient">Trade Copier MT5</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                Professional Master/Slave Trade Copier for MetaTrader 5 designed to mirror trades across multiple accounts
                with speed, stability and precision.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/trade-copier">Learn More</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Buy Now
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Master/Slave", "Mirror to N accounts", <Layers3 key="layers" className="h-5 w-5" />],
                ["Low Latency", "Tick-level engine", <Zap key="zap" className="h-5 w-5" />],
                ["All Symbols", "FX, metals, indices, crypto", <BadgeCheck key="badge" className="h-5 w-5" />],
                ["Resilient", "Auto-recovery and retry queue", <Radio key="radio" className="h-5 w-5" />]
              ].map(([title, description, icon]) => (
                <div key={String(title)} className="rounded-xl border border-line bg-ink/45 p-6">
                  <span className="text-electric">{icon}</span>
                  <h3 className="mt-5 font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-steel">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-electric">Product Line</p>
          <h2 className="text-balance text-4xl font-black text-white sm:text-5xl">
            Built for serious <span className="text-gradient">MT5 traders</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-steel">
            A focused suite of professional MetaTrader 5 tools engineered for performance, stability and clarity.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-electric">Trade Copier Capabilities</p>
          <h2 className="text-balance text-4xl font-black text-white sm:text-5xl">
            Everything you need for <span className="text-gradient">precision copying</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-steel">
            Engineered around the realities of multi-account MT5 execution: accuracy, recovery and operator control.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copierFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} icon={<CheckCircle2 className="h-5 w-5" />} />
          ))}
        </div>
      </section>

      <TradeCopyDemo />
      <DashboardPreview />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-electric">Why FEF</p>
          <h2 className="text-balance text-4xl font-black text-white sm:text-5xl">
            Engineered for <span className="text-gradient">professionals</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyItems.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <CTASection />
      <RiskWarning />
    </>
  );
}
