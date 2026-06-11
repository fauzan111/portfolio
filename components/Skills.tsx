import Section from "./Section";
import { skills } from "@/lib/resume-data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-lg font-semibold text-white">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-surface px-3 py-1.5 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
