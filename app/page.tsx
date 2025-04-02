import Hero from "@/components/hero"
import CareerObjective from "@/components/career-objective"
import Education from "@/components/education"
import WorkExperience from "@/components/work-experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Interests from "@/components/interests"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CareerObjective />
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <Certifications />
      <Interests />
      <Contact />
    </main>
  )
}

