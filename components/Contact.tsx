import { Parallax, Reveal } from "./motion";
import { profile } from "@/lib/resume-data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 sm:py-44"
    >
      <Parallax speed={0.3} className="absolute inset-0">
        <div className="glow-orb absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 bg-ember/20" />
      </Parallax>

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.3em] text-flame">
            [06] — model.predict(next_role)
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-4xl font-black uppercase leading-tight text-white sm:text-6xl lg:text-7xl">
            Let&apos;s turn data
            <br />
            <span className="text-ember-flow">into decisions</span>
          </h2>
        </Reveal>

        <Reveal delay={240}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-12 inline-block rounded-full bg-ember-gradient px-10 py-4 font-mono text-base font-medium text-coal transition-transform duration-300 hover:scale-105 sm:text-lg"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm text-smoke">
            {profile.phones.map((phone) => (
              <span key={phone}>{phone}</span>
            ))}
            <span>{profile.location}</span>
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame underline-offset-4 transition-colors hover:text-ember hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
