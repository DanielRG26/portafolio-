"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, GraduationCap, Calendar, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const t = useTranslations("hero")
  const roles = [t("roles.0"), t("roles.1"), t("roles.2")]
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 45)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 25)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-slide-in-left">
              <Badge variant="secondary" className="mb-6 gap-2">
                <Sparkles className="h-3 w-3 animate-spin-slow" />
                {t("disponible")}
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
              <span className="text-primary inline-block animate-slide-in-left" style={{ animationDelay: "80ms" }}>{t("nombre")}</span>
              <br />
              <span className="text-foreground inline-block animate-slide-in-left" style={{ animationDelay: "160ms" }}>{t("apellido")}</span>
            </h1>
            <div className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 h-9 animate-fade-in-up" style={{ animationDelay: "250ms" }}>
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-6 sm:h-7 bg-primary ml-1 animate-blink align-middle" />
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "350ms" }}>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{t("ubicacion")}</span>
              <span className="flex items-center gap-1.5"><GraduationCap className="h-4 w-4 text-primary" />{t("universidad")}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" />{t("periodo")}</span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
              <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"><a href="#proyectos">{t("verProyectos")}</a></Button>
              <Button variant="outline" size="lg" asChild className="hover:-translate-y-1 hover:scale-105 transition-all duration-300"><a href="#contacto">{t("contactar")}</a></Button>
            </div>
            <div className="flex justify-center lg:justify-start gap-3 animate-fade-in-up" style={{ animationDelay: "550ms" }}>
              {[
                { href: "https://github.com/DanielRG26", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/daniel-felipe-guevara-rodriguez-3b7586208", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:guevararodriguezdanielfelipe@gmail.com", icon: Mail, label: "Email" },
              ].map((s) => (
                <Button key={s.label} variant="outline" size="icon" className="hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:scale-110 transition-all duration-300" asChild>
                  <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={s.label}><s.icon className="h-5 w-5" /></a>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:order-2 animate-scale-in" style={{ animationDelay: "150ms" }}>
            <div className="relative group">
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/15 animate-spin-very-slow" />
              <div className="absolute -inset-3 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-125 opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-slow" />
              <div className="absolute -top-2 -right-2 z-10"><span className="flex h-4 w-4"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" /></span></div>
              <div className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-float" />
              <div className="absolute -bottom-3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/40 animate-float-delayed" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:shadow-primary/25 transition-all duration-500">
                <Image src="/images/profile.jpeg" alt="Daniel Felipe Guevara Rodriguez" fill className="object-cover group-hover:scale-105 transition-transform duration-500" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
