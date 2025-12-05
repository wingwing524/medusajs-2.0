import { Metadata } from "next"
import { STORE_NAME } from "@lib/config"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Shipping Information | ${STORE_NAME}`,
    description: `Learn about shipping options, delivery times, and shipping costs at ${STORE_NAME}. We ship worldwide with tracking.`,
  }
}

export default async function ShippingPage({
  params,
}: {
  params: { countryCode: string }
}) {
  const t = await getTranslations("shipping")

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

        {/* Free Shipping Banner */}
        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <div>
              <h2 className="text-xl font-semibold text-green-900">
                {t("free_shipping_title")}
              </h2>
              <p className="text-green-700">{t("free_shipping_description")}</p>
            </div>
          </div>
        </div>

        {/* Shipping Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("methods_title")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard Shipping */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {t("standard_title")}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t("standard_description")}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t("delivery_time")}</span>
                      <span className="font-medium">{t("standard_time")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t("cost")}</span>
                      <span className="font-medium">{t("standard_cost")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Express Shipping */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {t("express_title")}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t("express_description")}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t("delivery_time")}</span>
                      <span className="font-medium">{t("express_time")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t("cost")}</span>
                      <span className="font-medium">{t("express_cost")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("processing_title")}</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">{t("processing_description")}</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">{t("processing_step1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">{t("processing_step2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">{t("processing_step3")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("international_title")}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t("international_available_title")}
              </h3>
              <p className="text-gray-600 pl-7">{t("international_available_description")}</p>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t("international_customs_title")}
              </h3>
              <p className="text-gray-600 pl-7">{t("international_customs_description")}</p>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t("international_delivery_title")}
              </h3>
              <p className="text-gray-600 pl-7">{t("international_delivery_description")}</p>
            </div>
          </div>
        </section>

        {/* Order Tracking */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("tracking_title")}</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <svg
                className="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <div>
                <h3 className="font-medium mb-2">{t("tracking_info_title")}</h3>
                <p className="text-gray-700 mb-4">{t("tracking_info_description")}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    {t("tracking_step1")}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    {t("tracking_step2")}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    {t("tracking_step3")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Restrictions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("restrictions_title")}</h2>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
            <p className="text-gray-700 mb-4">{t("restrictions_description")}</p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm text-gray-700">
                <span className="text-amber-600 font-bold">→</span>
                {t("restriction_item1")}
              </li>
              <li className="flex gap-2 text-sm text-gray-700">
                <span className="text-amber-600 font-bold">→</span>
                {t("restriction_item2")}
              </li>
              <li className="flex gap-2 text-sm text-gray-700">
                <span className="text-amber-600 font-bold">→</span>
                {t("restriction_item3")}
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">{t("contact_title")}</h2>
          <p className="mb-6 text-gray-300">
            {t("contact_description")}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            {t("contact_button")}
          </a>
        </section>
      </div>
    </div>
  )
}
