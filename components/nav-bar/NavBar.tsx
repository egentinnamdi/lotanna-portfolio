import React from "react"

export default function NavBar() {
  return (
    <div className="flex h-[10vh] items-center justify-between">
      {/* Logo */}
      <div className="flex-2">
        <h1>Loxzy Designs</h1>
      </div>

      {/* Navigation links */}
      <div className="flex h-full flex-1 items-center justify-between font-mono text-xl font-bold">
        <span>/home</span>
        <span>/projects</span>
        <span>/testimonials</span>
        <span>/contact</span>
      </div>
    </div>
  )
}
