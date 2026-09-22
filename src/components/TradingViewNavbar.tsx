import React, { useState } from 'react';
import { ChevronDown, Menu, X, ExternalLink, Sparkles, Globe, Terminal, Bot, TrendingUp } from 'lucide-react';

export interface TradingViewNavbarProps {
  currentPath?: string;
}

export const TradingViewNavbar: React.FC<TradingViewNavbarProps> = ({ currentPath = '/' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const isHome = currentPath === '/' || currentPath === '';
  const isAbout = currentPath === '/about-us';
  const isSolutions = currentPath === '/ai-software-development';
  const isProducts = ['/products', '/trade-copier', '/manual-trade-manager', '/trading-agent', '/pricing'].includes(currentPath);
  const isResources = ['/documentation', '/downloads', '/changelog'].includes(currentPath);
  const isSupport = ['/support', '/contact'].includes(currentPath);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <div className="relative flex items-center justify-between h-16 sm:h-18 px-5 sm:px-7 rounded-2xl fef-glass-section">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        {/* FEF Original Logo */}
        <a 
          href="/" 
          className="focus-ring flex items-center gap-3 shrink-0 group transition-transform hover:scale-[1.02]"
          aria-label="FEF Trading Solutions home"
        >
          <img 
            src="/images/fef-logo-ai.png" 
            alt="FEF Trading Solutions" 
            className="h-9 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-[0_0_12px_rgba(29,168,255,0.3)]"
          />
        </a>

        {/* Desktop Navigation Links & Dropdowns (Title Case & Bold/Semibold like inner menu) */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
          <a 
            href="/" 
            className={`focus-ring px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              isHome
                ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </a>
          <a 
            href="/about-us" 
            className={`focus-ring px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              isAbout
                ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            About Us
          </a>

          {/* SOLUTIONS Dropdown (Full Company Scope) */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('solutions')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              type="button" 
              onClick={() => toggleDropdown('solutions')}
              className={`focus-ring flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition hover:bg-white/5 ${
                isSolutions || openDropdown === 'solutions' ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>
            {openDropdown === 'solutions' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="rounded-2xl fef-glass-dropdown p-2.5 shadow-2xl space-y-1">
                  <a href="/ai-software-development" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-white hover:bg-white/10 transition group">
                    <Sparkles className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition leading-tight">AI Software Development</p>
                      <p className="text-xs text-slate-300 group-hover:text-slate-200 transition mt-0.5">Custom intelligent systems</p>
                    </div>
                  </a>
                  <a href="/ai-web-design-development" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-white hover:bg-white/10 transition group">
                    <Globe className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition leading-tight">AI Web Design & Development</p>
                      <p className="text-xs text-slate-300 group-hover:text-slate-200 transition mt-0.5">Cinematic digital web platforms</p>
                    </div>
                  </a>
                  <a href="/custom-applications" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-white hover:bg-white/10 transition group">
                    <Terminal className="h-4 w-4 text-[#1da8ff] group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition leading-tight">Custom Applications</p>
                      <p className="text-xs text-slate-300 group-hover:text-slate-200 transition mt-0.5">Bespoke code & portals</p>
                    </div>
                  </a>
                  <a href="/business-automation" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-white hover:bg-white/10 transition group">
                    <Bot className="h-4 w-4 text-purple-400 group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition leading-tight">Business Automation</p>
                      <p className="text-xs text-slate-300 group-hover:text-slate-200 transition mt-0.5">Streamlined operations</p>
                    </div>
                  </a>
                  <a href="/trade-copier" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-white hover:bg-white/10 transition group">
                    <TrendingUp className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition leading-tight">Trading Technology</p>
                      <p className="text-xs text-slate-300 group-hover:text-slate-200 transition mt-0.5">MT5 software & copiers</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* PRODUCTS Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('products')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              type="button" 
              onClick={() => toggleDropdown('products')}
              className={`focus-ring flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition hover:bg-white/5 ${
                isProducts || openDropdown === 'products' ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>
            {openDropdown === 'products' && (
              <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="rounded-2xl fef-glass-dropdown p-2.5 shadow-2xl space-y-1">
                  <a href="/trade-copier" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Trade Copier MT5</a>
                  <a href="/manual-trade-manager" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Manual Trade Manager</a>
                  <a href="/trading-agent" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Trading Agent</a>
                  <a href="/products" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Products</a>
                  <a href="/pricing" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Pricing</a>
                </div>
              </div>
            )}
          </div>

          {/* RESOURCES Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('resources')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              type="button" 
              onClick={() => toggleDropdown('resources')}
              className={`focus-ring flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition hover:bg-white/5 ${
                isResources || openDropdown === 'resources' ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Resources</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="rounded-2xl fef-glass-dropdown p-2.5 shadow-2xl space-y-1">
                  <a href="/documentation" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Documentation</a>
                  <a href="/documentation/trade-copier-setup" className="block rounded-xl px-3.5 py-2 text-xs text-slate-300 hover:bg-white/10 hover:text-cyan-300 transition">↳ Trade Copier Setup Guide</a>
                  <a href="/documentation/manual-trade-manager-setup" className="block rounded-xl px-3.5 py-2 text-xs text-slate-300 hover:bg-white/10 hover:text-cyan-300 transition">↳ Manual Manager Setup Guide</a>
                  <a href="/downloads" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Downloads</a>
                  <a href="/downloads/fef-trading-solutions-company-profile.pdf" download className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Company Profile (PDF)</a>
                  <a href="/changelog" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Changelog</a>
                </div>
              </div>
            )}
          </div>

          {/* SUPPORT Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('support')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              type="button" 
              onClick={() => toggleDropdown('support')}
              className={`focus-ring flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition hover:bg-white/5 ${
                isSupport || openDropdown === 'support' ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Support</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'support' ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>
            {openDropdown === 'support' && (
              <div className="absolute right-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="rounded-2xl fef-glass-dropdown p-2.5 shadow-2xl space-y-1">
                  <a href="/support" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Support Center</a>
                  <a href="/contact" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">Contact</a>
                  <a href="/support#faq" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-cyan-300 transition">FAQ</a>
                  <a
                    href="https://wa.me/971551230307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-emerald-400 hover:bg-white/10 hover:text-emerald-300 transition flex items-center justify-between"
                  >
                    <span>WhatsApp (+971 55 123 0307)</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action Button: MQL5 Market */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.mql5.com/en/market/product/183557"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:-translate-y-0.5"
          >
            <span>MQL5 MARKET</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus-ring lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-2xl fef-glass-dropdown shadow-2xl space-y-2 animate-in fade-in duration-200">
          <a href="/" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-white bg-white/10" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/about-us" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          
          <div className="py-2 px-3 border-y border-white/10 space-y-1.5">
            <p className="text-xs font-mono font-bold text-cyan-400">Solutions</p>
            <a href="/ai-software-development" className="block pl-2 py-1 text-xs font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>• AI Software Development</a>
            <a href="/ai-web-design-development" className="block pl-2 py-1 text-xs font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>• AI Web Design & Development</a>
            <a href="/custom-applications" className="block pl-2 py-1 text-xs font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>• Custom Applications</a>
            <a href="/business-automation" className="block pl-2 py-1 text-xs font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>• Business Automation</a>
            <a href="/trade-copier" className="block pl-2 py-1 text-xs font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>• Trading Technology</a>
          </div>

          <a href="/products" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="/documentation" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Documentation</a>
          <a href="/downloads" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Downloads</a>
          <a href="/contact" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a
            href="https://wa.me/971551230307"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center justify-between"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>WhatsApp (+971 55 123 0307)</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <div className="pt-3 border-t border-white/10">
            <a 
              href="https://www.mql5.com/en/market/product/183557" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow"
            >
              <span>Buy on MQL5</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
