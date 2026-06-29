import type { Metadata } from "next";
import {
  BadgeCheck,
  BookOpen,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  Headphones,
  Layers3,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Store,
  Wrench,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FEF Trading Solutions for MT5 software inquiries, product setup guidance, MQL5 purchase help, documentation and support resources.",
};

const heroStatusCards = [
  "Product Questions",
  "Setup Guidance",
  "MQL5 Market Help",
];

const contactPurposeCards = [
  {
    title: "Product Inquiry",
    description:
      "Questions about FEF Professional Trade Copier MT5, Manual Trade Manager Pro MT5 and the wider software ecosystem.",
    href: "/products",
    label: "View Products",
    icon: <Boxes className="h-5 w-5" />,
  },
  {
    title: "Setup Support",
    description:
      "Prepare product details, screenshots and terminal messages before requesting setup assistance.",
    href: "/support",
    label: "Support Center",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    title: "MQL5 Purchase Question",
    description:
      "Use official MQL5 Market product pages for purchase, install and update paths.",
    href: "/pricing",
    label: "Purchase Paths",
    icon: <Store className="h-5 w-5" />,
  },
  {
    title: "Documentation Help",
    description:
      "Review configuration, testing and safe operation guidance before live deployment.",
    href: "/documentation",
    label: "Documentation",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Downloads / Release Notes",
    description:
      "Find official product access paths, delivery notes and release-channel guidance.",
    href: "/downloads",
    label: "Downloads",
    icon: <Download className="h-5 w-5" />,
  },
  {
    title: "Business / Partnership Inquiry",
    description:
      "Contact FEF through official channels for business discussions and software ecosystem questions.",
    href: "/contact",
    label: "Contact Details",
    icon: <MessageCircle className="h-5 w-5" />,
  },
];

const productContactPaths = [
  {
    name: "FEF Professional Trade Copier MT5",
    focus:
      "Master/slave setup, synchronization workflow, symbol mapping, MQL5 installation and documentation.",
    href: "/trade-copier",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    name: "FEF Manual Trade Manager Pro MT5",
    focus:
      "Manual trade management setup, SL/TP, breakeven, trailing stop, partial close, visual tools and MQL5 installation.",
    href: "/manual-trade-manager",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
];

const contactChecklist = [
  "Product name",
  "MQL5 purchase/install status",
  "MetaTrader 5 version",
  "Broker name and account type",
  "Symbol name including suffix/prefix",
  "Screenshot of settings",
  "Screenshot of dashboard or error",
  "Journal/Experts tab message if available",
  "Clear description of what happened and what was expected",
];

const contactChannels = [
  {
    title: "Official Contact Channels",
    description:
      "Use the existing FEF email, Telegram and WhatsApp channels listed on this website.",
    detail: brand.email,
    href: `mailto:${brand.email}`,
    icon: <Mail className="h-5 w-5" />,
    external: false,
  },
  {
    title: "Product Setup Details",
    description:
      "Include the product name, MT5 version, broker, symbol, settings screenshots and exact issue details.",
    detail: "Prepare setup context",
    href: "/support",
    icon: <Wrench className="h-5 w-5" />,
    external: false,
  },
  {
    title: "Documentation First",
    description:
      "Review the documentation before requesting help so the product workflow and settings are clear.",
    detail: "Open documentation",
    href: "/documentation",
    icon: <BookOpen className="h-5 w-5" />,
    external: false,
  },
  {
    title: "Screenshots & Logs",
    description:
      "Screenshots, dashboard messages and Journal/Experts tab text help support understand the issue accurately.",
    detail: "Attach clear evidence",
    href: "/support",
    icon: <FileText className="h-5 w-5" />,
    external: false,
  },
];

const quickLinks = [
  {
    title: "Support",
    href: "/support",
    description: "Troubleshooting paths and support preparation guidance.",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    title: "Documentation",
    href: "/documentation",
    description: "Setup, configuration and safe operation guidance.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Downloads",
    href: "/downloads",
    description: "Official product access and delivery information.",
    icon: <Download className="h-5 w-5" />,
  },
  {
    title: "Changelog",
    href: "/changelog",
    description: "Release notes and update-channel guidance.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Products",
    href: "/products",
    description: "Explore the FEF MT5 software ecosystem.",
    icon: <Boxes className="h-5 w-5" />,
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Official MQL5 Market purchase paths.",
    icon: <Store className="h-5 w-5" />,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald shadow-emerald">
              <span className="h-2 w-2 rounded-full bg-emerald shadow-emerald" />
              Contact FEF Trading Solutions
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Get in touch about{" "}
              <span className="text-gradient">FEF MT5 software</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              A professional inquiry page for product questions, setup guidance,
              MQL5 purchase support, documentation, downloads and ecosystem
              information.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/support">Support Center</ButtonLink>
              <ButtonLink href="/documentation" variant="secondary">
                View Documentation
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStatusCards.map((item) => (
              <div
                key={item}
                className="premium-card rounded-2xl border border-line bg-panel/70 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Contact purpose
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Start with the right inquiry path
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            The most useful contact requests include the product, installation
            context, broker environment and exact issue details.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactPurposeCards.map((item) => (
            <article
              key={item.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {item.description}
              </p>
              <ButtonLink href={item.href} variant="ghost" className="mt-5 px-0">
                {item.label}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {productContactPaths.map((product) => (
            <article
              key={product.name}
              className="premium-card premium-glow relative overflow-hidden rounded-[2rem] border border-line bg-panel/80 p-6 sm:p-8"
            >
              <div className="site-grid absolute inset-0 opacity-15" aria-hidden="true" />
              <div
                className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-electric/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-emerald/25 bg-emerald/10 text-emerald">
                    {product.icon}
                  </span>
                  <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-steel">
                    Product contact path
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-black text-white sm:text-3xl">
                  {product.name}
                </h2>
                <p className="mt-4 text-base leading-7 text-steel">
                  Focus: {product.focus}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink href={product.href}>View Product</ButtonLink>
                  <ButtonLink href="/documentation" variant="secondary">
                    Documentation
                  </ButtonLink>
                  <ButtonLink href="/support" variant="ghost">
                    Support
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Before you contact us
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Prepare the details that make product support clearer
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Detailed issue information helps support respond more accurately,
              especially for MT5 settings, broker symbols and product dashboard
              messages.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <p className="text-sm font-semibold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.96),rgba(11,18,32,0.94))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mb-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Contact channels
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Use official FEF contact details and include product context
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Detailed issue information helps support respond more accurately.
              Use the official channels already listed on this website.
            </p>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactChannels.map((channel) => (
              <article
                key={channel.title}
                className="premium-card rounded-2xl border border-line bg-panel/80 p-6"
              >
                <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                  {channel.icon}
                </div>
                <h3 className="mt-5 text-lg font-black text-white">
                  {channel.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-steel">
                  {channel.description}
                </p>
                <ButtonLink
                  href={channel.href}
                  external={channel.external}
                  variant="ghost"
                  className="mt-5 px-0"
                >
                  {channel.detail}
                </ButtonLink>
              </article>
            ))}
          </div>

          <div className="relative mt-8 grid gap-4 rounded-2xl border border-line bg-ink/60 p-5 sm:grid-cols-3">
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 text-sm font-bold text-white transition hover:text-electric"
            >
              <Mail className="h-5 w-5 text-emerald" />
              {brand.email}
            </a>
            <a
              href={brand.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-white transition hover:text-electric"
            >
              <MessageCircle className="h-5 w-5 text-emerald" />
              {brand.telegram}
            </a>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-white transition hover:text-electric"
            >
              <Phone className="h-5 w-5 text-emerald" />
              {brand.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Quick links
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Find the right resource before opening an inquiry
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <article
              key={link.href}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                {link.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {link.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {link.description}
              </p>
              <ButtonLink href={link.href} variant="ghost" className="mt-5 px-0">
                Open
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-500/25 bg-red-500/[0.04] p-5">
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <p className="text-sm leading-7 text-steel">
              <span className="font-bold text-red-200">Risk-aware note:</span>{" "}
              FEF software supports trading workflows but does not guarantee
              profit or remove market risk. Users should test on demo before
              live deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <BadgeCheck className="h-4 w-4" />
            FEF contact workflow
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Start with the right{" "}
            <span className="text-gradient">FEF resource</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Use the support center, documentation and product pages to prepare a
            clear software inquiry.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/support">Support Center</ButtonLink>
            <ButtonLink href="/documentation" variant="secondary">
              Documentation
            </ButtonLink>
            <ButtonLink href="/products" variant="ghost">
              Products
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
