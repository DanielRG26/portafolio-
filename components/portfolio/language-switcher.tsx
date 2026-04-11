"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const nextLocale = locale === "es" ? "en" : "es"
  const label = locale === "es" ? "EN" : "ES"

  function switchLocale() {
    // Replace current locale in path
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`)
    // Save preference in cookie
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000`
    startTransition(() => {
      router.replace(newPath)
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
