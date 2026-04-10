"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaGithub,
  FaFigma,
  FaTrello,
  FaJira,
  FaLinux,
} from "react-icons/fa"
import {
  SiSpringboot,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiPostgresql,
  SiIntellijidea,
  SiPostman,
  SiMysql,
  SiSwagger,
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"

const technologies = [
  { name: "Java", color: "#e84a00", icon: FaJava },
  { name: "Spring Boot", color: "#6db33f", icon: SiSpringboot },
  { name: "React", color: "#61dafb", icon: FaReact },
  { name: "Next.js", color: "#000000", icon: SiNextdotjs, useForeground: true },
  { name: "JavaScript", color: "#f0db4f", icon: SiJavascript },
  { name: "HTML5", color: "#e44d26", icon: SiHtml5 },
  { name: "CSS3", color: "#264de4", icon: SiCss },
  { name: "Git", color: "#f05032", icon: FaGitAlt },
  { name: "MongoDB", color: "#47a248", icon: SiMongodb },
  { name: "PostgreSQL", color: "#336791", icon: SiPostgresql },
  { name: "Python", color: "#3776ab", icon: FaPython },
  { name: "Docker", color: "#0db7ed", icon: FaDocker },
]

const tools = [
  { name: "VS Code", color: "#007ACC", icon: VscCode },
  { name: "IntelliJ IDEA", color: "#000000", icon: SiIntellijidea, useForeground: true },
  { name: "Postman", color: "#FF6C37", icon: SiPostman },
  { name: "MySQL Workbench", color: "#4479A1", icon: SiMysql },
  { name: "GitHub", color: "#181717", icon: FaGithub, useForeground: true },
  { name: "Swagger", color: "#85EA2D", icon: SiSwagger },
  { name: "Figma", color: "#F24E1E", icon: FaFigma },
  { name: "Trello", color: "#0052CC", icon: FaTrello },
  { name: "Jira", color: "#0052CC", icon: FaJira },
  { name: "Linux", color: "#FCC624", icon: FaLinux },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Lenguajes & Tecnologías
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <Card
                key={tech.name}
                className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className="mb-3 p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <Icon
                      size={40}
                      color={tech.useForeground ? undefined : tech.color}
                      className={tech.useForeground ? "text-foreground" : ""}
                    />
                  </div>
                  <h3 className="font-semibold text-sm">{tech.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tools & Frameworks */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground uppercase tracking-wide">
            Herramientas & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <Card
                  key={tool.name}
                  className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 80 + 400}ms` }}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div
                      className="mb-3 p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${tool.color}15` }}
                    >
                      <Icon
                        size={40}
                        color={tool.useForeground ? undefined : tool.color}
                        className={tool.useForeground ? "text-foreground" : ""}
                      />
                    </div>
                    <h3 className="font-semibold text-sm">{tool.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
