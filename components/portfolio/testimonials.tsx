"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Kevin Castro",
    role: "Cliente",
    content:
      "Trabajar con Felipe fue una experiencia muy profesional. Necesitabamos una pagina web moderna y funcional, y logro entregarnos justo lo que buscabamos. Destaco mucho su capacidad para entender los requerimientos y proponer mejoras en la interfaz. Sin duda lo recomendaria para proyectos de desarrollo web.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kevin%20%20Castro-MOOASqZjEUe9WjdaEcnOTyadCW99s3.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Josebeth Lopez",
    role: "Compañero de equipo",
    content:
      "Felipe fue una pieza clave en el desarrollo del proyecto. Siempre aporto ideas claras y soluciones eficientes a los problemas tecnicos. Ademas, su comunicacion con el equipo facilito mucho el avance del trabajo. Es alguien confiable y comprometido.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Josebeth%20Lopez%20-YpF08lKq13jnUIbZZbuXBERXPn78Cb.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Jose Bastidas",
    role: "Colega desarrollador",
    content:
      "Me impresiono la forma en que Felipe aborda los problemas de programacion. No solo implementa soluciones funcionales, sino que tambien se preocupa por la calidad del codigo y la optimizacion. Tiene una mentalidad muy orientada a mejorar constantemente.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jose%20Bastidas-aqkfHuG9QYTU7OZdLrvrcp78Cn8Ov4.png",
    rating: 5,
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goTo((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  function goTo(next: number | ((prev: number) => number)) {
    setIsAnimating(true)
    setTimeout(() => {
      setActive((prev) => (typeof next === "function" ? next(prev) : next))
      setIsAnimating(false)
    }, 300)
  }

  const current = testimonials[active]

  return (
    <section id="testimonios" className="py-20 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground text-lg">
            Lo que dicen colegas y clientes sobre mi trabajo
          </p>
        </div>

        {/* Featured testimonial - carousel */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden shadow-xl relative">
            {/* Large decorative quote */}
            <Quote className="absolute top-4 left-4 h-10 w-10 sm:h-16 sm:w-16 text-primary/10" />
            <Quote className="absolute bottom-4 right-4 h-10 w-10 sm:h-16 sm:w-16 text-primary/10 rotate-180" />

            <CardContent className="p-5 sm:p-8 md:p-12">
              <div
                className={`flex flex-col items-center text-center transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {/* Avatar with glow ring */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-pulse-slow scale-110" />
                  <div className="relative w-24 h-24 rounded-full border-3 border-primary/30 overflow-hidden shadow-lg">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-all duration-300 ${
                        i < current.rating
                          ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]"
                          : "text-muted-foreground/30"
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90 mb-8 max-w-2xl italic">
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-bold text-lg text-foreground">{current.name}</p>
                  <p className="text-sm text-primary font-medium">{current.role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
                  onClick={() => goTo((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Ir al testimonio ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        i === active
                          ? "w-8 bg-primary shadow-[0_0_8px_rgba(var(--primary),0.4)]"
                          : "w-2.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
                  onClick={() => goTo((prev) => (prev + 1) % testimonials.length)}
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mini avatar cards - clickable */}
        <div className="flex justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              className={`group flex flex-col items-center gap-2 transition-all duration-500 ${
                i === active ? "scale-110" : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`Ver testimonio de ${t.name}`}
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 transition-all duration-500 shadow-md ${
                  i === active
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-border group-hover:border-primary/40"
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-xs font-medium transition-colors duration-300 ${
                  i === active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
