import React from 'react';
import { FileText, Shield, ArrowRight, AlertCircle } from 'lucide-react';

export const TermsOfUsePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <FileText className="h-3.5 w-3.5 text-cyan-400" />
            <span>TERMS OF USE</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Terms of <span className="fef-headline-gradient">Use</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            These Terms of Use explain the conditions for accessing the FEF Trading Solutions website, product information, documentation, downloads, support resources, and external product links.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Website & product resources
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            User responsibility & risk
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Third-party platform terms
          </div>
        </div>
      </div>

      {/* Terms Content Sections */}
      <div className="space-y-6">
        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">1. Acceptance Of Terms</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            By using this website, users agree to these Terms of Use. If users do not agree with any part of these terms, they should not use the website or related resources.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">2. Website Purpose</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            The website provides information about FEF Trading Solutions products, MetaTrader 5 trading software, documentation, downloads, support guidance, and product access links. The website content is provided for informational and operational purposes only.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static border-amber-500/30">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-semibold text-white">3. No Financial Advice</h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                FEF Trading Solutions does not provide financial advice, investment advice, trading signals, portfolio management, or personalized trading recommendations. Users are solely responsible for their own trading decisions and account management.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">4. Software And Product Usage</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF products are trading workflow tools. Users are responsible for understanding product settings, testing on demo accounts, verifying broker compatibility, VPS stability, internet connection reliability, platform permissions, and account risk. Software cannot guarantee profits, prevent losses, or remove trading risk.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">5. Third-Party Platforms And Links</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            The website links to MQL5 Market or other third-party platforms. Purchases, licensing, downloads, refunds, account access, and platform rules are handled by those third parties. Users should review third-party terms and policies before purchasing or downloading products.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">6. Intellectual Property</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Website content, product names, branding, design elements, text, graphics, and software-related materials belong to FEF Trading Solutions or their respective owners. Users may not copy, reproduce, resell, redistribute, or misuse website content or product materials without express prior permission.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">7. User Responsibilities</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Users must not misuse the website, attempt unauthorized access, interfere with site operation, submit malicious content, or use resources unlawfully. Users must not send sensitive trading account passwords, broker credentials, private keys, seed phrases, or unnecessary confidential information through contact channels.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">8. Accuracy And Availability</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF Trading Solutions aims to keep information accurate, but website content may be updated, changed, delayed, unavailable, or contain errors. Market data, product information, links, or documentation may change without notice.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">9. Limitation Of Responsibility</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF Trading Solutions is not responsible for trading losses, platform issues, broker execution, third-party outages, user configuration mistakes, VPS or network problems, or decisions made based on website content. Users use the website and software resources entirely at their own risk.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">10. Updates To Terms</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            These Terms of Use may be updated from time to time. Continued use of the website means users accept the updated terms.
          </p>
        </div>

        {/* Contact section */}
        <div className="p-8 rounded-[2rem] fef-glass-section flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Questions About These Terms</h2>
            <p className="mt-1 text-sm text-slate-300">
              Users can contact FEF Trading Solutions through the official Contact page for questions regarding these terms.
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
