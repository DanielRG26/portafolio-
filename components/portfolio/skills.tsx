"use client"

import { useState } from "react"
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaGithub,
  FaFigma,
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
  { name: "Java", color: "#e84a00", icon: FaJava, level: 90, repo: "https://github.com/DanielRG26/vehuculos_Final" },
  { name: "Spring Boot", color: "#6db33f", icon: SiSpringboot, level: 85, repo: "https://github.com/Goloso0006/education-system" },
  { name: "React", color: "#61dafb", icon: FaReact, level: 80, repo: "https://github.com/DanielRG26/coffeeShop_2" },
  { name: "Next.js", color: "#000000", icon: SiNextdotjs, useForeground: true, level: 75, repo: "https://github.com/DanielRG26/dash-board" },
  { name: "JavaScript", color: "#f0db4f", icon: SiJavascript, level: 88, repo: "https://github.com/DanielRG26/Calculadora-2.0" },
  { name: "HTML5", color: "#e44d26", icon: SiHtml5, level: 95, repo: "https://github.com/edben110/landing-page" },
  { name: "CSS3", color: "#264de4", icon: SiCss, level: 90, repo: "https://github.com/DanielRG26/dise-o_login-" },
  { name: "Git", color: "#f05032", icon: FaGitAlt, level: 85, repo: "https://github.com/DanielRG26?tab=repositories" },
  { name: "MongoDB", color: "#47a248", icon: SiMongodb, level: 78, repo: "https://github.com/DanielRG26/vehuculos_Final" },
  { name: "PostgreSQL", color: "#336791", icon: SiPostgresql, level: 80, repo: "https://github.com/Goloso0006/education-system" },
  { name: "Python", color: "#3776ab", icon: FaPython, level: 70, repo: "https://github.com/DanielRG26/Proyecto_Escolar" },
  { name: "Docker", color: "#0db7ed", icon: FaDocker, level: 65, repo: "https://github.com/DanielRG26?tab=repositories" },
]

const tools = [
  { name: "VS Code", color: "#007ACC", icon: VscCode },
  { name: "IntelliJ IDEA", color: "#FC801D", icon: SiIntellijidea },
  { name: "Postman", color: "#FF6C37", icon: SiPostman },
  { name: "MySQL Workbench", color: "#4479A1", icon: SiMysql },
  { name: "GitHub", color: "#6e40c9", icon: FaGithub },
  { name: "Swagger", color: "#85EA2D", icon: SiSwagger },
  { name: "Figma", color: "#F24E1E", icon: FaFigma },
  { name: "Linux", color: "#FCC624", icon: FaLinux },
  { name: "Jira", color: "#0052CC", icon: FaJira },
]

export function Skills() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Lenguajes & Tecnologías
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground text-lg">
            Tecnologías que domino y uso en mis proyectos
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-20">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            const isHovered = hoveredTech === tech.name
            return (
              <div
                key={tech.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <a
                  href={tech.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl border border-border/50 bg-card p-5 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden block no-underline"
                  style={{
                    borderColor: isHovered ? `${tech.color}60` : undefined,
                    boxShadow: isHovered ? `0 8px 30px ${tech.color}20, 0 0 0 1px ${tech.color}30` : undefined,
                  }}
                >
                  {/* Colored top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 origin-left"
                    style={{
                      backgroundColor: tech.color,
                      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />

                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${tech.color}10 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon container */}
                  <div className="relative mb-4">
                    {/* Glow ring behind icon */}
                    <div
                      className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-all duration-500 scale-150"
                      style={{ backgroundColor: tech.color }}
                    />
                    <div
                      className="relative p-3 rounded-xl transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${tech.color}12` }}
                    >
                      <Icon
                        size={40}
                        color={tech.useForeground ? undefined : tech.color}
                        className={`${tech.useForeground ? "text-foreground" : ""} transition-transform duration-500 group-hover:rotate-6`}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-semibold text-sm relative">{tech.name}</h3>
                </a>
              </div>
            )
          })}
        </div>

        {/* Tools & Frameworks */}
        <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <h3 className="text-lg font-semibold mb-8 text-muted-foreground uppercase tracking-wide flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            Herramientas & Frameworks
            <span className="h-px flex-1 bg-border" />
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <div
                  key={tool.name}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 60}ms` }}
                >
                  <div
                    className="relative flex items-center gap-3 px-4 py-4 rounded-xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 cursor-default overflow-hidden"
                  >
                    {/* Left color accent */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: tool.color }}
                    />

                    {/* Background shimmer on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${tool.color}08 0%, transparent 50%, ${tool.color}05 100%)`,
                      }}
                    />

                    {/* Icon with animated background */}
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                        style={{
                          backgroundColor: `${tool.color}12`,
                          boxShadow: `0 0 0 0 ${tool.color}00`,
                        }}
                      >
                        <Icon
                          size={22}
                          color={tool.color}
                          className="transition-transform duration-500 group-hover:-rotate-6"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <span className="text-sm font-medium relative group-hover:text-foreground transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
