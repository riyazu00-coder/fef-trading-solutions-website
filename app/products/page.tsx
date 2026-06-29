import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Store,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { brand, products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the FEF Trading Solutions product line for MetaTrader 5 traders and portfolio operators.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Line"
          title="Professional MT5 tools for"
          gradient="serious operators"
          description="A focused product suite for trade copying, execution assistance, account management, risk control and scanning."
        />

        <div className="mt-10 rounded-3xl border border-emerald/25 bg-panel/75 p-8 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
                <Store className="h-4 w-4" />
                Official MQL5 Release
              </div>

              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                FEF Professional Trade Copier MT5 is available now
              </h2>

              <p className="mt-5 max-w-3xl text-steel">
                The first commercial FEF product is officially published on the
                MQL5 Market for MetaTrader 5 users. Purchase, download and
                manage access through the MQL5 ecosystem.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={brand.mql5Url}
                  external
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Buy on MQL5
                </ButtonLink>

                <ButtonLink href="/trade-copier" variant="secondary">
                  View Product Details
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Master/Slave copying",
                "MQL5 Market delivery",
                "Professional dashboard",
                "MT5 Windows compatible",
              ].map((item) => (
                <div
                  key={item}
                  className="premium-card rounded-2xl border border-line bg-white/[0.03] p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald" />
                  <p className="mt-4 text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-panel/75 p-8">
          <span className="inline-flex rounded-full border border-line bg-white/[0.04] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-steel">
            Development Roadmap
          </span>

          <h2 className="mt-6 text-3xl font-black text-white">
            FEF Software Roadmap
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="premium-card rounded-xl border border-emerald/25 bg-emerald/5 p-6">
              <h3 className="text-lg font-bold text-emerald">Released</h3>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li>✓ FEF Professional Trade Copier MT5</li>
                <li>✓ FEF Manual Trade Manager PRO MT5</li>
              </ul>
            </div>

            <div className="premium-card rounded-xl border border-cyan/25 bg-cyan/5 p-6">
              <h3 className="text-lg font-bold text-cyan">In Development</h3>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li>• FEF Smart Trader MT5</li>
                <li>• FEF Gold Master EA MT5</li>
                <li>• FEF Risk Manager MT5</li>
                <li>• FEF Trade Scanner MT5</li>
              </ul>
            </div>

            <div className="premium-card rounded-xl border border-line bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold text-white">Research Phase</h3>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li>• FEF Smart Money PRO MT5</li>
                <li>• FEF VPS Monitor</li>
                <li>• FEF License Manager</li>
                <li>• Customer Portal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-ink/55 p-8">
          <h2 className="text-2xl font-black text-white">
            What the suite prioritizes
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Operational clarity",
              "Stable execution",
              "Broker-aware design",
              "Direct support",
            ].map((item) => (
              <div
                key={item}
                className="premium-card flex items-center gap-3 rounded-lg border border-line bg-panel/70 p-4 text-sm font-semibold text-white"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}