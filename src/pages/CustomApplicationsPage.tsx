import React from 'react';
import {
  ArrowRight,
  Blocks,
  Braces,
  Database,
  Gauge,
  LayoutDashboard,
  Network,
  PanelsTopLeft,
  PlugZap,
  Settings2,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { CustomCodingVisual } from '../components/solutions/CustomCodingVisual';

const capabilities = [
  {
    icon: LayoutDashboard,
    title: 'Business Portals',
    text: 'Purpose-built portals for teams, customers and operational workflows.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Internal Applications',
    text: 'Focused software interfaces designed around the way your organization works.',
  },
  {
    icon: Gauge,
    title: 'Operational Dashboards',
    text: 'Connected views that organize business information, actions and workflow states.',
  },
  {
    icon: Workflow,
    title: 'Workflow Applications',
    text: 'Custom systems that bring repeatable processes, approvals and actions into one interface.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Platforms',
    text: 'Application experiences engineered to work clearly across desktop, tablet and mobile.',
  },
  {
    icon: PlugZap,
    title: 'System Integration',
    text: 'Connect application interfaces with the data, services and systems they need to use.',
  },
];

const layers = [
  ['01', PanelsTopLeft, 'Interface', 'The screens, controls and user journeys people interact with.'],
  ['02', Braces, 'Application Logic', 'The rules and workflows that turn requirements into software behavior.'],
  ['03', Database, 'Data', 'Structured information supporting application state and business operations.'],
  ['04', Network, 'Integrations', 'Connections between the application and relevant external or internal systems.'],
] as const;

const useCases = [
  ['Operations', 'Bring recurring operational tasks and information into a dedicated application workflow.'],
  ['Customer Workflows', 'Create focused customer-facing journeys instead of forcing every requirement into a generic tool.'],
  ['Administration', 'Give teams purpose-built interfaces for managing records, actions and business processes.'],
  ['Data Management', 'Organize the information a workflow depends on and make it usable through a clear interface.'],
];

const process = [
  ['01', 'Define', 'Clarify users, workflows, requirements and the business problem the application needs to solve.'],
  ['02', 'Architect', 'Shape the interface, application logic, data model and integration boundaries.'],
  ['03', 'Build', 'Develop the application as a connected working system rather than disconnected screens.'],
  ['04', 'Integrate', 'Connect the application to the systems and data required by the approved scope.'],
  ['05', 'Refine', 'Test the experience, improve workflow clarity and prepare the application for delivery.'],
];

export const CustomApplicationsPage: React.FC = () => (
  <main className="custom-apps-page flex-1">
    <section className="custom-apps-hero relative px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
            <Blocks className="h-3.5 w-3.5" />
            Custom Applications
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
            Software built around the way your{' '}
            <span className="fef-gradient-text">business actually works.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            FEF designs and develops bespoke applications, portals, dashboards and connected software systems around real business requirements.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/contact" className="fef-btn-primary inline-flex items-center justify-center gap-2">
              Discuss Your Application
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#custom-capabilities" className="fef-btn-glass inline-flex items-center justify-center gap-2">
              Explore Capabilities
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-400">
            {['Business Portals', 'Workflow Apps', 'Connected Systems'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="custom-apps-hero-visual relative">
          <CustomCodingVisual />
        </div>
      </div>
    </section>

    <section className="custom-apps-intro px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
          Beyond off-the-shelf software
        </p>
        <div>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Build the application around the{' '}
            <span className="fef-gradient-text">workflow you need.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
            When generic software does not match a process, a custom application can bring the interface, logic, data and integrations into one deliberately engineered system.
          </p>
        </div>
      </div>
    </section>

    <section id="custom-capabilities" className="custom-apps-capabilities px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">Core capabilities</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
          From business requirement to{' '}
          <span className="fef-gradient-text">working application.</span>
        </h2>

        <div className="custom-apps-capability-grid mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article key={title} className="fef-glass-card relative overflow-hidden p-6 sm:p-7">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.07] text-blue-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="custom-apps-architecture px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="fef-glass-section p-6 sm:p-9 lg:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">Application architecture</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Four layers. <span className="fef-gradient-text">One connected application.</span>
          </h2>

          <div className="custom-apps-layer-grid mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {layers.map(([number, Icon, title, text]) => (
              <article key={title} className="custom-apps-layer-card relative rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-300">{number}</span>
                  <Icon className="h-5 w-5 text-blue-200" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="custom-apps-use-cases px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">Where custom software fits</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Built for the work that{' '}
            <span className="fef-gradient-text">generic tools cannot model well.</span>
          </h2>
        </div>

        <div className="custom-apps-use-case-grid grid gap-3 sm:grid-cols-2">
          {useCases.map(([title, text]) => (
            <article key={title} className="fef-glass-card p-6">
              <Settings2 className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="custom-apps-process-section px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">Development process</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
          From requirement to <span className="fef-gradient-text">connected software.</span>
        </h2>

        <div className="custom-apps-process mt-12 grid gap-4 md:grid-cols-5">
          {process.map(([number, title, text]) => (
            <article key={number} className="fef-glass-card relative p-6">
              <span className="font-mono text-xs text-cyan-300">{number}</span>
              <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="custom-apps-cta-section px-5 pb-24 pt-12 sm:px-8 lg:px-10 lg:pb-32">
      <div className="custom-apps-cta fef-glass-section mx-auto max-w-7xl px-6 py-14 text-center sm:px-10 lg:py-20">
        <Blocks className="mx-auto h-7 w-7 text-cyan-300" />
        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
          Have a workflow that needs <span className="fef-gradient-text">its own application?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
          Start with the requirement. We can shape the application architecture, interface and development scope around it.
        </p>
        <a href="/contact" className="fef-btn-primary mt-8 inline-flex items-center justify-center gap-2">
          Start a Project Discussion
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  </main>
);
