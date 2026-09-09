import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

export const ChangelogPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Clock className="h-3.5 w-3.5" />
            <span>Version History</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Product <span className="fef-headline-gradient">Changelog & Releases</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Continuous engineering updates and architectural optimizations across the FEF Trading Solutions suite.
          </p>
        </div>
      </div>

      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            v1.0.0
          </span>
          <span className="text-xs text-slate-400 font-mono">Official Release</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white">FEF Professional Trade Copier MT5 Official Launch</h3>
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
            <span>Prefix & suffix broker symbol translator</span>
          </li>
          <li className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Automated position volume scaling and equity risk protection</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
