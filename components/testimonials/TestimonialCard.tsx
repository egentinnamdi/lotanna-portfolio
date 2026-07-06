import { Testimonial } from "@/lib/data"
import React from "react"

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial
}) {
  return (
    <div className="min-[40vh]: flex flex-col justify-between rounded-2xl border border-black/15 p-5 shadow-md lg:min-h-[40vh] lg:p-10">
      <p className="text-lg lg:text-2xl">{testimonial.quote}</p>

      <div>
        <h3 className="text-lg lg:text-2xl">{testimonial.name}</h3>
        <span className="text-lg text-black/50">{testimonial.title}</span>
      </div>
    </div>
  )
}
