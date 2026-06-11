import { Counter, Reveal } from "./motion";

/** Headline metrics pulled from the experience & project outcomes. */
const STATS = [
  {
    value: 15,
    suffix: "%",
    prefix: "+",
    label: "RMSE / R² lift via cluster-based forecasting",
  },
  {
    value: 88,
    suffix: "%",
    label: "F1-score — BERT sentiment on 360K+ reviews",
  },
  {
    value: 78.9,
    decimals: 1,
    suffix: "%",
    label: "mAP — YOLOv8 visual quality control",
  },
  {
    value: 360,
    suffix: "K+",
    label: "Amazon reviews processed with NLP",
  },
];

export default function StatsBar() {
  return (
    <div className="relative border-y border-ember/15 bg-char/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-ember/10 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 120} className="px-6 py-10">
            <p className="font-display text-4xl font-extrabold text-ember-flow sm:text-5xl">
              <Counter
                value={stat.value}
                decimals={stat.decimals ?? 0}
                prefix={stat.prefix ?? ""}
                suffix={stat.suffix}
              />
            </p>
            <p className="mt-3 font-mono text-xs leading-relaxed text-smoke">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
