import Section from "./Section";
import { Reveal } from "./motion";
import { profile, languages } from "@/lib/resume-data";

/** CEFR level → 0-1 scale, so languages render as a tiny bar chart. */
const CEFR: Record<string, number> = {
  A1: 1 / 6,
  A2: 2 / 6,
  B1: 3 / 6,
  B2: 4 / 6,
  C1: 5 / 6,
  C2: 1,
};

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-14 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-xl font-light leading-relaxed text-ash sm:text-2xl">
            {profile.objective}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-smoke">
            <span>📍 {profile.location}</span>
            {profile.phones.map((phone) => (
              <span key={phone}>{phone}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <h3 className="mb-6 font-mono text-sm tracking-widest text-flame">
            lang_proficiency.plot( )
          </h3>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-1.5 flex items-baseline justify-between font-mono text-xs">
                  <span className="text-ash">{lang.name}</span>
                  <span className="text-ember">{lang.level}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-ember-gradient"
                    style={{ width: `${(CEFR[lang.level] ?? 0.5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
