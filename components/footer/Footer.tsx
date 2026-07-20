"use client"
import { Button } from "../ui/button"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <div className="w-full items-center justify-between text-gray-500 lg:flex lg:h-28 lg:px-10">
      <span>&copy; Lota + FlexCodes, {new Date().getFullYear()}</span>
      <Button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
        variant="outline"
        className="cursor-pointer rounded-full bg-gray-50 px-8 font-normal text-black lg:h-13"
      >
        <ArrowUp />
        Back to Top
      </Button>
      <span>All rights reserved, all wrongs forgiven.</span>
    </div>
  )
}

// If Ever Needed Again
// <div className="flex flex-3 flex-col items-center justify-evenly lg:flex-row lg:pt-10">
//   <div className="flex w-full flex-col gap-2 px-5 font-mono text-olive-200 lg:w-fit lg:gap-10 lg:text-base">
//     <Link href="#projects">/projects</Link>
//     <Link href="#about">/about</Link>
//     <Link href="#testimonials">/testimonials</Link>
//   </div>

//   <div className="flex w-full flex-col gap-2 px-5 font-mono text-olive-200 lg:w-fit lg:gap-10 lg:text-base">
//     <a target="_blank" href="https://www.instagram.com/lotannamadueke">
//       Instagram
//     </a>
//     <a
//       target="_blank"
//       href="https://www.linkedin.com/in/lotanna-madueke-3900b728a"
//     >
//       Linkedin
//     </a>
//     <a target="_blank" href="https://x.com/LMadueke28">
//       X
//     </a>
//   </div>

//   <div className="text-center font-light lg:text-base">
//     <span>
//       &copy; Lotanna & FlexCodes {new Date().getFullYear()}, All rights
//       reserved.
//     </span>
//   </div>
// </div>

// <div className="bg flex flex-2 items-center justify-center lg:flex-3">
//   <DistortText
//     text="Lotanna"
//     className="text-center text-7xl font-bold tracking-widest text-olive-200 lg:text-[270px]"
//   />
// </div>
