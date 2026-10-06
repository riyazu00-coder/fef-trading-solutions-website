import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, VolumeX, Sparkles, ArrowRight } from 'lucide-react';

const capabilityChips = [
  { label: 'AI SOFTWARE', href: '/ai-software-development' },
  { label: 'AI WEB', href: '/ai-web-design-development' },
  { label: 'CUSTOM APPLICATIONS', href: '/custom-applications' },
  { label: 'BUSINESS AUTOMATION', href: '/business-automation' },
  { label: 'TRADING TECHNOLOGY', href: '/trading-technology' },
];

export const FefIntelligenceShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <section
      id="fef-intelligence-showcase"
      className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* 1. Section Header Using Exact Approved Copy */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-50/90 text-cyan-800 text-xs font-semibold uppercase tracking-[0.2em] shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
          FEF INTELLIGENCE · DIGITAL SYSTEMS
        </div>

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.025em] text-[#080B1D] leading-tight">
          Intelligence built into{' '}
          <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
            real systems.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#536078] max-w-2xl mx-auto leading-relaxed font-normal">
          From AI software and intelligent automation to trading technology, we design digital systems around real workflows.
        </p>

        {/* 2. Five Compact Glass Capability Chips */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {capabilityChips.map((chip) => (
            <a
              key={chip.label}
              href={chip.href}
              className="focus-ring inline-flex items-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider text-[#080B1D] fef-glass-secondary hover:bg-white hover:border-cyan-400/50 hover:text-cyan-700 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {chip.label}
            </a>
          ))}
        </div>
      </div>

      {/* 3. Premium Light Glass Cinema Stage Container */}
      <div className="mt-10 sm:mt-12 relative max-w-5xl mx-auto">
        {/* Ambient Specular Halo */}
        <div className="pointer-events-none absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-[#45c9f5]/15 via-[#6695f5]/10 to-[#a57af3]/15 blur-2xl -z-10" />

        <div className="relative rounded-3xl sm:rounded-[2.25rem] fef-glass-primary p-2.5 sm:p-4 shadow-xl border border-white/80 overflow-hidden">
          {/* Top Bar Architectural Indicator with Approved Neutral Technical Labels Only */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 mb-2 sm:mb-3 border-b border-slate-200/50 text-[11px] sm:text-xs font-mono text-[#536078]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="font-semibold text-[#080B1D] tracking-wider">
                FEF // INTELLIGENCE SYSTEMS
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-slate-500 tracking-wider">
                AI • SOFTWARE • AUTOMATION • TRADING TECHNOLOGY
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-300/50 text-[10px]">
                <VolumeX className="h-3 w-3" />
                SILENT
              </span>
            </div>
          </div>

          {/* Cinematic 16:9 Video Player Frame — Completely Clean, Unobstructed */}
          <div className="relative aspect-video w-full rounded-2xl sm:rounded-[1.5rem] overflow-hidden bg-[#050814] shadow-inner group">
            <video
              ref={videoRef}
              src="/videos/fef-intelligence-showcase.mp4"
              autoPlay
              loop
              muted
              playsInline
              disableRemotePlayback
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle Gradient Edge Vignette */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-[1.5rem] ring-1 ring-inset ring-white/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.35)]" />

            {/* Floating Quick Interactive Play/Pause Toggle */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause showcase video' : 'Play showcase video'}
                className="focus-ring flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-medium border border-white/20 transition transform hover:scale-105 active:scale-95 shadow-md"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3.5 w-3.5 text-cyan-400 fill-current" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 text-cyan-400 fill-current" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 4. Primary CTA: EXPLORE OUR SOLUTIONS → */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="#solutions-showcase"
            className="focus-ring inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] hover:brightness-110 shadow-[0_6px_22px_rgba(69,201,245,0.32)] transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE OUR SOLUTIONS</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FefIntelligenceShowcase;
