import React from 'react';
import {
  Layers,
  ArrowRight,
  ExternalLink,
  Cpu,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Layers className="h-3.5 w-3.5" />
            <span>FEF Software Ecosystem</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Professional MT5 Software Products for <span className="fef-headline-gradient">Serious Trading Workflows</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            FEF Trading Solutions is building a trading technology ecosystem for trade copying, manual trade management, documentation, downloads, support, and future professional MT5 tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/downloads"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <span>Visit Downloads</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>View Pricing</span>
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Official MQL5 Products
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            MetaTrader 5 Workflow
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Documentation & Support
          </div>
        </div>
      </div>

      {/* Main Released Products on MQL5 */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Main Products</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Official FEF products available through <span className="fef-headline-gradient">MQL5 Market</span>
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Trade Copier Card */}
          <div className="p-8 rounded-[2.5rem] fef-glass-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                  Available on MQL5 Market
                </span>
                <Cpu className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white group-hover:text-emerald-300 transition">
                FEF Professional Trade Copier MT5
              </h3>
              <p className="mt-2 text-sm text-slate-300 font-normal leading-relaxed">
                Professional master/slave trade copier for MetaTrader 5 account synchronization with ultra-low latency IPC replication.
              </p>

              <div className="mt-6 space-y-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Master/slave synchronization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Multi-account workflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Operator monitoring HUD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>MQL5 Market delivery</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="https://www.mql5.com/en/market/product/183557"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
              >
                <span>Buy on MQL5</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="/trade-copier"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 transition"
              >
                <span>View Product</span>
              </a>
              <a
                href="/documentation/trade-copier-setup"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-cyan-400 hover:underline transition"
              >
                <span>Documentation</span>
              </a>
            </div>
          </div>

          {/* Manual Trade Manager Card */}
          <div className="p-8 rounded-[2.5rem] fef-glass-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
                  Available on MQL5 Market
                </span>
                <Sliders className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white group-hover:text-cyan-300 transition">
                FEF Manual Trade Manager Pro MT5
              </h3>
              <p className="mt-2 text-sm text-slate-300 font-normal leading-relaxed">
                Manual trade management and visual market assistant dashboard for MetaTrader 5, engineered for structured post-entry protection.
              </p>

              <div className="mt-6 space-y-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Manual trade protection (no automated signals)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>SL/TP, breakeven, trailing, and partial close</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Visual on-chart market assistant HUD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>MQL5 Market delivery</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="https://www.mql5.com/en/market/product/183695"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
              >
                <span>Buy on MQL5</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="/manual-trade-manager"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 transition"
              >
                <span>View Product</span>
              </a>
              <a
                href="/documentation/manual-trade-manager-setup"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-cyan-400 hover:underline transition"
              >
                <span>Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Product Comparison */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Product Comparison</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Choose the product that matches your <span className="fef-headline-gradient">operating workflow</span>
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="fef-glass-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>FEF Trade Copier MT5</th>
                <th>FEF Manual Trade Manager PRO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Purpose</td>
                <td>Copy trades from master to slave accounts</td>
                <td>Manage manual trades with structured controls and visual context</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Best For</td>
                <td>Multi-account execution workflows</td>
                <td>Manual traders and active prop desk operators</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Main Workflow</td>
                <td>Synchronization</td>
                <td>Manual trade management (no automatic signals)</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Availability</td>
                <td>Released on MQL5 Market (#183557)</td>
                <td>Released on MQL5 Market (#183695)</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Setup Instructions</td>
                <td>
                  <a href="/documentation/trade-copier-setup" className="text-cyan-400 hover:underline">
                    Trade Copier Guide
                  </a>
                </td>
                <td>
                  <a href="/documentation/manual-trade-manager-setup" className="text-cyan-400 hover:underline">
                    Manual Manager Guide
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ecosystem Roadmap */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono">FEF Ecosystem Roadmap</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Available products today, <span className="fef-headline-gradient">planned ecosystem tools ahead</span>
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Trade Copier MT5', status: 'Available', type: 'released' },
            { name: 'Manual Trade Manager Pro', status: 'Available', type: 'released' },
            { name: 'Downloads Center', status: 'Available', type: 'released' },
            { name: 'Documentation Portal', status: 'Available', type: 'released' },
            { name: 'Support Center', status: 'Available', type: 'released' },
            { name: 'Trading Agent (Research Preview)', status: 'Planned / Research', type: 'planned' },
            { name: 'Risk Manager', status: 'Planned', type: 'planned' },
            { name: 'Trade Scanner', status: 'Planned', type: 'planned' },
            { name: 'Customer Portal', status: 'Planned', type: 'planned' },
            { name: 'License Manager', status: 'Planned', type: 'planned' },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{item.name}</span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                  item.type === 'released'
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                    : 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Safe Usage */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card-static border-emerald-500/30">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Trust & Safe Usage</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Professional software workflows start with controlled testing
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            FEF software is designed to support MT5 workflow management, but users should review documentation, test settings, and monitor early sessions carefully.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Use official MQL5 Market product pages</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Read documentation before deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Test on demo first</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Confirm broker symbol names and settings</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Trading software does not remove market risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
