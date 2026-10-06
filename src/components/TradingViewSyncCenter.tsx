import React, { useState, useRef } from 'react';
import { Cpu, Radio, Activity, Play, RefreshCcw, Zap, Building2, CheckCircle2 } from 'lucide-react';
import { CopierWorkflowCinematicStage } from './solutions/CopierWorkflowCinematicStage';
import { TradeCopyUiCinematicStage } from './solutions/TradeCopyUiCinematicStage';

export const TradingViewSyncCenter: React.FC = () => {
  // Deterministic Simulation States: 'ready' | 'detected' | 'syncing' | 'completed'
  const [demoState, setDemoState] = useState<'ready' | 'detected' | 'syncing' | 'completed'>('ready');
  // Per-slave states: 'idle' | 'copying' | 'filled'
  const [slaveStates, setSlaveStates] = useState<('idle' | 'copying' | 'filled')[]>(['idle', 'idle', 'idle']);
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
  };

  const handleStartDemo = () => {
    clearTimers();

    // 0ms: STATE 1 — Master Terminal activates with TRADE DETECTED
    setDemoState('detected');
    setSlaveStates(['idle', 'idle', 'idle']);

    // 450ms: Signal reaches branch origin, launch SYNCHRONIZING
    const tSyncStart = setTimeout(() => {
      setDemoState('syncing');

      // Branch 1 (ICMarkets): In-flight signal arrives at ~1250ms (800ms transit)
      const tSlave1Copying = setTimeout(() => {
        setSlaveStates(prev => ['copying', prev[1], prev[2]]);
      }, 700);

      const tSlave1Filled = setTimeout(() => {
        setSlaveStates(prev => ['filled', prev[1], prev[2]]);
      }, 850);

      // Branch 2 (Pepperstone): In-flight signal arrives at ~1400ms (+150ms stagger)
      const tSlave2Copying = setTimeout(() => {
        setSlaveStates(prev => [prev[0], 'copying', prev[2]]);
      }, 850);

      const tSlave2Filled = setTimeout(() => {
        setSlaveStates(prev => [prev[0], 'filled', prev[2]]);
      }, 1000);

      // Branch 3 (Exness): In-flight signal arrives at ~1550ms (+300ms stagger)
      const tSlave3Copying = setTimeout(() => {
        setSlaveStates(prev => [prev[0], prev[1], 'copying']);
      }, 1000);

      const tSlave3Filled = setTimeout(() => {
        setSlaveStates(prev => [prev[0], prev[1], 'filled']);
      }, 1150);

      // 2100ms: Entire sequence wraps up cleanly into SYNC COMPLETED (~2.55s total)
      const tCompleted = setTimeout(() => {
        setSlaveStates(['filled', 'filled', 'filled']);
        setDemoState('completed');
      }, 1700);

      timerRefs.current.push(
        tSlave1Copying, tSlave1Filled,
        tSlave2Copying, tSlave2Filled,
        tSlave3Copying, tSlave3Filled,
        tCompleted
      );
    }, 450);

    timerRefs.current.push(tSyncStart);
  };

  const handleReset = () => {
    clearTimers();
    setDemoState('ready');
    setSlaveStates(['idle', 'idle', 'idle']);
  };

  const isDetected = demoState === 'detected';
  const isSyncing = demoState === 'syncing';
  const isCompleted = demoState === 'completed';
  const isBusy = isDetected || isSyncing;

  return (
    <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10 sm:space-y-12">

      {/* 1. Architecture Flow: How FEF Trade Copier Works */}
      <div className="relative rounded-[2.5rem] fef-glass-primary p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* Centered Introduction spanning full width */}
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

        {/* Coordinated Two-Column Main Workflow Area */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT COLUMN: Compact Architectural Workflow Diagram (~42%) */}
          <div className="lg:col-span-5 w-full">
            <div className="flex flex-col items-center max-w-md mx-auto">

              {/* Master Box */}
              <div className="w-full p-3.5 sm:p-4 rounded-2xl fef-glass-secondary border-cyan-400/50 text-center shadow-[0_4px_20px_rgba(69,201,245,0.12)]">
                <Activity className="h-5 w-5 text-cyan-600 mx-auto" />
                <p className="mt-1.5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#080B1D]">
                  Master Account
                </p>
              </div>

              <div className="h-5 sm:h-6 w-px bg-gradient-to-b from-cyan-400 to-emerald-400" />

              {/* Trade Detected */}
              <div className="w-full p-3 sm:p-3.5 rounded-2xl fef-glass-secondary border-slate-200/90 text-center shadow-xs">
                <Radio className="h-5 w-5 text-emerald-600 mx-auto" />
                <p className="mt-1.5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#080B1D]">
                  Trade Detected
                </p>
              </div>

              <div className="h-5 sm:h-6 w-px bg-gradient-to-b from-emerald-400 to-[#45c9f5]" />

              {/* FEF Synchronization Engine */}
              <div className="w-full p-4 rounded-2xl fef-glass-cta text-center shadow-[0_6px_25px_rgba(69,201,245,0.16)]">
                <Cpu className="h-6 w-6 text-cyan-600 mx-auto animate-pulse" />
                <p className="mt-1.5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#080B1D]">
                  FEF Synchronization Engine
                </p>
              </div>

              {/* Branching Lines */}
              <div className="relative h-6 sm:h-8 w-full">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-300" />
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              </div>

              {/* 4 Connected Slaves Grid (2x2 Compact Grid) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full mt-2.5">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="p-3 rounded-xl fef-glass-secondary hover:border-emerald-500/40 hover:shadow-sm transition shadow-xs">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Building2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <p className="font-mono text-[11px] sm:text-xs font-semibold text-[#080B1D] truncate">Slave {num}</p>
                    </div>
                    <div className="mt-2 flex flex-col gap-1 text-[10px] sm:text-[11px] text-[#536078]">
                      <span className="flex items-center gap-1 text-emerald-600 font-medium">
                        <CheckCircle2 className="h-3 w-3 shrink-0" /> Connected
                      </span>
                      <span className="flex items-center gap-1 text-cyan-600 font-medium">
                        <CheckCircle2 className="h-3 w-3 shrink-0" /> Synchronized
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Cinematic Video Stage (~58%) */}
          <div className="lg:col-span-7 w-full flex flex-col justify-center">
            <CopierWorkflowCinematicStage
              videoSrc="/videos/fef-trade-copier-workflow.mp4"
              ariaLabel="FEF Trade Copier MT5 workflow animation demonstration"
            />
          </div>

        </div>

        {/* 4 Architectural Highlights: Full-Width 4-Card Row */}
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

      {/* 2. Interactive Live Trade Copy Simulator & Cinematic Demo */}
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

          {/* Dynamic Top-Right Status Badge */}
          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors duration-300 ${
            isCompleted
              ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
              : isSyncing
                ? 'border-cyan-300 bg-cyan-50 text-cyan-700 animate-pulse'
                : isDetected
                  ? 'border-purple-300 bg-purple-50 text-purple-700 animate-pulse'
                  : 'border-slate-200 bg-slate-100 text-[#536078]'
          }`}>
            {isCompleted
              ? 'Sync Completed'
              : isSyncing
                ? 'Synchronizing...'
                : isDetected
                  ? 'Trade Detected'
                  : 'Demo Ready'}
          </span>
        </div>

        <p className="mt-4 text-sm sm:text-base font-normal text-[#536078]">
          Interactive product demonstration showcasing the master-to-slave execution sequence, automated symbol replication, and multi-terminal synchronization.
        </p>

        {/* PRIMARY: Interactive Sandbox Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] items-center gap-6">

          {/* Master Box Controller */}
          <div className={`p-5 rounded-2xl fef-glass-secondary border transition-all duration-300 ${
            isDetected || isSyncing
              ? 'border-cyan-400 shadow-[0_4px_25px_rgba(69,201,245,0.25)] scale-[1.01]'
              : isCompleted
                ? 'border-emerald-400/80 shadow-sm'
                : 'border-slate-200/90 shadow-sm'
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-mono text-sm font-semibold text-[#080B1D]">#84210 - Pro</span>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border transition-colors ${
                isDetected
                  ? 'text-purple-700 bg-purple-50 border-purple-300 animate-pulse'
                  : isSyncing
                    ? 'text-cyan-700 bg-cyan-50 border-cyan-300'
                    : isCompleted
                      ? 'text-emerald-700 bg-emerald-50 border-emerald-300'
                      : 'text-cyan-700 bg-cyan-50 border-cyan-200/80'
              }`}>
                MASTER TERMINAL
              </span>
            </div>

            <div className="mt-4 space-y-2 font-mono text-xs text-[#536078]">
              <div className="flex justify-between">
                <span className="text-[#536078] font-normal">Order:</span>
                <span className="font-medium text-[#080B1D]">BUY XAUUSD 1.00 Lot</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#536078] font-normal">Example Price:</span>
                <span className="font-medium text-[#080B1D]">4,125.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#536078] font-normal">SL / TP (Demo):</span>
                <span className="font-medium text-emerald-600">4,110.00 / 4,150.00</span>
              </div>
            </div>

            {/* Trigger Button */}
            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={handleStartDemo}
                disabled={isBusy}
                className="focus-ring flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-sm disabled:opacity-50 transition active:scale-95"
              >
                {isDetected ? (
                  <>
                    <Radio className="h-4 w-4 animate-ping" />
                    <span>TRADE DETECTED...</span>
                  </>
                ) : isSyncing ? (
                  <>
                    <Activity className="h-4 w-4 animate-spin" />
                    <span>SYNCHRONIZING...</span>
                  </>
                ) : isCompleted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span>SYNC COMPLETED</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    <span>Open BUY XAUUSD</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="focus-ring p-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-[#536078] transition"
                title="Reset visualization"
                aria-label="Reset visualization"
              >
                <RefreshCcw className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* SVG Animated Transmission Lines — Three Physical Branching Connector Paths */}
          <div className="w-full lg:w-36 h-28 lg:h-64 relative flex items-center justify-center">
            {/* Desktop Branching Paths with Strict Path-Following SVG Motion */}
            <svg viewBox="0 0 170 290" className="hidden lg:block w-full h-full overflow-visible" aria-hidden="true">
              <defs>
                {/* Radial Glow Filter for Moving Signals */}
                <filter id="fef-signal-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Base Path 1: Master to Slave 1 (Top: ICMarkets) */}
              <path
                id="fef-branch-path-1"
                d="M 0 145 C 75 145, 85 45, 170 45"
                fill="none"
                stroke={slaveStates[0] === 'filled' ? '#10b981' : isSyncing ? '#38bdf8' : '#cbd5e1'}
                strokeWidth={isSyncing ? '2' : slaveStates[0] === 'filled' ? '2' : '1.5'}
                strokeDasharray={isSyncing ? '4 4' : 'none'}
                className="transition-colors duration-300"
                opacity={isSyncing ? 0.9 : slaveStates[0] === 'filled' ? 0.85 : 0.6}
              />

              {/* Base Path 2: Master to Slave 2 (Middle: Pepperstone) */}
              <path
                id="fef-branch-path-2"
                d="M 0 145 C 75 145, 95 145, 170 145"
                fill="none"
                stroke={slaveStates[1] === 'filled' ? '#10b981' : isSyncing ? '#60a5fa' : '#cbd5e1'}
                strokeWidth={isSyncing ? '2' : slaveStates[1] === 'filled' ? '2' : '1.5'}
                strokeDasharray={isSyncing ? '4 4' : 'none'}
                className="transition-colors duration-300"
                opacity={isSyncing ? 0.9 : slaveStates[1] === 'filled' ? 0.85 : 0.6}
              />

              {/* Base Path 3: Master to Slave 3 (Bottom: Exness) */}
              <path
                id="fef-branch-path-3"
                d="M 0 145 C 75 145, 85 245, 170 245"
                fill="none"
                stroke={slaveStates[2] === 'filled' ? '#10b981' : isSyncing ? '#a78bfa' : '#cbd5e1'}
                strokeWidth={isSyncing ? '2' : slaveStates[2] === 'filled' ? '2' : '1.5'}
                strokeDasharray={isSyncing ? '4 4' : 'none'}
                className="transition-colors duration-300"
                opacity={isSyncing ? 0.9 : slaveStates[2] === 'filled' ? 0.85 : 0.6}
              />

              {/* Path-Constrained Travelling Signal Pulses using <animateMotion> (Signal 1 -> ICMarkets) */}
              {isSyncing && (
                <g filter="url(#fef-signal-glow)">
                  <circle r="4" fill="#38bdf8">
                    <animateMotion
                      dur="0.8s"
                      begin="0s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#fef-branch-path-1" />
                    </animateMotion>
                  </circle>
                  <circle r="2" fill="#ffffff">
                    <animateMotion
                      dur="0.8s"
                      begin="0s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#fef-branch-path-1" />
                    </animateMotion>
                  </circle>
                </g>
              )}

              {/* Path-Constrained Travelling Signal Pulses using <animateMotion> (Signal 2 -> Pepperstone, staggered +150ms) */}
              {isSyncing && (
                <g filter="url(#fef-signal-glow)">
                  <circle r="4" fill="#60a5fa">
                    <animateMotion
                      dur="0.8s"
                      begin="0.15s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#fef-branch-path-2" />
                    </animateMotion>
                  </circle>
                  <circle r="2" fill="#ffffff">
                    <animateMotion
                      dur="0.8s"
                      begin="0.15s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#fef-branch-path-2" />
                    </animateMotion>
                  </circle>
                </g>
              )}

              {/* Path-Constrained Travelling Signal Pulses using <animateMotion> (Signal 3 -> Exness, staggered +300ms) */}
              {isSyncing && (
                <g filter="url(#fef-signal-glow)">
                  <circle r="4" fill="#a78bfa">
                    <animateMotion
                      dur="0.8s"
                      begin="0.3s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#fef-branch-path-3" />
                    </animateMotion>
                  </circle>
                  <circle r="2" fill="#ffffff">
                    <animateMotion
                      dur="0.8s"
                      begin="0.3s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#fef-branch-path-3" />
                    </animateMotion>
                  </circle>
                </g>
              )}

              {/* Terminal Connection Origin Ring (Master) */}
              <circle
                cx="2"
                cy="145"
                r={isDetected || isSyncing ? '3.5' : '3'}
                fill={isDetected ? '#a855f7' : isSyncing ? '#38bdf8' : isCompleted ? '#10b981' : '#94a3b8'}
                className="transition-colors duration-300"
              />

              {/* Terminal Connection Destination Rings (Slaves) */}
              <circle
                cx="168"
                cy="45"
                r={slaveStates[0] === 'filled' ? '3.5' : '3'}
                fill={slaveStates[0] === 'filled' ? '#10b981' : slaveStates[0] === 'copying' ? '#38bdf8' : '#94a3b8'}
                className="transition-colors duration-300"
              />
              <circle
                cx="168"
                cy="145"
                r={slaveStates[1] === 'filled' ? '3.5' : '3'}
                fill={slaveStates[1] === 'filled' ? '#10b981' : slaveStates[1] === 'copying' ? '#60a5fa' : '#94a3b8'}
                className="transition-colors duration-300"
              />
              <circle
                cx="168"
                cy="245"
                r={slaveStates[2] === 'filled' ? '3.5' : '3'}
                fill={slaveStates[2] === 'filled' ? '#10b981' : slaveStates[2] === 'copying' ? '#a78bfa' : '#94a3b8'}
                className="transition-colors duration-300"
              />
            </svg>

            {/* Mobile Vertical Branching Connector */}
            <div className="lg:hidden flex flex-col items-center justify-center w-full py-2">
              <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-[#6695f5]" />
              <div className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold border ${
                isSyncing
                  ? 'border-cyan-400 bg-cyan-50 text-cyan-700 animate-pulse'
                  : isCompleted
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                    : 'border-slate-200 bg-slate-100 text-[#536078]'
              }`}>
                {isSyncing ? 'SIGNAL REPLICATION' : '3 SLAVE LINKS'}
              </div>
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#6695f5] to-[#a57af3]" />
            </div>
          </div>

          {/* Connected Slaves Terminals */}
          <div className="space-y-3">
            {[
              { id: '#12044 - ICMarkets', lot: '1.00 Lot', mode: '1:1 Direct' },
              { id: '#90217 - Pepperstone', lot: '0.50 Lot (Risk 50%)', mode: 'Proportional' },
              { id: '#55621 - Exness', lot: '2.00 Lot (Multi 2x)', mode: 'Multiplier' },
            ].map((slave, idx) => {
              const state = slaveStates[idx];
              const isFilled = state === 'filled';
              const isCopying = state === 'copying';

              return (
                <div
                  key={slave.id}
                  className={`p-3.5 rounded-xl transition-all duration-300 ${
                    isFilled
                      ? 'fef-glass-primary border-2 border-emerald-500 shadow-[0_4px_20px_rgba(25,215,135,0.2)] scale-[1.01]'
                      : isCopying
                        ? 'fef-glass-secondary border-2 border-cyan-400 shadow-[0_4px_15px_rgba(56,189,248,0.2)]'
                        : isSyncing
                          ? 'fef-glass-secondary border border-cyan-200/80 shadow-xs'
                          : 'fef-glass-secondary border border-slate-200/90 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-semibold text-[#080B1D]">{slave.id}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                      isFilled
                        ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                        : isCopying
                          ? 'text-cyan-700 bg-cyan-50 border border-cyan-300 animate-pulse'
                          : isSyncing
                            ? 'text-slate-500 bg-slate-100 border border-slate-200'
                            : 'text-[#536078] bg-slate-100 border border-slate-200'
                    }`}>
                      {isFilled
                        ? 'Synchronized'
                        : isCopying
                          ? 'Replicating...'
                          : 'Waiting for Signal'}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between text-[11px] text-[#536078] font-mono font-normal">
                    <span>Replicated Volume: <strong className="font-semibold text-[#080B1D]">{slave.lot}</strong></span>
                    <span>Execution: <strong className={`font-semibold ${
                      isFilled
                        ? 'text-emerald-600'
                        : isCopying
                          ? 'text-cyan-600'
                          : 'text-[#536078]'
                    }`}>
                      {isFilled
                        ? 'FILLED'
                        : isCopying
                          ? 'COPYING'
                          : 'IDLE'}
                    </strong></span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* SECONDARY: Coordinated Cinematic Video Stage immediately below */}
        <div className="mt-12 pt-10 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto">
            <TradeCopyUiCinematicStage
              videoSrc="/videos/fef-trade-copy-ui-animation.mp4"
              ariaLabel="FEF Trade Copier MT5 synchronization demonstration film"
            />
          </div>
        </div>

      </div>

    </section>
  );
};
