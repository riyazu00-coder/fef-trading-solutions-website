import React from 'react';
import {
  ExternalLink,
  Zap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const ManualTradeManagerPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Zap className="h-3.5 w-3.5" />
            <span>Available on MQL5 Market</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Manual <span className="fef-headline-gradient">Trade Manager Pro MT5</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            A professional manual trade management dashboard for MetaTrader 5, built for traders who want structured SL/TP handling, breakeven, trailing stops, partial close, and visual market context.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.mql5.com/en/market/product/183695"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:scale-105 active:scale-95"
            >
              <span>Buy on MQL5 Market</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/documentation/manual-trade-manager-setup"
              className="focus-ring inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <BookOpen className="h-4 w-4" />
              <span>Setup Guide</span>
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl fef-glass-card text-center">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Focus</p>
            <p className="mt-1 text-base font-semibold text-white">Manual Control</p>
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-center">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Platform</p>
            <p className="mt-1 text-base font-semibold text-white">MT5 Dashboard</p>
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-center">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Signals</p>
            <p className="mt-1 text-base font-semibold text-white">No Auto Signals</p>
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-center">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Delivery</p>
            <p className="mt-1 text-base font-semibold text-white">MQL5 Market</p>
          </div>
        </div>
      </div>

      {/* Product Positioning */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card-static border-cyan-400/30">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Product Positioning</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Built for manual trade control, not automatic entry signals
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF Manual Trade Manager Pro MT5 supports the trader after a manual decision has been made. It is focused on structured position handling, monitoring, and visual context while the trader remains in complete control of entries and risk decisions.
          </p>
        </div>
      </div>

      {/* Core Management Capabilities */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Capabilities</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Controls for active <span className="fef-headline-gradient">manual trade management</span>
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Manual Trade Protection',
              desc: 'Designed to help operators protect manually opened positions with structured management controls.',
            },
            {
              title: 'SL/TP Automation',
              desc: 'Apply configured stop loss and take profit handling to eligible manual trades when rules permit.',
            },
            {
              title: 'Breakeven Logic',
              desc: 'Move stops toward breakeven according to configured profit thresholds and operator preferences.',
            },
            {
              title: 'Trailing Stop Control',
              desc: 'Use trailing logic to manage protected positions while maintaining manual oversight.',
            },
            {
              title: 'Partial Close Workflow',
              desc: 'Support staged position reduction workflows for traders who scale out of manually managed trades.',
            },
            {
              title: 'Visual Market Assistant',
              desc: 'Bring live market context into the trading workspace without presenting entries as automatic signals.',
            },
            {
              title: 'Current-Symbol Isolation',
              desc: 'Option to restrict management strictly to the chart symbol to prevent cross-instrument interference.',
            },
            {
              title: 'Fixed Points vs. ATR Trailing',
              desc: 'Support both static point distances and ATR volatility-adjusted trailing distances.',
            },
            {
              title: 'Magic Number Discrimination',
              desc: 'Filter which positions are managed so algorithmic EA trades remain unaffected.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl fef-glass-card flex flex-col justify-between">
              <div>
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <h4 className="mt-4 text-base font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Table */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Technical <span className="fef-headline-gradient">Specifications</span>
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="fef-glass-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Specification</th>
                <th>Operational Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Platform</td>
                <td>MetaTrader 5 (MT5)</td>
                <td>Chart-attached Expert Advisor HUD</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Signal Nature</td>
                <td>No Automatic Signals</td>
                <td>Manages existing trader-initiated positions</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Stop Management</td>
                <td>Auto SL, TP, Breakeven, Trailing</td>
                <td>Customizable point & ATR distance modes</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Partial Exits</td>
                <td>Multi-tier volume scaling</td>
                <td>Configurable percent-based position scaling</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Delivery Mode</td>
                <td>MQL5 Market (183695)</td>
                <td>Verified licensing with auto-updates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Callout to Setup Guide */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-section flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">Need setup instructions?</h3>
          <p className="mt-2 text-sm text-slate-300">
            Learn how to attach the EA, configure SL/TP parameters, and test safely on demo.
          </p>
        </div>
        <a
          href="/documentation/manual-trade-manager-setup"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition shrink-0"
        >
          <span>Read Setup Guide</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
