import React from 'react';
import { ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

export const TradingViewFooter: React.FC = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#020408]/60 backdrop-blur-2xl text-slate-300">
      
      {/* Top Pre-Footer Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="relative p-8 sm:p-12 rounded-[2.5rem] fef-glass-section overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
              <ShieldCheck className="h-3.5 w-3.5" />
              FEF Trading Solutions
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Build a professional{' '}
              <span className="bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent">
                MT5 software workflow
              </span>
            </h3>
            <p className="mt-2 text-sm sm:text-base font-normal text-slate-400 max-w-xl">
              Connect official FEF products, documentation, downloads, and support into one cohesive trading software ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/products"
              className="focus-ring px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              View Products
            </a>
            <a
              href="/downloads"
              className="focus-ring px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 transition"
            >
              Visit Downloads
            </a>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <a href="/" className="inline-block">
              <img 
                src="/images/fef-logo-ai.png" 
                alt="FEF Trading Solutions" 
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-xs font-normal text-slate-400 leading-relaxed">
              Professional MetaTrader 5 software for trade copying, manual trade management, documentation, downloads, and support workflows.
            </p>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-white">Products</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/trade-copier" className="hover:text-white transition">Trade Copier MT5</a></li>
              <li><a href="/manual-trade-manager" className="hover:text-white transition">Manual Trade Manager</a></li>
              <li><a href="/trading-agent" className="hover:text-white transition">Trading Agent</a></li>
              <li><a href="/products" className="hover:text-white transition">All Products</a></li>
              <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>

          {/* Column 2: Software Center */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-white">Software Center</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/downloads" className="hover:text-white transition">Downloads</a></li>
              <li><a href="/downloads/fef-trading-solutions-company-profile.pdf" download className="hover:text-white transition">Company Profile</a></li>
              <li><a href="/changelog" className="hover:text-white transition">Changelog</a></li>
              <li><a href="/documentation" className="hover:text-white transition">Documentation</a></li>
            </ul>
          </div>

          {/* Column 3: Official Market */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-white">Official Market</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://www.mql5.com/en/market/product/183557" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  <span>Trade Copier on MQL5</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://www.mql5.com/en/users/feftradingsolutions" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  <span>MQL5 Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li><a href="/support" className="hover:text-white transition">Support Center</a></li>
              <li>
                <a href="https://t.me/Feftrading" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1 text-cyan-300">
                  <span>Telegram (@Feftrading)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://w.app/8qrptz" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1 text-emerald-300">
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="mailto:fefhvn@gmail.com" className="hover:text-cyan-400 transition">
                  <span>fefhvn@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-white">Company</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/about-us" className="hover:text-white transition">About Us</a></li>
              <li><a href="/ai-software-development" className="hover:text-white transition">AI Software Development</a></li>
              <li><a href="/support" className="hover:text-white transition">Support Center</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Trademark Disclaimers */}
        <div className="pt-8 space-y-4 text-xs text-slate-400">
          <p className="leading-relaxed">
            <strong className="text-slate-300">Risk note:</strong> Trading involves risk. FEF software tools are designed to support workflow management and do not guarantee profit or remove market risk. Always test on demo before live use.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-[11px]">
            <p>
              © {new Date().getFullYear()} FEF Trading Solutions. All rights reserved. MetaTrader 5 and MT5 are registered trademarks of MetaQuotes Software Corp.
            </p>
            <div className="flex gap-4">
              <a href="/documentation" className="hover:text-white transition">Documentation</a>
              <a href="/support" className="hover:text-white transition">Support</a>
              <a href="/downloads" className="hover:text-white transition">Downloads</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
