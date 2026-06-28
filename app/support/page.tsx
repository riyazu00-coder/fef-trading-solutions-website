import type { Metadata } from "next";
import { LifeBuoy, Mail, MessageCircle, Send, ShieldCheck, TimerReset } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact FEF Trading Solutions for purchase, setup and product support."
};

const supportItems = [
  {
    title: "Direct Product Support",
    description: "Reach FEF for purchase, setup and product questions.",
    icon: <LifeBuoy className="h-5 w-5" />
  },
  {
    title: "Setup Guidance",
    description: "Get help with master/slave configuration and broker symbol mapping.",
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: "Update Questions",
    description: "Ask about current builds, changes and product roadmap status.",
    icon: <TimerReset className="h-5 w-5" />
  }
];

export default function SupportPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Support"
          title="Direct help for"
          gradient="FEF operators"
          description="Use Telegram or email for product information, purchase questions and setup support."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {supportItems.map((item) => (
            <article key={item.title} className="premium-border rounded-xl bg-panel/76 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan/10 text-electric ring-1 ring-cyan/15">
                {item.icon}
              </span>
              <h2 className="mt-6 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-steel">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel/76 p-8">
            <MessageCircle className="h-8 w-8 text-electric" />
            <h2 className="mt-6 text-3xl font-black text-white">Telegram Support</h2>
            <p className="mt-4 text-steel">Fastest channel for product and purchase questions.</p>
            <ButtonLink href={brand.telegramUrl} external className="mt-7" icon={<Send className="h-4 w-4" />}>
              {brand.telegram}
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-line bg-panel/76 p-8">
            <Mail className="h-8 w-8 text-electric" />
            <h2 className="mt-6 text-3xl font-black text-white">Email Support</h2>
            <p className="mt-4 text-steel">Send product requests, license questions and support details.</p>
            <ButtonLink href={`mailto:${brand.email}`} variant="secondary" className="mt-7" icon={<Mail className="h-4 w-4" />}>
              {brand.email}
            </ButtonLink>
          </div>
        </div>
      </section>

      <RiskWarning />
    </>
  );
}
