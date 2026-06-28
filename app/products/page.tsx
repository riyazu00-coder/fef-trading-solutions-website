import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the FEF Trading Solutions product line for MetaTrader 5 traders and portfolio operators."
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
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-line bg-panel/75 p-8">
            <span className="inline-flex rounded-full border border-emerald/35 bg-emerald/10 px-4 py-1 text-xs font-bold text-emerald">
              Available Now
            </span>
            <h2 className="mt-6 text-3xl font-black text-white">FEF Professional Trade Copier MT5</h2>
            <p className="mt-4 text-steel">
              The first released FEF product is built around master/slave trade copying, symbol detection and operational
              visibility for MetaTrader 5.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/trade-copier" icon={<ArrowRight className="h-4 w-4" />}>
                Explore Trade Copier
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Buy Now
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-panel/75 p-8">
            <span className="inline-flex rounded-full border border-line bg-white/[0.04] px-4 py-1 text-xs font-bold text-steel">
              Roadmap
            </span>
            <h2 className="mt-6 text-3xl font-black text-white">Coming Soon Products</h2>
            <div className="mt-6 grid gap-4">
              {products.slice(1).map((product) => (
                <div key={product.name} className="flex gap-3 rounded-lg border border-line bg-ink/45 p-4">
                  <Clock3 className="mt-1 h-4 w-4 shrink-0 text-electric" />
                  <div>
                    <h3 className="font-bold text-white">{product.name}</h3>
                    <p className="mt-1 text-sm text-steel">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-ink/55 p-8">
          <h2 className="text-2xl font-black text-white">What the suite prioritizes</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Operational clarity", "Stable execution", "Broker-aware design", "Direct support"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-line bg-panel/70 p-4 text-sm font-semibold text-white">
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
