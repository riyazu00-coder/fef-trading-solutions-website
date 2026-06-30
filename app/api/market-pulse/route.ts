import { NextResponse } from "next/server";

export const revalidate = 60;

type MarketSource = "live" | "fallback";
type MarketPulseStatus = "live" | "partial" | "fallback";

type Market = {
  symbol: string;
  providerSymbol: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  high: number | null;
  low: number | null;
  previousClose: number | null;
  source: MarketSource;
};

type MarketConfig = {
  symbol: string;
  providerSymbol: string;
  name: string;
  fallback: Omit<Market, "symbol" | "providerSymbol" | "name" | "source">;
};

type TwelveDataQuote = {
  close?: unknown;
  price?: unknown;
  change?: unknown;
  percent_change?: unknown;
  high?: unknown;
  low?: unknown;
  previous_close?: unknown;
  status?: unknown;
  code?: unknown;
  message?: unknown;
};

const PROVIDER = "Twelve Data";
const QUOTE_URL = "https://api.twelvedata.com/quote";
const CACHE_SECONDS = 60;

const RESPONSE_HEADERS = {
  "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=300`,
};

const MARKETS: readonly MarketConfig[] = [
  {
    symbol: "XAUUSD",
    providerSymbol: "XAU/USD",
    name: "Gold",
    fallback: {
      price: 2325,
      change: 0,
      percentChange: 0,
      high: null,
      low: null,
      previousClose: null,
    },
  },
  {
    symbol: "EURUSD",
    providerSymbol: "EUR/USD",
    name: "Euro / Dollar",
    fallback: {
      price: 1.08,
      change: 0,
      percentChange: 0,
      high: null,
      low: null,
      previousClose: null,
    },
  },
  {
    symbol: "GBPUSD",
    providerSymbol: "GBP/USD",
    name: "Pound / Dollar",
    fallback: {
      price: 1.27,
      change: 0,
      percentChange: 0,
      high: null,
      low: null,
      previousClose: null,
    },
  },
  {
    symbol: "BTCUSD",
    providerSymbol: "BTC/USD",
    name: "Bitcoin",
    fallback: {
      price: 65000,
      change: 0,
      percentChange: 0,
      high: null,
      low: null,
      previousClose: null,
    },
  },
  {
    symbol: "USDJPY",
    providerSymbol: "USD/JPY",
    name: "Dollar / Yen",
    fallback: {
      price: 150,
      change: 0,
      percentChange: 0,
      high: null,
      low: null,
      previousClose: null,
    },
  },
  {
    symbol: "USDCHF",
    providerSymbol: "USD/CHF",
    name: "Dollar / Swiss Franc",
    fallback: {
      price: 0.9,
      change: 0,
      percentChange: 0,
      high: null,
      low: null,
      previousClose: null,
    },
  },
];

function fallbackMarket(config: MarketConfig): Market {
  return {
    symbol: config.symbol,
    providerSymbol: config.providerSymbol,
    name: config.name,
    ...config.fallback,
    source: "fallback",
  };
}

function parseNumber(value: unknown): number | null {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value !== "string" || value.trim() === "") {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function buildMarketFromQuote(
  config: MarketConfig,
  quote: TwelveDataQuote,
): Market | null {
  if (quote.status === "error" || quote.code || quote.message) {
    return null;
  }

  const price = parseNumber(quote.close) ?? parseNumber(quote.price);
  const change = parseNumber(quote.change);
  const percentChange = parseNumber(quote.percent_change);

  if (price === null || change === null || percentChange === null) {
    return null;
  }

  return {
    symbol: config.symbol,
    providerSymbol: config.providerSymbol,
    name: config.name,
    price,
    change,
    percentChange,
    high: parseNumber(quote.high),
    low: parseNumber(quote.low),
    previousClose: parseNumber(quote.previous_close),
    source: "live",
  };
}

async function fetchLiveMarket(
  config: MarketConfig,
  apiKey: string,
): Promise<Market> {
  try {
    const url = new URL(QUOTE_URL);
    url.searchParams.set("symbol", config.providerSymbol);
    url.searchParams.set("apikey", apiKey);

    const response = await fetch(url, {
      next: { revalidate: CACHE_SECONDS },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return fallbackMarket(config);
    }

    const quote = (await response.json()) as TwelveDataQuote;
    return buildMarketFromQuote(config, quote) ?? fallbackMarket(config);
  } catch {
    return fallbackMarket(config);
  }
}

function getStatus(markets: readonly Market[]): MarketPulseStatus {
  const liveCount = markets.filter((market) => market.source === "live").length;

  if (liveCount === markets.length) {
    return "live";
  }

  if (liveCount > 0) {
    return "partial";
  }

  return "fallback";
}

function getNote(status: MarketPulseStatus): string {
  if (status === "live") {
    return "Live market snapshot from the Twelve Data quote endpoint.";
  }

  if (status === "partial") {
    return "Some live quotes are temporarily unavailable; fallback placeholders are marked per market.";
  }

  return "Live quotes are unavailable; fallback placeholders are marked per market.";
}

function marketPulseResponse(markets: Market[]) {
  const status = getStatus(markets);

  return NextResponse.json(
    {
      status,
      provider: PROVIDER,
      updatedAt: new Date().toISOString(),
      note: getNote(status),
      markets,
    },
    {
      headers: RESPONSE_HEADERS,
    },
  );
}

export async function GET() {
  try {
    const apiKey = process.env.TWELVE_DATA_API_KEY;

    if (!apiKey) {
      return marketPulseResponse(MARKETS.map(fallbackMarket));
    }

    const markets = await Promise.all(
      MARKETS.map((config) => fetchLiveMarket(config, apiKey)),
    );

    return marketPulseResponse(markets);
  } catch {
    return marketPulseResponse(MARKETS.map(fallbackMarket));
  }
}
