import { Metadata } from "next"
import { STORE_NAME } from "@lib/config"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Payment Methods | ${STORE_NAME}`,
    description: `Learn about secure payment options at ${STORE_NAME}. We accept credit cards, PayPal, Apple Pay and more.`,
  }
}

export default async function PaymentPage({
  params,
}: {
  params: { countryCode: string }
}) {
  const t = await getTranslations("payment")

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

        {/* Security Badge */}
        <div className="mb-12 bg-green-50 border border-green-100 rounded-lg p-6">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div>
              <h2 className="text-xl font-semibold text-green-900">
                {t("security_title")}
              </h2>
              <p className="text-green-700">{t("security_description")}</p>
            </div>
          </div>
        </div>

        {/* Accepted Payment Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t("accepted_title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Credit/Debit Cards */}
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards_title")}
                  </h3>
                  <p className="text-gray-600 mb-3">{t("cards_description")}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded text-sm font-medium">Visa</span>
                    <span className="px-3 py-1 bg-gray-100 rounded text-sm font-medium">Mastercard</span>
                    <span className="px-3 py-1 bg-gray-100 rounded text-sm font-medium">American Express</span>
                    <span className="px-3 py-1 bg-gray-100 rounded text-sm font-medium">Discover</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PayPal */}
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
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("paypal_title")}
                  </h3>
                  <p className="text-gray-600">{t("paypal_description")}</p>
                </div>
              </div>
            </div>

            {/* Apple Pay */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("apple_pay_title")}
                  </h3>
                  <p className="text-gray-600">{t("apple_pay_description")}</p>
                </div>
              </div>
            </div>

            {/* Google Pay */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("google_pay_title")}
                  </h3>
                  <p className="text-gray-600">{t("google_pay_description")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("security_section_title")}</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t("ssl_title")}</h3>
                <p className="text-gray-600">{t("ssl_description")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t("pci_title")}</h3>
                <p className="text-gray-600">{t("pci_description")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t("fraud_title")}</h3>
                <p className="text-gray-600">{t("fraud_description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Billing Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("billing_title")}</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <p className="text-gray-700">{t("billing_intro")}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                {t("billing_item1")}
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                {t("billing_item2")}
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                {t("billing_item3")}
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                {t("billing_item4")}
              </li>
            </ul>
          </div>
        </section>

        {/* Payment Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t("issues_title")}</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold mb-2">{t("issue1_title")}</h3>
              <p className="text-gray-600">{t("issue1_solution")}</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold mb-2">{t("issue2_title")}</h3>
              <p className="text-gray-600">{t("issue2_solution")}</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold mb-2">{t("issue3_title")}</h3>
              <p className="text-gray-600">{t("issue3_solution")}</p>
            </div>
          </div>
        </section>

        {/* Currency Notice */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {t("currency_title")}
          </h3>
          <p className="text-gray-700">{t("currency_text")}</p>
        </section>

        {/* Help Section */}
        <section className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">{t("help_title")}</h2>
          <p className="mb-6 text-gray-300">
            {t("help_description")}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            {t("help_button")}
          </a>
        </section>
      </div>
    </div>
  )
}
