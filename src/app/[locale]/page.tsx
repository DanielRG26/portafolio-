import { About } from "@/features/portfolio/components/about"
import { Contact } from "@/features/portfolio/components/contact"
import { Education } from "@/features/portfolio/components/education"
import { Footer } from "@/features/portfolio/components/footer"
import { Hero } from "@/features/portfolio/components/hero"
import { Navbar } from "@/features/portfolio/components/navbar"
import { Projects } from "@/features/portfolio/components/projects"
import { Skills } from "@/features/portfolio/components/skills"
import { Testimonials } from "@/features/portfolio/components/testimonials"

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
