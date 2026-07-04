import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Download,
  FileText,
  Gauge,
  Globe2,
  Headphones,
  Layers3,
  LineChart,
  Mail,
  MessageCircle,
  Phone,
  QrCode,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand } from "@/lib/site-data";

const ABOUT_URL = "https://www.feftradingsolutions.com/about-us";
const ABOUT_TITLE = "About FEF Trading Solutions";
const ABOUT_DESCRIPTION =
  "Learn about FEF Trading Solutions, an AI and trading technology software company building MetaTrader 5 tools, AI-backed websites, automation systems, dashboards, documentation resources, market tools, and professional digital products.";
const COMPANY_PROFILE_URL =
  "/downloads/fef-trading-solutions-company-profile.pdf";
const WEBSITE_URL = "https://www.feftradingsolutions.com";

export const metadata: Metadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  alternates: {
    canonical: ABOUT_URL,
  },
  openGraph: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    url: ABOUT_URL,
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: ABOUT_TITLE,
  url: ABOUT_URL,
  description: ABOUT_DESCRIPTION,
  mainEntity: {
    "@type": "Organization",
    name: "FEF Trading Solutions",
    url: WEBSITE_URL,
    logo: `${WEBSITE_URL}/images/fef-logo-ai.png`,
    description:
      "FEF Trading Solutions is an AI and trading technology software company building MetaTrader 5 tools, AI-backed websites, automation systems, dashboards, documentation resources, market tools, and professional digital products.",
  },
};

const overviewItems = [
  "Trading software",
  "AI software development",
  "AI-backed websites",
  "Business automation",
  "Market dashboards",
  "Customer portals",
  "Documentation and support systems",
  "Future software ecosystem",
];

const buildCards = [
  {
    title: "MetaTrader 5 Tools",
    description:
      "Trade copier systems, manual trade management tools, MT5 utilities, and future trading workflow products.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "AI Software Development",
    description:
      "Custom software products, dashboards, portals, automation systems, and workflow tools built around practical business needs.",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
  {
    title: "AI-backed Websites",
    description:
      "Premium websites planned with AI-supported content structure, lead capture, support/contact flows, SEO foundations, and future portal/dashboard expansion.",
    icon: <Globe2 className="h-5 w-5" />,
  },
  {
    title: "Market Tools",
    description:
      "Market Pulse, watchlist dashboards, trading calculators, economic tools, and future Market Hub features.",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    title: "Customer Systems",
    description:
      "Future customer portals for products, downloads, licenses, updates, documentation, and support workflows.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const currentProducts = [
  {
    title: "FEF Professional Trade Copier MT5",
    description:
      "MetaTrader 5 trade copier software for professional trade copying workflows.",
    href: "/trade-copier",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "FEF Manual Trade Manager Pro MT5",
    description:
      "Manual trade management software for SL/TP, break-even, trailing stop, partial close, and workflow-focused trade control.",
    href: "/manual-trade-manager",
    icon: <Gauge className="h-5 w-5" />,
  },
];

const ecosystemModules = [
  "Live Market Pulse",
  "Products",
  "Downloads",
  "Documentation",
  "Support",
  "Pricing",
  "Changelog",
  "Legal pages",
  "Floating contact support",
  "Company Profile",
  "AI Software Development",
];

const aiServiceCards = [
  { title: "AI-backed websites", icon: <Globe2 className="h-5 w-5" /> },
  { title: "Automation systems", icon: <Workflow className="h-5 w-5" /> },
  { title: "Business dashboards", icon: <BriefcaseBusiness className="h-5 w-5" /> },
  { title: "Customer portals", icon: <ShieldCheck className="h-5 w-5" /> },
  { title: "AI assistants and support flows", icon: <Bot className="h-5 w-5" /> },
  { title: "SEO-ready content structure", icon: <SearchCheck className="h-5 w-5" /> },
  { title: "Future software expansion", icon: <Rocket className="h-5 w-5" /> },
];

const roadmapCurrent = [
  "FEF Professional Trade Copier MT5",
  "FEF Manual Trade Manager Pro MT5",
  "Live Market Pulse",
  "Documentation Center",
  "Downloads Center",
  "AI Software Development page",
  "Company Profile",
];

const roadmapFuture = [
  "FEF Market Hub",
  "Customer Portal",
  "AI-assisted tools",
  "Trading calculators",
  "License and update dashboard",
  "More MT5 tools",
  "AI-backed business website services",
];

const contactItems = [
  {
    label: "Email",
    value: brand.email,
    href: `mailto:${brand.email}`,
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "Telegram",
    value: brand.telegram,
    href: brand.telegramUrl,
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    label: "WhatsApp",
    value: brand.whatsapp,
    href: brand.whatsappUrl,
    icon: <Phone className="h-5 w-5" />,
  },
  {
    label: "Website",
    value: WEBSITE_URL,
    href: WEBSITE_URL,
    icon: <Globe2 className="h-5 w-5" />,
  },
];

function ChecklistCard({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="premium-card rounded-2xl border border-line bg-panel/75 p-4"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
            <p className="text-sm font-bold leading-6 text-white">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald shadow-emerald">
              <Building2 className="h-4 w-4" />
              About FEF Trading Solutions
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              AI and trading technology specialists building{" "}
              <span className="text-gradient">professional software products</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              FEF Trading Solutions is a software company focused on MetaTrader
              5 tools, AI-backed websites, automation systems, dashboards,
              customer portals, documentation resources, and market-focused
              digital platforms for professional business and trading workflows.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/ai-software-development">
                Explore AI Software Development
              </ButtonLink>
              <a
                href={COMPANY_PROFILE_URL}
                download
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-electric/70 hover:bg-electric/10"
              >
                <Download className="h-4 w-4" />
                Download Company Profile
              </a>
              <ButtonLink href="/contact" variant="ghost">
                Contact FEF
              </ButtonLink>
            </div>
          </div>

          <div className="premium-card premium-glow overflow-hidden rounded-[2rem] border border-electric/25 bg-panel/80 p-6 shadow-[0_30px_110px_rgba(0,0,0,0.46)] sm:p-8">
            <Image
              src="/images/fef-logo-ai.png"
              alt="FEF Trading Solutions"
              width={700}
              height={280}
              priority
              className="mx-auto h-auto w-full max-w-xl object-contain"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["AI software", "MT5 tools", "Digital systems"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-ink/55 p-4 text-center"
                >
                  <BadgeCheck className="mx-auto h-5 w-5 text-emerald" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Practical software for trading and business workflows
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              FEF Trading Solutions builds software products and digital systems
              for traders, founders, and businesses that need practical tools,
              clean interfaces, automation-ready workflows, and long-term
              product thinking.
            </p>
          </div>

          <ChecklistCard items={overviewItems} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="premium-card premium-glow rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
              <Activity className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-white">Our Mission</h2>
            <p className="mt-4 text-base leading-7 text-steel">
              To turn trading and business ideas into professional digital
              products that are useful, scalable, well-documented, and ready for
              real-world workflows.
            </p>
          </article>

          <article className="premium-card premium-glow rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
              <Rocket className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-white">Our Vision</h2>
            <p className="mt-4 text-base leading-7 text-steel">
              To build a recognizable FEF software ecosystem combining trading
              operations, AI-backed business websites, automation tools, market
              intelligence, customer portals, and product support systems.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            What we build
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            A focused software ecosystem for traders, founders, and companies
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {buildCards.map((item) => (
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

          <div className="relative mb-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Current FEF products
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Released product paths for MetaTrader 5 workflows
            </h2>
          </div>

          <div className="relative grid gap-5 lg:grid-cols-2">
            {currentProducts.map((product) => (
              <article
                key={product.title}
                className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl border border-cyan/25 bg-cyan/10 p-3 text-cyan">
                    {product.icon}
                  </div>
                  <Link
                    href={product.href}
                    className="text-sm font-bold text-electric transition hover:text-white"
                  >
                    View product
                  </Link>
                </div>
                <h3 className="mt-6 text-2xl font-black text-white">
                  {product.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-steel">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
              Website ecosystem
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              FEF Website and Software Ecosystem
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              The FEF website connects product information, live market context,
              downloads, documentation, support, pricing, legal pages, company
              profile resources, and AI software development services.
            </p>
          </div>

          <ChecklistCard items={ecosystemModules} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(11,18,32,0.92),rgba(5,7,13,0.96))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.38)] sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                <BrainCircuit className="h-4 w-4" />
                AI and websites
              </div>
              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
                AI Software Development and AI-backed Websites
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                FEF helps transform business ideas into AI-backed websites,
                software tools, dashboards, portals, and automation systems. The
                goal is not only to build pages, but to create digital
                foundations that can grow into customer systems, market hubs,
                business workflows, and full software products.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aiServiceCards.map((item) => (
                <div
                  key={item.title}
                  className="premium-card rounded-2xl border border-line bg-panel/75 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                      {item.icon}
                    </span>
                    <p className="text-sm font-bold leading-6 text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="premium-card premium-glow rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Current direction
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Active FEF software surfaces
            </h2>
            <div className="mt-7 grid gap-3">
              {roadmapCurrent.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <p className="text-sm font-semibold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card premium-glow rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
              Planned roadmap
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Current Direction and Roadmap
            </h2>
            <p className="mt-4 text-sm leading-6 text-steel">
              These items represent planned future direction without promised
              launch dates.
            </p>
            <div className="mt-7 grid gap-3">
              {roadmapFuture.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                  <p className="text-sm font-semibold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <article className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              <QrCode className="h-4 w-4" />
              Website QR
            </div>
            <h2 className="mt-6 text-3xl font-black text-white">
              Scan to Visit Our Website
            </h2>
            <p className="mt-4 text-base leading-7 text-steel">
              Scan the QR code to open the official FEF Trading Solutions
              website.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="rounded-2xl border border-emerald/25 bg-white p-3 shadow-emerald">
                <Image
                  src="/images/site-qr.png"
                  alt="QR code for the official FEF Trading Solutions website"
                  width={160}
                  height={160}
                  className="h-36 w-36 object-contain"
                />
              </div>
              <p className="break-all font-mono text-sm font-bold text-emerald">
                {WEBSITE_URL}
              </p>
            </div>
          </article>

          <article className="premium-card premium-glow rounded-[2rem] border border-emerald/25 bg-[linear-gradient(135deg,rgba(11,18,32,0.96),rgba(5,7,13,0.92))] p-6 shadow-emerald sm:p-8">
            <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-white">
              Company Profile
            </h2>
            <p className="mt-4 text-base leading-7 text-steel">
              Download the FEF Trading Solutions company profile with details
              about our trading software products, AI software development
              services, AI-backed websites, documentation, support resources,
              and future software ecosystem.
            </p>
            <a
              href={COMPANY_PROFILE_URL}
              download
              className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-gradient px-5 py-3 text-sm font-semibold text-ink shadow-glow transition hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download Company Profile
            </a>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(11,18,32,0.92),rgba(5,7,13,0.96))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.38)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
                Connect with FEF
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Talk to FEF about products, support, or software ideas
              </h2>
              <ButtonLink href="/contact" className="mt-8">
                Contact FEF
              </ButtonLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="premium-card rounded-2xl border border-line bg-panel/75 p-5 transition hover:border-electric/45"
                >
                  <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                    {item.icon}
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-steel">
                    {item.label}
                  </p>
                  <p className="mt-2 break-words text-sm font-bold text-white">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-red-500/25 bg-red-500/[0.04] p-5">
          <p className="text-sm leading-7 text-steel">
            <span className="font-bold text-red-200">Risk note:</span> Trading
            software does not guarantee profit. Users are responsible for their
            own trading decisions and should review the{" "}
            <Link
              href="/risk-disclaimer"
              className="font-bold text-red-200 transition hover:text-white"
            >
              Risk Disclaimer
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
