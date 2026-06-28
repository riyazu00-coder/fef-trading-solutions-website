import { Activity } from "lucide-react";
import Link from "next/link";
import { brand } from "@/lib/site-data";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 focus-ring rounded-md" aria-label={`${brand.name} home`}>
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-ink shadow-glow">
        <Activity className="h-5 w-5" strokeWidth={2.6} />
      </span>
      <span className="leading-none">
        <span className="block text-base font-bold tracking-normal text-white">
          FEF <span className="text-cyan">Trading</span>
        </span>
        <span className="mt-1 block text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-steel">Solutions</span>
      </span>
    </Link>
  );
}
