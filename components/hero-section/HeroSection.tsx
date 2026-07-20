"use client"
import { useScreenWidth } from "@/hooks/useScreenWidth"
import Image from "next/image"

export default function HeroSection() {
  const { isMobile } = useScreenWidth()
  return (
    <section
      id="home"
      className="mt-40 flex h-[40vh] items-center lg:mt-16 lg:h-[55vh]"
    >
      <h2 className="px-3 text-justify font-lora text-2xl leading-normal font-semibold tracking-wide lg:w-2/4 lg:px-0 lg:text-left lg:text-3xl">
        Lotanna turns complex problems into elegant solutions — and designs
        digital experiences you might lose hours in.
      </h2>
    </section>
  )
}
