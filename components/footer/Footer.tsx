import React from "react"
import DistortText from "../shared/DistortionText"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="flex h-[70vh] flex-col justify-center self-stretch bg-accent-foreground text-white">
      <div className="flex flex-3 items-center justify-evenly">
        <div className="flex flex-col font-mono text-olive-200 lg:gap-10 lg:text-2xl">
          <Link href="#projects">/projects</Link>
          <Link href="#about">/about</Link>
          <Link href="#testimonials">/testimonials</Link>
        </div>

        <div className="flex flex-col font-mono text-olive-200 lg:gap-10 lg:text-2xl">
          <a target="_blank" href="https://www.instagram.com/lotannamadueke">
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lotanna-madueke-3900b728a"
          >
            Linkedin
          </a>
          <a target="_blank" href="https://x.com/LMadueke28">
            X
          </a>
        </div>

        <div className="font-light lg:text-2xl">
          {/* <div className="flex h-[12vh] w-11/12 flex-col items-center justify-center gap-1 text-xs text-gray-500 lg:w-10/12 lg:flex-col lg:justify-between lg:text-lg"> */}
          <span>
            &copy; Lotanna & FlexCodes {new Date().getFullYear()}, All rights
            reserved.
          </span>
        </div>
      </div>

      <div className="bg flex flex-3 items-center justify-center">
        <DistortText
          text="Lotanna"
          className="text-center text-[250px] font-semibold text-olive-200"
        />
      </div>
    </div>
  )
}
