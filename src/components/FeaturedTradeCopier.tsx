import React from 'react';
import { ExternalLink, ChevronRight, BadgeCheck, ShieldCheck, Activity, Zap } from 'lucide-react';

export const FeaturedTradeCopier: React.FC = () => {
  return (
    <section id="featured-trade-copier" className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

      {/* 1. Editorial Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-50/90 backdrop-blur-xl text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          FEATURED MT5 PRODUCT
        </div>

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.025em] text-[#080B1D] leading-tight">
          FEF Professional{' '}
          <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
            Trade Copier MT5
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#536078] max-w-2xl mx-auto leading-relaxed font-normal">
          Professional master-and-slave trade synchronization for MetaTrader 5, designed for reliable multi-account execution and operational control.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://www.mql5.com/en/market/product/183557"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-[0_6px_22px_rgba(69,201,245,0.32)] transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Buy on MQL5</span>
            <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href="/documentation"
            className="focus-ring inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#080B1D] fef-glass-secondary hover:bg-white/90 transition transform hover:-translate-y-0.5"
          >
            <span>View Documentation</span>
            <ChevronRight className="h-4 w-4 text-[#536078]" />
          </a>
        </div>

        {/* 3 Quick-Spec Light Glass Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm font-semibold text-[#080B1D]">
          <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl fef-glass-secondary hover:border-cyan-500/40 transition">
            <BadgeCheck className="h-5 w-5 text-cyan-600" />
            <span>Official Market Release</span>
          </div>

          <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl fef-glass-secondary hover:border-cyan-500/40 transition">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <span>Secure MQL5 Delivery</span>
          </div>

          <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl fef-glass-secondary hover:border-purple-500/40 transition">
            <Activity className="h-5 w-5 text-purple-600" />
            <span>Real-Time Synchronization</span>
          </div>
        </div>
      </div>

      {/* 2. High-Res MT5 Dashboard Showcase Stage in Premium Software Device Frame */}
      <div className="mt-12 relative max-w-4xl mx-auto">
        {/* Soft Ambient Illumination Bloom */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#45c9f5]/15 via-[#6695f5]/15 to-[#a57af3]/15 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

        <div className="relative rounded-3xl fef-glass-primary p-2 sm:p-3 shadow-md">
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-slate-200/50 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.2em] text-[#536078] font-semibold">
              MetaTrader 5 Trade Copier Interface
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
              <Zap className="h-3 w-3 text-emerald-600" />
              <span>LIVE SYNC READY</span>
            </div>
          </div>

          {/* Crisp, High-Contrast Real Product Screenshot (NO Washing Out, NO Gray Overlay) */}
          <div className="relative overflow-hidden rounded-2xl mt-2 border border-slate-200/60 bg-slate-950">
            <img
              src="/images/hero.png"
              alt="FEF Professional Trade Copier MT5 dashboard and trade copying interface"
              className="w-full h-auto object-cover transform hover:scale-[1.005] transition-transform duration-500"
            />
          </div>

          {/* Bottom Status Callout */}
          <div className="mt-3 px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#536078]">
            <span className="font-semibold text-[#080B1D]">Verified MT5 Architecture</span>
            <span>Local Memory Execution • Low Latency</span>
          </div>
        </div>
      </div>

    </section>
  );
};
