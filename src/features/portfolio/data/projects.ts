export type ProjectCategory = "application" | "backend" | "security" | "education" | "game" | "data"

export interface Project {
  id: string
  title: string
  tags: string[]
  github: string
  category: ProjectCategory
  image?: string
}

export const projects: Project[] = [
  {
    id: "calculadora-inteligente",
    title: "Calculadora Inteligente",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/DanielRG26/Calculadora-2.0.git",
    category: "application",
    image: "/images/projects/Calculadora 2.0.png",
  },
  {
    id: "education-system",
    title: "Education System",
    tags: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/Goloso0006/education-system.git",
    category: "backend",
    image: "/images/projects/education-sistem.png",
  },
  {
    id: "zero-trust",
    title: "Zero Trust",
    tags: ["Next.js", "Spring Boot", "Apache Kafka", "PostgreSQL"],
    github: "https://github.com/edben110/Zero-Trust",
    category: "security",
  },
  {
    id: "geodudas",
    title: "GeoDudas",
    tags: ["Angular", "TypeScript", "MapLibre GL JS"],
    github: "https://github.com/edben110/Geodudas",
    category: "education",
  },
  {
    id: "code-runner",
    title: "Code Runner 3.0",
    tags: ["JavaScript", "Three.js", "WebGL"],
    github: "https://github.com/DanielRG26/Code_Runner_3.0",
    category: "game",
  },
  {
    id: "analisis-accidentes",
    title: "Análisis de Accidentes de Tránsito",
    tags: ["Python", "PySpark", "PostgreSQL", "Power BI"],
    github: "https://github.com/edben110/AnalisisAccidentesTransito",
    category: "data",
  },
]
