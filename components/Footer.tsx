import { profile } from "@/lib/resume-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <p className="text-center text-sm text-slate-500">
        © {profile.name} · Built with Next.js
      </p>
    </footer>
  );
}
