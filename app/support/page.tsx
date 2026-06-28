import type { Metadata } from "next";
import {
  LifeBuoy,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  TimerReset,
  MapPin,
  Clock3,
  Phone,
  Settings,
  KeyRound,
  Server,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact FEF Trading Solutions for product purchase, installation, setup, licensing and technical support.",
};

const supportItems = [
  {
    title: "Product Installation",
    description: "Help with installing FEF software on MetaTrader 5.",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "License Activation",
    description: "Support for license setup, activation and product access.",
    icon: <KeyRound className="h-5 w-5" />,
  },
  {
    title: "MT5 Configuration",
    description: "Guidance for terminals, brokers, symbols and copier setup.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "VPS Setup",
    description: "Assistance for running FEF products on VPS environments.",
    icon: <Server className="h-5 w-5" />,
  },
  {
    title: "Product Updates",
    description: "Questions about new versions, changes and roadmap status.",
    icon: <TimerReset className="h-5 w-5" />,
  },
  {
    title: "Direct Support",
    description: "Reach FEF through Telegram, WhatsApp and professional email.",
    icon: <LifeBuoy className="h-5 w-5" />,
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Support Center"
          title="24 hour support for"
          gradient="FEF customers"
          description="Get help with purchase questions, installation, license activation, MT5 setup, VPS configuration and product updates."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {supportItems.map((item) => (
            <article
              key={item.title}
              className="premium-border rounded-2xl bg-panel/76 p-6"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan/10 text-electric ring-1 ring-cyan/15">
                {item.icon}
              </span>
              <h2 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-steel">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel/76 p-8">
            <MessageCircle className="h-8 w-8 text-electric" />
            <h2 className="mt-6 text-3xl font-black text-white">
              Telegram Support
            </h2>
            <p className="mt-4 text-steel">
              Fast support channel for product questions, purchase requests and
              setup assistance.
            </p>
            <ButtonLink
              href={brand.telegramUrl}
              external
              className="mt-7"
              icon={<Send className="h-4 w-4" />}
            >
              {brand.telegram}
            </ButtonLink>
          </div>

          <div className="rounded-2xl border border-line bg-panel/76 p-8">
            <Phone className="h-8 w-8 text-electric" />
            <h2 className="mt-6 text-3xl font-black text-white">
              WhatsApp Help Center
            </h2>
            <p className="mt-4 text-steel">
              24 hour customer assistance for installation, activation and
              urgent product support.
            </p>
            <ButtonLink
              href={`https://wa.me/${brand.whatsapp.replace("+", "")}`}
              external
              className="mt-7"
            >
              {brand.whatsapp}
            </ButtonLink>
          </div>

          <div className="rounded-2xl border border-line bg-panel/76 p-8">
            <Mail className="h-8 w-8 text-electric" />
            <h2 className="mt-6 text-3xl font-black text-white">
              Sales Email
            </h2>
            <p className="mt-4 text-steel">
              Send product requests, license questions, payment details and
              business inquiries.
            </p>
            <ButtonLink
              href={`mailto:${brand.email}`}
              variant="secondary"
              className="mt-7"
              icon={<Mail className="h-4 w-4" />}
            >
              {brand.email}
            </ButtonLink>
          </div>

          <div className="rounded-2xl border border-line bg-panel/76 p-8">
            <Clock3 className="h-8 w-8 text-electric" />
            <h2 className="mt-6 text-3xl font-black text-white">
              Business Office Hours
            </h2>
            <p className="mt-4 text-steel">
              Customer support is available 24 hours. Office hours for business
              communication:
            </p>
            <p className="mt-5 text-lg font-bold text-white">
              {brand.workingHours}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-line bg-panel/76 p-8">
          <MapPin className="h-8 w-8 text-electric" />
          <h2 className="mt-6 text-3xl font-black text-white">
            UAE Office Address
          </h2>
          <p className="mt-4 max-w-3xl text-steel">{brand.address}</p>
        </div>
      </section>

      <RiskWarning />
    </>
  );
}