import React from 'react';
import { ExternalLink, ChevronRight, BadgeCheck, ShieldCheck, Activity, Zap } from 'lucide-react';

export const FeaturedTradeCopier: React.FC = () => {
  return (
    <section id="featured-trade-copier" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="relative rounded-[2.5rem] fef-glass-section p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl text-emerald-400 text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(25,215,135,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            FEATURED MT5 PRODUCT
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Professional{' '}
            <span className="bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent">
              Trade Copier MT5
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Professional master-and-slave trade synchronization for MetaTrader 5, designed for reliable multi-account execution and operational control.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a 
              href="https://www.mql5.com/en/market/product/183557" 
              target="_blank" 
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-[0_0_30px_rgba(29,168,255,0.4)] transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Buy on MQL5</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a 
              href="/documentation" 
              className="focus-ring inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition transform hover:-translate-y-0.5"
            >
              <span>View Documentation</span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </a>
          </div>

          {/* 3 Quick-Spec Glass Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm font-medium text-slate-200">
            <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl fef-glass-card hover:border-cyan-400/40 transition">
              <BadgeCheck className="h-5 w-5 text-[#1da8ff]" />
              <span>Official Market Release</span>
            </div>

            <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl fef-glass-card hover:border-cyan-400/40 transition">
              <ShieldCheck className="h-5 w-5 text-[#19d3d0]" />
              <span>Secure MQL5 Delivery</span>
            </div>

            <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl fef-glass-card hover:border-emerald-400/40 transition">
              <Activity className="h-5 w-5 text-[#19d787]" />
              <span>Real-Time Synchronization</span>
            </div>
          </div>
        </div>

        {/* High-Res MT5 Dashboard Showcase Stage (Refined Compact Width) */}
        <div className="mt-10 relative max-w-3xl lg:max-w-[780px] mx-auto">
          {/* Ambient Bloom */}
          <div className="absolute -inset-3 bg-gradient-to-r from-electric/20 via-cyan/20 to-emerald/20 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />

          <div className="relative rounded-[2rem] fef-glass-card-static border border-white/15 backdrop-blur-2xl p-2 sm:p-3 shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_#19d787]" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-cyan-400/80" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-500/80" />
              </div>
              <span className="hidden sm:block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium">
                MT5 Trade Copier Interface
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-emerald-400 font-medium">
                <Zap className="h-3 w-3" />
                <span>LIVE SYNC READY</span>
              </div>
            </div>

            {/* High-Res Hero Image from feftradingsolutions.com */}
            <div className="relative overflow-hidden rounded-2xl mt-2 border border-white/5 bg-[#020408]/60">
              <img 
                src="/images/hero.png" 
                alt="FEF Professional Trade Copier MT5 dashboard and trade copying interface" 
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
              />
              
              {/* Vignette Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#05070d]/90 via-[#05070d]/50 to-transparent" />

              {/* Bottom Status Overlay */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex flex-wrap items-center justify-between gap-2.5 p-2.5 sm:p-3 rounded-xl fef-glass-card border border-white/15 backdrop-blur-xl">
                <p className="text-xs sm:text-sm font-medium text-white">
                  Clean monitoring for master and slave account activity
                </p>
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                  Live sync ready
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
