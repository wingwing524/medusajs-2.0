import { Metadata } from "next"
import { STORE_NAME } from "@lib/config"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Shopping Guide | ${STORE_NAME}`,
    description: `Learn how to shop at ${STORE_NAME}. Step-by-step guide to browsing products, creating an account, and completing your order.`,
  }
}

export default async function ShoppingGuidePage({
  params,
}: {
  params: { countryCode: string }
}) {
  const t = await getTranslations("shopping_guide")

  return (
    <div className="content-container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("page_title")}
          </h1>
          <p className="text-lg text-gray-600">
            {t("page_subtitle")}
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">{t("quick_start_title")}</h2>
          <p className="text-gray-700">{t("quick_start_text")}</p>
        </section>

        {/* Step 1: Browse Products */}
        <section className="mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">{t("step1_title")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>{t("step1_intro")}</p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <p>{t("step1_tip1")}</p>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <p>{t("step1_tip2")}</p>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <p>{t("step1_tip3")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Select Product */}
        <section className="mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">{t("step2_title")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>{t("step2_intro")}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t("step2_item1")}</li>
                  <li>{t("step2_item2")}</li>
                  <li>{t("step2_item3")}</li>
                  <li>{t("step2_item4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Add to Cart */}
        <section className="mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">{t("step3_title")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>{t("step3_text1")}</p>
                <p>{t("step3_text2")}</p>
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mt-4">
                  <p className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t("step3_tip")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Review Cart */}
        <section className="mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">{t("step4_title")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>{t("step4_text1")}</p>
                <p>{t("step4_text2")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Checkout */}
        <section className="mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
              5
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">{t("step5_title")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>{t("step5_intro")}</p>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-medium mb-1">{t("step5_sub1_title")}</h3>
                    <p className="text-sm">{t("step5_sub1_text")}</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-medium mb-1">{t("step5_sub2_title")}</h3>
                    <p className="text-sm">{t("step5_sub2_text")}</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-medium mb-1">{t("step5_sub3_title")}</h3>
                    <p className="text-sm">{t("step5_sub3_text")}</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-medium mb-1">{t("step5_sub4_title")}</h3>
                    <p className="text-sm">{t("step5_sub4_text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 6: Order Confirmation */}
        <section className="mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
              6
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">{t("step6_title")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>{t("step6_text1")}</p>
                <p>{t("step6_text2")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Account Benefits */}
        <section className="mb-12 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">{t("account_title")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium mb-1">{t("account_benefit1")}</h3>
              </div>
            </div>
            <div className="flex gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium mb-1">{t("account_benefit2")}</h3>
              </div>
            </div>
            <div className="flex gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium mb-1">{t("account_benefit3")}</h3>
              </div>
            </div>
            <div className="flex gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium mb-1">{t("account_benefit4")}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("tips_title")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700">{t("tip1")}</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700">{t("tip2")}</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700">{t("tip3")}</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700">{t("tip4")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Help CTA */}
        <section className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">{t("help_title")}</h2>
          <p className="mb-6 text-gray-300">
            {t("help_description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/faq"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              {t("help_faq_button")}
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              {t("help_contact_button")}
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
