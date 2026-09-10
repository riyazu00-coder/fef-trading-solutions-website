import React from 'react';
import { ExternalLink, BadgeCheck, ShieldCheck, Activity } from 'lucide-react';

export const FefHero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-24">
      <div className="site-grid absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          
          {/* Official MQL5 Market Product Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-medium text-emerald shadow-emerald">
            <span className="h-2 w-2 rounded-full bg-emerald shadow-emerald animate-pulse" />
            Official MQL5 Market Product
          </div>

          {/* Original FEF Headline */}
          <h1 className="mt-8 text-balance text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.015em] leading-[1.15] text-white">
            FEF Professional{' '}
            <span className="bg-gradient-to-r from-electric via-cyan to-emerald bg-clip-text text-transparent">
              Trade Copier MT5
            </span>
          </h1>

          {/* Original FEF Subtitle */}
          <p className="mx-auto mt-7 max-w-3xl text-lg sm:text-xl leading-8 font-normal text-steel">
            Professional Master/Slave Trade Copier for MetaTrader 5. Exact mirror, every trade, every time.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a 
              href="https://www.mql5.com/en/market/product/183557" 
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition bg-brand-gradient text-[#05070d] shadow-glow hover:brightness-110 active:scale-95" 
              target="_blank" 
              rel="noreferrer"
            >
              <span>Buy on MQL5</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a 
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition border border-line bg-white/[0.04] text-white hover:border-electric/70 hover:bg-electric/10" 
              href="#copier-workflow"
            >
              <span>View Documentation</span>
            </a>
          </div>

          {/* 3 Original FEF Feature Badges */}
          <div className="mx-auto mt-11 grid max-w-4xl gap-4 text-sm font-medium text-steel sm:grid-cols-3">
            <div className="premium-card rounded-2xl border border-line bg-panel/75 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <BadgeCheck className="mx-auto mb-3 h-5 w-5 text-electric" />
              Official Market Release
            </div>

            <div className="premium-card rounded-2xl border border-line bg-panel/75 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <ShieldCheck className="mx-auto mb-3 h-5 w-5 text-electric" />
              Secure MQL5 Delivery
            </div>

            <div className="premium-card rounded-2xl border border-line bg-panel/75 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <Activity className="mx-auto mb-3 h-5 w-5 text-electric" />
              Real-Time Synchronization
            </div>
          </div>
        </div>

        {/* Original FEF Dashboard Interface Card */}
        <div className="relative mt-16 lg:mt-20">
          <div className="absolute -inset-x-6 bottom-0 top-12 rounded-[2rem] bg-electric/10 blur-3xl pointer-events-none" aria-hidden="true" />
          
          <div className="premium-card relative overflow-hidden rounded-[2rem] border border-electric/30 bg-panel/85 p-2.5 shadow-[0_30px_110px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald shadow-emerald" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-electric/80" />
              </div>
              <p className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-steel sm:block">
                MT5 Trade Copier Interface
              </p>
              <div className="flex items-center gap-2 font-mono text-[11px] text-emerald">
                <span className="h-2 w-2 rounded-full bg-emerald animate-ping" />
                <span>SYNC RUNNING (0.02ms)</span>
              </div>
            </div>

            {/* Dashboard Display Content */}
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-ink/90 p-5 sm:p-8">
              
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Master Account Panel */}
                <div className="rounded-2xl border border-electric/25 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-white uppercase">Master Terminal</span>
                    <span className="rounded bg-electric/15 px-2 py-0.5 font-mono text-[10px] text-electric font-bold">TRANSMITTER</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-steel">
                      <span>MT5 Login:</span>
                      <strong className="text-white font-bold">#8492019</strong>
                    </div>
                    <div className="flex justify-between text-steel">
                      <span>Server / Broker:</span>
                      <strong className="text-white">IC Markets Raw</strong>
                    </div>
                    <div className="flex justify-between text-steel">
                      <span>Active Orders:</span>
                      <strong className="text-cyan font-bold">4 Positions</strong>
                    </div>
                    <div className="flex justify-between text-steel">
                      <span>Floating P&L:</span>
                      <strong className="text-emerald font-bold">+$2,840.00</strong>
                    </div>
                  </div>
                </div>

                {/* Copier Engine Panel */}
                <div className="rounded-2xl border border-emerald/25 bg-emerald/5 p-5 shadow-emerald">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-emerald uppercase">FEF Sync Engine</span>
                    <span className="rounded bg-emerald/15 px-2 py-0.5 font-mono text-[10px] text-emerald font-bold">ACTIVE</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-steel">
                      <span>Speed:</span>
                      <strong className="text-emerald font-bold">0.019ms latency</strong>
                    </div>
                    <div className="flex justify-between text-steel">
                      <span>Symbol Auto-Resolver:</span>
                      <strong className="text-white">GOLD ➔ XAUUSD</strong>
                    </div>
                    <div className="flex justify-between text-steel">
                      <span>Sizing Mode:</span>
                      <strong className="text-cyan font-bold">Dynamic Multiplier</strong>
                    </div>
                    <div className="flex justify-between text-steel">
                      <span>Slippage Check:</span>
                      <strong className="text-white">Max 3 Pips</strong>
                    </div>
                  </div>
                </div>

                {/* Connected Slaves Panel */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-white uppercase">Slave Desks</span>
                    <span className="rounded bg-white/[0.1] px-2 py-0.5 font-mono text-[10px] text-steel">4 ACCOUNTS</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-black/40 p-2">
                      <span className="text-slate-300">Slave 1 (FTMO $100k)</span>
                      <span className="text-emerald font-bold">SYNC (1.0x)</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-black/40 p-2">
                      <span className="text-slate-300">Slave 2 (FundedNext)</span>
                      <span className="text-emerald font-bold">SYNC (2.0x)</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-black/40 p-2">
                      <span className="text-slate-300">Slave 3 (Personal Raw)</span>
                      <span className="text-emerald font-bold">SYNC (1.0x)</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-black/40 p-2">
                      <span className="text-slate-300">Slave 4 (Evaluation)</span>
                      <span className="text-emerald font-bold">SYNC (0.5x)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer bar inside preview */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-ink/80 px-4 py-3 backdrop-blur">
                <p className="text-sm font-semibold text-white">
                  Clean monitoring for master and slave account activity
                </p>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald">
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
