import { profile } from "@/lib/resume-data";

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold text-white">
          {profile.name}
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
