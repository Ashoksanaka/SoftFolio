"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building, CalendarDays, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function WorkExperience() {
  const experiences = [
    {
      position: "Information Technology Intern",
      company: "Encrypta",
      location: "Rourkela, India",
      duration: "Dec 2024 - March 2025",
      responsibilities: [
        "Developed and deployed Bulk mailing web applications using HTML, CSS, JavaScript, and Python",
        "maintained and updated the application's code repository using Git",
        "Participated in code reviews and mentored fellow developers",
        "Managed the server uptime using SSH ",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Git", "GitHub", "Linux"],
    },
    {
      position: "Cyber Security Intern",
      company: "SlashMark IT solutions pvt Ltd",
      location: "Hyderabad, India",
      duration: "Feb 2024 - May 2024",
      responsibilities: [
        "Independently developed few minor projects using C/C++, Python, and Bash",
      ],
      technologies: ["C/C++", "Python", "Bash", "Linux"],
    },
  ]

  return (
    <section id= "experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

