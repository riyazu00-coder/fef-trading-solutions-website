import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const CustomCodingVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/coding_engine_3d.jpg"
      altText="3D Software Construction Workstation"
      badgeLabel="3D Software Workstation"
      badgeColor="text-blue-300 border-blue-500/40 bg-blue-500/15"
      accentGlow="blue"
      telemetryMetrics={[
        { label: 'Architecture', value: 'Microservices' },
        { label: 'Build Time', value: '142ms' },
        { label: 'Coverage', value: '100% Tests' },
      ]}
    />
  );
};
