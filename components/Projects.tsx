import Section from "./Section";
import { projects } from "@/lib/resume-data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-white/10 bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>
            {project.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-white/5 px-2 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
