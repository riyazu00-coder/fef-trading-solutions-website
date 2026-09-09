import React, { useState } from 'react';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

export const FefHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-ink/80 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        
        {/* Original FEF Logo */}
        <a 
          className="focus-ring flex shrink-0 items-center rounded-md gap-3 group" 
          aria-label="FEF Trading Solutions home" 
          href="/"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric via-cyan to-emerald p-[1.5px] shadow-glow transition-transform group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-ink font-bold text-white text-base tracking-tighter">
              <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">FEF</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-semibold text-lg text-white tracking-tight leading-none">
              FEF TRADING
            </span>
            <span className="text-[10px] font-medium tracking-widest text-steel uppercase leading-tight mt-1">
              SOLUTIONS
            </span>
          </div>
        </a>

        {/* Original Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          <a className="focus-ring rounded-md px-3 py-2 text-[15px] font-medium transition bg-electric/12 text-white" href="#hero">
            Home
          </a>
          <a className="focus-ring rounded-md px-3 py-2 text-[15px] font-medium transition text-steel hover:text-white" href="#ai-section">
            About Us
          </a>
          <a className="focus-ring rounded-md px-3 py-2 text-[15px] font-medium transition text-steel hover:text-white" href="#ai-section">
            AI Software Development
          </a>

          {/* Products Dropdown */}
          <div 
            className="group relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button 
              type="button" 
              className="focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-steel transition hover:text-white"
            >
              Products
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className={`absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-line bg-ink/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl transition-all duration-200 ${
              productsOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
            }`}>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#hero">Trade Copier MT5</a>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#copier-workflow">Manual Trade Manager</a>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#ai-section">Trading Agent</a>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#hero">Products Overview</a>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="https://www.mql5.com/en/market/product/183557" target="_blank" rel="noreferrer">Pricing on MQL5</a>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div 
            className="group relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button 
              type="button" 
              className="focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-steel transition hover:text-white"
            >
              Resources
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className={`absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-line bg-ink/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl transition-all duration-200 ${
              resourcesOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
            }`}>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#copier-workflow">Documentation</a>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#hero">Downloads</a>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#hero">Changelog</a>
            </div>
          </div>

          {/* Support Dropdown */}
          <div 
            className="group relative"
            onMouseEnter={() => setSupportOpen(true)}
            onMouseLeave={() => setSupportOpen(false)}
          >
            <button 
              type="button" 
              className="focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-steel transition hover:text-white"
            >
              Support
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className={`absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-line bg-ink/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl transition-all duration-200 ${
              supportOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
            }`}>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#ai-section">Support Center</a>
              <a className="block rounded-xl px-4 py-3 text-sm transition text-steel hover:bg-white/[0.04] hover:text-white" href="#ai-section">Contact</a>
            </div>
          </div>
        </nav>

        {/* Right CTA Button: Original "Buy on MQL5" with brand gradient */}
        <div className="hidden lg:block">
          <a 
            href="https://www.mql5.com/en/market/product/183557" 
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition bg-brand-gradient text-[#05070d] shadow-glow hover:brightness-110 active:scale-95" 
            target="_blank" 
            rel="noreferrer"
          >
            <span>Buy on MQL5</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.04] text-white lg:hidden" 
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-ink/95 px-6 py-6 backdrop-blur-2xl space-y-3">
          <a className="block rounded-lg px-3 py-2 text-sm font-medium text-white bg-electric/15" href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a className="block rounded-lg px-3 py-2 text-sm font-medium text-steel hover:text-white" href="#ai-section" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a className="block rounded-lg px-3 py-2 text-sm font-medium text-steel hover:text-white" href="#ai-section" onClick={() => setMobileMenuOpen(false)}>AI Software Development</a>
          <a className="block rounded-lg px-3 py-2 text-sm font-medium text-steel hover:text-white" href="#hero" onClick={() => setMobileMenuOpen(false)}>Trade Copier MT5</a>
          <a className="block rounded-lg px-3 py-2 text-sm font-medium text-steel hover:text-white" href="#market-pulse" onClick={() => setMobileMenuOpen(false)}>Market Pulse</a>
          <a className="block rounded-lg px-3 py-2 text-sm font-medium text-steel hover:text-white" href="#copier-workflow" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          
          <div className="pt-4 border-t border-white/[0.08]">
            <a 
              href="https://www.mql5.com/en/market/product/183557" 
              target="_blank" 
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-gradient py-3 text-sm font-semibold text-[#05070d]"
            >
              <span>Buy on MQL5</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
