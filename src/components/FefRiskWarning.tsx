import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const FefRiskWarning: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-red-500/35 bg-red-500/[0.045] p-6 sm:flex sm:items-start sm:gap-5 backdrop-blur-md">
        <span className="mb-4 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-red-400/35 bg-red-500/12 text-red-300 sm:mb-0">
          <AlertTriangle className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">
            Risk Warning
          </h2>
          <p className="mt-3 text-sm leading-7 text-steel">
            Trading financial markets involves significant risk and may result in the loss of capital. FEF Trading Solutions develops software tools only and does not guarantee profits or trading performance. Users should always test software on demo accounts before using live funds.
          </p>
        </div>
      </div>
    </section>
  );
};
