import React from 'react';
import { ShieldCheck, Cpu, LayoutDashboard, Lock, Headphones, GitBranch, Award } from 'lucide-react';

export const TradingViewWhyChoose: React.FC = () => {
  const reasons = [
    {
      title: 'Native MetaTrader 5 Architecture',
      desc: 'Built specifically for MT5, leveraging its multi-threaded 64-bit architecture without third-party bridges or external web latency.',
      icon: <Cpu className="h-6 w-6 text-[#1da8ff]" />,
    },
    {
      title: 'Multi-Account Operations',
      desc: 'Seamlessly manage prop firm accounts, personal portfolios, and investor capital across different brokers and varied symbol suffixes.',
      icon: <GitBranch className="h-6 w-6 text-[#19d3d0]" />,
    },
    {
      title: 'Professional Dashboard Experience',
      desc: 'Clear visual controls, synchronization status, and intuitive monitoring rendered directly on your MetaTrader 5 charts.',
      icon: <LayoutDashboard className="h-6 w-6 text-[#19d787]" />,
    },
    {
      title: 'Secure MQL5 Market Delivery',
      desc: 'MQL5 Market delivery with platform installation and license activation through the MetaTrader ecosystem.',
      icon: <Lock className="h-6 w-6 text-emerald-400" />,
    },
    {
      title: 'Direct Product Support',
      desc: 'Dedicated technical assistance directly from the engineers who developed and maintain the software ecosystem.',
      icon: <Headphones className="h-6 w-6 text-cyan-400" />,
    },
    {
      title: 'Continuous Software Roadmap',
      desc: 'The product roadmap includes maintenance, performance improvements, and compatibility updates as MetaTrader 5 evolves.',
      icon: <ShieldCheck className="h-6 w-6 text-[#1da8ff]" />,
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
      
      {/* 6-Card Bento Feature Matrix */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-xs font-medium uppercase tracking-[0.2em]">
            <Award className="h-3.5 w-3.5" />
            FEF Advantage
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            Why Professional Traders{' '}
            <span className="fef-headline-gradient">
              Choose FEF
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-normal text-slate-300">
            FEF Trading Solutions focuses on reliable MT5 software, clear operator dashboards, and tools built for serious trading operations.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-2xl fef-glass-card group"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit group-hover:scale-105 transition">
                {r.icon}
              </div>
              <h3 className="mt-5 text-base sm:text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                {r.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-normal text-slate-400 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 10 Trust Strip: Practical Credibility */}
        <div className="mt-12 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-xl fef-glass-card-static">
            <h4 className="font-mono text-lg sm:text-xl font-semibold text-white">MQL5 Market</h4>
            <p className="text-xs font-normal text-slate-400 mt-1">Product distribution through the MQL5 Market.</p>
          </div>
          <div className="p-4 rounded-xl fef-glass-card-static">
            <h4 className="font-mono text-lg sm:text-xl font-semibold text-emerald-400">Demo-First Ready</h4>
            <p className="text-xs font-normal text-slate-400 mt-1">Evaluate synchronization behavior, symbol mapping, and configured workflows on a demo account before live use.</p>
          </div>
          <div className="p-4 rounded-xl fef-glass-card-static">
            <h4 className="font-mono text-lg sm:text-xl font-semibold text-cyan-400">Continuous Workflow</h4>
            <p className="text-xs font-normal text-slate-400 mt-1">Designed for ongoing synchronization while the required terminals and trading environment remain available.</p>
          </div>
        </div>
      </div>

    </section>
  );
};
