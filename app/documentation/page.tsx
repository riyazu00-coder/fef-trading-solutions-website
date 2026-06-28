import type { Metadata } from "next";
import {
  BookOpen,
  Download,
  KeyRound,
  Monitor,
  ShieldCheck,
  Server,
  HelpCircle,
  Video,
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { RiskWarning } from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Documentation, installation guides and support resources for FEF Trading Solutions software.",
};

const docs = [
  {
    title: "Installation Guide",
    description: "Step-by-step installation for all FEF MT5 software.",
    icon: Download,
    status: "Available",
  },
  {
    title: "License Activation",
    description: "Activate your purchased software license.",
    icon: KeyRound,
    status: "Available",
  },
  {
    title: "Trade Copier Manual",
    description: "Complete operating guide for Professional Trade Copier MT5.",
    icon: BookOpen,
    status: "Available",
  },
  {
    title: "Manual Trade Manager PRO",
    description: "Configuration and feature documentation.",
    icon: ShieldCheck,
    status: "Available",
  },
  {
    title: "Broker Compatibility",
    description: "Supported MT5 brokers and symbol mapping.",
    icon: Monitor,
    status: "Available",
  },
  {
    title: "VPS Setup Guide",
    description: "Recommended VPS configuration for 24/7 operation.",
    icon: Server,
    status: "Available",
  },
  {
    title: "Frequently Asked Questions",
    description: "Answers to the most common customer questions.",
    icon: HelpCircle,
    status: "Available",
  },
  {
    title: "Video Tutorials",
    description: "Coming soon.",
    icon: Video,
    status: "Coming Soon",
  },
];

export default function DocumentationPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Documentation Center"
          title="Everything you need"
          gradient="to get started"
          description="Professional documentation, setup instructions and operating manuals for every FEF Trading Solutions product."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {docs.map((doc) => {
            const Icon = doc.icon;

            return (
              <article
                key={doc.title}
                className="rounded-2xl border border-line bg-panel/75 p-7 transition hover:border-electric/40"
              >
                <Icon className="h-8 w-8 text-electric" />

                <h2 className="mt-6 text-xl font-bold text-white">
                  {doc.title}
                </h2>

                <p className="mt-3 text-sm text-steel">
                  {doc.description}
                </p>

                <span
                  className={`mt-6 inline-flex rounded-full px-4 py-1 text-xs font-bold ${
                    doc.status === "Available"
                      ? "bg-emerald/10 text-emerald"
                      : "bg-white/5 text-steel"
                  }`}
                >
                  {doc.status}
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <RiskWarning />
    </>
  );
}