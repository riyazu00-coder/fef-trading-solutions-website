import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  ExternalLink,
  LifeBuoy,
  Mail,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing and license options for FEF Trading Solutions MetaTrader 5 software.",
};

const plans = [
  {
    name: "FEF Professional Trade Copier MT5",
    label: "Available on MQL5",
    price: "Buy on MQL5",
    description:
      "Professional Master/Slave trade copying for MetaTrader 5 operators.",
    cta: "Buy on MQL5",
    href: brand.mql5Url,
    external: true,
    features: [
      "Master/Slave copying",
      "Multi-account workflow",
      "Symbol detection",
      "Retry handling",
      "Heartbeat monitoring",
      "Event log visibility",
      "Professional dashboard",
    ],
  },
  {
    name: "FEF Manual Trade Manager PRO MT5",
    label: "Trade Manager",
    price: "Contact Sales",
    description: "Manual trade management suite for serious MT5 traders.",
    cta: "Contact Sales",
    href: "/contact",
    external: false,
    features: [
      "Auto SL/TP",
      "Break-even",
      "Trailing stop",
      "Partial close",
      "ATR stop option",
      "Session boxes",
      "ORB, FVG, BOS/CHoCH tools",
      "DXY dashboard",
    ],
  },
  {
    name: "FEF Professional Bundle",
    label: "Best Value",
    price: "Contact Sales",
    description:
      "Bundle access for traders who want both available FEF products.",
    cta: "Contact Sales",
    href: "/contact",
    external: false,
    features: [
      "Trade Copier MT5",
      "Manual Trade Manager PRO MT5",
      "Priority setup guidance",
      "Documentation access",
      "Update support",
      "Direct WhatsApp and Telegram support",
    ],
  },
];

const trustItems = [
  {
    title: "Official MQL5 Market Release",
    description:
      "FEF Professional Trade Copier MT5 is available through the official MQL5 Market.",
    icon: PackageCheck,
  },
  {
    title: "Secure Digital Delivery",
    description:
      "Customers can purchase and access the Trade Copier through the MQL5 ecosystem.",
    icon: ShieldCheck,
  },
  {
    title: "Direct Support",
    description: "Support through email, Telegram and WhatsApp help center.",
    icon: LifeBuoy,
  },
  {
    title: "UAE Based Business",
    description: "FEF Trading Solutions operates with UAE contact details.",
    icon: Building2,
  },
];

const faqs = [
  {
    question: "Where can I buy FEF Professional Trade Copier MT5?",
    answer:
      "FEF Professional Trade Copier MT5 is available on the official MQL5 Market. Use the Buy on MQL5 button to open the product page.",
  },
  {
    question: "Is this a subscription?",
    answer:
      "License and rental options are managed through the MQL5 Market product page.",
  },
  {
    question: "Can I use it on any MT5 broker?",
    answer:
      "FEF products are designed for MetaTrader 5 environments. Broker behavior, symbols and account setup may vary, so testing is always recommended.",
  },
  {
    question: "Do you provide installation help?",
    answer:
      "Yes. Support is available through email, Telegram and WhatsApp for installation, activation and setup guidance.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Professional MT5"
          gradient="license options"
          description="Choose the FEF Trading Solutions product or bundle that fits your trading operation."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/76 p-8"
            >
              <span className="inline-flex rounded-full border border-emerald/25 bg-emerald/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                {plan.label}
              </span>

              <h2 className="mt-6 text-2xl font-black text-white">
                {plan.name}
              </h2>

              <p className="mt-4 text-steel">{plan.description}</p>

              <p className="mt-8 text-4xl font-black text-white">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-3 text-sm text-steel">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={plan.href}
                external={plan.external}
                className="mt-8"
                icon={
                  plan.external ? (
                    <ExternalLink className="h-4 w-4" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )
                }
              >
                {plan.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Buy From FEF"
          title="Built for trust,"
          gradient="not hype"
          description="Clear licensing, direct support and secure delivery for professional MetaTrader 5 users."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="premium-card premium-glow rounded-2xl border border-line bg-panel/76 p-7"
              >
                <Icon className="h-8 w-8 text-electric" />
                <h2 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-steel">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-panel/76 p-8">
          <Sparkles className="h-8 w-8 text-electric" />
          <h2 className="mt-6 text-3xl font-black text-white">
            Need a custom setup or business license?
          </h2>
          <p className="mt-4 max-w-3xl text-steel">
            Contact FEF Trading Solutions for custom MT5 copier setups,
            professional account workflows, business usage and bundle pricing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={brand.mql5Url}
              external
              icon={<ExternalLink className="h-4 w-4" />}
            >
              Buy Trade Copier on MQL5
            </ButtonLink>

            <ButtonLink href="/contact" variant="secondary" icon={<Mail className="h-4 w-4" />}>
              Contact Sales
            </ButtonLink>

            <ButtonLink href={brand.telegramUrl} external variant="secondary">
              Telegram Support
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Pricing"
          gradient="questions"
          description="Quick answers before you contact sales."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/76 p-7"
            >
              <h2 className="text-xl font-bold text-white">{faq.question}</h2>
              <p className="mt-3 text-sm leading-6 text-steel">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <RiskWarning />
    </>
  );
}