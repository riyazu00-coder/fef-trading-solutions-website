import { Mail, Send } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand } from "@/lib/site-data";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="noise overflow-hidden rounded-2xl border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
        <span className="inline-flex rounded-full border border-emerald/35 bg-emerald/10 px-4 py-1 text-xs font-bold text-emerald">{brand.status}</span>
        <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
          Available Now for <span className="text-gradient">Direct Purchase</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
          Contact FEF Trading Solutions to purchase or request product information.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={brand.telegramUrl} external icon={<Send className="h-4 w-4" />}>
            Telegram: {brand.telegram}
          </ButtonLink>
          <ButtonLink href={`mailto:${brand.email}`} variant="secondary" icon={<Mail className="h-4 w-4" />}>
            {brand.email}
          </ButtonLink>
        </div>
        <p className="mt-7 text-sm text-steel">Coming Soon on MQL5 Market</p>
      </div>
    </section>
  );
}
