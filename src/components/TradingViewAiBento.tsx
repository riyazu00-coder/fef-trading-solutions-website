import React from 'react';
import { Bot, BrainCircuit, Globe, Download, ExternalLink, QrCode } from 'lucide-react';

export const TradingViewAiBento: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">

        {/* Left Column: Heading & Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-50/90 text-emerald-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <Bot className="h-3.5 w-3.5 text-emerald-600" />
            AI Software Development
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.025em] text-[#080B1D] leading-tight">
            From idea to{' '}
            <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
              AI-backed software product
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#536078] leading-relaxed font-normal">
            FEF Trading Solutions helps businesses, traders, and founders turn ideas into professional digital products, AI-backed websites, automation systems, and market-focused software platforms.
          </p>

          {/* Dual Cards (Level 2 Light Glass Cards) */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl fef-glass-secondary hover:border-slate-300 transition group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-105 transition">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#080B1D]">AI Software Development</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#536078] leading-relaxed font-normal">
                Custom software products, dashboards, customer portals, workflow systems, and automation tools built around practical business needs.
              </p>
            </div>

            <div className="p-5 rounded-2xl fef-glass-secondary hover:border-slate-300 transition group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-105 transition">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#080B1D]">AI-backed Websites</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#536078] leading-relaxed font-normal">
                Premium websites planned with AI-supported content structure, contact flows, SEO foundations, automation-ready architecture, and future software expansion.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="https://app.feftradingsolutions.com/cockpit"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-[0_4px_18px_rgba(69,201,245,0.3)] transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>OPEN AI TRADING PLATFORM →</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href="/ai-software-development"
              className="focus-ring inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#080B1D] fef-glass-secondary hover:bg-white/90 transition"
            >
              <span>Explore AI Development</span>
              <ExternalLink className="h-4 w-4 text-[#536078]" />
            </a>

            <a
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#080B1D] fef-glass-secondary hover:bg-white/90 transition"
            >
              <span>Contact FEF</span>
            </a>

            <a
              href="/downloads/fef-trading-solutions-company-profile.pdf"
              download
              className="focus-ring inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#536078] hover:text-[#080B1D] transition py-2 px-2"
            >
              <Download className="h-4 w-4" />
              <span>View Company Profile</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase Bento */}
        <div className="space-y-5">
          {/* AI Hero Media Card (Retaining Natural Image Contrast) */}
          <div className="rounded-3xl p-2.5 fef-glass-primary overflow-hidden group">
            <img
              src="/images/ai-software-development-hero.png"
              alt="AI software development services by FEF Trading Solutions"
              className="w-full h-auto rounded-2xl border border-slate-200/60 object-cover group-hover:scale-[1.005] transition-transform duration-500"
            />
          </div>

          {/* QR Code Gateway Box (High Contrast & Scannable) */}
          <div className="p-5 sm:p-6 rounded-3xl fef-glass-primary">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="shrink-0 p-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <img
                  src="/images/site-qr.png"
                  alt="QR code for the official FEF Trading Solutions website"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                />
              </div>

              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-cyan-400/40 bg-cyan-50/90 text-cyan-800 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <QrCode className="h-3 w-3 text-cyan-600" />
                  Website QR
                </div>
                <h4 className="mt-2 text-lg sm:text-xl font-bold text-[#080B1D]">Scan to Visit Our Website</h4>
                <p className="mt-1 text-xs sm:text-sm text-[#536078]">
                  Scan the QR code to open the official FEF Trading Solutions website directly on your device.
                </p>
                <p className="mt-2 font-mono text-xs sm:text-sm font-semibold text-cyan-700 break-all">
                  https://www.feftradingsolutions.com
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
