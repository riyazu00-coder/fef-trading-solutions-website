import React from 'react';
import { Brain, Network, Zap, Sparkles, Activity } from 'lucide-react';

export const AiSoftwareVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl bg-[#060b16]/70 border border-white/10 p-4 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
      
      {/* Background Neural Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        
        {/* Subtle SVG Grid Matrix */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ai-visual-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-cyan-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-visual-grid)" />
        </svg>
      </div>

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between gap-2 pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2 text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="uppercase tracking-wider font-medium">Autonomous Core v4.2</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span className="hidden sm:inline">Latency: <span className="text-emerald-400 font-semibold">1.2ms</span></span>
          <span>Inference: <span className="text-cyan-400 font-semibold">99.8%</span></span>
        </div>
      </div>

      {/* Main Neural Network Interactive Schematic */}
      <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
        
        {/* Connected Flow Diagram */}
        <div className="w-full max-w-lg relative flex items-center justify-between gap-1 sm:gap-2">
          
          {/* Animated Connecting SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aiDataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1da8ff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#19d3d0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#19d787" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Connection Paths */}
            <line x1="15%" y1="50%" x2="50%" y2="50%" stroke="url(#aiDataFlow)" strokeWidth="2" strokeDasharray="4,4" className="animate-[dash_15s_linear_infinite]" />
            <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="url(#aiDataFlow)" strokeWidth="2" strokeDasharray="4,4" className="animate-[dash_15s_linear_infinite]" />
          </svg>

          {/* 1. INPUT NODE */}
          <div className="relative z-10 flex flex-col items-center group">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/[0.05] border border-cyan-400/30 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_15px_rgba(29,168,255,0.15)] group-hover:border-cyan-400 transition-all">
              <Network className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-semibold">
              1. Input
            </span>
            <span className="text-[9px] text-slate-400 font-mono hidden sm:inline">Telemetry / Vectors</span>
          </div>

          {/* 2. REASONING NODE (Central Core) */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Glowing Aura Rings around Central Core */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-turquoise-500/20 to-emerald-500/20 blur-md animate-pulse" />
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-[#0b172a] via-[#0d2238] to-[#0a202f] border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(25,211,208,0.35)] flex flex-col items-center justify-center backdrop-blur-2xl">
                <Brain className="h-7 w-7 sm:h-8 sm:w-8 text-[#19d3d0] animate-bounce duration-1000" />
                <div className="absolute -bottom-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[8px] font-mono text-emerald-300">
                  ACTIVE
                </div>
              </div>
            </div>
            <span className="mt-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-emerald-400" />
              Reasoning Core
            </span>
            <span className="text-[9px] text-slate-400 font-mono">Neural Weights Evaluated</span>
          </div>

          {/* 3. DECISION & OUTPUT NODE */}
          <div className="relative z-10 flex flex-col items-center group">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/[0.05] border border-emerald-400/30 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_15px_rgba(25,215,135,0.15)] group-hover:border-emerald-400 transition-all">
              <Zap className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold">
              3. Decision
            </span>
            <span className="text-[9px] text-slate-400 font-mono hidden sm:inline">Execution Output</span>
          </div>

        </div>

        {/* Live Processing Pipeline Bar */}
        <div className="mt-6 w-full grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="text-slate-400">Context Window</div>
            <div className="text-white font-semibold mt-0.5">128k Tokens</div>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="text-slate-400">Confidence</div>
            <div className="text-emerald-400 font-semibold mt-0.5">99.85%</div>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="text-slate-400">Routing Mode</div>
            <div className="text-cyan-400 font-semibold mt-0.5">Sub-ms Stream</div>
          </div>
        </div>

      </div>

      {/* Bottom Live Activity Feed */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-300">
          <Activity className="h-3.5 w-3.5 text-cyan-400" />
          <span className="truncate">Decision Loop: Dispatched to Microservices</span>
        </span>
        <span className="text-emerald-400 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
          Sync Healthy
        </span>
      </div>

    </div>
  );
};
