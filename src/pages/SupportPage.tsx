import React from 'react';
import { HelpCircle, Mail, MessageSquare, ExternalLink, Send } from 'lucide-react';

export const SupportPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Product Helpdesk</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Customer Support & <span className="fef-headline-gradient">Assistance</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Need assistance setting up FEF Trade Copier MT5, configuring broker symbols, or inquiring about custom software? Our engineering team is ready to help.
          </p>
        </div>
      </div>

      {/* 24/7 Instant Fast Channels */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-section border border-emerald-500/30 shadow-[0_0_35px_rgba(25,215,135,0.12)] relative overflow-hidden space-y-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider text-emerald-400 bg-emerald-500/15 border border-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              24/7 LIVE SUPPORT
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
              Instant Direct <span className="fef-headline-gradient">Support Channels</span>
            </h2>
            <p className="mt-1 text-sm text-slate-300 font-normal">
              Connect directly with our engineering and trading specialists for immediate assistance.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          {/* Telegram */}
          <a
            href="https://t.me/Feftrading"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl fef-glass-card hover:border-cyan-400/50 transition-all flex flex-col justify-between group space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Send className="h-5 w-5 -translate-x-0.5 translate-y-0.5" />
              </div>
              <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div>
              <div className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Telegram Support
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">@Feftrading</div>
              <p className="text-xs text-slate-300 mt-2 font-normal">
                Direct community & priority messaging channel.
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://w.app/8qrptz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl fef-glass-card hover:border-emerald-400/50 transition-all flex flex-col justify-between group space-y-4 border-emerald-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5H9a2 2 0 0 0-2 2v.5a5.5 5.5 0 0 0 5.5 5.5h.5a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0 0 1" strokeWidth="1.6" />
                </svg>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div>
              <div className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                WhatsApp Direct
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">w.app/8qrptz</div>
              <p className="text-xs text-slate-300 mt-2 font-normal">
                Instant chat & live technical support.
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:fefhvn@gmail.com"
            className="p-5 rounded-2xl fef-glass-card hover:border-cyan-400/50 transition-all flex flex-col justify-between group space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div>
              <div className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Official Email
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">fefhvn@gmail.com</div>
              <p className="text-xs text-slate-300 mt-2 font-normal">
                Inquiries, contracts, and enterprise inquiries.
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-[2rem] fef-glass-card flex flex-col justify-between">
          <div>
            <div className="p-3.5 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 w-fit">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">MQL5 Direct Support</h3>
            <p className="mt-2 text-sm text-slate-300 font-normal">
              Direct technical messaging through the official MQL5 Market profile for license owners.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="https://www.mql5.com/en/users/feftradingsolutions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>Message on MQL5</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card flex flex-col justify-between">
          <div>
            <div className="p-3.5 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 w-fit">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">Contact Helpdesk</h3>
            <p className="mt-2 text-sm text-slate-300 font-normal">
              Send a detailed ticket regarding installation, custom API integrations, or bespoke software.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <span>Open Support Ticket</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
