import { Activity, BarChart3, Cpu, HeartPulse, LifeBuoy, ListChecks, Radio, ShieldAlert, ShieldCheck, WalletCards } from "lucide-react";

const statCards = [
  {
    label: "Live Status",
    value: "Connected",
    detail: "Master and slaves online",
    icon: <Activity className="h-4 w-4" />
  },
  {
    label: "Master Active",
    value: "Online",
    detail: "Master account broadcasting",
    icon: <ShieldCheck className="h-4 w-4" />
  },
  {
    label: "Slave Synced",
    value: "3/3 Synced",
    detail: "Slave accounts aligned",
    icon: <Radio className="h-4 w-4" />
  },
  {
    label: "Trade Copier Running",
    value: "Active",
    detail: "Copy engine monitoring",
    icon: <Cpu className="h-4 w-4" />
  },
  {
    label: "Today's P/L",
    value: "Visible",
    detail: "Per-account realized view",
    icon: <BarChart3 className="h-4 w-4" />
  },
  {
    label: "Floating P/L",
    value: "Visible",
    detail: "Open exposure overview",
    icon: <WalletCards className="h-4 w-4" />
  },
  {
    label: "Account Health",
    value: "Heartbeat",
    detail: "Connection and ping checks",
    icon: <HeartPulse className="h-4 w-4" />
  }
];

export function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-electric">Dashboard</p>
        <h2 className="text-balance text-4xl font-black text-white sm:text-5xl">
          A control panel built for <span className="text-gradient">operators</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-steel">
          Clean, dense and real time. Every panel is designed for fast decisions and total clarity.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <div key={card.label} className="rounded-xl border border-line bg-panel/76 p-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-steel">
                <span className="text-electric">{card.icon}</span>
                {card.label}
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald/80" />
            </div>
            <p className="mt-5 text-2xl font-black text-white">{card.value}</p>
            <p className="mt-2 text-sm text-steel">{card.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_0.8fr_0.9fr]">
        <div className="rounded-xl border border-line bg-panel/76 p-6">
          <h3 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-steel">
            <ListChecks className="h-4 w-4 text-electric" />
            Event Log
          </h3>
          <div className="mt-5 grid gap-2 font-mono text-xs">
            {["SYNC OK - XAUUSD - 3/3 slaves", "MASTER open - BUY 1.00 XAUUSD", "HEARTBEAT - 12ms", "SLAVE #55621 reconnected"].map((line) => (
              <p key={line} className="text-steel">
                <span className="text-emerald">14:02:{Math.floor(line.length * 1.7)}</span> {line}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-line bg-panel/76 p-6">
          <h3 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-steel">
            <ShieldAlert className="h-4 w-4 text-electric" />
            Risk Warning
          </h3>
          <p className="mt-5 text-lg font-bold text-white">Configured Limits</p>
          <div className="mt-4 h-2 rounded-full bg-white/[0.08]">
            <span className="block h-2 w-1/3 rounded-full bg-brand-gradient" />
          </div>
          <p className="mt-3 text-sm text-steel">Operator-defined settings stay visible.</p>
        </div>
        <div className="rounded-xl border border-line bg-panel/76 p-6">
          <h3 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-steel">
            <LifeBuoy className="h-4 w-4 text-electric" />
            Support
          </h3>
          <p className="mt-5 text-lg font-bold text-white">Direct line to FEF</p>
          <p className="mt-2 text-sm leading-6 text-steel">Telegram and email support for purchase and setup questions.</p>
        </div>
      </div>
    </section>
  );
}
