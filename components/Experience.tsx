import Section from "./Section";
import { experience } from "@/lib/resume-data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.period}`}
            className="rounded-lg border border-white/10 bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">
                {job.role}{" "}
                <span className="font-normal text-accent">@ {job.company}</span>
              </h3>
              <span className="text-sm text-slate-400">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">
              {job.context ? `${job.context} · ` : ""}
              {job.location}
            </p>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((point, i) => (
                <li key={i} className="flex gap-2 text-slate-300">
                  <span className="mt-1.5 text-accent">▹</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
