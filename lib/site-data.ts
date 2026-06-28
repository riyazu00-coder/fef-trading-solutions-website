export const brand = {
  name: "FEF Trading Solutions",
  shortName: "FEF Trading",
  tagline: "Professional MetaTrader 5 Software Company",
  product: "FEF Professional Trade Copier MT5",
  status: "Available Now",

  email: "sales@feftradingsolutions.com",

  telegram: "@forexmetalsignals",
  telegramUrl: "https://t.me/forexmetalsignals",

  domain: "feftradingsolutions.com",
  website: "https://feftradingsolutions.com",

  phone: "+971526235196",
  whatsapp: "+971526235196",

  support: "24 Hours",
  workingHours: "09:00 - 18:00 UAE Time (UTC+4)",

  address:
    "G7 Emirates NBD Tower, 477 Street, Al Nuaimia 2, Ajman, United Arab Emirates",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Trade Copier", href: "/trade-copier" },
  { label: "Documentation", href: "/documentation" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" }
];

export const products = [
  {
    name: "FEF Professional Trade Copier MT5",
    status: "Available Now",
    description: "Professional Master/Slave Trade Copier",
    details:
      "Mirror trades across multiple MT5 accounts with symbol detection, retry handling, state sync, dashboard controls and event logging.",
  },
  {
    name: "FEF Manual Trade Manager PRO MT5",
    status: "Available Now",
    description: "Professional Manual Trade Management Suite",
    details:
      "Manage manual MT5 trades with auto SL/TP, break-even, trailing stop, partial close, ATR stops, session boxes, ORB, FVG, BOS/CHoCH, liquidity sweeps and DXY dashboard.",
  },
  {
    name: "FEF Smart Trader MT5",
    status: "Coming Soon",
    description: "Automated Trading Engine",
    details:
      "Planned automation system using trend, structure, confirmation and risk-based execution logic for MetaTrader 5.",
  },
  {
    name: "FEF Gold Master EA MT5",
    status: "Coming Soon",
    description: "XAUUSD Automation Concept",
    details:
      "Specialized gold trading automation concept designed for XAUUSD traders with structured execution and risk visibility.",
  },
  {
    name: "FEF Risk Manager MT5",
    status: "Coming Soon",
    description: "Professional Account Protection",
    details:
      "Planned risk-control tool for account limits, drawdown protection, emergency actions and operator visibility.",
  },
  {
    name: "FEF Trade Scanner MT5",
    status: "Coming Soon",
    description: "Multi-Symbol Opportunity Scanner",
    details:
      "A focused scanner for watching symbols, market conditions, alerts and trading opportunities from one operator surface.",
  },
  {
    name: "FEF Smart Money PRO MT5",
    status: "Coming Soon",
    description: "Market Structure & Liquidity Toolkit",
    details:
      "Smart Money and price-action analysis tool for BOS, CHoCH, FVG, liquidity sweeps, structure shifts and confirmation zones.",
  },
  {
    name: "FEF VPS Monitor",
    status: "Coming Soon",
    description: "VPS & Terminal Health Monitor",
    details:
      "Planned monitoring utility for VPS uptime, MT5 terminal health, copier status and account connectivity.",
  },
];

export const copierFeatures = [
  {
    title: "Exact Master Mirror",
    description: "Slave accounts replicate master positions with precise directional intent."
  },
  {
    title: "Copy Every MT5 Symbol",
    description: "Built for FX, metals, indices, energies, crypto and broker-specific CFDs."
  },
  {
    title: "Multi-Broker Compatible",
    description: "Works across brokers with different symbol naming schemes."
  },
  {
    title: "Automatic Symbol Detection",
    description: "Smart resolver handles prefixes, suffixes and common symbol aliases."
  },
  {
    title: "Unlimited Simultaneous Trades",
    description: "Copy concurrent tickets without an artificial position cap."
  },
  {
    title: "Multiple Positions per Symbol",
    description: "Track and copy each position independently on the same symbol."
  },
  {
    title: "Same Lot Mode",
    description: "Mirror master lot size directly when fixed sizing is required."
  },
  {
    title: "Lot Multiplier Mode",
    description: "Scale slave position size proportionally for account-level allocation."
  },
  {
    title: "Professional Dashboard",
    description: "Dense operator panel for monitoring account state, sync status and actions."
  },
  {
    title: "Heartbeat Monitoring",
    description: "Connection and account health checks help operators spot interruptions fast."
  },
  {
    title: "Smart Synchronization Engine",
    description: "Stateful synchronization designed around real MT5 account conditions."
  },
  {
    title: "Retry Queue",
    description: "Failed copy requests are queued and retried with controlled recovery."
  },
  {
    title: "Automatic Recovery",
    description: "Restores state after restart and resumes synchronization cleanly."
  },
  {
    title: "Manual Slave Close Protection",
    description: "Helps protect copied positions from accidental slave-side close actions."
  },
  {
    title: "Event Log",
    description: "Searchable operational log for copy events, retries and account changes."
  },
  {
    title: "Daily Profit/Loss",
    description: "Per-account realized P/L visibility for operational tracking."
  },
  {
    title: "Floating Profit",
    description: "Aggregated live exposure view across open positions."
  },
  {
    title: "Sync Now",
    description: "Manual resync command when an operator wants immediate reconciliation."
  },
  {
    title: "Panic Close",
    description: "Emergency flatten action for controlled shutdown scenarios."
  }
];

export const riskWarning =
  "Trading financial markets involves significant risk and may result in the loss of capital. FEF Trading Solutions develops software tools only and does not guarantee profits or trading performance. Users should always test software on demo accounts before using live funds.";
