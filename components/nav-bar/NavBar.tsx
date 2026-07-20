"use client"
import { useRef, useState } from "react"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { useScreenWidth } from "@/hooks/useScreenWidth"
import Link from "next/link"
import { useNigerianTime } from "@/hooks/useNigerianTime"

const links = ["home", "projects", "testimonials", "contact"]

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home")
  const { isMobile } = useScreenWidth()
  const navRef = useRef<HTMLDivElement>(null)
  const time = useNigerianTime()

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section")

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,

        start: "top center",

        end: "bottom center",

        onEnter: () => {
          setActiveSection(section.id)
        },

        onUpdate: (self) => {
          if (self.direction === 1) {
            // scrolling down
            gsap.to(navRef.current, {
              yPercent: -100,
              duration: 1,
              ease: "power3.out",
            })
          } else {
            // scrolling up
            gsap.to(navRef.current, {
              yPercent: 0,
              duration: 1,
              ease: "power3.out",
            })
          }
        },

        onEnterBack: () => {
          setActiveSection(section.id)
        },
      })
    })
  })

  return (
    <div
      ref={navRef}
      className="fixed z-20 flex w-full items-end justify-center bg-white lg:h-32"
    >
      <div className="flex h-[10vh] w-11/12 items-center py-12 lg:h-[10vh]">
        <h2 className="flex-5 font-ftg text-xl font-medium lg:text-5xl">
          LOTA
        </h2>

        {/* Navigation links */}
        {isMobile ? (
          <a href={`#${activeSection}`}>/{activeSection}</a>
        ) : (
          <div className="flex h-full flex-5 items-center justify-evenly font-lora text-base font-medium text-gray-500 capitalize lg:text-xl">
            {links.map((link) => (
              <Link
                href={`#${link}`}
                key={link}
                className={
                  activeSection === link ? "font-medium text-black" : ""
                }
              >
                {link}
              </Link>
            ))}
          </div>
        )}

        <div className="relative flex-1 text-end">
          <span className="font-light lg:text-4xl">{time}</span>
          <span className="absolute -top-3 -right-9 font-lora font-normal lg:text-2xl">
            9ja
          </span>
        </div>
      </div>
    </div>
  )
}
