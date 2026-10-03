import React from 'react';
import { Mail, Send } from 'lucide-react';

export const FloatingSupportWidget: React.FC = () => {
  return (
    <aside
      aria-label="Support Quick Access" className="fef-floating-support fixed bottom-5 right-5 z-50 select-none group"
    >
      <div
        className="p-2 sm:p-2.5 rounded-[1.75rem] bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(8,11,29,0.18)] flex flex-col items-center gap-2 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_16px_44px_-4px_rgba(69,201,245,0.25)]"
      >

        {/* Top Support Header Pill */}
        <div
          className="w-full px-3 py-1 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xs"
        >
          <span className="text-[10px] font-bold font-mono tracking-[0.2em] bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
            SUPPORT
          </span>
        </div>

        {/* Action Icon Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5 px-1">

          {/* 1. Telegram Button */}
          <a
            href="https://t.me/Feftrading"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram Direct Support (@Feftrading)"
            aria-label="Telegram Direct Support" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-cyan-400/50 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xs"
          >
            <Send className="h-4 w-4 sm:h-4.5 sm:w-4.5 -translate-x-0.5 translate-y-0.5 stroke-[2.2]" />
          </a>

          {/* 2. WhatsApp Button (Prominent Center Active Double Ring) */}
          <a
            href="https://wa.me/971551230307"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Direct (+971 55 123 0307)"
            aria-label="WhatsApp Direct Support" className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-emerald-500 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95 ring-2 ring-emerald-400/40 ring-offset-2 ring-offset-white"
          >
            {/* Crisp WhatsApp Speech Bubble Handset SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round" className="h-4.5 w-4.5 sm:h-5 sm:w-5"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5H9a2 2 0 0 0-2 2v.5a5.5 5.5 0 0 0 5.5 5.5h.5a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0 0 1" strokeWidth="1.6" />
            </svg>
          </a>

          {/* 3. Email Button */}
          <a
            href="mailto:sales@feftradingsolutions.com"
            title="Official Email (sales@feftradingsolutions.com)"
            aria-label="Email Support" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-violet-400/50 bg-violet-50 hover:bg-violet-100 text-violet-600 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xs"
          >
            <Mail className="h-4 w-4 sm:h-4.5 sm:w-4.5 stroke-[2.2]" />
          </a>

        </div>

      </div>
    </aside>
  );
};
