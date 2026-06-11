import Image from "next/image";
import { profile } from "@/lib/resume-data";
import { Parallax } from "./motion";
import ForecastChart from "./ForecastChart";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-bg relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-24 pt-32"
    >
      {/* ember atmosphere — drifts slower than the page */}
      <Parallax speed={0.35} className="absolute inset-0">
        <div className="glow-orb absolute -left-32 top-16 h-96 w-96 bg-ember/25" />
        <div
          className="glow-orb absolute -right-24 top-1/3 h-80 w-80 bg-flame/15"
          style={{ animationDelay: "-4s" }}
        />
      </Parallax>

      {/* forecast chart — mid layer */}
      <Parallax
        speed={0.18}
        className="pointer-events-none absolute inset-x-0 bottom-0"
      >
        <ForecastChart />
      </Parallax>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto]">
        {/* copy — front layer */}
        <div className="hero-stagger">
          <p className="mb-6 font-mono text-sm tracking-[0.3em] text-flame">
            // {profile.title.toUpperCase()} — {profile.location.toUpperCase()}
          </p>

          <h1 className="font-display text-[13vw] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-9xl">
            Fauzan
            <br />
            <span className="text-ember-flow">Ejaz</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-ash">
            Turning raw signals into{" "}
            <span className="font-medium text-flame">forecasts</span>,{" "}
            <span className="font-medium text-flame">clusters</span> and{" "}
            <span className="font-medium text-flame">decisions</span> — machine
            learning &amp; MLOps for the real world.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group rounded-full bg-ember-gradient px-7 py-3 font-mono text-sm font-medium text-coal transition-transform duration-300 hover:scale-105"
            >
              view_projects( ) →
            </a>
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ember/30 px-7 py-3 font-mono text-sm text-ash transition-all duration-300 hover:border-flame hover:text-flame"
              >
                {link.label.toLowerCase()}
              </a>
            ))}
          </div>

          <div className="scroll-hint mt-20 flex items-center gap-3 font-mono text-xs text-smoke">
            <span className="inline-block h-8 w-px bg-gradient-to-b from-ember to-transparent" />
            scroll to explore the data ↓
          </div>
        </div>

        {/* portrait — ember-framed, tilts straight on hover */}
        <Parallax speed={-0.08} className="hidden justify-self-center lg:block">
          <div className="group relative w-64 rotate-3 transition-transform duration-500 hover:rotate-0 xl:w-72">
            <div className="absolute -inset-1.5 rounded-2xl bg-ember-gradient opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-90" />
            <div className="relative overflow-hidden rounded-2xl border border-flame/40">
              <Image
                src="/fauzan-ejaz.jpg"
                alt={`Portrait of ${profile.name}, ${profile.title} based in ${profile.location}`}
                width={413}
                height={517}
                priority
                className="h-auto w-full saturate-[0.85] transition-all duration-700 group-hover:saturate-100"
              />
              {/* ember wash over the photo */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ember/25 via-transparent to-transparent mix-blend-overlay" />
            </div>
            <p className="mt-4 text-center font-mono text-xs text-smoke">
              fig. 1 — the data scientist
            </p>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
