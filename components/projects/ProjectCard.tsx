import { Project } from "@/lib/data"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex min-h-[60vh] flex-col gap-5">
      <div className="h-96 rounded-2xl bg-gray-100 py-3">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={300}
          className="size-full rounded-2xl object-contain"
        />
      </div>
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-medium">{project.title}</h2>
        <span className="text-xl text-gray-400">{project.year}</span>
      </div>
      <p className="text-xl leading-normal text-black/80">{project.excerpt}</p>

      <Button variant="link" className="self-start">
        <a target="_blank" href={project.liveUrl}>
          View Live Site
        </a>
        <ArrowUpRight />
      </Button>
    </div>
  )
}
