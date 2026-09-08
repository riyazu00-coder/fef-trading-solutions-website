import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  CircleDot,
  Clock3,
  Eye,
  LockKeyhole,
  Radio,
  Route,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "FEF Trading Agent",
  description:
    "Explore the FEF Trading Agent, a quote-only multi-agent market intelligence dashboard for MT5 monitoring, provenance, relay health and safety visibility.",
  alternates: {
    canonical: "https://www.feftradingsolutions.com/trading-agent",
  },
  openGraph: {
    title: "FEF Trading Agent | FEF Trading Solutions",
    description:
      "A public preview of FEF's quote-only multi-agent market intelligence dashboard. Execution remains locked.",
    url: "https://www.feftradingsolutions.com/trading-agent",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FEF Trading Agent | FEF Trading Solutions",
    description:
      "A public preview of FEF's quote-only multi-agent market intelligence dashboard. Execution remains locked.",
    images: ["/images/og-image.png"],
  },
};

const instruments = ["XAUUSD", "USOIL", "EURUSD", "GBPUSD", "USDJPY"];

const features = [
  {
    title: "MT5 live quote monitoring",
    description:
      "Monitor validated broker quote snapshots through a dedicated, read-only relay architecture.",
    icon: Radio,
  },
  {
    title: "Multi-agent market intelligence",
    description:
      "Bring specialist market perspectives into one structured research and supervision surface.",
    icon: BrainCircuit,
  },
  {
    title: "Five-market watchlist",
    description:
      "Track gold, oil and major FX pairs across XAUUSD, USOIL, EURUSD, GBPUSD and USDJPY.",
    icon: Eye,
  },
  {
    title: "Quote provenance",
    description:
      "See whether a displayed price is a broker quote, delayed reference, fallback or simulated field.",
    icon: Route,
  },
  {
    title: "Relay health visibility",
    description:
      "Surface quote age, relay freshness and stale-data warnings before a feed is trusted for monitoring.",
    icon: Activity,
  },
  {
    title: "Risk Guardian visibility",
    description:
      "Keep the safety layer visible while strategy research and future execution controls remain separated.",
    icon: ShieldCheck,
  },
  {
    title: "Safety lock visibility",
    description:
      "Make the current demo-only, quote-only and execution-locked state explicit throughout the dashboard.",
    icon: LockKeyhole,
  },
];

const safetyStates = [
  "Execution locked",
  "Demo-only",
  "Quote-only",
  "Real-money not approved",
  "No live execution permission",
  "MT5 relay provides quotes only, not trade approval",
];

const roadmap = [
  {
    status: "Verified",
    title: "Local demo quote relay",
    description:
      "Demo MT5 exported five-symbol quote snapshots through the read-only relay into dashboard provenance.",
    complete: true,
  },
  {
    status: "Pending",
    title: "Exness VPS dry run",
    description:
      "Validate supervised quote publishing, HTTPS transport, stale-feed monitoring and restart recovery.",
    complete: false,
  },
  {
    status: "Next",
    title: "Secure read-only website preview",
    description:
      "Expose carefully scoped quote snapshots for public monitoring without connecting the website to MT5 directly.",
    complete: false,
  },
  {
    status: "Safety gate",
    title: "Future demo execution testing",
    description:
      "Consider demo-account execution tests only after separate review and explicit safety approval.",
    complete: false,
  },
];

export default function TradingAgentPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(25,211,208,0.15),transparent_24rem),radial-gradient(circle_at_15%_0%,rgba(29,168,255,0.20),transparent_28rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-bold text-cyan shadow-glow">
              <LockKeyhole className="h-4 w-4" />
              Public research preview
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              FEF <span className="text-gradient">Trading Agent</span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-white sm:text-2xl">
              Autonomous Multi-Agent Market Intelligence Dashboard
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-steel sm:text-lg">
              A supervised research environment for market monitoring, quote
              provenance and multi-agent analysis across metals, energy and
              major foreign-exchange markets.
            </p>

            <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-400/[0.08] p-4 sm:inline-flex sm:items-center sm:gap-3">
              <TriangleAlert className="h-5 w-5 shrink-0 text-amber-300" />
              <p className="mt-2 text-sm font-bold text-amber-100 sm:mt-0">
                Quote-only research mode. Execution remains locked.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#development-status">
                View Development Status
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Request Demo
              </ButtonLink>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">
                  Market intelligence console
                </p>
                <p className="mt-2 text-lg font-black text-white">Quote monitor</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-xs font-bold text-emerald">
                <CircleDot className="h-3.5 w-3.5" />
                Demo verified
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {instruments.map((symbol, index) => (
                <div
                  key={symbol}
                  className={`rounded-xl border p-4 ${
                    index === 0
                      ? "border-cyan/40 bg-cyan/[0.08]"
                      : "border-line bg-ink/55"
                  }`}
                >
                  <p className="font-mono text-sm font-black text-white">{symbol}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-steel">
                    Preview feed
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald/25 bg-emerald/[0.07] p-4">
                <div className="flex items-center gap-2 text-emerald">
                  <Activity className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-[0.14em]">
                    Relay health
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  Freshness and stale-quote supervision
                </p>
              </div>
              <div className="rounded-xl border border-amber-400/25 bg-amber-400/[0.07] p-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <LockKeyhole className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-[0.14em]">
                    Safety state
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  Order routing unavailable
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-line bg-panel/80 px-4 py-3 text-xs">
              <span className="font-bold uppercase tracking-[0.14em] text-steel">
                Public page connection
              </span>
              <span className="font-black text-cyan">READ-ONLY DEMO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-panel/35 px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-cyan">
              Intelligence with provenance
            </span>
            <h2 className="mt-4 text-balance text-3xl font-black text-white sm:text-5xl">
              Built to show what the system knows—and where the data came from
            </h2>
            <p className="mt-5 text-base leading-7 text-steel">
              The research dashboard keeps market context, feed health and
              safety boundaries visible instead of presenting every data point
              as executable broker information.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="premium-card rounded-2xl border border-line bg-ink/55 p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-electric">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    {feature.description}
                  </p>
                </article>
              );
            })}

            <article className="rounded-2xl border border-cyan/25 bg-[linear-gradient(145deg,rgba(29,168,255,0.12),rgba(25,211,208,0.06))] p-6 sm:col-span-2 lg:col-span-2">
              <Sparkles className="h-6 w-6 text-cyan" />
              <h3 className="mt-5 text-xl font-black text-white">
                Designed for supervised market research
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-steel">
                Provenance labels distinguish broker quotes from delayed,
                fallback and simulated information, while safety controls keep
                execution authority outside this public preview.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="site-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-amber-400/25 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_22rem),rgba(11,18,32,0.82)] p-7 sm:p-9">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/30 bg-amber-300/10 text-amber-300">
              <LockKeyhole className="h-6 w-6" />
            </div>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-amber-300">
              Strict safety boundary
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Market visibility without execution permission
            </h2>
            <p className="mt-5 text-base leading-7 text-steel">
              This page presents product development and research capabilities.
              It is not a trading terminal and does not connect directly to an
              MT5 account.
            </p>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {safetyStates.map((state) => (
                <div
                  key={state}
                  className="flex min-h-20 items-center gap-3 rounded-xl border border-line bg-ink/55 p-4"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-emerald" />
                  <span className="text-sm font-bold leading-5 text-white">
                    {state}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-electric/25 bg-electric/[0.07] p-4 text-sm leading-6 text-steel">
              <strong className="text-white">Risk Guardian visibility:</strong>{" "}
              safety status remains visible for research supervision, but it
              does not grant permission to route an order.
            </div>
          </div>
        </div>
      </section>

      <section
        id="development-status"
        className="border-y border-white/[0.08] bg-panel/35 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-cyan">
                Development roadmap
              </span>
              <h2 className="mt-4 text-balance text-3xl font-black text-white sm:text-5xl">
                Safety evidence before wider access
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-steel">
              Each stage separates quote visibility from execution capability
              and requires its own verification record.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {roadmap.map((item, index) => (
              <article
                key={item.title}
                className="relative rounded-2xl border border-line bg-ink/60 p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] ${
                      item.complete
                        ? "border-emerald/30 bg-emerald/10 text-emerald"
                        : "border-electric/25 bg-electric/[0.08] text-cyan"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="font-mono text-xs font-bold text-steel">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{item.description}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-white">
                  {item.complete ? (
                    <Check className="h-4 w-4 text-emerald" />
                  ) : (
                    <Clock3 className="h-4 w-4 text-electric" />
                  )}
                  {item.complete ? "Evidence recorded" : "Awaiting next gate"}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="noise relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-electric/25 bg-[radial-gradient(circle_at_20%_20%,rgba(29,168,255,0.22),transparent_25rem),radial-gradient(circle_at_90%_80%,rgba(25,215,135,0.12),transparent_25rem),rgba(7,17,31,0.96)] p-7 shadow-glow sm:p-10 lg:p-14">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-cyan">
                <Bot className="h-4 w-4" />
                FEF product research
              </div>
              <h2 className="mt-6 max-w-3xl text-balance text-3xl font-black text-white sm:text-5xl">
                Follow the Trading Agent from verified demo to secure public preview
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-steel">
                Review development status or contact FEF Trading Solutions for a
                supervised product demonstration.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href="#development-status">
                View Development Status
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Request Demo
              </ButtonLink>
              <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.03] px-5 py-3 text-center text-sm font-semibold text-steel">
                Coming Soon: Live Quote Preview
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
