import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpen,
  ExternalLink,
  FileText,
  Gauge,
  LockKeyhole,
  Mail,
  Monitor,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const pageUrl = "https://www.feftradingsolutions.com/terms-of-use";
const pageDescription =
  "Read the FEF Trading Solutions Terms of Use for website access, MetaTrader 5 trading software resources, product information, third-party links, and user responsibilities.";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Terms of Use | FEF Trading Solutions",
    description: pageDescription,
    url: pageUrl,
    images: ["/images/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | FEF Trading Solutions",
    description: pageDescription,
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const termsHighlights = [
  "Website and product resources",
  "User responsibility",
  "Third-party platform links",
];

const termsSections = [
  {
    title: "Acceptance Of Terms",
    icon: <BadgeCheck className="h-5 w-5" />,
    paragraphs: [
      "By using the website, users agree to these Terms of Use.",
      "If users do not agree, they should not use the website or related resources.",
    ],
  },
  {
    title: "Website Purpose",
    icon: <Monitor className="h-5 w-5" />,
    paragraphs: [
      "The website provides information about FEF Trading Solutions products, MetaTrader 5 trading software, documentation, downloads, support guidance, and product access links.",
      "The website content is for informational and operational purposes only.",
    ],
  },
  {
    title: "No Financial Advice",
    icon: <ShieldCheck className="h-5 w-5" />,
    paragraphs: [
      "FEF Trading Solutions does not provide financial advice, investment advice, trading signals, portfolio management, or personalized trading recommendations.",
      "Users are responsible for their own trading decisions.",
    ],
  },
  {
    title: "Software And Product Usage",
    icon: <Gauge className="h-5 w-5" />,
    paragraphs: [
      "FEF products are trading workflow tools.",
      "Users are responsible for understanding product settings, testing on demo accounts, broker compatibility, VPS stability, internet connection, platform permissions, and account risk.",
      "Software cannot guarantee profits, prevent losses, or remove trading risk.",
    ],
  },
  {
    title: "Third-Party Platforms And Links",
    icon: <ExternalLink className="h-5 w-5" />,
    paragraphs: [
      "The website may link to MQL5 Market or other third-party platforms.",
      "Purchases, licensing, downloads, refunds, account access, and platform rules are handled by those third parties.",
      "Users should review third-party terms and policies before purchasing or downloading products.",
    ],
  },
  {
    title: "Intellectual Property",
    icon: <BookOpen className="h-5 w-5" />,
    paragraphs: [
      "Website content, product names, branding, design elements, text, graphics, and software-related materials belong to FEF Trading Solutions or their respective owners.",
      "Users may not copy, reproduce, resell, redistribute, or misuse website content or product materials without permission.",
    ],
  },
  {
    title: "User Responsibilities",
    icon: <UserCheck className="h-5 w-5" />,
    paragraphs: [
      "Users must not misuse the website, attempt unauthorized access, interfere with site operation, submit malicious content, or use resources unlawfully.",
      "Users must not send sensitive trading account passwords, broker credentials, private keys, seed phrases, or unnecessary confidential information through contact channels.",
    ],
  },
  {
    title: "Accuracy And Availability",
    icon: <FileText className="h-5 w-5" />,
    paragraphs: [
      "FEF Trading Solutions aims to keep information accurate, but website content may be updated, changed, delayed, unavailable, or contain errors.",
      "Market data, product information, links, or documentation may change without notice.",
    ],
  },
  {
    title: "Limitation Of Responsibility",
    icon: <LockKeyhole className="h-5 w-5" />,
    paragraphs: [
      "FEF Trading Solutions is not responsible for trading losses, platform issues, broker execution, third-party outages, user configuration mistakes, VPS or network problems, or decisions made based on website content.",
      "Users use the website and software resources at their own risk.",
    ],
  },
  {
    title: "Updates To Terms",
    icon: <FileText className="h-5 w-5" />,
    paragraphs: [
      "These Terms of Use may be updated from time to time.",
      "Continued use of the website means users accept the updated terms.",
    ],
  },
];

export default function TermsOfUsePage() {
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
              TERMS OF USE
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Terms <span className="text-gradient">of Use</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              These Terms of Use explain the conditions for accessing the FEF
              Trading Solutions website, product information, documentation,
              downloads, support resources, and external product links.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {termsHighlights.map((item) => (
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
            Website terms
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Conditions for using FEF website resources
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            These terms apply to website access, product information,
            documentation, support resources, external product links, and
            software-related materials published by FEF Trading Solutions.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {termsSections.map((section) => (
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
              <Mail className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
                Questions about these terms
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-steel">
                Users can contact FEF Trading Solutions through the official{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-electric transition hover:text-white"
                >
                  Contact page
                </Link>{" "}
                for questions about these terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
