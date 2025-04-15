"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { FileText, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"

type Certificate = {
  path: string
  title: string
  date: string
  description: string
}

const certificatesData: Certificate[] = [
  {
    path: "/achievements/ambasdor.pdf",
    title: "Tech Scape Ambassador",
    date: "March 2024 - Present",
    description: "Ambassador of the Year for Tech Scape Pvt Ltd."
  },
  {
    path: "/achievements/Asim OEC.pdf",
    title: "Asim OEC Participation",
    date: "2024",
    description: "Participated in Asim OEC event showcasing innovation and leadership."
  },
  {
    path: "/achievements/converse.pdf",
    title: "Science Exhibition Winner",
    date: "Sep 2023",
    description: "First Prize in Converse Science Exhibition for Renewable Energy project."
  },
  {
    path: "/achievements/cplg-fotbll.pdf",
    title: "Football Championship",
    date: "Feb 2024",
    description: "Represented CPLG in inter-school football competition."
  },
  {
    path: "/achievements/head ict.pdf",
    title: "ICT Society Head",
    date: "2023-2024",
    description: "Recognized for outstanding leadership as Head of ICT Society."
  },
  {
    path: "/achievements/icap.pdf",
    title: "ICAP Participation",
    date: "2024",
    description: "Participated in ICAP youth conference representing academic excellence."
  },
  {
    path: "/achievements/inter school.pdf",
    title: "Inter School Competition",
    date: "2023",
    description: "Awarded for performance in Inter School Academic Competitions."
  },
  {
    path: "/achievements/josh.pdf",
    title: "Josh Fest Winner",
    date: "2023",
    description: "Achieved top position in Josh Fest creativity challenge."
  },
  {
    path: "/achievements/mentor.pdf",
    title: "Mentorship Program",
    date: "2024",
    description: "Contributed as a mentor in student development programs."
  },
  {
    path: "/achievements/mun.pdf",
    title: "MUN Delegate",
    date: "2024",
    description: "Participated in Model United Nations as a delegate and speaker."
  },
  {
    path: "/achievements/pamir.pdf",
    title: "Pamir Youth Forum",
    date: "2024",
    description: "Presented research and innovation ideas at Pamir Youth Forum."
  },
  {
    path: "/achievements/qirat.pdf",
    title: "Qirat Competition",
    date: "2023",
    description: "Secured position in Inter-School Qirat Recitation Contest."
  }
]

const PDFViewer = ({ pdfPath }: { pdfPath: string }) => (
  <div className="w-full rounded-lg overflow-hidden border shadow-sm mt-4">
    <iframe
      src={`${pdfPath}#toolbar=0&navpanes=0`}
      className="w-full h-[80vh]"
      title="PDF Viewer"
    />
  </div>
)

const CertificateTile = ({ cert, onClick }: { cert: Certificate; onClick: () => void }) => (
  <Card
    onClick={onClick}
    className="relative cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <div className="aspect-video flex flex-col items-center justify-center bg-muted px-4 py-6 text-center">
      <FileText className="h-12 w-12 text-muted-foreground mb-2" />
      <p className="text-sm text-muted-foreground">{cert.path.split("/").pop()}</p>
      <p className="text-sm font-semibold mt-2">{cert.title}</p>
    </div>
    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
      <span className="text-white text-lg font-medium">View</span>
    </div>
  </Card>
)

export default function AchievementsPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">My Certificates</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div onClick={() => setSelectedCert(cert)}>
                  <CertificateTile cert={cert} onClick={() => setSelectedCert(cert)} />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">{cert.title}</DialogTitle>
                  <div className="flex items-center text-muted-foreground text-sm mt-1 gap-2">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </div>
                  <p className="mt-2">{cert.description}</p>
                </DialogHeader>
                <PDFViewer pdfPath={cert.path} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  )
}
