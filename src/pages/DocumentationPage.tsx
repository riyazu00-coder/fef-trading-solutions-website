import React from 'react';
import { BookOpen } from 'lucide-react';

export const DocumentationPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Developer & User Manuals</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Technical <span className="fef-headline-gradient">Documentation & Setup</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Detailed guides for installing, configuring, and deploying FEF Trading Solutions software within your MetaTrader 5 terminal environments.
          </p>
        </div>
      </div>

      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          FEF Trade Copier MT5 <span className="fef-headline-gradient">Quick Start Guide</span>
        </h2>
        
        <div className="mt-8 space-y-6">
          <div className="p-6 rounded-2xl fef-glass-card flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 font-mono font-semibold shrink-0">
              01
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Install through MQL5 Market</h3>
              <p className="mt-2 text-sm text-slate-300 font-normal">
                Open MetaTrader 5 &gt; Toolbox &gt; Market &gt; Purchased, search for "FEF Professional Trade Copier MT5", and click Install.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl fef-glass-card flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 font-mono font-semibold shrink-0">
              02
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Attach Master EA to Any Chart</h3>
              <p className="mt-2 text-sm text-slate-300 font-normal">
                On your Master account, attach the Trade Copier EA to any single chart. Ensure "Allow Algo Trading" is active. Set Role to Master.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl fef-glass-card flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1da8ff]/10 text-[#1da8ff] font-mono font-semibold shrink-0">
              03
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Attach Slave EA to Slave Accounts</h3>
              <p className="mt-2 text-sm text-slate-300 font-normal">
                On each connected Slave terminal, attach the EA to one chart, set Role to Slave, and specify your desired Lot Multiplier or Risk %.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Input Parameters <span className="fef-headline-gradient">Reference</span>
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="fef-glass-table">
            <thead>
              <tr>
                <th>Input Variable</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white font-mono">InpRole</td>
                <td className="font-mono">MASTER</td>
                <td>Defines terminal role: MASTER (broadcast) or SLAVE (replicate).</td>
              </tr>
              <tr>
                <td className="font-semibold text-white font-mono">InpRiskMode</td>
                <td className="font-mono">PROPORTIONAL</td>
                <td>Lot calculation: PROPORTIONAL, FIXED_LOT, or MULTIPLIER.</td>
              </tr>
              <tr>
                <td className="font-semibold text-white font-mono">InpMultiplier</td>
                <td className="font-mono">1.0</td>
                <td>Scaling factor applied to copied trade volume.</td>
              </tr>
              <tr>
                <td className="font-semibold text-white font-mono">InpMaxSlippage</td>
                <td className="font-mono">30 points</td>
                <td>Maximum allowable slippage before rejecting execution.</td>
              </tr>
              <tr>
                <td className="font-semibold text-white font-mono">InpCustomSuffix</td>
                <td className="font-mono">""</td>
                <td>Broker specific suffix mapping (e.g., .pro, .raw, .m).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
