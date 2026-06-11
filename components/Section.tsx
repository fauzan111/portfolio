import { Reveal } from "./motion";

export default function Section({
  id,
  index,
  title,
  children,
  className = "",
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4 sm:mb-16">
            <span className="font-mono text-sm text-ember">[{index}]</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              {title}
            </h2>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-ember/40 to-transparent sm:block" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
