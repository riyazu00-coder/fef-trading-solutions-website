import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const AiSoftwareVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/ai_core_3d.jpg"
      altText="3D Neural AI Brain and Quantum Core"
      badgeLabel="Neural AI Brain Core"
      badgeColor="text-cyan-300 border-cyan-500/40 bg-cyan-500/15"
      accentGlow="cyan"
      telemetryMetrics={[
        { label: 'Latency', value: '1.2ms' },
        { label: 'Inference', value: '99.85%' },
        { label: 'Context', value: '128k Tokens' },
      ]}
    />
  );
};
