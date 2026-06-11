import Section from "./Section";
import { profile } from "@/lib/resume-data";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-lg border border-white/10 bg-surface p-8">
        <p className="text-slate-300">
          Feel free to reach out for collaborations, roles, or just a chat about
          data science.
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex flex-wrap gap-2">
            <dt className="w-24 font-semibold text-slate-400">Email</dt>
            <dd>
              <a
                href={`mailto:${profile.email}`}
                className="text-accent hover:underline"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="w-24 font-semibold text-slate-400">Phone</dt>
            <dd className="text-slate-300">{profile.phones.join(" · ")}</dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="w-24 font-semibold text-slate-400">Location</dt>
            <dd className="text-slate-300">{profile.location}</dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="w-24 font-semibold text-slate-400">Links</dt>
            <dd className="flex flex-wrap gap-3">
              {profile.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
