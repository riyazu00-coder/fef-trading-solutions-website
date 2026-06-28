import {
  ArrowRight,
  BadgeCheck,
  Brain,
  ClipboardList,
  Gauge,
  Radar,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

const icons: ComponentType<{ className?: string }>[] = [
  BadgeCheck,
  Brain,
  ClipboardList,
  ShieldCheck,
  Radar,
];

type ProductCardProps = {
  name: string;
  status: string;
  description: string;
  index: number;
  href?: string;
};

export function ProductCard({
  name,
  status,
  description,
  index,
  href = "/products",
}: ProductCardProps) {
  const Icon = icons[index % icons.length] ?? Gauge;
  const available = status === "Available Now";
  const productHref = available ? "/trade-copier" : href;

  return (
    <Link
      href={productHref}
      className="group premium-card premium-glow premium-border block rounded-xl bg-panel/80 p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan/10 text-electric ring-1 ring-cyan/15 transition duration-300 group-hover:scale-110 group-hover:bg-electric/10 group-hover:shadow-lg group-hover:shadow-electric/10">
          <Icon className="h-5 w-5" />
        </span>

        <span
          className={`rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.13em] transition ${
            available
              ? "border-emerald/35 bg-emerald/10 text-emerald group-hover:border-emerald/60"
              : "border-line bg-white/[0.04] text-steel group-hover:border-electric/40"
          }`}
        >
          {status}
        </span>
      </div>

      <h2 className="mt-7 text-xl font-bold text-white transition duration-300 group-hover:text-electric">
        {name}
      </h2>

      <p className="mt-3 text-sm leading-6 text-steel">{description}</p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        View Details
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}