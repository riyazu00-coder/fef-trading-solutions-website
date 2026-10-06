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
    <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10 sm:space-y-12">

      {/* 1. FAQ Accordion Bento */}
      <div className="relative rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-50 text-cyan-700 text-xs font-semibold uppercase tracking-[0.2em]">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-[#080B1D]">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#1da8ff] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-normal text-[#536078]">
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
                    ? 'fef-glass-primary border-cyan-400/50 shadow-md ring-1 ring-cyan-400/20'
                    : 'fef-glass-secondary hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#080B1D] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-cyan-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base font-normal text-[#536078] leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Regulatory Risk Warning Card */}
      <div className="relative p-6 sm:p-8 rounded-[2rem] bg-amber-50/80 border border-amber-300/70 overflow-hidden shadow-xs backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-700 shrink-0">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-amber-900">
              Risk Warning
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium text-amber-950 leading-relaxed">
              Trading financial markets involves significant risk and may result in the loss of capital. FEF Trading Solutions develops software tools only and does not guarantee profits or trading performance. Always test on demo accounts before live deployment.
            </p>
          </div>
        </div>
      </div>

      {/* 3. High-Impact CTA Bar (Luminous Light Glass AI Styling) */}
      <div className="relative rounded-[2.5rem] fef-glass-cta p-8 sm:p-14 text-center overflow-hidden">
        {/* Soft luminous ambient lighting */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#45c9f5]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-[#a57af3]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#080B1D] fef-glass-subtle">
            Available on MQL5 Market
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.02em] text-[#080B1D] uppercase">
            Get FEF Professional{' '}
            <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(69,201,245,0.25)]">
              Trade Copier MT5 Today
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-normal text-[#536078] max-w-2xl mx-auto">
            Purchase directly through the official MQL5 Market or contact our team for installation support, licensing guidance, and product information.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-[0_6px_22px_rgba(69,201,245,0.32)] transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Buy on MQL5 Market</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-[#080B1D] fef-glass-secondary hover:bg-white/90 transition transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4 text-[#536078]" />
              <span>Contact FEF</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
