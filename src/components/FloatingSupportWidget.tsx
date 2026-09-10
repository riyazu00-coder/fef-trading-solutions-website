import React from 'react';
import { Mail, Send } from 'lucide-react';

export const FloatingSupportWidget: React.FC = () => {
  return (
    <aside 
      aria-label="24/7 Support Quick Access"
      className="fixed bottom-5 right-5 z-50 select-none group"
    >
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, rgba(6, 12, 24, 0.88) 100%)',
          boxShadow: 'inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.35), 0 16px 40px -8px rgba(0, 0, 0, 0.85), 0 0 25px rgba(25, 215, 135, 0.15)',
        }}
        className="p-2.5 sm:p-3 rounded-[1.75rem] border border-white/20 backdrop-blur-2xl flex flex-col items-center gap-2.5 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(25,215,135,0.25)]"
      >
        
        {/* Top 24/7 SUPPORT Header Pill */}
        <div 
          style={{
            background: 'linear-gradient(180deg, rgba(25, 215, 135, 0.22) 0%, rgba(6, 30, 22, 0.85) 100%)',
            boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 0 15px rgba(25, 215, 135, 0.25)',
          }}
          className="w-full px-4 py-1.5 rounded-full border border-emerald-400/50 flex items-center justify-center"
        >
          <span className="text-[11px] font-bold font-mono tracking-[0.22em] text-emerald-300 drop-shadow-[0_0_10px_rgba(25,215,135,0.7)]">
            24/7 SUPPORT
          </span>
        </div>

        {/* Action Icon Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 px-1">
          
          {/* 1. Telegram Button */}
          <a
            href="https://t.me/Feftrading"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram Direct Support (@Feftrading)"
            aria-label="Telegram Direct Support"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/25 hover:border-cyan-300 text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(29,168,255,0.2)] hover:shadow-[0_0_20px_rgba(29,168,255,0.45)] hover:scale-110 active:scale-95"
          >
            <Send className="h-4 w-4 sm:h-5 sm:w-5 -translate-x-0.5 translate-y-0.5 stroke-[2.2]" />
          </a>

          {/* 2. WhatsApp Button (Prominent Center Active Double Ring) */}
          <a
            href="https://wa.me/971551230307"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Direct (+971 55 123 0307)"
            aria-label="WhatsApp Direct Support"
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-emerald-400 bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(25,215,135,0.45)] hover:shadow-[0_0_30px_rgba(25,215,135,0.65)] hover:scale-110 active:scale-95 ring-2 ring-emerald-400/40 ring-offset-2 ring-offset-[#060c18]"
          >
            {/* Crisp WhatsApp Speech Bubble Handset SVG */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5 sm:h-5.5 sm:w-5.5"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5H9a2 2 0 0 0-2 2v.5a5.5 5.5 0 0 0 5.5 5.5h.5a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0 0 1" strokeWidth="1.6" />
            </svg>
          </a>

          {/* 3. Email Button */}
          <a
            href="mailto:sales@feftradingsolutions.com"
            title="Official Email (sales@feftradingsolutions.com)"
            aria-label="Email Support"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/25 hover:border-cyan-300 text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(29,168,255,0.2)] hover:shadow-[0_0_20px_rgba(29,168,255,0.45)] hover:scale-110 active:scale-95"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.2]" />
          </a>

        </div>

      </div>
    </aside>
  );
};
