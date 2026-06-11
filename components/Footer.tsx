import { profile } from "@/lib/resume-data";

export default function Footer() {
  return (
    <footer className="border-t border-ember/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-smoke">
        <p>
          © {profile.name} <span className="text-ember">·</span> forged in
          Next.js
        </p>
        <p>
          plt.show(<span className="text-flame">&quot;portfolio&quot;</span>)
        </p>
      </div>
    </footer>
  );
}
