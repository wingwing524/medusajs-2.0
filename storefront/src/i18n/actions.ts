"use server"

import { cookies } from 'next/headers'
import { locales, defaultLocale, type Locale } from './request'

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value
  
  if (locale && locales.includes(locale as Locale)) {
    return locale as Locale
  }
  
  return defaultLocale
}

export async function setLocale(locale: Locale) {
  const cookieStore = await cookies()
  cookieStore.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60, // 1 year
    sameSite: 'lax'
  })
}
