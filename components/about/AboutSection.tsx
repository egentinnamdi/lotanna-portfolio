"use client"
import { Mail } from "lucide-react"
import React, { useRef } from "react"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { gsap } from "@/lib/gsap"
import { useRouter } from "next/navigation"

const images = [
  "/one.jpeg",
  "/two.jpeg",
  "/three.jpeg",
  "/four.jpeg",
  "/five.jpeg",
  "/six.jpeg",
  "/seven.jpeg",
  "/eight.jpeg",
]

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card")

      //   Starting Positions
      gsap.set(cards, {
        xPercent: 200,
        rotate: 8,
      })

      //   //   First Image Visible
      //   gsap.set(cards[0], {
      //     xPercent: 0,
      //     rotate: 0,
      //   })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 3,
          pin: true,
          pinSpacing: true,
          //   markers: true,
        },
      })

      cards.forEach((card, i) => {
        if (i === 0) {
          tl.to(card, {
            xPercent: -200,
            rotate: -10,
            duration: 1,
            ease: "none",
          })
        } else {
          tl.to(
            card,
            {
              xPercent: 0,
              rotate: 0,
              duration: 1,
              ease: "none",
            },
            "<"
          )

          tl.to(card, {
            xPercent: -200,
            rotate: -10,
            duration: 1,
            ease: "none",
          })
        }
      })
    },
    { scope: containerRef }
  )
  return (
    <section
      id="about"
      ref={containerRef}
      className="relative grid h-screen place-items-center self-stretch overflow-hidden bg-olive-50"
    >
      <h2 className="text-center text-6xl font-light lg:text-8xl">
        From concept
      </h2>
      <h2 className="hidden text-8xl font-light">to craft</h2>

      {images.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt={img}
          width={500}
          height={500}
          className="stack-card absolute top-1/2 left-1/2 h-125 w-87.5 -translate-x-1/2 -translate-y-1/2 rounded-3xl object-cover shadow-2xl"
        />
      ))}

      <Button
        onClick={() => router.push("#contact")}
        className="absolute bottom-10 left-1/2 flex h-12 -translate-x-1/2 items-center justify-between rounded-full p-1.5 lg:h-16 lg:w-64"
      >
        <Avatar className="size-10 lg:size-12">
          <AvatarImage src="/profile.png" className="size-full object-cover" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-sm lg:text-base">Book a chat</span>
        <div className="grid size-10 place-items-center rounded-full bg-white text-black lg:size-12">
          <Mail />
        </div>
      </Button>
    </section>
  )
}
