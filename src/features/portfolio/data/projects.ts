export interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  category: string
  categoryColor: string
  image: string | null
}

export const projects: Project[] = [
  {
    title: "Calculadora 2.0",
    description: "Calculadora avanzada con historial de operaciones y funciones matematicas extendidas.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/DanielRG26/Calculadora-2.0.git",
    category: "APLICACION",
    categoryColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    image: "/images/projects/Calculadora 2.0.png",
  },
  {
    title: "Education System",
    description: "Sistema educativo completo con roles de usuario, control academico y gestion de cursos.",
    tags: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/Goloso0006/education-system.git",
    category: "BACKEND",
    categoryColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    image: "/images/projects/education-sistem.png",
  },
]
