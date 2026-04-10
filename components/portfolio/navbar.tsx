"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#skills", label: "Skills" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#educacion", label: "Educacion" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#inicio")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""))
      let current = sections[0]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            current = id
          }
        }
      }
      setActiveSection(`#${current}`)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#inicio"
            className="group flex items-center gap-2 font-mono text-lg font-bold text-primary hover:text-primary/80 transition-all duration-300"
          >
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              D
            </span>
            <span className="hidden sm:inline">Daniel Guevara</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5 bg-secondary/50 rounded-full px-1.5 py-1 border border-border/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/25 animate-nav-pill" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground rounded-full transition-all duration-300 hover:bg-secondary hover:rotate-180"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Cambiar tema</span>
              </Button>
            )}

            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex items-center gap-2 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              asChild
            >
              <a href="/CV_Daniel_Guevara.pdf" download>
                <Download className="h-4 w-4" />
                Descargar CV
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-5 h-5">
                <span
                  className={cn(
                    "absolute left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300",
                    isOpen ? "top-2.5 rotate-45" : "top-1"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-2.5 w-5 h-0.5 bg-current rounded-full transition-all duration-300",
                    isOpen ? "opacity-0 scale-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300",
                    isOpen ? "top-2.5 -rotate-45" : "top-4"
                  )}
                />
              </div>
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300",
                      isActive
                        ? "text-primary bg-primary/10 border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Button
                variant="default"
                size="sm"
                className="mt-4 mx-4 flex items-center gap-2 rounded-full"
                asChild
              >
                <a href="/CV_Daniel_Guevara.pdf" download>
                  <Download className="h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
