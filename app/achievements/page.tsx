"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Award, Calendar, Trophy, FileText, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import fs from 'fs/promises'
import path from 'path'

// PDF Viewer component
const PDFViewer = ({ pdfPath }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden border shadow-sm">
      <div className="bg-muted p-2 flex justify-between items-center">
        <span className="font-medium flex items-center gap-2">
          <FileText className="h-4 w-4" />
          {path.basename(pdfPath)}
        </span>
        <Button size="sm" variant="outline" asChild>
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            Open
          </a>
        </Button>
      </div>
      <iframe 
        src={`${pdfPath}#toolbar=0&navpanes=0`} 
        className="w-full h-[500px]" 
        title="PDF Viewer"
      />
    </div>
  )
}

// Certificate Thumbnail component
const CertificateThumbnail = ({ pdfPath, title, date, category }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col">
      <div className="aspect-video relative bg-muted flex items-center justify-center p-4">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <FileText className="h-16 w-16 text-muted-foreground mb-2" />
          <p className="text-center font-medium text-muted-foreground">{path.basename(pdfPath)}</p>
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-medium">View Certificate</p>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          {date}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground mt-auto">
          {category}
        </span>
      </div>
    </Card>
  )
}

// This would normally be server-side code, but we're creating a client component
// In a real app, you'd want to create an API route to fetch the PDF files
const certificatesData = [
  {
    path: "/achievements/ambasdor.pdf",
    title: "Mathematics Olympiad Gold Medal",
    date: "March 2023",
    category: "Academic Excellence",
    description: "Secured first position in the National Mathematics Olympiad, demonstrating exceptional problem-solving skills and mathematical aptitude."
  },
  {
    path: "/achievements/science_exhibition_certificate.pdf",
    title: "Science Exhibition First Prize",
    date: "September 2023",
    category: "Academic Excellence",
    description: "Awarded first prize for innovative project on renewable energy at the State Level Science Exhibition."
  },
  {
    path: "/achievements/python_certification.pdf",
    title: "Python Programming Certification",
    date: "January 2024",
    category: "Technical Achievements",
    description: "Completed advanced Python programming certification with distinction, covering data structures, algorithms, and application development."
  },
  {
    path: "/achievements/hackathon_certificate.pdf",
    title: "Web Development Hackathon Winner",
    date: "December 2023",
    category: "Technical Achievements",
    description: "Led team to victory in 24-hour hackathon, developing an innovative education technology solution."
  },
  {
    path: "/achievements/student_council_certificate.pdf",
    title: "Student Council President",
    date: "2023-2024",
    category: "Leadership & Events",
    description: "Elected as Student Council President, leading various initiatives and organizing school-wide events."
  },
  {
    path: "/achievements/basketball_certificate.pdf",
    title: "District Level Basketball Championship",
    date: "November 2023",
    category: "Sports & Athletics",
    description: "Led school basketball team to victory in district championship, awarded Best Player of the Tournament."
  },
  {
    path: "/achievements/athletics_certificate.pdf",
    title: "State Athletics Meet Medal",
    date: "February 2024",
    category: "Sports & Athletics",
    description: "Won silver medal in 400m sprint at State Athletics Meet, setting personal best record."
  }
]

// Group certificates by category
const groupCertificatesByCategory = (certificates) => {
  return certificates.reduce((groups, cert) => {
    if (!groups[cert.category]) {
      groups[cert.category] = []
    }
    groups[cert.category].push(cert)
    return groups
  }, {})
}

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [certificates, setCertificates] = useState([])
  
  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For demo purposes, we'll use the static data above
    setCertificates(certificatesData)
    setLoading(false)
  }, [])
  
  const certificatesByCategory = groupCertificatesByCategory(certificates)
  const categories = Object.keys(certificatesByCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="h-8 w-8" />
            Achievements & Certifications
          </h1>

          {loading ? (
            <div className="space-y-8">
              {[1, 2].map((i) => (
                <div key={i}>
                  <Skeleton className="w-64 h-8 mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map((j) => (
                      <Skeleton key={j} className="w-full h-64" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Tabs defaultValue={categories[0]} className="w-full">
              <TabsList className="mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificatesByCategory[category].map((cert, index) => (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <div onClick={() => setSelectedCertificate(cert)}>
                            <CertificateThumbnail 
                              pdfPath={cert.path}
                              title={cert.title}
                              date={cert.date}
                              category={category}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{cert.title}</DialogTitle>
                            <DialogDescription>
                              <div className="flex items-center gap-2 text-muted-foreground my-2">
                                <Calendar className="h-4 w-4" />
                                {cert.date}
                              </div>
                              <p className="text-foreground mb-4">{cert.description}</p>
                              <PDFViewer pdfPath={cert.path} />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </main>
  )
}