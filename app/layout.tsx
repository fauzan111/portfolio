import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/resume-data";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.objective.slice(0, 155),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
