import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const LegalPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Compliance & Legal</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Legal Notices & <span className="fef-headline-gradient">Risk Disclaimers</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Important legal, trademark, and financial risk disclosures regarding FEF Trading Solutions software and services.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="p-8 rounded-[2rem] fef-glass-card-static border-amber-500/30">
          <h3 className="text-lg font-semibold text-amber-400">Financial Risk Warning</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            Trading financial markets, foreign exchange, contracts for difference (CFDs), and commodities involves significant risk of capital loss. FEF Trading Solutions develops software tools, execution assistants, and automated synchronization utilities only. We do not provide financial, investment, or trading advice. Past performance does not guarantee future results. Always test software on demo accounts prior to live capital deployment.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h3 className="text-lg font-semibold text-white">Trademark Notice</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            MetaTrader 5, MetaTrader, and MT5 are registered trademarks of MetaQuotes Software Corp. FEF Trading Solutions is an independent software development entity and is not affiliated with or endorsed by MetaQuotes Software Corp.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h3 className="text-lg font-semibold text-white">Privacy & Licensing Terms</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            Product licensing for MetaTrader 5 software is administered through the official MQL5 Market platform. No private credentials or broker login passwords are ever transmitted or stored on FEF Trading Solutions external servers. All trade copying executes locally through client terminal IPC memory.
          </p>
        </div>
      </div>
    </div>
  );
};
