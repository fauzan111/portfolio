import Section from "./Section";
import { Reveal } from "./motion";
import { projects } from "@/lib/resume-data";

export default function Projects() {
  return (
    <Section id="projects" index="04" title="Projects" className="grid-bg">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={(i % 2) * 120}
            // first project gets the full-width feature slot
            className={i === 0 ? "sm:col-span-2" : ""}
          >
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-surface p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-[0_12px_50px_-12px_rgba(255,61,23,0.35)] sm:p-9">
              {/* index watermark */}
              <span className="pointer-events-none absolute -right-3 -top-6 font-display text-8xl font-black text-white/[0.03] transition-colors duration-500 group-hover:text-ember/10">
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="font-mono text-xs text-ember">
                proj_{String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-flame sm:text-xl">
                {project.name}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ash">
                {project.description}
              </p>

              {project.tags && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-ember/10 px-2.5 py-1 font-mono text-xs text-flame"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* ember sweep along the bottom on hover */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-ember-gradient transition-all duration-700 group-hover:w-full" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
