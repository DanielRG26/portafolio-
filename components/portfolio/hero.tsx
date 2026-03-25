"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, GraduationCap, Calendar, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-b from-secondary/50 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 gap-2">
              <Sparkles className="h-3 w-3" />
              Disponible para proyectos
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
              <span className="text-primary">Daniel Felipe</span>
              <br />
              <span className="text-foreground">Guevara Rodriguez</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
              Estudiante de Ingenieria de Software
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                Pasto, Narino
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                UCC - 5to Semestre
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                2024 - Presente
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button asChild size="lg">
                <a href="#proyectos">Ver proyectos</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contacto">Contactar</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/DanielRG26"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/daniel-felipe-guevara-rodriguez-3b7586208"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:guevararodriguezdanielfelipe@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
              
              {/* Status indicator */}
              <div className="absolute -top-2 -right-2 z-10">
                <span className="flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
                </span>
              </div>

              {/* Photo container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Daniel Felipe Guevara Rodriguez"
                  fill
                  className="object-cover"
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
