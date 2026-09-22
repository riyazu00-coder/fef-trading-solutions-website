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

export const TradingViewFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/[0.08] bg-ink/90 text-slate-300 backdrop-blur-xl">
      {/* Original FEF technical-grid atmosphere */}
      <div
        className="site-grid absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent"
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
        {/* Original-style upper callout */}
        <section className="relative overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_20%_15%,rgba(69,201,245,0.15),transparent_22rem),radial-gradient(circle_at_88%_85%,rgba(165,122,243,0.10),transparent_24rem),linear-gradient(145deg,rgba(15,32,55,0.92),rgba(6,10,18,0.96)_55%,rgba(10,16,34,0.90))] p-6 shadow-glow backdrop-blur-md sm:p-8 lg:p-10">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                <BadgeCheck className="h-4 w-4" />
                FEF Trading Solutions
              </span>

              <h2 className="mt-6 max-w-3xl text-balance text-2xl font-semibold tracking-[-0.015em] text-white sm:text-4xl lg:text-5xl">
                Build the right digital system for{' '}
                <span className="fef-headline-gradient">
                  what comes next.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base font-normal leading-7 text-steel">
                AI software, cinematic web experiences, custom applications,
                business automation and professional trading technology built
                within one connected FEF ecosystem.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-gradient px-5 py-3 text-sm font-medium text-[#05070d] shadow-glow transition hover:brightness-110 active:scale-95"
                href="/products"
              >
                Explore Products
              </a>

              <a
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400/60 hover:bg-cyan-400/[0.08]"
                href="/contact"
              >
                Start a Project
              </a>
            </div>
          </div>
        </section>

        {/* Original lower footer composition */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          {/* Brand card */}
          <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
            <a href="/" className="inline-flex items-center">
              <img
                src="/images/fef-logo-ai.png"
                alt="FEF Trading Solutions" className="h-11 w-auto object-contain"
              />
            </a>

            <p className="mt-6 max-w-lg text-sm leading-7 text-steel">
              Intelligent software and digital systems spanning AI, web
              development, custom applications, business automation and
              professional MetaTrader 5 software.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
                AI Systems
              </span>
              <span className="rounded-full border border-blue-400/25 bg-blue-400/[0.07] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-blue-300">
                Digital Platforms
              </span>
              <span className="rounded-full border border-violet-400/25 bg-violet-400/[0.07] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-violet-300">
                Trading Technology
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href="/products" className="rounded-2xl border border-line bg-ink/55 p-4 text-center transition hover:border-cyan-400/30 hover:bg-white/[0.04]"
              >
                <Layers className="mx-auto mb-2 h-5 w-5 text-cyan-300" />
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-steel">
                  Explore
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Products
                </p>
              </a>

              <a
                href="/downloads" className="rounded-2xl border border-line bg-ink/55 p-4 text-center transition hover:border-blue-400/30 hover:bg-white/[0.04]"
              >
                <Download className="mx-auto mb-2 h-5 w-5 text-blue-300" />
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-steel">
                  Software
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Downloads
                </p>
              </a>

              <a
                href="/support" className="rounded-2xl border border-line bg-ink/55 p-4 text-center transition hover:border-violet-400/30 hover:bg-white/[0.04]"
              >
                <Headphones className="mx-auto mb-2 h-5 w-5 text-violet-300" />
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-steel">
                  Assistance
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Support
                </p>
              </a>
            </div>
          </div>

          {/* Current website directory */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-cyan-300" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Solutions
                </h4>
              </div>

              <ul className="space-y-3 text-sm text-steel">
                <li>
                  <a href="/ai-software-development" className="transition hover:text-white">
                    AI Software
                  </a>
                </li>
                <li>
                  <a href="/ai-web-design-development" className="transition hover:text-white">
                    AI Web Design
                  </a>
                </li>
                <li>
                  <a href="/custom-applications" className="transition hover:text-white">
                    Custom Applications
                  </a>
                </li>
                <li>
                  <a href="/business-automation" className="transition hover:text-white">
                    Business Automation
                  </a>
                </li>
                <li>
                  <a href="/trading-technology" className="transition hover:text-white">
                    Trading Technology
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Workflow className="h-4 w-4 text-blue-300" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Products
                </h4>
              </div>

              <ul className="space-y-3 text-sm text-steel">
                <li>
                  <a href="/trade-copier" className="transition hover:text-white">
                    Trade Copier MT5
                  </a>
                </li>
                <li>
                  <a href="/manual-trade-manager" className="transition hover:text-white">
                    Manual Trade Manager
                  </a>
                </li>
                <li>
                  <a href="/trading-agent" className="transition hover:text-white">
                    Trading Agent
                  </a>
                </li>
                <li>
                  <a href="/products" className="transition hover:text-white">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="transition hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-violet-300" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Resources
                </h4>
              </div>

              <ul className="space-y-3 text-sm text-steel">
                <li>
                  <a href="/documentation" className="transition hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/downloads" className="transition hover:text-white">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="/changelog" className="transition hover:text-white">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="/support" className="transition hover:text-white">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Official Market
              </h4>

              <ul className="space-y-3 text-sm text-steel">
                <li>
                  <a
                    href="https://www.mql5.com/en/market/product/183557"
                    target="_blank"
                    rel="noopener noreferrer" className="flex items-center gap-1 transition hover:text-cyan-300"
                  >
                    Trade Copier
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.mql5.com/en/market/product/183695"
                    target="_blank"
                    rel="noopener noreferrer" className="flex items-center gap-1 transition hover:text-cyan-300"
                  >
                    Manual Manager
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.mql5.com/en/users/feftradingsolutions"
                    target="_blank"
                    rel="noopener noreferrer" className="flex items-center gap-1 transition hover:text-cyan-300"
                  >
                    FEF MQL5 Profile
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>

                <li>
                  <a href="/about-us" className="transition hover:text-white">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk note */}
        <div className="mt-10 rounded-2xl border border-white/[0.06] bg-black/10 px-5 py-4 text-xs leading-6 text-slate-400">
          <strong className="font-medium text-slate-300">Risk note:</strong>{' '}
          Trading involves risk. FEF software tools support workflow management
          and do not guarantee profit or remove market risk. Test software in a
          demo environment before live use.
        </div>

        {/* Bottom legal bar */}
        <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.08] pt-8 text-xs text-steel lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} FEF Trading Solutions. All rights reserved. MetaTrader 5
            and MT5 are trademarks of MetaQuotes Software Corp.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="transition hover:text-white">
              Terms of Use
            </a>
            <a href="/risk-disclaimer" className="transition hover:text-amber-300">
              Risk Disclaimer
            </a>
            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-1 border-t border-white/[0.05] pt-6 font-mono text-[10px] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between">
          <span className="text-cyan-300/80">
            AI INTELLIGENCE • REAL OPPORTUNITIES
          </span>
          <span className="fef-headline-gradient">
            A SMARTER TOMORROW
          </span>
        </div>
      </div>
    </footer>
  );
};
