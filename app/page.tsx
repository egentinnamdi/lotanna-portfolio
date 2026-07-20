import ContactSection from "@/components/contact/ContactSection"
import Footer from "@/components/footer/Footer"
import HeroSection from "@/components/hero-section/HeroSection"
import NavBar from "@/components/nav-bar/NavBar"
import ProjectsSection from "@/components/projects/ProjectsSection"
import TestimonialsSection from "@/components/testimonials/TestimonialsSection"

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="w-11/12 lg:w-11/12">
        <HeroSection />
        <ProjectsSection />
        <TestimonialsSection />
      </div>
      <ContactSection />
      <Footer />
    </>
  )
}

{
  /* <AboutSection /> */
}
