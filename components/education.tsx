"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, GraduationCap, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Anil Neerukonda Institute of Technology and Sciences",
      location: "Visakhapatnam, India",
      duration: "2021 - 2025",
      gpa: "7.9/10",
      specialization: "Electronics and Communication Engineering",
    },
    {
      degree: "XII - Science",
      institution: "Narayana Junior College",
      location: "Vijayawada, India",
      duration: "2019 - 2021",
      gpa: "92%",
      specialization: "Physics, Chemistry, Mathematics",
    },
    {
      degree: "X - Secondary School Certificate",
      institution: "Kennedy English Medium High School",
      location: "Vijayawada, India",
      duration: "2018 - 2019",
      gpa: "82%",
      specialization: "General Studies",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
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
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center text-muted-foreground">
                      <GraduationCap className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>Specialization: {edu.specialization}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="font-medium">
                      GPA/Percentage: <span className="text-primary">{edu.gpa}</span>
                    </p>
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

