import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const CustomCodingVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/coding_engine_3d.jpg"
      altText="Conceptual visualization of a custom application development workspace"
      badgeLabel="Application Engineering"
      badgeColor="text-blue-300 border-blue-500/40 bg-blue-500/15"
      accentGlow="blue"
      telemetryMetrics={[
        { label: 'Layer', value: 'Application' },
        { label: 'Mode', value: 'Custom Build' },
        { label: 'System', value: 'Connected' },
      ]}
    />
  );
};
