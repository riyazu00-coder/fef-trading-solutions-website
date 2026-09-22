import React from 'react';
import { Bot, BrainCircuit, Globe, Download, ExternalLink, QrCode } from 'lucide-react';

export const TradingViewAiBento: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Outer Bento Glass Frame */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        {/* Glow corner accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Left Column: Heading & Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium uppercase tracking-[0.2em]">
              <Bot className="h-3.5 w-3.5" />
              AI Software Development
            </div>

            <h2 className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white leading-tight">
              From idea to{' '}
              <span className="fef-headline-gradient">
                AI-backed software product
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              FEF Trading Solutions helps businesses, traders, and founders turn ideas into professional digital products, AI-backed websites, automation systems, and market-focused software platforms.
            </p>

            {/* Dual Cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl fef-glass-card group">
                <div className="w-10 h-10 rounded-xl bg-[#1da8ff]/10 border border-[#1da8ff]/20 flex items-center justify-center text-[#1da8ff] mb-4 group-hover:scale-105 transition">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">AI Software Development</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Custom software products, dashboards, customer portals, workflow systems, and automation tools built around practical business needs.
                </p>
              </div>

              <div className="p-5 rounded-2xl fef-glass-card group">
                <div className="w-10 h-10 rounded-xl bg-[#19d787]/10 border border-[#19d787]/20 flex items-center justify-center text-[#19d787] mb-4 group-hover:scale-105 transition">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">AI-backed Websites</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Premium websites planned with AI-supported content structure, contact flows, SEO foundations, automation-ready architecture, and future software expansion.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="https://app.feftradingsolutions.com/cockpit"
                target="_blank"
                rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
              >
                <span>OPEN AI TRADING PLATFORM →</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a 
                href="/ai-software-development" className="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
              >
                <span>Explore AI Software Development</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a 
                href="/contact" className="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition"
              >
                <span>Contact FEF</span>
              </a>

              <a 
                href="/downloads/fef-trading-solutions-company-profile.pdf" 
                download 
                className="focus-ring inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition py-2 px-1"
              >
                <Download className="h-4 w-4" />
                <span>View / Download Company Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Bento */}
          <div className="space-y-5">
            {/* AI Hero Media Card */}
            <div className="rounded-[2rem] fef-glass-card-static p-2.5 overflow-hidden group">
              <img 
                src="/images/ai-software-development-hero.png" 
                alt="AI software development services by FEF Trading Solutions" className="w-full h-auto rounded-[1.5rem] border border-white/10 object-cover group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* QR Code Gateway Box */}
            <div className="p-5 sm:p-6 rounded-[2rem] fef-glass-card">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="shrink-0 p-3 bg-white rounded-2xl border border-emerald-500/30 shadow-[0_0_20px_rgba(25,215,135,0.2)]">
                  <img 
                    src="/images/site-qr.png" 
                    alt="QR code for the official FEF Trading Solutions website" className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-[11px] font-medium uppercase tracking-[0.16em]">
                    <QrCode className="h-3 w-3" />
                    Website QR
                  </div>
                  <h4 className="mt-2 text-lg sm:text-xl font-semibold text-white">Scan to Visit Our Website</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Scan the QR code to open the official FEF Trading Solutions website.
                  </p>
                  <p className="mt-2 font-mono text-xs sm:text-sm font-medium text-emerald-400 break-all">
                    https://www.feftradingsolutions.com
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
