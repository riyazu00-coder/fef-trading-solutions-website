import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export const RiskDisclaimerPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden border-red-500/20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold tracking-wider uppercase">
            <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
            <span>RISK DISCLOSURE</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Risk <span className="fef-headline-gradient">Disclaimer</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            FEF Trading Solutions provides trading software, workflow tools, market display features, and product documentation for MetaTrader 5 users. The information on this website and inside our tools is provided for educational, operational, and informational purposes only.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-xl fef-glass-card text-xs text-red-200 border-red-500/20">
            Trading risk remains with the user
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Software supports workflows only
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Market data is informational
          </div>
        </div>
      </div>

      {/* Core Risk Boundaries */}
      <div className="space-y-6">
        <div className="p-8 rounded-[2rem] fef-glass-card-static border-red-500/25 bg-red-500/[0.03]">
          <h2 className="text-xl font-semibold text-white">1. No Financial Advice</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF Trading Solutions does not provide financial advice, investment advice, trading signals, portfolio management, or personalized recommendations. Users are solely responsible for their own trading decisions, account activity, position sizing, order placement, and risk management choices.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static border-red-500/25 bg-red-500/[0.03]">
          <h2 className="text-xl font-semibold text-white">2. Trading Risk</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Trading foreign exchange (Forex), contracts for difference (CFDs), metals, commodities, equities, and cryptocurrencies carries a high level of risk and may not be suitable for all investors. Leverage creates additional risk and loss exposure. Losses may exceed expectations depending on broker conditions, leverage, volatility, execution speed, spreads, slippage, and market gaps. You should trade only with capital you can afford to lose.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">3. Software Usage</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            FEF products are software tools to assist workflow and trade management. Software cannot guarantee profits, prevent losses, or remove market risk. Users must test products on demo accounts before live use. Users are responsible for product settings, broker compatibility, VPS stability, internet connection, platform permissions, and account risk.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">4. Market Data And Dashboard Information</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Market Pulse and any market display data are informational only. Data may be delayed, unavailable, inaccurate, or interrupted due to provider, API, or network issues. Market display information should not be used as the sole basis for trading decisions.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">5. Third-Party Platforms And Links</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Products may be available through MQL5 Market or other third-party platforms. Third-party platforms have their own terms, conditions, payment rules, licensing rules, and refund policies. FEF Trading Solutions is not responsible for third-party platform outages, account issues, or policy changes.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card-static">
          <h2 className="text-xl font-semibold text-white">6. User Responsibility</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Users should understand product settings before using them. Users should read documentation, test carefully, and consult qualified financial professionals where needed. By using this website or products, users accept full responsibility for their own decisions and financial risks.
          </p>
        </div>

        {/* Final Warning Callout */}
        <div className="p-8 rounded-[2rem] fef-glass-section border-red-500/30 bg-red-500/[0.05]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-300">Final Mandatory Precaution</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Use live accounts only when you understand the risks
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
                If you do not understand the risks involved in trading or using trading software, do not use the software on a live account until you have obtained sufficient knowledge or professional guidance.
              </p>
            </div>
            <a
              href="/documentation" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition shrink-0"
            >
              <span>Read Documentation</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
