"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export default function HeroTitle() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
      })

      tl.fromTo(
        ".bolt",
        {
          xPercent: -180,
          opacity: 0,
          scaleX: 0.8,
        },
        {
          xPercent: 180,
          opacity: 1,
          scaleX: 1,
          duration: 0.45,
          ease: "power3.out",
        }
      )

        .to(
          ".flash",
          {
            opacity: 1,
            scale: 1.15,
            duration: 0.08,
            repeat: 1,
            yoyo: true,
            ease: "power2.out",
          },
          "<"
        )

        .to(
          ".title",
          {
            textShadow:
              "0 0 8px rgba(96,165,250,.4),0 0 30px rgba(96,165,250,.25)",
            duration: 0.1,
            repeat: 1,
            yoyo: true,
          },
          "<"
        )

        .to(
          ".title",
          {
            x: 1.5,
            duration: 0.03,
            repeat: 5,
            yoyo: true,
            ease: "none",
          },
          "<"
        )

        .to(".bolt", {
          opacity: 0,
          duration: 0.08,
        })
    },
    { scope: container }
  )

  return (
    <div className="relative flex h-2/4 min-h-screen items-center justify-center overflow-hidden bg-orange-300 px-6">
      <div
        ref={container}
        className="bg-o relative inline-flex items-center justify-center"
      >
        {/* Glow */}
        <div className="flash absolute inset-0 rounded-full bg-blue-400/15 opacity-0 blur-[120px]" />

        {/* Lightning */}
        <div className="bolt pointer-events-none absolute top-1/2 left-0 h-0.75 w-64 -translate-y-1/2 -skew-x-12 rounded-full bg-slate-900 shadow-[0_0_30px_rgba(96,165,250,.6)]" />

        {/* Lightning trail */}
        <div className="bolt pointer-events-none absolute top-1/2 left-0 h-12 w-40 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl" />

        <h2 className="title relative z-10 text-center text-[clamp(4rem,6vw,11rem)] leading-[0.9] font-black tracking-tight text-slate-900 select-none">
          I am Lotanna
        </h2>
      </div>
    </div>
  )
}
