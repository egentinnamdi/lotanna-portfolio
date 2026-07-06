import React from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "@/lib/data"

export default function () {
  return (
    <div className="flex min-h-screen grid-cols-3 flex-col gap-x-10 gap-y-10 lg:grid">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
  )
}
