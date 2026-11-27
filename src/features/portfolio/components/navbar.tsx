"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { profile } from "../data/profile"
import { LanguageSwitcher } from "./language-switcher"

const navItems = [
  { id: "inicio", label: "inicio" },
  { id: "sobre-mi", label: "sobreMi" },
  { id: "skills", label: "skills" },
  { id: "proyectos", label: "proyectos" },
  { id: "testimonios", label: "testimonios" },
  { id: "educacion", label: "educacion" },
  { id: "contacto", label: "contacto" },
] as const

export function Navbar() {
  const t = useTranslations("nav")
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<(typeof navItems)[number]["id"]>("inicio")
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      let current: typeof activeSection = "inicio"
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || isOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end lg:justify-between h-16">
          {/* Spacer for balance on desktop */}
          <div className="hidden lg:block w-[140px]" />

          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex items-center gap-0.5 bg-secondary/50 rounded-full px-1.5 py-1 border border-border/50">
            {navItems.map(({ id, label }) => {
              const isActive = activeSection === id
              return (
                <Link key={id} href={`#${id}`} aria-current={isActive ? "location" : undefined} className={cn("relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300", isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>
                  {isActive && <span className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/25 animate-nav-pill" />}
                  <span className="relative z-10">{t(label)}</span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="text-muted-foreground hover:text-foreground rounded-full transition-all duration-300 hover:bg-secondary hover:rotate-180">
              <Sun className="hidden h-5 w-5 dark:block" />
              <Moon className="h-5 w-5 dark:hidden" />
              <span className="sr-only">{t("cambiarTema")}</span>
            </Button>
            <Button variant="default" size="sm" className="hidden sm:flex items-center gap-2 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300" asChild>
              <a href={profile.cv} download>
                <Download className="h-4 w-4" />
                {t("descargarCV")}
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden rounded-full" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation">
              <div className="relative w-5 h-5">
                <span className={cn("absolute left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300", isOpen ? "top-2.5 rotate-45" : "top-1")} />
                <span className={cn("absolute left-0 top-2.5 w-5 h-0.5 bg-current rounded-full transition-all duration-300", isOpen ? "opacity-0 scale-0" : "opacity-100")} />
                <span className={cn("absolute left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300", isOpen ? "top-2.5 -rotate-45" : "top-4")} />
              </div>
              <span className="sr-only">{t("menu")}</span>
            </Button>
          </div>
        </div>

        <div id="mobile-navigation" inert={!isOpen} className={cn("lg:hidden overflow-hidden transition-all duration-500 ease-in-out", isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navItems.map(({ id, label }, index) => {
                const isActive = activeSection === id
                return (
                  <Link key={id} href={`#${id}`} aria-current={isActive ? "location" : undefined} onClick={() => setIsOpen(false)} className={cn("px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300", isActive ? "text-primary bg-primary/10 border-l-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary")} style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}>
                    {t(label)}
                  </Link>
                )
              })}
              <Button variant="default" size="sm" className="mt-4 mx-4 flex items-center gap-2 rounded-full" asChild>
                <a href={profile.cv} download>
                  <Download className="h-4 w-4" />
                  {t("descargarCV")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
