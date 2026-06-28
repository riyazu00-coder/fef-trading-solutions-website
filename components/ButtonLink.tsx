import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", icon, external, className = "" }: ButtonLinkProps) {
  const base =
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition";
  const styles = {
    primary: "bg-brand-gradient text-ink shadow-glow hover:brightness-110",
    secondary: "border border-line bg-white/[0.04] text-white hover:border-electric/70 hover:bg-electric/10",
    ghost: "text-steel hover:text-white"
  };

  const content = (
    <>
      <span>{children}</span>
      {icon ?? (variant === "ghost" ? <ArrowRight className="h-4 w-4" /> : null)}
    </>
  );

  if (external) {
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {content}
    </Link>
  );
}
