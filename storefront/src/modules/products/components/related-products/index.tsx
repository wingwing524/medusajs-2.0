"use client"

import Product from "../product-preview"
import { HttpTypes } from "@medusajs/types"
import { useTranslations } from "../../../../i18n/client"

type RelatedProductsProps = {
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
}

export default function RelatedProducts({
  products,
  region,
}: RelatedProductsProps) {
  const t = useTranslations('product')

  if (!products || !products.length) {
    return null
  }
  
  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8 lg:mb-12">
        <span className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
          {t('related_products')}
        </span>
        <p className="text-lg sm:text-xl lg:text-2xl text-ui-fg-base max-w-lg">
          {t('related_products_description')}
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-2">
        {products.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
