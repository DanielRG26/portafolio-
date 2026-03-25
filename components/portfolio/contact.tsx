import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Correo Electronico (Principal)",
    value: "guevararodriguezdanielfelipe@gmail.com",
    href: "mailto:guevararodriguezdanielfelipe@gmail.com",
  },
  {
    icon: Mail,
    label: "Correo Electronico (Secundario)",
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
    value: "Pasto, Narino, Colombia",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DanielRG26",
    href: "https://github.com/DanielRG26",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Conectemos!</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme a traves 
              de cualquiera de estos medios. Estoy disponible para proyectos y practicas profesionales.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <Card key={item.label} className="border-border/50">
                  <CardContent className="p-4">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 hover:text-primary transition-colors"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            {item.label}
                          </p>
                          <p className="font-medium text-sm break-all">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            {item.label}
                          </p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability Banner */}
            <Card className="border-green-500/30 bg-green-500/5">
              <CardContent className="p-4 flex items-center gap-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <p className="font-medium text-green-700 dark:text-green-400">
                  Disponible para proyectos y practicas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp QR */}
          <div>
            <Card className="border-border/50 overflow-hidden">
              <div className="bg-[#25D366] p-6 text-center">
                <h3 className="text-2xl font-bold mb-1 text-white">Contactame por WhatsApp</h3>
                <p className="text-white/80 text-sm">
                  Escanea este codigo QR con tu camara para iniciar una conversacion
                </p>
              </div>

              <CardContent className="p-6 flex flex-col items-center">
                {/* QR Code */}
                <div className="relative w-56 h-56 mb-4 bg-white p-2 rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-22%20at%201.53.45%20PM-ErSjg2c3qpRCgyJIiZTjtGLTUb7VoQ.jpeg"
                    alt="WhatsApp QR Code"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  O haz clic en el boton para enviar mensaje directo: <strong>+57 323 427 7975</strong>
                </p>

                {/* Social Buttons */}
                <div className="flex flex-col gap-3 w-full">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" size="lg" asChild>
                    <a
                      href="https://wa.me/573234277975?text=Hola%20Daniel,%20me%20gustaria%20contactarte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Enviar mensaje por WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a
                      href="https://www.linkedin.com/in/daniel-felipe-guevara-rodriguez-3b7586208"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
                      Conectar en LinkedIn
                    </a>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-primary">24 horas</p>
                      <p className="text-xs text-muted-foreground">Tiempo de respuesta</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-primary">100%</p>
                      <p className="text-xs text-muted-foreground">Disponibilidad</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
