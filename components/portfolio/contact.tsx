"use client"

import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"

const contactInfo = [
  {
    icon: Mail,
    label: "Email Principal",
    value: "guevararodriguezdanielfelipe@gmail.com",
    href: "mailto:guevararodriguezdanielfelipe@gmail.com",
  },
  {
    icon: Mail,
    label: "Email Secundario",
    value: "grdfelipe@icloud.com",
    href: "mailto:grdfelipe@icloud.com",
  },
  {
    icon: Phone,
    label: "Telefono / WhatsApp",
    value: "+57 323 427 7975",
    href: "tel:+573234277975",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Pasto, Nariño, Colombia",
    href: null,
  },
]

const socialLinks = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/573234277975?text=Hola%20Daniel,%20me%20gustaria%20contactarte",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/DanielRG26",
    color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-felipe-guevara-rodriguez-3b7586208",
    color: "bg-blue-600 hover:bg-blue-700",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Top: intro + WhatsApp CTA */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Intro text */}
          <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-2xl font-bold mb-3">
              Trabajemos juntos<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
              Tienes un proyecto en mente o quieres colaborar? Estoy disponible para proyectos
              y practicas profesionales. No dudes en escribirme.
            </p>

            {/* Availability */}
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Disponible para proyectos y practicas
              </span>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden group hover:shadow-xl hover:border-primary/40 transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Mensaje directo</p>
                    <p className="text-sm text-muted-foreground">Respuesta en menos de 24h</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  La forma mas rapida de contactarme. Haz clic y escríbeme directamente a WhatsApp.
                </p>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://wa.me/573234277975?text=Hola%20Daniel,%20me%20gustaria%20contactarte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Enviar mensaje por WhatsApp
                    <ArrowUpRight className="h-4 w-4 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={item.label}
              className="group border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-5">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="font-medium text-sm break-all group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </a>
                ) : (
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="font-medium text-sm">{item.value}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Button
                key={link.label}
                className={`${link.color} text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                size="lg"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon className="h-5 w-5" size={20} />
                  {link.label}
                </a>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
