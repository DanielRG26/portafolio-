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
    title: "Vehiculos CRUD",
    description: "API RESTful para gestion de vehiculos con CRUD completo, validaciones, paginacion y documentacion Swagger.",
    tags: ["Java", "Spring Boot", "MongoDB"],
    github: "https://github.com/DanielRG26/vehuculos_Final.git",
    category: "API REST",
    categoryColor: "bg-green-500/10 text-green-600 dark:text-green-400",
    image: "/images/projects/vehiculos-crud.svg",
  },
  {
    title: "Coffee Shop",
    description: "Aplicacion web de cafeteria con carrito de compras, catalogo de productos y diseno responsivo moderno.",
    tags: ["React", "CSS3", "JavaScript"],
    github: "https://github.com/DanielRG26/coffeeShop_2.git",
    category: "FRONTEND",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    image: "/images/projects/CoffeShop2.png",
  },
  {
    title: "Diseno Login",
    description: "Sistema de autenticacion con diseno moderno, validacion de formularios y animaciones interactivas.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/DanielRG26/dise-o_login-.git",
    category: "FRONTEND",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    image: "/images/projects/dise-o_login-.png",
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
  {
    title: "Memoria Virtual",
    description: "Entorno 3D interactivo desarrollado con React y Three.js, aplicando programacion orientada a objetos y arquitectura modular escalable.",
    tags: ["React", "Three.js", "JavaScript", "Vite"],
    github: "https://github.com/DanielRG26/MemoriaVirtual.git",
    category: "3D / INTERACTIVO",
    categoryColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    image: "/images/projects/MemoriaVirtual.png",
  },
]
