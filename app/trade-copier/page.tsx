import type { Metadata } from "next";
import {
  Activity,
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
import { CTASection } from "@/components/CTASection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { FeatureCard } from "@/components/FeatureCard";
import { RiskWarning } from "@/components/RiskWarning";
import { SectionHeading } from "@/components/SectionHeading";
import { TradeCopyDemo } from "@/components/TradeCopyDemo";
import { brand, copierFeatures } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FEF Professional Trade Copier MT5",
  description:
    "Professional master/slave trade copier for MetaTrader 5 with symbol detection, retry queue, heartbeat monitoring and operator controls.",
};

const icons = [
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
  <RefreshCcw key="sync" className="h-5 w-5" />,
  <Power key="power" className="h-5 w-5" />,
];

export default function TradeCopierPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="site-grid absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-emerald/35 bg-emerald/10 px-4 py-1 text-xs font-bold text-emerald">
                {brand.status}
              </span>

              <h1 className="mt-6 text-balance text-5xl font-black leading-[1.05] text-white sm:text-6xl">
                FEF Professional{" "}
                <span className="text-gradient">Trade Copier MT5</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-steel">
                Professional Master/Slave Trade Copier for MetaTrader 5 designed
                to mirror trades across multiple accounts with speed, stability
                and precision.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

              <p className="mt-5 text-sm text-steel">
                Officially published on the MQL5 Market for MetaTrader 5 users.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel/78 p-6 shadow-glow">
              <div className="mb-5 inline-flex rounded-full border border-electric/20 bg-electric/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-electric">
                Official MQL5 Market Release
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Exact mirror",
                  "Symbol resolver",
                  "Retry queue",
                  "Heartbeat monitor",
                ].map((item) => (
                  <div key={item} className="premium-card rounded-xl border border-line bg-ink/60 p-5">
                    <CheckCircle2 className="h-5 w-5 text-emerald" />
                    <p className="mt-4 font-bold text-white">{item}</p>
                    <p className="mt-2 text-sm text-steel">
                      Built into the released copier workflow.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trade Copier Capabilities"
          title="Everything you need for"
          gradient="precision copying"
          description="Engineered around the realities of multi-account MT5 execution: accuracy, recovery and operator control."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copierFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              icon={icons[index] ?? <CheckCircle2 className="h-5 w-5" />}
            />
          ))}
        </div>
      </section>

      <TradeCopyDemo />
      <DashboardPreview />
      <CTASection />
      <RiskWarning />
    </>
  );
}