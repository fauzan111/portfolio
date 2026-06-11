import { profile } from "@/lib/resume-data";

const nav = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
  { label: "visitors", href: "#visitors" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ember/10 bg-coal/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight text-white"
        >
          FE<span className="text-ember">.</span>
        </a>
        <nav className="hidden items-center gap-7 font-mono text-xs tracking-wider sm:flex">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="text-smoke transition-colors duration-300 hover:text-flame"
            >
              <span className="text-ember/60">0{i + 1}.</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-ember/40 px-4 py-1.5 font-mono text-xs text-flame transition-all duration-300 hover:bg-ember hover:text-coal sm:block"
        >
          hire_me( )
        </a>
      </div>
    </header>
  );
}
