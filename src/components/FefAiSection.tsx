import React from 'react';
import { Bot, BrainCircuit, Globe, ExternalLink, Download, QrCode } from 'lucide-react';

export const FefAiSection: React.FC = () => {
  return (
    <section id="ai-section" className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.92),rgba(11,18,32,0.90))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10 backdrop-blur-xl">
        <div className="site-grid absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent" aria-hidden="true" />
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-electric/10 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
              <Bot className="h-4 w-4" />
              AI Software Development
            </div>

            <h2 className="mt-6 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
              From idea to{' '}
              <span className="text-gradient">AI-backed software product</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-8 font-normal text-steel">
              FEF Trading Solutions helps businesses, traders, and founders turn ideas into professional digital products, AI-backed websites, automation systems, and market-focused software platforms.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="premium-card rounded-2xl border border-line bg-panel/75 p-5">
                <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric w-max">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-semibold text-white">AI Software Development</h3>
                <p className="mt-3 text-sm leading-6 font-normal text-steel">
                  Custom software products, dashboards, customer portals, workflow systems, and automation tools built around practical business needs.
                </p>
              </article>

              <article className="premium-card rounded-2xl border border-line bg-panel/75 p-5">
                <div className="rounded-xl border border-electric/25 bg-electric/10 p-3 text-electric w-max">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-semibold text-white">AI-backed Websites</h3>
                <p className="mt-3 text-sm leading-6 font-normal text-steel">
                  Premium websites planned with AI-supported content structure, contact flows, SEO foundations, automation-ready architecture, and future software expansion.
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a 
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition bg-brand-gradient text-[#05070d] shadow-glow hover:brightness-110 active:scale-95" 
                href="#hero"
              >
                <span>Explore AI Software Development</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a 
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition border border-line bg-white/[0.04] text-white hover:border-electric/70 hover:bg-electric/10" 
                href="#hero"
              >
                <span>Contact FEF</span>
              </a>

              <a 
                href="/downloads/fef-trading-solutions-company-profile.pdf"
                download
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg text-sm font-medium text-steel transition hover:text-white"
              >
                <Download className="h-4 w-4" />
                <span>View Company Profile</span>
              </a>
            </div>
          </div>

          {/* QR Code and AI Visual */}
          <div className="grid gap-5">
            <div className="premium-card rounded-[2rem] border border-line bg-panel/75 p-6 backdrop-blur-md">
              <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
                {/* Visual QR container */}
                <div className="rounded-2xl border border-emerald/25 bg-white p-3 shadow-emerald flex items-center justify-center">
                  <div className="h-32 w-32 bg-slate-100 flex flex-col items-center justify-center rounded-lg border border-slate-300">
                    <QrCode className="h-24 w-24 text-slate-800" />
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan">
                    <QrCode className="h-4 w-4" />
                    Website QR
                  </div>
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Scan to Visit Our Website</h3>
                  <p className="mt-3 text-sm leading-6 font-normal text-steel">
                    Scan the QR code to open the official FEF Trading Solutions website.
                  </p>
                  <p className="mt-4 break-all font-mono text-sm font-medium text-emerald">
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
