import HeroSection from "@/components/hero-section/HeroSection"
import NavBar from "@/components/nav-bar/NavBar"
import ProjectsSection from "@/components/projects/ProjectsSection"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="w-10/12 py-6">
      <NavBar />
      <HeroSection />
      <ProjectsSection />
    </div>
  )
}
