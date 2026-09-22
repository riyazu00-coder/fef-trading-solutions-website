import React from 'react';
import {
  ShieldCheck,
  Check,
  ExternalLink,
  Cpu,
  Sliders,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Hero */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-12 lg:p-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Official MQL5 Licensing</span>
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Transparent Pricing & <span className="fef-headline-gradient">Official MQL5 Access</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Public FEF trading tools are delivered through the official MQL5 Market with licensing, installation guidance, and demo testing compatibility.
          </p>
        </div>
      </div>

      {/* Official Products Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Trade Copier */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-section relative overflow-hidden flex flex-col justify-between group">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                Official MQL5 Release
              </span>
              <Cpu className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">FEF Trade Copier MT5</h3>
            <p className="mt-2 text-sm text-slate-300 font-normal">
              High-speed master/slave account copy synchronization across brokers with custom lot multiplier.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Pricing and purchase options are available on the official MQL5 Market product page.
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Unlimited slave terminal connections</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Local IPC copy engine for terminal synchronization</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Prefix & suffix symbol translation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Heartbeat monitoring & retry queue</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Automated updates via MQL5 terminal</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <a
              href="https://www.mql5.com/en/market/product/183557"
              target="_blank"
              rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-[#05070d] bg-brand-gradient hover:brightness-110 shadow-glow transition transform hover:scale-[1.02] active:scale-95"
            >
              <span>Buy on MQL5 Market</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="flex justify-between items-center px-1 text-xs">
              <a href="/trade-copier" className="text-slate-300 hover:text-white transition">
                Product Details
              </a>
              <a href="/documentation/trade-copier-setup" className="text-cyan-400 hover:underline">
                Setup Guide
              </a>
            </div>
          </div>
        </div>

        {/* Manual Trade Manager */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card relative overflow-hidden flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
                Official MQL5 Release
              </span>
              <Sliders className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">Manual Trade Manager PRO</h3>
            <p className="mt-2 text-sm text-slate-300 font-normal">
              Structured post-entry position management: automatic SL/TP, breakeven, trailing stops, and partial close.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Pricing and purchase options are available on the official MQL5 Market product page.
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Manual trade protection (no automated signals)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Automatic Stop Loss & Take Profit</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Intelligent break-even activation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Multi-step trailing stop & partial close</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Direct on-chart visual assistant HUD</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <a
              href="https://www.mql5.com/en/market/product/183695"
              target="_blank"
              rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition transform hover:scale-[1.02] active:scale-95"
            >
              <span>Buy on MQL5 Market</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="flex justify-between items-center px-1 text-xs">
              <a href="/manual-trade-manager" className="text-slate-300 hover:text-white transition">
                Product Details
              </a>
              <a href="/documentation/manual-trade-manager-setup" className="text-cyan-400 hover:underline">
                Setup Guide
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Flow (6 Steps) */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">Purchase Flow</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          From product selection to <span className="fef-headline-gradient">demo testing</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Follow these structured steps for safe acquisition, terminal installation, and verification.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {[
            { step: '01', title: 'Choose Product', desc: 'Select Trade Copier or Manual Trade Manager.' },
            { step: '02', title: 'Open MQL5', desc: 'Visit the official MQL5 Market page.' },
            { step: '03', title: 'Complete Order', desc: 'Securely check out via official MQL5 system.' },
            { step: '04', title: 'Install in MT5', desc: 'Download via MT5 Navigator > Market > Purchased.' },
            { step: '05', title: 'Documentation', desc: 'Follow FEF setup guide for parameter checks.' },
            { step: '06', title: 'Demo Testing', desc: 'Validate behavior on demo before live funds.' },
          ].map((item) => (
            <div key={item.step} className="p-5 rounded-2xl fef-glass-card flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400">{item.step}</span>
                <h4 className="mt-2 text-sm font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compare Products Table */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">Workflow Matching</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Choose the product that matches your <span className="fef-headline-gradient">MT5 workflow</span>
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="fef-glass-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>FEF Trade Copier MT5</th>
                <th>FEF Manual Trade Manager PRO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Product Purpose</td>
                <td>Copy trades from master to slave accounts</td>
                <td>Manage manual trades with SL/TP, breakeven, trailing, and partial close</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Target User</td>
                <td>Traders & operators managing multiple MT5 accounts</td>
                <td>Manual traders seeking disciplined position management</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Core Workflow</td>
                <td>Synchronization</td>
                <td>Manual trade control (no automated signals)</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Best For</td>
                <td>Multi-account execution workflows</td>
                <td>Disciplined manual risk protection</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Delivery</td>
                <td>
                  <a href="https://www.mql5.com/en/market/product/183557" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    MQL5 Market (183557)
                  </a>
                </td>
                <td>
                  <a href="https://www.mql5.com/en/market/product/183695" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    MQL5 Market (183695)
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Enterprise / Future Roadmap Note */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card-static">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono">Future Roadmap Note</span>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Current public products are delivered through MQL5 Market
          </h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
            Future FEF ecosystem tools may include a customer portal, license manager, update center, and enterprise workflows. These are roadmap directions, not currently available packages or prices.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs font-semibold text-white">Customer Portal</p>
              <p className="text-[10px] text-amber-400 font-mono mt-0.5">Future Roadmap</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs font-semibold text-white">License Manager</p>
              <p className="text-[10px] text-amber-400 font-mono mt-0.5">Future Roadmap</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs font-semibold text-white">Update Center</p>
              <p className="text-[10px] text-amber-400 font-mono mt-0.5">Future Roadmap</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs font-semibold text-white">Enterprise Workflows</p>
              <p className="text-[10px] text-amber-400 font-mono mt-0.5">Future Roadmap</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing FAQ (All 7 Official Questions) */}
      <div className="relative rounded-[2.5rem] fef-glass-section p-8 sm:p-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">FAQ</p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Pricing and <span className="fef-headline-gradient">purchase questions</span>
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              q: 'Where can I buy FEF products?',
              a: 'Current public FEF products are available through their official MQL5 Market product pages. Use the MQL5 buttons on this page for the correct product path.',
            },
            {
              q: 'Why are prices not fixed on this page?',
              a: 'Pricing and purchase options are managed on the official MQL5 Market product pages, so this page links to those sources instead of duplicating or inventing prices.',
            },
            {
              q: 'Are the products subscriptions?',
              a: 'Any available purchase or rental options are shown on the relevant MQL5 Market product page. Check the official page before purchasing.',
            },
            {
              q: 'Does purchase guarantee profit?',
              a: 'No. FEF develops software tools only. Purchasing software does not guarantee profit, remove market risk, or guarantee trading performance.',
            },
            {
              q: 'Should I test on demo first?',
              a: 'Yes. Demo testing is strongly recommended before using any trading software on live accounts.',
            },
            {
              q: 'Can I use both products together?',
              a: 'They can support different MT5 workflows, but any combined setup should be tested carefully on demo accounts before live deployment.',
            },
            {
              q: 'Where do I get setup help?',
              a: 'Start with the documentation, downloads, and support pages. Prepare product name, MT5 version, broker, symbol details, and screenshots when requesting help.',
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

      {/* Risk Warning */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] fef-glass-card-static border-red-500/30 bg-red-500/[0.04]">
        <div className="flex flex-col md:flex-row gap-5">
          <AlertTriangle className="h-6 w-6 shrink-0 text-red-400" />
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-300">Risk Warning</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Trading financial markets involves significant risk and may result in the loss of capital. FEF Trading Solutions develops software tools only and does not guarantee profits or trading performance. Users should always test software on demo accounts before using live funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
