"use client"

import { useRef } from "react"
import { gsap } from "gsap"

type DistortTextProps = {
  text: string
  className?: string
  duration?: number
}

export default function DistortText({
  text,
  className = "",
  duration = 0.6,
}: DistortTextProps) {
  const letters = useRef<(HTMLSpanElement | null)[]>([])

  const animate = () => {
    letters.current.forEach((letter, i) => {
      if (!letter) return

      const delay = i * 0.035

      gsap.killTweensOf(letter)

      const tl = gsap.timeline({
        delay,
      })

      tl.to(letter, {
        duration: duration * 0.3,
        y: gsap.utils.random(-10, 10),
        x: gsap.utils.random(-6, 6),
        rotateZ: gsap.utils.random(-10, 10),
        skewX: gsap.utils.random(-18, 18),
        skewY: gsap.utils.random(-8, 8),
        scaleX: gsap.utils.random(0.75, 1.25),
        scaleY: gsap.utils.random(0.8, 1.2),
        ease: "power2.out",
      })

      tl.to(letter, {
        duration,
        x: 0,
        y: 0,
        rotate: 0,
        skewX: 0,
        skewY: 0,
        scaleX: 1,
        scaleY: 1,
        ease: "elastic.out(1,0.45)",
      })
    })
  }

  return (
    <div className={`overflow-visible ${className}`} onMouseEnter={animate}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            letters.current[i] = el
          }}
          className="inline-block will-change-transform"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
