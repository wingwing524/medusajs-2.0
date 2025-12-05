"use client"

import { useTranslations } from "../../../../i18n/client"

export default function PromoBanner() {
  const t = useTranslations('home')
  
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="content-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              {t('limited_time_offer')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              {t('get_discount')}
              <br />
              <span className="text-gray-300">{t('your_first_order')}</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              {t('newsletter_desc')}
            </p>
          </div>

          <div className="flex-1 max-w-md w-full">
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="email"
                placeholder={t('enter_email')}
                className="flex-1 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 text-sm sm:text-base rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 bg-white text-gray-900 text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap min-h-[44px]"
              >
                {t('subscribe')}
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-3 text-center sm:text-left">
              {t('privacy_consent')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
