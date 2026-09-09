import React from 'react';
import { Check, ExternalLink, ShieldCheck } from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>MQL5 Marketplace Delivery</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Transparent Licensing & <span className="fef-headline-gradient">Official Pricing</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            All FEF Trading Solutions MetaTrader 5 software products are distributed with official MQL5 Market licensing, instant encrypted delivery, multi-terminal activations, and lifetime free updates.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-section relative overflow-hidden flex flex-col justify-between">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
              Official MQL5 Release
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-white">FEF Trade Copier MT5</h3>
            <p className="mt-2 text-sm text-slate-300 font-normal">Perpetual license for individual traders and prop desk operations.</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-semibold text-white">$49</span>
              <span className="text-sm text-slate-400 font-normal">/ one-time perpetual</span>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Unlimited Slave Terminal Connections</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Sub-millisecond local IPC copy engine</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Symbol Suffix & Prefix mapping support</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Lifetime automated updates via MQL5</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Direct technical product support</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:scale-[1.02] active:scale-95"
            >
              <span>Buy on MQL5 Market</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card relative overflow-hidden flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
              Bespoke Development
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-white">Custom AI & Software</h3>
            <p className="mt-2 text-sm text-slate-300 font-normal">Tailored digital platforms, AI integrations, websites, and proprietary trading bots.</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-semibold text-white">Custom Scope</span>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Custom architecture specification</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Dedicated full-stack engineering</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Bespoke WebGL & interactive frontends</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Private repository handover & NDA</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>Inquire for Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
