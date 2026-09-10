import React from 'react';
import { TrendingUp, ShieldAlert, ArrowRight, Activity, Server, Radio, CheckCircle } from 'lucide-react';

export const TradingTechVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl bg-[#060b16]/70 border border-white/10 p-4 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Top Header: Market Ticker & MT5 Bridge */}
      <div className="relative z-10 flex items-center justify-between gap-2 pb-2.5 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
            EUR/USD
          </span>
          <span className="text-white font-semibold">1.08942</span>
          <span className="text-emerald-400 text-[10px]">+0.48%</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>MT5 Bridge: 0.2ms</span>
        </div>
      </div>

      {/* Center: Live Institutional Candlestick & Trend Chart */}
      <div className="relative z-10 my-auto py-1">
        
        {/* SVG Market Candlestick & Telemetry Chart */}
        <div className="relative h-28 sm:h-32 w-full rounded-xl bg-black/40 border border-white/10 p-2 overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
            <span>High: 1.09110</span>
            <span>Low: 1.08720</span>
          </div>

          <svg className="w-full h-20 overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
            <defs>
              <linearGradient id="tradingChartGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#19d3d0" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#19d787" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Guideline */}
            <line x1="0" y1="35" x2="300" y2="35" stroke="rgba(255,255,255,0.06)" strokeDasharray="3,3" />

            {/* Candlesticks */}
            <g opacity="0.85">
              {/* Green Bullish */}
              <line x1="30" y1="30" x2="30" y2="55" stroke="#10b981" strokeWidth="1" />
              <rect x="27" y="35" width="6" height="15" fill="#10b981" rx="1" />

              {/* Red Bearish */}
              <line x1="65" y1="28" x2="65" y2="50" stroke="#ef4444" strokeWidth="1" />
              <rect x="62" y="32" width="6" height="12" fill="#ef4444" rx="1" />

              {/* Green Bullish */}
              <line x1="100" y1="20" x2="100" y2="45" stroke="#10b981" strokeWidth="1" />
              <rect x="97" y="24" width="6" height="16" fill="#10b981" rx="1" />

              {/* Green Bullish */}
              <line x1="135" y1="18" x2="135" y2="40" stroke="#10b981" strokeWidth="1" />
              <rect x="132" y="20" width="6" height="14" fill="#10b981" rx="1" />

              {/* Red Retest */}
              <line x1="170" y1="22" x2="170" y2="38" stroke="#ef4444" strokeWidth="1" />
              <rect x="167" y="24" width="6" height="8" fill="#ef4444" rx="1" />

              {/* Green Breakout */}
              <line x1="205" y1="12" x2="205" y2="32" stroke="#10b981" strokeWidth="1" />
              <rect x="202" y="15" width="6" height="12" fill="#10b981" rx="1" />

              {/* Strong Bullish */}
              <line x1="240" y1="8" x2="240" y2="28" stroke="#10b981" strokeWidth="1" />
              <rect x="237" y="10" width="6" height="14" fill="#10b981" rx="1" />

              {/* Live Active Bar */}
              <line x1="275" y1="5" x2="275" y2="24" stroke="#19d3d0" strokeWidth="1.5" />
              <rect x="272" y="7" width="6" height="12" fill="#19d3d0" rx="1" className="animate-pulse" />
            </g>

            {/* EMA Smooth Telemetry Curve */}
            <path 
              d="M 10,50 Q 70,42 130,28 T 240,16 T 290,10" 
              fill="none" 
              stroke="#19d3d0" 
              strokeWidth="2" 
              className="drop-shadow-[0_0_8px_rgba(25,211,208,0.8)]"
            />
            
            {/* Area Fill beneath EMA */}
            <path 
              d="M 10,50 Q 70,42 130,28 T 240,16 T 290,10 L 290,70 L 10,70 Z" 
              fill="url(#tradingChartGlow)" 
            />
          </svg>
        </div>

        {/* Master-to-Slave Copier Sync Architecture Bar */}
        <div className="mt-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-cyan-300">
            <Server className="h-3.5 w-3.5 text-cyan-400" />
            <span>Master (#8821)</span>
          </div>

          <div className="flex items-center gap-1 text-emerald-400">
            <span className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded animate-pulse" />
            <ArrowRight className="h-3 w-3" />
          </div>

          <div className="flex items-center gap-1.5 text-slate-200">
            <Radio className="h-3.5 w-3.5 text-emerald-400" />
            <span>24 Slave Terminals Synced</span>
          </div>
        </div>

      </div>

      {/* Bottom Risk Guard & Status Bar */}
      <div className="relative z-10 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
          <span>Drawdown Guard: Active (Max 1.5%)</span>
        </div>
        <div className="text-slate-400">
          Sync Latency: <span className="text-cyan-300 font-semibold">&lt; 1ms Execution</span>
        </div>
      </div>

    </div>
  );
};
