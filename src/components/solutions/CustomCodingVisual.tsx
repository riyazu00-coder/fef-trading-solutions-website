import React from 'react';
import { Terminal, Code2, Database, Cloud, CheckCircle2, ArrowRight } from 'lucide-react';

export const CustomCodingVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl bg-[#060b16]/70 border border-white/10 p-4 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#1da8ff]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Code Editor Header Tab */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-500/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
          </div>
          <div className="ml-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-t-md bg-white/[0.06] border border-b-0 border-white/15 text-cyan-300">
            <Code2 className="h-3 w-3 text-cyan-400" />
            <span>engine.service.ts</span>
          </div>
        </div>
        <span className="text-[10px] text-slate-400">TypeScript 5.4</span>
      </div>

      {/* Syntax-Highlighted Code Editor Body */}
      <div className="relative z-10 my-auto py-2">
        <div className="rounded-xl bg-[#030712]/80 border border-white/10 p-3 sm:p-4 font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 overflow-x-auto scrollbar-none shadow-inner">
          <div className="flex items-center gap-3 text-slate-600">
            <span className="select-none w-4 text-right">1</span>
            <span className="text-purple-400">export class</span>
            <span className="text-yellow-300">DataPipelineEngine</span>
            <span className="text-purple-400">implements</span>
            <span className="text-cyan-300">AsyncService</span>
            <span className="text-white">{'{'}</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-600">
            <span className="select-none w-4 text-right">2</span>
            <span className="pl-3 text-purple-400">async</span>
            <span className="text-blue-400">processStream</span>
            <span className="text-white">(payload:</span>
            <span className="text-emerald-300">StreamPacket</span>
            <span className="text-white">) {'{'}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <span className="select-none w-4 text-right">3</span>
            <span className="pl-6 text-purple-400">const</span>
            <span className="text-white">verified =</span>
            <span className="text-purple-400">await</span>
            <span className="text-cyan-400">cryptoGuard</span>
            <span className="text-white">.verify(payload);</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <span className="select-none w-4 text-right">4</span>
            <span className="pl-6 text-purple-400">return</span>
            <span className="text-cyan-400">database</span>
            <span className="text-white">.upsertRecord({'{'} ...verified,</span>
            <span className="text-emerald-400">status: 'COMMITTED'</span>
            <span className="text-white">{'}'});</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <span className="select-none w-4 text-right">5</span>
            <span className="select-none w-4 text-right"></span>
            <span className="text-white">{'}'}</span>
          </div>
        </div>

        {/* Microservices Connected Architecture Bar */}
        <div className="mt-3 grid grid-cols-4 gap-1.5 text-center font-mono text-[9px] sm:text-[10px]">
          <div className="p-1.5 rounded-lg bg-white/[0.03] border border-cyan-500/20 text-cyan-300 flex items-center justify-center gap-1">
            <Code2 className="h-3 w-3 text-cyan-400 shrink-0" />
            <span>Frontend</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/[0.03] border border-blue-500/20 text-blue-300 flex items-center justify-center gap-1">
            <Terminal className="h-3 w-3 text-blue-400 shrink-0" />
            <span>FastAPI</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/[0.03] border border-emerald-500/20 text-emerald-300 flex items-center justify-center gap-1">
            <Database className="h-3 w-3 text-emerald-400 shrink-0" />
            <span>Postgres</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/[0.03] border border-purple-500/20 text-purple-300 flex items-center justify-center gap-1">
            <Cloud className="h-3 w-3 text-purple-400 shrink-0" />
            <span>Cloud Run</span>
          </div>
        </div>
      </div>

      {/* Terminal Build Result Bar */}
      <div className="relative z-10 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono">
        <div className="flex items-center gap-2 text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          <span>Build succeeded in 142ms</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>0 Vulnerabilities Detected</span>
        </div>
      </div>

    </div>
  );
};
