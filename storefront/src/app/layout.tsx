import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Raleway } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from '../i18n/actions'
import "styles/globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const locale = await getLocale()

  return (
    <html lang={locale} data-mode="light" className={raleway.variable}>
      <body className="font-raleway">
        <NextIntlClientProvider>
          <main className="relative">{props.children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
