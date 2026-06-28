import { Activity, CircleDollarSign, Radio } from "lucide-react";

const slaves = [
  { id: "#12044", name: "Slave 1", lot: "0.25" },
  { id: "#90217", name: "Slave 2", lot: "0.50" },
  { id: "#55621", name: "Slave 3", lot: "0.75" }
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float rounded-2xl border border-line bg-panel/82 p-6 shadow-glow">
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="site-grid absolute inset-0 opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald/10 to-transparent" />
        <svg className="absolute right-3 top-5 h-44 w-64 text-electric/45" viewBox="0 0 320 210" aria-hidden="true">
          <path d="M35 82c22-34 68-49 109-38 24 6 39 22 62 25 29 4 49-11 79-2" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50 128c36-18 70-19 105-6 42 16 72 10 116-9" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M82 57c28 20 47 49 55 88" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M206 68c-20 31-26 61-14 92" fill="none" stroke="currentColor" strokeWidth="1" />
          {[
            [35, 82],
            [82, 57],
            [144, 44],
            [206, 68],
            [285, 67],
            [50, 128],
            [155, 122],
            [271, 113],
            [137, 145],
            [192, 160]
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" className="animate-pulse" />
          ))}
        </svg>
      </div>
      <div className="relative grid gap-7 lg:grid-cols-[1fr_1.05fr]">
        <div className="rounded-xl border border-electric/55 bg-ink/78 p-5 shadow-glow">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric">Master</p>
            <span className="h-3 w-3 rounded-full bg-emerald shadow-emerald" />
          </div>
          <p className="mt-3 font-mono text-lg font-bold text-white">#84210 - Pro</p>
          <div className="mt-5 grid gap-3 font-mono text-xs">
            {[
              ["XAUUSD", "BUY", "+0.00"],
              ["EURUSD", "SELL", "+0.00"],
              ["BTCUSD", "BUY", "+0.00"]
            ].map(([symbol, side, value]) => (
              <div key={symbol} className="grid grid-cols-3 items-center gap-2 text-steel">
                <span>{symbol}</span>
                <span className={side === "BUY" ? "text-emerald" : "text-electric"}>{side}</span>
                <span className="text-right text-metal">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 h-8 overflow-hidden rounded bg-emerald/12">
            <svg viewBox="0 0 160 34" className="h-full w-full text-emerald" aria-hidden="true">
              <polyline
                points="0,28 18,23 30,25 43,15 55,19 70,8 86,13 101,5 116,10 132,2 150,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="relative flex flex-col justify-center gap-3">
          <svg className="absolute -left-16 top-8 hidden h-[220px] w-28 text-cyan/70 lg:block" viewBox="0 0 120 220" aria-hidden="true">
            <path d="M0 110 C 55 110 38 20 100 20" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 110 C 62 110 50 110 100 110" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 110 C 55 110 38 200 100 200" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          {slaves.map((slave) => (
            <div key={slave.id} className="rounded-xl border border-line bg-ink/72 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">{slave.name}</span>
                <span className="h-2 w-2 rounded-full bg-emerald" />
              </div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="font-mono text-sm font-bold text-white">{slave.id}</p>
                <span className="text-xs font-bold text-emerald">BUY</span>
                <span className="font-mono text-xs font-bold text-white">{slave.lot}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-5 text-xs text-steel">
        <span className="inline-flex items-center gap-2">
          <Activity className="h-4 w-4 text-electric" />
          Live sync
        </span>
        <span className="inline-flex items-center gap-2">
          <Radio className="h-4 w-4 text-electric" />
          Heartbeat
        </span>
        <span className="inline-flex items-center gap-2">
          <CircleDollarSign className="h-4 w-4 text-electric" />
          P/L view
        </span>
      </div>
    </div>
  );
}
