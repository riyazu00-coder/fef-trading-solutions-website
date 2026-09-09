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
          <div className="p-8 rounded-[2.5rem] fef-glass-card space-y-4">
            <h3 className="text-lg font-semibold text-white">Direct MQL5 Channel</h3>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              For verified product buyers, message us directly through the MQL5 Market profile.
            </p>
            <a
              href="https://www.mql5.com/en/users/feftradingsolutions"
              target="_blank"
              rel="noreferrer"
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
              Operating hours: Monday – Friday, GMT hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
