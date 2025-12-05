"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useTranslations } from "../../../../i18n/client"

export default function CategoryShowcase() {
  const t = useTranslations('home')
  
  const categories = [
    {
      titleKey: "category_bags",
      descriptionKey: "category_bags_desc",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      href: "/categories/bags",
    },
    {
      titleKey: "category_wallets",
      descriptionKey: "category_wallets_desc",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
      href: "/categories/wallets",
    },
    {
      titleKey: "category_new_arrivals",
      descriptionKey: "category_new_arrivals_desc",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
      href: "/store?sort=created_at",
    },
    {
      titleKey: "category_sale",
      descriptionKey: "category_sale_desc",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&q=80",
      href: "/store?sort=price_asc",
    },
  ]
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="content-container">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">{t('shop_by_category')}</h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{t('explore_collections')}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {categories.map((category) => (
            <LocalizedClientLink
              key={category.titleKey}
              href={category.href}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100"
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={t(category.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold mb-0.5 sm:mb-1">{t(category.titleKey)}</h3>
                <p className="text-gray-200 text-[10px] sm:text-xs lg:text-sm">{t(category.descriptionKey)}</p>
              </div>

              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}
