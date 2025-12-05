"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useTranslations } from "../../../../i18n/client"

export default function BrandStory() {
  const t = useTranslations('home')
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="content-container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80"
              alt={t('our_story')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {t('our_story')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t('crafted_with')}
              <br />
              <span className="text-gray-600">{t('passion_quality')}</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              {t('story_desc_1')}
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {t('story_desc_2')}
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-4">
              <LocalizedClientLink
                href="/about"
                className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors min-h-[44px] flex items-center justify-center"
              >
                {t('learn_more')}
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/store"
                className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 border-2 border-gray-900 text-gray-900 text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all min-h-[44px] flex items-center justify-center"
              >
                {t('shop_collection')}
              </LocalizedClientLink>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">{t('happy_customers')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">{t('products')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">{t('countries')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
