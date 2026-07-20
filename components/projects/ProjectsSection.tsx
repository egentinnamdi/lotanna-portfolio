"use client"
import { useState } from "react"
import ProjectsGridView from "./ProjectsGridView"
import ProjectTab from "./ProjectTab"
import { projects as projectsData } from "@/lib/data"
import { Tabs } from "@/lib/types"

export default function ProjectsSection() {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.all)
  const [projects, setProjects] = useState(projectsData)

  // Handle Tabs Function
  function handleTab(clickedTab: Tabs) {
    setCurrentTab(clickedTab)

    switch (clickedTab) {
      case Tabs.mobile:
        setProjects(projectsData.filter((item) => item.type === Tabs.mobile))
        break
      case Tabs.webapp:
        setProjects(projectsData.filter((item) => item.type === Tabs.webapp))
        break
      case Tabs.website:
        setProjects(projectsData.filter((item) => item.type === Tabs.website))
        break
      default:
        setProjects(projectsData)
    }
  }

  return (
    <section
      id="projects"
      className="flex flex-col border border-white lg:gap-10"
    >
      <ProjectTab currentTab={currentTab} handleTab={handleTab} />
      <ProjectsGridView projects={projects} />
    </section>
  )
}
