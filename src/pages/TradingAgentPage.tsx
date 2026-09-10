import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Activity,
  Lock,
  CheckCircle2,
} from 'lucide-react';

export const TradingAgentPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span>Public Research Preview</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Intelligent <span className="fef-headline-gradient">Trading Agent</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Autonomous Multi-Agent Market Intelligence Dashboard. A supervised research environment for market monitoring, quote provenance, and multi-agent analysis across metals, energy, and major foreign-exchange markets.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Lock className="h-3.5 w-3.5" />
            <span>Quote-only research mode. Execution remains strictly locked.</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <span>Request Research Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>View Product Matrix</span>
            </a>
          </div>
        </div>

        {/* Watchlist Preview */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { symbol: 'XAUUSD', label: 'Gold Spot', status: 'Demo verified' },
            { symbol: 'USOIL', label: 'Crude Oil', status: 'Preview feed' },
            { symbol: 'EURUSD', label: 'Euro / USD', status: 'Preview feed' },
            { symbol: 'GBPUSD', label: 'Pound / USD', status: 'Preview feed' },
            { symbol: 'USDJPY', label: 'USD / Yen', status: 'Preview feed' },
          ].map((item) => (
            <div key={item.symbol} className="p-4 rounded-xl fef-glass-card text-center">
              <p className="text-xs font-mono font-bold text-cyan-400">{item.symbol}</p>
              <p className="mt-1 text-xs text-white font-medium">{item.label}</p>
              <p className="mt-1 text-[10px] text-emerald-400 font-mono">{item.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Supervised Safety Boundaries */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-[2.5rem] fef-glass-card-static border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Relay Health Supervision</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Tracks freshness and stale-quote boundaries. Quote age is displayed continuously, warning operators if quote propagation degrades.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-[2.5rem] fef-glass-card-static border-red-500/30">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Safety State: Order Routing Unavailable</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                The agent is restricted to informational telemetry. No automated order placement, broker trade execution, or direct margin commitments are authorized.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence With Provenance Capabilities */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Telemetry Architecture</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Built to show what the system knows—<span className="fef-headline-gradient">and where data came from</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          The research dashboard keeps market context, feed health, and safety boundaries visible instead of presenting every data point as executable broker information.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'MT5 Quote Feed Monitoring',
              desc: 'Monitor validated broker quote snapshots through a dedicated, read-only relay architecture.',
            },
            {
              title: 'Multi-Agent Market Intelligence',
              desc: 'Bring specialist market perspectives into one structured research and supervision surface.',
            },
            {
              title: 'Five-Market Watchlist',
              desc: 'Track gold, crude oil, and major FX pairs across XAUUSD, USOIL, EURUSD, GBPUSD, and USDJPY.',
            },
            {
              title: 'Quote Provenance',
              desc: 'See whether a displayed price is a live broker quote, delayed reference, fallback, or simulated field.',
            },
            {
              title: 'Relay Health Visibility',
              desc: 'Surface quote age, relay freshness, and stale-data warnings before feeds are interpreted.',
            },
            {
              title: 'Supervised Research Mode',
              desc: 'Full audit logs of agent decisions, market context evaluations, and pattern classifications.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl fef-glass-card">
              <CheckCircle2 className="h-5 w-5 text-purple-400" />
              <h4 className="mt-4 text-base font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
