import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['en', 'zh-HK', 'zh-CN'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export default getRequestConfig(async () => {
  // Get locale from cookie
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value || defaultLocale) as Locale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
