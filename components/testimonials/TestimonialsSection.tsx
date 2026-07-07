import React from "react"
import TestimonialsGridView from "./TestimonialsGridView"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="mt-20 flex flex-col gap-10 lg:gap-10">
      <h2 className="text-2xl leading-normal lg:w-2/5 lg:text-3xl">
        Trusted by amazing people and teams across the globe.
      </h2>
      <TestimonialsGridView />
    </section>
  )
}
