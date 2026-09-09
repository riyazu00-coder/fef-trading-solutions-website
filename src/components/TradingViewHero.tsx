import React, { useState } from 'react';
import { 
  Sparkles, 
  Globe, 
  Terminal, 
  Bot, 
  TrendingUp, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

interface CapabilityPillar {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  tagline: string;
  status: string;
  details: string[];
}

const pillars: CapabilityPillar[] = [
  {
    id: 'ai',
    name: 'AI Software',
    category: 'Intelligent Systems',
    icon: <Sparkles className="h-4 w-4 text-emerald-400" />,
    tagline: 'Custom AI models, predictive algorithms, and autonomous agents engineered for production workflows.',
    status: 'Active Development',
    details: ['Neural Automation Logic', 'Custom Decision Engines', 'LLM Agent Frameworks'],
  },
  {
    id: 'web',
    name: 'Web Development',
    category: 'Digital Experience',
    icon: <Globe className="h-4 w-4 text-cyan-400" />,
    tagline: 'Cinematic, ultra-responsive digital websites built with modern front-end performance architectures.',
    status: 'Live Services',
    details: ['Interactive 3D WebGL', 'Tailwind & Next.js Architecture', 'High-Conversion Portals'],
  },
  {
    id: 'code',
    name: 'Custom Coding',
    category: 'Engineering',
    icon: <Terminal className="h-4 w-4 text-[#1da8ff]" />,
    tagline: 'Full-stack software platforms, secure API microservices, and dedicated proprietary software systems.',
    status: 'Enterprise Ready',
    details: ['Bespoke Cloud Infrastructure', 'Secure API Microservices', 'High-Throughput Backends'],
  },
  {
    id: 'auto',
    name: 'Automation',
    category: 'Process Optimization',
    icon: <Bot className="h-4 w-4 text-purple-400" />,
    tagline: 'Hands-off operational pipelines, synchronization daemons, and intelligent workflow automation.',
    status: 'Continuous Operations',
    details: ['Real-Time Data Sync', 'Task Orchestration Bots', 'Zero-Latency Webhooks'],
  },
  {
    id: 'trading',
    name: 'Trading Technology',
    category: 'Market Infrastructure',
    icon: <TrendingUp className="h-4 w-4 text-emerald-400" />,
    tagline: 'Institutional-grade MetaTrader 5 execution copiers, risk engines, and algorithmic strategy panels.',
    status: 'MQL5 Market Released',
    details: ['Sub-Millisecond Trade Sync', 'Multi-Broker Routing', 'Drawdown Guard Engines'],
  },
];

export const TradingViewHero: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('ai');
  const current = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section className="relative pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Background Neural Grid & Subtle Motion Lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#1da8ff]/10 via-[#19d3d0]/10 to-[#19d787]/10 blur-[120px] rounded-full" />
        <svg className="absolute inset-0 w-full h-full opacity-15 stroke-white/[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-neural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.2" className="fill-[#19d3d0]/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-neural-grid)" />
        </svg>
      </div>

      {/* Main Hero Header Stack */}
      <div className="text-center max-w-4xl mx-auto">
        
        {/* Small Badge above Headline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(25,211,208,0.2)]">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span>AI • SOFTWARE • DIGITAL INNOVATION</span>
        </div>

        {/* Main Headline (Refined Semi-Bold 600-650, slightly reduced size for premium elegance) */}
        <h1 className="mt-7 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1.1]">
          WE BUILD{' '}
          <span className="block sm:inline bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(29,168,255,0.25)]">
            INTELLIGENT DIGITAL SOLUTIONS
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          AI-powered software, cinematic websites, custom applications, business automation, and professional trading technology—all built under one innovative ecosystem.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a 
            href="#solutions-matrix" 
            className="focus-ring inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-[0_0_30px_rgba(29,168,255,0.4)] transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE OUR SOLUTIONS</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a 
            href="/contact" 
            className="focus-ring inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition transform hover:-translate-y-0.5"
          >
            <span>START A PROJECT</span>
          </a>
        </div>

        {/* Five Compact Capability Indicators (3D Glass Pills) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs sm:text-sm font-semibold text-slate-200">
          {pillars.map((p) => {
            const isSelected = activePillar === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePillar(p.id)}
                style={
                  isSelected
                    ? {
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(25, 211, 208, 0.12) 100%)',
                        boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.45), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.35), 0 8px 24px -4px rgba(25, 211, 208, 0.35), 0 2px 6px rgba(0, 0, 0, 0.5)',
                      }
                    : {
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.015) 100%)',
                        boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
                      }
                }
                className={`focus-ring inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                  isSelected
                    ? 'border-cyan-400/60 text-white scale-105'
                    : 'border-white/15 text-slate-300 hover:border-white/30 hover:text-white'
                }`}
              >
                {p.icon}
                <span className="tracking-wide">{p.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cinematic Interactive Innovation Telemetry Stage (True 3D Glass Surface) */}
      <div className="mt-8 sm:mt-10 max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.02) 35%, rgba(9, 16, 28, 0.55) 100%)',
            boxShadow: 'inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.32), inset 0 0 25px 0 rgba(29, 168, 255, 0.08), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.5), 0 24px 65px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(25, 211, 208, 0.12)',
          }}
          className="relative rounded-[2rem] border border-white/20 backdrop-blur-2xl p-5 sm:p-7 overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.45),0_30px_75px_-12px_rgba(0,0,0,0.9),0_0_45px_rgba(25,211,208,0.18)]"
        >
          
          {/* Internal Specular Glass Highlight Bevel */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          
          {/* Subtle Ambient Refraction Bloom */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cyan-500/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div 
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 4px 10px rgba(0, 0, 0, 0.35)',
                }}
                className="p-2.5 rounded-xl border border-white/20"
              >
                {current.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(25,211,208,0.4)]">
                  {current.category}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">{current.name}</h3>
              </div>
            </div>

            <div 
              style={{
                background: 'linear-gradient(180deg, rgba(25, 215, 135, 0.18) 0%, rgba(25, 215, 135, 0.05) 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 4px 12px rgba(25, 215, 135, 0.15)',
              }}
              className="flex items-center gap-2 font-mono text-[11px] text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-full"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </span>
              <span>{current.status}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
            {current.tagline}
          </p>

          {/* Three 3D Glass Micro Telemetry Tiles */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {current.details.map((detail, idx) => (
              <div 
                key={idx} 
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.015) 100%)',
                  boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.3), 0 6px 16px rgba(0, 0, 0, 0.35)',
                }}
                className="p-3 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 drop-shadow-[0_0_6px_rgba(25,211,208,0.5)]" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-200">{detail}</span>
              </div>
            ))}
          </div>

          {/* 3D Glass Footer Divider & Info */}
          <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Layers className="h-3 w-3 text-cyan-400" />
              <span>Unified Architecture: AI + Web + Custom Code + Automation + MT5</span>
            </span>
            <span className="text-slate-500 hidden sm:inline">Production Engineered</span>
          </div>

        </div>
      </div>

    </section>
  );
};
