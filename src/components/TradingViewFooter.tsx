import React from 'react';
import {
  BadgeCheck,
  Layers,
  Download,
  Headphones,
  ExternalLink,
  Cpu,
  Globe2,
  Workflow,
} from 'lucide-react';

interface TradingViewFooterProps {
  currentPath?: string;
}

export const TradingViewFooter: React.FC<TradingViewFooterProps> = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-slate-200/70 bg-gradient-to-b from-transparent via-[#f0f4fc]/40 to-[#e8eefa]/70 text-[#536078]">
      {/* Technical grid atmosphere */}
      <div
        className="site-grid absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[8%] top-0 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[8%] top-24 h-80 w-80 rounded-full bg-violet-500/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Upper callout */}
        <section className="relative overflow-hidden p-6 sm:p-8 lg:p-10 rounded-[2.5rem] fef-glass-cta shadow-xl">
          <div className="absolute -top-24 left-1/4 w-80 h-80 bg-[#45c9f5]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-[#a57af3]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] fef-glass-subtle text-[#080B1D]">
                <BadgeCheck className="h-4 w-4 text-cyan-600" />
                FEF Trading Solutions
              </span>

              <h2 className="mt-6 max-w-3xl text-balance text-2xl font-black tracking-[-0.015em] sm:text-4xl lg:text-5xl uppercase text-[#080B1D]">
                Build the right digital system for{' '}
                <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(69,201,245,0.25)]">
                  what comes next.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base font-normal leading-7 text-[#536078]">
                AI software, cinematic web experiences, custom applications,
                business automation and professional trading technology built
                within one connected FEF ecosystem.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:scale-95 bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] text-white hover:brightness-110 shadow-[0_6px_22px_rgba(69,201,245,0.32)]"
                href="/products"
              >
                Explore Products
              </a>

              <a
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition fef-glass-secondary text-[#080B1D] hover:bg-white"
                href="/contact"
              >
                Start a Project
              </a>
            </div>
          </div>
        </section>

        {/* Lower footer composition */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          {/* Brand card */}
          <div className="rounded-[2rem] p-6 sm:p-8 fef-glass-primary">
            <a href="/" className="inline-flex items-center">
              <img
                src="/images/fef-logo-transparent.png"
                alt="FEF Trading Solutions"
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#536078]">
              Intelligent software and digital systems spanning AI, web
              development, custom applications, business automation and
              professional MetaTrader 5 software.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] border border-cyan-500/20 bg-cyan-50/80 text-cyan-700">
                AI Systems
              </span>
              <span className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] border border-blue-500/20 bg-blue-50/80 text-blue-700">
                Digital Platforms
              </span>
              <span className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] border border-violet-500/20 bg-violet-50/80 text-violet-700">
                Trading Technology
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href="/products"
                className="rounded-2xl p-4 text-center transition fef-glass-secondary hover:bg-white hover:border-cyan-400/40"
              >
                <Layers className="mx-auto mb-2 h-5 w-5 text-cyan-600" />
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Explore
                </p>
                <p className="mt-1 text-sm font-semibold text-[#080B1D]">
                  Products
                </p>
              </a>

              <a
                href="/downloads"
                className="rounded-2xl p-4 text-center transition fef-glass-secondary hover:bg-white hover:border-blue-400/40"
              >
                <Download className="mx-auto mb-2 h-5 w-5 text-blue-600" />
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Software
                </p>
                <p className="mt-1 text-sm font-semibold text-[#080B1D]">
                  Downloads
                </p>
              </a>

              <a
                href="/support"
                className="rounded-2xl p-4 text-center transition fef-glass-secondary hover:bg-white hover:border-violet-400/40"
              >
                <Headphones className="mx-auto mb-2 h-5 w-5 text-violet-600" />
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Assistance
                </p>
                <p className="mt-1 text-sm font-semibold text-[#080B1D]">
                  Support
                </p>
              </a>
            </div>
          </div>

          {/* Current website directory */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-cyan-600" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#080B1D]">
                  Solutions
                </h4>
              </div>

              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li>
                  <a href="/ai-software-development" className="transition text-slate-700 hover:text-cyan-600">
                    AI Software
                  </a>
                </li>
                <li>
                  <a href="/ai-web-design-development" className="transition text-slate-700 hover:text-cyan-600">
                    AI Web Design
                  </a>
                </li>
                <li>
                  <a href="/custom-applications" className="transition text-slate-700 hover:text-cyan-600">
                    Custom Applications
                  </a>
                </li>
                <li>
                  <a href="/business-automation" className="transition text-slate-700 hover:text-cyan-600">
                    Business Automation
                  </a>
                </li>
                <li>
                  <a href="/trading-technology" className="transition text-slate-700 hover:text-cyan-600">
                    Trading Technology
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Workflow className="h-4 w-4 text-blue-600" />
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#080B1D]">
                  Products
                </h4>
              </div>

              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li>
                  <a href="/trade-copier" className="transition text-slate-700 hover:text-cyan-600">
                    Trade Copier MT5
                  </a>
                </li>
                <li>
                  <a href="/manual-trade-manager" className="transition text-slate-700 hover:text-cyan-600">
                    Manual Trade Manager
                  </a>
                </li>
                <li>
                  <a href="/trading-agent" className="transition text-slate-700 hover:text-cyan-600">
                    Trading Agent
                  </a>
                </li>
                <li>
                  <a href="/products" className="transition text-slate-700 hover:text-cyan-600">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="transition text-slate-700 hover:text-cyan-600">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-violet-600" />
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#080B1D]">
                  Resources
                </h4>
              </div>

              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li>
                  <a href="/documentation" className="transition text-slate-700 hover:text-cyan-600">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/downloads" className="transition text-slate-700 hover:text-cyan-600">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="/changelog" className="transition text-slate-700 hover:text-cyan-600">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="/support" className="transition text-slate-700 hover:text-cyan-600">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="transition text-slate-700 hover:text-cyan-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#080B1D]">
                Official Market
              </h4>

              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li>
                  <a
                    href="https://www.mql5.com/en/market/product/183557"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition text-slate-700 hover:text-cyan-600"
                  >
                    Trade Copier
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.mql5.com/en/market/product/183695"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition text-slate-700 hover:text-cyan-600"
                  >
                    Manual Manager
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.mql5.com/en/users/feftradingsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition text-slate-700 hover:text-cyan-600"
                  >
                    FEF MQL5 Profile
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>

                <li>
                  <a href="/about-us" className="transition text-slate-700 hover:text-cyan-600">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk note */}
        <div className="mt-10 rounded-2xl px-5 py-4 text-xs leading-6 fef-glass-subtle text-slate-700">
          <strong className="font-semibold text-[#080B1D]">Risk note:</strong>{' '}
          Trading involves risk. FEF software tools support workflow management
          and do not guarantee profit or remove market risk. Test software in a
          demo environment before live use.
        </div>

        {/* Bottom legal bar */}
        <div className="mt-8 flex flex-col gap-5 border-t pt-8 text-xs lg:flex-row lg:items-center lg:justify-between border-slate-200/80 text-slate-600">
          <p>
            © {year} FEF Trading Solutions. All rights reserved. MetaTrader 5
            and MT5 are trademarks of MetaQuotes Software Corp.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="/privacy-policy" className="transition text-slate-700 hover:text-cyan-600">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="transition text-slate-700 hover:text-cyan-600">
              Terms of Use
            </a>
            <a href="/risk-disclaimer" className="transition text-slate-700 hover:text-amber-600">
              Risk Disclaimer
            </a>
            <a href="/contact" className="transition text-slate-700 hover:text-cyan-600">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-1 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between border-slate-200/60">
          <span className="text-cyan-700 font-semibold">
            AI INTELLIGENCE • REAL OPPORTUNITIES
          </span>
          <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent font-bold">
            A SMARTER TOMORROW
          </span>
        </div>
      </div>
    </footer>
  );
};
