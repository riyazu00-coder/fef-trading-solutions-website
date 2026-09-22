import React from 'react';
import { Server, ExternalLink, CheckCircle, Clock, Zap } from 'lucide-react';

export const TradingViewOperations: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
      
      {/* 1. Official MQL5 Market Banner */}
      <div className="relative overflow-hidden rounded-[2.5rem] fef-glass-section p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
              Official Release
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Live on the{' '}
              <span className="fef-headline-gradient">
                MQL5 Market
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base font-normal text-slate-300">
              Purchase and access the official MetaTrader 5 version directly through the MQL5 Market ecosystem with secure delivery, licensing, and future automated updates.
            </p>
          </div>

          <a
            href="https://www.mql5.com/en/market/product/183557"
            target="_blank"
            rel="noopener noreferrer" className="focus-ring shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:scale-105 active:scale-95"
          >
            <span>Open MQL5 Market</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* 2. Operations Center & Growing Ecosystem Bento */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Operations Center */}
        <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
            <Server className="h-3 w-3" />
            Operations dashboard
          </div>
          <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            FEF <span className="fef-headline-gradient">Operations Center</span>
          </h3>
          <p className="mt-2 text-sm font-normal text-slate-300">
            A professional overview of product status, support availability and trading software operations.
          </p>

          <div className="mt-8 space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl fef-glass-card flex items-center justify-between">
              <span className="text-slate-300 font-medium">Trade Copier MT5 Engine</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle className="h-3.5 w-3.5" /> Operational (v1.0)
              </span>
            </div>
            <div className="p-4 rounded-xl fef-glass-card flex items-center justify-between">
              <span className="text-slate-300 font-medium">MQL5 Delivery Infrastructure</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle className="h-3.5 w-3.5" /> Synchronized
              </span>
            </div>
            <div className="p-4 rounded-xl fef-glass-card flex items-center justify-between">
              <span className="text-slate-300 font-medium">Customer Portal & Licensing</span>
              <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                <CheckCircle className="h-3.5 w-3.5" /> Active (99.98%)
              </span>
            </div>
            <div className="p-4 rounded-xl fef-glass-card flex items-center justify-between">
              <span className="text-slate-300 font-medium">Product Engineering Support</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Clock className="h-3.5 w-3.5" /> Mon - Fri Active
              </span>
            </div>
          </div>
        </div>

        {/* Growing Software Ecosystem */}
        <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
            <Zap className="h-3 w-3" />
            FEF Product Line
          </div>
          <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            A growing <span className="fef-headline-gradient">MetaTrader 5 software ecosystem</span>
          </h3>
          <p className="mt-2 text-sm font-normal text-slate-300">
            Start with the released Trade Copier and explore the upcoming FEF software roadmap for trading operations, risk control, and market scanning.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { name: 'FEF Professional Trade Copier MT5', status: 'Official Market Release', badge: 'Live on MQL5', color: 'text-emerald-400' },
              { name: 'FEF Manual Trade Manager PRO MT5', status: 'Advanced Risk Execution', badge: 'In Development', color: 'text-cyan-400' },
              { name: 'FEF Smart Trader MT5', status: 'Rapid Order Scaler', badge: 'In Roadmap', color: 'text-slate-400' },
              { name: 'FEF Gold Master EA MT5', status: 'Specialized XAUUSD Algorithmic EA', badge: 'Testing Phase', color: 'text-amber-400' },
            ].map((prod) => (
              <div key={prod.name} className="p-3.5 rounded-xl fef-glass-card flex items-center justify-between group">
                <div>
                  <h4 className="text-sm font-semibold text-white">{prod.name}</h4>
                  <p className="text-[11px] font-normal text-slate-400 mt-0.5">{prod.status}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium border border-white/10 bg-white/5 ${prod.color}`}>
                  {prod.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
