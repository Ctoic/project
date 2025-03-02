"use client"

import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { School, Award, Calendar } from "lucide-react"

const educationData = [
  {
    year: "2021-2023",
    institution: "Aga Khan Higher Secondary School Gilgit",
    level: "Class 11-12",
    stream: "Computer Science",
    achievements: [
      "Maintained consistent academic performance with 88% aggregate",
      "Class Representative for two consecutive years",
      "Active member of the Science Club"
    ]
  },
  {
    year: "2019-2021",
    institution: "Aga Khan Higher Secondary School Gilgit",
    level: "Class 9-10",
    stream: "General",
    achievements: [
      "Scored 88% in Class 10 Board Examinations",
      "Merit Certificate in Mathematics Olympiad",
      "School Quiz Team Captain"
    ]
  }
]

export default function Education() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <School className="h-8 w-8" />
            Educational Journey
          </h1>
          
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <Card key={index} className="p-6 relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {education.year}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">{education.institution}</h2>
                    <p className="text-muted-foreground mb-4">
                      {education.level} • {education.stream}
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Key Achievements
                      </h3>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {education.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}