import { Metadata } from "next"
import { STORE_NAME, STORE_EMAIL } from "@lib/config"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Privacy Policy | ${STORE_NAME}`,
    description: `Read ${STORE_NAME}'s privacy policy to understand how we collect, use, and protect your personal information.`,
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: { countryCode: string }
}) {
  const t = await getTranslations("privacy")

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
          <p className="text-sm text-gray-500 mt-4">
            {t("last_updated")}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
            <p className="text-gray-700">{t("intro_text")}</p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">{t("toc_title")}</h2>
          <ul className="space-y-2">
            <li>
              <a href="#information-collection" className="text-blue-600 hover:underline">
                1. {t("toc_item1")}
              </a>
            </li>
            <li>
              <a href="#information-use" className="text-blue-600 hover:underline">
                2. {t("toc_item2")}
              </a>
            </li>
            <li>
              <a href="#information-sharing" className="text-blue-600 hover:underline">
                3. {t("toc_item3")}
              </a>
            </li>
            <li>
              <a href="#cookies" className="text-blue-600 hover:underline">
                4. {t("toc_item4")}
              </a>
            </li>
            <li>
              <a href="#data-security" className="text-blue-600 hover:underline">
                5. {t("toc_item5")}
              </a>
            </li>
            <li>
              <a href="#your-rights" className="text-blue-600 hover:underline">
                6. {t("toc_item6")}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-blue-600 hover:underline">
                7. {t("toc_item7")}
              </a>
            </li>
          </ul>
        </section>

        {/* Section 1: Information Collection */}
        <section id="information-collection" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            1. {t("section1_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section1_intro")}</p>
            <h3 className="font-medium text-lg mt-6">{t("section1_sub1_title")}</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("section1_sub1_item1")}</li>
              <li>{t("section1_sub1_item2")}</li>
              <li>{t("section1_sub1_item3")}</li>
              <li>{t("section1_sub1_item4")}</li>
            </ul>
            <h3 className="font-medium text-lg mt-6">{t("section1_sub2_title")}</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("section1_sub2_item1")}</li>
              <li>{t("section1_sub2_item2")}</li>
              <li>{t("section1_sub2_item3")}</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Information Use */}
        <section id="information-use" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            2. {t("section2_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section2_intro")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("section2_item1")}</li>
              <li>{t("section2_item2")}</li>
              <li>{t("section2_item3")}</li>
              <li>{t("section2_item4")}</li>
              <li>{t("section2_item5")}</li>
              <li>{t("section2_item6")}</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Information Sharing */}
        <section id="information-sharing" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            3. {t("section3_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section3_intro")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("section3_item1")}</li>
              <li>{t("section3_item2")}</li>
              <li>{t("section3_item3")}</li>
              <li>{t("section3_item4")}</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Cookies */}
        <section id="cookies" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            4. {t("section4_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section4_intro")}</p>
            <h3 className="font-medium text-lg mt-6">{t("section4_sub1_title")}</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("section4_sub1_item1")}</li>
              <li>{t("section4_sub1_item2")}</li>
              <li>{t("section4_sub1_item3")}</li>
            </ul>
            <p className="mt-4">{t("section4_manage")}</p>
          </div>
        </section>

        {/* Section 5: Data Security */}
        <section id="data-security" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            5. {t("section5_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section5_text")}</p>
          </div>
        </section>

        {/* Section 6: Your Rights */}
        <section id="your-rights" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            6. {t("section6_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section6_intro")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>{t("section6_right1_title")}:</strong> {t("section6_right1_desc")}</li>
              <li><strong>{t("section6_right2_title")}:</strong> {t("section6_right2_desc")}</li>
              <li><strong>{t("section6_right3_title")}:</strong> {t("section6_right3_desc")}</li>
              <li><strong>{t("section6_right4_title")}:</strong> {t("section6_right4_desc")}</li>
              <li><strong>{t("section6_right5_title")}:</strong> {t("section6_right5_desc")}</li>
              <li><strong>{t("section6_right6_title")}:</strong> {t("section6_right6_desc")}</li>
            </ul>
            <p className="mt-4">{t("section6_exercise")}</p>
          </div>
        </section>

        {/* Section 7: Contact */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            7. {t("section7_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section7_text")}</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
              <p className="font-medium">{STORE_NAME}</p>
              <p>
                {t("section7_email")}: <a href={`mailto:${STORE_EMAIL}`} className="text-blue-600 hover:underline">{STORE_EMAIL}</a>
              </p>
            </div>
          </div>
        </section>

        {/* Updates Notice */}
        <section className="bg-amber-50 border border-amber-100 rounded-lg p-6">
          <h3 className="font-semibold mb-2">{t("updates_title")}</h3>
          <p className="text-gray-700">{t("updates_text")}</p>
        </section>
      </div>
    </div>
  )
}
