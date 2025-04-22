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
              Dedicated and detail-oriented web developer with a strong foundation in both front-end and
              back-end technologies, seeking to leverage my skills in creating robust, user-friendly web applications. 
              Passionate about integrating cybersecurity best practices into the development process to ensure the security and integrity of applications. 
              Eager to contribute to a dynamic team where I can apply my technical expertise and commitment to continuous learning in both 
              web development and cybersecurity, ultimately driving innovative solutions that enhance user experience and protect sensitive data.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

