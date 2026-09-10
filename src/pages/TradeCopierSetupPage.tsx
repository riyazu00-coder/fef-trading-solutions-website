import React from 'react';
import {
  BookOpen,
  AlertTriangle,
  CheckCircle,
  CheckCircle2,
  SlidersHorizontal,
  Wrench,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Layers,
  Store,
} from 'lucide-react';

export const TradeCopierSetupPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
            <span>DOCUMENTATION</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Professional Trade Copier MT5 <span className="fef-headline-gradient">Setup Guide</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Learn how to install, configure, and safely test FEF Professional Trade Copier MT5 before using it with live MetaTrader 5 accounts.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="p-5 rounded-2xl fef-glass-card flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Configure sender and receiver</p>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Validate symbol and lot rules</p>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Demo test before live use</p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="p-8 rounded-[2rem] fef-glass-card-static border-red-500/30 bg-red-500/[0.04]">
        <div className="flex flex-col md:flex-row gap-5">
          <AlertTriangle className="h-6 w-6 shrink-0 text-red-400" />
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-300">Important Notice</p>
            <h2 className="text-2xl font-semibold text-white">Copy trading requires careful risk control</h2>
            <div className="grid gap-3 text-sm text-slate-300 md:grid-cols-2 pt-2">
              <p>• Trade copying involves financial market risk.</p>
              <p>• Copied trades can produce capital losses.</p>
              <p>• Users must test rigorously on demo accounts before live use.</p>
              <p>• Broker conditions, spreads, slippage, symbol suffixes, execution speed, and account permissions affect results.</p>
              <p className="md:col-span-2 font-medium text-amber-200">
                • Software cannot guarantee profit or identical execution between broker terminals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Prerequisites</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Prepare both MT5 accounts <span className="fef-headline-gradient">before setup</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
          Confirm platform access, product licensing, and a controlled demo environment before connecting sender and receiver workflows.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'MetaTrader 5 desktop terminal',
            'Active MQL5 account for Market installation',
            'FEF Professional Trade Copier MT5 product access',
            'Algo Trading enabled in MT5 toolbar',
            'Sender / source MT5 account',
            'Receiver / client MT5 account',
            'Stable internet connection or VPS recommended',
            'Demo accounts ready for testing',
          ].map((req, idx) => (
            <div key={idx} className="p-4 rounded-2xl fef-glass-card flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-white">{req}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Installation & Architecture Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Installation from MQL5 Market */}
        <div className="p-8 rounded-[2.5rem] fef-glass-section relative overflow-hidden flex flex-col justify-between">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div>
            <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 w-fit">
              <Store className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">Installation from MQL5 Market</h2>
            <p className="mt-3 text-sm text-slate-300">
              Use the official MQL5 Market workflow inside MetaTrader 5 and avoid unofficial direct binaries.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Open MetaTrader 5 on your PC or VPS.',
                'Log in to your MQL5 account from inside MT5 (Tools > Options > Community).',
                'Navigate to Navigator > Market, or Toolbox > Market > Purchased.',
                'Install FEF Professional Trade Copier MT5 from your purchased products area.',
                'Restart MT5 or right-click Navigator > Refresh if the product does not appear immediately.',
                'Find the EA listed under Navigator > Expert Advisors > Market.',
              ].map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl fef-glass-card-static flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold text-emerald-400 bg-emerald-400/10">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10">
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
              <span>View Product on MQL5 Market</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Sender & Receiver Concept */}
        <div className="p-8 rounded-[2.5rem] fef-glass-section relative overflow-hidden flex flex-col justify-between">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div>
            <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 w-fit">
              <Layers className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">Sender & Receiver Concept</h2>
            <p className="mt-3 text-sm text-slate-300">
              Copying depends on an explicit directional relationship between the source master account and receiving accounts.
            </p>
            <div className="mt-6 space-y-4">
              <div className="p-5 rounded-2xl fef-glass-card">
                <h3 className="text-base font-semibold text-white">Sender / Source Account (Master)</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The sender account is where original trades are placed by the trader or expert advisor. Its trade executions, modifications, and closures become the source broadcast for all connected receivers.
                </p>
              </div>

              <div className="p-5 rounded-2xl fef-glass-card">
                <h3 className="text-base font-semibold text-white">Receiver / Client Account (Slave)</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The receiver account is where copied trades are replicated. Position sizing, symbol translation, and risk boundaries are enforced on the receiver side before submitting orders to the broker.
                </p>
              </div>

              <div className="p-5 rounded-2xl fef-glass-card">
                <h3 className="text-base font-semibold text-white">Both Sides Matter</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Sender and receiver settings must be configured correctly. Always test with demo accounts to verify broker suffix mapping and lot scaling prior to connecting live funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attach to Chart */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Terminal Activation</p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
            Activate the EA with the <span className="fef-headline-gradient">correct role</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Each chart or terminal should be configured according to its sender or receiver role before testing copy behavior.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { step: '1', title: 'Open Chart', desc: 'Open any symbol chart in MetaTrader 5 (e.g., EURUSD).' },
            { step: '2', title: 'Drag EA', desc: 'Drag FEF Professional Trade Copier MT5 from Navigator onto the chart.' },
            { step: '3', title: 'Algo Trading', desc: 'Enable the "Algo Trading" button in the MT5 top toolbar.' },
            { step: '4', title: 'Allow Live Trading', desc: 'In EA properties > Common tab, check "Allow Algo Trading".' },
            { step: '5', title: 'Verify Status', desc: 'Confirm the EA dashboard displays active connection and role.' },
            { step: '6', title: 'Configure Role', desc: 'Set InpRole to Sender on master, and Receiver on slave terminals.' },
          ].map((item) => (
            <div key={item.step} className="p-5 rounded-2xl fef-glass-card flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400 font-mono font-bold text-xs shrink-0">
                0{item.step}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Settings Reference */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Parameters</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Understand copy behavior <span className="fef-headline-gradient">before live use</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          These setting areas shape the copy workflow. They do not expose source code, promise exact broker behavior, or remove trading risk.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Sender Mode',
              desc: 'Defines the account or chart as the source side where original trade actions are detected and prepared for copying.',
            },
            {
              title: 'Receiver Mode',
              desc: 'Defines the account or chart as the client side where copied trades may be opened, modified, or closed when conditions allow.',
            },
            {
              title: 'Symbol Matching',
              desc: 'Controls how receiver symbols match sender symbols, including broker suffixes or prefixes such as XAUUSD versus XAUUSDm.',
            },
            {
              title: 'Lot Size Mode',
              desc: 'Controls how receiver trade size is calculated. Confirm behavior on demo before using any live account.',
            },
            {
              title: 'Fixed / Multiplier / Risk Sizing',
              desc: 'Use conservative settings when testing fixed lot, multiplier-style, or risk-based workflows. Broker conditions affect outcomes.',
            },
            {
              title: 'Maximum Lot Protection',
              desc: 'Helps limit copied size according to configured boundaries. This should be treated as a control, not a guarantee against loss.',
            },
            {
              title: 'Copy SL/TP',
              desc: 'Copies stop loss and take profit where enabled and accepted by broker rules. Stop levels, freeze levels, and spreads affect placement.',
            },
            {
              title: 'Copy Pending Orders',
              desc: 'If available in the configured workflow, pending order copying should be tested carefully because broker rules and symbol availability may differ.',
            },
            {
              title: 'Magic Number Behavior',
              desc: 'Filtering settings help define which trades are eligible. Incorrect magic number rules can cause trades to be ignored or excluded.',
            },
            {
              title: 'Trade Comment Behavior',
              desc: 'Trade comments can help identify copied trades, but brokers may modify, shorten, or restrict comment handling.',
            },
            {
              title: 'Slippage and Spread Limits',
              desc: 'Execution quality can differ between accounts. Spread, slippage, volatility, liquidity, and broker execution can affect copied results.',
            },
            {
              title: 'Advanced Copy Behavior',
              desc: 'Review any advanced copy mode carefully in documentation and demo testing before relying on it with live accounts.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl fef-glass-card flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 w-fit">
                  <SlidersHorizontal className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Setup & Basic Workflow */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* First Demo Setup */}
        <div className="p-8 rounded-[2.5rem] fef-glass-section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">First Demo Setup</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Test one controlled path first</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Keep the first demo run simple: one sender, one receiver, one symbol, conservative sizing, and careful comparison.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {[
              'Use demo sender & receiver',
              'Start with one symbol (e.g. EURUSD)',
              'Use smallest lot size (0.01)',
              'Copy SL/TP: ON',
              'Conservative lot multiplier (1.0)',
              'Avoid high-impact news times',
              'Confirm lot size, SL, and TP',
              'Run multiple demo tests first',
            ].map((check, idx) => (
              <div key={idx} className="p-3 rounded-xl fef-glass-card-static flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200">{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Basic Workflow */}
        <div className="p-8 rounded-[2.5rem] fef-glass-section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Execution Protocol</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">How copy behavior should be tested</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Follow this 6-step lifecycle to verify synchronization integrity.
          </p>

          <div className="mt-6 space-y-3">
            {[
              'Place a trade on the sender demo account.',
              'Receiver detects the trade according to configuration.',
              'Receiver opens corresponding trade if conditions allow.',
              'SL/TP are verified and copied if enabled.',
              'Trade modifications and closures are copied.',
              'User remains responsible for risk and account management.',
            ].map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl fef-glass-card-static flex items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold text-cyan-400 bg-cyan-400/10">
                  0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-200">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Diagnostics</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Common setup <span className="fef-headline-gradient">checks & troubleshooting</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Most copy issues come from permissions, symbol naming, filters, account roles, broker limits, or connectivity interruptions.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              issue: 'EA not attaching',
              solution: 'Confirm the product is installed, MT5 is responsive, and the EA is dragged onto an active chart.',
            },
            {
              issue: 'Algo Trading disabled',
              solution: 'Enable Algo Trading in the MT5 toolbar and allow algorithmic trading in the EA Common settings.',
            },
            {
              issue: 'Product not in Navigator',
              solution: 'Refresh Navigator, restart MT5, and confirm you are logged in to the MQL5 account with product access.',
            },
            {
              issue: 'Receiver not copying',
              solution: 'Check sender/receiver modes, symbol mapping, magic filters, permissions, and receiver trading rights.',
            },
            {
              issue: 'Symbol name mismatch',
              solution: 'Review broker differences (e.g., XAUUSD vs. XAUUSDm) and verify symbol matching rules on demo.',
            },
            {
              issue: 'Market closed',
              solution: 'Copied trade actions will wait or fail if the market is closed or symbol liquidity is halted.',
            },
            {
              issue: 'Broker freeze levels',
              solution: 'Some SL/TP modifications may be rejected if price distances do not meet broker stop/freeze levels.',
            },
            {
              issue: 'Spread or slippage too high',
              solution: 'High spread or volatility can affect copied entries and exits. Avoid high-impact news during testing.',
            },
            {
              issue: 'Wrong mode assigned',
              solution: 'Confirm each terminal or chart is set to the correct role (Sender vs. Receiver) before testing.',
            },
            {
              issue: 'Wrong magic number',
              solution: 'Filters may exclude trades from copying. Review magic number, symbol, and direction filters.',
            },
            {
              issue: 'VPS or network drop',
              solution: 'Connectivity interruptions can stop trade detection. Use stable hosting where ongoing management is needed.',
            },
            {
              issue: 'MQL5 license check',
              solution: 'Confirm the terminal is logged in to the correct MQL5 account with active product access.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl fef-glass-card flex items-start gap-3.5">
              <Wrench className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">{item.issue}</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Checklist & Next Steps */}
      <div className="p-8 sm:p-12 rounded-[2.5rem] fef-glass-section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Safety Checklist</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
            Review before any live copy setup
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            This checklist supports safer testing habits. It does not guarantee results or remove the need for trader oversight.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Test demo to demo first</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Confirm symbol mapping</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Confirm lot settings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Confirm SL/TP behavior</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Use conservative risk</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Avoid over-leverage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Use VPS for stability</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <a href="/risk-disclaimer" className="text-cyan-400 hover:underline">Read Risk Disclaimer</a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <span>Buy on MQL5 Market</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/trade-copier"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition"
            >
              <span>View Product Page</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/downloads"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition"
            >
              <span>Downloads Center</span>
            </a>
            <a
              href="/support"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition"
            >
              <span>Support Center</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
