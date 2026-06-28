import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="premium-border rounded-xl bg-panel/72 p-6">
      <div className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white/[0.04] text-electric">{icon}</div>
      <h2 className="mt-5 text-base font-bold text-white">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-steel">{description}</p>
    </article>
  );
}
