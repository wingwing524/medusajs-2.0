"use client"

import { useTranslations } from "../../../../i18n/client"

export default function FeaturedCollectionsHeader() {
  const t = useTranslations('home')
  
  return (
    <div className="content-container mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('featured_collections')}</h2>
      <p className="text-gray-600 text-lg">{t('handpicked_products')}</p>
    </div>
  )
}
