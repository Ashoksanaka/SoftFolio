"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 85 },
        { name: "Python", level: 750 },
        { name: "JavaScript", level: 60 },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript(React JS)", level: 80 },
        { name: "Python(Flask, Django)", level: 75 },
        { name: "PostgreSQL", level: 85 },
      ],
    },
    {
      category: "Cyber Security & Ethical Hacking",
      skills: [
        { name: "Kali Linux", level: 95 },
        { name: "Computer Networking", level: 85 },
        { name: "CryptoGraphy", level: 75 },
        { name: "Tools(NMap, Metasploit, Burp Suite, Wireshark)", level: 90 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "BASH shell Scripting", level: 90 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 65 },
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

