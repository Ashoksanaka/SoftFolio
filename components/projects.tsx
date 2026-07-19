"use client"

import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import type { CSSProperties } from "react"

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  liveUrl: string
}

const MARQUEE_DURATION_S = 18

const cardGradients = [
  "linear-gradient(135deg, #ff7e5f, #feb47b)",
  "linear-gradient(135deg, #6a11cb, #2575fc)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
]

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Mail Blasto",
      description:
        "A bulk mail dispatch system for sending personalized messages to various recipients.",
      image: "/Bulk_Mail.png",
      technologies: ["HTML", "CSS", "Vite", "Python", "Django", "PostgreSQL", "Docker", "Redis", "Celery", "Gmail API"],
      github: "https://github.com/Ashoksanaka/mail-system-frontend.git",
      liveUrl: "https://mailblasto.vercel.app/",
    },
    {
      title: "AI Resume Tailor",
      description:
        "An AI powered resume builder that helps you build your ATS compatible resume in minutes.",
      image: "/Resume_Refiner.png",
      technologies: ["HTML", "Tailwind CSS", "Typescript", "Next.js", "Python", "Django", "PostgreSQL", "Redis", "Docker", "LaTeX", "AI"],
      github: "https://github.com/Ashoksanaka/Resume-Refiner-Backend",
      liveUrl: "https://resume-tailor.itsmeashok.in",
    },
    {
      title: "AI Wealth Advisor",
      description:
        "An AI powered wealth advisor that helps you manage your finances.",
      image: "/AI_Wealth_Advisor.png",
      technologies: ["HTML", "Tailwind CSS", "Typescript", "Next.js", "Node JS", "Clerk", "Docker", "PostgreSQL", "Chatbot", "NVIDIA AI"],
      github: "https://github.com/Ashoksanaka/AI-Wealth-Advisor",
      liveUrl: "https://ai-wealth-advisor-eight.vercel.app/",
    },
  ]

  const projectCount = projects.length
  const delayStep = projectCount > 0 ? MARQUEE_DURATION_S / projectCount : 0

  return (
    <section id="projects" className="py-10 px-4">
      <style>{`
        @keyframes autoRun3d {
          from {
            transform: rotateY(-360deg);
          }
          to {
            transform: rotateY(0deg);
          }
        }

        @keyframes animateBrightness {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(0.65);
          }
        }

        .carousel-3d-scene {
          position: relative;
          width: 100%;
          max-width: 56rem;
          margin-inline: auto;
          height: clamp(22rem, 70vw, 36rem);
          perspective: 1000px;
          overflow: visible;
        }

        .carousel-3d {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          animation: autoRun3d var(--carousel-duration, 25s) linear infinite;
          will-change: transform;
        }

        .carousel-3d-scene:hover .carousel-3d,
        .carousel-3d-scene:focus-within .carousel-3d,
        .carousel-3d-scene:hover .carousel-card,
        .carousel-3d-scene:focus-within .carousel-card {
          animation-play-state: paused;
        }

        .carousel-card {
          --card-angle: 0deg;
          --card-delay: 0s;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 190px;
          height: 254px;
          transform-origin: center center;
          transform: translate(-50%, -50%) rotateY(var(--card-angle)) translateZ(var(--carousel-radius, 400px));
          animation: animateBrightness var(--carousel-duration, 25s) linear infinite;
          animation-delay: var(--card-delay);
          will-change: transform, filter;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .project-glow {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f00;
        }

        .project-glow::before,
        .project-glow::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(315deg, #03a9f4, #ff0058);
        }

        .project-glow::after {
          filter: blur(30px);
        }

        .project-glow > b {
          position: absolute;
          inset: 6px;
          background: rgba(0, 0, 0, 0.6);
          z-index: 2;
        }

        .project-glow .project-image {
          position: absolute;
          inset: 6px;
          z-index: 3;
          overflow: hidden;
          opacity: 0.55;
          transition: 0.5s;
          transform: scale(0.85);
        }

        .project-glow .project-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-glow:hover .project-image,
        .project-glow:focus-within .project-image {
          opacity: 0.95;
          transform: scale(0.5) translateY(-70px);
        }

        .project-glow .content {
          position: absolute;
          z-index: 4;
          bottom: 12px;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 10px;
          opacity: 0;
          transform: scale(0.6);
          transition: 0.5s;
          pointer-events: none;
        }

        .project-glow:hover .content,
        .project-glow:focus-within .content {
          opacity: 1;
          transform: scale(1);
          bottom: 20px;
          pointer-events: auto;
        }

        .project-glow .title {
          position: relative;
          color: #fff;
          font-weight: 500;
          line-height: 1.15em;
          font-size: 0.95em;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-align: center;
        }

        .project-glow .title span {
          display: block;
          font-weight: 300;
          font-size: 0.68em;
          letter-spacing: 0.04em;
          text-transform: none;
          margin-top: 0.35em;
          opacity: 0.85;
          line-height: 1.3;
        }

        .project-glow .sci {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 0;
          list-style: none;
        }

        .project-glow .sci a {
          position: relative;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.5);
          background: rgba(0, 0, 0, 0.2);
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          transition: 0.5s;
        }

        .project-glow .sci a:hover,
        .project-glow .sci a:focus-visible {
          color: rgba(255, 255, 255, 1);
          outline: none;
        }

        @keyframes projectMarquee {
          from {
            left: 100%;
          }
          to {
            left: calc(var(--card-width) * -1);
          }
        }

        .marquee-slider {
          --card-width: 380px;
          --card-height: 460px;
          width: 100%;
          height: var(--card-height);
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
        }

        .marquee-slider .marquee-list {
          position: relative;
          width: 100%;
          min-width: calc(var(--card-width) * var(--quantity));
          height: 100%;
        }

        .marquee-slider .marquee-item {
          --card-delay: 0s;
          --card-gradient: linear-gradient(135deg, #6a11cb, #2575fc);
          position: absolute;
          left: 100%;
          width: var(--card-width);
          height: var(--card-height);
          padding: 12px;
          animation: projectMarquee var(--marquee-duration) linear infinite;
          animation-delay: var(--card-delay);
          transition: filter 0.4s, transform 0.4s;
          will-change: left;
        }

        .marquee-slider:hover .marquee-item,
        .marquee-slider:focus-within .marquee-item {
          animation-play-state: paused;
          filter: grayscale(0.8);
        }

        .marquee-slider .marquee-item:hover,
        .marquee-slider .marquee-item:focus-within {
          filter: grayscale(0);
          transform: translateY(-6px);
        }

        .marquee-card {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgb(255 255 255 / 0.2);
          border-radius: 16px;
          background: var(--card-gradient);
          box-shadow: 0 12px 30px rgb(0 0 0 / 0.18);
          color: white;
        }

        .marquee-card .marquee-image {
          position: relative;
          height: 48%;
          flex-shrink: 0;
          overflow: hidden;
        }

        .marquee-card .marquee-image img {
          object-fit: cover;
          transition: transform 0.4s;
        }

        .marquee-card:hover .marquee-image img,
        .marquee-card:focus-within .marquee-image img {
          transform: scale(1.06);
        }

        .marquee-card .marquee-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 16px;
          background: linear-gradient(to bottom, rgb(0 0 0 / 0.08), rgb(0 0 0 / 0.32));
        }

        .marquee-card .marquee-title {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .marquee-card .marquee-description {
          display: -webkit-box;
          margin: 7px 0 12px;
          overflow: hidden;
          color: rgb(255 255 255 / 0.86);
          font-size: 0.78rem;
          line-height: 1.45;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .marquee-card .marquee-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 12px;
        }

        .marquee-card .technology {
          padding: 3px 7px;
          border: 1px solid rgb(255 255 255 / 0.22);
          border-radius: 999px;
          background: rgb(0 0 0 / 0.18);
          color: rgb(255 255 255 / 0.9);
          font-size: 0.64rem;
          font-weight: 500;
          line-height: 1.2;
          white-space: nowrap;
        }

        .marquee-card .marquee-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .marquee-card .marquee-actions a {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgb(255 255 255 / 0.2);
          border-radius: 8px;
          background: rgb(0 0 0 / 0.2);
          color: rgb(255 255 255 / 0.78);
          text-decoration: none;
          transition: color 0.25s, background 0.25s;
        }

        .marquee-card .marquee-actions a:hover,
        .marquee-card .marquee-actions a:focus-visible {
          color: white;
          background: rgb(0 0 0 / 0.38);
          outline: 2px solid white;
          outline-offset: 2px;
        }

        @media (max-width: 640px) {
          .marquee-slider {
            --card-width: 310px;
            --card-height: 420px;
          }

          .carousel-3d-scene {
            --carousel-radius: 220px;
            perspective: 700px;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .carousel-3d-scene {
            --carousel-radius: 320px;
          }
        }

        @media (min-width: 1025px) {
          .carousel-3d-scene {
            --carousel-radius: 400px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-slider {
            height: auto;
            overflow-x: auto;
            mask-image: none;
            -webkit-mask-image: none;
          }

          .marquee-slider .marquee-list {
            display: flex;
            gap: 16px;
            min-width: max-content;
          }

          .marquee-slider .marquee-item {
            position: relative;
            left: auto;
            flex: 0 0 var(--card-width);
            animation: none !important;
            filter: none;
          }

          .carousel-3d,
          .carousel-card {
            animation: none !important;
          }

          .carousel-3d {
            transform: none;
          }

          .project-glow .project-image,
          .project-glow .content {
            transition: none;
          }

          .project-glow .project-image {
            opacity: 0.95;
            transform: scale(0.5) translateY(-70px);
          }

          .project-glow .content {
            opacity: 1;
            transform: scale(1);
            bottom: 20px;
            pointer-events: auto;
          }
        }
      `}</style>

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div
          className="marquee-slider"
          style={
            {
              "--quantity": projectCount,
              "--marquee-duration": `${MARQUEE_DURATION_S}s`,
            } as CSSProperties
          }
          role="region"
          aria-label="Projects carousel"
        >
          <div className="marquee-list">
            {projects.map((project, index) => {
              const itemStyle = {
                "--card-delay": `${-delayStep * index}s`,
                "--card-gradient": cardGradients[index % cardGradients.length],
              } as CSSProperties

              return (
                <article key={project.title} className="marquee-item" style={itemStyle}>
                  <div className="marquee-card">
                    <div className="marquee-image">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 310px, 380px"
                        priority={index < 3}
                      />
                    </div>
                    <div className="marquee-content">
                      <h3 className="marquee-title">{project.title}</h3>
                      <p className="marquee-description">{project.description}</p>
                      <div className="marquee-technologies" aria-label="Technologies used">
                        {project.technologies.map((technology) => (
                          <span
                            key={`${project.title}-${technology}`}
                            className="technology"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                      <div className="marquee-actions">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
