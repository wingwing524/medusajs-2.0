import { Metadata } from "next"
import { STORE_NAME } from "@lib/config"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Returns & Refunds | ${STORE_NAME}`,
    description: `Learn about our hassle-free return policy at ${STORE_NAME}. Easy returns within 7 days of delivery.`,
  }
}

export default async function ReturnsPage({
  params,
}: {
  params: { countryCode: string }
}) {
  const t = await getTranslations("returns")

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

        {/* Return Policy Overview */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-blue-600"
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
            {t("policy_title")}
          </h2>
          <p className="text-gray-700">
            {t("policy_description")}
          </p>
        </div>

        {/* Return Conditions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("conditions_title")}</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">{t("condition_unused_title")}</h3>
                <p className="text-gray-600">{t("condition_unused_description")}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">{t("condition_tags_title")}</h3>
                <p className="text-gray-600">{t("condition_tags_description")}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">{t("condition_packaging_title")}</h3>
                <p className="text-gray-600">{t("condition_packaging_description")}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">{t("condition_proof_title")}</h3>
                <p className="text-gray-600">{t("condition_proof_description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("process_title")}</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-medium mb-2">{t("process_step1_title")}</h3>
                <p className="text-gray-600">{t("process_step1_description")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-medium mb-2">{t("process_step2_title")}</h3>
                <p className="text-gray-600">{t("process_step2_description")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-medium mb-2">{t("process_step3_title")}</h3>
                <p className="text-gray-600">{t("process_step3_description")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="font-medium mb-2">{t("process_step4_title")}</h3>
                <p className="text-gray-600">{t("process_step4_description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("refund_title")}</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-medium mb-2">{t("refund_timeline_title")}</h3>
              <p className="text-gray-600">{t("refund_timeline_description")}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">{t("refund_method_title")}</h3>
              <p className="text-gray-600">{t("refund_method_description")}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">{t("refund_shipping_title")}</h3>
              <p className="text-gray-600">{t("refund_shipping_description")}</p>
            </div>
          </div>
        </section>

        {/* Non-Returnable Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("nonreturnable_title")}</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{t("nonreturnable_item1")}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{t("nonreturnable_item2")}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{t("nonreturnable_item3")}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{t("nonreturnable_item4")}</p>
            </div>
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
