"use client"
import { Navigation } from "@/components/navigation"
import { FluidBackground } from "@/components/fluid-background"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const FadePortfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen relative font-[var(--font-plus-jakarta)]">
      {/* Fluid background only for hero section */}
      <FluidBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default FadePortfolio
