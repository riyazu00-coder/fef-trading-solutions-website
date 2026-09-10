import React from 'react';
import { Bot, Zap, GitBranch, Database, CheckCircle2, ArrowRight, Play, Cpu } from 'lucide-react';

export const AutomationVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl bg-[#060b16]/70 border border-white/10 p-4 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
      
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Top Status Header */}
      <div className="relative z-10 flex items-center justify-between gap-2 pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2 text-purple-300">
          <Bot className="h-4 w-4 text-purple-400" />
          <span className="uppercase tracking-wider font-semibold">Continuous Automation Daemon</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-medium">99.99% Uptime</span>
        </div>
      </div>

      {/* Main Multi-Stage Workflow Pipeline */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
          
          {/* 1. TRIGGER NODE */}
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-cyan-400/30 flex flex-col items-center text-center relative group">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 shadow-[0_0_12px_rgba(29,168,255,0.3)]">
              <Zap className="h-4 w-4" />
            </div>
            <span className="text-[9px] font-mono text-cyan-400 font-semibold uppercase">1. Trigger</span>
            <span className="text-[10px] text-white font-medium mt-0.5">Webhook Ingest</span>
            <span className="mt-1.5 px-1.5 py-0.5 rounded text-[8px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              Triggered
            </span>
          </div>

          {/* 2. AI PARSER NODE */}
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-purple-400/30 flex flex-col items-center text-center relative group">
            <div className="h-8 w-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center mb-1.5 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
              <Cpu className="h-4 w-4" />
            </div>
            <span className="text-[9px] font-mono text-purple-400 font-semibold uppercase">2. AI Logic</span>
            <span className="text-[10px] text-white font-medium mt-0.5">Semantic Parsing</span>
            <span className="mt-1.5 px-1.5 py-0.5 rounded text-[8px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40">
              Processing
            </span>
          </div>

          {/* 3. DECISION BRANCH */}
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-blue-400/30 flex flex-col items-center text-center relative group">
            <div className="h-8 w-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center mb-1.5 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
              <GitBranch className="h-4 w-4" />
            </div>
            <span className="text-[9px] font-mono text-blue-400 font-semibold uppercase">3. Branch</span>
            <span className="text-[10px] text-white font-medium mt-0.5">Rule Routing</span>
            <span className="mt-1.5 px-1.5 py-0.5 rounded text-[8px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/40">
              Verified
            </span>
          </div>

          {/* 4. DATABASE / INTEGRATION */}
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-emerald-400/30 flex flex-col items-center text-center relative group">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-1.5 shadow-[0_0_12px_rgba(25,215,135,0.3)]">
              <Database className="h-4 w-4" />
            </div>
            <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase">4. Integration</span>
            <span className="text-[10px] text-white font-medium mt-0.5">Multi-DB Sync</span>
            <span className="mt-1.5 px-1.5 py-0.5 rounded text-[8px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Syncing
            </span>
          </div>

          {/* 5. COMPLETED ACTION */}
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-emerald-400/50 flex flex-col items-center text-center relative group bg-emerald-500/[0.05]">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/30 text-emerald-300 flex items-center justify-center mb-1.5 shadow-[0_0_15px_rgba(25,215,135,0.4)]">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase">5. Action</span>
            <span className="text-[10px] text-white font-medium mt-0.5">Dispatched</span>
            <span className="mt-1.5 px-1.5 py-0.5 rounded text-[8px] font-mono bg-emerald-500/30 text-emerald-300 border border-emerald-500/50">
              Completed
            </span>
          </div>

        </div>

        {/* Live Metrics Matrix */}
        <div className="mt-4 p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Play className="h-3 w-3 text-cyan-400" />
            <span>Throughput: <strong className="text-white">1,450 jobs/min</strong></span>
          </div>
          <div className="text-slate-400">
            Avg execution: <span className="text-emerald-400 font-semibold">48ms</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Zero-Latency Webhook Routing</span>
        <span className="text-purple-400 font-semibold">Autonomous Pipeline Active</span>
      </div>

    </div>
  );
};
