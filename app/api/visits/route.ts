import { NextRequest, NextResponse } from "next/server";

/**
 * Visit counter with per-country breakdown.
 *
 * Storage: Upstash Redis via REST when UPSTASH_REDIS_REST_URL /
 * UPSTASH_REDIS_REST_TOKEN are set (add the free Upstash integration from the
 * Vercel Marketplace — it injects exactly these env vars). Falls back to an
 * in-memory store otherwise (fine for local dev; resets on restart).
 *
 * Country comes from Vercel's `x-vercel-ip-country` geo header — no external
 * geo-IP service needed.
 */

const TOTAL_KEY = "visits:total";
const COUNTRIES_KEY = "visits:countries";

// Supports both naming schemes: the direct Upstash integration injects
// UPSTASH_REDIS_REST_*, the Vercel Marketplace one injects KV_REST_API_*.
const redisUrl =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const redisToken =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
const hasRedis = Boolean(redisUrl && redisToken);

type Stats = { total: number; countries: Record<string, number> };

/* ── upstash REST pipeline ─────────────────────────────── */
async function redis(commands: (string | number)[][]) {
  const res = await fetch(`${redisUrl}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Upstash error ${res.status}`);
  return (await res.json()) as { result: unknown }[];
}

function parseHash(flat: unknown): Record<string, number> {
  const countries: Record<string, number> = {};
  if (Array.isArray(flat)) {
    for (let i = 0; i < flat.length; i += 2) {
      countries[String(flat[i])] = Number(flat[i + 1]) || 0;
    }
  }
  return countries;
}

/* ── in-memory fallback (local dev) ────────────────────── */
const g = globalThis as unknown as { __visits?: Stats };
g.__visits ??= { total: 0, countries: {} };
const mem = g.__visits;

/* ── handlers ──────────────────────────────────────────── */
export async function GET() {
  if (hasRedis) {
    const [total, hash] = await redis([
      ["GET", TOTAL_KEY],
      ["HGETALL", COUNTRIES_KEY],
    ]);
    return NextResponse.json({
      total: Number(total.result) || 0,
      countries: parseHash(hash.result),
    });
  }
  return NextResponse.json(mem);
}

export async function POST(req: NextRequest) {
  let country = (req.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
  if (!/^[A-Z]{2}$/.test(country)) {
    // no geo header: local dev gets a demo country, prod counts as "ZZ" (Other)
    country = process.env.NODE_ENV === "development" ? "IN" : "ZZ";
  }

  if (hasRedis) {
    const [total, hash] = await redis([
      ["INCR", TOTAL_KEY],
      ["HINCRBY", COUNTRIES_KEY, country, 1],
      ["HGETALL", COUNTRIES_KEY],
    ]).then((r) => [r[0], r[2]]);
    return NextResponse.json({
      total: Number(total.result) || 0,
      countries: parseHash(hash.result),
    });
  }

  mem.total += 1;
  mem.countries[country] = (mem.countries[country] ?? 0) + 1;
  return NextResponse.json(mem);
}
