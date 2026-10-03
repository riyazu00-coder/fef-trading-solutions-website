import React from 'react';

/**
 * FEF AI Visual Identity Background
 * Crafted to match the primary visual concept reference:
 * - Luminous pearlescent silver-white futuristic canvas (#f5f7fc to #ebf1fb)
 * - Atmospheric ambient glow orbs in Electric Cyan (#00e5ff) and Radiant Purple (#a855f7)
 * - Delicate futuristic micro-dot matrix pattern
 * - Fixed viewport, non-blocking (pointer-events: none, z-0)
 */
export const FefAiVisualIdentityBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden select-none pointer-events-none transition-all duration-700 bg-[#f5f7fc]">
      {/* 1. Luminous Pearlescent Base Gradients */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 0%, #ffffff 0%, #f4f7fd 55%, #ebf1fa 100%)'
        }}
      />

      {/* 2. Top-Left Electric Cyan Ambient Glow Orb */}
      <div 
        className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)'
        }}
      />

      {/* 3. Center-Right Electric Purple / Violet Glow Orb behind Cyborg Head */}
      <div 
        className="absolute top-8 right-0 sm:right-10 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.40) 0%, rgba(192, 132, 252, 0.18) 50%, transparent 75%)'
        }}
      />

      {/* 4. Mid-Screen Deep Blue Horizon Accent Glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[160px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.28) 0%, rgba(147, 197, 253, 0.12) 50%, transparent 80%)'
        }}
      />

      {/* 5. Lower Page Radiant Violet / Cyan Ambient Swell */}
      <div 
        className="absolute bottom-10 left-10 w-[600px] h-[500px] rounded-full blur-[170px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.25) 0%, rgba(168, 85, 247, 0.18) 50%, transparent 80%)'
        }}
      />

      {/* 6. Delicate Futuristic Micro-Grid Pattern - Barely Visible / Pure Architecture */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="fef-ai-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0f172a" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="1" fill="#0284c7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fef-ai-grid)" />
      </svg>
    </div>
  );
};

export default FefAiVisualIdentityBackground;
