import React from 'react';
import { Globe, Layout, Smartphone, Tablet, Monitor, CheckCircle, Sparkles, Gauge } from 'lucide-react';

export const WebDevVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl bg-[#060b16]/70 border border-white/10 p-4 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
      
      {/* Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl" />
        
        {/* Wireframe Blueprint Grid Lines */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#19d3d0_1px,transparent_1px),linear-gradient(to_bottom,#19d3d0_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* Top Telemetry & Viewport Controls Bar */}
      <div className="relative z-10 flex items-center justify-between gap-2 pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-slate-400 text-[10px] hidden sm:inline ml-2">fef.digital/ecosystem</span>
        </div>
        
        {/* Device Viewport Selector Indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300">
          <Monitor className="h-3.5 w-3.5 text-cyan-400" />
          <Tablet className="h-3.5 w-3.5 text-slate-400" />
          <Smartphone className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-[10px] font-mono text-cyan-300 ml-1">Responsive Active</span>
        </div>
      </div>

      {/* Interactive Floating Multi-Screen Architecture */}
      <div className="relative z-10 my-auto py-2 flex items-center justify-center">
        
        {/* Primary Desktop Mockup Frame */}
        <div className="w-full max-w-md rounded-xl bg-gradient-to-b from-[#0b1626]/90 to-[#070e1a]/95 border border-white/15 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative">
          
          {/* Header Bar inside browser mockup */}
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-3 w-8 rounded bg-cyan-400/30 animate-pulse" />
              <div className="h-2 w-12 rounded bg-white/20" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-8 rounded bg-white/15" />
              <div className="h-2 w-8 rounded bg-white/15" />
              <div className="h-4 w-12 rounded bg-gradient-to-r from-[#1da8ff] to-[#19d787] opacity-80" />
            </div>
          </div>

          {/* Website Hero Section Mockup */}
          <div className="space-y-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="h-2.5 w-28 rounded bg-gradient-to-r from-[#1da8ff] to-[#19d3d0]" />
            <div className="h-2 w-48 rounded bg-slate-400/30" />
            <div className="h-2 w-36 rounded bg-slate-400/20" />
            
            {/* Modular Bento Grid within Mockup */}
            <div className="grid grid-cols-3 gap-1.5 pt-2">
              <div className="h-10 rounded bg-cyan-500/10 border border-cyan-500/20 p-1 flex flex-col justify-between">
                <div className="h-1.5 w-6 rounded bg-cyan-400/50" />
                <div className="h-1 w-full rounded bg-white/10" />
              </div>
              <div className="h-10 rounded bg-emerald-500/10 border border-emerald-500/20 p-1 flex flex-col justify-between">
                <div className="h-1.5 w-6 rounded bg-emerald-400/50" />
                <div className="h-1 w-full rounded bg-white/10" />
              </div>
              <div className="h-10 rounded bg-purple-500/10 border border-purple-500/20 p-1 flex flex-col justify-between">
                <div className="h-1.5 w-6 rounded bg-purple-400/50" />
                <div className="h-1 w-full rounded bg-white/10" />
              </div>
            </div>
          </div>

          {/* Floating Mobile Preview Overlay on Desktop */}
          <div className="absolute -bottom-4 -right-3 w-28 sm:w-32 rounded-xl bg-[#081324]/95 border border-cyan-400/40 p-2 shadow-[0_10px_25px_rgba(29,168,255,0.25)] backdrop-blur-2xl hidden xs:block">
            <div className="h-1 w-6 mx-auto rounded-full bg-white/30 mb-1.5" />
            <div className="h-2 w-14 rounded bg-cyan-400/60 mb-1" />
            <div className="h-1.5 w-18 rounded bg-white/20 mb-2" />
            <div className="h-8 rounded bg-cyan-500/10 border border-cyan-500/30 p-1 flex items-center justify-center">
              <span className="text-[7px] font-mono text-cyan-300">Adaptive UI</span>
            </div>
          </div>

        </div>

      </div>

      {/* Assembly Indicators & Performance Metrics */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400">
            <Gauge className="h-3.5 w-3.5" />
            <span>Lighthouse: 99+</span>
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-300">Responsive Grid</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px]">
          <CheckCircle className="h-3 w-3 text-emerald-400" />
          <span>Production Ready</span>
        </div>
      </div>

    </div>
  );
};
