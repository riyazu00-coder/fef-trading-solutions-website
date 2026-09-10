import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Mail className="h-3.5 w-3.5" />
            <span>Direct Communication</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Let's Build <span className="fef-headline-gradient">Intelligent Solutions</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Reach out for trade copier deployment support, custom AI software consultation, or enterprise platform engineering.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 p-8 sm:p-10 rounded-[2.5rem] fef-glass-section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {submitted ? (
            <div className="p-8 rounded-2xl fef-glass-card text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-semibold text-white">Inquiry Received</h3>
              <p className="text-sm text-slate-300 font-normal max-w-md mx-auto">
                Thank you for contacting FEF Trading Solutions. An engineering specialist will review your request and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-4 py-3 fef-glass-input text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@domain.com"
                    className="w-full px-4 py-3 fef-glass-input text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                  Service / Subject
                </label>
                <select className="w-full px-4 py-3 fef-glass-input text-sm">
                  <option value="trade-copier" className="bg-[#05070d] text-white">FEF Trade Copier MT5 Support</option>
                  <option value="ai-software" className="bg-[#05070d] text-white">AI Software Development</option>
                  <option value="web-dev" className="bg-[#05070d] text-white">AI Web Design & Platform Development</option>
                  <option value="custom-code" className="bg-[#05070d] text-white">Custom Web Applications & APIs</option>
                  <option value="automation" className="bg-[#05070d] text-white">Business Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project requirements, timeline, or support question..."
                  className="w-full px-4 py-3 fef-glass-input text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="fef-btn-primary px-8 py-4 text-base w-full sm:w-auto cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-4 space-y-6">
          
          {/* 24/7 Direct Fast Channels Card */}
          <div className="p-8 rounded-[2.5rem] fef-glass-card space-y-5 border border-emerald-500/30 shadow-[0_0_30px_rgba(25,215,135,0.12)] relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold font-mono tracking-wider text-emerald-400 bg-emerald-500/15 border border-emerald-500/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                24/7 SUPPORT
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Fast Response</span>
            </div>

            <h3 className="text-xl font-semibold text-white">Instant Direct Channels</h3>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              Connect with our dedicated engineering & trading support team directly on your preferred channel.
            </p>

            <div className="space-y-2.5 pt-2">
              
              {/* Telegram */}
              <a
                href="https://t.me/Feftrading"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Send className="h-4 w-4 -translate-x-0.5 translate-y-0.5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      Telegram Channel
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">@Feftrading</div>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971551230307"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] border border-emerald-400/30 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5H9a2 2 0 0 0-2 2v.5a5.5 5.5 0 0 0 5.5 5.5h.5a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0 0 1" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Direct
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">+971 55 123 0307</div>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Official Sales Email */}
              <a
                href="mailto:sales@feftradingsolutions.com"
                className="p-3 rounded-xl bg-white/[0.04] border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      Official Email
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">sales@feftradingsolutions.com</div>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] fef-glass-card space-y-4">
            <h3 className="text-lg font-semibold text-white">Direct MQL5 Channel</h3>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              For verified product buyers, message us directly through the MQL5 Market profile.
            </p>
            <a
              href="https://www.mql5.com/en/users/feftradingsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:underline"
            >
              <span>Open MQL5 Profile</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="p-8 rounded-[2.5rem] fef-glass-card space-y-4">
            <h3 className="text-lg font-semibold text-white">Official Website</h3>
            <p className="text-xs font-mono text-emerald-400 font-medium">
              https://www.feftradingsolutions.com
            </p>
            <p className="text-xs text-slate-400 font-normal">
              Operating hours: 24/7 Support via Telegram & WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
