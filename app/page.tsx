import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import VisitorAnalytics from "@/components/VisitorAnalytics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <VisitorAnalytics />
      </main>
      <Footer />
    </>
  );
}
