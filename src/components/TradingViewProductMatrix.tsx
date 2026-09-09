import React, { useState } from 'react';
import { Layers, ArrowUpRight, Shield, Zap, Cpu, BarChart3, Sliders, Users, Key, Download, RefreshCw } from 'lucide-react';

export interface ProductItem {
  id: string;
  name: string;
  tag: string;
  category: 'trading' | 'management' | 'core';
  description: string;
  icon: React.ReactNode;
  status: string;
}

export const products: ProductItem[] = [
  {
    id: 'trade-copier',
    name: 'Trade Copier MT5',
    tag: 'Official Market',
    category: 'trading',
    description: 'High-speed local MT5 trade copier connecting master accounts to multiple slave accounts with custom lot multipliers.',
    icon: <Cpu className="h-5 w-5 text-emerald-400" />,
    status: 'Released on MQL5',
  },
  {
    id: 'manual-trade-manager',
    name: 'Manual Trade Manager PRO',
    tag: 'Active Development',
    category: 'trading',
    description: 'Advanced on-chart trade execution panel with automatic risk sizing, multi-target take-profit, and trailing stop rules.',
    icon: <Sliders className="h-5 w-5 text-cyan-400" />,
    status: 'In Development',
  },
  {
    id: 'gold-master',
    name: 'Gold Master EA',
    tag: 'Algorithmic Trading',
    category: 'trading',
    description: 'Specialized expert advisor tailored for XAUUSD market volatility with strict drawdown mitigation controls.',
    icon: <Zap className="h-5 w-5 text-amber-400" />,
    status: 'Testing Phase',
  },
  {
    id: 'risk-manager',
    name: 'Risk Manager',
    tag: 'Capital Protection',
    category: 'management',
    description: 'Real-time account guard monitoring floating drawdown, daily max loss thresholds, and margin level safety.',
    icon: <Shield className="h-5 w-5 text-red-400" />,
    status: 'Planned',
  },
  {
    id: 'trade-scanner',
    name: 'Trade Scanner',
    tag: 'Market Analytics',
    category: 'trading',
    description: 'Multi-pair scanner identifying technical momentum, session breakouts, and market alignment in one dashboard.',
    icon: <BarChart3 className="h-5 w-5 text-[#1da8ff]" />,
    status: 'Planned',
  },
  {
    id: 'smart-trader',
    name: 'Smart Trader',
    tag: 'Execution Assistant',
    category: 'trading',
    description: 'Keyboard shortcuts, smart order hotkeys, and rapid position scaling for active intraday operators.',
    icon: <Zap className="h-5 w-5 text-emerald-400" />,
    status: 'Planned',
  },
  {
    id: 'customer-portal',
    name: 'Customer Portal',
    tag: 'Account Management',
    category: 'core',
    description: 'Centralized web dashboard for license activations, product downloads, invoices, and direct support tickets.',
    icon: <Users className="h-5 w-5 text-cyan-400" />,
    status: 'Live',
  },
  {
    id: 'license-manager',
    name: 'License Manager',
    tag: 'Instant Verification',
    category: 'core',
    description: 'Hardware-verified licensing mechanism ensuring verified execution across approved MetaTrader 5 terminals.',
    icon: <Key className="h-5 w-5 text-[#1da8ff]" />,
    status: 'Active',
  },
  {
    id: 'downloads-center',
    name: 'Downloads Center',
    tag: 'Verified Builds',
    category: 'core',
    description: 'Direct repository for latest stable compiled EX5 binaries, user guides, and configuration presets.',
    icon: <Download className="h-5 w-5 text-emerald-400" />,
    status: 'Active',
  },
  {
    id: 'update-manager',
    name: 'Update Manager',
    tag: 'Seamless Versioning',
    category: 'core',
    description: 'Automated update notification stream keeping your trading tools aligned with new MT5 platform builds.',
    icon: <RefreshCw className="h-5 w-5 text-purple-400" />,
    status: 'Active',
  },
];

export const TradingViewProductMatrix: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'trading' | 'management' | 'core'>('all');

  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <section id="solutions-matrix" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="relative rounded-[2.5rem] fef-glass-section p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium uppercase tracking-[0.2em]">
              <Layers className="h-3.5 w-3.5" />
              FEF Software Ecosystem
            </div>
            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              One Platform.{' '}
              <span className="bg-gradient-to-r from-[#1da8ff] via-[#19d3d0] to-[#19d787] bg-clip-text text-transparent">
                Multiple Professional Trading Solutions.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg font-normal text-slate-300 max-w-2xl">
              FEF Trading Solutions is building an integrated ecosystem of MetaTrader 5 software designed for professional traders, portfolio managers, and proprietary firms.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All (10)' },
              { id: 'trading', label: 'Trading Tools' },
              { id: 'management', label: 'Risk & Strategy' },
              { id: 'core', label: 'Infrastructure' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-brand-gradient text-[#05070d] shadow-glow scale-105'
                    : 'fef-glass-card text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Product Matrix Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl fef-glass-card group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/30 transition">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium text-slate-300 bg-white/5 border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-base sm:text-lg font-semibold text-white group-hover:text-cyan-400 transition flex items-center justify-between">
                  {item.name}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </h3>

                <p className="mt-2 text-xs sm:text-sm font-normal text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-slate-500">Status:</span>
                <span className="font-mono text-[11px] font-medium text-emerald-400">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
