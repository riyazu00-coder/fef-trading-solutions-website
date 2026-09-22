import React from 'react';
import { Cpu, Activity, Radio, Building2, BadgeCheck } from 'lucide-react';

export const FefCopierWorkflow: React.FC = () => {
  return (
    <section id="copier-workflow" className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-emerald/20 bg-[linear-gradient(135deg,rgba(5,7,13,0.94),rgba(11,18,32,0.92))] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10 backdrop-blur-xl">
        <div className="site-grid absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent" aria-hidden="true" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-electric/10 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald">
              <Cpu className="h-4 w-4" />
              Copier workflow
            </div>

            <h2 className="mt-6 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
              How FEF Trade Copier Works
            </h2>

            <p className="mt-5 max-w-3xl text-base sm:text-lg leading-8 font-normal text-steel">
              Trades from the master account are automatically synchronized to connected slave accounts while preserving the execution workflow traders expect inside MetaTrader 5.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.mql5.com/en/market/product/183557"
                target="_blank"
                rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition bg-brand-gradient text-[#05070d] shadow-glow hover:brightness-110 active:scale-95"
              >
                <span>Deploy on MQL5</span>
              </a>
            </div>
          </div>

          {/* Original FEF Copier Flow Diagram */}
          <div className="rounded-3xl border border-line bg-ink/75 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:p-6 backdrop-blur-md">
            <div className="mx-auto flex max-w-3xl flex-col items-center">
              
              {/* Step 1: Master Account */}
              <div className="w-full rounded-2xl border border-electric/25 bg-panel/80 p-5 text-center">
                <Activity className="mx-auto h-6 w-6 text-electric" />
                <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Master Account
                </p>
              </div>

              <div className="h-8 w-px bg-gradient-to-b from-electric to-emerald" />

              {/* Step 2: Trade Detected */}
              <div className="w-full rounded-2xl border border-cyan/25 bg-white/[0.035] p-5 text-center">
                <Radio className="mx-auto h-6 w-6 text-cyan" />
                <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Trade Detected
                </p>
              </div>

              <div className="h-8 w-px bg-gradient-to-b from-cyan to-emerald" />

              {/* Step 3: FEF Synchronization Engine */}
              <div className="w-full rounded-2xl border border-emerald/30 bg-emerald/10 p-5 text-center shadow-emerald">
                <Cpu className="mx-auto h-6 w-6 text-emerald" />
                <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  FEF Synchronization Engine
                </p>
              </div>

              <div className="relative h-10 w-full max-w-lg">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-emerald/70" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/70 to-transparent" />
              </div>

              {/* Step 4: Slaves Grid */}
              <div className="grid w-full gap-4 sm:grid-cols-2 mt-2">
                {[1, 2, 3, 4].map((slaveNum) => (
                  <div key={slaveNum} className="rounded-2xl border border-line bg-panel/75 p-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-electric" />
                      <p className="font-mono text-sm font-semibold text-white">Slave Account {slaveNum}</p>
                    </div>
                    <div className="mt-4 grid gap-2 text-sm font-medium text-steel">
                      <span className="inline-flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-emerald" />
                        Connected
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-emerald" />
                        Synchronized
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
