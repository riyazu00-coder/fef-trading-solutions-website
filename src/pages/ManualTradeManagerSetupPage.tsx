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
  Store,
  Sliders,
} from 'lucide-react';

export const ManualTradeManagerSetupPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
            <span>DOCUMENTATION</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            FEF Manual Trade Manager Pro MT5 <span className="fef-headline-gradient">Setup Guide</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Learn how to install, attach, configure, and safely test FEF Manual Trade Manager Pro MT5 before using it on a live account.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="p-5 rounded-2xl fef-glass-card flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Install from MQL5 Market</p>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Attach to MT5 chart</p>
          </div>
          <div className="p-5 rounded-2xl fef-glass-card flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Demo test before live use</p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="p-8 rounded-[2rem] fef-glass-card-static border-amber-500/30 bg-amber-500/[0.04]">
        <div className="flex flex-col md:flex-row gap-5">
          <AlertTriangle className="h-6 w-6 shrink-0 text-amber-400" />
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">Important Notice</p>
            <h2 className="text-2xl font-semibold text-white">Manual management does not remove trading risk</h2>
            <div className="grid gap-3 text-sm text-slate-300 md:grid-cols-2 pt-2">
              <p className="font-semibold text-white">• This tool does not open trades automatically or generate signals.</p>
              <p>• It is designed to manage existing manual trades based on user-configured rules.</p>
              <p>• Users should test thoroughly on demo accounts before live use.</p>
              <p>• Trading financial markets involves significant risk of capital loss.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Terminal Preparation</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Prepare the terminal <span className="fef-headline-gradient">before setup</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
          Confirm the basic platform, account, and testing requirements before attaching the EA to an active chart.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'MetaTrader 5 desktop terminal',
            'Active MQL5 account for Market installation',
            'FEF Manual Trade Manager Pro MT5 product access',
            'Algo Trading enabled in MT5 toolbar',
            'Stable internet connection or VPS recommended',
            'Demo account ready for testing',
          ].map((req, idx) => (
            <div key={idx} className="p-4 rounded-2xl fef-glass-card flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-white">{req}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Installation & Chart Attachment */}
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
              Use the official MQL5 Market workflow inside MetaTrader 5 and avoid unofficial direct download files.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Open MetaTrader 5.',
                'Log in to your MQL5 account inside MT5 (Tools > Options > Community).',
                'Navigate to Navigator > Market, or Toolbox > Market > Purchased.',
                'Install FEF Manual Trade Manager Pro MT5 from your purchased products area.',
                'Restart MT5 or refresh Navigator if the product does not appear immediately.',
                'Find the EA listed under Navigator > Expert Advisors > Market.',
              ].map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl fef-glass-card-static flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold text-cyan-400 bg-cyan-400/10">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10">
            <a
              href="https://www.mql5.com/en/market/product/183695"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
              <span>View Product on MQL5 Market</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Attach to Chart */}
        <div className="p-8 rounded-[2.5rem] fef-glass-section relative overflow-hidden flex flex-col justify-between">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div>
            <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 w-fit">
              <Sliders className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">Attach to Chart</h2>
            <p className="mt-3 text-sm text-slate-300">
              Attach the EA to the chart you want to manage and confirm MT5 permissions before testing.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Open the symbol chart you want the tool to manage.',
                'Drag FEF Manual Trade Manager Pro MT5 onto the chart.',
                'Enable Algo Trading in the MetaTrader 5 toolbar.',
                'Allow algorithmic trading in the EA settings window (Common tab).',
                'Confirm the EA active state on the chart dashboard.',
                'Use one chart per symbol when managing only the current symbol.',
              ].map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl fef-glass-card-static flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold text-emerald-400 bg-emerald-400/10">
                    Check {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Settings Reference */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Configuration</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Understand what each <span className="fef-headline-gradient">setting controls</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          These settings control workflow behavior. They do not expose source code, promise exact broker behavior, or remove trading risk.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Manage Manual Trades',
              desc: 'Controls whether the EA focuses on positions opened manually by the trader. Keep this aligned with how you intend to manage positions.',
            },
            {
              title: 'Manage Current Symbol Only',
              desc: 'Limits management to the symbol chart where the EA is attached. This helps keep symbol-specific workflows easier to monitor.',
            },
            {
              title: 'Auto Set Stop Loss',
              desc: 'Allows the EA to add a missing stop loss when configured conditions permit. Broker stop-level and freeze-level rules affect placement.',
            },
            {
              title: 'Auto Set Take Profit',
              desc: 'Allows the EA to add a configured take profit to eligible trades. Confirm distances on demo before relying on live behavior.',
            },
            {
              title: 'Break-Even',
              desc: 'Moves the stop loss toward break-even after the configured profit distance is reached. It does not guarantee a risk-free outcome.',
            },
            {
              title: 'Trailing Stop',
              desc: 'Adjusts the stop loss when trailing conditions are met. Test carefully, because spread, volatility, broker rules, and market gaps affect results.',
            },
            {
              title: 'Partial Close',
              desc: 'Supports reducing a position by a configured amount when conditions are met. Start disabled until you understand the behavior on demo.',
            },
            {
              title: 'Magic Number Behavior',
              desc: 'Filtering settings help define which trades are eligible for management. Incorrect magic number rules can cause positions to be ignored.',
            },
            {
              title: 'Fixed Points vs. ATR-based Stops',
              desc: 'Fixed point settings use static distances, while ATR-based settings adapt to volatility. Neither approach promises exact broker execution.',
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

      {/* First Demo Settings & Basic Workflow */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* First Demo Settings */}
        <div className="p-8 rounded-[2.5rem] fef-glass-section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Recommended Baseline</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Start with conservative behavior</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Use controlled settings on a demo account first. Adjust only after you understand how the EA responds to your broker.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {[
              'Manage manual trades: ON',
              'Manage current symbol only: ON',
              'Auto SL: ON',
              'Auto TP: ON',
              'Override existing SL/TP: OFF',
              'Break-even: ON',
              'Trailing stop: ON after demo testing',
              'Partial close: OFF at first',
              'Use small lot size (0.01)',
              'Test on demo account first',
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
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Verification Protocol</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">How management should be tested</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Follow this 6-step testing cycle on a demo account.
          </p>

          <div className="mt-6 space-y-3">
            {[
              'Place a manual trade on your demo chart.',
              'The EA detects the position when it matches your settings.',
              'The EA adds missing SL/TP if enabled and allowed by broker rules.',
              'The EA moves SL to break-even when the profit distance is reached.',
              'The EA trails stop only when trailing conditions are met.',
              'The EA never removes underlying market risk.',
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
          Most setup issues come from platform permissions, product access, broker restrictions, symbol filters, or settings that exclude the trade.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              issue: 'EA not attaching',
              solution: 'Confirm the product is installed, MT5 is responsive, and the EA is dragged onto a valid chart.',
            },
            {
              issue: 'Algo Trading disabled',
              solution: 'Enable Algo Trading in the MT5 toolbar and confirm algorithmic trading is allowed in the EA settings.',
            },
            {
              issue: 'Product not in Navigator',
              solution: 'Refresh Navigator, restart MT5, and confirm you are logged in to the MQL5 account with product access.',
            },
            {
              issue: 'SL/TP not added',
              solution: 'Review Auto SL/TP settings, current symbol filters, broker stop levels, freeze levels, and market status.',
            },
            {
              issue: 'Break-even not moving',
              solution: 'Check the configured trigger distance, trade eligibility, spread conditions, and whether modifications are permitted.',
            },
            {
              issue: 'Trailing not working',
              solution: 'Confirm trailing is enabled, conditions have been reached, and broker modification limits are not blocking updates.',
            },
            {
              issue: 'Wrong symbol or magic',
              solution: 'Verify the chart symbol, current-symbol-only mode, and any magic number filters used to include or exclude trades.',
            },
            {
              issue: 'Market closed',
              solution: 'Some trade modifications may not be accepted when the market is closed or liquidity is unavailable.',
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
            Review before any live account use
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            This checklist supports safer testing habits. It does not guarantee results or remove the need for trader oversight.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Test on demo first</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Confirm symbol and settings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Keep SL active</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Do not over-leverage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Check broker stop levels</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Use VPS for stable management if needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <a href="/risk-disclaimer" className="text-cyan-400 hover:underline">Read Risk Disclaimer</a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.mql5.com/en/market/product/183695"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition"
            >
              <span>Buy on MQL5 Market</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/manual-trade-manager"
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
