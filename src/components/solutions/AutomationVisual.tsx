import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const AutomationVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/automation_robot_3d.jpg"
      altText="3D Cybernetic Automation Mechanism"
      badgeLabel="Cybernetic Robotic Core"
      badgeColor="text-purple-300 border-purple-500/40 bg-purple-500/15"
      accentGlow="purple"
      telemetryMetrics={[
        { label: 'Throughput', value: '1.4k jobs/min' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Execution', value: '48ms' },
      ]}
    />
  );
};
