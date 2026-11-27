import { Award, BookOpen, Calendar, GraduationCap, TrendingUp } from "lucide-react"

import { profile } from "./profile"

export const educationItems = [
  {
    icon: GraduationCap,
    title: "Ingenieria de Software",
    institution: "Universidad Cooperativa de Colombia",
    location: profile.location,
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
    location: profile.location,
    period: "2022",
    semester: null,
    current: false,
    color: "#8b5cf6",
    description: "Graduado como bachiller academico con enfasis en ciencias y tecnologia.",
    highlights: ["Ciencias", "Tecnologia"],
  },
]

export const educationStats = [
  { icon: Calendar, labelKey: "semestreActual", value: "5to", color: "#3b82f6" },
  { icon: Award, labelKey: "proyectosAcademicos", value: "6+", color: "#f59e0b" },
  { icon: TrendingUp, labelKey: "tecnologiasAprendidas", value: "12+", color: "#10b981" },
]
