"use client"

import { Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { projects } from "@/lib/data/projects"

export function Projects() {
  const t = useTranslations("projects")
  return (
    <section id="proyectos" className="py-20 bg-secondary/30 relative overflow-hidden">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col bg-card animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Preview */}
              <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center border-b border-border/50 relative overflow-hidden">
                <Badge className={`absolute top-3 left-3 z-10 ${project.categoryColor} border-0`}>
                  {project.category}
                </Badge>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-muted-foreground text-sm font-mono">
                    {t("preview")}
                  </span>
                )}
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
                      {t("verGithub")}
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
              {t("verMas")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
