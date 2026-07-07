import { testimonials } from "@/lib/data"
import React from "react"
import TestimonialCard from "./TestimonialCard"

export default function TestimonialsGridView() {
  return (
    <div className="flex grid-cols-3 flex-col gap-4 lg:grid lg:gap-0">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  )
}
