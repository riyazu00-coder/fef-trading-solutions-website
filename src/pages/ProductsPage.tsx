import React, { useState } from 'react';
import { Layers, ArrowRight, ExternalLink } from 'lucide-react';
import { products, ProductItem } from '../components/TradingViewProductMatrix';

export const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'trading' | 'management' | 'core'>('all');
  const categories: { id: 'all' | 'trading' | 'management' | 'core'; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'trading', label: 'Trading Software' },
    { id: 'management', label: 'Risk & Strategy' },
    { id: 'core', label: 'Infrastructure & Portals' },
  ];

  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Layers className="h-3.5 w-3.5" />
            <span>Complete Ecosystem</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Products & <span className="fef-headline-gradient">Software Ecosystem</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Explore released MetaTrader 5 tools, custom software developments, and upcoming algorithmic utilities from FEF Trading Solutions.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer ${
              filter === cat.id
                ? 'bg-brand-gradient text-[#05070d] font-semibold shadow-glow'
                : 'fef-glass-card text-slate-300 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prod) => (
          <div key={prod.name} className="p-6 rounded-[2rem] fef-glass-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">{prod.tag}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-white/10 bg-white/5 text-emerald-400">
                  {prod.status}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {prod.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">{prod.name}</h3>
              </div>
              <p className="mt-3 text-xs text-slate-300 font-normal leading-relaxed">{prod.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <a href={prod.id === 'trade-copier' ? '/trade-copier' : prod.id === 'manual-trade-manager' ? '/manual-trade-manager' : '/contact'} className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1">
                <span>Explore Feature</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
