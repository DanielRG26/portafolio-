import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localeCookie: { maxAge: 60 * 60 * 24 * 365 },
})
