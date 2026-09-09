import React from "react";
import { ShieldCheck, Cpu, Globe, Terminal, Award, Users, CheckCircle, ArrowRight } from "lucide-react";

export const AboutUsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero Section */}
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
            <p className="mt-1 text-xs text-slate-400 font-normal">Dedicated engineering assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};
