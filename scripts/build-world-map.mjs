/**
 * One-off generator: downloads the world-atlas 110m countries TopoJSON,
 * projects it to a 1000x500 equirectangular SVG space, and writes compact
 * path data + centroids keyed by ISO alpha-2 codes to lib/world-map.json.
 *
 * Run: node scripts/build-world-map.mjs
 */
import { writeFileSync } from "node:fs";
import { feature } from "topojson-client";

const WORLD_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";
const ISO_URL =
  "https://cdn.jsdelivr.net/gh/lukes/ISO-3166-Countries-with-Regional-Codes@master/all/all.json";

const [topo, iso] = await Promise.all(
  [WORLD_URL, ISO_URL].map((u) => fetch(u).then((r) => r.json()))
);

// numeric "840" -> alpha-2 "US"
const numToAlpha2 = Object.fromEntries(
  iso.map((e) => [e["country-code"], e["alpha-2"]])
);

const W = 1000;
const H = 500;
const project = ([lon, lat]) => [
  ((lon + 180) / 360) * W,
  ((90 - lat) / 180) * H,
];
const r1 = (n) => Math.round(n * 10) / 10;

const fc = feature(topo, topo.objects.countries);
const countries = [];

for (const f of fc.features) {
  const num = String(f.id).padStart(3, "0");
  if (num === "010") continue; // Antarctica — crop for a tighter map
  const alpha2 = numToAlpha2[num];
  if (!alpha2) continue;

  const polys =
    f.geometry.type === "Polygon"
      ? [f.geometry.coordinates]
      : f.geometry.coordinates;

  let d = "";
  let largestRing = null;
  for (const poly of polys) {
    for (const ring of poly) {
      const pts = ring.map(project);
      // "M x,y x,y ... Z" — pairs after M are implicit linetos
      d +=
        "M" + pts.map(([x, y]) => `${r1(x)},${r1(y)}`).join(" ") + "Z";
      if (!largestRing || ring.length > largestRing.length) largestRing = pts;
    }
  }

  // marker anchor = mean of the largest ring's points
  const cx = largestRing.reduce((s, p) => s + p[0], 0) / largestRing.length;
  const cy = largestRing.reduce((s, p) => s + p[1], 0) / largestRing.length;

  countries.push({
    c: alpha2,
    n: f.properties.name,
    d,
    x: r1(cx),
    y: r1(cy),
  });
}

const out = { w: W, h: H, countries };
writeFileSync("lib/world-map.json", JSON.stringify(out));
console.log(
  `wrote lib/world-map.json — ${countries.length} countries, ${(
    JSON.stringify(out).length / 1024
  ).toFixed(0)}KB`
);
