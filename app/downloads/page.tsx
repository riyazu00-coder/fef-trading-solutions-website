import type { Metadata } from "next";
import {
  Download,
  ExternalLink,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";
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
    status: "Officially Released",
    platform: "MetaTrader 5 / Windows",
    available: true,
  },
  {
    name: "FEF Manual Trade Manager PRO MT5",
    version: "v1.2",
    status: "Coming Soon",
    platform: "MetaTrader 5 / Windows",
    available: false,
  },
];

export default function DownloadsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Download Center"
          title="FEF Software"
          gradient="Downloads"
          description="Access official FEF Trading Solutions software, installation guides and documentation."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {downloads.map((item) => (
            <article
              key={item.name}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/76 p-8"
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
                {item.available ? (
                  <ButtonLink
                    href={brand.mql5Url}
                    external
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Download from MQL5
                  </ButtonLink>
                ) : (
                  <ButtonLink
                    href="/contact"
                    icon={<Mail className="h-4 w-4" />}
                  >
                    Contact Sales
                  </ButtonLink>
                )}

                <ButtonLink
                  href="/documentation"
                  variant="secondary"
                  icon={<FileText className="h-4 w-4" />}
                >
                  Installation Guide
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-panel/76 p-8">
          <ShieldCheck className="h-8 w-8 text-electric" />

          <h2 className="mt-6 text-2xl font-black text-white">
            Official MQL5 Distribution
          </h2>

          <p className="mt-4 max-w-3xl text-steel">
            FEF Professional Trade Copier MT5 is officially available through
            the MQL5 Market. All future updates, licensing and downloads are
            managed securely through the MQL5 platform. For technical support,
            contact us via email, Telegram or WhatsApp.
          </p>
        </div>
      </section>

      <RiskWarning />
    </>
  );
}