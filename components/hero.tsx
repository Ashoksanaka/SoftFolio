"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[50vh] flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-60 md:h-60 mx-auto mb-6"
        >
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse"
            style={{ padding: "3px" }}
          >
            <div className="h-full w-full rounded-full overflow-hidden bg-background">
              <Image
                src="Profile.jpg"
                alt="Profile Photo"
                width={190}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Ashok Sanaka</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Web Developer & Cyber Security Analyst</p>

        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 9705061039</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Mail className="h-4 w-4" />
            <span>ashoksanaka116@gmail.com</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Linkedin className="h-4 w-4" />
            <span>linkedin.com/in/ashoksanaka</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Github className="h-4 w-4" />
            <span>github.com/Ashoksanaka</span>
          </Button>
        </div>

        <Button
          size="lg"
          className="animate-pulse"
          onClick={() => {
            document.getElementById("career")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          View My Portfolio
        </Button>
      </motion.div>
    </section>
  )
}

