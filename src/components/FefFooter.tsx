import React from 'react';
import { BadgeCheck, Layers, Download, Headphones, ExternalLink } from 'lucide-react';

export const FefFooter: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink/90 backdrop-blur-xl">
      <div className="site-grid absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Upper Callout Card */}
        <section className="overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_20%_15%,rgba(29,168,255,0.20),transparent_22rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(8,45,35,0.84))] p-6 shadow-glow sm:p-8 lg:p-10 backdrop-blur-md">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald">
                <BadgeCheck className="h-4 w-4" />
                FEF Trading Solutions
              </span>

              <h2 className="mt-6 max-w-3xl text-balance text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
                Build a professional <span className="text-gradient">MT5 software workflow</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 font-normal text-steel">
                Connect official FEF products, documentation, downloads and support into one software ecosystem.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a 
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-gradient px-5 py-3 text-sm font-medium text-[#05070d] shadow-glow transition hover:brightness-110 active:scale-95" 
                href="#hero"
              >
                View Products
              </a>

              <a 
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-electric/70 hover:bg-electric/10" 
                href="#copier-workflow"
              >
                Visit Downloads
              </a>
            </div>
          </div>
        </section>

        {/* Lower Main Footer Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          
          {/* Brand Card */}
          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric via-cyan to-emerald p-[1.5px] shadow-glow">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-ink font-bold text-white text-base tracking-tighter">
                  <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">FEF</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-lg text-white tracking-tight leading-none">
                  FEF TRADING SOLUTIONS
                </span>
                <span className="text-[10px] font-medium tracking-widest text-steel uppercase leading-tight mt-1">
                  Professional MT5 Software
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-steel">
              Professional MetaTrader 5 software for trade copying, manual trade management, documentation, downloads and support workflows.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                MT5 Software
              </span>
              <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                MQL5 Market Products
              </span>
              <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                Documentation & Support
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-line bg-ink/55 p-4 text-center">
                <Layers className="h-5 w-5 text-electric mx-auto mb-2" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Products</p>
                <p className="mt-1 text-sm font-bold text-white">MT5 tools</p>
              </div>
              <div className="rounded-2xl border border-line bg-ink/55 p-4 text-center">
                <Download className="h-5 w-5 text-electric mx-auto mb-2" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Center</p>
                <p className="mt-1 text-sm font-bold text-white">Downloads</p>
              </div>
              <div className="rounded-2xl border border-line bg-ink/55 p-4 text-center">
                <Headphones className="h-5 w-5 text-electric mx-auto mb-2" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Support</p>
                <p className="mt-1 text-sm font-bold text-white">24 Hours</p>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Products</h4>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li><a href="#hero" className="hover:text-white transition">Trade Copier MT5</a></li>
                <li><a href="#copier-workflow" className="hover:text-white transition">Manual Trade Manager</a></li>
                <li><a href="#ai-section" className="hover:text-white transition">Trading Agent</a></li>
                <li><a href="https://www.mql5.com/en/market/product/183557" target="_blank" rel="noreferrer" className="text-electric hover:underline flex items-center gap-1">Buy on MQL5 <ExternalLink className="h-3 w-3" /></a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Resources</h4>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li><a href="#copier-workflow" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#hero" className="hover:text-white transition">Downloads</a></li>
                <li><a href="#market-pulse" className="hover:text-white transition">Market Pulse</a></li>
                <li><a href="#hero" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Support</h4>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li><a href="#ai-section" className="hover:text-white transition">Support Center</a></li>
                <li><a href="#ai-section" className="hover:text-white transition">Contact FEF</a></li>
                <li><a href="https://www.mql5.com/en/market/product/183557" target="_blank" rel="noreferrer" className="hover:text-white transition">MQL5 Community</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel">
          <p>© 2026 FEF Trading Solutions. All rights reserved.</p>
          <p className="font-mono text-[11px] text-emerald">Official MQL5 Market Partner</p>
        </div>

      </div>
    </footer>
  );
};
