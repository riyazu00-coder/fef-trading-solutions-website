import { Shield, ArrowRight, AlertCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Shield className="h-3.5 w-3.5 text-cyan-400" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Privacy <span className="fef-headline-gradient">Policy</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            This Privacy Policy describes how FEF Trading Solutions handles information across our website, documentation, downloads, support channels, and external product links.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Website & support interactions
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Information protection standards
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Third-party platform boundaries
          </div>
        </div>
      </div>

      {/* Policy Content Sections */}
      <div className="space-y-6">
        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">1. Overview</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF Trading Solutions provides trading software information, documentation, downloads, and support guidance for MetaTrader 5 tools. This policy explains what information may be collected through website access, inquiries, and support interactions, and how that information is handled.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Information may include contact details submitted voluntarily through website contact channels, email messages, support requests, or product inquiries, as well as basic technical logs generated during normal website visits.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">3. How Information Is Used</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Information is used to respond to questions, provide documentation, deliver setup guidance, improve website resources, maintain site security and reliability, and manage product-related communication.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">4. Trading And Product Information</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF Trading Solutions provides links to MQL5 Market product pages. Purchases, licensing, downloads, payments, and account activity on third-party platforms are handled by those platforms under their own privacy policies and terms.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">5. Cookies And Technical Data</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            The website may use basic cookies or technical storage needed for site functionality, security, hosting, or performance. Third-party platforms linked from the website may use their own cookies and tracking technologies.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">6. Third-Party Links</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            The website may link to MQL5 Market, external documentation, product platforms, or other resources. FEF Trading Solutions is not responsible for the privacy practices or content of external websites.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">7. Data Sharing</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF Trading Solutions does not sell personal information. Information may be shared only when needed for support, website operation, legal requirements, security, or third-party services used to operate the website.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">8. Data Security</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Reasonable measures are used to protect information handled through website and support workflows. No online system can be guaranteed fully secure.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static border-amber-500/30">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-semibold text-white">9. User Responsibility</h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                Users should avoid sending sensitive trading account passwords, investor passwords, broker credentials, payment card details, private keys, seed phrases, or unnecessary confidential information through website contact channels.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">10. Updates To This Policy</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            This Privacy Policy may be updated from time to time. Continued use of the website means users accept the updated policy.
          </p>
        </div>

        {/* Contact section */}
        <div className="p-8 rounded-[2rem] fef-glass-section flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Privacy-Related Questions</h2>
            <p className="mt-1 text-sm text-slate-300">
              Users can contact FEF Trading Solutions through the official Contact page for privacy-related questions.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition shrink-0"
          >
            <span>Contact Support</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
