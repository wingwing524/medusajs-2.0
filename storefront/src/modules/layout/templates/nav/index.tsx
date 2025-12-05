import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { getCustomer } from "@lib/data/customer"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import User from "@modules/common/icons/user"
import Bell from "@modules/common/icons/bell"
import LanguageSelector from "@modules/layout/components/language-selector"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  const { product_categories } = await getCategoriesList(0, 6)
  const { collections } = await getCollectionsList(0, 6)
  const customer = await getCustomer().catch(() => null)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} categories={product_categories} collections={collections} customer={customer} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              V'lora
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden lg:flex items-center gap-x-6 h-full">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base min-h-[44px] flex items-center"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base min-w-[44px] min-h-[44px] flex items-center justify-center"
                href="/notifications"
                data-testid="nav-notifications-link"
              >
                <Bell size="20" />
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base min-w-[44px] min-h-[44px] flex items-center justify-center"
                href="/account"
                data-testid="nav-account-link"
              >
                <User size="20" />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <div className="hidden lg:flex items-center gap-x-2 h-full border-l border-ui-border-base pl-6">
              <LanguageSelector />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
