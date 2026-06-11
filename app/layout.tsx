import type { Metadata, Viewport } from "next";
import { Unbounded, Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile, skills, education } from "@/lib/resume-data";

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sans = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

/**
 * Canonical site URL. Resolution order:
 * 1. NEXT_PUBLIC_SITE_URL (set this once you have a custom domain)
 * 2. Vercel's production URL (auto-injected on every deploy)
 * 3. localhost for dev
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const TITLE = `${profile.name} — ${profile.title} | Machine Learning & MLOps`;
const DESCRIPTION = `${profile.name} is a ${profile.title} in ${profile.location}, specialising in time-series forecasting, machine learning, NLP and MLOps. Python · SQL · AWS · XGBoost · BERT · YOLOv8.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${profile.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Fauzan Ejaz",
    "Data Scientist",
    "Machine Learning Engineer",
    "MLOps",
    "Time Series Forecasting",
    "Data Scientist Napoli",
    "Data Scientist Italy",
    "Python",
    "SQL",
    "XGBoost",
    "BERT",
    "YOLOv8",
    "NLP",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
    firstName: "Fauzan",
    lastName: "Ejaz",
    images: [
      {
        url: "/fauzan-ejaz.jpg",
        width: 413,
        height: 517,
        alt: `Portrait of ${profile.name}, ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/fauzan-ejaz.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0505",
  width: "device-width",
  initialScale: 1,
};

/** schema.org Person — rich result for recruiter searches. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: DESCRIPTION,
  email: `mailto:${profile.email}`,
  telephone: profile.phones[0],
  url: SITE_URL,
  image: `${SITE_URL}/fauzan-ejaz.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Napoli",
    addressCountry: "IT",
  },
  sameAs: profile.links.map((link) => link.href),
  alumniOf: education.map((item) => ({
    "@type": "EducationalOrganization",
    name: item.institution,
  })),
  knowsAbout: skills.find((g) => g.category === "Technical")?.items ?? [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* film grain over everything */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
