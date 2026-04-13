"use client"

import { GraduationCap, BookOpen, MapPin, Calendar, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

const educationItems = [
  {
    icon: GraduationCap,
    title: "Ingenieria de Software",
    institution: "Universidad Cooperativa de Colombia",
    location: "Pasto, Nariño",
    period: "2024 - Presente",
    semester: "5to Semestre",
    current: true,
    color: "#3b82f6",
    description:
      "Enfoque en desarrollo web, arquitectura de software y metodologias agiles. Participacion activa en proyectos colaborativos aplicando patrones de diseño y buenas practicas.",
    highlights: ["Desarrollo Web", "Arquitectura MVC", "Metodologias Agiles", "GitFlow"],
  },
  {
    icon: BookOpen,
    title: "Bachillerato Academico",
    institution: "Institucion Educativa Simon Bolivar",
    location: "Pasto, Nariño",
    period: "2022",
    semester: null,
    current: false,
    color: "#8b5cf6",
    description: "Graduado como bachiller academico con enfasis en ciencias y tecnologia.",
    highlights: ["Ciencias", "Tecnologia"],
  },
]

const stats = [
  { icon: Calendar, labelKey: "semestreActual", value: "5to", color: "#3b82f6" },
  { icon: Award, labelKey: "proyectosAcademicos", value: "6+", color: "#f59e0b" },
  { icon: TrendingUp, labelKey: "tecnologiasAprendidas", value: "12+", color: "#10b981" },
]

export function Education() {
  const t = useTranslations("education")
  return (
    <section id="educacion" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

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

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Vertical line - animated gradient */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />

          <div className="space-y-10">
            {educationItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="relative pl-14 sm:pl-24 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 200}ms` }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 sm:left-2">
                    <div className="relative">
                      {/* Glow */}
                      {item.current && (
                        <div
                          className="absolute inset-0 rounded-full blur-md animate-pulse-slow scale-150"
                          style={{ backgroundColor: `${item.color}30` }}
                        />
                      )}
                      <div
                        className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                        style={{
                          backgroundColor: item.current ? item.color : "var(--background)",
                          borderColor: item.current ? item.color : "var(--border)",
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: item.current ? "white" : "var(--muted-foreground)" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <Card
                    className="group border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      borderColor: item.current ? `${item.color}30` : undefined,
                    }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="h-1 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Background glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 0% 0%, ${item.color}08 0%, transparent 50%)`,
                      }}
                    />

                    <CardContent className="p-4 sm:p-6 relative">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm sm:text-base text-muted-foreground font-medium">{item.institution}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                          <Badge
                            className="font-mono"
                            style={{
                              backgroundColor: `${item.color}15`,
                              color: item.color,
                              borderColor: `${item.color}30`,
                            }}
                          >
                            {item.period}
                          </Badge>
                          {item.current && (
                            <div className="flex items-center gap-1.5">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                              </span>
                              <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                                {t("enCurso")}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                        {item.semester && (
                          <>
                            <span className="mx-1">·</span>
                            <GraduationCap className="h-3.5 w-3.5" />
                            {item.semester}
                          </>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((h) => (
                          <Badge
                            key={h}
                            variant="secondary"
                            className="text-xs hover:bg-primary/10 hover:text-primary transition-colors duration-300 cursor-default"
                          >
                            {h}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid sm:grid-cols-3 gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.labelKey}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <Card className="border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg text-center">
                  <div
                    className="h-1 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: stat.color }}
                  />
                  <CardContent className="p-6">
                    <div className="relative mx-auto mb-3 w-fit">
                      <div
                        className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-all duration-500 scale-150"
                        style={{ backgroundColor: stat.color }}
                      />
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110"
                        style={{ backgroundColor: `${stat.color}15` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: stat.color }} />
                      </div>
                    </div>
                    <p
                      className="text-3xl font-bold mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{t(stat.labelKey)}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
