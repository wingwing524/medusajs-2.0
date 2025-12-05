import { Metadata } from "next"
import { STORE_NAME, STORE_EMAIL } from "@lib/config"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Terms & Conditions | ${STORE_NAME}`,
    description: `Read ${STORE_NAME}'s terms and conditions. Learn about our policies regarding orders, returns, and use of our website.`,
  }
}

export default async function TermsPage({
  params,
}: {
  params: { countryCode: string }
}) {
  const t = await getTranslations("terms")

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

        {/* Section 1: Acceptance of Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            1. {t("section1_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section1_text")}</p>
          </div>
        </section>

        {/* Section 2: Use of Website */}
        <section className="mb-12">
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
            </ul>
          </div>
        </section>

        {/* Section 3: Products and Orders */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            3. {t("section3_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="font-medium text-lg">{t("section3_sub1_title")}</h3>
            <p>{t("section3_sub1_text")}</p>
            
            <h3 className="font-medium text-lg mt-6">{t("section3_sub2_title")}</h3>
            <p>{t("section3_sub2_text")}</p>
            
            <h3 className="font-medium text-lg mt-6">{t("section3_sub3_title")}</h3>
            <p>{t("section3_sub3_text")}</p>
            
            <h3 className="font-medium text-lg mt-6">{t("section3_sub4_title")}</h3>
            <p>{t("section3_sub4_text")}</p>
          </div>
        </section>

        {/* Section 4: Pricing and Payment */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            4. {t("section4_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section4_text1")}</p>
            <p>{t("section4_text2")}</p>
            <p>{t("section4_text3")}</p>
          </div>
        </section>

        {/* Section 5: Shipping and Delivery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            5. {t("section5_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section5_text1")}</p>
            <p>{t("section5_text2")}</p>
          </div>
        </section>

        {/* Section 6: Returns and Refunds */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            6. {t("section6_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section6_text")}</p>
            <a href="/returns" className="text-blue-600 hover:underline inline-block mt-2">
              {t("section6_link")}
            </a>
          </div>
        </section>

        {/* Section 7: Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            7. {t("section7_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section7_text")}</p>
          </div>
        </section>

        {/* Section 8: User Accounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            8. {t("section8_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section8_text1")}</p>
            <p>{t("section8_text2")}</p>
          </div>
        </section>

        {/* Section 9: Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            9. {t("section9_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section9_text")}</p>
          </div>
        </section>

        {/* Section 10: Indemnification */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            10. {t("section10_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section10_text")}</p>
          </div>
        </section>

        {/* Section 11: Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            11. {t("section11_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section11_text")}</p>
          </div>
        </section>

        {/* Section 12: Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            12. {t("section12_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section12_text")}</p>
          </div>
        </section>

        {/* Section 13: Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            13. {t("section13_title")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("section13_text")}</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
              <p className="font-medium">{STORE_NAME}</p>
              <p>
                {t("section13_email")}: <a href={`mailto:${STORE_EMAIL}`} className="text-blue-600 hover:underline">{STORE_EMAIL}</a>
              </p>
            </div>
          </div>
        </section>

        {/* Agreement Notice */}
        <section className="bg-gray-900 text-white rounded-lg p-6 text-center">
          <p className="font-medium">{t("agreement_text")}</p>
        </section>
      </div>
    </div>
  )
}
