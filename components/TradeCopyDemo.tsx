"use client";

import { Play, RefreshCcw, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type DemoState = "idle" | "copying" | "done";

const slaveAccounts = [
  { id: "#12044", broker: "ICMarkets", delay: "120ms" },
  { id: "#90217", broker: "Pepperstone", delay: "260ms" },
  { id: "#55621", broker: "Exness", delay: "400ms" }
];

export function TradeCopyDemo() {
  const [state, setState] = useState<DemoState>("idle");
  const [run, setRun] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function openTrade() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setRun((value) => value + 1);
    setState("copying");
    timeoutRef.current = setTimeout(() => {
      setState("done");
    }, 1450);
  }

  function resetDemo() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setState("idle");
  }

  const active = state !== "idle";

  return (
    <section id="trade-copy-demo" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-electric">Interactive Demo</p>
        <h2 className="text-balance text-4xl font-black text-white sm:text-5xl">
          See <span className="text-gradient">trade copying</span> in action
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-steel">
          A simplified visualization of how a master trade propagates to slave accounts in real time.
        </p>
      </div>

      <div className={`demo-shell ${active ? "demo-active" : ""} mt-14 rounded-2xl border border-line bg-panel/70 p-5 shadow-glow sm:p-8`}>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_0.28fr_1.15fr]">
          <div className="rounded-xl border border-electric/70 bg-ink/75 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">Master Account</p>
                <h3 className="mt-2 font-mono text-lg font-bold text-white">#84210 - Pro</h3>
              </div>
              <span className={`h-3 w-3 rounded-full ${state === "copying" ? "animate-pulse bg-electric" : "bg-emerald"}`} />
            </div>

            <div className="mt-6 rounded-lg border border-line bg-white/[0.03] p-4 font-mono text-sm">
              <div className="flex justify-between gap-4 text-steel">
                <span>Symbol</span>
                <span className="font-bold text-white">XAUUSD</span>
              </div>
              <div className="mt-2 flex justify-between gap-4 text-steel">
                <span>Side</span>
                <span className="font-bold text-emerald">BUY</span>
              </div>
              <div className="mt-2 flex justify-between gap-4 text-steel">
                <span>Volume</span>
                <span className="font-bold text-white">1.00 lot</span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={openTrade}
                className="focus-ring inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-brand-gradient px-4 py-3 text-sm font-bold text-ink shadow-glow transition hover:brightness-110"
              >
                <Play className="h-4 w-4" />
                Open BUY XAUUSD
              </button>
              <button
                type="button"
                onClick={resetDemo}
                aria-label="Reset demo"
                className="focus-ring grid h-11 w-12 place-items-center rounded-lg border border-line bg-white/[0.04] text-white transition hover:border-electric/70"
              >
                <RefreshCcw className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative hidden h-72 lg:block" aria-hidden="true">
            <svg key={run} viewBox="0 0 170 290" className="h-full w-full overflow-visible text-cyan/70">
              <path className="demo-path" d="M0 145 C80 145 70 35 170 35" fill="none" stroke="currentColor" strokeWidth="2" />
              <path className="demo-path" d="M0 145 C70 145 90 145 170 145" fill="none" stroke="currentColor" strokeWidth="2" />
              <path className="demo-path" d="M0 145 C80 145 70 255 170 255" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle className="packet" cx="78" cy="88" r="5" fill="#19d787" />
              <circle className="packet" cx="88" cy="145" r="5" fill="#1da8ff" />
              <circle className="packet" cx="78" cy="202" r="5" fill="#19d787" />
            </svg>
          </div>

          <div className="grid gap-4">
            {slaveAccounts.map((account, index) => {
              const copied = state === "done";
              const label = state === "idle" ? "Idle" : copied ? "Copied" : "Copying";
              return (
                <div
                  key={account.id}
                  className={`rounded-xl border p-5 transition duration-500 ${
                    active ? "border-emerald/40 bg-emerald/[0.045]" : "border-line bg-ink/70"
                  }`}
                  style={{ transitionDelay: state === "copying" ? account.delay : "0ms" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Slave {index + 1}</p>
                      <h3 className="mt-2 font-mono text-base font-bold text-white">
                        {account.id} - {account.broker}
                      </h3>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] ${
                        copied ? "bg-emerald/15 text-emerald" : state === "copying" ? "bg-electric/15 text-electric" : "bg-white/[0.06] text-steel"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  <div className={`mt-4 grid grid-cols-3 gap-3 text-xs transition ${active ? "opacity-100" : "opacity-45"}`}>
                    <span className="rounded border border-line bg-ink/50 px-3 py-2 text-steel">XAUUSD</span>
                    <span className="rounded border border-line bg-ink/50 px-3 py-2 font-bold text-emerald">BUY</span>
                    <span className="rounded border border-line bg-ink/50 px-3 py-2 text-right font-mono text-white">1.00</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-5 text-sm text-steel sm:flex-row">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald" />
            Visual demonstration only - not connected to live accounts.
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-steel">Master to Slave 1, Slave 2, Slave 3</span>
        </div>
      </div>
    </section>
  );
}
