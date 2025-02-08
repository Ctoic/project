"use client"

import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Fastapi-Boilerplate",
    description: "A FastAPI boilerplate with SQLAlchemy, PostgreSQL, and Docker",
    tags: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/ctoic/fastapi-boilerplate",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Python-Practise",
    description: "A comprehensive collection of Python programming exercises and solutions",
    tags: ["Python", "Programming", "Learning"],
    github: "https://github.com/ctoic/python-practise",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Ctoic.github.io",
    description: "Personal portfolio website built with modern web technologies",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ctoic/ctoic.github.io",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "ML-Projects",
    description: "Collection of machine learning projects and experiments",
    tags: ["Python", "Machine Learning", "Data Science"],
    github: "https://github.com/ctoic/ML-Projects",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Django-Projects",
    description: "Various Django web applications and projects",
    tags: ["Python", "Django", "Web Development"],
    github: "https://github.com/ctoic/django-projects",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Data-Structure-And-Algorithms",
    description: "Implementation of various data structures and algorithms",
    tags: ["DSA", "Python", "C++"],
    github: "https://github.com/ctoic/Data-Structure-And-Algorithms",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Leetcode-Solutions",
    description: "Solutions to various LeetCode programming problems",
    tags: ["Programming", "Algorithms", "Problem Solving"],
    github: "https://github.com/ctoic/leetcode-solutions",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "React-Projects",
    description: "Collection of React.js applications and components",
    tags: ["React", "JavaScript", "Web Development"],
    github: "https://github.com/ctoic/react-projects",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Flask-Projects",
    description: "Various Flask web applications and REST APIs",
    tags: ["Python", "Flask", "Web Development"],
    github: "https://github.com/ctoic/flask-projects",
    image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Portfolio-Website",
    description: "Modern portfolio website built with Next.js and Tailwind CSS",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/ctoic/portfolio-website",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60"
  }
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <Github className="h-8 w-8" />
            My Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <Button asChild variant="secondary">
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}