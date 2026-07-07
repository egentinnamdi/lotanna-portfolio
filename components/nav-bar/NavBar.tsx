"use client"
import React, { useState } from "react"
import DistortText from "../shared/DistortionText"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { useScreenWidth } from "@/hooks/useScreenWidth"

const links = ["home", "projects", "about", "testimonials", "contact"]

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home")
  const { isMobile } = useScreenWidth()

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

        onEnterBack: () => {
          setActiveSection(section.id)
        },
      })
    })
  })

  return (
    <div className="fixed z-20 flex w-full justify-center bg-white shadow-sm">
      <div className="flex h-[10vh] w-10/12 items-center py-12 lg:h-[10vh] lg:py-12">
        {/* Logo */}
        <DistortText
          text="Lotanna"
          className="flex-2 text-xl font-semibold lg:text-3xl"
        />

        {/* Navigation links */}
        {isMobile ? (
          <a href={`#${activeSection}`}>/{activeSection}</a>
        ) : (
          <div className="flex h-full flex-1 items-center justify-between bg-orange-400 font-mono text-base font-bold text-gray-500">
            {links.map((link) => (
              <a
                href={`#${link}`}
                key={link}
                className={activeSection === link ? "text-gray-900" : ""}
              >
                /{link}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
