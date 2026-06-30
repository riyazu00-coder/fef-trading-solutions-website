import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpen,
  Cookie,
  ExternalLink,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const pageUrl = "https://www.feftradingsolutions.com/privacy-policy";
const pageDescription =
  "Read the FEF Trading Solutions Privacy Policy for information about website usage, contact inquiries, product links, third-party platforms, and MetaTrader 5 trading software resources.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Privacy Policy | FEF Trading Solutions",
    description: pageDescription,
    url: pageUrl,
    images: ["/images/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | FEF Trading Solutions",
    description: pageDescription,
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const policyHighlights = [
  "Contact and support inquiries",
  "Product links and third-party platforms",
  "Website security and reliability",
];

const policySections = [
  {
    title: "Information We May Collect",
    icon: <FileText className="h-5 w-5" />,
    paragraphs: [
      "The website may collect or receive information users voluntarily submit through contact or support inquiries.",
      "This may include name, email address, message details, and product-related questions when provided.",
      "Basic technical information such as browser, device, IP address, pages visited, and general usage data may be processed if analytics, hosting, security, or logging tools are used.",
    ],
  },
  {
    title: "How We Use Information",
    icon: <BadgeCheck className="h-5 w-5" />,
    paragraphs: [
      "Information may be used to respond to inquiries and provide product information or support guidance.",
      "It may also help improve website content, documentation, and user experience.",
      "Information may be used to maintain website security and reliability, and to manage product-related communication.",
    ],
  },
  {
    title: "Trading And Product Information",
    icon: <ExternalLink className="h-5 w-5" />,
    paragraphs: [
      "FEF Trading Solutions may provide links to MQL5 Market or third-party product pages.",
      "Purchases, licensing, downloads, payments, and account activity on third-party platforms are handled by those platforms under their own privacy policies and terms.",
    ],
  },
  {
    title: "Cookies And Technical Data",
    icon: <Cookie className="h-5 w-5" />,
    paragraphs: [
      "The website may use basic cookies or technical storage needed for site functionality, security, hosting, or performance.",
      "Third-party platforms linked from the website may use their own cookies and tracking technologies.",
    ],
  },
  {
    title: "Third-Party Links",
    icon: <BookOpen className="h-5 w-5" />,
    paragraphs: [
      "The website may link to MQL5 Market, external documentation, product platforms, or other resources.",
      "FEF Trading Solutions is not responsible for the privacy practices or content of external websites.",
    ],
  },
  {
    title: "Data Sharing",
    icon: <ShieldCheck className="h-5 w-5" />,
    paragraphs: [
      "FEF Trading Solutions does not sell personal information.",
      "Information may be shared only when needed for support, website operation, legal requirements, security, or third-party services used to operate the website.",
    ],
  },
  {
    title: "Data Security",
    icon: <LockKeyhole className="h-5 w-5" />,
    paragraphs: [
      "Reasonable measures are used to protect information handled through website and support workflows.",
      "No online system can be guaranteed fully secure.",
    ],
  },
  {
    title: "User Responsibility",
    icon: <UserCheck className="h-5 w-5" />,
    paragraphs: [
      "Users should avoid sending sensitive trading account passwords, investor passwords, broker credentials, payment card details, private keys, seed phrases, or unnecessary confidential information through website contact channels.",
    ],
  },
  {
    title: "Updates To This Policy",
    icon: <FileText className="h-5 w-5" />,
    paragraphs: [
      "This Privacy Policy may be updated from time to time.",
      "Continued use of the website means users accept the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              PRIVACY POLICY
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Privacy <span className="text-gradient">Policy</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              This Privacy Policy explains how FEF Trading Solutions handles
              information related to website visitors, product inquiries,
              support requests, documentation access, and external product
              links.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {policyHighlights.map((item) => (
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
            Website and product privacy
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            How information is handled across FEF website workflows
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            This policy covers general website use, product inquiries,
            third-party product links, and support-related communication for
            FEF Trading Solutions MetaTrader 5 software resources.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {policySections.map((section) => (
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
                Privacy-related questions
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-steel">
                Users can contact FEF Trading Solutions through the official{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-electric transition hover:text-white"
                >
                  Contact page
                </Link>{" "}
                for privacy-related questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
