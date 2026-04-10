"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, GraduationCap, Calendar, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <Badge variant="secondary" className="mb-6 gap-2">
                <Sparkles className="h-3 w-3" />
                Disponible para proyectos
              </Badge>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              <span className="text-primary">Daniel Felipe</span>
              <br />
              <span className="text-foreground">Guevara Rodriguez</span>
            </h1>

            <p
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              Estudiante de Ingenieria de Software
            </p>

            {/* Info badges */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "450ms" }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Pasto, Nariño
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-primary" />
                Universidad Cooperativa de Colombia - 5to Semestre
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                2024 - Presente
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                <a href="#proyectos">Ver proyectos</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:-translate-y-0.5 transition-all duration-300">
                <a href="#contacto">Contactar</a>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start gap-3 animate-fade-in-up"
              style={{ animationDelay: "750ms" }}
            >
              <Button variant="outline" size="icon" className="hover:-translate-y-1 hover:border-primary/40 hover:shadow-md transition-all duration-300" asChild>
                <a
                  href="https://github.com/DanielRG26"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="hover:-translate-y-1 hover:border-primary/40 hover:shadow-md transition-all duration-300" asChild>
                <a
                  href="https://www.linkedin.com/in/daniel-felipe-guevara-rodriguez-3b7586208"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="hover:-translate-y-1 hover:border-primary/40 hover:shadow-md transition-all duration-300" asChild>
                <a href="mailto:guevararodriguezdanielfelipe@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:order-2 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="relative group">
              {/* Animated decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute -inset-8 rounded-full border border-primary/10 group-hover:border-primary/20 transition-all duration-700 group-hover:scale-105 group-hover:rotate-3" />

              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Status indicator */}
              <div className="absolute -top-2 -right-2 z-10">
                <span className="flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
                </span>
              </div>

              {/* Photo container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:shadow-primary/20 transition-all duration-700">
                <Image
                  src="/images/profile.jpeg"
                  alt="Daniel Felipe Guevara Rodriguez"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
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
