import React, { useState, useEffect } from 'react';
import { Sparkles, Check, ArrowRight, Activity, Zap } from 'lucide-react';

interface FontOption {
  id: string;
  name: string;
  category: string;
  vibe: string;
  headlineStyle: string;
  description: string;
  fontFamily: string;
  badge: string;
  badgeColor: string;
  recommended?: boolean;
}

const fontOptions: FontOption[] = [
  {
    id: 'plus-jakarta',
    name: 'Plus Jakarta Sans',
    category: 'Modern AI & DeepTech',
    vibe: 'Aerodynamic geometry, clean futuristic curves, and ultra-high polish. The gold standard for modern AI unicorns.',
    headlineStyle: 'font-semibold tracking-[-0.02em]',
    description: 'Clean, open letterforms with subtle high-tech incisions in letters like "g" and "y". Looks stunning in semi-bold with cyan-turquoise gradients.',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    badge: 'Top Pick for AI Website',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    recommended: true,
  },
  {
    id: 'outfit',
    name: 'Outfit',
    category: 'Futuristic Minimalist AI',
    vibe: 'Pure geometric sans inspired by circular display technology. Apple-meets-AI vibe with ultra-smooth aesthetics.',
    headlineStyle: 'font-semibold tracking-[-0.015em]',
    description: 'Rounded, futuristic geometric shapes that give an intelligent, autonomous agent feel. Highly modern and readable.',
    fontFamily: "'Outfit', sans-serif",
    badge: 'Futuristic & Sleek',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  },
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    category: 'Cybernetic & Algorithmic Tech',
    vibe: 'Deep tech, neural networks, and algorithmic quantitative systems. Distinct angular cuts with cybernetic character.',
    headlineStyle: 'font-semibold tracking-[-0.025em]',
    description: 'Derived from monospace code grids but proportional. Instantly signals complex machine learning and algorithmic trading.',
    fontFamily: "'Space Grotesk', sans-serif",
    badge: 'Deep Machine Learning Look',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  },
  {
    id: 'sora',
    name: 'Sora',
    category: 'Telemetry & Precision Screen',
    vibe: 'Engineered specifically for low-latency interfaces, crypto, and telemetry screens with square-ish geometric counters.',
    headlineStyle: 'font-semibold tracking-[-0.02em]',
    description: 'Crisp, wide apertures that look razor-sharp on dark glass surfaces and command high visual authority.',
    fontFamily: "'Sora', sans-serif",
    badge: 'High-Precision Telemetry',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  },
  {
    id: 'inter',
    name: 'Inter',
    category: 'Standard SaaS (Current Baseline)',
    vibe: 'Neutral, clean, standard UI sans-serif designed for general software applications.',
    headlineStyle: 'font-semibold tracking-[-0.015em]',
    description: 'The current default font on the website. Reliable and legible, but lacks the distinct futuristic AI brand personality.',
    fontFamily: "'Inter', sans-serif",
    badge: 'Current Baseline',
    badgeColor: 'text-slate-400 bg-white/5 border-white/15',
  },
];

export const FontPreviewPage: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<FontOption>(fontOptions[0]);

  // Dynamically inject Google Fonts for preview
  useEffect(() => {
    const linkId = 'preview-google-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-xs font-medium uppercase tracking-[0.2em]">
          <Sparkles className="h-3.5 w-3.5" />
          AI Website Typography Selector
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
          Select the Best Font for{' '}
          <span className="bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent">
            FEF Trading Solutions
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
          Click on any font below to preview how it instantly transforms the entire hero headline, badges, body copy, and glassmorphism interface cards in real time.
        </p>
      </div>

      {/* Font Selector Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {fontOptions.map((font) => {
          const isSelected = selectedFont.id === font.id;
          return (
            <button
              key={font.id}
              onClick={() => setSelectedFont(font)}
              className={`text-left p-4 rounded-2xl transition-all duration-300 relative flex flex-col justify-between ${
                isSelected
                  ? 'fef-glass-card-static border-cyan-400/60 shadow-[0_0_30px_rgba(25,211,208,0.25)] ring-1 ring-cyan-400/40'
                  : 'fef-glass-card hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${font.badgeColor}`}>
                    {font.badge}
                  </span>
                  {isSelected && (
                    <span className="h-5 w-5 rounded-full bg-cyan-400 text-black flex items-center justify-center text-xs font-bold">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                  )}
                </div>

                <h3 
                  className="text-lg font-semibold text-white mt-1"
                  style={{ fontFamily: font.fontFamily }}
                >
                  {font.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{font.category}</p>
                <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {font.vibe}
                </p>
              </div>

              <div 
                className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-cyan-400 flex items-center justify-between"
                style={{ fontFamily: font.fontFamily }}
              >
                <span>Aa Bb Gg 123</span>
                <ArrowRight className={`h-3 w-3 transition-transform ${isSelected ? 'translate-x-1 text-cyan-400' : 'text-slate-500'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Preview Container (Rendered in the selected font) */}
      <div 
        className="rounded-[2.5rem] fef-glass-section p-6 sm:p-12 space-y-12 transition-all duration-300"
        style={{ fontFamily: selectedFont.fontFamily }}
      >
        {/* Banner Bar indicating active font */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Current Font Preview:</span>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-2xl font-semibold text-white">{selectedFont.name}</span>
              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${selectedFont.badgeColor}`}>
                {selectedFont.category}
              </span>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-300 bg-white/[0.04] px-4 py-2 rounded-xl border border-white/10">
            font-family: {selectedFont.fontFamily}
          </div>
        </div>

        {/* Live Hero Mockup */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold uppercase tracking-[0.22em] shadow-[0_0_20px_rgba(25,211,208,0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            AI • SOFTWARE • DIGITAL INNOVATION
          </div>

          {/* Main Headline */}
          <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] text-white leading-[1.18] uppercase ${selectedFont.headlineStyle}`}>
            <span className="block">WE BUILD</span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent md:whitespace-nowrap">
              INTELLIGENT DIGITAL SOLUTIONS
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-slate-300/90 leading-relaxed font-normal uppercase tracking-wider max-w-4xl mx-auto">
            <span className="block md:whitespace-nowrap">
              AI-POWERED SOFTWARE, CINEMATIC WEBSITES, CUSTOM APPLICATIONS, BUSINESS AUTOMATION,
            </span>
            <span className="block mt-1 sm:mt-1.5 md:whitespace-nowrap text-slate-400">
              AND PROFESSIONAL TRADING TECHNOLOGY—ALL BUILT UNDER ONE INNOVATIVE ECOSYSTEM.
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] text-[#05070d] shadow-[0_0_30px_rgba(29,168,255,0.4)] hover:brightness-110 transition">
              EXPLORE OUR SOLUTIONS
            </button>
            <button className="px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 transition">
              MQL5 MARKET →
            </button>
          </div>
        </div>

        {/* Live Component Preview Cards */}
        <div className="grid sm:grid-cols-3 gap-6 pt-4">
          
          {/* Card 1: AI Capability */}
          <div className="p-6 rounded-2xl fef-glass-card space-y-3.5">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Autonomous Core</p>
            <h3 className="text-xl font-semibold text-white">AI Software & Automation</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Neural model integration, automated enterprise pipelines, and bespoke algorithmic logic engineered for speed.
            </p>
            <div className="pt-2 text-xs font-medium text-emerald-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              99.99% Operational Reliability
            </div>
          </div>

          {/* Card 2: Market Telemetry */}
          <div className="p-6 rounded-2xl fef-glass-card space-y-3.5">
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Activity className="h-5 w-5" />
              </div>
              <span className="text-[11px] text-emerald-400 font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                Live Feed
              </span>
            </div>
            <div>
              <p className="text-xs text-slate-400">XAUUSD (Gold Spot)</p>
              <div className="text-2xl sm:text-3xl font-semibold text-white font-mono mt-1">$4,418.99</div>
              <p className="text-xs font-medium text-emerald-400 font-mono mt-0.5">▲ +0.53% Bullish Breakout</p>
            </div>
            <p className="text-xs text-slate-300">Real-time sub-millisecond memory bridge synchronization.</p>
          </div>

          {/* Card 3: Enterprise Cloud */}
          <div className="p-6 rounded-2xl fef-glass-card space-y-3.5">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Zap className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">Execution Speed</p>
            <h3 className="text-xl font-semibold text-white">&lt; 0.02ms Latency</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Multi-slave direct memory mirroring with zero slippage across major MetaTrader 5 brokers worldwide.
            </p>
            <div className="pt-2 text-xs font-medium text-cyan-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
              Official MQL5 Market Release
            </div>
          </div>

        </div>

      </div>

      {/* Font Comparison Summary Table */}
      <div className="rounded-[2rem] fef-glass-section p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Typography In-Depth Analysis</h3>
          <p className="text-sm text-slate-300 mt-1">Key metrics and visual characteristics of each font candidate:</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="border-b border-white/10 text-slate-400 uppercase text-xs font-semibold tracking-wider">
              <tr>
                <th className="py-3 px-4">Font Name</th>
                <th className="py-3 px-4">Brand Personality</th>
                <th className="py-3 px-4">Headline Impact</th>
                <th className="py-3 px-4">UI & Body Readability</th>
                <th className="py-3 px-4">Status / Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {fontOptions.map((f) => (
                <tr key={f.id} className="hover:bg-white/[0.03] transition">
                  <td className="py-4 px-4 font-semibold text-white" style={{ fontFamily: f.fontFamily }}>
                    {f.name}
                  </td>
                  <td className="py-4 px-4 text-xs sm:text-sm">{f.category}</td>
                  <td className="py-4 px-4 text-cyan-300 text-xs sm:text-sm font-medium">
                    {f.id === 'plus-jakarta' && 'Cinematic, aerodynamic & authoritative'}
                    {f.id === 'outfit' && 'Ultra-clean, modern & autonomous'}
                    {f.id === 'space-grotesk' && 'Sharp, algorithmic & cybernetic'}
                    {f.id === 'sora' && 'Technical, structured & high-density'}
                    {f.id === 'inter' && 'Neutral, standard SaaS layout'}
                  </td>
                  <td className="py-4 px-4 text-emerald-400 text-xs sm:text-sm">
                    {f.id === 'plus-jakarta' && '★ Exceptional (crisp at 11px - 64px)'}
                    {f.id === 'outfit' && '★ Excellent (very smooth)'}
                    {f.id === 'space-grotesk' && 'Good (best for headers & badges)'}
                    {f.id === 'sora' && 'Very High (optimized for screens)'}
                    {f.id === 'inter' && 'Good (workhorse font)'}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${f.badgeColor}`}>
                      {f.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
