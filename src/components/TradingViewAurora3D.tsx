import React, { useEffect, useRef, useState } from 'react';

export const TradingViewAurora3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse move listener for 3D parallax tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize from -1 to 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate 3D transformation values
  const rotateX = -mousePos.y * 3.5;
  const rotateY = mousePos.x * 4.5;
  const translateY = -scrollY * 0.12;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Movable Video Surface */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center filter brightness-90"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ mixBlendMode: 'screen' }}
        >
          {/* Official TradingView Space Mission Aurora Video Sources */}
          <source
            src="https://static.tradingview.com/static/bundles/second-video.avc1.e5e91504b0d2deb546c4.mp4"
            type="video/mp4;codecs=avc1"
          />
          <source
            src="https://static.tradingview.com/static/bundles/second-video.85d803e3fdc6f8bdfdec.webm"
            type="video/webm"
          />
          <source
            src="https://static.tradingview.com/static/bundles/second-video.hvc1.1af7781623168ae830e2.mp4"
            type="video/mp4;codecs=hvc1.1.0.L150.b0"
          />
        </video>
      </div>

      {/* Atmospheric Vignette & Contrast Overlays to keep FEF original text 100% readable */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 35%, rgba(5, 7, 13, 0.45) 0%, rgba(5, 7, 13, 0.82) 75%, #05070d 100%)',
        }}
      />
      <div 
        className="absolute inset-x-0 top-0 h-40 pointer-events-none bg-gradient-to-b from-[#05070d]/90 via-[#05070d]/40 to-transparent" 
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none bg-gradient-to-t from-[#05070d] via-[#05070d]/90 to-transparent" 
      />
    </div>
  );
};
