import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { Metadata } from "next"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata : Metadata={
  title: 'Live Docs',
  description: 'Your go-to collaborative editor',
}

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
