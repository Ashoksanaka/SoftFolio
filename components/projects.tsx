"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Port Scanner",
      description:
        "An application that scans a target IP address or domain for open ports and displays the results in a terminal console.",
      image: "Ports.png",
      technologies: ["C", "Bash", "Linux", "Terminal"],
      github: "https://github.com/Ashoksanaka/PortScanner.git",
    },
    {
      title: "Keylogger",
      description:
        "A keylogger application that captures keystrokes and saves them to a file for later analysis.",
      image: "Keylogger.png",
      technologies: ["Python", "Bash", "Linux", "Terminal"],
      github: "https://github.com/Ashoksanaka/Keylogger.git",
    },
    {
      title: "Movie Recommendation System",
      description:
        " A personalized movie recommendation system developed to recommend the movies to the users",
      image: "Movie_Recommendation_System.png",
      technologies: ["C++","Bash", "Linux", "Terminal"],
      github: "https://github.com/Ashoksanaka/Movie_Recommendation_System.git",
    },
    {
      title: "Mailing System",
      description:
        "A bulk mail dispatch system for sending personalized messages to various recipients.",
      image: "Bulk_Mail.png",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
      github: "https://github.com/EncryptaIN/Encrypta.IN_APPLICATION-Mailing-System.git",
    },
    {
      title: "Just-Ease",
      description:
        "A web application that provides a platform for lawyers and clients to connect, and manage legal cases.",
      image: "Just_Ease.png",
      technologies: ["HTML", "Tailwind CSS", "React JS", "Python", "Django", "PostgreSQL", "Docker"],
      github: "https://github.com/EncryptaIN/Encrypta.IN_APPLICATION-Mailing-System.git",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

