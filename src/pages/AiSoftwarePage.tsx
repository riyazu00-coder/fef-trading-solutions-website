import React from "react";
import { Bot, BrainCircuit, Globe, Terminal, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const AiSoftwarePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Digital Engineering</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            AI Software & <span className="fef-headline-gradient">Digital Innovation</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We turn complex business and trading workflows into intelligent, high-performance digital solutions—spanning custom AI models, cinematic web platforms, bespoke APIs, and operational automation.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-[2.5rem] fef-glass-card group">
          <div className="p-3.5 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 w-fit">
            <BrainCircuit className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-white">AI Software Development</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            Custom decision engines, predictive data analytics, and autonomous agent frameworks designed to automate multi-stage decision trees and proprietary data processing.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Tailored neural network models for market data</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Real-time sentiment and news event parsers</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Secure proprietary deployment environments</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-[2.5rem] fef-glass-card group">
          <div className="p-3.5 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 w-fit">
            <Globe className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-white">AI-Assisted Web Development</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            High-conversion web platforms combining cinematic 3D visual experiences with ultra-low latency architecture and modern responsive styling.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Interactive 3D WebGL and glassmorphic designs</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Enterprise client portals and member dashboards</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Search-optimized, responsive cross-device layouts</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-[2.5rem] fef-glass-card group">
          <div className="p-3.5 rounded-2xl bg-blue-400/10 border border-blue-400/20 text-[#1da8ff] w-fit">
            <Terminal className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-white">Custom Web Applications & APIs</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            Full-stack bespoke web platforms, secure microservice architectures, and robust API integrations designed for heavy transactional throughput.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Sub-millisecond data synchronization daemons</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Encrypted database architecture & licensing engines</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-[2.5rem] fef-glass-card group">
          <div className="p-3.5 rounded-2xl bg-purple-400/10 border border-purple-400/20 text-purple-400 w-fit">
            <Bot className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-white">Business Process Automation</h3>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            Eliminate operational drag with intelligent workflow pipelines, automated telemetry monitoring, and hands-off system synchronization.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Automated CRM and payment gateway webhooks</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Real-time server monitoring and error notification</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
