import { Mail, Send } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { brand, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-steel">{brand.tagline}</p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-steel">Navigate</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-steel transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-steel">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-steel">
            <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail className="h-4 w-4 text-electric" />
              {brand.email}
            </a>
            <a href={brand.telegramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
              <Send className="h-4 w-4 text-electric" />
              {brand.telegram}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/[0.08] px-5 py-6 text-xs text-steel sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; 2026 FEF Trading Solutions. All Rights Reserved.</p>
        <p>{brand.domain}</p>
      </div>
    </footer>
  );
}
