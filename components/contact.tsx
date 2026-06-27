"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 bg-background p-4 rounded-xl shadow-sm border hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Phone</p>
                <a href="tel:+919705061039" className="font-medium text-sm hover:text-primary transition-colors block">
                  +91 9705061039
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-background p-4 rounded-xl shadow-sm border hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Email</p>
                <a href="mailto:ashoksanaka116@gmail.com" className="font-medium text-sm truncate block hover:text-primary transition-colors">
                  ashoksanaka116@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-background p-4 rounded-xl shadow-sm border hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ashoksanaka" target="_blank" rel="noopener noreferrer" className="font-medium text-sm truncate block hover:text-primary transition-colors">
                  in/ashoksanaka
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-background p-4 rounded-xl shadow-sm border hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">GitHub</p>
                <a href="https://github.com/Ashoksanaka" target="_blank" rel="noopener noreferrer" className="font-medium text-sm truncate block hover:text-primary transition-colors">
                  Ashoksanaka
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


