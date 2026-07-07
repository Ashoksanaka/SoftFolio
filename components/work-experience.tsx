"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building, CalendarDays, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function WorkExperience() {
  const experiences = [
    {
      position: "DevOps Engineer Intern",
      company: "Bridgeit App Inc",
      location: "California, USA (Remote)",
      duration: "Aug 2025 - Present",
      responsibilities: [
        "Architected and enforced zero-trust network security across GCP — Shared VPC, Cloud Armor, mTLS, and WireGuard VPN",
        "Led organization-wide Cloud & Pipeline Health Audit, remediating 30+ findings across IAM, compute, secrets, and CI/CD",
        "Designed least-privilege IAM model, revoking Owner/Editor roles and migrating workloads to Workload Identity Federation",
        "Built end-to-end CI/CD security pipeline — SAST, DAST, container scanning, secret scanning, and DefectDojo integration",
        "Engineered FERPA-compliant data controls for student records including encryption, access segregation, and audit logging",
        "Reconstructed PgBouncer infrastructure with Terraform + Docker, implementing automated backup/restore and DB role separation",
        "Drove SOC 2 readiness program — vendor evaluation, organizational controls framework, and evidence collection automation",
      ],
      technologies: ["GCP", "PostgreSQL", "PgBouncer", "SOC2", "Terraform", "Docker", "Bash Automation", "CI/CD security", "Code Security", "Grafana", "Prometheus", "VPN", "FireWalls", ],
    },
    {
      position: "Information Technology Intern",
      company: "Encrypta",
      location: "Rourkela, India (Remote)",
      duration: "Dec 2024 - March 2025",
      responsibilities: [
        "Developed Bulk mailing web application using HTML, CSS, JavaScript, and Python",
        "maintained and updated the application's code repository using Git",
        "Participated in code reviews and mentored fellow developers",
        "Managed the server lifecycle using SSH ",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Git", "GitHub", "Linux"],
    },
    
  ]

  return (
    <section id="experience" className="py-10 px-4">
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

