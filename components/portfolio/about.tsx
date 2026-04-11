"use client"

import { GraduationCap, MapPin, Languages, BookOpen, Calendar, Code2, Users, Lightbulb, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

export function About() {
  const t = useTranslations("about")

  const highlights = [
    { icon: Code2, title: t("highlights.desarrolloWeb"), description: t("highlights.desarrolloWebDesc"), color: "#3b82f6" },
    { icon: Users, title: t("highlights.trabajoEquipo"), description: t("highlights.trabajoEquipoDesc"), color: "#8b5cf6" },
    { icon: Lightbulb, title: t("highlights.aprendizaje"), description: t("highlights.aprendizajeDesc"), color: "#f59e0b" },
    { icon: Target, title: t("highlights.resultados"), description: t("highlights.resultadosDesc"), color: "#10b981" },
  ]

  const personalInfo = [
    { icon: GraduationCap, label: t("carrera"), value: t("carreraVal") },
    { icon: MapPin, label: t("ciudad"), value: t("ciudadVal") },
    { icon: BookOpen, label: t("semestre"), value: t("semestreVal") },
    { icon: Calendar, label: t("nacimiento"), value: t("nacimientoVal") },
    { icon: Languages, label: t("idiomas"), value: t("idiomasVal") },
    { icon: GraduationCap, label: t("universidadLabel"), value: t("universidadVal") },
  ]

  const interests = Array.from({ length: 8 }, (_, i) => t(`interesesTags.${i}`))

  return (
    <section id="sobre-mi" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            {t("titulo")}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground text-lg">
            {t("subtitulo")}
          </p>
        </div>

        {/* Main bio - full width intro */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
            <CardContent className="p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
                  {t.rich("bio1", { strong: (chunks) => <strong className="text-primary">{chunks}</strong> })}
                </p>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  {t.rich("bio2", { strong: (chunks) => <strong className="text-primary">{chunks}</strong> })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlights grid - 4 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative rounded-2xl border border-border/50 bg-card p-6 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden cursor-default"
                  style={{
                    "--highlight-color": item.color,
                  } as React.CSSProperties}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${item.color}10 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div className="relative mb-4">
                      <div
                        className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-all duration-500 scale-150"
                        style={{ backgroundColor: item.color }}
                      />
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <Icon
                          className="h-6 w-6 transition-transform duration-500 group-hover:rotate-6"
                          style={{ color: item.color }}
                        />
                      </div>
                    </div>

                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom row: personal info + interests */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Personal info - 3 cols */}
          <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <h3 className="text-lg font-semibold mb-5 text-muted-foreground uppercase tracking-wide flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              {t("infoPersonal")}
              <span className="h-px flex-1 bg-border" />
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <Card
                  key={item.label}
                  className="group border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground text-sm">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Availability card */}
              <Card className="border-green-500/30 bg-green-500/5 sm:col-span-2 group hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                  </div>
                  <p className="font-medium text-green-700 dark:text-green-400">
                    {t("disponible")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interests - 2 cols */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <h3 className="text-lg font-semibold mb-5 text-muted-foreground uppercase tracking-wide flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              {t("intereses")}
              <span className="h-px flex-1 bg-border" />
            </h3>
            <Card className="border-border/50">
              <CardContent className="p-6 flex flex-wrap gap-2 content-start">
                {interests.map((interest, index) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default animate-fade-in-up"
                    style={{ animationDelay: `${800 + index * 60}ms` }}
                  >
                    {interest}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
