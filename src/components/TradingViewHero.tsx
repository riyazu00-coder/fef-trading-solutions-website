import React, { useState } from 'react';
import { Sparkles, ArrowRight, Globe, Terminal, Bot, TrendingUp } from 'lucide-react';
import { SolutionsShowcase } from './SolutionsShowcase';

interface SolutionTab {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const solutionTabs: SolutionTab[] = [
  { id: 'ai', name: 'AI Software', icon: <Sparkles className="h-3.5 w-3.5 text-emerald-500" /> },
  { id: 'web', name: 'Web Development', icon: <Globe className="h-3.5 w-3.5 text-cyan-500" /> },
  { id: 'code', name: 'Custom Coding', icon: <Terminal className="h-3.5 w-3.5 text-[#0099ff]" /> },
  { id: 'auto', name: 'Automation', icon: <Bot className="h-3.5 w-3.5 text-purple-500" /> },
  { id: 'trading', name: 'Trading Technology', icon: <TrendingUp className="h-3.5 w-3.5 text-emerald-500" /> },
];

export const TradingViewHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ai');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById('solutions-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO CINEMATIC VIEWPORT (First Screen Impression)
          ======================================================== */}
      <section className="relative w-full min-h-[100svh] lg:min-h-[calc(100svh-5rem)] lg:h-[calc(100svh-5rem)] lg:max-h-[1020px] flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* --------------------------------------------------------
            LEVEL 1 & 2: Ambient Lighting, Orbital Rings & Background Identity
            -------------------------------------------------------- */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
          {/* Luminous Soft Radial Lighting Blooms behind AI entity */}
          <div className="absolute right-[12%] lg:right-[16%] top-[6%] w-[580px] lg:w-[720px] h-[580px] lg:h-[720px] rounded-full bg-[#45c9f5]/20 blur-[140px]" />
          <div className="absolute right-[-4%] lg:right-[0%] top-[14%] w-[600px] lg:w-[760px] h-[600px] lg:h-[760px] rounded-full bg-[#a57af3]/20 blur-[150px]" />

          {/* LEVEL 2: Environmental Branding Typography "FEF" */}
          <div
            className="absolute inset-x-0 top-[-1%] lg:top-[-2%] flex items-start justify-center font-sans font-black tracking-[-0.03em] leading-none text-[clamp(15rem,35vw,44rem)] select-none pointer-events-none bg-gradient-to-b from-[#7896d8]/40 via-[#9987dc]/32 to-[#7896d8]/15 bg-clip-text text-transparent"
          >
            FEF
          </div>

          {/* Holographic Thin Orbital Intelligence Rings behind Entity */}
          <svg
            className="hidden lg:block absolute right-[8%] xl:right-[12%] top-[2%] w-[680px] h-[680px] opacity-50 pointer-events-none"
            viewBox="0 0 680 680"
            fill="none"
          >
            <circle cx="340" cy="340" r="300" stroke="url(#fef-orbital-cyan)" strokeWidth="1" strokeDasharray="6 8" />
            <circle cx="340" cy="340" r="235" stroke="url(#fef-orbital-purple)" strokeWidth="1.2" strokeOpacity="0.6" />
            <circle cx="340" cy="340" r="170" stroke="#45c9f5" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 6" />
            {/* Orbital node accents */}
            <circle cx="640" cy="340" r="3" fill="#45c9f5" />
            <circle cx="340" cy="40" r="3" fill="#a57af3" />
            <circle cx="105" cy="340" r="2.5" fill="#6695f5" />
            {/* Fine coordinate crosshairs */}
            <path d="M340 20 L340 45 M340 635 L340 660 M20 340 L45 340 M635 340 L660 340" stroke="#45c9f5" strokeWidth="1.5" strokeOpacity="0.65" />
            <defs>
              <linearGradient id="fef-orbital-cyan" x1="0" y1="0" x2="680" y2="680" gradientUnits="userSpaceOnUse">
                <stop stopColor="#45c9f5" stopOpacity="0.85" />
                <stop offset="1" stopColor="#6695f5" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="fef-orbital-purple" x1="0" y1="680" x2="680" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a57af3" stopOpacity="0.8" />
                <stop offset="1" stopColor="#45c9f5" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          {/* Architectural Watermark: FEF INTELLIGENCE */}
          <div className="hidden lg:flex absolute left-8 lg:left-14 top-8 items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.24em] text-[#7d96be]/80 select-none pointer-events-none">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/90 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span>FEF INTELLIGENCE // ARCHITECTURAL SYSTEM v2.8</span>
          </div>

          {/* Subtle Vertical Technical Stack: TRADING TECHNOLOGY FOR A SMARTER TOMORROW */}
          <div className="hidden xl:flex absolute right-6 lg:right-10 top-14 flex-col items-start gap-1 font-mono text-[10.5px] font-semibold tracking-[0.24em] text-[#748eb8]/85 select-none uppercase pointer-events-none">
            <span>TRADING</span>
            <span>TECHNOLOGY</span>
            <span>FOR A</span>
            <span>SMARTER</span>
            <span>TOMORROW</span>
          </div>

          {/* Subtle Telemetry Indicator pointing to AI Entity */}
          <div className="hidden lg:flex absolute right-8 xl:right-16 top-[62%] flex-col items-end gap-1.5 select-none pointer-events-none">
            {/* Fine pointer line */}
            <div className="flex items-center gap-2 mb-1">
              <span className="w-12 h-px bg-gradient-to-l from-cyan-400/70 to-transparent" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 ring-2 ring-cyan-400/40 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.22em] text-[#5575a6] uppercase font-bold">
              <span>ADVANCED AI</span>
            </div>
            <span className="font-mono text-[8.5px] tracking-[0.20em] text-[#7d96be]/90 uppercase font-medium">ALGORITHMIC INTELLIGENCE</span>
            <span className="font-mono text-[8.5px] tracking-[0.20em] text-[#7d96be]/90 uppercase font-medium">AUTOMATION</span>
            <span className="font-mono text-[8.5px] tracking-[0.20em] text-[#7d96be]/90 uppercase font-medium">GLOBAL REACH</span>
          </div>
        </div>

        {/* --------------------------------------------------------
            LEVEL 3: Free-Standing Massive Humanoid AI Entity (Visually Dominant)
            Carefully positioned to provide clean separation for INTELLIGENT
            while keeping full robot scale, body, and height 100% locked.
            -------------------------------------------------------- */}
        <div className="absolute right-[-4%] sm:right-[0%] lg:right-[2%] xl:right-[4%] left-[10%] sm:left-[18%] lg:left-[30%] xl:left-[32%] top-[-4%] sm:top-[-6%] lg:top-[-8%] xl:top-[-10%] bottom-0 flex items-end justify-center pointer-events-none select-none z-10">
          <div className="relative w-full h-full flex items-end justify-center">
            <img
              src="/images/fef-cyborg-hero-transparent.png"
              alt="FEF Intelligent AI Cybernetic Architecture"
              className="w-auto h-[70vh] sm:h-[85vh] lg:h-[100vh] xl:h-[108vh] max-h-[1100px] object-contain object-bottom animate-fef-float drop-shadow-[0_24px_60px_rgba(79,70,229,0.18)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/fef-ai-cyborg-concept.jpg';
              }}
            />
          </div>
        </div>

        {/* --------------------------------------------------------
            LEVEL 4: Foreground Content (Left Column & Floating Rail)
            -------------------------------------------------------- */}
        <div className="relative z-20 flex-1 flex flex-col justify-between pt-3 sm:pt-6 lg:pt-10">

          {/* Left Column Content (46-50% Desktop Width) */}
          <div className="max-w-xl lg:max-w-[48%] xl:max-w-[50%] flex flex-col items-start text-left">
            {/* Eyebrow Capsule */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full fef-glass-subtle text-[#080B1D] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5 text-[#a57af3]" />
              <span>AI • SOFTWARE • DIGITAL INNOVATION</span>
            </div>

            {/* 3-Line Headline: Tight spacing with dominant INTELLIGENT and DIGITAL SOLUTIONS in one line on desktop */}
            <h1 className="mt-4 sm:mt-5 font-black uppercase text-[#080B1D] tracking-[-0.035em]">
              <span className="block text-3xl sm:text-5xl lg:text-[clamp(2.4rem,3.8vw,4.2rem)] leading-[0.92]">
                WE BUILD
              </span>
              <span className="block mt-2 sm:mt-3 lg:mt-3.5 text-4xl sm:text-6xl lg:text-[clamp(4.2rem,6.4vw,7.2rem)] leading-[0.86] tracking-[-0.04em] bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(69,201,245,0.36)]">
                INTELLIGENT
              </span>
              <span className="block mt-0.5 sm:mt-1 text-2xl sm:text-4xl lg:text-[clamp(2.2rem,3.4vw,3.8rem)] leading-[0.92] tracking-[-0.03em] whitespace-normal lg:whitespace-nowrap text-[#080B1D]">
                DIGITAL SOLUTIONS
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-[#536078] max-w-lg font-normal leading-relaxed">
              AI-powered software, cinematic websites, custom applications, business automation, and professional trading technology — all built under one innovative ecosystem.
            </p>

            {/* Action CTAs */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
              <a
                href="#solutions-showcase"
                className="focus-ring inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-[0_6px_22px_rgba(69,201,245,0.32)] transition transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>EXPLORE OUR SOLUTIONS</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/contact"
                className="focus-ring inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#080B1D] fef-glass-secondary hover:bg-white/90 transition transform hover:-translate-y-0.5 text-center"
              >
                <span>START A PROJECT</span>
              </a>
            </div>
          </div>

          {/* Solution Navigation: Thin Floating Glass Rail at Bottom of First Viewport */}
          <div className="w-full pt-8 sm:pt-10 pb-4">
            <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto pb-1 scrollbar-none px-1">
              <div className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] shrink-0">
                {solutionTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabClick(tab.id)}
                      className={`group relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none ${
                        isActive
                          ? 'text-[#080B1D] bg-white shadow-sm border border-white/95 scale-[1.01]'
                          : 'text-[#536078] hover:text-[#080B1D] hover:bg-white/50'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] rounded-full shadow-[0_0_10px_rgba(69,201,245,0.7)]" />
                      )}
                      <span className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                        {tab.icon}
                      </span>
                      <span className="tracking-wide">{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. INTERACTIVE SOLUTIONS SHOWCASE DETAILS (Below the Fold)
          ======================================================== */}
      <section id="solutions-showcase" className="relative z-30 pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SolutionsShowcase activeTab={activeTab} onTabChange={setActiveTab} />
      </section>
    </div>
  );
};
