import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AISecurity from "@/components/AISecurity";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import LanguagesHobbies from "@/components/LanguagesHobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CyberBackground3D from "@/components/CyberBackground3D";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a] text-zinc-100 selection:bg-red-500/30 selection:text-red-200 overflow-x-hidden relative">
      {/* Dynamic 3D Cyber Security Background with floating nodes, laser connections & threat geometry */}
      <CyberBackground3D />
      
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <AISecurity />
      <Certifications />
      <Education />
      <LanguagesHobbies />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}