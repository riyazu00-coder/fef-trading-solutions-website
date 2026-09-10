import React, { useState } from 'react';
import { 
  Sparkles, 
  Globe, 
  Terminal, 
  Bot, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  Layers,
  ExternalLink
} from 'lucide-react';

import { AiSoftwareVisual } from './solutions/AiSoftwareVisual';
import { WebDevVisual } from './solutions/WebDevVisual';
import { CustomCodingVisual } from './solutions/CustomCodingVisual';
import { AutomationVisual } from './solutions/AutomationVisual';
import { TradingTechVisual } from './solutions/TradingTechVisual';

interface SolutionItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  tagline: string;
  status: string;
  capabilities: string[];
  ctaLabel: string;
  ctaHref: string;
  visual: React.ReactNode;
}

const solutions: SolutionItem[] = [
  {
    id: 'ai',
    name: 'AI Software',
    category: 'Intelligent Systems',
    icon: <Sparkles className="h-4 w-4 text-emerald-400" />,
    tagline: 'Custom AI models, predictive algorithms, and autonomous agents engineered for production workflows.',
    status: 'Active Development',
    capabilities: [
      'Custom AI Models',
      'Intelligent Decision Engines',
      'AI Agent Systems',
    ],
    ctaLabel: 'Explore AI Solutions',
    ctaHref: '/ai-software-development',
    visual: <AiSoftwareVisual />,
  },
  {
    id: 'web',
    name: 'Web Development',
    category: 'Digital Experience',
    icon: <Globe className="h-4 w-4 text-cyan-400" />,
    tagline: 'Cinematic, ultra-responsive digital websites built with modern front-end performance architectures.',
    status: 'Production Ready',
    capabilities: [
      'Cinematic Websites',
      'Responsive Web Applications',
      'Conversion-Focused Experiences',
    ],
    ctaLabel: 'Explore Web Development',
    ctaHref: '/contact',
    visual: <WebDevVisual />,
  },
  {
    id: 'code',
    name: 'Custom Coding',
    category: 'Engineering & Architecture',
    icon: <Terminal className="h-4 w-4 text-[#1da8ff]" />,
    tagline: 'Full-stack software platforms, secure API microservices, and dedicated proprietary software systems.',
    status: 'Enterprise Ready',
    capabilities: [
      'Custom Applications',
      'API and System Integration',
      'Scalable Software Architecture',
    ],
    ctaLabel: 'Explore Custom Development',
    ctaHref: '/contact',
    visual: <CustomCodingVisual />,
  },
  {
    id: 'auto',
    name: 'Automation',
    category: 'Process Optimization',
    icon: <Bot className="h-4 w-4 text-purple-400" />,
    tagline: 'Hands-off operational pipelines, synchronization daemons, and intelligent workflow automation.',
    status: 'Continuous Operations',
    capabilities: [
      'Workflow Automation',
      'AI-Powered Operations',
      'System and Data Integration',
    ],
    ctaLabel: 'Explore Automation',
    ctaHref: '/contact',
    visual: <AutomationVisual />,
  },
  {
    id: 'trading',
    name: 'Trading Technology',
    category: 'Market Infrastructure',
    icon: <TrendingUp className="h-4 w-4 text-emerald-400" />,
    tagline: 'Institutional-grade MetaTrader 5 execution copiers, risk engines, and algorithmic strategy panels.',
    status: 'MQL5 Market Released',
    capabilities: [
      'MT5 Software Development',
      'Trade Automation Systems',
      'Risk and Account Management',
    ],
    ctaLabel: 'Explore Trading Technology',
    ctaHref: '/trade-copier',
    visual: <TradingTechVisual />,
  },
];

export const SolutionsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ai');
  const current = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <div className="w-full mt-10 sm:mt-14">
      
      {/* 1. HORIZONTAL TABS BAR */}
      <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto pb-3 scrollbar-none px-2">
        <div className="flex items-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          {solutions.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(s.id)}
                className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap focus:outline-none ${
                  isActive
                    ? 'text-white bg-gradient-to-b from-white/20 via-white/10 to-cyan-500/15 border border-cyan-400/60 shadow-[0_0_25px_rgba(25,211,208,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] scale-[1.02]'
                    : 'text-slate-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20'
                }`}
              >
                {/* Active Underline Glow */}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] rounded-full shadow-[0_0_10px_#19d3d0]" />
                )}
                
                <span className={`transition-transform duration-300 ${isActive ? 'scale-110 text-cyan-300' : 'group-hover:scale-110'}`}>
                  {s.icon}
                </span>
                <span className="tracking-wide font-semibold">{s.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. MAIN INTERACTIVE SHOWCASE PANEL (Two-Column Balanced Glass Surface) */}
      <div className="mt-5 sm:mt-7 max-w-6xl mx-auto w-full">
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 35%, rgba(6, 12, 24, 0.65) 100%)',
            boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.35), inset 0 0 30px 0 rgba(29, 168, 255, 0.07), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.5), 0 24px 65px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(25, 211, 208, 0.10)',
          }}
          className="relative rounded-[2rem] border border-white/20 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-white/30"
        >
          {/* Specular Bevel Accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          
          {/* Ambient Glow in Corner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

          {/* Dynamic Content Grid (Left: Copy & Capabilities, Right: Animated Visual) */}
          <div 
            key={current.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center transition-all duration-300 animate-fadeIn"
          >
            
            {/* LEFT COLUMN: Meta, Description, Capabilities, CTA */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(25,211,208,0.3)]">
                    {current.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                    </span>
                    <span>{current.status}</span>
                  </div>
                </div>

                {/* Headline with Approved Gradient */}
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(29,168,255,0.25)]">
                    {current.name}
                  </span>
                </h3>

                {/* Tagline / Description */}
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {current.tagline}
                </p>
              </div>

              {/* Three Capabilities Tiles */}
              <div className="space-y-2.5 pt-1">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Core Capabilities:
                </div>
                <div className="space-y-2">
                  {current.capabilities.map((cap, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all flex items-center gap-3 backdrop-blur-md"
                    >
                      <div className="h-6 w-6 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call-to-Action Button */}
              <div className="pt-2">
                <a
                  href={current.ctaHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-[0_0_25px_rgba(29,168,255,0.35)] transition transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto text-center"
                >
                  <span>{current.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Large Animated Visual Demonstration */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {current.visual}
            </div>

          </div>

          {/* 3. Panel Footer Telemetry Bar */}
          <div className="mt-7 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-2 text-slate-300">
              <Layers className="h-3.5 w-3.5 text-cyan-400" />
              <span>Unified Innovation Ecosystem: AI • Web • Custom Code • Automation • MT5</span>
            </span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Institutional Enterprise Quality</span>
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};
