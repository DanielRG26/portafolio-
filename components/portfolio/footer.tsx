"use client"

import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-sm text-muted-foreground">
          {t("copyright", { year: currentYear })}
        </p>
      </div>
    </footer>
  )
}
