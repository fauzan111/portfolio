import Section from "./Section";
import { Reveal } from "./motion";
import { skills } from "@/lib/resume-data";

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  // content duplicated so the -50% translate loops seamlessly
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className={`marquee-track ${reverse ? "reverse" : ""} gap-4 pr-4`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-ember/20 bg-surface px-5 py-2.5 font-mono text-sm text-ash transition-colors hover:border-flame hover:text-flame"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const technical = skills.find((g) => g.category === "Technical")?.items ?? [];
  const soft = skills.find((g) => g.category === "Soft Skills")?.items ?? [];
  const mid = Math.ceil(technical.length / 2);

  return (
    <Section id="skills" index="02" title="Skills" className="grid-bg">
      <Reveal>
        <p className="mb-8 font-mono text-sm tracking-widest text-flame">
          stack.stream( ) — hover to pause
        </p>
      </Reveal>

      <Reveal>
        <MarqueeRow items={technical.slice(0, mid)} />
        <MarqueeRow items={technical.slice(mid)} reverse />
      </Reveal>

      <Reveal delay={150}>
        <h3 className="mb-5 mt-14 font-mono text-sm tracking-widest text-flame">
          soft_skills[ ]
        </h3>
        <div className="flex flex-wrap gap-3">
          {soft.map((item) => (
            <span
              key={item}
              className="rounded-md border-l-2 border-ember bg-surface px-4 py-2 text-sm text-ash"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
