import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const WebDevVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/web_devices_3d.jpg"
      altText="3D Floating Multi-Device Studio"
      badgeLabel="3D Multi-Device Studio"
      badgeColor="text-cyan-300 border-cyan-500/40 bg-cyan-500/15"
      accentGlow="cyan"
      telemetryMetrics={[
        { label: 'Displays', value: 'Retina 4K' },
        { label: 'Lighthouse', value: '99+' },
        { label: 'Engine', value: 'WebGL & React' },
      ]}
    />
  );
};
