import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const AutomationVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/automation_robot_3d.jpg"
      altText="Conceptual visualization of a connected business automation system"
      badgeLabel="Workflow Orchestration"
      badgeColor="text-purple-300 border-purple-500/40 bg-purple-500/15"
      accentGlow="purple"
      telemetryMetrics={[
        { label: 'Layer', value: 'Operations' },
        { label: 'Mode', value: 'Workflow' },
        { label: 'Control', value: 'Human + System' },
      ]}
    />
  );
};
