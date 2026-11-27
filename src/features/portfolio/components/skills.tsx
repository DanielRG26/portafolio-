import type { CSSProperties } from "react"
import { useTranslations } from "next-intl"

import { technologies, tools } from "../data/skills"

export function Skills() {
  const t = useTranslations("skills")

  return (
    <section id="skills" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            {t("titulo")}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground text-lg">
            {t("subtitulo")}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-20">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            const cardClassName = `group relative rounded-2xl border border-border/50 bg-card p-5 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-(--skill-border) hover:shadow-(--skill-shadow) overflow-hidden no-underline ${tech.repo ? "cursor-pointer" : "cursor-default"}`
            const cardStyle = {
              "--skill-border": `${tech.color}60`,
              "--skill-shadow": `0 8px 30px ${tech.color}20, 0 0 0 1px ${tech.color}30`,
            } as CSSProperties
            const cardContent = (
              <>
                <div className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 transition-all duration-500 group-hover:scale-x-100" style={{ backgroundColor: tech.color }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: `radial-gradient(circle at 50% 30%, ${tech.color}10 0%, transparent 70%)` }} />
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150" style={{ backgroundColor: tech.color }} />
                  <div className="relative p-3 rounded-xl transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${tech.color}12` }}>
                    <Icon size={40} color={tech.useForeground ? undefined : tech.color} className={`${tech.useForeground ? "text-foreground" : ""} transition-transform duration-500 group-hover:rotate-6`} />
                  </div>
                </div>
                <h3 className="font-semibold text-sm relative">{tech.name}</h3>
              </>
            )
            return (
              <div
                key={tech.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {tech.repo ? (
                  <a href={tech.repo} target="_blank" rel="noopener noreferrer" className={cardClassName} style={cardStyle}>{cardContent}</a>
                ) : (
                  <div className={cardClassName} style={cardStyle}>{cardContent}</div>
                )}
              </div>
            )
          })}
        </div>

        {/* Tools & Frameworks */}
        <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <h3 className="text-lg font-semibold mb-8 text-muted-foreground uppercase tracking-wide flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            {t("herramientas")}
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
