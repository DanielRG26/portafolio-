import { Github, Linkedin, Mail, Heart } from "lucide-react"

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="py-8 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-muted-foreground">
              &copy; {currentYear} Daniel Felipe Guevara Rodriguez
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Ingenieria de Software &bull; Universidad Cooperativa de Colombia &bull; Pasto
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DanielRG26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-felipe-guevara-rodriguez-3b7586208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:guevararodriguezdanielfelipe@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Made with */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-3 w-3 text-red-500 fill-red-500" /> en Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
