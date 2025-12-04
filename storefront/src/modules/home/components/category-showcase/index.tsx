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
    <section className="py-16 bg-white">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('shop_by_category')}</h2>
          <p className="text-gray-600 text-lg">{t('explore_collections')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{t(category.titleKey)}</h3>
                <p className="text-gray-200 text-sm">{t(category.descriptionKey)}</p>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
