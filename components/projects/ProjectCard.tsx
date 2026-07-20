import { Project } from "@/lib/data"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowUpRight, Lock } from "lucide-react"
import { Separator } from "../ui/separator"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 lg:min-h-[60vh]">
      <div className="h-64 overflow-hidden rounded-2xl bg-gray-100 lg:h-80">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={300}
          className="size-full rounded-2xl object-fill transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold lg:text-2xl">{project.title}</h2>
        <span className="text-base text-gray-400">{project.year}</span>
      </div>
      <p className="font-lora text-lg leading-normal font-medium tracking-tighter text-black/80 lg:text-base">
        {project.excerpt}
      </p>

      <div className="flex gap-4">
        <Button variant="link" className="self-start px-0 text-gray-500">
          <Lock />
          <span>Case Study</span>
        </Button>
        <Separator orientation="vertical" className="w-0.5!" />
        <Button variant="link" className="self-start px-0 text-gray-500">
          <a target="_blank" href={project.liveUrl}>
            View Site
          </a>
          <ArrowUpRight />
        </Button>
      </div>
    </div>
  )
}
