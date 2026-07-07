"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BouncingBox } from "../shared/BouncingBox"

type Status = "idle" | "loading" | "success" | "error"

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      })

      tl.from(".contact-badge", { opacity: 0, y: 12 })
        .from(
          ".contact-heading-line",
          { opacity: 0, y: 28, stagger: 0.08 },
          "-=0.5"
        )
        .from(".contact-subtext", { opacity: 0, y: 12 }, "-=0.4")
        .from(".contact-field", { opacity: 0, y: 16, stagger: 0.1 }, "-=0.3")
        .from(".contact-visual", { opacity: 0, scale: 0.96 }, "-=0.6")
    },
    { scope: containerRef }
  )

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setErrorMsg(data.error ?? "Something went wrong.")
        gsap.fromTo(
          ".contact-form",
          { x: -6 },
          { x: 0, duration: 0.4, ease: "elastic.out(1, 0.4)" }
        )
        return
      }

      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
      setErrorMsg("Network error. Please try again.")
    }
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="mt-10 flex justify-center self-stretch bg-olive-100 lg:mt-20"
    >
      <div className="mx-auto flex w-11/12 flex-col-reverse gap-16 px-6 py-24 md:grid-cols-2 md:items-start lg:grid lg:w-10/12">
        {/* Left: copy + form */}
        <div>
          <span className="contact-badge inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available
          </span>

          <h2 className="mt-6 text-4xl leading-normal font-light tracking-tight text-neutral-900 md:text-4xl">
            <span className="contact-heading-line block">
              Always searching for new problems,
            </span>
            <span className="contact-heading-line block">
              fun teams and great ideas.
            </span>
          </h2>

          <p className="contact-subtext mt-4 text-neutral-500">
            If this sounds like you, reach out :)
          </p>

          <form
            onSubmit={handleSubmit}
            className="contact-form mt-10 space-y-8"
          >
            <div className="contact-field">
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name (or nickname, we don't judge)"
                required
                disabled={status === "loading"}
                // className="rounded-none border-0 border-b border-neutral-200 px-0 shadow-none focus-visible:border-neutral-900 focus-visible:ring-0"
                className="h-14 bg-olive-50"
              />
            </div>

            <div className="contact-field">
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-mail address"
                required
                disabled={status === "loading"}
                // className="rounded-none border-0 border-b border-neutral-200 bg-olive-100 px-0 shadow-none h focus-visible:border-neutral-900 focus-visible:ring-0"
                className="h-14 bg-olive-50"
              />
            </div>

            <div className="contact-field">
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                disabled={status === "loading"}
                rows={4}
                // className="resize-none rounded-none border-0 border-b border-neutral-200 px-0 shadow-none focus-visible:border-neutral-900 focus-visible:ring-0"
                className="h-14 bg-olive-50"
              />
            </div>

            <div className="contact-field flex flex-col items-center gap-4">
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full p-7"
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </Button>

              {status === "success" && (
                <span className="text-sm text-emerald-600">
                  Thanks — I'll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-500">{errorMsg}</span>
              )}
            </div>
          </form>
        </div>

        {/* Right: visual card */}
        <div className="contact-visual flex h-full justify-center md:justify-end">
          <BouncingBox
            images={[
              "/one.png",
              "/two.png",
              "/three.png",
              "/four.png",
              "/five.png",
              "/six.png",
            ]}
            className="h-96 w-full rounded-3xl lg:h-full"
          />
        </div>
      </div>
    </section>
  )
}
