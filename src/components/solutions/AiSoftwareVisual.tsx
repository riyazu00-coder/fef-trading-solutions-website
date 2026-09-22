import React from "react";
import { Interactive3DStage } from "./Interactive3DStage";

export const AiSoftwareVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/ai_core_3d.jpg"
      altText="Conceptual visualization representing an AI software system"
      badgeLabel="AI Intelligence Core"
      badgeColor="text-cyan-300 border-cyan-500/40 bg-cyan-500/15"
      accentGlow="cyan"
      telemetryMetrics={[
        { label: "Layer", value: "Intelligence" },
        { label: "Mode", value: "Workflow" },
        { label: "Control", value: "Human + AI" },
      ]}
    />
  );
};
