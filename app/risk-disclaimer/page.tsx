import type { Metadata } from "next";
import {
  AlertTriangle,
  BadgeCheck,
  BookOpen,
  ExternalLink,
  Gauge,
  LineChart,
  Monitor,
  ShieldCheck,
} from "lucide-react";

const pageUrl = "https://www.feftradingsolutions.com/risk-disclaimer";
const pageDescription =
  "Read the FEF Trading Solutions risk disclaimer for MetaTrader 5 trading software, trade copier tools, manual trade management utilities, market data, and trading workflow resources.";

export const metadata: Metadata = {
  title: "Risk Disclaimer",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Risk Disclaimer | FEF Trading Solutions",
    description: pageDescription,
    url: pageUrl,
    images: ["/images/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Disclaimer | FEF Trading Solutions",
    description: pageDescription,
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const disclosureCards = [
  "Trading risk remains with the user",
  "Software supports workflows only",
  "Market data is informational",
];

const disclaimerSections = [
  {
    title: "No Financial Advice",
    icon: <BadgeCheck className="h-5 w-5" />,
    paragraphs: [
      "FEF Trading Solutions does not provide financial advice, investment advice, trading signals, portfolio management, or personalized recommendations.",
      "Users are responsible for their own trading decisions, account activity, position sizing, order placement, and risk management choices.",
    ],
  },
  {
    title: "Trading Risk",
    icon: <LineChart className="h-5 w-5" />,
    paragraphs: [
      "Trading forex, CFDs, metals, crypto, and other financial instruments involves significant risk.",
      "Losses may exceed expectations depending on broker conditions, leverage, volatility, execution, spreads, slippage, and market gaps.",
      "Users should trade only with funds they can afford to lose.",
    ],
  },
  {
    title: "Software Usage",
    icon: <Monitor className="h-5 w-5" />,
    paragraphs: [
      "FEF products are tools to assist workflow and trade management. Software cannot guarantee profits, prevent losses, or remove market risk.",
      "Users must test products on demo accounts before live use.",
      "Users are responsible for product settings, broker compatibility, VPS stability, internet connection, platform permissions, and account risk.",
    ],
  },
  {
    title: "Market Data And Dashboard Information",
    icon: <Gauge className="h-5 w-5" />,
    paragraphs: [
      "Market Pulse and any market display data are informational only.",
      "Data may be delayed, unavailable, inaccurate, or interrupted due to provider, API, or network issues.",
      "Market display information should not be used as the sole basis for trading decisions.",
    ],
  },
  {
    title: "Third-Party Platforms And Links",
    icon: <ExternalLink className="h-5 w-5" />,
    paragraphs: [
      "Products may be available through MQL5 Market or other third-party platforms.",
      "Third-party platforms have their own terms, conditions, payment rules, licensing rules, and refund policies.",
      "FEF Trading Solutions is not responsible for third-party platform outages, account issues, or policy changes.",
    ],
  },
  {
    title: "User Responsibility",
    icon: <BookOpen className="h-5 w-5" />,
    paragraphs: [
      "Users should understand product settings before using them.",
      "Users should read documentation, test carefully, and consult qualified professionals where needed.",
      "By using the website or products, users accept responsibility for their own decisions and risks.",
    ],
  },
];

export default function RiskDisclaimerPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="site-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,168,255,0.10),transparent_30rem),linear-gradient(90deg,rgba(25,215,135,0.08),transparent_38rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald shadow-emerald">
              <span className="h-2 w-2 rounded-full bg-emerald shadow-emerald" />
              RISK DISCLOSURE
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Risk <span className="text-gradient">Disclaimer</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              FEF Trading Solutions provides trading software, workflow tools,
              market display features, and product documentation for MetaTrader
              5 users. The information on this website and inside our tools is
              provided for educational, operational, and informational purposes
              only.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {disclosureCards.map((item) => (
              <div
                key={item}
                className="premium-card rounded-2xl border border-line bg-panel/70 p-5"
              >
                <ShieldCheck className="h-5 w-5 text-emerald" />
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
            Responsible software use
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Clear risk boundaries for trading tools and market information
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            The points below explain how FEF software, dashboards,
            documentation, and third-party platform links should be understood
            before using any product with a live trading account.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {disclaimerSections.map((section) => (
            <article
              key={section.title}
              className="premium-card premium-glow rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-electric/25 bg-electric/10 text-electric">
                  {section.icon}
                </span>
                <h3 className="text-xl font-black text-white">
                  {section.title}
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-7 text-steel">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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

          <div className="relative grid gap-8 lg:grid-cols-[0.2fr_1fr] lg:items-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl border border-emerald/25 bg-emerald/10 text-emerald">
              <AlertTriangle className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
                Final note
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
                Use live accounts only when you understand the risks
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-steel">
                If you do not understand the risks involved in trading or using
                trading software, do not use the software on a live account
                until you have obtained sufficient knowledge or professional
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
