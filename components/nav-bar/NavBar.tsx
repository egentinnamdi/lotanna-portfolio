"use client"
import React, { useState } from "react"
import DistortText from "../shared/DistortionText"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"

const links = ["home", "projects", "about", "testimonials", "contact"]

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home")
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
    <div className="fixed z-10 flex w-full justify-center bg-white shadow-sm">
      <div className="flex h-[10vh] w-10/12 items-center py-16">
        {/* Logo */}
        <DistortText
          text="Lotanna Madueke"
          className="flex-2 text-4xl font-semibold"
        />

        {/* Navigation links */}
        <div className="flex h-full flex-1 items-center justify-between font-mono text-xl font-bold text-gray-500">
          {links.map((link) => (
            <span
              key={link}
              className={activeSection === link ? "text-gray-900" : ""}
            >
              /{link}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
