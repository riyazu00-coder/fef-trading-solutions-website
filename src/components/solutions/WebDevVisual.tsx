import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const WebDevVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/web_devices_3d.jpg"
      altText="Conceptual multi-device visualization representing a modern web experience"
      badgeLabel="Digital Experience Studio"
      badgeColor="text-cyan-300 border-cyan-500/40 bg-cyan-500/15"
      accentGlow="cyan"
      telemetryMetrics={[
        { label: 'Layer', value: 'Experience' },
        { label: 'Mode', value: 'Interactive' },
        { label: 'Output', value: 'Web Platform' },
      ]}
    />
  );
};
