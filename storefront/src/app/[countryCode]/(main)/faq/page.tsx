"use client"

import { useState } from "react"
import { Metadata } from "next"
import { STORE_NAME } from "@lib/config"
import { useTranslations } from "next-intl"

export default function FAQPage() {
  const t = useTranslations("faq")
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    // Orders & Payment
    {
      category: "orders",
      questions: [
        { q: "order_q1", a: "order_a1" },
        { q: "order_q2", a: "order_a2" },
        { q: "order_q3", a: "order_a3" },
        { q: "order_q4", a: "order_a4" },
      ],
    },
    // Shipping & Delivery
    {
      category: "shipping",
      questions: [
        { q: "shipping_q1", a: "shipping_a1" },
        { q: "shipping_q2", a: "shipping_a2" },
        { q: "shipping_q3", a: "shipping_a3" },
        { q: "shipping_q4", a: "shipping_a4" },
      ],
    },
    // Returns & Exchanges
    {
      category: "returns",
      questions: [
        { q: "returns_q1", a: "returns_a1" },
        { q: "returns_q2", a: "returns_a2" },
        { q: "returns_q3", a: "returns_a3" },
        { q: "returns_q4", a: "returns_a4" },
      ],
    },
    // Products & Sizing
    {
      category: "products",
      questions: [
        { q: "products_q1", a: "products_a1" },
        { q: "products_q2", a: "products_a2" },
        { q: "products_q3", a: "products_a3" },
        { q: "products_q4", a: "products_a4" },
      ],
    },
    // Account & Privacy
    {
      category: "account",
      questions: [
        { q: "account_q1", a: "account_a1" },
        { q: "account_q2", a: "account_a2" },
        { q: "account_q3", a: "account_a3" },
        { q: "account_q4", a: "account_a4" },
      ],
    },
  ]

  let questionIndex = 0

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

        {/* Search Box */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, catIndex) => {
          const categoryQuestions = category.questions.map((_, idx) => {
            const currentIndex = questionIndex
            questionIndex++
            return currentIndex
          })

          return (
            <section key={catIndex} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                {t(`${category.category}_category`)}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentQuestionIndex = categoryQuestions[faqIndex]
                  const isOpen = openItems.includes(currentQuestionIndex)

                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(currentQuestionIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium pr-4">{t(faq.q)}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                          {t(faq.a)}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}

        {/* Still Need Help Section */}
        <section className="bg-gray-900 text-white rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">{t("help_title")}</h2>
          <p className="mb-6 text-gray-300">
            {t("help_description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              {t("help_contact_button")}
            </a>
            <a
              href="mailto:support@vlora.com"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              {t("help_email_button")}
            </a>
          </div>
        </section>

        {/* Popular Topics Grid */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t("popular_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/shipping"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
            >
              <svg
                className="w-12 h-12 mx-auto mb-4 text-gray-900"
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
              <h3 className="font-medium mb-2">{t("popular_shipping")}</h3>
              <p className="text-sm text-gray-600">{t("popular_shipping_desc")}</p>
            </a>
            <a
              href="/returns"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
            >
              <svg
                className="w-12 h-12 mx-auto mb-4 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
              <h3 className="font-medium mb-2">{t("popular_returns")}</h3>
              <p className="text-sm text-gray-600">{t("popular_returns_desc")}</p>
            </a>
            <a
              href="/account/orders"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
            >
              <svg
                className="w-12 h-12 mx-auto mb-4 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="font-medium mb-2">{t("popular_orders")}</h3>
              <p className="text-sm text-gray-600">{t("popular_orders_desc")}</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
