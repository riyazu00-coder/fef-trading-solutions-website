import React from 'react';
import { Server, ExternalLink, CheckCircle, Clock, Zap } from 'lucide-react';

export const TradingViewOperations: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">

      {/* 1. Official MQL5 Market Banner */}
      <div className="relative overflow-hidden rounded-[2.5rem] fef-glass-cta p-8 sm:p-12 shadow-sm">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200/80">
              Official Release
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.015em] text-[#080B1D] uppercase">
              Live on the{' '}
              <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
                MQL5 Market
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base font-normal text-[#536078]">
              Purchase and access the official MetaTrader 5 version directly through the MQL5 Market ecosystem with secure delivery, licensing, and future automated updates.
            </p>
          </div>

          <a
            href="https://www.mql5.com/en/market/product/183557"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-[0_6px_22px_rgba(69,201,245,0.32)] transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Open MQL5 Market</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* 2. Operations Center & Growing Ecosystem Bento */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Operations Center */}
        <div className="relative rounded-[2.5rem] fef-glass-primary p-8 sm:p-10 overflow-hidden shadow-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80">
            <Server className="h-3 w-3" />
            Operations dashboard
          </div>
          <h3 className="mt-4 text-xl sm:text-2xl font-black text-[#080B1D] uppercase">
            FEF <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">Operations Center</span>
          </h3>
          <p className="mt-2 text-sm font-normal text-[#536078]">
            A professional overview of product status, support availability and trading software operations.
          </p>

          <div className="mt-8 space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl fef-glass-secondary flex items-center justify-between">
              <span className="text-[#080B1D] font-medium">Trade Copier MT5 Engine</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <CheckCircle className="h-3.5 w-3.5" /> Operational (v1.0)
              </span>
            </div>
            <div className="p-4 rounded-xl fef-glass-secondary flex items-center justify-between">
              <span className="text-[#080B1D] font-medium">MQL5 Delivery Infrastructure</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <CheckCircle className="h-3.5 w-3.5" /> Synchronized
              </span>
            </div>
            <div className="p-4 rounded-xl fef-glass-secondary flex items-center justify-between">
              <span className="text-[#080B1D] font-medium">Customer Portal & Licensing</span>
              <span className="flex items-center gap-1.5 text-cyan-600 font-semibold">
                <CheckCircle className="h-3.5 w-3.5" /> Operational
              </span>
            </div>
            <div className="p-4 rounded-xl fef-glass-secondary flex items-center justify-between">
              <span className="text-[#080B1D] font-medium">Product Engineering Support</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <Clock className="h-3.5 w-3.5" /> Mon - Fri Active
              </span>
            </div>
          </div>
        </div>

        {/* Growing Software Ecosystem */}
        <div className="relative rounded-[2.5rem] fef-glass-primary p-8 sm:p-10 overflow-hidden shadow-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200/80">
            <Zap className="h-3 w-3" />
            FEF Product Line
          </div>
          <h3 className="mt-4 text-xl sm:text-2xl font-black text-[#080B1D] uppercase">
            A growing <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">MetaTrader 5 ecosystem</span>
          </h3>
          <p className="mt-2 text-sm font-normal text-[#536078]">
            Start with the released Trade Copier and explore the upcoming FEF software roadmap for trading operations, risk control, and market scanning.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { name: 'FEF Professional Trade Copier MT5', status: 'Official Market Release', badge: 'Live on MQL5', badgeClass: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
              { name: 'FEF Manual Trade Manager PRO MT5', status: 'Advanced Risk Execution', badge: 'In Development', badgeClass: 'text-cyan-700 bg-cyan-50 border-cyan-200' },
              { name: 'FEF Smart Trader MT5', status: 'Rapid Order Scaler', badge: 'In Roadmap', badgeClass: 'text-[#536078] bg-slate-100 border-slate-200' },
              { name: 'FEF Gold Master EA MT5', status: 'Specialized XAUUSD Algorithmic EA', badge: 'Testing Phase', badgeClass: 'text-amber-700 bg-amber-50 border-amber-200' },
            ].map((prod) => (
              <div key={prod.name} className="p-3.5 rounded-xl fef-glass-secondary flex items-center justify-between group hover:border-cyan-400/50 transition">
                <div>
                  <h4 className="text-sm font-bold text-[#080B1D]">{prod.name}</h4>
                  <p className="text-[11px] font-normal text-[#536078] mt-0.5">{prod.status}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${prod.badgeClass}`}>
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
