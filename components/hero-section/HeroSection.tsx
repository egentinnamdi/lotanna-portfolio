"use client"
import { useScreenWidth } from "@/hooks/useScreenWidth"
import Image from "next/image"

export default function HeroSection() {
  const { isMobile } = useScreenWidth()
  return (
    <section
      id="home"
      className="mt-40 flex h-[40vh] items-center lg:mt-0 lg:h-screen"
    >
      <h2 className="px-3 text-justify font-sans text-2xl leading-normal font-normal tracking-tighter lg:w-2/4 lg:px-0 lg:text-left lg:text-[28px]">
        Somewhere between a blank screen and a shipped product, Lotanna finds
        the interface that makes the whole thing feel obvious. Mobile, web, and
        everything users end up losing track of time in.
      </h2>

      {/* {!isMobile && (
        <div className="flex-1">
          <Image
            src="/hero-one-enhanced.png"
            alt="Playful hand-drawn illustration of a character lounging on a striped shape with a flower"
            width={1154}
            height={866}
            priority
            className="h-auto w-full"
          />
        </div>
      )} */}
    </section>
  )
}
