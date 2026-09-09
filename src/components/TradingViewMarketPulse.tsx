import React, { useState, useEffect } from 'react';
import { Activity, Radio, TrendingUp, TrendingDown } from 'lucide-react';
import { 
  MarketQuote, 
  WatchlistItem, 
  initialQuotes, 
  initialWatchlist, 
  fetchLiveMarketData 
} from '../services/marketData';

export const TradingViewMarketPulse: React.FC = () => {
  const [quotes, setQuotes] = useState<MarketQuote[]>(initialQuotes);
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(initialWatchlist);

  useEffect(() => {
    let isMounted = true;

    const loadLiveData = async () => {
      try {
        const data = await fetchLiveMarketData();
        if (isMounted) {
          setQuotes(data.quotes);
          setWatchlist(data.watchlist);
        }
      } catch (err) {
        console.warn('Market pulse feed update notice:', err);
      }
    };

    // Immediate initial sync
    loadLiveData();

    // Auto-refresh interval every 12 seconds for continuous live updates
    const interval = setInterval(loadLiveData, 12000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="relative rounded-[2.5rem] fef-glass-section p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        {/* Header */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-xs font-medium uppercase tracking-[0.2em]">
              <Activity className="h-3.5 w-3.5" />
              Live market snapshot
            </div>

            <h2 className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              FEF{' '}
              <span className="bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent">
                Market Pulse
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg font-normal text-slate-300 max-w-2xl leading-relaxed">
              A professional snapshot of major markets for traders who monitor momentum, volatility and risk mood.
            </p>

            {/* 6 Market Quote Cards in Responsive Grid */}
            <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {quotes.map((q) => (
                <div 
                  key={q.symbol}
                  className="p-4 rounded-2xl fef-glass-card group transition duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-base font-semibold text-white group-hover:text-cyan-400 transition">{q.symbol}</p>
                      <p className="text-xs font-normal text-slate-400 mt-0.5">{q.name}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                      </span>
                      Live
                    </span>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-xl font-semibold text-white tracking-tight">{q.price}</p>
                      <p className={`font-mono text-xs font-medium mt-0.5 flex items-center gap-1 ${q.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {q.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {q.change}
                      </p>
                    </div>

                    {/* Mini Sparkline Chart */}
                    <div className="h-9 w-24 overflow-hidden rounded bg-white/[0.04] p-1">
                      <svg viewBox="0 0 140 42" className={`h-full w-full ${q.isPositive ? 'text-emerald-400' : 'text-red-400'} transition-colors duration-500`}>
                        <polyline
                          points={q.points}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 p-3.5 rounded-xl fef-glass-card-static text-xs font-normal text-slate-400">
              Market data is for informational display only and may be delayed. It is not financial advice.
            </p>
          </div>

          {/* Right Column: Watchlist Focus Sidebar */}
          <div className="lg:sticky lg:top-24">
            <aside className="p-5 sm:p-6 rounded-[2rem] fef-glass-card-static border border-emerald-500/30 shadow-[0_0_35px_rgba(25,215,135,0.12)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-400">Trading Opportunities</p>
                  <h3 className="mt-1 text-lg sm:text-xl font-semibold text-white">
                    Watchlist{' '}
                    <span className="bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent">
                      Focus
                    </span>
                  </h3>
                </div>
                <Radio className="h-5 w-5 text-emerald-400 animate-pulse" />
              </div>

              <div className="mt-5 space-y-3">
                {watchlist.map((item) => (
                  <div key={item.name} className="p-3.5 rounded-xl fef-glass-card">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-sm font-semibold text-white">{item.name}</p>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs font-normal text-slate-400 mt-1">{item.status}</p>

                    <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Bias</p>
                        <p className="font-medium text-white mt-0.5">{item.bias}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Risk</p>
                        <p className="font-medium text-white mt-0.5">{item.risk}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>

      </div>
    </section>
  );
};

