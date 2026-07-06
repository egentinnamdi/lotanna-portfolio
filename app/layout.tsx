import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lotanna Designs",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next15", "pwa", "next-pwa"],
  description:
    "Lotanna designs and builds intuitive mobile and web experiences that transform ideas into products users genuinely enjoy using.",
  generator: "Next.js",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icon512_rounded.png" },
    { rel: "icon", url: "icon512_maskable.png" },
  ],
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning

      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="scroll-smooth">
        <ThemeProvider>
          <div className="flex flex-col items-center">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
