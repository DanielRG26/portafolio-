"use client"

import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"

const contactMethods = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+57 323 427 7975",
    description: "Respuesta rapida, escríbeme directo",
    href: "https://wa.me/573234277975?text=Hola%20Daniel,%20me%20gustaria%20contactarte",
    color: "#25D366",
    primary: true,
  },
  {
    icon: Mail,
    label: "Email Principal",
    value: "guevararodriguezdanielfelipe@gmail.com",
    description: "Para propuestas y colaboraciones",
    href: "mailto:guevararodriguezdanielfelipe@gmail.com",
    color: "#3b82f6",
    primary: false,
  },
  {
    icon: Mail,
    label: "Email Secundario",
    value: "grdfelipe@icloud.com",
    description: "Contacto alternativo",
    href: "mailto:grdfelipe@icloud.com",
    color: "#8b5cf6",
    primary: false,
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+57 323 427 7975",
    description: "Llamadas y mensajes",
    href: "tel:+573234277975",
    color: "#f59e0b",
    primary: false,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "DanielRG26",
    href: "https://github.com/DanielRG26",
    color: "#6e40c9",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Daniel Guevara",
    href: "https://www.linkedin.com/in/daniel-felipe-guevara-rodriguez-3b7586208",
    color: "#0077b5",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground text-lg">
            Tienes un proyecto en mente o quieres colaborar? Estoy disponible para
            proyectos y practicas profesionales.
          </p>
          {/* Availability */}
          <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Disponible para proyectos y practicas
            </span>
          </div>
        </div>

        {/* Contact methods grid - 2x2 */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <Card
                  className="group border-border/50 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden cursor-pointer"
                  style={{
                    borderColor: method.primary ? `${method.color}40` : undefined,
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="h-1 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: method.color }}
                  />
                  <CardContent className="p-6 relative">
                    {/* Background glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 0% 0%, ${method.color}10 0%, transparent 60%)`,
                      }}
                    />

                    <div className="relative flex items-start gap-4">
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-all duration-500 scale-150"
                          style={{ backgroundColor: method.color }}
                        />
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                          style={{ backgroundColor: `${method.color}15` }}
                        >
                          <Icon
                            className="h-6 w-6 transition-transform duration-500 group-hover:rotate-6"
                            style={{ color: method.color }}
                            size={24}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-foreground">{method.label}</p>
                          <ArrowUpRight
                            className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          />
                        </div>
                        <p className="text-sm font-medium text-foreground/80 break-all mb-1">
                          {method.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>

        {/* Bottom row: location + social */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {/* Location */}
          <Card
            className="group border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Ubicacion</p>
                <p className="font-medium text-sm">Pasto, Nariño</p>
              </div>
            </CardContent>
          </Card>

          {/* Social links */}
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fade-in-up"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <Card className="group border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer"
                  style={{ borderColor: undefined }}
                >
                  <CardContent className="p-5 flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: `${link.color}15` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: link.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{link.label}</p>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
