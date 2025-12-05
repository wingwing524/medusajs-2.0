import { Metadata } from "next"
import { STORE_NAME } from "@lib/config"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Bag Care Guide | ${STORE_NAME}`,
    description: `Learn how to properly care for your ${STORE_NAME} bags and accessories. Tips for cleaning, storage, and maintenance.`,
  }
}

export default async function CareGuidePage({
  params,
}: {
  params: { countryCode: string }
}) {
  const t = await getTranslations("care_guide")

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

        {/* Introduction */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
          <p className="text-gray-700">{t("intro_text")}</p>
        </section>

        {/* General Care Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("general_title")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-semibold">{t("general_tip1_title")}</h3>
              </div>
              <p className="text-gray-600 text-sm">{t("general_tip1_desc")}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-semibold">{t("general_tip2_title")}</h3>
              </div>
              <p className="text-gray-600 text-sm">{t("general_tip2_desc")}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-semibold">{t("general_tip3_title")}</h3>
              </div>
              <p className="text-gray-600 text-sm">{t("general_tip3_desc")}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-semibold">{t("general_tip4_title")}</h3>
              </div>
              <p className="text-gray-600 text-sm">{t("general_tip4_desc")}</p>
            </div>
          </div>
        </section>

        {/* Material-Specific Care */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("materials_title")}</h2>
          
          {/* Leather */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white rounded-t-lg p-4">
              <h3 className="text-xl font-semibold">{t("leather_title")}</h3>
            </div>
            <div className="border border-gray-200 rounded-b-lg p-6 space-y-4">
              <div>
                <h4 className="font-medium mb-2">{t("leather_cleaning_title")}</h4>
                <p className="text-gray-600 text-sm">{t("leather_cleaning_text")}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t("leather_conditioning_title")}</h4>
                <p className="text-gray-600 text-sm">{t("leather_conditioning_text")}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t("leather_water_title")}</h4>
                <p className="text-gray-600 text-sm">{t("leather_water_text")}</p>
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-t-lg p-4">
              <h3 className="text-xl font-semibold">{t("canvas_title")}</h3>
            </div>
            <div className="border border-gray-200 rounded-b-lg p-6 space-y-4">
              <div>
                <h4 className="font-medium mb-2">{t("canvas_cleaning_title")}</h4>
                <p className="text-gray-600 text-sm">{t("canvas_cleaning_text")}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t("canvas_stains_title")}</h4>
                <p className="text-gray-600 text-sm">{t("canvas_stains_text")}</p>
              </div>
            </div>
          </div>

          {/* Suede */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-t-lg p-4">
              <h3 className="text-xl font-semibold">{t("suede_title")}</h3>
            </div>
            <div className="border border-gray-200 rounded-b-lg p-6 space-y-4">
              <div>
                <h4 className="font-medium mb-2">{t("suede_brush_title")}</h4>
                <p className="text-gray-600 text-sm">{t("suede_brush_text")}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t("suede_protection_title")}</h4>
                <p className="text-gray-600 text-sm">{t("suede_protection_text")}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t("suede_avoid_title")}</h4>
                <p className="text-gray-600 text-sm">{t("suede_avoid_text")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Storage Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("storage_title")}</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex gap-3">
              <svg
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-700">{t("storage_tip1")}</p>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-700">{t("storage_tip2")}</p>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-700">{t("storage_tip3")}</p>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-700">{t("storage_tip4")}</p>
            </div>
          </div>
        </section>

        {/* What to Avoid */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("avoid_title")}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-gray-700">{t("avoid_item1")}</p>
            </div>
            <div className="flex gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-gray-700">{t("avoid_item2")}</p>
            </div>
            <div className="flex gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-gray-700">{t("avoid_item3")}</p>
            </div>
            <div className="flex gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-gray-700">{t("avoid_item4")}</p>
            </div>
            <div className="flex gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-gray-700">{t("avoid_item5")}</p>
            </div>
            <div className="flex gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-gray-700">{t("avoid_item6")}</p>
            </div>
          </div>
        </section>

        {/* Professional Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("professional_title")}</h2>
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg p-8">
            <p className="mb-4">{t("professional_text")}</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>{t("professional_service1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>{t("professional_service2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>{t("professional_service3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>{t("professional_service4")}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">{t("cta_title")}</h2>
          <p className="text-gray-700 mb-6">
            {t("cta_description")}
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            {t("cta_button")}
          </a>
        </section>
      </div>
    </div>
  )
}
