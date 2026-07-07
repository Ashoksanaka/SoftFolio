"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "Golang", level: 55 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 60 },
      ],
    },
    {
      category: "Full Stack Development",
      skills: [
        { name: "HTML, CSS", level: 85 },
        { name: "React JS, Next JS", level: 80 },
        { name: "Flask, Django", level: 75 },
        { name: "PostgreSQL, MongoDB", level: 85 },
      ],
    },
    {
      category: "Cyber Security & Ethical Hacking",
      skills: [
        { name: "Web Application Security", level: 85 },
        { name: "Network Security", level: 75 },
        { name: "Cloud Security", level: 90 },
        { name: "Penetration Testing", level: 95 },
        
      ],
    },
    {
      category: "Cloud &DevOps",
      skills: [
        { name: "Automation(Bash, Python)", level: 90 },
        { name: "CI/CD(GitHub Actions, Jenkins)", level: 95 },
        { name: "Containerization(Docker, Kubernetes)", level: 75 },
        { name: "Cloud(AWS, GCP)", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
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

