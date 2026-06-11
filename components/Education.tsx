import Section from "./Section";
import { Reveal } from "./motion";
import { education } from "@/lib/resume-data";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 150}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/5 bg-surface p-8 transition-colors duration-500 hover:border-ember/40">
              <p className="font-mono text-xs tracking-widest text-flame">
                {item.period}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-white">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm text-ash">
                {item.institution}
                {item.note ? (
                  <span className="ml-2 rounded bg-ember/10 px-2 py-0.5 font-mono text-xs text-flame">
                    {item.note}
                  </span>
                ) : null}
              </p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-ember-gradient transition-all duration-700 group-hover:w-full" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
