import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Activity,
  Lock,
  CheckCircle2,
  ExternalLink,
  MonitorUp,
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
              href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <span>Request Research Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/products" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
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

      {/* Live FEF Trading App */}
      <section className="agent-live-app relative overflow-hidden rounded-[2.5rem] border border-cyan-400/15 bg-[#060912]/95 p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(34,211,238,0.10),transparent_36%),radial-gradient(circle_at_18%_78%,rgba(168,85,247,0.09),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />

        <div className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.17em] text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                FEF Trading App
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                See the intelligence workspace
                <span className="fef-headline-gradient"> in the real application.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Open the FEF Trading App cockpit to access the live application
                interface connected to the broader FEF trading intelligence
                experience.
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.045] p-4">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                <p className="text-xs leading-6 text-slate-400">
                  Trading Agent capabilities remain supervised and informational.
                  Automated broker execution is not represented by this interface.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://app.feftradingsolutions.com/cockpit"
                  target="_blank"
                  rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-[#05070d] shadow-glow transition hover:brightness-110"
                >
                  <span>Open FEF Trading App</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href="/trading-technology" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400/35 hover:bg-white/10"
                >
                  <span>Trading Technology</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400">
                <MonitorUp className="h-4 w-4 text-cyan-300" />
                Live application interface
              </div>
            </div>
          </div>

          <a
            href="https://app.feftradingsolutions.com/cockpit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open FEF Trading App cockpit" className="agent-live-app-screen group relative mt-10 block overflow-hidden rounded-[1.4rem] border border-cyan-400/20 bg-[#04070d] shadow-[0_40px_100px_rgba(0,0,0,0.50),0_0_65px_rgba(34,211,238,0.06)]"
          >
            <div className="grid min-h-12 grid-cols-[1fr_auto_1fr] items-center border-b border-white/[0.07] bg-[#0a1019]/95 px-4">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-600" />
                <span className="h-2 w-2 rounded-full bg-purple-400/60" />
                <span className="h-2 w-2 rounded-full bg-cyan-400/70" />
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-5 py-1.5 font-mono text-[9px] tracking-[0.1em] text-slate-500 sm:text-[10px]">
                app.feftradingsolutions.com/cockpit
              </div>

              <ExternalLink className="ml-auto h-3.5 w-3.5 text-slate-500 transition group-hover:text-cyan-300" />
            </div>

            <div className="relative overflow-hidden">
              <img
                src="/images/trading-technology.png"
                alt="FEF Trading App cockpit interface" className="block h-auto w-full transition duration-700 group-hover:scale-[1.012]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-400/[0.02] via-transparent to-cyan-400/[0.025]" />
            </div>
          </a>

          <div className="mt-5 flex items-start gap-2.5 text-xs leading-6 text-slate-500">
            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-400" />
            <span>
              Actual FEF Trading App interface shown above. Research and
              intelligence features remain subject to the safety boundaries
              described on this page.
            </span>
          </div>
        </div>
      </section>

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
