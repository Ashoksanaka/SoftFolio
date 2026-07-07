"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function CareerObjective() {
  return (
    <section id="career" className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Career Objective</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 text-lg leading-relaxed">
              <p>
                Highly motivated and detail-oriented entry-level DevSecOps professional with hands-on experience in designing, 
                implementing, and maintaining CI/CD automation pipelines, conducting robust security assessments, and managing 
                scalable infrastructure environments. Skilled in Python-based automation and Linux systems administration, 
                with a strong commitment to integrating security best practices across all stages of the software development 
                lifecycle. Adept at leveraging cloud technologies to architect and optimize secure, automated deployment workflows. 
                Passionate about continuous learning and contributing to high-performing teams dedicated to delivering reliable, 
                resilient, and secure technological solutions.
           
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

