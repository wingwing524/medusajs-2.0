import { Metadata } from "next"
import { STORE_NAME } from "@lib/config"
import { getTranslations } from "next-intl/server"
import Image from "next/image"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `About Us | ${STORE_NAME}`,
    description: `Learn about ${STORE_NAME}'s story, mission, and values. Discover our commitment to quality, craftsmanship, and customer satisfaction.`,
  }
}

export default async function AboutPage({
  params,
}: {
  params: { countryCode: string }
}) {
  const t = await getTranslations("about")

  return (
    <div className="content-container py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("page_title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("page_subtitle")}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("hero_title")}
              </h2>
              <p className="text-xl text-gray-200">
                {t("hero_subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("story_title")}</h2>
              <div className="space-y-4 text-gray-700">
                <p>{t("story_p1")}</p>
                <p>{t("story_p2")}</p>
                <p>{t("story_p3")}</p>
              </div>
            </div>
            <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("mission_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("value1_title")}</h3>
              <p className="text-gray-600">{t("value1_desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("value2_title")}</h3>
              <p className="text-gray-600">{t("value2_desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("value3_title")}</h3>
              <p className="text-gray-600">{t("value3_desc")}</p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {t("stat1_number")}
              </div>
              <div className="text-gray-600">{t("stat1_label")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {t("stat2_number")}
              </div>
              <div className="text-gray-600">{t("stat2_label")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {t("stat3_number")}
              </div>
              <div className="text-gray-600">{t("stat3_label")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {t("stat4_number")}
              </div>
              <div className="text-gray-600">{t("stat4_label")}</div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("commitment_title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("commitment1_title")}
                  </h3>
                  <p className="text-gray-600">{t("commitment1_desc")}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("commitment2_title")}
                  </h3>
                  <p className="text-gray-600">{t("commitment2_desc")}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("commitment3_title")}
                  </h3>
                  <p className="text-gray-600">{t("commitment3_desc")}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-600"
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
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("commitment4_title")}
                  </h3>
                  <p className="text-gray-600">{t("commitment4_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("cta_title")}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("cta_description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/store"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              {t("cta_shop_button")}
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              {t("cta_contact_button")}
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
