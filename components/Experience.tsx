import Section from "./Section";
import { Reveal } from "./motion";
import { experience } from "@/lib/resume-data";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <div className="relative ml-2 border-l border-ember/25 pl-8 sm:ml-4 sm:pl-12">
        {experience.map((job, i) => (
          <Reveal
            key={`${job.company}-${job.period}`}
            delay={i * 150}
            className="relative pb-16 last:pb-0"
          >
            {/* timeline node */}
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-ember bg-coal shadow-[0_0_18px_rgba(255,61,23,0.8)] sm:-left-[57px]" />

            <p className="font-mono text-xs tracking-widest text-flame">
              {job.period.toUpperCase()} · {job.location.toUpperCase()}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
              {job.role}
            </h3>
            <p className="mt-1 font-mono text-sm text-ember">
              @ {job.company}
              {job.context ? ` — ${job.context}` : ""}
            </p>

            <ul className="mt-6 space-y-4">
              {job.highlights.map((point, j) => (
                <li
                  key={j}
                  className="flex gap-3 rounded-lg border border-white/5 bg-surface/60 p-4 leading-relaxed text-ash transition-colors duration-300 hover:border-ember/30"
                >
                  <span className="font-mono text-ember">▸</span>
                  <span className="text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
