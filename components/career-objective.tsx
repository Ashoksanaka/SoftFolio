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
              Motivated Cyber Security and Web Development professional with hands-on experience in ethical hacking and tool development. Seeking to leverage programming skills and cybersecurity expertise to enhance security measures in a dynamic organization.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

