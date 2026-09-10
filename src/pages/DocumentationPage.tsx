import React from 'react';
import {
  BookOpen,
  ArrowRight,
  ExternalLink,
  Cpu,
  Sliders,
  CheckCircle,
  CheckCircle2,
  HelpCircle,
  Layers,
  Activity,
  RefreshCw,
  AlertOctagon,
  ScrollText,
  LayoutDashboard,
} from 'lucide-react';

export const DocumentationPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Product Documentation</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Professional Trade Copier MT5 <span className="fef-headline-gradient">Documentation</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            A comprehensive manual and reference portal for setup, configuration, testing, and safe operation of FEF MetaTrader 5 trading software.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <span>Buy on MQL5</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/trade-copier"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>View Trade Copier</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Setup Guide Direct Links (2 Dedicated Guides) */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-[2.5rem] fef-glass-card flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                Full Walkthrough
              </span>
              <Cpu className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white group-hover:text-emerald-300 transition">
              Trade Copier Setup Guide
            </h3>
            <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
              Install, configure, and safely test FEF Professional Trade Copier MT5 with sender and receiver accounts before using it on live MT5 accounts.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href="/documentation/trade-copier-setup"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
              <span>Read Setup Guide</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="p-8 rounded-[2.5rem] fef-glass-card flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
                Full Walkthrough
              </span>
              <Sliders className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white group-hover:text-cyan-300 transition">
              Manual Trade Manager Setup Guide
            </h3>
            <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
              Install, attach, configure, and safely test FEF Manual Trade Manager Pro MT5 before using it on a live account.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href="/documentation/manual-trade-manager-setup"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
              <span>Read Setup Guide</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Start from Purchase to Demo Test */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Quick Start</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          From purchase to <span className="fef-headline-gradient">first demo test</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Start with a controlled setup process, confirm account roles, and validate behavior in demo conditions before using live funds.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 rounded-2xl fef-glass-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400">01</span>
              <h4 className="mt-2 text-base font-semibold text-white">Install from MQL5 Market</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Access the official product through MQL5 Market and install it inside your MetaTrader 5 terminal.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl fef-glass-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400">02</span>
              <h4 className="mt-2 text-base font-semibold text-white">Attach to Master Account</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Set the source account that broadcasts open, modify, and close trade actions into the copier workflow.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl fef-glass-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#1da8ff]">03</span>
              <h4 className="mt-2 text-base font-semibold text-white">Attach to Slave Account</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Connect receiving accounts and confirm symbol, lot, and risk settings before copying trades.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl fef-glass-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-purple-400">04</span>
              <h4 className="mt-2 text-base font-semibold text-white">Test on Demo First</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Validate synchronization, broker conditions, and dashboard status before any live deployment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Master & Slave Setup Details */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-[2.5rem] fef-glass-section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <h3 className="text-2xl font-semibold text-white">Master Account Setup</h3>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            The master account is the source account. It sends open, modify, and close trade actions into the copier workflow for connected slave accounts to receive.
          </p>
          <div className="mt-6 space-y-3">
            {[
              'Confirm the master account is the intended source account.',
              'Review open, modify, and close trade behavior during testing.',
              'Check symbol names, lot mode, connection status, and trade permissions.',
              'Use demo testing before considering live account operation.',
            ].map((check, idx) => (
              <div key={idx} className="p-3.5 rounded-xl fef-glass-card-static flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200">{check}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-[2.5rem] fef-glass-section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <h3 className="text-2xl font-semibold text-white">Slave Account Setup</h3>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            Slave accounts receive copied actions from the master account. Each account should be checked independently for symbol mapping, lot settings, and broker-specific conditions.
          </p>
          <div className="mt-6 space-y-3">
            {[
              'Confirm each slave account receives copied trade actions as expected.',
              'Review symbol mapping, lot settings, risk settings, and broker compatibility.',
              'Monitor copied trades manually during early testing sessions.',
              'Compare master and slave execution behavior before increasing size.',
            ].map((check, idx) => (
              <div key={idx} className="p-3.5 rounded-xl fef-glass-card-static flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8 Configuration Reference Blocks */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Configuration Reference</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Core settings and <span className="fef-headline-gradient">operator tools</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
          Review these areas during setup and testing so the copier matches your account structure and operating rules.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Symbol Mapping',
              desc: 'Helps match symbols across brokers with common prefixes, suffixes, and naming variations.',
              icon: <Layers className="h-5 w-5 text-cyan-400" />,
            },
            {
              title: 'Lot Mode',
              desc: 'Supports controlled sizing workflows such as same-lot, multiplier, or proportional equity allocation.',
              icon: <Sliders className="h-5 w-5 text-emerald-400" />,
            },
            {
              title: 'Retry Queue',
              desc: 'Keeps failed copy actions visible for controlled retry, inspection, and recovery workflows.',
              icon: <RefreshCw className="h-5 w-5 text-[#1da8ff]" />,
            },
            {
              title: 'Heartbeat Monitoring',
              desc: 'Provides status visibility for connection, latency, and account monitoring during continuous operation.',
              icon: <Activity className="h-5 w-5 text-purple-400" />,
            },
            {
              title: 'Manual Sync',
              desc: 'Lets the operator request a fresh synchronization check when account state needs manual review.',
              icon: <RefreshCw className="h-5 w-5 text-amber-400" />,
            },
            {
              title: 'Panic Close',
              desc: 'Provides an emergency action workflow for controlled shutdown scenarios and instant flat positions.',
              icon: <AlertOctagon className="h-5 w-5 text-red-400" />,
            },
            {
              title: 'Event Logs',
              desc: 'Gives operators visibility into copy events, retries, broker tickets, and important state changes.',
              icon: <ScrollText className="h-5 w-5 text-teal-400" />,
            },
            {
              title: 'Dashboard Status',
              desc: 'Displays copier state, account readiness, and synchronization visibility in one unified on-chart HUD.',
              icon: <LayoutDashboard className="h-5 w-5 text-cyan-300" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl fef-glass-card flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit">
                  {item.icon}
                </div>
                <h4 className="mt-4 text-base font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-Live Checklist */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card-static border-emerald-500/30">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Risk-Aware Deployment</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Checklist before live operation</h3>
          <p className="mt-2 text-sm text-slate-300">
            Copy trading is still trading. Use a measured deployment process and monitor early sessions manually.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Test on demo first</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Compare master & slave symbols</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Start with small lot settings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Check spread & execution conditions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Monitor first sessions manually</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Never assume copy trading removes risk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation FAQ (All 6 Official Questions) */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">FAQ</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Documentation <span className="fef-headline-gradient">questions & answers</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
          Concise answers for traders preparing setup, testing, and deployment.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              q: 'Does it guarantee profit?',
              a: 'No. FEF Professional Trade Copier MT5 is software for trade copying workflows. It does not guarantee profit or trading performance.',
            },
            {
              q: 'Can it copy between different brokers?',
              a: 'It is designed for MetaTrader 5 environments and broker-specific symbol naming conditions, but users should test each broker combination on demo first.',
            },
            {
              q: 'What should I test before live deployment?',
              a: 'Test symbol mapping, lot mode, order behavior, connection status, dashboard state, and how copied trades behave under your broker conditions.',
            },
            {
              q: 'What if symbols have suffixes or prefixes?',
              a: 'The copier includes symbol detection logic for common broker prefixes, suffixes, and symbol variations. Confirm mapping during demo testing.',
            },
            {
              q: 'Should I use demo first?',
              a: 'Yes. Demo testing is strongly recommended before any live deployment so you can review configuration and execution behavior safely.',
            },
            {
              q: 'Where can I buy it?',
              a: 'FEF Professional Trade Copier MT5 is officially available through the MQL5 Market.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl fef-glass-card">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">{item.q}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer Card */}
      <div className="p-8 sm:p-12 rounded-[2.5rem] fef-glass-section flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Prepare your FEF Trade Copier MT5 setup with confidence
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Use this documentation to configure the copier carefully, test on demo accounts, and review the product page before deployment.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.mql5.com/en/market/product/183557"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
          >
            <span>Buy on MQL5</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="/trade-copier"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
          >
            <span>View Trade Copier</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
