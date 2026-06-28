import type { Metadata } from "next";
import { BadgeCheck, Clock, FileText, ShieldCheck } from "lucide-react";
import { RiskWarning } from "@/components/RiskWarning";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Version history and release notes for FEF Trading Solutions software.",
};

const releases = [
  {
    product: "FEF Professional Trade Copier MT5",
    version: "v1.0",
    status: "Released",
    date: "Initial Release",
    items: [
      "Professional Master/Slave trade copying for MetaTrader 5.",
      "Multi-account copying workflow.",
      "Symbol detection and broker compatibility foundation.",
      "Dashboard, heartbeat monitoring and event visibility.",
    ],
  },
  {
    product: "FEF Manual Trade Manager PRO MT5",
    version: "v1.2",
    status: "Released",
    date: "Initial Release",
    items: [
      "Manual trade management with auto SL/TP.",
      "Break-even, trailing stop and partial close support.",
      "Session boxes, ORB, FVG, BOS/CHoCH and liquidity sweep tools.",
      "DXY dashboard and professional visual control panel.",
    ],
  },
  {
    product: "FEF Smart Trader MT5",
    version: "Planning",
    status: "Coming Soon",
    date: "Roadmap",
    items: [
      "Automated strategy engine under planning.",
      "Trend, structure and risk-based execution concepts.",
      "No profit guarantees, built as professional trading software.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Release Notes"
          title="FEF software"
          gradient="changelog"
          description="Track product releases, updates, improvements and upcoming development work."
        />

        <div className="mt-14 space-y-6">
          {releases.map((release) => (
            <article
              key={`${release.product}-${release.version}`}
              className="rounded-2xl border border-line bg-panel/76 p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-electric">
                    {release.product}
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-white">
                    {release.version}
                  </h2>
                </div>

                <span
                  className={`rounded-full px-4 py-1 text-xs font-bold ${
                    release.status === "Released"
                      ? "bg-emerald/10 text-emerald"
                      : "bg-white/5 text-steel"
                  }`}
                >
                  {release.status}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-steel">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-electric" />
                  {release.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4 text-electric" />
                  Release notes
                </span>
              </div>

              <ul className="mt-6 grid gap-3 text-sm text-steel md:grid-cols-2">
                {release.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-panel/76 p-8">
          <ShieldCheck className="h-8 w-8 text-electric" />
          <h2 className="mt-6 text-2xl font-black text-white">
            Update Policy
          </h2>
          <p className="mt-4 max-w-3xl text-steel">
            FEF Trading Solutions publishes updates to improve stability,
            usability and product capabilities. Customers should always test new
            versions on demo accounts before using them on live accounts.
          </p>
        </div>
      </section>

      <RiskWarning />
    </>
  );
}