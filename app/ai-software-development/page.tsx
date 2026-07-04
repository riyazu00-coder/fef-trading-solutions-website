import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Code2,
  DatabaseZap,
  FileText,
  Gauge,
  Globe2,
  Headphones,
  LayoutDashboard,
  LineChart,
  Network,
  PanelsTopLeft,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "AI Software Development",
  description:
    "FEF Trading Solutions builds AI-backed websites, AI-supported software products, trading technology, automation tools, dashboards, customer portals, and market-focused digital platforms for professional business workflows.",
  alternates: {
    canonical: "https://www.feftradingsolutions.com/ai-software-development",
  },
  openGraph: {
    title: "AI Software Development | FEF Trading Solutions",
    description:
      "FEF Trading Solutions builds AI-backed websites, AI-supported software products, trading technology, automation tools, dashboards, customer portals, and market-focused digital platforms for professional business workflows.",
    url: "https://www.feftradingsolutions.com/ai-software-development",
    images: ["/images/ai-software-development-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Development | FEF Trading Solutions",
    description:
      "FEF Trading Solutions builds AI-backed websites, AI-supported software products, trading technology, automation tools, dashboards, customer portals, and market-focused digital platforms for professional business workflows.",
    images: ["/images/ai-software-development-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const heroSignals = [
  "AI-backed websites",
  "Trading technology",
  "Portals and dashboards",
];

const buildCards = [
  {
    title: "AI-backed websites",
    description:
      "Professional business websites enhanced with AI-supported content flows, lead capture, automation, smart customer journeys, service presentation, and scalable product positioning.",
    icon: <Globe2 className="h-5 w-5" />,
    accent: "emerald",
  },
  {
    title: "AI Software Development",
    description:
      "Custom digital products built around practical AI workflows, automation logic, data handling, user dashboards, and business-specific tools.",
    icon: <BrainCircuit className="h-5 w-5" />,
    accent: "electric",
  },
  {
    title: "Trading technology platforms",
    description:
      "Market-focused platforms, trading dashboards, MT5 product ecosystems, trading operations pages, and trader workflow systems.",
    icon: <LineChart className="h-5 w-5" />,
    accent: "cyan",
  },
  {
    title: "MT5 tools and automation",
    description:
      "MetaTrader 5 utilities, trade management tools, trade copier systems, risk workflow tools, and trading assistant concepts.",
    icon: <Gauge className="h-5 w-5" />,
    accent: "emerald",
  },
  {
    title: "Market dashboards",
    description:
      "Live market displays, watchlists, market pulse panels, trade opportunity dashboards, economic data sections, and future market hub tools.",
    icon: <ChartNoAxesCombined className="h-5 w-5" />,
    accent: "electric",
  },
  {
    title: "Customer portals",
    description:
      "Login-based platforms where users can access products, downloads, licenses, updates, documentation, support, and account-related information.",
    icon: <ShieldCheck className="h-5 w-5" />,
    accent: "cyan",
  },
  {
    title: "Business workflow systems",
    description:
      "Internal tools for operations, task tracking, customer management, reporting, document handling, and daily business automation.",
    icon: <Workflow className="h-5 w-5" />,
    accent: "emerald",
  },
  {
    title: "Admin panels and dashboards",
    description:
      "Secure backend dashboards for managing content, products, customers, inquiries, support requests, and business data.",
    icon: <LayoutDashboard className="h-5 w-5" />,
    accent: "electric",
  },
  {
    title: "AI assistants and automation tools",
    description:
      "AI-supported assistants for customer support, internal workflows, document guidance, product help, trading education, and business task automation.",
    icon: <Bot className="h-5 w-5" />,
    accent: "cyan",
  },
];

const websiteFeatures = [
  {
    title: "Premium business websites",
    description:
      "Professional websites designed for trust, clarity, conversion, and long-term brand growth.",
    icon: <PanelsTopLeft className="h-5 w-5" />,
  },
  {
    title: "AI-supported content structure",
    description:
      "Clear service pages, product pages, FAQs, support content, SEO-ready copy, and scalable information architecture.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Lead generation and inquiry flow",
    description:
      "Contact sections, WhatsApp/Telegram/email support actions, CTA flows, and customer inquiry paths.",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    title: "Automation-ready architecture",
    description:
      "Websites planned so they can later connect with dashboards, portals, CRMs, booking systems, product databases, and AI assistants.",
    icon: <Network className="h-5 w-5" />,
  },
  {
    title: "SEO and social preview foundation",
    description:
      "Metadata, Open Graph images, sitemap, robots, structured data, and search-friendly page planning.",
    icon: <SearchCheck className="h-5 w-5" />,
  },
  {
    title: "Future portal or dashboard upgrade path",
    description:
      "A website can later grow into a portal, SaaS dashboard, market hub, customer support center, or AI-powered product system.",
    icon: <Rocket className="h-5 w-5" />,
  },
];

const comparisonColumns = [
  {
    title: "Basic Website",
    points: ["Static pages", "Basic contact", "Limited future scaling"],
    tone: "steel",
  },
  {
    title: "FEF AI-Backed Website",
    points: [
      "Product-focused structure",
      "AI-supported content planning",
      "Support/contact flows",
      "SEO and social preview foundation",
      "Automation-ready architecture",
      "Future portal or dashboard path",
    ],
    tone: "emerald",
  },
];

const processSteps = [
  {
    title: "Idea",
    description: "Understand the business goal and product direction.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Strategy",
    description: "Define scope, user flow, services, and conversion path.",
    icon: <ClipboardList className="h-5 w-5" />,
  },
  {
    title: "UI/UX Design",
    description: "Create premium interface and user experience.",
    icon: <PanelsTopLeft className="h-5 w-5" />,
  },
  {
    title: "AI Content Planning",
    description:
      "Structure pages, FAQs, product information, support flows, and SEO-ready content.",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
  {
    title: "Development",
    description: "Build clean, scalable software or website foundations.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Testing",
    description: "Verify usability, responsiveness, performance, links, and workflows.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Launch",
    description: "Deploy the website or product and prepare it for users.",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: "Support",
    description:
      "Improve with updates, documentation, and future feature expansion.",
    icon: <Headphones className="h-5 w-5" />,
  },
];

const whyFefCards = [
  "AI-first planning",
  "Trading technology experience",
  "Product-focused development",
  "Premium interface design",
  "Automation mindset",
  "SEO and structured data awareness",
  "Documentation and support",
  "Long-term software ecosystem thinking",
];

const industries = [
  { title: "Trading and finance", icon: <CircleDollarSign className="h-5 w-5" /> },
  { title: "Business operations", icon: <BriefcaseBusiness className="h-5 w-5" /> },
  { title: "Logistics and transport", icon: <Network className="h-5 w-5" /> },
  { title: "Real estate and property", icon: <Building2 className="h-5 w-5" /> },
  { title: "Service companies", icon: <Headphones className="h-5 w-5" /> },
  { title: "Startup product ideas", icon: <Rocket className="h-5 w-5" /> },
  { title: "Professional service brands", icon: <BadgeCheck className="h-5 w-5" /> },
  { title: "Software product founders", icon: <Code2 className="h-5 w-5" /> },
];

const ecosystemItems = [
  "FEF Market Hub",
  "Customer Portal",
  "AI-assisted tools",
  "Trading calculators",
  "Documentation systems",
  "AI-backed business websites",
  "Automation dashboards",
];

function getAccentClass(accent: string) {
  if (accent === "emerald") {
    return "border-emerald/25 bg-emerald/10 text-emerald";
  }

  if (accent === "cyan") {
    return "border-cyan/25 bg-cyan/10 text-cyan";
  }

  return "border-electric/25 bg-electric/10 text-electric";
}

export default function AiSoftwareDevelopmentPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald shadow-emerald">
              <Bot className="h-4 w-4" />
              AI Software Development
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Turn your idea into a professional{" "}
              <span className="text-gradient">AI-backed software product</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              FEF Trading Solutions helps founders, traders, and businesses
              transform ideas into AI-backed websites, automation systems,
              trading tools, dashboards, customer portals, and professional
              digital products.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" icon={<ArrowRight className="h-4 w-4" />}>
                Start a software project
              </ButtonLink>
              <ButtonLink
                href="/products"
                variant="secondary"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View our products
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-xl border border-line bg-panel/70 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {signal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="premium-card overflow-hidden rounded-[2rem] border border-electric/25 bg-panel/80 p-2 shadow-[0_30px_110px_rgba(0,0,0,0.46)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald shadow-emerald" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-electric/80" />
                </div>
                <p className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-steel sm:block">
                  Product System
                </p>
              </div>

              <div className="grid gap-2 rounded-[1.5rem] border border-white/[0.08] bg-ink p-2 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-72 overflow-hidden rounded-2xl border border-line bg-panel">
                  <Image
                    src="/images/ai-software-development-hero.png"
                    alt="AI software development services by FEF Trading Solutions"
                    width={1536}
                    height={864}
                    priority
                    className="h-full min-h-72 w-full object-cover object-left"
                  />
                </div>

                <div className="grid gap-2">
                  {[
                    {
                      label: "AI Content Flow",
                      value: "Structured",
                      icon: <BrainCircuit className="h-4 w-4" />,
                    },
                    {
                      label: "Automation Layer",
                      value: "Ready",
                      icon: <DatabaseZap className="h-4 w-4" />,
                    },
                    {
                      label: "Customer Portal",
                      value: "Planned",
                      icon: <ShieldCheck className="h-4 w-4" />,
                    },
                    {
                      label: "Market Tools",
                      value: "Connected",
                      icon: <LineChart className="h-4 w-4" />,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-line bg-white/[0.035] p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="grid h-9 w-9 place-items-center rounded-lg border border-electric/25 bg-electric/10 text-electric">
                            {item.icon}
                          </span>
                          <p className="text-sm font-bold text-white">
                            {item.label}
                          </p>
                        </div>
                        <span className="rounded-full border border-emerald/25 bg-emerald/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            What we build
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Software surfaces for business, trading, automation, and customer
            experience
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {buildCards.map((item) => (
            <article
              key={item.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl border ${getAccentClass(
                  item.accent,
                )}`}
              >
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.96),rgba(11,18,32,0.94))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-electric">
                <Globe2 className="h-4 w-4" />
                AI-backed websites
              </div>
              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                AI-Backed Websites for Modern Businesses
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                A website should not only look good. It should explain the
                business, guide visitors, capture inquiries, support customers,
                and connect with future software workflows. FEF builds websites
                with product thinking, AI-supported content structure,
                automation-ready architecture, and premium user experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {websiteFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="premium-card rounded-2xl border border-line bg-panel/75 p-5"
                >
                  <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-base font-black text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            {comparisonColumns.map((column) => (
              <article
                key={column.title}
                className={`rounded-2xl border p-6 ${
                  column.tone === "emerald"
                    ? "border-emerald/25 bg-emerald/[0.06]"
                    : "border-line bg-ink/60"
                }`}
              >
                <h3 className="text-xl font-black text-white">{column.title}</h3>
                <div className="mt-5 grid gap-3">
                  {column.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          column.tone === "emerald"
                            ? "text-emerald"
                            : "text-steel"
                        }`}
                      />
                      <p className="text-sm font-semibold leading-6 text-white">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Our process
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Idea to launch, with product thinking at each step
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Idea to Strategy to UI/UX Design to AI Content Planning to
            Development to Testing to Launch to Support.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-electric/25 bg-electric/10 text-electric">
                  {step.icon}
                </span>
                <span className="font-mono text-sm font-black text-steel">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Why FEF
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Built with software ecosystem thinking, not one-off page assembly
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              FEF connects product strategy, trading technology experience,
              premium interface design, automation planning, documentation, and
              long-term support into a practical build process.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyFefCards.map((item) => (
              <div
                key={item}
                className="premium-card rounded-2xl border border-line bg-panel/75 p-5"
              >
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <p className="text-sm font-bold leading-6 text-white">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Industries we support
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            AI-backed products for practical business categories
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="premium-card rounded-2xl border border-line bg-panel/75 p-5"
            >
              <div className="rounded-xl border border-cyan/25 bg-cyan/10 p-3 text-cyan">
                {industry.icon}
              </div>
              <h3 className="mt-5 text-base font-black text-white">
                {industry.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(11,18,32,0.92),rgba(5,7,13,0.96))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.38)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                <Store className="h-4 w-4" />
                FEF ecosystem
              </div>
              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                Connected to the wider FEF software roadmap
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                FEF is building a software ecosystem around trading operations,
                AI-backed websites, market tools, automation systems, product
                documentation, customer support, and future customer portals.
              </p>
              <p className="mt-4 text-sm leading-7 text-steel">
                Planned future direction is intentionally presented without
                promised launch dates.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {ecosystemItems.map((item) => (
                <div
                  key={item}
                  className="premium-card rounded-2xl border border-line bg-panel/75 p-4"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald" />
                    <p className="text-sm font-bold text-white">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <FileText className="h-4 w-4" />
            Software project inquiry
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Ready to build your{" "}
            <span className="text-gradient">
              AI-backed website or software idea?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Share your idea with FEF Trading Solutions and explore how it can
            become a professional website, automation system, dashboard, portal,
            or complete digital product.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" icon={<ArrowRight className="h-4 w-4" />}>
              Contact FEF
            </ButtonLink>
            <ButtonLink
              href="/documentation"
              variant="secondary"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View Documentation
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
