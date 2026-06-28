import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="group premium-card premium-glow premium-border rounded-xl bg-panel/72 p-6">
      <div className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white/[0.04] text-electric transition duration-300 group-hover:scale-110 group-hover:border-electric/40 group-hover:bg-electric/10 group-hover:shadow-lg group-hover:shadow-electric/10">
        {icon}
      </div>

      <h2 className="mt-5 text-base font-bold text-white transition duration-300 group-hover:text-electric">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-steel">
        {description}
      </p>
    </article>
  );
}