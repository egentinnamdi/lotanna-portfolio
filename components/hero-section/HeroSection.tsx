import Image from "next/image"
import React from "react"

export default function HeroSection() {
  return (
    <section id="home" className="flex h-[40vh] items-center lg:h-screen">
      <h2 className="font-sans text-xl text-[clamp(1rem,1.5vw,3rem)] leading-normal font-normal lg:w-2/4">
        Somewhere between a blank screen and a shipped product, Lotanna finds
        the interface that makes the whole thing feel obvious. Mobile, web, and
        everything users end up losing track of time in.
      </h2>

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
    </section>
  )
}
