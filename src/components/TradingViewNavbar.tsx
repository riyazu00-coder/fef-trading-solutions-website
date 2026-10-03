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
  const isSolutions = [
    '/ai-software-development',
    '/ai-web-design-development',
    '/custom-applications',
    '/business-automation',
    '/trading-technology',
  ].includes(currentPath);
  const isProducts = ['/products', '/trade-copier', '/manual-trade-manager', '/trading-agent', '/pricing'].includes(currentPath);
  const isResources = ['/documentation', '/documentation/trade-copier-setup', '/documentation/manual-trade-manager-setup', '/downloads', '/changelog'].includes(currentPath);
  const isSupport = ['/support', '/contact'].includes(currentPath);

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300 !bg-transparent">
      <div className="relative flex items-center justify-between w-full h-15 sm:h-18 px-4 sm:px-7 rounded-full bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

        {/* FEF Brand Logo */}
        <a
          href="/"
          className="focus-ring flex items-center gap-3 shrink-0 group transition-transform hover:scale-[1.02]"
          aria-label="FEF Trading Solutions home"
        >
          <img
            src="/images/fef-logo-transparent.png"
            alt="FEF Trading Solutions"
            className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links & Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
          <a
            href="/"
            className={`focus-ring px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
              isHome
                ? 'text-slate-900 bg-[#e8edf8] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
            }`}
          >
            Home
          </a>
          <a
            href="/about-us"
            className={`focus-ring px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
              isAbout
                ? 'text-slate-900 bg-[#e8edf8]'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
            }`}
          >
            About Us
          </a>

          {/* SOLUTIONS Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('solutions')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => toggleDropdown('solutions')}
              className={`focus-ring flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                isSolutions || openDropdown === 'solutions'
                  ? 'text-slate-950 bg-[#e8edf8]'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-cyan-500' : ''}`} />
            </button>
            {openDropdown === 'solutions' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="rounded-2xl p-2.5 shadow-2xl space-y-1 bg-white/95 backdrop-blur-2xl border border-slate-200/90">
                  <a href="/ai-software-development" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm transition group hover:bg-slate-100/80 text-slate-800">
                    <Sparkles className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold transition leading-tight text-slate-900 group-hover:text-cyan-600">AI Software Development</p>
                      <p className="text-xs transition mt-0.5 text-slate-500">Custom intelligent systems</p>
                    </div>
                  </a>
                  <a href="/ai-web-design-development" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm transition group hover:bg-slate-100/80 text-slate-800">
                    <Globe className="h-4 w-4 text-cyan-500 group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold transition leading-tight text-slate-900 group-hover:text-cyan-600">AI Web Design & Development</p>
                      <p className="text-xs transition mt-0.5 text-slate-500">Cinematic digital web platforms</p>
                    </div>
                  </a>
                  <a href="/custom-applications" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm transition group hover:bg-slate-100/80 text-slate-800">
                    <Terminal className="h-4 w-4 text-[#0099ff] group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold transition leading-tight text-slate-900 group-hover:text-cyan-600">Custom Applications</p>
                      <p className="text-xs transition mt-0.5 text-slate-500">Bespoke code & portals</p>
                    </div>
                  </a>
                  <a href="/business-automation" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm transition group hover:bg-slate-100/80 text-slate-800">
                    <Bot className="h-4 w-4 text-purple-500 group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold transition leading-tight text-slate-900 group-hover:text-cyan-600">Business Automation</p>
                      <p className="text-xs transition mt-0.5 text-slate-500">Streamlined operations</p>
                    </div>
                  </a>
                  <a href="/trading-technology" className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm transition group hover:bg-slate-100/80 text-slate-800">
                    <TrendingUp className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition shrink-0" />
                    <div>
                      <p className="text-sm font-semibold transition leading-tight text-slate-900 group-hover:text-cyan-600">Trading Technology</p>
                      <p className="text-xs transition mt-0.5 text-slate-500">MT5 software & copiers</p>
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
              className={`focus-ring flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                isProducts || openDropdown === 'products'
                  ? 'text-slate-950 bg-[#e8edf8]'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180 text-cyan-500' : ''}`} />
            </button>
            {openDropdown === 'products' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="rounded-2xl p-2.5 shadow-2xl space-y-1 bg-white/95 backdrop-blur-2xl border border-slate-200/90">
                  <a href="/trade-copier" className="block rounded-xl px-3.5 py-2.5 transition hover:bg-slate-100/80">
                    <p className="text-sm font-semibold leading-tight text-slate-900 hover:text-cyan-600">Trade Copier MT5</p>
                    <p className="text-xs mt-0.5 text-slate-500">Professional local account mirroring</p>
                  </a>
                  <a href="/manual-trade-manager" className="block rounded-xl px-3.5 py-2.5 transition hover:bg-slate-100/80">
                    <p className="text-sm font-semibold leading-tight text-slate-900 hover:text-cyan-600">Manual Trade Manager</p>
                    <p className="text-xs mt-0.5 text-slate-500">One-click visual execution panel</p>
                  </a>
                  <a href="/trading-agent" className="block rounded-xl px-3.5 py-2.5 transition hover:bg-slate-100/80">
                    <p className="text-sm font-semibold leading-tight text-slate-900 hover:text-cyan-600">
                      Trading Agent
                      <span className="ml-2 text-[9px] font-mono font-medium uppercase tracking-wider text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded-full">Research</span>
                    </p>
                    <p className="text-xs mt-0.5 text-slate-500">Autonomous strategy automation</p>
                  </a>
                  <div className="pt-1 mt-1 border-t border-slate-200/60 flex items-center justify-between px-3.5 py-1.5">
                    <a href="/products" className="text-xs font-semibold text-cyan-600 hover:text-cyan-700">All Products →</a>
                    <a href="/pricing" className="text-xs font-semibold text-slate-500 hover:text-slate-800">Pricing</a>
                  </div>
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
              className={`focus-ring flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                isResources || openDropdown === 'resources'
                  ? 'text-slate-950 bg-[#e8edf8]'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              <span>Resources</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180 text-cyan-500' : ''}`} />
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="rounded-2xl p-2.5 shadow-2xl space-y-1 bg-white/95 backdrop-blur-2xl border border-slate-200/90">
                  <a href="/documentation" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition text-slate-800 hover:bg-slate-100 hover:text-cyan-600">Documentation</a>
                  <a href="/documentation/trade-copier-setup" className="block rounded-xl px-3.5 py-2 text-xs transition text-slate-500 hover:bg-slate-100 hover:text-slate-800">↳ Trade Copier Setup Guide</a>
                  <a href="/documentation/manual-trade-manager-setup" className="block rounded-xl px-3.5 py-2 text-xs transition text-slate-500 hover:bg-slate-100 hover:text-slate-800">↳ Manual Manager Setup Guide</a>
                  <a href="/downloads" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition text-slate-800 hover:bg-slate-100 hover:text-cyan-600">Downloads</a>
                  <a href="/downloads/fef-trading-solutions-company-profile.pdf" download className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition text-slate-800 hover:bg-slate-100 hover:text-cyan-600">Company Profile (PDF)</a>
                  <a href="/changelog" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition text-slate-800 hover:bg-slate-100 hover:text-cyan-600">Changelog</a>
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
              className={`focus-ring flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                isSupport || openDropdown === 'support'
                  ? 'text-slate-950 bg-[#e8edf8]'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              <span>Support</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'support' ? 'rotate-180 text-cyan-500' : ''}`} />
            </button>
            {openDropdown === 'support' && (
              <div className="absolute right-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="rounded-2xl p-2.5 shadow-2xl space-y-1 bg-white/95 backdrop-blur-2xl border border-slate-200/90">
                  <a href="/support" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition text-slate-800 hover:bg-slate-100 hover:text-cyan-600">Support Center</a>
                  <a href="/contact" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition text-slate-800 hover:bg-slate-100 hover:text-cyan-600">Contact</a>
                  <a href="/support#faq" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition text-slate-800 hover:bg-slate-100 hover:text-cyan-600">FAQ</a>
                  <a
                    href="https://wa.me/971551230307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 transition flex items-center justify-between"
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
            className="focus-ring inline-flex items-center gap-2 font-bold text-xs tracking-wider transition transform hover:-translate-y-0.5 px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-[#00d2ff] to-[#0099ff] shadow-[0_4px_18px_rgba(0,180,255,0.45)] hover:shadow-[0_6px_22px_rgba(0,180,255,0.6)] hover:brightness-105"
          >
            <span>MQL5 MARKET</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus-ring lg:hidden p-2 rounded-xl border border-slate-200 bg-white/80 text-slate-700 hover:text-slate-900 transition"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-2xl shadow-2xl space-y-2 animate-in fade-in duration-200 bg-white/95 backdrop-blur-2xl border border-slate-200 text-slate-800">
          <a href="/" className={`block rounded-xl px-3.5 py-2 text-sm font-semibold ${isHome ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100'}`} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/about-us" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" onClick={() => setMobileMenuOpen(false)}>About Us</a>

          <div className="py-2 px-3 border-y border-slate-200/50 space-y-1.5">
            <p className="text-xs font-mono font-bold text-cyan-600">Solutions</p>
            <a href="/ai-software-development" className="block pl-2 py-1 text-xs font-medium text-slate-600 hover:text-cyan-600" onClick={() => setMobileMenuOpen(false)}>• AI Software Development</a>
            <a href="/ai-web-design-development" className="block pl-2 py-1 text-xs font-medium text-slate-600 hover:text-cyan-600" onClick={() => setMobileMenuOpen(false)}>• AI Web Design & Development</a>
            <a href="/custom-applications" className="block pl-2 py-1 text-xs font-medium text-slate-600 hover:text-cyan-600" onClick={() => setMobileMenuOpen(false)}>• Custom Applications</a>
            <a href="/business-automation" className="block pl-2 py-1 text-xs font-medium text-slate-600 hover:text-cyan-600" onClick={() => setMobileMenuOpen(false)}>• Business Automation</a>
            <a href="/trading-technology" className="block pl-2 py-1 text-xs font-medium text-slate-600 hover:text-cyan-600" onClick={() => setMobileMenuOpen(false)}>• Trading Technology</a>
          </div>

          <a href="/products" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="/documentation" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" onClick={() => setMobileMenuOpen(false)}>Documentation</a>
          <a href="/downloads" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" onClick={() => setMobileMenuOpen(false)}>Downloads</a>
          <a href="/contact" className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a
            href="https://wa.me/971551230307"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 flex items-center justify-between"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>WhatsApp (+971 55 123 0307)</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <div className="pt-3 border-t border-slate-200/50">
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#00d2ff] to-[#0099ff] shadow-[0_4px_18px_rgba(0,180,255,0.45)] hover:brightness-105"
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
