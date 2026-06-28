import type { Metadata } from "next";
import { Download, FileText, ShieldCheck, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download center for FEF Trading Solutions MT5 software.",
};

const downloads = [
  {
    name: "FEF Professional Trade Copier MT5",
    version: "v1.0",
    status: "Available",
    platform: "MetaTrader 5 / Windows",
  },
  {
    name: "FEF Manual Trade Manager PRO MT5",
    version: "v1.2",
    status: "Available",
    platform: "MetaTrader 5 / Windows",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Download Center"
          title="FEF software"
          gradient="downloads"
          description="Access the latest FEF Trading Solutions software, manuals and installation resources."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {downloads.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-line bg-panel/76 p-8"
            >
              <Download className="h-8 w-8 text-electric" />
              <h2 className="mt-6 text-2xl font-black text-white">
                {item.name}
              </h2>
              <p className="mt-3 text-steel">{item.platform}</p>
              <div className="mt-6 flex gap-3 text-sm">
                <span className="rounded-full bg-emerald/10 px-4 py-1 font-bold text-emerald">
                  {item.status}
                </span>
                <span className="rounded-full bg-white/[0.04] px-4 py-1 font-bold text-steel">
                  {item.version}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/support" icon={<Mail className="h-4 w-4" />}>
                  Request Download
                </ButtonLink>
                <ButtonLink href="/documentation" variant="secondary" icon={<FileText className="h-4 w-4" />}>
                  Installation Guide
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-panel/76 p-8">
          <ShieldCheck className="h-8 w-8 text-electric" />
          <h2 className="mt-6 text-2xl font-black text-white">
            Secure Digital Delivery
          </h2>
          <p className="mt-4 max-w-3xl text-steel">
            Downloads are provided after purchase confirmation or direct approval from FEF Trading Solutions. For access, contact {brand.email}, Telegram {brand.telegram}, or WhatsApp {brand.whatsapp}.
          </p>
        </div>
      </section>

      <RiskWarning />
    </>
  );
}