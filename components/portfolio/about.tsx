import { GraduationCap, MapPin, Languages, BookOpen, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const infoCards = [
  {
    icon: GraduationCap,
    label: "Carrera",
    value: "Ingenieria de Software",
  },
  {
    icon: MapPin,
    label: "Ciudad",
    value: "Pasto, Narino",
  },
  {
    icon: Languages,
    label: "Idiomas",
    value: "Espanol (Nativo), Ingles (Basico)",
  },
  {
    icon: Calendar,
    label: "Nacimiento",
    value: "26/02/2006",
  },
  {
    icon: BookOpen,
    label: "Semestre",
    value: "5to Semestre",
  },
]

const interests = [
  "Desarrollo Web",
  "Backend",
  "APIs REST",
  "Bases de Datos",
  "Patrones de Diseno",
  "GitFlow",
]

export function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Sobre Mi
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Soy estudiante de <strong className="text-foreground">Ingenieria de Software</strong> en 
              la Universidad Cooperativa de Colombia sede Pasto. Me especializo en desarrollo web 
              full-stack con enfoque en arquitectura limpia y patrones de diseno.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Me apasiona el trabajo en equipo con metodologias agiles, el uso de{" "}
              <strong className="text-foreground">GitFlow</strong> para proyectos colaborativos 
              y crear soluciones reales que impacten a las personas.
            </p>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="px-3 py-1">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {infoCards.map((item) => (
              <Card key={item.label} className="border-border/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Availability card */}
            <Card className="border-green-500/30 bg-green-500/5 sm:col-span-2">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                </div>
                <p className="font-medium text-green-700 dark:text-green-400">
                  Disponible para proyectos y practicas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
