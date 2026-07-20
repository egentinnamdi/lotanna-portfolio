"use client"
import { Testimonial } from "@/lib/data"
import { gsap, useGSAP } from "@/lib/gsap"
import Image from "next/image"
import React, { useRef } from "react"

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>(null)

  useGSAP(() => {
    tl.current = gsap.timeline({
      paused: true,
    })

    tl.current.to(cardRef.current, {
      rotateY: 180,
      //   z: 50,
      duration: 0.7,
      ease: "power3.inOut",
    })
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="perspective-[1000px]"
      onMouseEnter={() => tl.current?.play()}
      onMouseLeave={() => tl.current?.reverse()}
    >
      <div
        ref={cardRef}
        className="relative min-h-[25vh] lg:min-h-[38vh]"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex items-center justify-center border border-black/15 bg-gray-50"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="size-2/4">
            <Image
              src={testimonial.logo}
              alt={testimonial.name}
              width={500}
              height={500}
              className="size-full object-contain"
            />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-md border border-black/15 bg-white p-5 shadow-md lg:p-7"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-sm lg:text-base">{testimonial.quote}</p>

          <div>
            <h3 className="text-sm font-medium lg:text-base">
              {testimonial.name}
            </h3>

            <span className="text-xs text-black/50 lg:text-sm">
              {testimonial.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
