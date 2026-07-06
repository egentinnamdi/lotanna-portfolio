"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

interface BouncingBoxProps {
  width?: number
  height?: number
  size?: number
  speed?: number
  colors?: string[]
  shape?: "circle" | "square"
  className?: string
}

export function BouncingBox({
  width = 400,
  height = 300,
  size = 40,
  speed = 220,
  colors = ["#f43f5e", "#3b82f6", "#eab308", "#22c55e", "#a855f7", "#f97316"],
  shape = "circle",
  className,
}: BouncingBoxProps) {
  const objRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obj = objRef.current
    if (!obj) return

    let x = Math.random() * (width - size)
    let y = Math.random() * (height - size)

    const angle = Math.random() * Math.PI * 2
    let vx = Math.cos(angle) * speed
    let vy = Math.sin(angle) * speed

    let colorIndex = Math.floor(Math.random() * colors.length)

    function nextColor() {
      let next = Math.floor(Math.random() * colors.length)
      if (next === colorIndex) next = (next + 1) % colors.length
      colorIndex = next
      gsap.to(obj, {
        backgroundColor: colors[colorIndex],
        duration: 0.35,
        ease: "power2.out",
      })
    }

    gsap.set(obj, { x, y, backgroundColor: colors[colorIndex] })

    let lastTime = performance.now()

    function tick(time: number) {
      const dt = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time

      x += vx * dt
      y += vy * dt

      let bounced = false
      const jitter = () => (Math.random() - 0.5) * speed * 0.7

      if (x <= 0) {
        x = 0
        vx = Math.abs(vx)
        vy += jitter()
        bounced = true
      } else if (x >= width - size) {
        x = width - size
        vx = -Math.abs(vx)
        vy += jitter()
        bounced = true
      }

      if (y <= 0) {
        y = 0
        vy = Math.abs(vy)
        vx += jitter()
        bounced = true
      } else if (y >= height - size) {
        y = height - size
        vy = -Math.abs(vy)
        vx += jitter()
        bounced = true
      }

      // keep overall speed constant so it never stalls or runs away
      const mag = Math.sqrt(vx * vx + vy * vy) || 1
      vx = (vx / mag) * speed
      vy = (vy / mag) * speed

      gsap.set(obj, { x, y })
      if (bounced) nextColor()
    }

    gsap.ticker.add(tick)
    return () => {
      gsap.ticker.remove(tick)
    }
  }, [width, height, size, speed, colors])

  return (
    <div
      style={{ width, height }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50",
        className
      )}
    >
      <div
        ref={objRef}
        style={{
          width: size,
          height: size,
          borderRadius: shape === "circle" ? "9999px" : "12px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}
