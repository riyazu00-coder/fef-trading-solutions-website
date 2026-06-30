import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Layers3,
  Monitor,
  ShieldCheck,
  SlidersHorizontal,
  Store,
  Wrench,
} from "lucide-react";

const pageUrl =
  "https://www.feftradingsolutions.com/documentation/trade-copier-setup";
const pageDescription =
  "Step-by-step setup guide for FEF Professional Trade Copier MT5, including installation, sender and receiver setup, permissions, risk settings, symbol matching, lot control, and safe demo testing.";

export const metadata: Metadata = {
  title: "Trade Copier Setup Guide",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Trade Copier Setup Guide | FEF Trading Solutions",
    description: pageDescription,
    url: pageUrl,
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Copier Setup Guide | FEF Trading Solutions",
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
  headline: "FEF Professional Trade Copier MT5 Setup Guide",
  description: pageDescription,
  url: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "FEF Trading Solutions",
    url: "https://www.feftradingsolutions.com",
  },
  about: {
    "@type": "SoftwareApplication",
    name: "FEF Professional Trade Copier MT5",
    operatingSystem: "MetaTrader 5",
    applicationCategory: "FinanceApplication",
  },
};

const heroCards = [
  "Configure sender and receiver",
  "Validate symbol and lot rules",
  "Demo test before live use",
];

const requirements = [
  "MetaTrader 5 desktop terminal",
  "Active MQL5 account if installed from MQL5 Market",
  "FEF Professional Trade Copier MT5 product access",
  "Algo Trading enabled in MT5",
  "Sender/source MT5 account",
  "Receiver/client MT5 account",
  "Stable internet or VPS recommended",
  "Demo accounts for testing",
];

const installationSteps = [
  "Open MetaTrader 5.",
  "Log in to your MQL5 account from inside MT5.",
  "Go to Navigator, Market, or Purchased products depending on your terminal view.",
  "Install FEF Professional Trade Copier MT5 from your purchased products area.",
  "Restart MT5 or refresh Navigator if the product does not appear immediately.",
  "Find the EA under Expert Advisors / Market.",
];

const conceptCards = [
  {
    title: "Sender / source account",
    description:
      "The sender account is where original trades are placed. Its trade actions become the source workflow for connected receivers.",
  },
  {
    title: "Receiver / client account",
    description:
      "The receiver account is where copied trades are executed when configuration, symbol, broker, and account conditions allow.",
  },
  {
    title: "Both sides matter",
    description:
      "Sender and receiver settings must be configured correctly. Test with demo accounts before connecting any live account.",
  },
];

const attachSteps = [
  "Open the required symbol chart.",
  "Drag FEF Professional Trade Copier MT5 onto the chart.",
  "Enable Algo Trading in the MetaTrader 5 toolbar.",
  "Allow algorithmic trading in the EA settings window.",
  "Confirm the EA active state if MT5 displays one.",
  "Use the correct mode and settings for sender or receiver configuration.",
];

const coreSettings = [
  {
    title: "Sender mode",
    description:
      "Defines the account or chart as the source side where original trade actions are detected and prepared for copying.",
  },
  {
    title: "Receiver mode",
    description:
      "Defines the account or chart as the client side where copied trades may be opened, modified, or closed when conditions allow.",
  },
  {
    title: "Symbol matching",
    description:
      "Controls how receiver symbols match sender symbols, including broker suffixes or prefixes such as XAUUSD versus XAUUSDm.",
  },
  {
    title: "Lot size mode",
    description:
      "Controls how receiver trade size is calculated. Confirm behavior on demo before using any live account.",
  },
  {
    title: "Fixed lot / multiplier / risk-based behavior",
    description:
      "Use conservative settings when testing fixed lot, multiplier-style, or risk-based workflows. Broker and account conditions can affect outcomes.",
  },
  {
    title: "Maximum lot protection",
    description:
      "Helps limit copied size according to configured boundaries. This should be treated as a control, not a guarantee against loss.",
  },
  {
    title: "Copy SL/TP",
    description:
      "Copies stop loss and take profit where enabled and accepted by broker rules. Stop levels, freeze levels, and market conditions can affect placement.",
  },
  {
    title: "Copy pending orders",
    description:
      "If available in the configured workflow, pending order copying should be tested carefully because broker rules and symbol availability may differ.",
  },
  {
    title: "Magic number behavior",
    description:
      "Filtering settings help define which trades are eligible. Incorrect magic number rules can cause trades to be ignored or excluded.",
  },
  {
    title: "Trade comment behavior",
    description:
      "Trade comments can help identify copied trades, but brokers may modify, shorten, or restrict comment handling.",
  },
  {
    title: "Slippage and spread considerations",
    description:
      "Execution quality can differ between accounts. Spread, slippage, volatility, liquidity, and broker execution can affect copied results.",
  },
  {
    title: "Advanced copy behavior",
    description:
      "Review any advanced copy mode carefully in documentation and demo testing before relying on it with live accounts.",
  },
];

const demoSetup = [
  "Use demo sender and demo receiver accounts",
  "Start with one symbol",
  "Use small lot size",
  "Copy SL/TP: ON if available",
  "Use conservative lot multiplier",
  "Avoid high-impact news during testing",
  "Confirm copied order direction, lot size, SL, and TP",
  "Run at least several demo tests before live use",
];

const workflowSteps = [
  "Place a trade on sender account.",
  "Receiver detects the trade according to configuration.",
  "Receiver opens corresponding trade if conditions allow.",
  "SL/TP may be copied if enabled.",
  "Trade modifications and closures may be copied depending on settings.",
  "User remains responsible for risk and account management.",
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
      "Enable Algo Trading in the MT5 toolbar and allow algorithmic trading in the EA settings.",
  },
  {
    issue: "Product not showing in Navigator",
    guidance:
      "Refresh Navigator, restart MT5, and confirm you are logged in to the MQL5 account that has product access.",
  },
  {
    issue: "Receiver not copying trades",
    guidance:
      "Check sender and receiver modes, account connection, symbol mapping, filters, permissions, and whether the receiver can trade.",
  },
  {
    issue: "Symbol name mismatch",
    guidance:
      "Review broker symbol differences such as XAUUSD versus XAUUSDm and confirm symbol matching rules on demo.",
  },
  {
    issue: "Market closed",
    guidance:
      "Copied trade actions may fail or wait when the relevant market is closed or liquidity is unavailable.",
  },
  {
    issue: "Broker stop or freeze level restrictions",
    guidance:
      "Some SL/TP modifications may be rejected if distances do not meet broker requirements.",
  },
  {
    issue: "Spread or slippage too high",
    guidance:
      "High spread, volatility, or slippage can affect copied entries and exits. Avoid high-impact conditions during first testing.",
  },
  {
    issue: "Wrong sender or receiver mode",
    guidance:
      "Confirm each terminal or chart is set to the correct role before testing copy behavior.",
  },
  {
    issue: "Wrong magic number or filter settings",
    guidance:
      "Filters may exclude trades from copying. Review magic number, symbol, and direction filters carefully.",
  },
  {
    issue: "VPS or internet interruption",
    guidance:
      "Connectivity issues can interrupt trade detection or copying. Use stable hosting where ongoing management is needed.",
  },
  {
    issue: "MQL5 login or license issue",
    guidance:
      "Confirm the terminal is logged in to the correct MQL5 account and that product access is available in the Market area.",
  },
];

const safetyChecklist = [
  "Test demo to demo first",
  "Confirm symbol mapping",
  "Confirm lot settings",
  "Confirm SL/TP behavior",
  "Use conservative risk",
  "Avoid over-leverage",
  "Use VPS for stability where needed",
  "Read Risk Disclaimer",
];

const ctaLinks = [
  { label: "View Product Page", href: "/trade-copier" },
  { label: "Downloads Center", href: "/downloads" },
  { label: "Support Center", href: "/support" },
  { label: "Risk Disclaimer", href: "/risk-disclaimer" },
];

export default function TradeCopierSetupPage() {
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
              FEF Professional Trade Copier MT5{" "}
              <span className="text-gradient">Setup Guide</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              Learn how to install, configure, and safely test FEF Professional
              Trade Copier MT5 before using it with live MetaTrader 5 accounts.
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
                Copy trading requires careful risk control
              </h2>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-steel md:grid-cols-2">
                <p>Trade copying involves risk.</p>
                <p>Copied trades can produce losses.</p>
                <p>Users must test on demo accounts before live use.</p>
                <p>
                  Broker conditions, spreads, slippage, symbol names, execution
                  speed, and account permissions can affect results.
                </p>
                <p className="md:col-span-2">
                  Software cannot guarantee profit or identical execution.
                </p>
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
            Prepare both MT5 accounts before setup
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Confirm the platform, account access, product installation, and demo
            testing environment before connecting sender and receiver workflows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                <Layers3 className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Sender and receiver concept
              </h2>
              <p className="mt-4 text-base leading-7 text-steel">
                Copying depends on a clear relationship between the source
                account and the account receiving copied trade actions.
              </p>
              <div className="mt-7 grid gap-3">
                {conceptCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-line bg-panel/70 p-4"
                  >
                    <p className="text-sm font-black text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-steel">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Attach to chart
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Activate the EA with the correct role
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Each chart or terminal should be configured according to its
              sender or receiver role before testing copy behavior.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {attachSteps.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
                >
                  <Monitor className="h-5 w-5 text-electric" />
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
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Core settings
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Understand copy behavior before live use
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            These setting areas shape the copy workflow. They do not expose
            source code, promise exact broker behavior, or remove trading risk.
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
              First demo setup
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Test one controlled path first
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Keep the first demo run simple: one sender, one receiver, one
              symbol, conservative sizing, and careful comparison of copied
              trade behavior.
            </p>
          </div>

          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {demoSetup.map((item) => (
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
            How copy behavior should be tested
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
            Most copy issues come from permissions, symbol naming, filters,
            account roles, broker limits, or connectivity interruptions.
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
                Review before any live copy setup
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
            If copied behavior does not match your expectations, stop live use,
            preserve screenshots and terminal details, and request support with
            the exact sender, receiver, symbol, broker, and settings context.
          </p>
        </div>
      </section>
    </>
  );
}
