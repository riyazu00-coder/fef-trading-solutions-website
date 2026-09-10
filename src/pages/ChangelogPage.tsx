import React from 'react';
import { Clock, CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react';

export const ChangelogPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Clock className="h-3.5 w-3.5" />
            <span>Release History</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Product <span className="fef-headline-gradient">Changelog & Releases</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Continuous engineering updates, version release tracking, and architectural optimizations across the FEF Trading Solutions suite.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Trade Copier v1.0 */}
        <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                v1.0.0 Stable
              </span>
              <span className="text-xs text-slate-400 font-mono">Official MQL5 Release</span>
            </div>
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline"
            >
              <span>MQL5 Product #183557</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-white">
            FEF Professional Trade Copier MT5 Official Launch
          </h3>
          <p className="mt-2 text-sm text-slate-300 font-normal leading-relaxed">
            Initial production release published to the official MQL5 Market with low-latency memory synchronization and cross-broker symbol mapping.
          </p>

          <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Local memory IPC pipe for sub-millisecond replication</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Prefix & suffix broker symbol translator (e.g. XAUUSD vs. XAUUSDm)</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Automated position volume scaling and equity risk protection</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Heartbeat connection supervisor with automatic requote retry queue</span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10">
            <a href="/documentation/trade-copier-setup" className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:underline">
              <span>View Trade Copier Setup Guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Manual Trade Manager Pro v1.0 */}
        <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                v1.0.0 Stable
              </span>
              <span className="text-xs text-slate-400 font-mono">Official MQL5 Release</span>
            </div>
            <a
              href="https://www.mql5.com/en/market/product/183695"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline"
            >
              <span>MQL5 Product #183695</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-white">
            FEF Manual Trade Manager Pro MT5 Official Launch
          </h3>
          <p className="mt-2 text-sm text-slate-300 font-normal leading-relaxed">
            Initial production release of the on-chart trade management dashboard for MetaTrader 5, engineered specifically for managing trader-initiated positions.
          </p>

          <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Strict manual trade management (no automatic entry signals)</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Automated Stop Loss and Take Profit attachment upon position detection</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Intelligent breakeven lock with configurable trigger distances</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Fixed points and ATR volatility-adjusted trailing stop mechanisms</span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10">
            <a href="/documentation/manual-trade-manager-setup" className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:underline">
              <span>View Manual Trade Manager Setup Guide</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
