import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Merriweather } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Your Name - Digital Edition",
  description: "Personal website in the style of a digital newspaper",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  )
}
