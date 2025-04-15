"use client"

import { Navbar } from "@/components/navbar"
import { Mail, Instagram, Linkedin, Phone, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

        <Card className="p-6 space-y-4 mb-8 shadow-sm">
          <p className="text-lg leading-relaxed">
            Hello! I’m <strong>Asim Ali Abbas</strong>, a passionate second-year Computer Science student. My dream is to study at one of the top CS universities in Pakistan — 
            <span className="font-medium"> Habib University, FAST-NU, IBA, LUMS, or NUST</span>. I believe that technology is more than just code — it's a tool to shape the future. 
            Through my journey, I aim to bring <span className="font-semibold text-primary">peace, prosperity, and awareness</span> to my homeland <strong>Gilgit-Baltistan</strong>, 
            and ultimately contribute positively to the world.
          </p>
          <p className="text-muted-foreground">
            I'm deeply interested in building things that matter — whether it's through open-source contributions, social impact initiatives, or tech innovations that uplift communities.
          </p>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="p-4 flex items-center gap-4">
            <Instagram className="text-pink-500" />
            <a href="https://instagram.com/yourusername" target="_blank" className="text-lg font-medium hover:underline">
              Instagram
            </a>
          </Card>

          <Card className="p-4 flex items-center gap-4">
            <Linkedin className="text-blue-600" />
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-lg font-medium hover:underline">
              LinkedIn
            </a>
          </Card>

          <Card className="p-4 flex items-center gap-4">
            <Mail className="text-red-500" />
            <a href="mailto:asim@example.com" className="text-lg font-medium hover:underline">
              Email Me
            </a>
          </Card>

          <Card className="p-4 flex items-center gap-4">
            <Phone className="text-green-500" />
            <a href="https://wa.me/923001234567" target="_blank" className="text-lg font-medium hover:underline">
              WhatsApp
            </a>
          </Card>
        </div>
      </div>
    </main>
  )
}
