import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Monitor,
  ShieldCheck,
  Store,
  UserCheck,
  Wrench,
} from "lucide-react";

const pageUrl =
  "https://www.feftradingsolutions.com/documentation/mql5-installation";
const pageDescription =
  "Learn how to install FEF Trading Solutions MetaTrader 5 products from MQL5 Market, log in to your MQL5 account, find purchased products, enable Algo Trading, and attach an EA to MT5 charts.";

export const metadata: Metadata = {
  title: "MQL5 Installation Guide",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "MQL5 Installation Guide | FEF Trading Solutions",
    description: pageDescription,
    url: pageUrl,
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MQL5 Installation Guide | FEF Trading Solutions",
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
  headline: "MQL5 Installation Guide for FEF Products",
  description: pageDescription,
  url: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "FEF Trading Solutions",
    url: "https://www.feftradingsolutions.com",
  },
  about: {
    "@type": "SoftwareApplication",
    name: "FEF Trading Solutions MT5 Products",
    operatingSystem: "MetaTrader 5",
    applicationCategory: "FinanceApplication",
  },
};

const heroCards = [
  "Log in to MQL5 inside MT5",
  "Install purchased FEF products",
  "Prepare demo testing",
];

const requirements = [
  "MetaTrader 5 desktop terminal",
  "Internet connection",
  "MQL5 account",
  "Purchased or rented FEF product from MQL5 Market",
  "Algo Trading enabled",
  "Demo account for testing",
  "Stable VPS recommended for continuous trade management or copying",
];

const loginSteps = [
  "Open MetaTrader 5 desktop terminal.",
  "Go to Tools > Options.",
  "Open the Community tab.",
  "Enter your MQL5 login and password.",
  "Click OK.",
  "Confirm login if MT5 shows account or community connection status.",
];

const purchaseSteps = [
  "Open Navigator.",
  "Expand Market or Purchased products if available.",
  "Go to the Market tab if needed.",
  "Find the purchased or rented FEF product.",
  "Install the product.",
  "Refresh Navigator or restart MT5 if the product does not appear.",
];

const attachSteps = [
  "Open the required symbol chart.",
  "Drag the EA onto the chart.",
  "Open the Common tab.",
  "Allow Algo Trading.",
  "Check inputs and settings before clicking OK.",
  "Confirm the Algo Trading button is enabled on the MT5 toolbar.",
  "Confirm the EA active state on the chart if MT5 shows it.",
];

const algoTradingNotes = [
  "The MT5 Algo Trading button must be ON.",
  "The EA must be allowed to trade in its settings.",
  "Some broker or account permissions may restrict trading.",
  "The market may be closed, so trade functions may not work until the market is open.",
];

const activationNotes = [
  "MQL5 Market products use MQL5 activation and license rules.",
  "Hardware or VPS changes may affect activations based on MQL5 policies.",
  "Users should read MQL5 Market license and activation details before changing devices or VPS.",
  "Do not assume unlimited activations.",
];

const commonIssues = [
  {
    issue: "Product not visible in Navigator",
    guidance:
      "Refresh Navigator, restart MT5, confirm MQL5 login, and check the Market or purchased products area.",
  },
  {
    issue: "MQL5 login not working",
    guidance:
      "Confirm the Community tab login details and make sure the terminal has internet access.",
  },
  {
    issue: "Wrong MT5 account or community login",
    guidance:
      "MQL5 Market product access belongs to the MQL5 account used in the terminal, not just the broker trading account.",
  },
  {
    issue: "Algo Trading disabled",
    guidance:
      "Enable Algo Trading on the toolbar and confirm the EA has trading permission in its settings.",
  },
  {
    issue: "EA attached but not managing trades",
    guidance:
      "Review product inputs, symbol filters, magic number settings, account permissions, and whether the market is open.",
  },
  {
    issue: "Market closed",
    guidance:
      "Some EA actions and trade functions may not work until the market for the selected symbol is open.",
  },
  {
    issue: "Broker symbol mismatch",
    guidance:
      "Check broker-specific symbol names, suffixes, and prefixes before assuming the product is not working.",
  },
  {
    issue: "Product activation issue",
    guidance:
      "Review MQL5 Market activation rules and confirm that the product is installed from the correct MQL5 account.",
  },
  {
    issue: "VPS migration issue",
    guidance:
      "Review MQL5 activation and migration behavior before changing machines or moving to a new VPS.",
  },
  {
    issue: "Internet connection interruption",
    guidance:
      "A stable connection is important for product access, updates, account communication, and ongoing EA workflows.",
  },
];

const testingChecklist = [
  "Install on demo first",
  "Attach to one symbol first",
  "Use small lot size",
  "Confirm settings before enabling live use",
  "Read product-specific setup guide",
  "Read Risk Disclaimer",
];

const ctaLinks = [
  { label: "Trade Copier Setup Guide", href: "/documentation/trade-copier-setup" },
  {
    label: "Manual Trade Manager Setup Guide",
    href: "/documentation/manual-trade-manager-setup",
  },
  { label: "Downloads Center", href: "/downloads" },
  { label: "Support Center", href: "/support" },
  { label: "Risk Disclaimer", href: "/risk-disclaimer" },
];

export default function Mql5InstallationPage() {
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
              MQL5 Installation Guide{" "}
              <span className="text-gradient">for FEF Products</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              Learn how to install FEF Trading Solutions products from MQL5
              Market inside MetaTrader 5 and prepare your platform for safe demo
              testing.
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
                MQL5 Market rules are managed by the platform
              </h2>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-steel md:grid-cols-2">
                <p>
                  MQL5 Market purchases, activations, licensing, downloads, and
                  refunds are handled by MQL5/MetaQuotes according to their own
                  policies.
                </p>
                <p>
                  FEF Trading Solutions provides product guidance and support
                  for FEF tools, but users must follow MQL5 platform rules.
                </p>
                <p className="md:col-span-2">
                  Always test products on demo before live trading.
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
            Prepare MetaTrader 5 before installation
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Confirm platform access, MQL5 account access, product access, and a
            demo environment before attaching any EA to a chart.
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
                <UserCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Login to MQL5 inside MT5
              </h2>
              <p className="mt-4 text-base leading-7 text-steel">
                Sign in from the MT5 desktop terminal so the Market area can
                identify your purchased or rented products.
              </p>
              <div className="mt-7 grid gap-3">
                {loginSteps.map((step, index) => (
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
                <Store className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Find purchased products
              </h2>
              <p className="mt-4 text-base leading-7 text-steel">
                Use Navigator and the Market area to install products tied to
                your MQL5 account.
              </p>
              <div className="mt-7 grid gap-3">
                {purchaseSteps.map((step, index) => (
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
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Attach EA to chart
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Load the product carefully before testing
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Attach the EA to the chart you want to use, confirm inputs, and
              check MT5 permissions before allowing any live workflow.
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
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="premium-card premium-glow rounded-[2rem] border border-electric/25 bg-panel/75 p-6 sm:p-8">
            <ShieldCheck className="h-7 w-7 text-electric" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-electric">
              Enable Algo Trading safely
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Confirm both terminal and EA permissions
            </h2>
            <div className="mt-6 grid gap-3">
              {algoTradingNotes.map((note) => (
                <p
                  key={note}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-6 text-steel"
                >
                  {note}
                </p>
              ))}
            </div>
          </div>

          <div className="premium-card premium-glow rounded-[2rem] border border-emerald/25 bg-panel/75 p-6 sm:p-8">
            <Store className="h-7 w-7 text-emerald" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
              Activations and licenses
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Review MQL5 rules before moving devices
            </h2>
            <div className="mt-6 grid gap-3">
              {activationNotes.map((note) => (
                <p
                  key={note}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-6 text-steel"
                >
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric">
            Common issues
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Troubleshoot installation and activation
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Most installation problems come from login, permissions, account
            access, platform state, broker conditions, or connectivity.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {commonIssues.map((item) => (
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
                Safe testing checklist
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Verify installation before live use
              </h2>
              <p className="mt-5 text-base leading-8 text-steel">
                Use a simple demo workflow first, then move to product-specific
                setup guidance before considering live trading.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {testingChecklist.map((item) => (
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
              Related guides
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Continue with product-specific setup and support
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {ctaLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-electric/70 hover:bg-electric/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="mt-7 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-7 text-steel">
            <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
            If installation does not match your expectations, preserve terminal
            details and screenshots, then request support with the product name,
            MT5 version, MQL5 login status, broker, symbol, and exact issue.
          </p>
        </div>
      </section>
    </>
  );
}
