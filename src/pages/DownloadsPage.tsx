import React from 'react';
import {
  Download,
  FileText,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Sliders,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';

export const DownloadsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Download className="h-3.5 w-3.5 text-cyan-400" />
            <span>FEF Software Downloads</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Professional MT5 <span className="fef-headline-gradient">Software Center</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            A central portal for official FEF Trading Solutions products, documentation, release notes, and safe setup guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/products" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <span>View Products</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/documentation" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>View Documentation</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Official MQL5 Products
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            MT5 Software Ecosystem
          </div>
          <div className="p-4 rounded-xl fef-glass-card text-xs text-slate-200">
            Documentation & Support
          </div>
        </div>
      </div>

      {/* Company Profile PDF Section */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
              <FileText className="h-3.5 w-3.5" />
              <span>Company Resource</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
              Company Profile (Official PDF)
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
              Download the official FEF Trading Solutions company profile with details about our trading software products, AI software development services, AI-backed websites, documentation, support resources, and future software ecosystem.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/downloads/fef-trading-solutions-company-profile.pdf"
              download="fef-trading-solutions-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:scale-105 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Download Company Profile (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Official Products on MQL5 Market */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Official Products</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Install through official <span className="fef-headline-gradient">MQL5 Market pages</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          FEF does not publish unverified direct download binaries. Product access, installation, and updates are handled securely through the official MQL5 Market links below.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Trade Copier */}
          <div className="p-8 rounded-[2.5rem] fef-glass-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                  Available on MQL5 Market MT5
                </span>
                <Cpu className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-emerald-300 transition">
                FEF Professional Trade Copier MT5
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                Professional master/slave trade copier for MetaTrader 5 account synchronization with local IPC communication and cross-broker symbol translation.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="https://www.mql5.com/en/market/product/183557"
                target="_blank"
                rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
              >
                <span>Buy on MQL5</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="/trade-copier" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 transition"
              >
                <span>Product Page</span>
              </a>
              <a
                href="/documentation/trade-copier-setup" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-cyan-400 hover:underline transition"
              >
                <span>Setup Guide</span>
              </a>
            </div>
          </div>

          {/* Manual Trade Manager */}
          <div className="p-8 rounded-[2.5rem] fef-glass-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
                  Available on MQL5 Market MT5
                </span>
                <Sliders className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-cyan-300 transition">
                FEF Manual Trade Manager Pro MT5
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                Manual trade management and visual market assistant dashboard for MetaTrader 5, engineered for structured SL/TP, breakeven, trailing stop, and partial close controls.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="https://www.mql5.com/en/market/product/183695"
                target="_blank"
                rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
              >
                <span>Buy on MQL5</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="/manual-trade-manager" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 transition"
              >
                <span>Product Page</span>
              </a>
              <a
                href="/documentation/manual-trade-manager-setup" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-cyan-400 hover:underline transition"
              >
                <span>Setup Guide</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Release Delivery Without Unsafe Direct Files */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Version / Release Status</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Release delivery <span className="fef-headline-gradient">without unsafe direct files</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Latest public versions are distributed through MQL5 Market. Release updates and product notes are published through FEF release channels.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 rounded-2xl fef-glass-card">
            <h4 className="text-base font-semibold text-white">Stable Release Channel</h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Latest public versions are distributed through official MQL5 Market product pages.
            </p>
          </div>
          <div className="p-6 rounded-2xl fef-glass-card">
            <h4 className="text-base font-semibold text-white">MQL5 Market Delivery</h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Users should install and update products directly from the official MQL5 Market pages.
            </p>
          </div>
          <div className="p-6 rounded-2xl fef-glass-card">
            <h4 className="text-base font-semibold text-white">Documentation Updates</h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Setup guidance and product notes are centralized in the FEF documentation area.
            </p>
          </div>
          <div className="p-6 rounded-2xl fef-glass-card">
            <h4 className="text-base font-semibold text-white">Changelog Tracking</h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Release updates and architectural notes are published through FEF release channels.
            </p>
          </div>
        </div>
      </div>

      {/* Safe Installation Checklist */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card-static border-emerald-500/30">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Safety Standards</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Prepare MT5 products with a controlled setup process</h3>
          <p className="mt-2 text-sm text-slate-300">
            Download-center actions should support safe installation, verification, and testing. Always confirm settings before using trading software on live accounts.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Install only from official MQL5 Market links</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Confirm MetaTrader 5 account access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Test on demo before live use</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Check broker symbol names and suffixes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Review lot/risk settings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Monitor first live sessions manually</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Keep product versions updated through MT5 Navigator</span>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Software Ecosystem Status */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Software Ecosystem</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Connected FEF software for <span className="fef-headline-gradient">professional MT5 workflows</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
          Available products, support resources, and planned platform modules are organized as one ecosystem. Future items are marked clearly as planned.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Trade Copier</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
              Available
            </span>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Manual Trade Manager</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
              Available
            </span>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Future Risk Manager</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/30">
              Planned
            </span>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Future Trade Scanner</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/30">
              Planned
            </span>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Customer Portal</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/30">
              Planned
            </span>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Documentation</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
              Active
            </span>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Support Center</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
              Active
            </span>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Changelog</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Risk Warning & Links */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card-static border-red-500/30 bg-red-500/[0.04]">
        <div className="flex flex-col md:flex-row gap-5">
          <AlertTriangle className="h-6 w-6 shrink-0 text-red-400" />
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-300">Risk Warning</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Trading financial markets involves significant risk and may result in the loss of capital. FEF Trading Solutions develops software tools only and does not guarantee profits or trading performance. Users should always test software on demo accounts before using live funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
