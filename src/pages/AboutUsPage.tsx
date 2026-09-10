import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Globe,
  ArrowRight,
  Download,
  Mail,
  Send,
  MessageCircle,
} from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Corporate Overview</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            About FEF <span className="fef-headline-gradient">Trading Solutions</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            FEF Trading Solutions is an innovative technology ecosystem specializing in AI-powered software development, cinematic web applications, custom platforms, business automation, and institutional-grade MetaTrader 5 trading technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/downloads/fef-trading-solutions-company-profile.pdf"
              download="fef-trading-solutions-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <Download className="h-4 w-4" />
              <span>Download Company Profile (PDF)</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-[2.5rem] fef-glass-card">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Our Mission</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Engineering Resilient Digital Systems</h3>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            To provide traders, enterprises, and digital innovators with mathematically sound, ultra-low latency software tools that reduce execution drag, automate repetitive operational overhead, and enforce risk discipline.
          </p>
        </div>

        <div className="p-8 rounded-[2.5rem] fef-glass-card">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Our Vision</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">A Unified Intelligent Technology Suite</h3>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            To bridge the gap between high-frequency financial engineering and next-generation AI software development—delivering turnkey web platforms, algorithmic assistants, and bespoke automation under one cohesive brand.
          </p>
        </div>
      </div>

      {/* Core Principles */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-8 rounded-[2rem] fef-glass-card group">
          <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 w-fit">
            <Cpu className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Intelligent Engineering</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            We build algorithmic systems and AI-backed applications with high-throughput architecture, zero execution bloat, and resilient failsafes.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card group">
          <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 w-fit">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Institutional Reliability</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            Our software adheres to strict broker-agnostic compatibility, verified MQL5 Market security standards, and comprehensive demo-first validation.
          </p>
        </div>

        <div className="p-8 rounded-[2rem] fef-glass-card group">
          <div className="p-3 rounded-xl bg-purple-400/10 border border-purple-400/20 text-purple-400 w-fit">
            <Globe className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Holistic Digital Ecosystem</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            From algorithmic trading copiers to full-stack bespoke enterprise portals, we provide end-to-end digital solutions under one roof.
          </p>
        </div>
      </div>

      {/* Credibility & Metrics */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Practical Credibility & <span className="fef-headline-gradient">Verified Standards</span>
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl fef-glass-card-static">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Marketplace</p>
            <p className="mt-2 text-xl font-semibold text-white">MQL5 Verified</p>
            <p className="mt-1 text-xs text-slate-400 font-normal">Official MetaQuotes distribution</p>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card-static">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Compatibility</p>
            <p className="mt-2 text-xl font-semibold text-white">MetaTrader 5</p>
            <p className="mt-1 text-xs text-slate-400 font-normal">Universal broker support</p>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card-static">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Architecture</p>
            <p className="mt-2 text-xl font-semibold text-white">Sub-Millisecond</p>
            <p className="mt-1 text-xs text-slate-400 font-normal">Fast local IPC synchronization</p>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card-static">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Operations</p>
            <p className="mt-2 text-xl font-semibold text-white">Active Support</p>
            <p className="mt-1 text-xs text-slate-400 font-normal">Direct engineering assistance</p>
          </div>
        </div>
      </div>

      {/* Official Communication Channels */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-section">
        <h3 className="text-2xl font-semibold text-white">Connect Directly with Our Team</h3>
        <p className="mt-2 text-sm text-slate-300">
          Our technical representatives are available across verified communication channels:
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <a
            href="mailto:sales@feftradingsolutions.com"
            className="p-5 rounded-2xl fef-glass-card flex items-center gap-3 group"
          >
            <Mail className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition" />
            <div>
              <p className="text-xs text-slate-400 font-mono">Official Email</p>
              <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">sales@feftradingsolutions.com</p>
            </div>
          </a>

          <a
            href="https://t.me/Feftrading"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl fef-glass-card flex items-center gap-3 group"
          >
            <Send className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition" />
            <div>
              <p className="text-xs text-slate-400 font-mono">Telegram Support</p>
              <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">@Feftrading</p>
            </div>
          </a>

          <a
            href="https://wa.me/971551230307"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl fef-glass-card flex items-center gap-3 group"
          >
            <MessageCircle className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition" />
            <div>
              <p className="text-xs text-slate-400 font-mono">WhatsApp Support</p>
              <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition">+971 55 123 0307</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
