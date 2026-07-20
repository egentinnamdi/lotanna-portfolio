import ProjectCard from "./ProjectCard"
import { Project } from "@/lib/data"

export default function ({ projects }: { projects: Array<Project> }) {
  return (
    <div className="flex min-h-screen grid-cols-3 flex-col gap-x-10 gap-y-10 lg:grid lg:gap-x-10">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
  )
}
