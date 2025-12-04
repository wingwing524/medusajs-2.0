import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import LiveChat from "@modules/common/components/live-chat"
import { getBaseURL } from "@lib/util/env"
import { getCategoriesList } from "@lib/data/categories"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const { product_categories } = await getCategoriesList(0, 10)

  return (
    <>
      <Nav />
      {props.children}
      <Footer categories={product_categories || []} />
      <LiveChat />
    </>
  )
}
