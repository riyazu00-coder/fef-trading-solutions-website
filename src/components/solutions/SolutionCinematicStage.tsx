import React, { useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export interface SolutionCinematicStageProps {
  videoSrc: string;
  headerLabel: string;
  badgeColor?: string;
  accentGlow?: 'cyan' | 'emerald' | 'purple' | 'blue';
  topRightLabel?: string;
  telemetryMetrics?: { label: string; value: string }[];
  ariaLabel: string;
}

export const SolutionCinematicStage: React.FC<SolutionCinematicStageProps> = ({
  videoSrc,
  headerLabel,
  badgeColor = 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  accentGlow = 'cyan',
  topRightLabel = 'SYSTEM FILM',
  telemetryMetrics = [],
  ariaLabel,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    // Viewport-based playback: play when ~40% visible, pause when leaving
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Handled safely without uncaught exceptions
              });
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            video.pause();
          }
        });
      },
      {
        threshold: [0.1, 0.4, 0.7],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Accent glow configuration matching existing glass card palette
  const glowStyles = {
    cyan: 'from-cyan-500/20 via-[#19d3d0]/15 to-transparent',
    emerald: 'from-emerald-500/20 via-cyan-500/15 to-transparent',
    purple: 'from-purple-500/20 via-indigo-500/15 to-transparent',
    blue: 'from-blue-500/20 via-cyan-500/15 to-transparent',
  }[accentGlow];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[440px] rounded-3xl bg-white/70 border border-slate-200/80 p-4 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-sm select-none"
    >
      {/* 1. Volumetric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-gradient-to-tr ${glowStyles} blur-[90px] rounded-full opacity-30`}
        />

        {/* Subtle 3D Depth Grid Matrix */}
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* 2. Top Header Overlay Controls */}
      <div className="relative z-20 flex items-center justify-between gap-2 pb-2 text-[11px] font-mono">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border backdrop-blur-xl ${badgeColor}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
          </span>
          <span className="font-semibold tracking-wider uppercase text-[10px] sm:text-[11px]">{headerLabel}</span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-600 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-xs">
          <Sparkles className="h-3 w-3 text-cyan-600" />
          <span>{topRightLabel}</span>
        </div>
      </div>

      {/* 3. Main Cinematic 16:9 Video Stage — Unobstructed */}
      <div className="relative z-10 my-auto w-full flex items-center justify-center py-2 sm:py-3">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#050814] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            disableRemotePlayback
            aria-label={ariaLabel}
            className="w-full h-full object-contain object-center"
          />

          {/* Subtle Inner Glass Edge Ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>

      {/* 4. Bottom Telemetry Bar */}
      <div className="relative z-20 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#536078]">
        {telemetryMetrics.length > 0 ? (
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-none flex-wrap sm:flex-nowrap">
            {telemetryMetrics.map((metric, idx) => (
              <span key={idx} className="flex items-center gap-1 shrink-0">
                <span className="text-[#536078]">{metric.label}:</span>
                <span className="text-[#0284c7] font-semibold">{metric.value}</span>
              </span>
            ))}
          </div>
        ) : (
          <span className="text-[#536078]">Cinematic System Architecture</span>
        )}

        <span className="text-emerald-700 flex items-center gap-1 shrink-0 font-medium ml-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
        </span>
      </div>
    </div>
  );
};

