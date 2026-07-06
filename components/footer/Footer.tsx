import React from "react"

export default function Footer() {
  return (
    <div className="flex justify-between self-stretch">
      <span>&copy; Lotanna & FlexCodes {new Date().getFullYear()}</span>
      <span>All rights reserved.</span>
    </div>
  )
}
