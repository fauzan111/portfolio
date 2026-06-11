import Section from "./Section";
import { profile, languages } from "@/lib/resume-data";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="leading-relaxed text-slate-300">{profile.objective}</p>

      <h3 className="mb-3 mt-8 text-lg font-semibold text-white">Languages</h3>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <span
            key={lang.name}
            className="rounded-md border border-white/10 bg-surface px-3 py-1.5 text-sm text-slate-300"
          >
            {lang.name}{" "}
            <span className="font-semibold text-accent">{lang.level}</span>
          </span>
        ))}
      </div>
    </Section>
  );
}
