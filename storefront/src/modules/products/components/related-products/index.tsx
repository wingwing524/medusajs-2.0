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

  if (!products.length) {
    return null
  }
  
  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
          {t('related_products')}
        </span>
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          {t('related_products_description')}
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {products.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
