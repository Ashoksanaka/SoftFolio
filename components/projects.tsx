"use client"

import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
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
    {
      title: "Project 4",
      description: "Additional project placeholder.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      liveUrl: "#"
    },
    {
      title: "Project 5",
      description: "Additional project placeholder.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      liveUrl: "#"
    },
    {
      title: "Project 6",
      description: "Additional project placeholder.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      liveUrl: "#"
    },
    {
      title: "Project 7",
      description: "Additional project placeholder.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      liveUrl: "#"
    },
    {
      title: "Project 8",
      description: "Additional project placeholder.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      liveUrl: "#"
    },
    {
      title: "Project 9",
      description: "Additional project placeholder.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      liveUrl: "#"
    },
    {
      title: "Project 10",
      description: "Additional project placeholder.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      liveUrl: "#"
    },
  ]

  return (
    <section id="projects" className="py-10 px-4">
      <style>{`
        @keyframes autoRun3d {
          from {
            transform: perspective(1000px) rotateY(-360deg);
          }
          to {
            transform: perspective(1000px) rotateY(0deg);
          }
        }

        @keyframes animateBrightness {
          10% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(0.7);
          }
          90% {
            filter: brightness(1);
          }
        }

        .carousel-3d {
          position: relative;
          width: 100%;
          height: 600px;
          transform-style: preserve-3d;
          transform: perspective(1000px);
          animation: autoRun3d 25s linear infinite;
          will-change: transform;
        }

        .carousel-3d:hover {
          animation-play-state: paused !important;
        }

        .carousel-3d:hover > div {
          animation-play-state: paused !important;
        }

        .carousel-card {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-origin: center center;
          animation: animateBrightness 25s linear infinite;
          transition-duration: 200ms;
          will-change: transform, filter;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2rem;
        }

        .carousel-card:nth-child(1) {
          transform: translate(-50%, -50%) rotateY(0deg) translateZ(400px);
          animation-delay: -0s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(2) {
          transform: translate(-50%, -50%) rotateY(36deg) translateZ(400px);
          animation-delay: -2.5s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(3) {
          transform: translate(-50%, -50%) rotateY(72deg) translateZ(400px);
          animation-delay: -5s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(4) {
          transform: translate(-50%, -50%) rotateY(108deg) translateZ(400px);
          animation-delay: -7.5s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(5) {
          transform: translate(-50%, -50%) rotateY(144deg) translateZ(400px);
          animation-delay: -10s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(6) {
          transform: translate(-50%, -50%) rotateY(180deg) translateZ(400px);
          animation-delay: -12.5s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(7) {
          transform: translate(-50%, -50%) rotateY(216deg) translateZ(400px);
          animation-delay: -15s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(8) {
          transform: translate(-50%, -50%) rotateY(252deg) translateZ(400px);
          animation-delay: -17.5s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(9) {
          transform: translate(-50%, -50%) rotateY(288deg) translateZ(400px);
          animation-delay: -20s;
          left: 50%;
          top: 50%;
        }

        .carousel-card:nth-child(10) {
          transform: translate(-50%, -50%) rotateY(324deg) translateZ(400px);
          animation-delay: -22.5s;
          left: 50%;
          top: 50%;
        }

        .project-card {
          width: 90%;
          max-width: 400px;
          height: 100%;
        }
      `}</style>

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        {/* 3D Carousel */}
        <div className="carousel-3d">
          {projects.map((project, index) => (
            <div key={index} className="carousel-card">
              <Card className="project-card h-full flex flex-col overflow-hidden">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 flex-grow overflow-y-auto">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-4 pb-4 pt-2 flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1 text-xs" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                      <span>Code</span>
                    </a>
                  </Button>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button variant="outline" size="sm" className="gap-1 text-xs" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                        <span>Live</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Hover to pause the 3D carousel rotation
        </p>
      </div>
    </section>
  )
}
