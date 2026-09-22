import React from 'react';
import {
  ArrowRight,
  BellRing,
  Bot,
  CheckCircle2,
  Database,
  GitBranch,
  Network,
  PlugZap,
  RefreshCw,
  Route,
  Settings2,
  UserCheck,
  Workflow,
  Zap,
} from 'lucide-react';
import { AutomationVisual } from '../components/solutions/AutomationVisual';

const capabilities = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    text: 'Turn repeatable multi-step business processes into structured digital workflows with clear triggers, actions and outcomes.',
  },
  {
    icon: PlugZap,
    title: 'System Integration',
    text: 'Connect applications, services and internal systems so information can move between the tools involved in an operation.',
  },
  {
    icon: Database,
    title: 'Data Flow Automation',
    text: 'Coordinate how operational information is collected, transferred, updated and made available across connected workflows.',
  },
  {
    icon: BellRing,
    title: 'Event-Driven Actions',
    text: 'Design workflows that respond to defined events, status changes or business conditions instead of relying only on manual steps.',
  },
  {
    icon: UserCheck,
    title: 'Human Control Points',
    text: 'Keep approvals, reviews and important decisions visible to people wherever a workflow should not operate independently.',
  },
  {
    icon: Settings2,
    title: 'Operational Tools',
    text: 'Build focused automation interfaces for monitoring workflow states, handling exceptions and managing recurring processes.',
  },
];

const workflowStages = [
  {
    number: '01',
    icon: Zap,
    title: 'Trigger',
    text: 'A defined event, request or business condition starts the workflow.',
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'Route',
    text: 'Rules determine what should happen next and which path the process should follow.',
  },
  {
    number: '03',
    icon: Bot,
    title: 'Execute',
    text: 'Connected software performs the configured actions and moves information between steps.',
  },
  {
    number: '04',
    icon: UserCheck,
    title: 'Review',
    text: 'Human approval or intervention remains available where judgement or control is required.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Complete',
    text: 'The workflow records its resulting state and prepares the operation for the next event.',
  },
];

const connectionLayers = [
  ['01', 'Business Inputs', 'Requests, forms, events and operational data enter the workflow.'],
  ['02', 'Automation Logic', 'Rules and routing coordinate how each defined process should move.'],
  ['03', 'Connected Systems', 'Applications and services exchange the information required by the workflow.'],
  ['04', 'Human Oversight', 'Teams retain visibility, review points and control over important actions.'],
];

const useCases = [
  {
    title: 'Recurring Operations',
    text: 'Structure repetitive internal processes so teams spend less time moving information manually between routine steps.',
  },
  {
    title: 'Cross-System Workflows',
    text: 'Coordinate processes that depend on more than one application, service or internal system.',
  },
  {
    title: 'Approvals & Routing',
    text: 'Move requests through defined stages while preserving the human decisions that matter.',
  },
  {
    title: 'Operational Visibility',
    text: 'Give teams a clearer view of workflow states, exceptions and actions that still require attention.',
  },
];

const delivery = [
  ['01', 'Map', 'Understand the existing process, people, systems, inputs and points of friction.'],
  ['02', 'Design', 'Define triggers, workflow states, routing rules, integrations and human control points.'],
  ['03', 'Connect', 'Build the software connections and interfaces required for the workflow to operate.'],
  ['04', 'Validate', 'Test real process paths, exceptions and handoffs before relying on the automated flow.'],
  ['05', 'Refine', 'Improve workflow clarity and adjust the system as operational requirements evolve.'],
];

export const BusinessAutomationPage: React.FC = () => (
  <main className="business-automation-page overflow-hidden">
    <section className="business-automation-hero relative border-b border-white/10">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
            <Workflow className="h-4 w-4" />
            Business Automation
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Turn repetitive operations into{' '}
            <span className="business-automation-gradient">
              connected workflows.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            FEF designs business automation systems that connect processes,
            software, data and human control points around the way an operation
            actually needs to run.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/contact" className="fef-btn-primary">
              Discuss Your Workflow
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#automation-capabilities" className="fef-btn-glass">
              Explore Capabilities
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {['Workflow Logic', 'System Integration', 'Human Control'].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-slate-300"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="business-automation-hero-visual relative">
          <AutomationVisual />
        </div>
      </div>
    </section>

    <section className="business-automation-intro border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            Beyond repetitive manual work
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
            Connect the process, not just{' '}
            <span className="business-automation-gradient">individual tasks.</span>
          </h2>
        </div>

        <p className="max-w-3xl text-base leading-8 text-slate-300 lg:justify-self-end">
          Useful automation starts by understanding how work moves between
          people, information and systems. We shape that movement into a
          controlled workflow where software handles defined actions and people
          remain involved where judgement is required.
        </p>
      </div>
    </section>

    <section
      id="automation-capabilities"
      className="business-automation-capabilities"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            Automation capabilities
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Build the operational flow{' '}
            <span className="business-automation-gradient">
              between your systems.
            </span>
          </h2>
        </div>

        <div className="business-automation-capability-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article key={title} className="fef-glass-card p-6 sm:p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10">
                <Icon className="h-5 w-5 text-purple-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="business-automation-flow border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Workflow orchestration
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            From trigger to outcome,{' '}
            <span className="business-automation-gradient">
              keep the flow visible.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Automation should make a process easier to understand, not hide it.
            Each stage has a defined role in moving the operation forward.
          </p>
        </div>

        <div className="business-automation-workflow grid gap-5 md:grid-cols-5">
          {workflowStages.map(({ number, icon: Icon, title, text }) => (
            <article
              key={title}
              className="business-automation-workflow-card relative"
            >
              <div className="business-automation-node">
                <Icon className="h-5 w-5" />
              </div>
              <span className="mt-6 block font-mono text-xs text-purple-300">
                {number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="business-automation-connections">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              Connected operations
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Four parts of a{' '}
              <span className="business-automation-gradient">
                controlled automation system.
              </span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-400">
              The automation layer sits between business inputs, software
              systems and the people responsible for the operation. Each part
              remains visible instead of becoming an unexplained black box.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.055] px-4 py-3 text-sm text-slate-300">
              <Network className="h-5 w-5 text-cyan-300" />
              Connected systems with defined control points
            </div>
          </div>

          <div className="business-automation-layer-stack">
            {connectionLayers.map(([number, title, text]) => (
              <article
                key={number}
                className="business-automation-layer-card"
              >
                <div className="flex items-start gap-5">
                  <span className="business-automation-layer-number">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="business-automation-use-cases border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Where automation fits
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Focus automation on{' '}
            <span className="business-automation-gradient">
              operational friction.
            </span>
          </h2>
        </div>

        <div className="business-automation-use-case-grid grid gap-5 md:grid-cols-2">
          {useCases.map((item, index) => (
            <article key={item.title} className="fef-glass-card p-6 sm:p-7">
              <div className="flex gap-5">
                <span className="font-mono text-xs text-purple-300">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="business-automation-delivery-section">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            Delivery process
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Map the operation before{' '}
            <span className="business-automation-gradient">
              automating the operation.
            </span>
          </h2>
        </div>

        <div className="business-automation-delivery grid gap-5 md:grid-cols-5">
          {delivery.map(([number, title, text]) => (
            <article key={number} className="fef-glass-card p-6">
              <span className="font-mono text-xs text-purple-300">{number}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="business-automation-cta-section px-6 pb-24 lg:px-8 lg:pb-28">
      <div className="business-automation-cta fef-glass-card-static mx-auto max-w-6xl px-6 py-12 text-center sm:px-10 sm:py-16">
        <RefreshCw className="mx-auto mb-6 h-7 w-7 text-purple-300" />
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          Have a process that should{' '}
          <span className="business-automation-gradient">
            work more intelligently?
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Start with the workflow. We can shape the automation logic,
          integrations, interfaces and human control points around it.
        </p>
        <a href="/contact" className="fef-btn-primary mt-8">
          Discuss Your Workflow
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  </main>
);
