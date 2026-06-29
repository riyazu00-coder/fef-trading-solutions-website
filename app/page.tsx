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
  { value: "MQL5", label: "Official Market Release" },
  { value: "MT5", label: "Professional Platform" },
  { value: "24 Hours", label: "Customer Support" },
  { value: "UAE", label: "Business Location" },
];

const releaseItems = [
  "Official MQL5 Market product page",
  "Secure MQL5 delivery and licensing",
  "MetaTrader 5 / Windows compatible",
  "Professional setup support available",
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(29,168,255,0.18),transparent_34rem),radial-gradient(circle_at_70%_25%,rgba(25,215,135,0.12),transparent_30rem)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald">
              <span className="h-2 w-2 rounded-full bg-emerald" />
              Official MQL5 Market Product
            </div>

            <h1 className="mt-8 text-balance text-5xl font-black leading-[0.92] text-white sm:text-6xl lg:text-8xl">
              FEF Professional{" "}
              <span className="bg-gradient-to-r from-electric via-cyan to-emerald bg-clip-text text-transparent">
                Trade Copier MT5
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-steel">
              Professional Master/Slave Trade Copier for MetaTrader 5. Exact
              mirror, every trade, every time.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
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

            <div className="mt-10 grid gap-4 text-sm text-steel sm:grid-cols-3">
              <div className="rounded-2xl border border-line bg-panel/60 p-4">
                <BadgeCheck className="mx-auto mb-3 h-5 w-5 text-electric" />
                Official Market Release
              </div>
              <div className="rounded-2xl border border-line bg-panel/60 p-4">
                <ShieldCheck className="mx-auto mb-3 h-5 w-5 text-electric" />
                Secure MQL5 Delivery
              </div>
              <div className="rounded-2xl border border-line bg-panel/60 p-4">
                <Activity className="mx-auto mb-3 h-5 w-5 text-electric" />
                Real-Time Synchronization
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-electric/25 bg-panel/70 p-3 shadow-2xl shadow-electric/10">
           <Image
  src="/images/hero.png"
  alt="FEF Professional Trade Copier MT5 dashboard and trade copying interface"
  width={1536}
  height={864}
  priority
  className="h-auto w-full rounded-[1.5rem]"
/>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="premium-card premium-glow rounded-3xl border border-emerald/25 bg-panel/75 p-8 shadow-glow">
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
                  className="premium-card rounded-2xl border border-line bg-white/[0.03] p-5"
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
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

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
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