import React from 'react';

/**
 * FEF Cockpit Official Background
 * Replicated exactly from https://app.feftradingsolutions.com/cockpit
 * Features:
 * - High-definition Aurora Space Mission ambient loop video
 * - Dark overlay tint (#02050e/35) and vertical gradient (#02050e/90 via black/25 to #02050e/75)
 * - Atmospheric glowing ambient color orbs (Rose 500/10 top-left and Cyan 500/10 mid-right)
 * - Fully responsive, fixed viewport, non-blocking (pointer-events: none, z-0)
 */
export const FefCockpitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden select-none pointer-events-none transition-all duration-700">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          disableRemotePlayback
          className="w-full h-full object-cover object-center filter contrast-115 brightness-95 opacity-85"
        >
          <source src="/videos/aurora-space-mission.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#02050e]/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050e]/90 via-black/25 to-[#02050e]/75 pointer-events-none" />
      </div>
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[160px] pointer-events-none transition-colors duration-1000 bg-rose-500/10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-[160px] bg-cyan-500/10 pointer-events-none" />
    </div>
  );
};

export default FefCockpitBackground;
