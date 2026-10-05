import React, { useRef, useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const AboutBrandFilm: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // For reduced motion, keep video paused on first frame
      video.pause();
      setIsPlaying(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            // Viewport visibility >= 40%: safely play video
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => setIsPlaying(true))
                .catch(() => {
                  // Handled safely without uncaught exceptions
                });
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            // Section left viewport: pause video
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: [0.1, 0.4, 0.7],
      }
    );

    observer.observe(container);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      observer.disconnect();
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="fef-about-brand-film"
      aria-label="FEF Brand Film"
      className="relative w-full max-w-7xl mx-auto pt-4 sm:pt-6 pb-2 sm:pb-3"
    >
      {/* 1. Centered Editorial Header */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-50/90 text-cyan-800 text-xs font-semibold uppercase tracking-[0.2em] shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
          FEF · BUILT AROUND INTELLIGENCE
        </div>

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.025em] text-[#080B1D] leading-tight">
          Technology with{' '}
          <span className="bg-gradient-to-r from-[#45c9f5] via-[#6695f5] to-[#a57af3] bg-clip-text text-transparent">
            an identity.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#536078] max-w-2xl mx-auto leading-relaxed font-normal">
          FEF Trading Solutions brings AI, software engineering, automation and trading technology together under one evolving digital ecosystem.
        </p>
      </div>

      {/* 2. Cinematic Glass Video Stage Container (max-width: 1100-1200px) */}
      <div className="mt-5 sm:mt-6 relative max-w-5xl mx-auto px-2 sm:px-4">
        {/* Extremely Subtle Ambient Edge Glows (Reflected light from the film: Cyan left, Violet right) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] opacity-75 blur-3xl transition-opacity duration-1000"
          style={{
            background:
              'radial-gradient(circle at 18% 50%, rgba(69, 201, 245, 0.16) 0%, transparent 60%), radial-gradient(circle at 82% 50%, rgba(165, 122, 243, 0.16) 0%, transparent 60%)',
          }}
        />

        {/* Sophisticated Translucent Glass Outer Frame (refined 6-8px edge) */}
        <div className="relative rounded-2xl sm:rounded-[2rem] p-1.5 sm:p-2 bg-white/75 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08),0_0_24px_rgba(69,201,245,0.06)] overflow-hidden">
          {/* Faint Specular Highlight along top edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          />

          {/* Clean 16:9 Video Player Frame — Completely Unobstructed */}
          <div className="relative aspect-video w-full rounded-xl sm:rounded-[1.4rem] overflow-hidden bg-[#050814] shadow-inner">
            <video
              ref={videoRef}
              src="/videos/fef-about-brand-film.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disableRemotePlayback
              aria-label="FEF Trading Solutions Brand Film"
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle Inner Glass Edge Ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-[1.4rem] ring-1 ring-inset ring-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrandFilm;
