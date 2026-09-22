import React from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Braces,
  CheckCircle2,
  Database,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { AiSoftwareVisual } from "../components/solutions/AiSoftwareVisual";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Custom AI Systems",
    description:
      "Purpose-built intelligent software designed around your workflows, data, business rules, and operational requirements.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Agent-based systems that can analyze information, coordinate tasks, interact with tools, and support multi-step workflows.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description:
      "Transform structured and unstructured information into searchable, usable intelligence for applications and internal operations.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Connect AI with existing processes to reduce repetitive work and create more efficient operational workflows.",
  },
  {
    icon: Braces,
    title: "AI Application Integration",
    description:
      "Integrate intelligent capabilities into web applications, dashboards, internal tools, APIs, and digital platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled Architecture",
    description:
      "Design AI systems with clear boundaries, permissions, validation layers, and human oversight where appropriate.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Map the problem, workflow, available data, constraints, and the outcome the software needs to support.",
  },
  {
    number: "02",
    title: "Architect",
    text: "Define the application, AI, data, integration, security, and human-control layers before implementation.",
  },
  {
    number: "03",
    title: "Build",
    text: "Develop the software in focused stages with usable interfaces, integrations, validation, and testing.",
  },
  {
    number: "04",
    title: "Refine",
    text: "Evaluate real workflows, improve reliability and usability, and evolve the system as requirements change.",
  },
];

export const AiSoftwarePage: React.FC = () => {
  return (
    <main className="ai-software-page relative flex-1 overflow-hidden">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              AI Software Development
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Intelligent software,
              <br />
              <span className="fef-headline-gradient">
                engineered around your business.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              FEF Trading Solutions designs custom AI-powered software,
              intelligent applications, agent workflows, and data-driven
              systems built around real operational requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/contact" className="fef-btn-primary">
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </a>

              <a href="#capabilities" className="fef-btn-glass">
                Explore Capabilities
              </a>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">
              {["AI Systems", "Agent Workflows", "Data Intelligence"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3 text-center text-[11px] font-medium text-slate-300 backdrop-blur-xl sm:text-xs"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="lg:col-span-6">
            <AiSoftwareVisual />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="fef-glass-section overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
                Beyond generic AI
              </span>

              <h2 className="mt-4 text-3xl text-white sm:text-4xl">
                Software built for the
                <span className="fef-headline-gradient">
                  {" "}
                  problem you actually have.
                </span>
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-7">
              <p className="text-base leading-8 text-slate-300">
                AI becomes useful when it is connected to a real workflow.
                Instead of treating artificial intelligence as a standalone
                feature, we design the surrounding software, interfaces, data
                flows, integrations, and controls needed to make it practical.
              </p>

              <p className="text-base leading-8 text-slate-400">
                That can mean an intelligent internal tool, an AI-assisted
                customer platform, an agent workflow, a decision-support
                system, or a custom application that brings several business
                processes together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
            Core capabilities
          </span>

          <h2 className="mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
            From AI concept to
            <span className="fef-headline-gradient"> working software.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            We combine software engineering, intelligent workflows, data, and
            practical interfaces into systems designed for real use.
          </p>
        </div>

        <div className="ai-capability-network mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="fef-glass-card group rounded-[1.6rem] p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08]">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>

              <h3 className="mt-5 text-xl text-white">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="fef-glass-section relative overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-emerald-400/[0.06] blur-[90px]" />

          <div className="relative grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08]">
                <Network className="h-6 w-6 text-emerald-300" />
              </div>

              <h2 className="mt-6 text-3xl text-white sm:text-4xl">
                Intelligence connected to
                <span className="fef-headline-gradient">
                  {" "}
                  your digital ecosystem.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                The useful part is not simply having an AI model. The useful
                part is connecting intelligence to the right information,
                applications, actions, and human decisions.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="ai-system-flow grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Business Data", "Structured and unstructured inputs"],
                  ["02", "Intelligence Layer", "AI-assisted analysis and reasoning"],
                  ["03", "Application Layer", "Interfaces, APIs and workflows"],
                  ["04", "Human Control", "Review, validation and final decisions"],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-cyan-400">
                        {number}
                      </span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>

                    <h3 className="mt-5 text-lg text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
            Development process
          </span>

          <h2 className="mt-4 text-3xl text-white sm:text-4xl">
            A controlled path from
            <span className="fef-headline-gradient"> idea to implementation.</span>
          </h2>
        </div>

        <div className="ai-process-timeline mt-10 grid gap-4 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.number}
              className="fef-glass-card rounded-[1.5rem] p-6"
            >
              <span className="font-mono text-sm text-cyan-400">
                {item.number}
              </span>

              <h3 className="mt-8 text-xl text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:px-8">
        <div className="fef-glass-section relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <Zap className="mx-auto h-7 w-7 text-cyan-300" />

            <h2 className="mt-5 text-3xl text-white sm:text-4xl">
              Have an AI software idea?
              <span className="fef-headline-gradient"> Let's engineer it.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Tell us what you want the system to accomplish. We can define
              the software architecture, intelligent workflow, interfaces, and
              integrations around the requirement.
            </p>

            <a href="/contact" className="fef-btn-primary mt-8">
              Start a Project Discussion
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};