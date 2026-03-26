// Blocks
import HeroSection from "@/app/Blocks/Hero";
import AboutSection from "@/app/Blocks/About";
import SkillsSection from "@/app/Blocks/Skills";
import ProjectsSection from "@/app/Blocks/Projects";
import ContactSection from "@/app/Blocks/Contact";

export default function Home() {

  return (
    <div>

      {/* Hero-Section Top */}
      <HeroSection />    

      {/* About-Section */}
      <AboutSection />    

      {/* Tech Stack/SKills-Section  */}
      <SkillsSection />    

      {/* Projects-Section  */}
      <ProjectsSection />    

      {/* Contact-Section  */}
      <ContactSection />    

    </div>
  );
}
