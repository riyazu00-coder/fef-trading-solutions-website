import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const TradingTechVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/trading_bull_3d.jpg"
      altText="3D Institutional Financial Command Installation"
      badgeLabel="Institutional Trading Installation"
      badgeColor="text-emerald-300 border-emerald-500/40 bg-emerald-500/15"
      accentGlow="emerald"
      telemetryMetrics={[
        { label: 'MT5 Ping', value: '0.2ms' },
        { label: 'Sync Rate', value: '100%' },
        { label: 'Risk Guard', value: 'Active' },
      ]}
    />
  );
};
