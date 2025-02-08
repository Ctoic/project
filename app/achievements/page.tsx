"use client"

import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Award, Calendar, Trophy, Medal } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const achievements = [
  {
    category: "Academic Excellence",
    items: [
      {
        title: "Mathematics Olympiad Gold Medal",
        date: "March 2023",
        description: "Secured first position in the National Mathematics Olympiad, demonstrating exceptional problem-solving skills and mathematical aptitude.",
        image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?w=800&auto=format&fit=crop&q=60",
        type: "certificate"
      },
      {
        title: "Science Exhibition First Prize",
        date: "September 2023",
        description: "Awarded first prize for innovative project on renewable energy at the State Level Science Exhibition.",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=60",
        type: "certificate"
      }
    ]
  },
  {
    category: "Technical Achievements",
    items: [
      {
        title: "Python Programming Certification",
        date: "January 2024",
        description: "Completed advanced Python programming certification with distinction, covering data structures, algorithms, and application development.",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60",
        type: "certificate"
      },
      {
        title: "Web Development Hackathon Winner",
        date: "December 2023",
        description: "Led team to victory in 24-hour hackathon, developing an innovative education technology solution.",
        image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&auto=format&fit=crop&q=60",
        type: "event"
      }
    ]
  },
  {
    category: "Leadership & Events",
    items: [
      {
        title: "Student Council President",
        date: "2023-2024",
        description: "Elected as Student Council President, leading various initiatives and organizing school-wide events.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
        type: "event"
      },
      {
        title: "TEDx Event Organizer",
        date: "October 2023",
        description: "Successfully organized and managed school's first TEDx event, featuring 8 speakers and 200+ attendees.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
        type: "event"
      }
    ]
  },
  {
    category: "Sports & Athletics",
    items: [
      {
        title: "District Level Basketball Championship",
        date: "November 2023",
        description: "Led school basketball team to victory in district championship, awarded Best Player of the Tournament.",
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=60",
        type: "event"
      },
      {
        title: "State Athletics Meet Medal",
        date: "February 2024",
        description: "Won silver medal in 400m sprint at State Athletics Meet, setting personal best record.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60",
        type: "certificate"
      }
    ]
  }
]

export default function Achievements() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="h-8 w-8" />
            Achievements & Certifications
          </h1>

          <div className="space-y-12">
            {achievements.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Dialog key={itemIndex}>
                      <DialogTrigger asChild>
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                          <div className="aspect-video relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-lg font-medium">Click to view details</p>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <Calendar className="h-4 w-4" />
                              {item.date}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">
                              {item.type === 'certificate' ? 'Certificate' : 'Event'}
                            </span>
                          </div>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription>
                            <div className="mt-4">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full rounded-lg mb-4"
                              />
                              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                <Calendar className="h-4 w-4" />
                                {item.date}
                              </div>
                              <p className="text-foreground">{item.description}</p>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}