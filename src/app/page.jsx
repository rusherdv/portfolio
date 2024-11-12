import HeroSection from "@/components/sections/hero";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import GoUp from "@/components/go-up";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <main className={`bg-black relative`}>
      <Header />
      <GoUp />
      <div>
        <HeroSection />
      </div>
      <div className="mx-auto">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
