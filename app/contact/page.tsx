import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact FEF Trading Solutions to purchase FEF Professional Trade Copier MT5 or request information."
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="site-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Purchase and product"
            gradient="information"
            description="FEF Professional Trade Copier MT5 is available now. Contact FEF Trading Solutions directly for purchase details."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-panel/78 p-8">
              <span className="inline-flex rounded-full border border-emerald/35 bg-emerald/10 px-4 py-1 text-xs font-bold text-emerald">
                {brand.status}
              </span>
              <h2 className="mt-6 text-3xl font-black text-white">{brand.product}</h2>
              <p className="mt-4 text-steel">{brand.tagline}</p>
              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink href={brand.telegramUrl} external icon={<span className="text-sm">📨</span>}>
                  Telegram: {brand.telegram}
                </ButtonLink>
                <ButtonLink href={`mailto:${brand.email}`} variant="secondary" icon={<span className="text-sm">✉️</span>}>
                  Email: {brand.email}
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/78 p-8">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                ✔
              </span>
              <h2 className="mt-6 text-3xl font-black text-white">What to include</h2>
              <div className="mt-6 grid gap-4 text-sm text-steel">
                {[
                  "Product requested",
                  "Number of MT5 accounts",
                  "Broker names and symbol types",
                  "Any setup or licensing questions"
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-line bg-ink/50 p-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RiskWarning />
    </>
  );
}
