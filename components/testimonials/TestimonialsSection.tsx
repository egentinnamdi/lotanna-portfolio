import React from "react"
import TestimonialsGridView from "./TestimonialsGridView"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="flex flex-col gap-10 lg:gap-10">
      <h2 className="text-2xl leading-normal font-medium lg:w-2/4 lg:text-3xl">
        Backed by real feedback from the people I've worked with most.
      </h2>
      <TestimonialsGridView />
    </section>
  )
}
