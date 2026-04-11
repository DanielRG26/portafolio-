"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, GraduationCap, Calendar, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const roles = [
  "Estudiante de Ingenieria de Software",
  "Desarrollador Web Junior",
  "Apasionado por el Backend",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-slide-in-left">
              <Badge variant="secondary" className="mb-6 gap-2 animate-bounce-in" style={{ animationDelay: "400ms" }}>
                <Sparkles className="h-3 w-3 animate-spin-slow" />
                Disponible para proyectos
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
              <span className="text-primary inline-block animate-slide-in-left" style={{ animationDelay: "200ms" }}>
                Daniel Felipe
              </span>
              <br />
              <span className="text-foreground inline-block animate-slide-in-left" style={{ animationDelay: "400ms" }}>
                Guevara Rodriguez
              </span>
            </h1>

            {/* Typing effect subtitle */}
            <div
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 h-9 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-6 sm:h-7 bg-primary ml-1 animate-blink align-middle" />
            </div>

            {/* Info badges */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
                <MapPin className="h-4 w-4 text-primary" />
                Pasto, Nariño
              </span>
              <span className="flex items-center gap-1.5 animate-fade-in-up" style={{ animationDelay: "900ms" }}>
                <GraduationCap className="h-4 w-4 text-primary" />
                Universidad Cooperativa de Colombia - 5to Semestre
              </span>
              <span className="flex items-center gap-1.5 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
                <Calendar className="h-4 w-4 text-primary" />
                2024 - Presente
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="animate-fade-in-up" style={{ animationDelay: "1100ms" }}>
                <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                  <a href="#proyectos">Ver proyectos</a>
                </Button>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "1200ms" }}>
                <Button variant="outline" size="lg" asChild className="hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <a href="#contacto">Contactar</a>
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3">
              {[
                { href: "https://github.com/DanielRG26", icon: Github, label: "GitHub", delay: 1300 },
                { href: "https://www.linkedin.com/in/daniel-felipe-guevara-rodriguez-3b7586208", icon: Linkedin, label: "LinkedIn", delay: 1400 },
                { href: "mailto:guevararodriguezdanielfelipe@gmail.com", icon: Mail, label: "Email", delay: 1500 },
              ].map((social) => (
                <div key={social.label} className="animate-bounce-in" style={{ animationDelay: `${social.delay}ms` }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:scale-110 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:order-2 animate-scale-in" style={{ animationDelay: "300ms" }}>
            <div className="relative group">
              {/* Orbiting ring */}
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/15 animate-spin-very-slow" />
              {/* Static ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-700 group-hover:scale-105" />

              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-125 opacity-50 group-hover:opacity-80 transition-opacity duration-700 animate-pulse-slow" />

              {/* Status indicator */}
              <div className="absolute -top-2 -right-2 z-10">
                <span className="flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
                </span>
              </div>

              {/* Floating dots around photo */}
              <div className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-float" />
              <div className="absolute -bottom-3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/40 animate-float-delayed" />
              <div className="absolute top-1/2 -left-4 w-1.5 h-1.5 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "1s" }} />

              {/* Photo container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:shadow-primary/25 transition-all duration-700">
                <Image
                  src="/images/profile.jpeg"
                  alt="Daniel Felipe Guevara Rodriguez"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
