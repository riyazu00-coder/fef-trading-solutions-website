import React, { useState } from 'react';
import {
  Sparkles,
  Globe,
  Terminal,
  Bot,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Layers
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
    ctaHref: '/ai-web-design-development',
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
    ctaHref: '/custom-applications',
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
    ctaHref: '/business-automation',
    visual: <AutomationVisual />,
  },
  {
    id: 'trading',
    name: 'Trading Technology',
    category: 'Market Infrastructure',
    icon: <TrendingUp className="h-4 w-4 text-emerald-400" />,
    tagline: 'MetaTrader 5 execution copiers, risk engines, and algorithmic strategy panels for trading workflows.',
    status: 'MQL5 Market Released',
    capabilities: [
      'MT5 Software Development',
      'Trade Automation Systems',
      'Risk and Account Management',
    ],
    ctaLabel: 'Explore Trading Technology',
    ctaHref: '/trading-technology',
    visual: <TradingTechVisual />,
  },
];

export interface SolutionsShowcaseProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const SolutionsShowcase: React.FC<SolutionsShowcaseProps> = ({
  activeTab: controlledTab,
  onTabChange,
}) => {
  const [internalTab, setInternalTab] = useState<string>('ai');
  const activeTab = controlledTab !== undefined ? controlledTab : internalTab;
  const setActiveTab = (tab: string) => {
    setInternalTab(tab);
    if (onTabChange) onTabChange(tab);
  };
  const current = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <div className="w-full mt-8 sm:mt-12">

      {/* 1. FLOATING CAPSULE TABS DOCK (Matching Concept Image) */}
      <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto pb-3 scrollbar-none px-2">
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full fef-glass-subtle shrink-0">
          {solutions.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(s.id)}
                className={`group relative flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap focus:outline-none ${
                  isActive
                    ? 'text-[#080B1D] bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-white/90 scale-[1.02]'
                    : 'text-[#536078] hover:text-[#080B1D] hover:bg-white/40'
                }`}
              >
                {/* Active Underline Glow */}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-4 h-0.5 bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] rounded-full shadow-[0_0_10px_rgba(69,201,245,0.6)]" />
                )}

                <span className={`transition-transform duration-300 ${isActive ? 'scale-110 text-cyan-600' : 'group-hover:scale-110 text-slate-500'}`}>
                  {s.icon}
                </span>
                <span className="tracking-wide">{s.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. MAIN INTERACTIVE SHOWCASE PANEL (Editorial Two-Column Layout Sits Naturally on Page) */}
      <div className="mt-8 sm:mt-12 max-w-6xl mx-auto w-full">
        {/* Dynamic Content Grid (Left: Copy & Capabilities, Right: Visual Demonstration) */}
        <div
          key={current.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-300 animate-fadeIn"
        >
          {/* LEFT COLUMN: Editorial Metadata, Description, Capabilities, CTA */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0284c7] font-bold">
                  {current.category}
                </span>

                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-800 border border-emerald-400/40 bg-emerald-50/90 px-3 py-1 rounded-full font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                  </span>
                  <span>{current.status}</span>
                </div>
              </div>

              {/* Section Headline */}
              <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#080B1D]">
                <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
                  {current.name}
                </span>
              </h3>

              {/* Tagline / Description */}
              <p className="mt-4 text-base text-[#536078] leading-relaxed font-normal">
                {current.tagline}
              </p>
            </div>

            {/* Three Capabilities Tiles (Level 2 Light Glass Cards) */}
            <div className="space-y-2.5 pt-1">
              <div className="text-xs font-mono text-[#080B1D] uppercase tracking-wider font-bold">
                Core Capabilities:
              </div>
              <div className="space-y-2">
                {current.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl fef-glass-secondary hover:border-slate-300 transition-all flex items-center gap-3"
                  >
                    <div className="h-6 w-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600" />
                    </div>
                    <span className="text-sm font-semibold text-[#080B1D]">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="pt-2">
              <a
                href={current.ctaHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-[0_4px_18px_rgba(69,201,245,0.3)] transition transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto text-center"
              >
                <span>{current.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Visual Demonstration in Subtle Light Glass Frame */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="rounded-3xl p-2.5 sm:p-3 fef-glass-primary">
              {current.visual}
            </div>
          </div>
        </div>

        {/* 3. Panel Footer Telemetry Bar */}
        <div className="mt-10 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-[#536078] font-mono">
          <span className="flex items-center gap-2 text-[#080B1D] font-medium">
            <Layers className="h-3.5 w-3.5 text-cyan-600" />
            <span>Unified Innovation Ecosystem: AI • Web • Custom Code • Automation • MT5</span>
          </span>
          <span className="text-[#0284c7] font-semibold">Production Ready</span>
        </div>
      </div>

    </div>
  );
};
