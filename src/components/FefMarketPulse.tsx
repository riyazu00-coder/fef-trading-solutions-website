import React from 'react';
import { Activity, Radio } from 'lucide-react';

export const FefMarketPulse: React.FC = () => {
  const markets = [
    {
      symbol: 'XAUUSD',
      name: 'Gold',
      price: '4,401.88',
      change: '-0.08%',
      isPositive: false,
      polyline: '0,10 18,15 34,13 52,21 70,18 88,27 106,30 124,35 140,32',
    },
    {
      symbol: 'EURUSD',
      name: 'Euro / Dollar',
      price: '1.16263',
      change: '+0.03%',
      isPositive: true,
      polyline: '0,32 18,27 34,28 52,20 70,22 88,14 106,16 124,8 140,10',
    },
    {
      symbol: 'GBPUSD',
      name: 'Pound / Dollar',
      price: '1.35374',
      change: '-0.03%',
      isPositive: false,
      polyline: '0,10 18,15 34,13 52,21 70,18 88,27 106,30 124,35 140,32',
    },
    {
      symbol: 'BTCUSD',
      name: 'Bitcoin',
      price: '78,800.01',
      change: '-0.39%',
      isPositive: false,
      polyline: '0,10 18,15 34,13 52,21 70,18 88,27 106,30 124,35 140,32',
    },
    {
      symbol: 'USDJPY',
      name: 'Dollar / Yen',
      price: '154.235',
      change: '-0.08%',
      isPositive: false,
      polyline: '0,10 18,15 34,13 52,21 70,18 88,27 106,30 124,35 140,32',
    },
    {
      symbol: 'USDCHF',
      name: 'Dollar / Swiss Franc',
      price: '0.80905',
      change: '-0.07%',
      isPositive: false,
      polyline: '0,10 18,15 34,13 52,21 70,18 88,27 106,30 124,35 140,32',
    },
  ];

  return (
    <section id="market-pulse" className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-electric/20 bg-[linear-gradient(135deg,rgba(11,18,32,0.92),rgba(5,7,13,0.94))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10 backdrop-blur-xl">
        <div className="site-grid absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/70 to-transparent" aria-hidden="true" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald/10 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-electric">
              <Activity className="h-4 w-4" />
              Live market snapshot
            </div>

            <h2 className="mt-6 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] text-white">FEF Market Pulse</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 font-normal text-steel">
              A professional snapshot of major markets for traders who monitor momentum, volatility and risk mood.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {markets.map((m) => (
                <div key={m.symbol} className="premium-card rounded-2xl border border-line bg-ink/55 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.24)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-lg font-semibold text-white">{m.symbol}</p>
                      <p className="mt-2 text-sm font-normal text-steel">{m.name}</p>
                    </div>
                    <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
                      Live
                    </span>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-xl sm:text-2xl font-semibold text-white">{m.price}</p>
                      <p className={`font-mono text-sm font-medium ${m.isPositive ? 'text-emerald' : 'text-red-300'}`}>
                        {m.change}
                      </p>
                    </div>

                    <div className="h-10 flex-1 overflow-hidden rounded bg-white/[0.04]">
                      <svg viewBox="0 0 140 42" className={`h-full w-full ${m.isPositive ? 'text-emerald/70' : 'text-red-300/70'}`} aria-hidden="true">
                        <polyline
                          points={m.polyline}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-6 font-normal text-steel">
              Market data is for informational display only and may be delayed. It is not financial advice.
            </p>
          </div>

          {/* Watchlist focus sidebar */}
          <div className="lg:self-stretch">
            <aside className="premium-card rounded-3xl border border-emerald/25 bg-panel/75 p-5 shadow-emerald lg:flex lg:h-full lg:flex-col lg:overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald">Trading Opportunities</p>
                  <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white">Watchlist focus</h3>
                </div>
                <Radio className="h-5 w-5 text-emerald" />
              </div>

              <div className="mt-4 space-y-2.5">
                <div className="rounded-2xl border border-line bg-ink/55 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-sm font-semibold text-white">Gold</p>
                      <p className="mt-1 text-xs font-normal leading-5 text-steel">Watching Breakout</p>
                    </div>
                    <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
                      Medium Risk
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <p className="uppercase tracking-[0.18em] text-steel font-medium">Bias</p>
                      <p className="mt-1 font-medium text-white">Bullish</p>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <p className="uppercase tracking-[0.18em] text-steel font-medium">Risk</p>
                      <p className="mt-1 font-medium text-white">Medium</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-ink/55 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-sm font-semibold text-white">EURUSD</p>
                      <p className="mt-1 text-xs font-normal leading-5 text-steel">Waiting Confirmation</p>
                    </div>
                    <span className="rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-xs font-medium text-steel">
                      Low Risk
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <p className="uppercase tracking-[0.18em] text-steel font-medium">Bias</p>
                      <p className="mt-1 font-medium text-white">Neutral</p>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <p className="uppercase tracking-[0.18em] text-steel font-medium">Risk</p>
                      <p className="mt-1 font-medium text-white">Low</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-ink/55 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-sm font-semibold text-white">BTCUSD</p>
                      <p className="mt-1 text-xs font-normal leading-5 text-steel">Momentum Active</p>
                    </div>
                    <span className="rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
                      High Risk
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <p className="uppercase tracking-[0.18em] text-steel font-medium">Bias</p>
                      <p className="mt-1 font-medium text-white">Bullish</p>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <p className="uppercase tracking-[0.18em] text-steel font-medium">Risk</p>
                      <p className="mt-1 font-medium text-white">High</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-ink/55 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-sm font-semibold text-white">USDJPY</p>
                      <p className="mt-1 text-xs font-normal leading-5 text-steel">Yen momentum watch</p>
                    </div>
                    <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
                      Medium Risk
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <p className="uppercase tracking-[0.18em] text-steel font-medium">Bias</p>
                      <p className="mt-1 font-medium text-white">Bullish</p>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <p className="uppercase tracking-[0.18em] text-steel font-medium">Risk</p>
                      <p className="mt-1 font-medium text-white">Medium</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
