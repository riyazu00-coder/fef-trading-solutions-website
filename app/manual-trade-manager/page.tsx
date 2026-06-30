import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Crosshair,
  ExternalLink,
  Gauge,
  Layers3,
  LineChart,
  LockKeyhole,
  Radar,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TimerReset,
  TrendingUp,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { RiskWarning } from "@/components/RiskWarning";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FEF Manual Trade Manager Pro MT5",
  description:
    "Professional MetaTrader 5 manual trade management software designed to help traders manage open positions with stop loss, take profit, break-even, trailing stop, partial close, and workflow-focused controls.",
  alternates: {
    canonical: "https://www.feftradingsolutions.com/manual-trade-manager",
  },
  openGraph: {
    title: "FEF Manual Trade Manager Pro MT5 | FEF Trading Solutions",
    description:
      "Professional MetaTrader 5 manual trade management software designed to help traders manage open positions with stop loss, take profit, break-even, trailing stop, partial close, and workflow-focused controls.",
    url: "https://www.feftradingsolutions.com/manual-trade-manager",
    images: ["/images/manual-trade-manager.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FEF Manual Trade Manager Pro MT5 | FEF Trading Solutions",
    description:
      "Professional MetaTrader 5 manual trade management software designed to help traders manage open positions with stop loss, take profit, break-even, trailing stop, partial close, and workflow-focused controls.",
    images: ["/images/manual-trade-manager.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const positioningCards = [
  {
    title: "Manual Trade Protection",
    description:
      "Designed to help operators protect manually opened positions with structured management controls.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "SL/TP Automation",
    description:
      "Apply configured stop loss and take profit handling to eligible manual trades when rules permit.",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Breakeven Logic",
    description:
      "Move stops toward breakeven according to configured thresholds and operator preferences.",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "Trailing Stop Control",
    description:
      "Use trailing logic to manage protected positions while maintaining manual oversight.",
    icon: <Route className="h-5 w-5" />,
  },
  {
    title: "Partial Close Workflow",
    description:
      "Support staged position reduction workflows for traders who scale out manually managed trades.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Visual Market Assistant",
    description:
      "Bring market context into the trading workspace without presenting entries as automatic signals.",
    icon: <Radar className="h-5 w-5" />,
  },
];

const managementFeatures = [
  "Auto SL/TP",
  "Break Even",
  "Trailing Stop",
  "Partial Close",
  "Manual Trade Detection",
  "Current Symbol Management",
  "Magic Number Filtering",
  "Safe Stop Modification",
];

const visualTools = [
  {
    title: "Session Boxes",
    description:
      "Mark key trading sessions to keep intraday context visible on the chart.",
    icon: <TimerReset className="h-5 w-5" />,
  },
  {
    title: "Previous Day/Week/Month Highs and Lows",
    description:
      "Reference major historical levels for context, planning and review.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Opening Range Levels",
    description:
      "Display opening range areas that may help structure manual observation.",
    icon: <Crosshair className="h-5 w-5" />,
  },
  {
    title: "Fair Value Gaps",
    description:
      "Highlight potential imbalance zones as visual reference points only.",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    title: "Structure/BOS/CHoCH",
    description:
      "Show market structure context to support disciplined operator review.",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Liquidity Sweeps",
    description:
      "Identify sweep-style context without implying predictive certainty.",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "DXY Bias Dashboard",
    description:
      "Add dollar-index context for traders who monitor broader market conditions.",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "Symbol Bias Panel",
    description:
      "Summarize directional context as a visual aid for manual decision-making.",
    icon: <SlidersHorizontal className="h-5 w-5" />,
  },
];

const workflowSteps = [
  "Trader opens manual position",
  "EA detects eligible trade",
  "Missing SL/TP can be added",
  "Breakeven/trailing/partial rules monitor position",
  "Dashboard shows trade and market context",
  "Trader remains in control",
];

const dashboardItems = [
  "Spread",
  "Managed trades",
  "SL/TP mode",
  "Break even status",
  "Trailing status",
  "DXY bias",
  "Session and ORB status",
  "Market structure context",
];

const usageChecklist = [
  "Demo test first",
  "Confirm symbol settings",
  "Confirm broker stop/freeze levels",
  "Start with conservative settings",
  "Monitor first live sessions manually",
  "Manual management does not remove trading risk",
];

const faqItems = [
  {
    question: "Does this EA open trades automatically?",
    answer:
      "No. This page presents FEF Manual Trade Manager Pro MT5 as a manual trade management tool. It is designed to help manage trades opened by the trader, not to generate automatic entries.",
  },
  {
    question: "Can it manage only manual trades?",
    answer:
      "It is designed around manual trade control, with filtering options that help operators define which eligible trades should be managed.",
  },
  {
    question: "Can it manage all trades?",
    answer:
      "Configuration and filtering should be tested carefully. Traders should confirm symbol, magic number and account conditions before relying on any management workflow.",
  },
  {
    question: "Does it guarantee profit?",
    answer:
      "No. It is software for trade management and visual context only. It does not remove market risk, guarantee execution quality or promise profitable results.",
  },
  {
    question: "Should I test on demo first?",
    answer:
      "Yes. Demo testing is strongly recommended so traders can review settings, broker conditions and position management behavior before live use.",
  },
  {
    question: "Can I use it with the Trade Copier?",
    answer:
      "Manual Trade Manager Pro MT5 and FEF Professional Trade Copier MT5 can support different operational workflows. Test any combined setup on demo accounts before live deployment.",
  },
];

const manualTradeManagerStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FEF Manual Trade Manager Pro MT5",
  applicationCategory: "FinanceApplication",
  operatingSystem: "MetaTrader 5",
  url: "https://www.feftradingsolutions.com/manual-trade-manager",
  image: "https://www.feftradingsolutions.com/images/manual-trade-manager.png",
  publisher: {
    "@type": "Organization",
    name: "FEF Trading Solutions",
    url: "https://www.feftradingsolutions.com/",
  },
  description:
    "Professional MetaTrader 5 manual trade management software designed to help traders manage open positions with stop loss, take profit, break-even, trailing stop, partial close, and workflow-focused controls.",
  offers: {
    "@type": "Offer",
    url: brand.manualTradeManagerMql5Url,
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

export default function ManualTradeManagerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(manualTradeManagerStructuredData),
        }}
      />
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald shadow-emerald">
                <span className="h-2 w-2 rounded-full bg-emerald shadow-emerald" />
                Manual Trade Management for MT5
              </div>

              <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                FEF Manual Trade Manager{" "}
                <span className="text-gradient">Pro MT5</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
                A professional manual trade management dashboard for MetaTrader
                5, built for traders who want structured SL/TP handling,
                breakeven, trailing stop, partial close and visual market
                context.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href={brand.manualTradeManagerMql5Url}
                  external
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Buy on MQL5
                </ButtonLink>
                <ButtonLink href="/documentation" variant="secondary">
                  View Documentation
                </ButtonLink>
                <ButtonLink href="/trade-copier" variant="ghost">
                  Explore Trade Copier
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {["Manual Control", "MT5 Dashboard", "Visual Context"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-line bg-panel/70 p-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-steel">
                        Focus
                      </p>
                      <p className="mt-2 text-lg font-black text-white">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-electric/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="premium-card relative overflow-hidden rounded-[2rem] border border-electric/25 bg-panel/80 p-2 shadow-[0_30px_110px_rgba(0,0,0,0.46)]">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald shadow-emerald" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-electric/80" />
                  </div>
                  <p className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-steel sm:block">
                    Operator Dashboard
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-ink">
                  <Image
                    src="/images/manual-trade-manager.png"
                    alt="FEF Manual Trade Manager Pro MT5 dashboard screenshot"
                    width={1536}
                    height={864}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Product positioning
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Built for manual trade control, not automatic entry signals
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            FEF Manual Trade Manager Pro MT5 supports the trader after a manual
            decision has been made. It is focused on structured position
            handling, monitoring and visual context while the trader remains in
            control of entries and risk decisions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {positioningCards.map((card) => (
            <div
              key={card.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                {card.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {card.description}
              </p>
            </div>
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
              Core management features
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Controls for active manual trade management
            </h2>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {managementFeatures.map((feature) => (
              <div
                key={feature}
                className="premium-card rounded-2xl border border-line bg-panel/80 p-5"
              >
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-emerald" />
                  <p className="font-bold text-white">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Visual market tools
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Market context for disciplined manual operators
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Visual tools can help organize the chart and trading session. They
            are designed as context aids, not promises of trade accuracy or
            automatic decision-making.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visualTools.map((tool) => (
            <div
              key={tool.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                {tool.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {tool.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              A workflow that keeps the trader in control
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              The EA monitors eligible manually opened positions and applies
              configured management logic while the trader keeps responsibility
              for entries, review and risk decisions.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div
              className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-electric/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative space-y-4">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="premium-card flex items-center gap-4 rounded-2xl border border-line bg-ink/60 p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald/25 bg-emerald/10 text-sm font-black text-emerald">
                    {index + 1}
                  </span>
                  <p className="font-bold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/20 bg-[linear-gradient(135deg,rgba(11,18,32,0.95),rgba(5,7,13,0.98))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10">
          <div className="noise absolute inset-0 opacity-25" aria-hidden="true" />

          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                Operator dashboard
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Monitoring panels for position management sessions
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                The dashboard-style interface keeps key trade management states
                visible so operators can review manual positions, market
                context and active management modes in one workspace.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-ink/60 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald shadow-emerald" />
                    <p className="font-bold text-white">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Risk-aware usage
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Prepare settings before using trade management on live accounts
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Manual management tools can improve workflow discipline, but they
              do not remove trading risk. Test carefully, start conservatively
              and monitor early sessions directly.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {usageChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
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
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Manual Trade Manager questions
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="premium-card rounded-2xl border border-line bg-panel/75 p-6 transition hover:border-electric/45 hover:bg-panel"
            >
              <h3 className="text-lg font-black text-white">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-steel">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RiskWarning />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="noise overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_25%_15%,rgba(29,168,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.86))] p-8 text-center shadow-glow sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald">
            <LockKeyhole className="h-4 w-4" />
            Manual management software for MT5
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black text-white sm:text-5xl">
            Manage manual positions with{" "}
            <span className="text-gradient">FEF Manual Trade Manager Pro MT5</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
            Build a cleaner manual trade management workflow with structured
            SL/TP handling, breakeven, trailing control, partial close and
            dashboard-style market context.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={brand.manualTradeManagerMql5Url}
              external
              icon={<ExternalLink className="h-4 w-4" />}
            >
              Buy on MQL5
            </ButtonLink>
            <ButtonLink href="/documentation" variant="secondary">
              View Documentation
            </ButtonLink>
            <ButtonLink href="/trade-copier" variant="ghost">
              Explore Trade Copier
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
