"use client";

import { useEffect, useMemo, useState } from "react";
import worldMap from "@/lib/world-map.json";
import Section from "./Section";
import { Counter } from "./motion";

type Stats = { total: number; countries: Record<string, number> };
type Tooltip = { x: number; y: number; name: string; count: number };

export default function VisitorAnalytics() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  // record one visit per browser session, then load the stats
  useEffect(() => {
    const visited = sessionStorage.getItem("fe_visited");
    fetch("/api/visits", visited ? undefined : { method: "POST" })
      .then((r) => r.json())
      .then((s: Stats) => {
        setStats(s);
        if (!visited) sessionStorage.setItem("fe_visited", "1");
      })
      .catch(() => setStats({ total: 0, countries: {} }));
  }, []);

  const counts = stats?.countries ?? {};
  const max = Math.max(1, ...Object.values(counts));

  const countryName = useMemo(() => {
    const fromMap = new Map(worldMap.countries.map((c) => [c.c, c.n]));
    let dn: Intl.DisplayNames | undefined;
    try {
      dn = new Intl.DisplayNames(["en"], { type: "region" });
    } catch {
      /* older browsers — fall back to the code itself */
    }
    return (cc: string) =>
      cc === "ZZ" ? "Other" : fromMap.get(cc) ?? dn?.of(cc) ?? cc;
  }, []);

  const ranked = Object.entries(counts).sort(([, a], [, b]) => b - a);

  const heat = (count: number) =>
    count > 0
      ? `rgba(255, 61, 23, ${0.18 + 0.62 * Math.sqrt(count / max)})`
      : "#170C07";

  return (
    <Section id="visitors" index="07" title="Visitor Analytics">
      {/* headline counter */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-sm tracking-widest text-flame">
            visits.count( )
          </p>
          <p className="mt-2 font-display text-5xl font-extrabold text-ember-flow sm:text-6xl">
            <Counter value={stats?.total ?? 0} duration={1400} />
          </p>
          <p className="mt-2 font-mono text-xs text-smoke">
            total visits · {ranked.length}{" "}
            {ranked.length === 1 ? "country" : "countries"}
          </p>
        </div>
        <p className="flex items-center gap-2 font-mono text-xs text-smoke">
          <span className="relative flex h-2 w-2">
            <span className="visit-ring absolute h-2 w-2 rounded-full bg-ember" />
            <span className="h-2 w-2 rounded-full bg-ember" />
          </span>
          live — geo via edge headers
        </p>
      </div>

      {/* world map */}
      <div
        className="relative overflow-hidden rounded-xl border border-ember/15 bg-char/60 p-2 sm:p-4"
        onMouseLeave={() => setTooltip(null)}
      >
        <svg
          viewBox="0 15 1000 395"
          className="h-auto w-full"
          role="img"
          aria-label="World map of visitor locations"
        >
          {worldMap.countries.map((country) => {
            const count = counts[country.c] ?? 0;
            return (
              <path
                key={country.c}
                d={country.d}
                fill={heat(count)}
                stroke="#FF7A18"
                strokeOpacity={0.12}
                strokeWidth={0.5}
                className="transition-[fill] duration-300 hover:stroke-flame hover:stroke-[1.2]"
                onMouseMove={(e) => {
                  const rect =
                    e.currentTarget.ownerSVGElement!.parentElement!.getBoundingClientRect();
                  setTooltip({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    name: country.n,
                    count,
                  });
                }}
              />
            );
          })}

          {/* pulsing markers on visited countries */}
          {worldMap.countries
            .filter((c) => (counts[c.c] ?? 0) > 0)
            .map((c) => {
              const count = counts[c.c] ?? 0;
              const r = 2.5 + Math.sqrt(count / max) * 4;
              return (
                <g key={`m-${c.c}`} pointerEvents="none">
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={r}
                    fill="#FFB347"
                    opacity={0.5}
                    className="visit-ring"
                  />
                  <circle cx={c.x} cy={c.y} r={r} fill="#FFB347" />
                </g>
              );
            })}
        </svg>

        {/* hover tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md border border-ember/40 bg-coal px-3 py-2 font-mono text-xs shadow-[0_4px_24px_rgba(255,61,23,0.25)]"
            style={{ left: tooltip.x, top: tooltip.y - 10 }}
          >
            <span className="text-white">{tooltip.name}</span>{" "}
            <span className="text-flame">
              — {tooltip.count > 0 ? `${tooltip.count} visit${tooltip.count === 1 ? "" : "s"}` : "no visits yet"}
            </span>
          </div>
        )}
      </div>

      {/* country-wise breakdown */}
      <div className="mt-10">
        <h3 className="mb-5 font-mono text-sm tracking-widest text-flame">
          visits.groupby(&quot;country&quot;)
        </h3>
        {ranked.length === 0 ? (
          <p className="font-mono text-sm text-smoke">
            collecting data — you are the first visitor ✦
          </p>
        ) : (
          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {ranked.map(([cc, count], i) => (
              <div key={cc} className="flex items-center gap-4">
                <span className="w-6 font-mono text-xs text-smoke">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-40 truncate text-sm text-ash">
                  {countryName(cc)}
                </span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-ember-gradient transition-all duration-700"
                    style={{ width: `${(count / max) * 100}%` }}
                  />
                </div>
                <span className="w-14 text-right font-mono text-xs text-flame">
                  {count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
