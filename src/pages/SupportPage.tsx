import React from 'react';
import { HelpCircle, Mail, MessageSquare, ExternalLink } from 'lucide-react';

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
