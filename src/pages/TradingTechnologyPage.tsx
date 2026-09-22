import React from 'react';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Layers3,
  MonitorUp,
  Network,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
} from 'lucide-react';
import { TradingTechVisual } from '../components/solutions/TradingTechVisual';

const capabilities = [
  {
    icon: Workflow,
    title: 'MT5 Trade Copying',
    text: 'Software for coordinating trade copying workflows across supported MetaTrader 5 accounts.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Trade Management',
    text: 'Tools designed to support structured manual trade management and account-level trading workflows.',
  },
  {
    icon: Bot,
    title: 'Trading Intelligence',
    text: 'A dedicated FEF Trading App workspace for market monitoring, research and trading intelligence.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Controls',
    text: 'Configurable controls and operational safeguards designed around trading and account-management workflows.',
  },
  {
    icon: Network,
    title: 'Connected Workflows',
    text: 'Bring trading software, account operations and supporting interfaces into a more connected technology environment.',
  },
  {
    icon: Settings2,
    title: 'Custom Trading Software',
    text: 'Build focused trading tools and interfaces around defined operational requirements and MetaTrader 5 workflows.',
  },
];

const products = [
  {
    label: 'MT5 SOFTWARE',
    title: 'FEF Professional Trade Copier',
    text: 'A dedicated MetaTrader 5 product for trade-copying workflows.',
    href: '/trade-copier',
    action: 'Explore Trade Copier',
  },
  {
    label: 'TRADE MANAGEMENT',
    title: 'Manual Trade Manager Pro',
    text: 'A focused product for structured manual trade-management workflows.',
    href: '/manual-trade-manager',
    action: 'Explore Trade Manager',
  },
  {
    label: 'TRADING INTELLIGENCE',
    title: 'FEF Trading Agent',
    text: 'The FEF research and intelligence layer for the broader trading technology ecosystem.',
    href: '/trading-agent',
    action: 'Explore Trading Agent',
  },
];

const architecture = [
  ['01', 'MetaTrader 5', 'Trading platform layer'],
  ['02', 'FEF Software', 'Trading and account tools'],
  ['03', 'Trading Intelligence', 'Monitoring and research workspace'],
  ['04', 'Human Control', 'Decisions and operational oversight'],
];

export const TradingTechnologyPage: React.FC = () => (
  <main className="trading-technology-page overflow-hidden">
    <section className="trading-technology-hero relative px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-300">
            <Gauge className="h-3.5 w-3.5" />
            Trading Technology
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4rem]">
            Trading software built around{' '}
            <span className="trading-technology-gradient">
              real operational workflows.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            FEF develops MetaTrader 5 software, trade-management tools and
            trading intelligence interfaces designed around practical trading
            operations, account workflows and human decision-making.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/products" className="fef-btn-primary">
              Explore Trading Products
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://app.feftradingsolutions.com/cockpit"
              target="_blank"
              rel="noreferrer" className="fef-btn-glass"
            >
              Open Trading App
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {['MetaTrader 5', 'Trading Software', 'Trading Intelligence'].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="trading-technology-hero-visual">
          <TradingTechVisual />
        </div>
      </div>
    </section>

    <section className="trading-technology-intro px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">
          Beyond a single trading tool
        </p>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
          Connect software, trading operations and{' '}
          <span className="trading-technology-gradient">
            market intelligence.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
          Trading Technology brings FEF&apos;s MT5 products and trading
          intelligence interfaces together as one broader technology
          capability while keeping each product focused on its own job.
        </p>
      </div>
    </section>

    <section
      id="trading-capabilities" className="trading-technology-capabilities px-6 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">
            Core capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Technology for the{' '}
            <span className="trading-technology-gradient">
              trading workflow.
            </span>
          </h2>
        </div>

        <div className="trading-technology-capability-grid mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article key={title} className="fef-glass-card p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07]">
                <Icon className="h-5 w-5 text-emerald-300" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="trading-app-showcase px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
              FEF Trading App
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              A dedicated workspace for{' '}
              <span className="trading-technology-gradient">
                trading intelligence.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              The FEF Trading App provides a dedicated interface for the
              intelligence and monitoring side of the FEF trading technology
              ecosystem.
            </p>
          </div>

          <a
            href="https://app.feftradingsolutions.com/cockpit"
            target="_blank"
            rel="noreferrer" className="fef-btn-primary"
          >
            Open Trading App
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="trading-app-screen mt-12">
          <div className="trading-app-screen-bar">
            <div className="flex gap-1.5">
              <span />
              <span />
              <span />
            </div>
            <div className="trading-app-screen-label">
              app.feftradingsolutions.com
            </div>
            <MonitorUp className="h-4 w-4 text-slate-500" />
          </div>

          <img
            src="/images/trading-technology.png"
            alt="FEF Trading App dashboard interface" className="block h-auto w-full"
          />
        </div>

        <div className="mt-6 flex items-start gap-3 text-xs leading-6 text-slate-500">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
          <p>
            Actual FEF Trading App interface shown above. Trading decisions
            remain under user control.
          </p>
        </div>
      </div>
    </section>

    <section className="trading-technology-products px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">
            FEF trading ecosystem
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Dedicated products.{' '}
            <span className="trading-technology-gradient">
              One technology direction.
            </span>
          </h2>
        </div>

        <div className="trading-product-grid mt-12 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="fef-glass-card p-7">
              <p className="font-mono text-[10px] tracking-[0.2em] text-emerald-300">
                {product.label}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {product.title}
              </h3>
              <p className="mt-4 min-h-[4.5rem] text-sm leading-7 text-slate-400">
                {product.text}
              </p>
              <a
                href={product.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
              >
                {product.action}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="trading-technology-architecture px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
            Technology architecture
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Keep the technology layered and{' '}
            <span className="trading-technology-gradient">
              human-controlled.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Different tools serve different parts of the trading operation.
            The architecture keeps the platform, FEF software, intelligence
            layer and human oversight conceptually separated.
          </p>
        </div>

        <div className="trading-technology-stack">
          {architecture.map(([number, title, text]) => (
            <div key={number} className="trading-technology-layer">
              <span className="trading-technology-layer-number">{number}</span>
              <div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
              <Layers3 className="ml-auto h-4 w-4 text-emerald-400/70" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="trading-technology-cta-section px-6 pb-24 lg:px-8 lg:pb-28">
      <div className="trading-technology-cta fef-glass-card-static mx-auto max-w-6xl px-6 py-12 text-center sm:px-10 sm:py-16">
        <Gauge className="mx-auto mb-6 h-7 w-7 text-emerald-300" />
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
          Explore the FEF{' '}
          <span className="trading-technology-gradient">
            trading technology ecosystem.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Explore our MT5 products, trading-management software and FEF
          Trading App from one technology hub.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/products" className="fef-btn-primary">
            Explore Products
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://app.feftradingsolutions.com/cockpit"
            target="_blank"
            rel="noreferrer" className="fef-btn-glass"
          >
            Open Trading App
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  </main>
);
