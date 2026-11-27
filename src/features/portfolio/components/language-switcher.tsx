"use client"

import { useLocale } from "next-intl"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

import { usePathname, useRouter } from "@/i18n/navigation"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const nextLocale = locale === "es" ? "en" : "es"
  const label = locale === "es" ? "EN" : "ES"

  function switchLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={switchLocale}
      disabled={isPending}
      className="text-muted-foreground hover:text-foreground rounded-full transition-all duration-300 hover:bg-secondary relative"
      aria-label={`Switch to ${nextLocale === "en" ? "English" : "Español"}`}
    >
      <Globe className="h-4 w-4 absolute opacity-50" />
      <span className="text-xs font-bold relative z-10">{label}</span>
    </Button>
  )
}
