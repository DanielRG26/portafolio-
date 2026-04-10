import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Calculadora 2.0",
    description:
      "Calculadora avanzada con historial de operaciones y funciones matematicas extendidas.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/DanielRG26/Calculadora-2.0.git",
    category: "APLICACION",
    categoryColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Vehiculos CRUD",
    description:
      "API RESTful para gestion de vehiculos con CRUD completo, validaciones, paginacion y documentacion Swagger.",
    tags: ["Java", "Spring Boot", "MongoDB"],
    github: "https://github.com/DanielRG26/vehuculos_Final.git",
    category: "API REST",
    categoryColor: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    title: "Coffee Shop",
    description:
      "Aplicacion web de cafeteria con carrito de compras, catalogo de productos y diseno responsivo moderno.",
    tags: ["React", "CSS3", "JavaScript"],
    github: "https://github.com/DanielRG26/coffeeShop_2.git",
    category: "FRONTEND",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Diseno Login",
    description:
      "Sistema de autenticacion con diseno moderno, validacion de formularios y animaciones interactivas.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/DanielRG26/dise-o_login-.git",
    category: "FRONTEND",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Education System",
    description:
      "Sistema educativo completo con roles de usuario, control academico y gestion de cursos.",
    tags: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/Goloso0006/education-system.git",
    category: "FULL-STACK",
    categoryColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Proyecto de Diseño",
    description:
      "Aplicacion full-stack con backend en Spring Boot y frontend en JavaScript. Incluye endpoints REST documentados con Postman y arquitectura MVC.",
    tags: ["Java", "Spring Boot", "JavaScript", "CSS"],
    github: "https://github.com/DanielRG26/Proyecto-de-dise-o.git",
    category: "FULL-STACK",
    categoryColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col bg-card"
            >
              {/* Preview placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center border-b border-border/50 relative">
                <Badge className={`absolute top-3 left-3 ${project.categoryColor} border-0`}>
                  {project.category}
                </Badge>
                <span className="text-muted-foreground text-sm font-mono">
                  {"[ preview / captura ]"}
                </span>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 w-full">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 w-full">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Ver en GitHub
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/DanielRG26?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              Ver mas proyectos en GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
