import { Calculator, ChartColumnIncreasing, Gamepad2, Github, Map, Server, ShieldCheck, type LucideIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

import { profile } from "../data/profile"
import { projects, type ProjectCategory } from "../data/projects"

const categories: Record<ProjectCategory, { color: string; icon: LucideIcon }> = {
  application: { color: "bg-amber-500/10 text-amber-700 dark:text-amber-400", icon: Calculator },
  backend: { color: "bg-purple-500/10 text-purple-700 dark:text-purple-400", icon: Server },
  security: { color: "bg-blue-500/10 text-blue-700 dark:text-blue-400", icon: ShieldCheck },
  education: { color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400", icon: Map },
  game: { color: "bg-violet-500/10 text-violet-700 dark:text-violet-400", icon: Gamepad2 },
  data: { color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400", icon: ChartColumnIncreasing },
}

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
          {projects.map((project, index) => {
            const { color, icon: CategoryIcon } = categories[project.category]

            return (
              <Card
                key={project.id}
                className="group border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col bg-card animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center border-b border-border/50 relative overflow-hidden">
                  <Badge className={cn("absolute top-3 left-3 z-10 border-0 uppercase", color, project.image && "bg-card")}>
                    {t(`categories.${project.category}`)}
                  </Badge>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div aria-hidden="true" className={`rounded-3xl p-5 transition-transform duration-500 group-hover:scale-105 ${color}`}>
                      <CategoryIcon className="size-11" />
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`descriptions.${project.id}`)}
                  </p>
                </CardContent>

                <CardFooter className="flex flex-col gap-4 pt-0">
                  <div className="flex flex-wrap gap-2 w-full">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("verProyectoGithub", { project: project.title })}
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      {t("verGithub")}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* View more link */}
        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <a
              href={`${profile.github.url}?tab=repositories`}
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
