/**
 * Live Market Data Service for FEF Market Pulse
 * Fetches real-time price feeds for Crypto, Gold, and Major Forex pairs
 * with multi-tiered fallbacks, automatic polling, and dynamic sparklines.
 */

export interface MarketQuote {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  points: string;
  rawPrice?: number;
  rawChange?: number;
}

export interface WatchlistItem {
  name: string;
  status: string;
  tag: string;
  tagColor: string;
  bias: 'Bullish' | 'Bearish' | 'Neutral';
  risk: 'Low' | 'Medium' | 'High';
}

// Initial baseline fallback data matching design specifications exactly
export const initialQuotes: MarketQuote[] = [
  {
    symbol: 'XAUUSD',
    name: 'Gold',
    price: '4,418.65',
    change: '+0.51%',
    isPositive: true,
    points: '0,32 18,28 35,23 53,26 70,24 88,15 105,13 123,16 140,10',
  },
  {
    symbol: 'EURUSD',
    name: 'Euro / Dollar',
    price: '1.16312',
    change: '+0.05%',
    isPositive: true,
    points: '0,32 18,27 34,28 52,20 70,22 88,14 106,16 124,8 140,10',
  },
  {
    symbol: 'GBPUSD',
    name: 'Pound / Dollar',
    price: '1.35466',
    change: '+0.06%',
    isPositive: true,
    points: '0,30 18,28 34,24 52,25 70,19 88,18 106,12 124,14 140,8',
  },
  {
    symbol: 'BTCUSD',
    name: 'Bitcoin',
    price: '78,810.01',
    change: '+0.25%',
    isPositive: true,
    points: '0,28 18,25 34,30 52,22 70,18 88,20 106,14 124,11 140,9',
  },
  {
    symbol: 'USDJPY',
    name: 'Dollar / Yen',
    price: '153.414',
    change: '+0.06%',
    isPositive: true,
    points: '0,30 18,26 34,28 52,21 70,18 88,19 106,15 124,12 140,10',
  },
  {
    symbol: 'USDCHF',
    name: 'Dollar / Swiss Franc',
    price: '0.80891',
    change: '-0.06%',
    isPositive: false,
    points: '0,10 18,15 34,13 52,21 70,18 88,27 106,30 124,35 140,32',
  },
];

export const initialWatchlist: WatchlistItem[] = [
  {
    name: 'Gold',
    status: 'Watching Breakout',
    tag: 'Medium Risk',
    tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    bias: 'Bullish',
    risk: 'Medium',
  },
  {
    name: 'EURUSD',
    status: 'Waiting Confirmation',
    tag: 'Low Risk',
    tagColor: 'text-slate-300 border-white/15 bg-white/5',
    bias: 'Neutral',
    risk: 'Low',
  },
  {
    name: 'BTCUSD',
    status: 'Momentum Active',
    tag: 'High Risk',
    tagColor: 'text-[#1da8ff] border-[#1da8ff]/30 bg-[#1da8ff]/10',
    bias: 'Bullish',
    risk: 'High',
  },
  {
    name: 'USDJPY',
    status: 'Yen momentum watch',
    tag: 'Medium Risk',
    tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    bias: 'Bullish',
    risk: 'Medium',
  },
];

/**
 * Generate smooth SVG polyline coordinates matching 140x42 viewBox
 */
export function generateSparklinePoints(isPositive: boolean, seed: number = 0): string {
  const points: [number, number][] = [];
  const count = 9;
  const step = 140 / (count - 1);
  const startY = isPositive ? 32 : 10;
  const endY = isPositive ? 10 : 32;

  for (let i = 0; i < count; i++) {
    const x = Math.round(i * step);
    const progress = i / (count - 1);
    let y = startY + (endY - startY) * progress;
    if (i > 0 && i < count - 1) {
      const wiggle = Math.sin((i + seed) * 1.7) * 4;
      y += wiggle;
    }
    y = Math.max(6, Math.min(36, Math.round(y)));
    points.push([x, y]);
  }
  return points.map(([x, y]) => `${x},${y}`).join(' ');
}

// Format price helper
function formatNumberWithCommas(num: number, decimals: number): string {
  const parts = num.toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

/**
 * Fetch crypto and gold prices from Binance with CoinGecko fallback
 */
async function fetchCryptoAndGold(): Promise<{
  btc?: { price: number; changePercent: number };
  gold?: { price: number; changePercent: number };
}> {
  const result: {
    btc?: { price: number; changePercent: number };
    gold?: { price: number; changePercent: number };
  } = {};

  try {
    const [btcRes, goldRes] = await Promise.allSettled([
      fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT'),
      fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=PAXGUSDT'),
    ]);

    if (btcRes.status === 'fulfilled' && btcRes.value.ok) {
      const btc = await btcRes.value.json();
      result.btc = {
        price: parseFloat(btc.lastPrice),
        changePercent: parseFloat(btc.priceChangePercent),
      };
    }

    if (goldRes.status === 'fulfilled' && goldRes.value.ok) {
      const gold = await goldRes.value.json();
      result.gold = {
        price: parseFloat(gold.lastPrice),
        changePercent: parseFloat(gold.priceChangePercent),
      };
    }
  } catch {
    // Silently fall back
  }

  // Fallback to CoinGecko if either is missing
  if (!result.btc || !result.gold) {
    try {
      const cgRes = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,pax-gold&vs_currencies=usd&include_24hr_change=true'
      );
      if (cgRes.ok) {
        const cg = await cgRes.json();
        if (!result.btc && cg.bitcoin) {
          result.btc = {
            price: cg.bitcoin.usd,
            changePercent: cg.bitcoin.usd_24h_change || 0,
          };
        }
        if (!result.gold && cg['pax-gold']) {
          result.gold = {
            price: cg['pax-gold'].usd,
            changePercent: cg['pax-gold'].usd_24h_change || 0,
          };
        }
      }
    } catch {
      // Silently fall back to gold-api if needed
    }
  }

  // Final Gold fallback if still missing
  if (!result.gold) {
    try {
      const gRes = await fetch('https://api.gold-api.com/price/XAU');
      if (gRes.ok) {
        const gData = await gRes.json();
        if (gData.price) {
          result.gold = {
            price: gData.price,
            changePercent: 0.45,
          };
        }
      }
    } catch {
      // Use baseline fallback
    }
  }

  return result;
}

/**
 * Fetch major forex pairs from jsdelivr Currency API or open.er-api
 */
async function fetchForex(): Promise<{
  eurusd?: { price: number; changePercent: number };
  gbpusd?: { price: number; changePercent: number };
  usdjpy?: { price: number; changePercent: number };
  usdchf?: { price: number; changePercent: number };
}> {
  const result: {
    eurusd?: { price: number; changePercent: number };
    gbpusd?: { price: number; changePercent: number };
    usdjpy?: { price: number; changePercent: number };
    usdchf?: { price: number; changePercent: number };
  } = {};

  try {
    const now = new Date();
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const [latestRes, prevRes] = await Promise.allSettled([
      fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'),
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${yesterdayStr}/v1/currencies/usd.json`),
    ]);

    if (latestRes.status === 'fulfilled' && latestRes.value.ok) {
      const latest = await latestRes.value.json();
      const prev = prevRes.status === 'fulfilled' && prevRes.value.ok ? await prevRes.value.json() : null;

      const usd = latest.usd || {};
      const prevUsd = prev?.usd || {};

      if (usd.eur) {
        const price = 1 / usd.eur;
        const prevPrice = prevUsd.eur ? 1 / prevUsd.eur : price;
        const changePercent = ((price - prevPrice) / prevPrice) * 100;
        result.eurusd = { price, changePercent };
      }

      if (usd.gbp) {
        const price = 1 / usd.gbp;
        const prevPrice = prevUsd.gbp ? 1 / prevUsd.gbp : price;
        const changePercent = ((price - prevPrice) / prevPrice) * 100;
        result.gbpusd = { price, changePercent };
      }

      if (usd.jpy) {
        const price = usd.jpy;
        const prevPrice = prevUsd.jpy || price;
        const changePercent = ((price - prevPrice) / prevPrice) * 100;
        result.usdjpy = { price, changePercent };
      }

      if (usd.chf) {
        const price = usd.chf;
        const prevPrice = prevUsd.chf || price;
        const changePercent = ((price - prevPrice) / prevPrice) * 100;
        result.usdchf = { price, changePercent };
      }
    }
  } catch {
    // Silently fall back to Open ER API
  }

  // Fallback to open.er-api.com if needed
  if (!result.eurusd || !result.gbpusd || !result.usdjpy || !result.usdchf) {
    try {
      const erRes = await fetch('https://open.er-api.com/v6/latest/USD');
      if (erRes.ok) {
        const erData = await erRes.json();
        const rates = erData.rates || {};

        if (!result.eurusd && rates.EUR) {
          result.eurusd = { price: 1 / rates.EUR, changePercent: 0.05 };
        }
        if (!result.gbpusd && rates.GBP) {
          result.gbpusd = { price: 1 / rates.GBP, changePercent: 0.06 };
        }
        if (!result.usdjpy && rates.JPY) {
          result.usdjpy = { price: rates.JPY, changePercent: 0.06 };
        }
        if (!result.usdchf && rates.CHF) {
          result.usdchf = { price: rates.CHF, changePercent: -0.06 };
        }
      }
    } catch {
      // Keep baseline
    }
  }

  return result;
}

/**
 * Fetch all live market quotes and compute updated items
 */
export async function fetchLiveMarketData(): Promise<{
  quotes: MarketQuote[];
  watchlist: WatchlistItem[];
}> {
  const [cryptoAndGold, forex] = await Promise.all([
    fetchCryptoAndGold(),
    fetchForex(),
  ]);

  const updatedQuotes: MarketQuote[] = [
    // 1. XAUUSD (Gold)
    {
      symbol: 'XAUUSD',
      name: 'Gold',
      price: cryptoAndGold.gold ? formatNumberWithCommas(cryptoAndGold.gold.price, 2) : '4,418.65',
      change: `${(cryptoAndGold.gold?.changePercent ?? 0.51) >= 0 ? '+' : ''}${(cryptoAndGold.gold?.changePercent ?? 0.51).toFixed(2)}%`,
      isPositive: (cryptoAndGold.gold?.changePercent ?? 0.51) >= 0,
      points: generateSparklinePoints((cryptoAndGold.gold?.changePercent ?? 0.51) >= 0, 1),
      rawPrice: cryptoAndGold.gold?.price,
      rawChange: cryptoAndGold.gold?.changePercent,
    },
    // 2. EURUSD (Euro / Dollar)
    {
      symbol: 'EURUSD',
      name: 'Euro / Dollar',
      price: forex.eurusd ? forex.eurusd.price.toFixed(5) : '1.16312',
      change: `${(forex.eurusd?.changePercent ?? 0.05) >= 0 ? '+' : ''}${(forex.eurusd?.changePercent ?? 0.05).toFixed(2)}%`,
      isPositive: (forex.eurusd?.changePercent ?? 0.05) >= 0,
      points: generateSparklinePoints((forex.eurusd?.changePercent ?? 0.05) >= 0, 2),
      rawPrice: forex.eurusd?.price,
      rawChange: forex.eurusd?.changePercent,
    },
    // 3. GBPUSD (Pound / Dollar)
    {
      symbol: 'GBPUSD',
      name: 'Pound / Dollar',
      price: forex.gbpusd ? forex.gbpusd.price.toFixed(5) : '1.35466',
      change: `${(forex.gbpusd?.changePercent ?? 0.06) >= 0 ? '+' : ''}${(forex.gbpusd?.changePercent ?? 0.06).toFixed(2)}%`,
      isPositive: (forex.gbpusd?.changePercent ?? 0.06) >= 0,
      points: generateSparklinePoints((forex.gbpusd?.changePercent ?? 0.06) >= 0, 3),
      rawPrice: forex.gbpusd?.price,
      rawChange: forex.gbpusd?.changePercent,
    },
    // 4. BTCUSD (Bitcoin)
    {
      symbol: 'BTCUSD',
      name: 'Bitcoin',
      price: cryptoAndGold.btc ? formatNumberWithCommas(cryptoAndGold.btc.price, 2) : '78,810.01',
      change: `${(cryptoAndGold.btc?.changePercent ?? 0.25) >= 0 ? '+' : ''}${(cryptoAndGold.btc?.changePercent ?? 0.25).toFixed(2)}%`,
      isPositive: (cryptoAndGold.btc?.changePercent ?? 0.25) >= 0,
      points: generateSparklinePoints((cryptoAndGold.btc?.changePercent ?? 0.25) >= 0, 4),
      rawPrice: cryptoAndGold.btc?.price,
      rawChange: cryptoAndGold.btc?.changePercent,
    },
    // 5. USDJPY (Dollar / Yen)
    {
      symbol: 'USDJPY',
      name: 'Dollar / Yen',
      price: forex.usdjpy ? forex.usdjpy.price.toFixed(3) : '153.414',
      change: `${(forex.usdjpy?.changePercent ?? 0.06) >= 0 ? '+' : ''}${(forex.usdjpy?.changePercent ?? 0.06).toFixed(2)}%`,
      isPositive: (forex.usdjpy?.changePercent ?? 0.06) >= 0,
      points: generateSparklinePoints((forex.usdjpy?.changePercent ?? 0.06) >= 0, 5),
      rawPrice: forex.usdjpy?.price,
      rawChange: forex.usdjpy?.changePercent,
    },
    // 6. USDCHF (Dollar / Swiss Franc)
    {
      symbol: 'USDCHF',
      name: 'Dollar / Swiss Franc',
      price: forex.usdchf ? forex.usdchf.price.toFixed(5) : '0.80891',
      change: `${(forex.usdchf?.changePercent ?? -0.06) >= 0 ? '+' : ''}${(forex.usdchf?.changePercent ?? -0.06).toFixed(2)}%`,
      isPositive: (forex.usdchf?.changePercent ?? -0.06) >= 0,
      points: generateSparklinePoints((forex.usdchf?.changePercent ?? -0.06) >= 0, 6),
      rawPrice: forex.usdchf?.price,
      rawChange: forex.usdchf?.changePercent,
    },
  ];

  // Helper to determine bias from change percentage
  const getBias = (chg?: number): 'Bullish' | 'Bearish' | 'Neutral' => {
    if (chg === undefined) return 'Neutral';
    if (chg > 0.02) return 'Bullish';
    if (chg < -0.02) return 'Bearish';
    return 'Neutral';
  };

  const updatedWatchlist: WatchlistItem[] = [
    {
      name: 'Gold',
      status: 'Watching Breakout',
      tag: 'Medium Risk',
      tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      bias: getBias(cryptoAndGold.gold?.changePercent),
      risk: 'Medium',
    },
    {
      name: 'EURUSD',
      status: 'Waiting Confirmation',
      tag: 'Low Risk',
      tagColor: 'text-slate-300 border-white/15 bg-white/5',
      bias: getBias(forex.eurusd?.changePercent),
      risk: 'Low',
    },
    {
      name: 'BTCUSD',
      status: 'Momentum Active',
      tag: 'High Risk',
      tagColor: 'text-[#1da8ff] border-[#1da8ff]/30 bg-[#1da8ff]/10',
      bias: getBias(cryptoAndGold.btc?.changePercent),
      risk: 'High',
    },
    {
      name: 'USDJPY',
      status: 'Yen momentum watch',
      tag: 'Medium Risk',
      tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      bias: getBias(forex.usdjpy?.changePercent),
      risk: 'Medium',
    },
  ];

  return { quotes: updatedQuotes, watchlist: updatedWatchlist };
}
