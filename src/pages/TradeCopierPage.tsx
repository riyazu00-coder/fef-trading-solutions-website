import React, { useRef, useEffect } from 'react';
import {
  ExternalLink,
  Zap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const TradeCopierPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
            video.pause();
          }
        });
      },
      {
        threshold: [0.1, 0.25, 0.5],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Two-Column Primary Row: Left Copy (~45%) | Right Cinematic Video (~55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT: Product Information */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase w-fit">
              <Zap className="h-3.5 w-3.5" />
              <span>Available on MQL5 Market</span>
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-white leading-[1.12]">
              FEF Professional <span className="fef-headline-gradient">Trade Copier MT5</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Premium Master/Slave trade copying software for MetaTrader 5, built for reliable multi-account synchronization, operator visibility, and professional execution workflows.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3.5">
              <a
                href="https://www.mql5.com/en/market/product/183557"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:scale-105 active:scale-95"
              >
                <span>Buy on MQL5 Market</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="/documentation/trade-copier-setup"
                className="focus-ring inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
              >
                <BookOpen className="h-4 w-4" />
                <span>Setup Guide</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Cinematic Workflow Video */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <div
              ref={videoContainerRef}
              className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#050814] border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.4)] select-none"
            >
              <video
                ref={videoRef}
                src="/videos/fef-trade-copier-workflow.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                disableRemotePlayback
                aria-label="FEF Trade Copier MT5 cinematic workflow demonstration"
                className="w-full h-full object-contain object-center"
              />
              {/* Subtle inner glass edge ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 shadow-[inset_0_0_35px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4 Specification Cards Underneath */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 sm:pt-8 border-t border-white/10">
          <div className="p-3.5 sm:p-4 rounded-xl fef-glass-card text-center">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Platform</p>
            <p className="mt-1 text-base font-semibold text-white">MT5</p>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl fef-glass-card text-center">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Workflow</p>
            <p className="mt-1 text-base font-semibold text-white">Master/Slave</p>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl fef-glass-card text-center">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Delivery</p>
            <p className="mt-1 text-base font-semibold text-white">MQL5 Market</p>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl fef-glass-card text-center">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">HUD</p>
            <p className="mt-1 text-base font-semibold text-white">On-Chart</p>
          </div>
        </div>
      </div>


      {/* Key Capabilities (12 Official Features) */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Key Capabilities</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Built for serious <span className="fef-headline-gradient">MT5 copy operations</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          The copier combines account synchronization, symbol handling, recovery tools, and operator visibility in one professional product.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Exact Master Mirror',
              desc: 'Slave accounts replicate master positions with precise directional intent and ticket tracking.',
            },
            {
              title: 'Copy Every MT5 Symbol',
              desc: 'Built for FX, metals, indices, energies, crypto, and broker-specific CFD contracts.',
            },
            {
              title: 'Multi-Broker Compatible',
              desc: 'Works across brokers with different symbol naming schemes, digit formats, and contract sizes.',
            },
            {
              title: 'Automatic Symbol Detection',
              desc: 'Smart resolver handles prefixes, suffixes, and common symbol aliases (e.g. XAUUSD vs. GOLD).',
            },
            {
              title: 'Unlimited Simultaneous Trades',
              desc: 'Copy concurrent tickets without an artificial position cap or licensing throttle.',
            },
            {
              title: 'Multiple Positions per Symbol',
              desc: 'Track and copy each position independently even when running complex multi-entry grids.',
            },
            {
              title: 'Same Lot Mode',
              desc: 'Mirror master lot size directly when fixed 1:1 volume replication is required.',
            },
            {
              title: 'Lot Multiplier Mode',
              desc: 'Scale slave position size proportionally for account-level equity allocation.',
            },
            {
              title: 'Professional Dashboard',
              desc: 'Dense operator HUD for monitoring account state, sync status, and recent actions in real time.',
            },
            {
              title: 'Heartbeat Monitoring',
              desc: 'Connection and account health checks help operators spot interruptions before orders fail.',
            },
            {
              title: 'Retry Queue',
              desc: 'Re-attempts transient execution failures caused by spread widenings or broker requotes.',
            },
            {
              title: 'Panic Close Workflow',
              desc: 'Emergency operator trigger to flatten all copied positions immediately across slave accounts.',
            },
          ].map((cap, idx) => (
            <div key={idx} className="p-6 rounded-2xl fef-glass-card flex flex-col justify-between">
              <div>
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <h4 className="mt-4 text-base font-semibold text-white">{cap.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{cap.desc}</p>
              </div>
            </div>
          ))}
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
                <td className="font-semibold text-white">Synchronization Architecture</td>
                <td>Local IPC communication</td>
                <td>Designed for local MetaTrader 5 terminal synchronization</td>
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
                <td>Lot Multiplier, Same Lot, Risk %</td>
                <td>Automated equity-based proportional sizing</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Delivery Mode</td>
                <td>MQL5 Market Licensing (183557)</td>
                <td>Encrypted delivery with automated updates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Callout to Setup Guide */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-section flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">Ready to configure the Trade Copier?</h3>
          <p className="mt-2 text-sm text-slate-300">
            Read our step-by-step setup guide covering sender/receiver activation, symbol rules, and demo testing.
          </p>
        </div>
        <a
          href="/documentation/trade-copier-setup" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition shrink-0"
        >
          <span>Read Setup Guide</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
