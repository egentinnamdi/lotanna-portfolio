import AboutSection from "@/components/about/AboutSection"
import ContactSection from "@/components/contact/ContactSection"
import Footer from "@/components/footer/Footer"
import HeroSection from "@/components/hero-section/HeroSection"
import NavBar from "@/components/nav-bar/NavBar"
import ProjectsSection from "@/components/projects/ProjectsSection"
import TestimonialsSection from "@/components/testimonials/TestimonialsSection"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="w-11/12 lg:w-10/12">
        <HeroSection />
        <ProjectsSection />
      </div>
      <AboutSection />
      <div className="w-10/12">
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}
