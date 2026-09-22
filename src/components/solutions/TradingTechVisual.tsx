import React from 'react';
import { Interactive3DStage } from './Interactive3DStage';

export const TradingTechVisual: React.FC = () => {
  return (
    <Interactive3DStage
      imageSrc="/assets/3d/trading_bull_3d.jpg"
      altText="Conceptual visualization of the FEF trading technology ecosystem"
      badgeLabel="Trading Technology"
      badgeColor="text-emerald-300 border-emerald-500/40 bg-emerald-500/15"
      accentGlow="emerald"
      telemetryMetrics={[
        { label: 'Platform', value: 'MetaTrader 5' },
        { label: 'Layer', value: 'Trading Software' },
        { label: 'Workspace', value: 'FEF Trading App' },
      ]}
    />
  );
};
