/**
 * Decorative time-series chart — a nod to the hourly electricity-consumption
 * forecasting work at GEKO. The line draws itself on load; cluster points pulse.
 */

const LINE =
  "M0,330 C60,310 90,255 145,265 C200,275 225,185 285,196 C345,207 365,140 425,152 C485,164 505,88 565,108 C625,128 655,55 725,76 C795,97 815,36 885,52 C955,68 985,16 1055,32 C1105,43 1165,10 1200,22";

const DOTS: [number, number][] = [
  [145, 265],
  [285, 196],
  [425, 152],
  [565, 108],
  [725, 76],
  [885, 52],
  [1055, 32],
];

export default function ForecastChart() {
  return (
    <svg
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      className="h-[40vh] w-full opacity-70"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF7A18" />
          <stop offset="55%" stopColor="#FF3D17" />
          <stop offset="100%" stopColor="#FFB347" />
        </linearGradient>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF3D17" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FF3D17" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* horizontal gridlines */}
      {[80, 160, 240, 320].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="1200"
          y2={y}
          stroke="#FF7A18"
          strokeOpacity="0.07"
          strokeDasharray="4 8"
        />
      ))}

      {/* area fill fades in after the line draws */}
      <path
        d={`${LINE} L1200,400 L0,400 Z`}
        fill="url(#areaGrad)"
        className="chart-area"
      />

      {/* the forecast line draws itself */}
      <path
        d={LINE}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="chart-line"
      />

      {/* cluster points pulse in, staggered */}
      {DOTS.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill="#FFB347"
          className="chart-dot"
          style={{ animationDelay: `${1.2 + i * 0.25}s, ${1.2 + i * 0.25}s` }}
        />
      ))}
    </svg>
  );
}
