import React from "react"
import TestimonialsGridView from "./TestimonialsGridView"

export default function TestimonialsSection() {
  return (
    <div className="mt-20 flex flex-col gap-10 lg:gap-20">
      <h2 className="text-2xl leading-normal lg:w-2/5 lg:text-5xl">
        Trusted by amazing people and teams across the globe.
      </h2>
      <TestimonialsGridView />
    </div>
  )
}
