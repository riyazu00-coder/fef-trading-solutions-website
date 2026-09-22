import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SolutionsShowcase } from './SolutionsShowcase';

export const TradingViewHero: React.FC = () => {
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
      <div className="text-center max-w-5xl mx-auto">
        
        {/* Small Badge above Headline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(25,211,208,0.2)]">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span>AI • SOFTWARE • DIGITAL INNOVATION</span>
        </div>

        {/* Main Headline (Strict 2-line layout in Capital Letters) */}
        <h1 className="mt-7 text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-semibold tracking-[-0.02em] uppercase text-white leading-[1.18]">
          <span className="block">WE BUILD</span>
          <span className="block mt-1 sm:mt-2 fef-headline-gradient drop-shadow-[0_0_25px_rgba(29,168,255,0.25)] md:whitespace-nowrap">
            INTELLIGENT DIGITAL SOLUTIONS
          </span>
        </h1>

        {/* Supporting Description (Strict 2-line layout in Capital Letters) */}
        <p className="mt-6 text-xs sm:text-sm md:text-[15px] lg:text-base text-slate-200/90 max-w-4xl mx-auto font-normal uppercase tracking-wider leading-relaxed">
          <span className="block md:whitespace-nowrap">
            AI-POWERED SOFTWARE, CINEMATIC WEBSITES, CUSTOM APPLICATIONS, BUSINESS AUTOMATION,
          </span>
          <span className="block mt-1 sm:mt-1.5 md:whitespace-nowrap text-slate-300/90">
            AND PROFESSIONAL TRADING TECHNOLOGY—ALL BUILT UNDER ONE INNOVATIVE ECOSYSTEM.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a 
            href="#solutions-showcase" className="focus-ring inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-[0_0_30px_rgba(29,168,255,0.4)] transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE OUR SOLUTIONS</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a 
            href="/contact" className="focus-ring inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition transform hover:-translate-y-0.5"
          >
            <span>START A PROJECT</span>
          </a>
        </div>
      </div>

      {/* Redesigned Interactive Solutions Showcase */}
      <div id="solutions-showcase">
        <SolutionsShowcase />
      </div>

    </section>
  );
};
