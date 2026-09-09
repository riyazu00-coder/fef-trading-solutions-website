import React from "react";
import { Bot, Cpu, Sparkles, ArrowRight } from "lucide-react";

export const TradingAgentPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Autonomous Intelligence</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Intelligent <span className="fef-headline-gradient">Trading Agent</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Next-generation autonomous market monitoring agents designed to evaluate multi-timeframe structural volatility, filter high-spread conditions, and notify operators of high-probability setups.
          </p>
        </div>
      </div>
    </div>
  );
};
