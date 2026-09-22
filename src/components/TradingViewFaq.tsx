import React, { useState } from 'react';
import { HelpCircle, ChevronDown, AlertTriangle, ExternalLink, Mail } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'Does FEF Professional Trade Copier MT5 work with any broker?',
    a: 'It is designed for MetaTrader 5 environments and supports broker-specific symbol naming conditions, but users should always test on demo accounts first.',
  },
  {
    q: 'Is it available on MQL5 Market?',
    a: 'Yes, it is distributed and licensed through the official MQL5 Market platform with secure automated delivery.',
  },
  {
    q: 'Can I copy trades to multiple slave accounts?',
    a: 'Yes, the architecture supports copying from one master terminal to multiple connected slave terminals simultaneously.',
  },
  {
    q: 'Does it support different symbol names?',
    a: 'Yes, broker suffix and prefix mapping is supported to accommodate varied symbol naming across different broker feeds.',
  },
  {
    q: 'Do you provide support?',
    a: 'Yes, direct technical product support and documentation are provided to assist with installation and setup.',
  },
  {
    q: 'Is this financial advice?',
    a: 'No. FEF Trading Solutions provides trading software and workflow tools only. We do not provide financial, investment or trading advice.',
  },
];

export const TradingViewFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
      
      {/* 1. FAQ Accordion Bento */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-xs font-medium uppercase tracking-[0.2em]">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            Frequently Asked{' '}
            <span className="fef-headline-gradient">
              Questions
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-normal text-slate-300">
            Quick answers for traders, portfolio managers, and MT5 users considering FEF Professional Trade Copier MT5.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'fef-glass-card border-cyan-400/40 shadow-[0_0_25px_rgba(25,211,208,0.15)]'
                    : 'fef-glass-card hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base font-normal text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Regulatory Risk Warning Card */}
      <div className="relative p-6 sm:p-8 rounded-[2rem] fef-glass-card-static border-amber-500/30 overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 shrink-0">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-amber-400">
              Risk Warning
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-normal text-slate-300 leading-relaxed">
              Trading financial markets involves significant risk and may result in the loss of capital. FEF Trading Solutions develops software tools only and does not guarantee profits or trading performance. Always test on demo accounts before live deployment.
            </p>
          </div>
        </div>
      </div>

      {/* 3. High-Impact CTA Bar */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
          Available on MQL5 Market
        </span>
        <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
          Get FEF Professional{' '}
          <span className="bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent">
            Trade Copier MT5 Today
          </span>
        </h2>
        <p className="mt-3 text-base sm:text-lg font-normal text-slate-300 max-w-2xl mx-auto">
          Purchase directly through the official MQL5 Market or contact our team for installation support, licensing guidance, and product information.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.mql5.com/en/market/product/183557"
            target="_blank"
            rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:scale-105 active:scale-95"
          >
            <span>Buy on MQL5 Market</span>
            <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href="/contact" className="focus-ring inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
          >
            <Mail className="h-4 w-4 text-slate-400" />
            <span>Contact FEF</span>
          </a>
        </div>
      </div>

    </section>
  );
};
