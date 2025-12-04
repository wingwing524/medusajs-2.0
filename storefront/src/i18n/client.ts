"use client"

import { useLocale as useNextIntlLocale, useTranslations as useNextIntlTranslations } from 'next-intl'
import { useTransition } from 'react'
import { setLocale as setLocaleCookie } from './actions'

export type Locale = 'en' | 'zh-HK' | 'zh-CN'

export function useLocale() {
  return useNextIntlLocale() as Locale
}

export function useTranslations(namespace?: string) {
  return useNextIntlTranslations(namespace)
}

export function useChangeLocale() {
  const [isPending, startTransition] = useTransition()

  const changeLocale = (locale: Locale) => {
    startTransition(async () => {
      await setLocaleCookie(locale)
      window.location.reload()
    })
  }

  return { changeLocale, isPending }
}
