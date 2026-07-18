"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "Mailing System",
      description:
        "A bulk mail dispatch system for sending personalized messages to various recipients.",
      image: "Bulk_Mail.png",
      technologies: ["HTML", "CSS", "Vite", "Python", "Django", "PostgreSQL", "Docker", "Redis", "Celery", "Gmail API"],
      github: "https://github.com/Ashoksanaka/mail-system-frontend.git",
      liveUrl: "https://mailblasto.vercel.app/"
    },
    {
      title: "Resume Refiner",
      description:
        "An AI powered resume builder that helps you build your ATS compatible resume in minutes.",
      image: "Resume_Refiner.png",
      technologies: ["HTML", "Tailwind CSS", "Typescript", "Next.js", "Python", "Django", "PostgreSQL", "Redis", "Docker", "LaTeX", "AI", "Celery" ],
      github: "https://github.com/Ashoksanaka/Resume-Refiner-Backend",
      liveUrl: "https://resume-refiner-frontend.vercel.app"
    },
    {
      title: "AI Wealth Advisor",
      description:
        "An AI powered wealth advisor that helps you manage your finances.",
      image: "AI_Wealth_Advisor.png",
      technologies: ["HTML", "Tailwind CSS", "Typescript", "Next.js", "Node JS", "Clerk", "Docker", "PostgreSQL", "Chatbot", "NVIDIA AI" ],
      github: "https://github.com/Ashoksanaka/AI-Wealth-Advisor",
      liveUrl: "https://ai-wealth-advisor-eight.vercel.app/"
    },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="projects" className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Slides */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-muted-foreground mb-4">{projects[currentIndex].description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {projects[currentIndex].technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={projects[currentIndex].github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  {projects[currentIndex].liveUrl && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={projects[currentIndex].liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span>Live</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-2 transition-all z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-2 transition-all z-10"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators/Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 w-3 hover:bg-primary/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentIndex + 1} / {projects.length}
        </div>
      </div>
    </section>
  )
}
