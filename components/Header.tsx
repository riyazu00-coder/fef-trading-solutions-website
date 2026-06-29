"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { brand } from "@/lib/site-data";

const groups = [
  {
    label: "Products",
    items: [
      { label: "Trade Copier MT5", href: "/trade-copier" },
      { label: "Products", href: "/products" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Downloads", href: "/downloads" },
      { label: "Documentation", href: "/documentation" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    label: "Support",
    items: [
      { label: "Support Center", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-ink/82 backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-2 lg:flex"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`focus-ring rounded-md px-3 py-2 text-sm transition ${
              pathname === "/"
                ? "bg-electric/12 text-white"
                : "text-steel hover:text-white"
            }`}
          >
            Home
          </Link>

          {groups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-steel transition hover:text-white"
              >
                {group.label}
                <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </button>

              <div className="invisible absolute left-0 top-full w-64 translate-y-3 rounded-2xl border border-line bg-ink/95 p-2 opacity-0 shadow-2xl shadow-black/30 backdrop-blur-xl transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                {group.items.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-xl px-4 py-3 text-sm transition ${
                        active
                          ? "bg-electric/12 text-white"
                          : "text-steel hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={brand.mql5Url} external>
            Buy on MQL5
          </ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.04] text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.08] bg-ink px-5 py-4 lg:hidden">
          <nav
            className="mx-auto grid max-w-7xl gap-2"
            aria-label="Mobile navigation"
          >
            <Link
              href="/"
              className="focus-ring rounded-lg border border-line bg-panel px-4 py-3 text-sm font-medium text-steel"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            {groups.flatMap((group) =>
              group.items.map((item) => (
                <Link
                  key={`${group.label}-${item.href}`}
                  href={item.href}
                  className="focus-ring rounded-lg border border-line bg-panel px-4 py-3 text-sm font-medium text-steel"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )),
            )}

            <ButtonLink
              href={brand.mql5Url}
              external
              className="mt-2"
              icon={null}
            >
              Buy on MQL5
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}