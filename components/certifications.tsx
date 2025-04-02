"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "IBM professional Cyber Security Analyst",
      issuer: "IBM",
      date: "May 2024",
      description: "Comprehensive training in cybersecurity principles, tools, and practices.",
    },
    {
      title: "Ethical Hacking",
      issuer: "IIT Kharagpur",
      date: "September 2024",
      description: "Proficiency in ethical hacking techniques and tools.",
    },
    {
      title: "Information Security Management",
      issuer: "Infosys",
      date: "August 2024",
      description: "Understanding of information security management systems and practices.",
    },
    {
      title: "Cyber Security Analyst",
      issuer: "TATA group",
      date: "December 2023",
      description: "Proficiency in cybersecurity principles, Identity and Access Management(IAM)"
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Courses & Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-primary">{cert.issuer}</p>
                        <p className="text-muted-foreground mt-2">{cert.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground whitespace-nowrap">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.date}</span>
                    </div>
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

