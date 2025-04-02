"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Newspaper, Gamepad2, ChartCandlestick, Music, PenTool } from "lucide-react"

export default function Interests() {
  const interests = [
    
    {
      title: "Reading",
      icon: Newspaper,
      description: "Political and Business News.",
    },
    {
      title: "Trading",
      icon: ChartCandlestick,
      description: "Stock and cryptocurrency trading.",
    },
    {
      title: "Gaming",
      icon: Gamepad2,
      description: "Strategy and role-playing games.",
    },
    {
      title: "Music",
      icon: Music,
      description: "Listening to a variety of genres.",
    },
    {
      title: "Writing",
      icon: PenTool,
      description: "Creative writing short stories.",
    },
    
    {
      title: "Workouts",
      icon: Dumbbell,
      description: " Strength training and fitness.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Personal Interests</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{interest.title}</h3>
                    <p className="text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

