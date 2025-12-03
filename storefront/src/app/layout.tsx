import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Raleway } from "next/font/google"
import "styles/globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={raleway.variable}>
      <body className="font-raleway">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
