"use client"

import { useTranslations } from "../../../../i18n/client"

export default function FeaturedCollectionsHeader() {
  const t = useTranslations('home')
  
  return (
    <div className="content-container mb-6 sm:mb-8 lg:mb-12 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">{t('featured_collections')}</h2>
      <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{t('handpicked_products')}</p>
    </div>
  )
}
