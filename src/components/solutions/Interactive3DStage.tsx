import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Eye, Sparkles, Maximize2 } from 'lucide-react';

interface Interactive3DStageProps {
  imageSrc: string;
  altText: string;
  badgeLabel: string;
  badgeColor?: string;
  accentGlow?: 'cyan' | 'emerald' | 'purple' | 'blue';
  telemetryMetrics?: { label: string; value: string }[];
}

export const Interactive3DStage: React.FC<Interactive3DStageProps> = ({
  imageSrc,
  altText,
  badgeLabel,
  badgeColor = 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  accentGlow = 'cyan',
  telemetryMetrics = [],
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse move handler for interactive 3D perspective tilt
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -1 to 1
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Subtle, elegant tilt angles (max 12 degrees)
    setRotate({
      x: -normY * 10,
      y: normX * 12,
    });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  // Touch handlers for mobile devices
  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const normX = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
    const normY = Math.max(-1, Math.min(1, (y / rect.height) * 2 - 1));

    setRotate({
      x: -normY * 8,
      y: normX * 10,
    });
  }, []);

  const handleTouchEnd = () => {
    setRotate({ x: 0, y: 0 });
  };

  // Accent glow configuration
  const glowStyles = {
    cyan: 'from-cyan-500/20 via-[#19d3d0]/15 to-transparent',
    emerald: 'from-emerald-500/20 via-cyan-500/15 to-transparent',
    purple: 'from-purple-500/20 via-indigo-500/15 to-transparent',
    blue: 'from-blue-500/20 via-cyan-500/15 to-transparent',
  }[accentGlow];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[480px] rounded-3xl bg-[#040812]/80 border border-white/15 p-4 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_20px_50px_rgba(0,0,0,0.8)] select-none group cursor-grab active:cursor-grabbing"
      style={{ perspective: '1400px' }}
    >
      {/* 1. Volumetric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-gradient-to-tr ${glowStyles} blur-[90px] rounded-full transition-opacity duration-700 ${isHovered ? 'opacity-90 scale-110' : 'opacity-60'}`} />
        
        {/* Subtle 3D Depth Grid Matrix */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#19d3d0_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* 2. Top Hologram Overlay Controls */}
      <div className="relative z-20 flex items-center justify-between gap-2 pb-2 text-[11px] font-mono">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border backdrop-blur-xl ${badgeColor}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="font-semibold tracking-wider uppercase text-[10px] sm:text-[11px]">{badgeLabel}</span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/10">
          <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
          <span className="hidden sm:inline">Interactive 3D View</span>
          <span className="sm:hidden">3D Model</span>
        </div>
      </div>

      {/* 3. Main Floating 3D Model Stage */}
      <div className="relative z-10 my-auto w-full flex items-center justify-center py-2">
        
        {/* Floating Levitation Wrapper (CSS continuous float animation) */}
        <div className="w-full flex flex-col items-center justify-center animate-float">
          
          {/* Interactive 3D Transform Surface (Mouse tilt + depth) */}
          <div
            className="relative w-full max-w-[460px] aspect-[4/3] rounded-2xl transition-transform duration-200 ease-out flex items-center justify-center"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(${isHovered ? 25 : 0}px)`,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {/* Cinematic 3D Render Image with Smooth Edge Radial Vignette Mask */}
            <div 
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.7)] border border-white/10"
              style={{
                maskImage: 'radial-gradient(ellipse 94% 90% at 50% 50%, black 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 94% 90% at 50% 50%, black 70%, transparent 100%)',
              }}
            >
              <img
                src={imageSrc}
                alt={altText}
                loading="eager"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover object-center filter contrast-[1.05] brightness-105 transition-all duration-700 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } ${isHovered ? 'scale-[1.03]' : 'scale-100'}`}
              />

              {/* Dynamic Specular Glass Reflection Sheen */}
              <div 
                className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent opacity-60 mix-blend-overlay transition-opacity duration-300"
                style={{
                  transform: `translate3d(${rotate.y * 1.5}px, ${-rotate.x * 1.5}px, 0)`,
                }}
              />
            </div>

            {/* Realistic Contact Shadow beneath floating model */}
            <div
              className={`absolute -bottom-6 w-3/4 h-6 rounded-full bg-black/80 blur-xl transition-all duration-300 pointer-events-none ${
                isHovered ? 'scale-90 opacity-60' : 'scale-100 opacity-90'
              }`}
            />
          </div>

        </div>

      </div>

      {/* 4. Bottom Telemetry Bar */}
      <div className="relative z-20 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
        {telemetryMetrics.length > 0 ? (
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-none">
            {telemetryMetrics.map((metric, idx) => (
              <span key={idx} className="flex items-center gap-1 shrink-0">
                <span className="text-slate-400">{metric.label}:</span>
                <span className="text-cyan-300 font-semibold">{metric.value}</span>
              </span>
            ))}
          </div>
        ) : (
          <span className="text-slate-400">Cinematic 3D Real-time Scene</span>
        )}

        <span className="text-emerald-400 flex items-center gap-1 shrink-0 font-medium ml-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>60 FPS Active</span>
        </span>
      </div>

    </div>
  );
};
