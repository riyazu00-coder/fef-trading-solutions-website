import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Monitor,
  ShieldCheck,
  SlidersHorizontal,
  Store,
  Wrench,
} from "lucide-react";

const pageUrl =
  "https://www.feftradingsolutions.com/documentation/manual-trade-manager-setup";
const pageDescription =
  "Step-by-step setup guide for FEF Manual Trade Manager Pro MT5, including installation, chart attachment, permissions, trade management settings, break-even, trailing stop, partial close, and safe demo testing.";

export const metadata: Metadata = {
  title: "Manual Trade Manager Setup Guide",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Manual Trade Manager Setup Guide | FEF Trading Solutions",
    description: pageDescription,
    url: pageUrl,
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manual Trade Manager Setup Guide | FEF Trading Solutions",
    description: pageDescription,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "FEF Manual Trade Manager Pro MT5 Setup Guide",
  description: pageDescription,
  url: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "FEF Trading Solutions",
    url: "https://www.feftradingsolutions.com",
  },
  about: {
    "@type": "SoftwareApplication",
    name: "FEF Manual Trade Manager Pro MT5",
    operatingSystem: "MetaTrader 5",
    applicationCategory: "FinanceApplication",
  },
};

const heroCards = [
  "Install from MQL5 Market",
  "Attach to MT5 chart",
  "Demo test before live use",
];

const requirements = [
  "MetaTrader 5 desktop terminal",
  "Active MQL5 account if installed from MQL5 Market",
  "FEF Manual Trade Manager Pro MT5 product access",
  "Algo Trading enabled in MT5",
  "Stable internet or VPS recommended",
  "Demo account for testing",
];

const installationSteps = [
  "Open MetaTrader 5.",
  "Log in to your MQL5 account from inside MT5.",
  "Go to Navigator, Market, or Purchased products depending on your terminal view.",
  "Install FEF Manual Trade Manager Pro MT5 from your purchased products area.",
  "Restart MT5 or refresh Navigator if the product does not appear immediately.",
  "Find the EA under Expert Advisors / Market.",
];

const attachSteps = [
  "Open the symbol chart you want the tool to manage.",
  "Drag FEF Manual Trade Manager Pro MT5 onto the chart.",
  "Enable Algo Trading in the MetaTrader 5 toolbar.",
  "Allow algorithmic trading in the EA settings window.",
  "Confirm the EA active state on the chart if your terminal displays it.",
  "Use one chart per symbol when managing only the current symbol.",
];

const coreSettings = [
  {
    title: "Manage manual trades",
    description:
      "Controls whether the EA focuses on positions opened manually by the trader. Keep this aligned with how you intend to manage positions.",
  },
  {
    title: "Manage current symbol only",
    description:
      "Limits management to the symbol chart where the EA is attached. This helps keep symbol-specific workflows easier to monitor.",
  },
  {
    title: "Auto set stop loss",
    description:
      "Allows the EA to add a missing stop loss when configured conditions permit. Broker stop-level and freeze-level rules may affect placement.",
  },
  {
    title: "Auto set take profit",
    description:
      "Allows the EA to add a configured take profit to eligible trades. Confirm distances on demo before relying on live behavior.",
  },
  {
    title: "Break-even",
    description:
      "Moves the stop loss toward break-even after the configured profit distance is reached. It does not guarantee a risk-free outcome.",
  },
  {
    title: "Trailing stop",
    description:
      "Adjusts the stop loss when trailing conditions are met. Test carefully, because spread, volatility, broker rules, and market gaps can affect results.",
  },
  {
    title: "Partial close",
    description:
      "Supports reducing a position by a configured amount when conditions are met. Start disabled until you understand the behavior on demo.",
  },
  {
    title: "Magic number behavior",
    description:
      "Filtering settings help define which trades are eligible for management. Incorrect magic number rules can cause positions to be ignored.",
  },
  {
    title: "Fixed points vs ATR-based stops",
    description:
      "Fixed point settings use static distances, while ATR-based settings can adapt to volatility. Neither approach promises exact broker execution.",
  },
];

const demoSettings = [
  "Manage manual trades: ON",
  "Manage current symbol only: ON",
  "Auto SL: ON",
  "Auto TP: ON",
  "Override existing SL/TP: OFF",
  "Break-even: ON",
  "Trailing stop: ON only after demo testing",
  "Partial close: OFF at first",
  "Use small lot size",
  "Test on demo account first",
];

const workflowSteps = [
  "Place a manual trade.",
  "The EA detects the position when it matches your settings.",
  "The EA adds missing SL/TP if enabled and allowed by broker rules.",
  "The EA moves SL to break-even when the configured profit distance is reached.",
  "The EA trails stop only when trailing conditions are met.",
  "The EA never removes market risk.",
];

const troubleshootingItems = [
  {
    issue: "EA not attaching",
    guidance:
      "Confirm the product is installed, MT5 is responsive, and the EA is being dragged onto a valid chart.",
  },
  {
    issue: "Algo Trading disabled",
    guidance:
      "Enable Algo Trading in the MT5 toolbar and confirm algorithmic trading is allowed in the EA settings.",
  },
  {
    issue: "Product not showing in Navigator",
    guidance:
      "Refresh Navigator, restart MT5, and confirm you are logged in to the MQL5 account that has product access.",
  },
  {
    issue: "SL/TP not added",
    guidance:
      "Review Auto SL/TP settings, current symbol filters, broker stop levels, freeze levels, and whether the market is open.",
  },
  {
    issue: "Break-even not moving",
    guidance:
      "Check the configured trigger distance, trade eligibility, spread conditions, and whether an existing stop can be modified.",
  },
  {
    issue: "Trailing not working",
    guidance:
      "Confirm trailing is enabled, conditions have been reached, and broker modification limits are not blocking updates.",
  },
  {
    issue: "Wrong symbol or magic number settings",
    guidance:
      "Verify the chart symbol, current-symbol-only mode, and any magic number filters used to include or exclude trades.",
  },
  {
    issue: "Market closed",
    guidance:
      "Some trade modifications may not be accepted when the market is closed or liquidity is unavailable.",
  },
];

const safetyChecklist = [
  "Test on demo first",
  "Confirm symbol and settings",
  "Keep SL active",
  "Do not over-leverage",
  "Check broker stop levels",
  "Use VPS for stable management if needed",
  "Read Risk Disclaimer",
];

const ctaLinks = [
  { label: "View Product Page", href: "/manual-trade-manager" },
  { label: "Downloads Center", href: "/downloads" },
  { label: "Support Center", href: "/support" },
  { label: "Risk Disclaimer", href: "/risk-disclaimer" },
];

export default function ManualTradeManagerSetupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald shadow-emerald">
              <BookOpen className="h-4 w-4" />
              DOCUMENTATION
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              FEF Manual Trade Manager Pro MT5{" "}
              <span className="text-gradient">Setup Guide</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              Learn how to install, attach, configure, and safely test FEF
              Manual Trade Manager Pro MT5 before using it on a live account.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroCards.map((item) => (
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
        <div className="rounded-[2rem] border border-red-500/25 bg-red-500/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row">
            <AlertTriangle className="h-6 w-6 shrink-0 text-red-300" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-200">
                Important notice
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                Manual management does not remove trading risk
              </h2>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-steel md:grid-cols-2">
                <p>This tool does not open trades automatically.</p>
                <p>
                  It is designed to manage existing manual trades based on user
                  settings.
                </p>
                <p>Users should test on demo before live use.</p>
                <p>Trading involves risk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Requirements
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Prepare the terminal before setup
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Confirm the basic platform, account, and testing requirements before
            attaching the EA to a chart.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {requirements.map((item) => (
            <div
              key={item}
              className="premium-card rounded-2xl border border-line bg-panel/70 p-5"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald" />
              <p className="mt-4 text-sm font-semibold leading-6 text-white">
                {item}
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

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                <Store className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Installation from MQL5 Market
              </h2>
              <p className="mt-4 text-base leading-7 text-steel">
                Use the standard MQL5 product workflow inside MetaTrader 5 and
                avoid unofficial download paths.
              </p>
              <div className="mt-7 grid gap-3">
                {installationSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-line bg-panel/70 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                      Step {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-steel">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-emerald">
                <Monitor className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Attach to chart
              </h2>
              <p className="mt-4 text-base leading-7 text-steel">
                Attach the EA to the chart you want to manage and confirm MT5
                permissions before testing.
              </p>
              <div className="mt-7 grid gap-3">
                {attachSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-line bg-panel/70 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">
                      Check {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-steel">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Core settings
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Understand what each setting controls
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            These settings control workflow behavior. They do not expose source
            code, promise exact broker behavior, or remove trading risk.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreSettings.map((setting) => (
            <article
              key={setting.title}
              className="premium-card premium-glow rounded-2xl border border-line bg-panel/75 p-6"
            >
              <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                <SlidersHorizontal className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-black text-white">
                {setting.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {setting.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              First demo settings
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Start with conservative behavior
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Use controlled settings on a demo account first. Adjust only after
              you understand how the EA responds to your broker and symbol
              conditions.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {demoSettings.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
                >
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
            Basic workflow
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            How manual trade management should be tested
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <div
              key={step}
              className="premium-card rounded-2xl border border-line bg-panel/70 p-5"
            >
              <p className="font-mono text-sm font-black text-emerald">
                0{index + 1}
              </p>
              <p className="mt-4 text-sm font-semibold leading-6 text-white">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Troubleshooting
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Common setup checks
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Most setup issues come from platform permissions, product access,
            broker restrictions, symbol filters, or settings that exclude the
            trade.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {troubleshootingItems.map((item) => (
            <article
              key={item.issue}
              className="premium-card rounded-2xl border border-line bg-panel/70 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">
                    {item.issue}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    {item.guidance}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="premium-card premium-glow relative overflow-hidden rounded-[2rem] border border-emerald/25 bg-panel/80 p-6 sm:p-8 lg:p-10">
          <div className="site-grid absolute inset-0 opacity-15" aria-hidden="true" />
          <div
            className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-emerald/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <ShieldCheck className="h-8 w-8 text-emerald" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
                Safety checklist
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Review before any live account use
              </h2>
              <p className="mt-5 text-base leading-8 text-steel">
                This checklist supports safer testing habits. It does not
                guarantee results or remove the need for trader oversight.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {safetyChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(11,18,32,0.94),rgba(5,7,13,0.96))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Next steps
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Continue with product, downloads, support, and risk guidance
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ctaLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-electric/70 hover:bg-electric/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="mt-7 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-7 text-steel">
            <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
            If behavior does not match your expectations, stop live use,
            preserve screenshots and terminal details, and request support with
            the exact product, symbol, broker, and settings context.
          </p>
        </div>
      </section>
    </>
  );
}
