import { GraduationCap, BookOpen } from "lucide-react"

const educationItems = [
  {
    type: "university",
    title: "Ingenieria de Software",
    institution: "Universidad Cooperativa de Colombia",
    location: "Pasto, Narino",
    period: "2024 - Presente",
    current: true,
    description: "Actualmente cursando el 5to semestre. Enfoque en desarrollo web full-stack, arquitectura de software y metodologias agiles.",
  },
  {
    type: "highschool",
    title: "Bachillerato",
    institution: "Institucion Educativa Simon Bolivar",
    location: "Pasto, Narino",
    period: "2022",
    current: false,
    description: "Graduado como bachiller academico.",
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "university":
      return GraduationCap
    case "highschool":
      return BookOpen
    default:
      return GraduationCap
  }
}

export function Education() {
  return (
    <section id="educacion" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Educacion Academica
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {educationItems.map((item, index) => {
              const Icon = getIcon(item.type)
              return (
                <div key={index} className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-4 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                      item.current
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-background border-border"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${item.current ? "" : "text-muted-foreground"}`} />
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 rounded-xl border ${
                      item.current
                        ? "bg-primary/5 border-primary/20"
                        : "bg-card border-border/50"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                      </div>
                      <span
                        className={`text-sm font-mono px-3 py-1 rounded-full ${
                          item.current
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>

                    {item.location && (
                      <p className="text-sm text-muted-foreground mb-2">{item.location}</p>
                    )}

                    {item.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {item.current && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          En curso
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
