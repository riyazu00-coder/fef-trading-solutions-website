import type { Metadata } from "next";
import { BookOpen, Download, ExternalLink, HelpCircle, History, LifeBuoy, Settings, Video } from "lucide-react";
import { RiskWarning } from "@/components/RiskWarning";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Documentation",
  description: "FEF Trading Solutions documentation resources for installation, setup, support and release notes."
};

const docs = [
  {
    title: "Quick Start Guide",
    description: "Set up master and slave EAs in minutes.",
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    title: "Installation Guide",
    description: "Step-by-step MT5 installation and configuration.",
    icon: <Download className="h-5 w-5" />
  },
  {
    title: "Video Tutorials",
    description: "Guided walkthroughs for installation, accounts and operating workflows.",
    icon: <Video className="h-5 w-5" />
  },
  {
    title: "Frequently Asked Questions",
    description: "Common questions about copying, brokers and licensing.",
    icon: <HelpCircle className="h-5 w-5" />
  },
  {
    title: "Version History",
    description: "Versioned release notes and changes.",
    icon: <History className="h-5 w-5" />
  },
  {
    title: "Support Center",
    description: "Direct support via Telegram and email.",
    icon: <LifeBuoy className="h-5 w-5" />
  }
];

export default function DocumentationPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Documentation & Support"
          title="Resources to get you"
          gradient="running fast"
          description="Installation, configuration and support resources for FEF Professional Trade Copier MT5."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {docs.map((doc) => (
            <article key={doc.title} className="premium-border rounded-xl bg-panel/76 p-6">
              <div className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyan/10 text-electric ring-1 ring-cyan/15">
                  {doc.icon}
                </span>
                <div>
                  <h2 className="inline-flex items-center gap-2 text-lg font-bold text-white">
                    {doc.title}
                    <ExternalLink className="h-4 w-4 text-steel" />
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-steel">{doc.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-panel/75 p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-electric/10 text-electric">
              <Settings className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-black text-white">Recommended setup flow</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Install copier files", "Attach master EA", "Attach slave EAs", "Run sync check"].map((item, index) => (
              <div key={item} className="rounded-xl border border-line bg-ink/55 p-5">
                <p className="font-mono text-sm text-electric">0{index + 1}</p>
                <h3 className="mt-4 font-bold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RiskWarning />
    </>
  );
}
