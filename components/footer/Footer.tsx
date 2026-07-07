import React from "react"
import DistortText from "../shared/DistortionText"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="flex h-[70vh] flex-col-reverse justify-center self-stretch bg-accent-foreground text-white lg:flex-col">
      <div className="flex flex-3 flex-col items-center justify-evenly lg:flex-row lg:p-0">
        <div className="flex w-full flex-col gap-2 px-5 font-mono text-olive-200 lg:gap-10 lg:text-2xl">
          <Link href="#projects">/projects</Link>
          <Link href="#about">/about</Link>
          <Link href="#testimonials">/testimonials</Link>
        </div>

        <div className="flex w-full flex-col gap-2 px-5 font-mono text-olive-200 lg:gap-10 lg:text-2xl">
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

        <div className="text-center font-light lg:text-2xl">
          {/* <div className="flex h-[12vh] w-11/12 flex-col items-center justify-center gap-1 text-xs text-gray-500 lg:w-10/12 lg:flex-col lg:justify-between lg:text-lg"> */}
          <span>
            &copy; Lotanna & FlexCodes {new Date().getFullYear()}, All rights
            reserved.
          </span>
        </div>
      </div>

      <div className="bg flex flex-2 items-center justify-center lg:flex-3">
        <DistortText
          text="Lotanna"
          className="text-center text-7xl font-semibold text-olive-200 lg:text-[250px]"
        />
      </div>
    </div>
  )
}
