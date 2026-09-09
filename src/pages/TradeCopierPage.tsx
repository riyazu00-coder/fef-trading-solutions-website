import React from "react";
import { TrendingUp, ExternalLink, ShieldCheck, Zap, Server, CheckCircle2, ArrowRight } from "lucide-react";

export const TradeCopierPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Zap className="h-3.5 w-3.5" />
            <span>Official MQL5 Market Release</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Professional <span className="fef-headline-gradient">Trade Copier MT5</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Engineered for high-frequency synchronization between master and slave terminals with zero cloud latency, broker prefix mapping, and custom lot-scaling algorithms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:scale-105 active:scale-95"
            >
              <span>Get on MQL5 Market</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/documentation"
              className="focus-ring inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>Setup Guide</span>
            </a>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Technical <span className="fef-headline-gradient">Specifications</span>
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="fef-glass-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Specification</th>
                <th>Operational Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Platform</td>
                <td>MetaTrader 5 (MT5)</td>
                <td>64-bit native Windows / VPS optimized</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Execution Latency</td>
                <td>&lt; 0.5 milliseconds</td>
                <td>Direct local memory bus (IPC) architecture</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Multi-Account Capacity</td>
                <td>Unlimited Slaves</td>
                <td>1 Master to multiple Slave terminal links</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Symbol Mapping</td>
                <td>Prefix & Suffix Support</td>
                <td>Cross-broker naming auto-detection</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Risk Sizing Modes</td>
                <td>Lot Multiplier, Fixed, Risk %</td>
                <td>Automated equity-based proportional sizing</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Delivery Mode</td>
                <td>MQL5 Market Licensing</td>
                <td>Encrypted delivery with automated updates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
