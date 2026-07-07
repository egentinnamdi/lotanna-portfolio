"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BouncingBoxProps {
  images: string[]
  width?: number | string
  height?: number | string
  objectSize?: number
  speed?: number // pixels per second
  className?: string
  rounded?: boolean
}

export function BouncingBox({
  images,
  width = "100%",
  height = 400,
  objectSize = 80,
  speed = 280,
  className,
  rounded = true,
}: BouncingBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const objRef = useRef<HTMLDivElement>(null)
  const imgIdxRef = useRef(0)
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    const box = boxRef.current
    const obj = objRef.current
    if (!box || !obj || images.length === 0) return

    const ctx = gsap.context(() => {
      const pickImage = () => {
        if (images.length <= 1) return 0
        let next = Math.floor(Math.random() * images.length)
        if (next === imgIdxRef.current) next = (next + 1) % images.length
        imgIdxRef.current = next
        return next
      }

      let x = 0
      let y = 0

      let lastEdge = -1
      const bounce = () => {
        const rect = box.getBoundingClientRect()
        const maxX = Math.max(0, rect.width - objectSize)
        const maxY = Math.max(0, rect.height - objectSize)

        // Pick a random edge (0=left, 1=right, 2=top, 3=bottom) different from last
        let edge = Math.floor(Math.random() * 4)
        if (edge === lastEdge) edge = (edge + 1) % 4
        lastEdge = edge

        let targetX = 0
        let targetY = 0
        if (edge === 0) {
          targetX = 0
          targetY = Math.random() * maxY
        } else if (edge === 1) {
          targetX = maxX
          targetY = Math.random() * maxY
        } else if (edge === 2) {
          targetX = Math.random() * maxX
          targetY = 0
        } else {
          targetX = Math.random() * maxX
          targetY = maxY
        }

        const dx = targetX - x
        const dy = targetY - y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const duration = Math.max(0.3, dist / speed)

        gsap.to(obj, {
          x: targetX,
          y: targetY,
          duration,
          ease: "none",
          onComplete: () => {
            x = targetX
            y = targetY
            const nextIdx = pickImage()
            gsap
              .timeline()
              .to(obj, { scale: 0.7, duration: 0.12, ease: "power2.in" })
              .add(() => setImgIdx(nextIdx))
              .to(obj, { scale: 1, duration: 0.18, ease: "back.out(2)" })
            bounce()
          },
        })
      }

      bounce()
    }, box)

    return () => ctx.revert()
  }, [images, objectSize, speed])

  return (
    <div
      ref={boxRef}
      className={cn(
        "relative overflow-hidden rounded-lg border-2 border-border bg-card",
        className
      )}
    >
      <div
        ref={objRef}
        className="absolute top-0 left-0"
        style={{
          width: objectSize,
          height: objectSize,
          willChange: "transform",
        }}
      >
        {images[imgIdx] && (
          <Image
            src={images[imgIdx]}
            alt={images[imgIdx]}
            draggable={false}
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: rounded ? "9999px" : "var(--radius-md)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  )
}

export default BouncingBox
