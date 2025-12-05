"use client"

import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { useTranslations } from "../../../../../i18n/client"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-8 sm:py-12 md:py-16">
      <div className="flex justify-between mb-6 sm:mb-8">
        <Text className="text-xl sm:text-2xl md:text-3xl font-bold">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          {useTranslations('home')('view_all')}
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12 md:gap-y-16">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {/* @ts-ignore */}
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
