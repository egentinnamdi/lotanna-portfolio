import { Project } from "@/lib/data"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-5 lg:min-h-[60vh]">
      <div className="h-64 rounded-2xl bg-gray-100 py-3 lg:h-72">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={300}
          className="size-full rounded-2xl object-contain"
        />
      </div>
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-medium lg:text-xl">{project.title}</h2>
        <span className="text-xl text-gray-400">{project.year}</span>
      </div>
      <p className="text-lg leading-normal tracking-tight text-black/80 lg:text-base">
        {project.excerpt}
      </p>

      <Button variant="link" className="self-start">
        <a target="_blank" href={project.liveUrl}>
          View Live Site
        </a>
        <ArrowUpRight />
      </Button>
    </div>
  )
}
