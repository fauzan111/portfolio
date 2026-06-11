import Section from "./Section";
import { education } from "@/lib/resume-data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((item) => (
          <div
            key={item.degree}
            className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border border-white/10 bg-surface p-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {item.institution}
                {item.note ? ` · ${item.note}` : ""}
              </p>
            </div>
            <span className="text-sm text-slate-400">{item.period}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
