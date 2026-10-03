import React, { useState } from 'react';
import { Cpu, Radio, Activity, Play, RefreshCcw, Zap, Building2, CheckCircle2 } from 'lucide-react';

export const TradingViewSyncCenter: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);
  const [slavesActive, setSlavesActive] = useState([false, false, false]);

  const handleStartDemo = () => {
    setIsSyncing(true);
    setSyncDone(false);
    setSlavesActive([false, false, false]);

    setTimeout(() => {
      setSlavesActive([true, false, false]);
    }, 350);

    setTimeout(() => {
      setSlavesActive([true, true, false]);
    }, 700);

    setTimeout(() => {
      setSlavesActive([true, true, true]);
      setIsSyncing(false);
      setSyncDone(true);
    }, 1100);
  };

  const handleReset = () => {
    setIsSyncing(false);
    setSyncDone(false);
    setSlavesActive([false, false, false]);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">

      {/* 1. Architecture Flow: How FEF Trade Copier Works */}
      <div className="relative rounded-[2.5rem] fef-glass-primary p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-50 text-cyan-700 text-xs font-semibold uppercase tracking-[0.2em]">
            <Cpu className="h-3.5 w-3.5" />
            Copier workflow
          </div>
          <h2 className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.015em] text-[#080B1D] uppercase">
            How FEF{' '}
            <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
              Trade Copier Works
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal text-[#536078] leading-relaxed">
            Trades from the master account are automatically synchronized to connected slave accounts while preserving the execution workflow traders expect inside MetaTrader 5.
          </p>
        </div>

        {/* Dynamic Interactive Pipeline Architecture */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">

            {/* Master Box */}
            <div className="w-full max-w-md p-4 rounded-2xl fef-glass-secondary border-cyan-400/50 text-center shadow-[0_4px_20px_rgba(69,201,245,0.15)]">
              <Activity className="h-6 w-6 text-cyan-600 mx-auto" />
              <p className="mt-2 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-[#080B1D]">
                Master Account
              </p>
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-cyan-400 to-emerald-400" />

            {/* Trade Detected */}
            <div className="w-full max-w-md p-4 rounded-2xl fef-glass-secondary border-slate-200/90 text-center shadow-xs">
              <Radio className="h-6 w-6 text-emerald-600 mx-auto" />
              <p className="mt-2 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-[#080B1D]">
                Trade Detected
              </p>
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-emerald-400 to-[#45c9f5]" />

            {/* FEF Synchronization Engine */}
            <div className="w-full max-w-md p-5 rounded-2xl fef-glass-cta text-center shadow-[0_6px_25px_rgba(69,201,245,0.18)]">
              <Cpu className="h-7 w-7 text-cyan-600 mx-auto animate-pulse" />
              <p className="mt-2 font-mono text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-[#080B1D]">
                FEF Synchronization Engine
              </p>
            </div>

            {/* Branching Lines */}
            <div className="relative h-10 w-full max-w-2xl">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-300" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>

            {/* 4 Connected Slaves Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="p-4 rounded-2xl fef-glass-secondary hover:border-emerald-500/40 hover:shadow-md transition shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="h-4 w-4 text-emerald-600" />
                    <p className="font-mono text-sm font-semibold text-[#080B1D]">Slave Account {num}</p>
                  </div>
                  <div className="mt-3 flex flex-col gap-1.5 text-xs text-[#536078]">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Connected
                    </span>
                    <span className="flex items-center gap-1.5 text-cyan-600 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Synchronized
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 4 Architectural Highlights */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-slate-200/80">
          <div className="p-4 rounded-xl fef-glass-subtle">
            <h3 className="text-sm font-semibold text-[#080B1D]">Local Synchronization</h3>
            <p className="mt-1.5 text-xs font-normal text-[#536078]">Uses a local synchronization workflow between connected MetaTrader 5 terminals.</p>
          </div>
          <div className="p-4 rounded-xl fef-glass-subtle">
            <h3 className="text-sm font-semibold text-[#080B1D]">Multi-Broker Compatible</h3>
            <p className="mt-1.5 text-xs font-normal text-[#536078]">Works smoothly across different MT5 brokers and varied suffix naming conventions.</p>
          </div>
          <div className="p-4 rounded-xl fef-glass-subtle">
            <h3 className="text-sm font-semibold text-[#080B1D]">Secure Trade Replication</h3>
            <p className="mt-1.5 text-xs font-normal text-[#536078]">Replicates configured stop-loss, take-profit, and volume settings according to the selected copier rules.</p>
          </div>
          <div className="p-4 rounded-xl fef-glass-subtle">
            <h3 className="text-sm font-semibold text-[#080B1D]">Automatic Position Updates</h3>
            <p className="mt-1.5 text-xs font-normal text-[#536078]">Tracks partial closes, order modifications, and trailing stops in real-time.</p>
          </div>
        </div>
      </div>

      {/* 2. Interactive Live Trade Copy Simulator */}
      <div className="relative rounded-[2.5rem] fef-glass-primary p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-50 text-cyan-700 text-xs font-semibold uppercase tracking-[0.16em]">
              <Zap className="h-3 w-3" />
              Live Trade Copy Visualization
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.015em] text-[#080B1D] uppercase">
              Watch a master trade{' '}
              <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
                sync across accounts
              </span>
            </h2>
          </div>

          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${
            syncDone
              ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
              : isSyncing
                ? 'border-cyan-300 bg-cyan-50 text-cyan-700 animate-pulse'
                : 'border-slate-200 bg-slate-100 text-[#536078]'
          }`}>
            {syncDone ? 'Sync Completed' : isSyncing ? 'Synchronizing...' : 'Demo Ready'}
          </span>
        </div>

        <p className="mt-4 text-sm sm:text-base font-normal text-[#536078]">
          A premium visual demo showing how one master trade can be copied to connected slave accounts with execution status, delay tracking and synchronized trade details.
        </p>

        {/* Interactive Sandbox Grid */}
        <div className="mt-8 grid lg:grid-cols-[1fr_auto_1.2fr] items-center gap-6">

          {/* Master Box Controller */}
          <div className="p-5 rounded-2xl fef-glass-secondary border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-mono text-sm font-semibold text-[#080B1D]">#84210 - Pro</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200/80">
                MASTER TERMINAL
              </span>
            </div>

            <div className="mt-4 space-y-2 font-mono text-xs text-[#536078]">
              <div className="flex justify-between">
                <span className="text-[#536078] font-normal">Order:</span>
                <span className="font-medium text-[#080B1D]">BUY XAUUSD 1.00 Lot</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#536078] font-normal">Price:</span>
                <span className="font-medium text-[#080B1D]">2,654.20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#536078] font-normal">SL / TP:</span>
                <span className="font-medium text-emerald-600">2,640.00 / 2,680.00</span>
              </div>
            </div>

            {/* Trigger Button */}
            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={handleStartDemo}
                disabled={isSyncing}
                className="focus-ring flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-sm disabled:opacity-50 transition active:scale-95"
              >
                <Play className="h-4 w-4" />
                <span>Open BUY XAUUSD</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="focus-ring p-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-[#536078] transition"
                title="Reset demo"
              >
                <RefreshCcw className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* SVG Animated Transmission Lines */}
          <div className="hidden lg:block w-32 h-64 relative">
            <svg viewBox="0 0 170 290" className="w-full h-full text-cyan-500/70">
              <path d="M0 145 C80 145 70 35 170 35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M0 145 C70 145 90 145 170 145" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M0 145 C80 145 70 255 170 255" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              {isSyncing && (
                <>
                  <circle cx="85" cy="90" r="5" className="fill-emerald-500 animate-ping" />
                  <circle cx="85" cy="145" r="5" className="fill-cyan-500 animate-ping" />
                  <circle cx="85" cy="200" r="5" className="fill-emerald-500 animate-ping" />
                </>
              )}
            </svg>
          </div>

          {/* Connected Slaves Terminals */}
          <div className="space-y-3">
            {[
              { id: '#12044 - ICMarkets', lot: '1.00 Lot', delay: '0.018s' },
              { id: '#90217 - Pepperstone', lot: '0.50 Lot (Risk 50%)', delay: '0.024s' },
              { id: '#55621 - Exness', lot: '2.00 Lot (Multi 2x)', delay: '0.031s' },
            ].map((slave, idx) => (
              <div
                key={slave.id}
                className={`p-3.5 rounded-xl transition-all duration-300 ${
                  slavesActive[idx]
                    ? 'fef-glass-primary border-2 border-emerald-500 shadow-[0_4px_20px_rgba(25,215,135,0.2)]'
                    : 'fef-glass-secondary shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-[#080B1D]">{slave.id}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    slavesActive[idx] ? 'text-emerald-700 bg-emerald-50' : 'text-[#536078] bg-slate-100'
                  }`}>
                    {slavesActive[idx] ? `Synchronized (${slave.delay})` : 'Waiting for Signal'}
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-[#536078] font-mono font-normal">
                  <span>Replicated Volume: <strong className="font-semibold text-[#080B1D]">{slave.lot}</strong></span>
                  <span>Execution: <strong className={`font-semibold ${slavesActive[idx] ? 'text-emerald-600' : 'text-[#536078]'}`}>
                    {slavesActive[idx] ? 'FILLED' : 'IDLE'}
                  </strong></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
