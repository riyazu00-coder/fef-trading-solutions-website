import React from 'react';
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Component,
  Layers3,
  MonitorSmartphone,
  MousePointer2,
  Orbit,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { WebDevVisual } from '../components/solutions/WebDevVisual';

const capabilities = [
  {
    icon: PanelsIcon,
    title: 'Premium Website Design',
    description:
      'Purpose-built digital experiences with clear hierarchy, refined interaction, and a visual system shaped around your brand.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Development',
    description:
      'Interfaces engineered to adapt cleanly across desktop, tablet, and mobile while preserving the intended experience.',
  },
  {
    icon: Orbit,
    title: 'Cinematic Interaction',
    description:
      'Motion, depth, scroll-driven storytelling, and interactive presentation used where they strengthen the experience.',
  },
  {
    icon: Component,
    title: 'Application Interfaces',
    description:
      'Structured interfaces for dashboards, portals, software products, internal systems, and application-style web experiences.',
  },
  {
    icon: Braces,
    title: 'Modern Frontend Engineering',
    description:
      'Maintainable component architecture, reusable interface systems, integrations, and implementation designed for continued development.',
  },
  {
    icon: Rocket,
    title: 'Deployment-Ready Delivery',
    description:
      'A practical path from interface concept to tested production build, with deployment requirements considered throughout development.',
  },
];

function PanelsIcon(props: React.ComponentProps<typeof Code2>) {
  return <Code2 {...props} />;
}

const layers = [
  {
    number: '01',
    title: 'Brand & Content',
    text: 'Message, identity, hierarchy, and the information the experience needs to communicate.',
  },
  {
    number: '02',
    title: 'Experience Design',
    text: 'Layout, interaction, responsive behavior, motion, and visual direction.',
  },
  {
    number: '03',
    title: 'Engineering',
    text: 'Components, application logic, integrations, and maintainable frontend architecture.',
  },
  {
    number: '04',
    title: 'Production',
    text: 'Build validation, responsive refinement, deployment preparation, and final delivery.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'Understand the business, audience, content, functionality, and the role the website needs to perform.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'Establish the visual language, page hierarchy, interaction model, and responsive experience.',
  },
  {
    step: '03',
    title: 'Develop',
    text: 'Turn the experience into a structured web platform with reusable components and working functionality.',
  },
  {
    step: '04',
    title: 'Refine',
    text: 'Validate the production build, improve responsive behavior, polish interactions, and prepare for release.',
  },
];

export const AiWebDevelopmentPage: React.FC = () => {
  return (
    <main className="ai-web-page relative flex-1 overflow-hidden">

      <section className="ai-web-hero relative px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-10">

          <div className="relative z-10 lg:col-span-6">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              AI Web Design & Development
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4rem]">
              Digital experiences designed to{' '}
              <span className="fef-gradient-text">
                move, respond and perform.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              FEF Trading Solutions designs and develops premium websites,
              interactive digital experiences, web applications, and modern
              frontend platforms built around real business requirements.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact" className="fef-btn-primary inline-flex items-center justify-center gap-2"
              >
                Discuss Your Website
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#web-capabilities" className="fef-btn-glass inline-flex items-center justify-center gap-2"
              >
                Explore Capabilities
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                'Cinematic Web',
                'Responsive UI',
                'Interactive Platforms',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="ai-web-hero-visual relative lg:col-span-6">
            <WebDevVisual />
          </div>

        </div>
      </section>

      <section className="ai-web-intro relative px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="fef-glass-section mx-auto max-w-7xl rounded-[2rem] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">

            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Beyond a static website
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Build the experience around what the business needs to achieve.
              </h2>
            </div>

            <div className="space-y-5 text-[15px] leading-7 text-slate-300 sm:text-base">
              <p>
                A modern website is more than a collection of pages. It is
                where brand, content, interface design, software, and user
                interaction meet.
              </p>

              <p>
                We approach web development as a complete digital system:
                designing the experience, engineering the interface,
                connecting required functionality, and preparing the result
                for real-world deployment.
              </p>

              <div className="flex items-start gap-3 border-t border-white/10 pt-5 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>
                  Visual complexity is used deliberately, with usability,
                  responsiveness, maintainability, and content kept central.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        id="web-capabilities" className="ai-web-capabilities relative px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Core capabilities
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              From visual direction to{' '}
              <span className="fef-gradient-text">
                production-ready web.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Design and engineering are treated as one connected process so
              the final interface retains the intent of the experience.
            </p>
          </div>

          <div className="ai-web-capability-grid mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="fef-glass-card group relative overflow-hidden rounded-2xl p-6 sm:p-7"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07]">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="ai-web-architecture relative px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="fef-glass-section mx-auto max-w-7xl rounded-[2rem] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">

            <div>
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07]">
                <Layers3 className="h-5 w-5 text-cyan-300" />
              </div>

              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Experience architecture
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                One digital experience.{' '}
                <span className="fef-gradient-text">
                  Four connected layers.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                Strong web experiences emerge when brand, interface,
                engineering, and production decisions support each other.
              </p>
            </div>

            <div className="ai-web-stack grid gap-3 sm:grid-cols-2">
              {layers.map((item) => (
                <article
                  key={item.number}
                  className="ai-web-stack-card rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
                      {item.number}
                    </span>
                    <Code2 className="h-4 w-4 text-slate-600" />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="ai-web-process-section relative px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Development process
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              From direction to{' '}
              <span className="fef-gradient-text">
                working experience.
              </span>
            </h2>
          </div>

          <div className="ai-web-process mt-12 grid gap-4 lg:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.step}
                className="fef-glass-card relative rounded-2xl p-6"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-sm font-semibold text-cyan-300">
                    {item.step}
                  </span>
                  <MousePointer2 className="h-4 w-4 text-slate-600" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="ai-web-cta-section relative px-5 pb-28 pt-8 sm:px-8 lg:px-10 lg:pb-36">
        <div className="fef-glass-section ai-web-cta mx-auto max-w-7xl rounded-[2rem] px-7 py-12 text-center sm:px-10 sm:py-16">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07]">
            <Sparkles className="h-5 w-5 text-cyan-300" />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Have a digital experience in mind?{' '}
            <span className="fef-gradient-text">
              Let's build it properly.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Tell us what the website or platform needs to communicate, do,
            and become. We can shape the experience and engineering around
            the actual requirement.
          </p>

          <a
            href="/contact" className="fef-btn-primary mt-8 inline-flex items-center justify-center gap-2"
          >
            Start a Project Discussion
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>
      </section>

    </main>
  );
};
