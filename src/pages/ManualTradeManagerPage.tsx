import React from "react";
import { Terminal, ShieldCheck, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export const ManualTradeManagerPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Zap className="h-3.5 w-3.5" />
            <span>Execution Technology</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Manual <span className="fef-headline-gradient">Trade Manager PRO MT5</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            An advanced manual order execution and trade management dashboard for MetaTrader 5, enabling 1-click risk-calculated entries, automated partial close stages, and intelligent breakeven trailing stops.
          </p>
          <div className="mt-8">
            <span className="inline-block px-4 py-2 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/30">
              Status: In Active Engineering Roadmap
            </span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-8 rounded-[2rem] fef-glass-card">
          <h3 className="text-xl font-semibold text-white">Dynamic Risk Sizing</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal">Calculates exact lot size based on custom account risk percentage and stop-loss distance automatically.</p>
        </div>
        <div className="p-8 rounded-[2rem] fef-glass-card">
          <h3 className="text-xl font-semibold text-white">Multi-Target Partials</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal">Locks in tiered profits and automatically moves stop losses to breakeven upon target milestone execution.</p>
        </div>
        <div className="p-8 rounded-[2rem] fef-glass-card">
          <h3 className="text-xl font-semibold text-white">Keyboard Execution</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal">Zero-friction rapid order scalping with customizable hotkeys for news breakout events.</p>
        </div>
      </div>
    </div>
  );
};
