import { profile } from "@/lib/resume-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex w-full max-w-4xl flex-col items-start gap-4 px-6 pb-10 pt-20"
    >
      <p className="text-sm font-medium text-accent">Hi, my name is</p>
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        {profile.name}
      </h1>
      <h2 className="text-2xl font-semibold text-slate-400 sm:text-4xl">
        {profile.title} · {profile.location}
      </h2>
      <p className="mt-2 max-w-2xl leading-relaxed text-slate-300">
        {profile.objective}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        {profile.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
