import React from 'react';
import { AlertTriangle, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

export const LegalPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
            <span>Compliance & Legal</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Legal Notices & <span className="fef-headline-gradient">Policies</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Review official compliance, risk disclosures, privacy policies, and terms of service for FEF Trading Solutions.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-8 rounded-[2rem] fef-glass-card flex flex-col justify-between">
          <div>
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 w-fit">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">Risk Disclaimer</h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mandatory disclosure regarding margin trading risks, execution differences, and demo testing protocols.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <a href="/risk-disclaimer" className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
              <span>Read Disclaimer</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card flex flex-col justify-between">
          <div>
            <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 w-fit">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">Terms of Use</h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Conditions governing access to website resources, software documentation, and third-party platform links.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <a href="/terms-of-use" className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
              <span>Read Terms of Use</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card flex flex-col justify-between">
          <div>
            <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 w-fit">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">Privacy Policy</h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Information on how data is handled across contact channels, support interactions, and website infrastructure.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <a href="/privacy-policy" className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
              <span>Read Privacy Policy</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
