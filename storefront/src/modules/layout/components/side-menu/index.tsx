"use client"

import { Popover, Transition } from "@headlessui/react"
import { Text, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"
import User from "@modules/common/icons/user"
import X from "@modules/common/icons/x"
import { useTranslations, useChangeLocale, useLocale } from "../../../../i18n/client"

const locales = ['en', 'zh-HK', 'zh-CN'] as const
const localeLabels = {
  'en': 'EN',
  'zh-HK': '繁',
  'zh-CN': '简'
} as const

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  categories?: HttpTypes.StoreProductCategory[] | null
  collections?: HttpTypes.StoreCollection[] | null
  customer: HttpTypes.StoreCustomer | null
}

const SideMenu = ({ regions, categories, collections, customer }: SideMenuProps) => {
  const toggleState = useToggleState()
  const t = useTranslations()
  const currentLocale = useLocale()
  const { changeLocale, isPending } = useChangeLocale()
  const isLoggedIn = !!customer

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base min-w-[44px] min-h-[44px] justify-center"
                >
                  {/* Hamburger Icon - Show on mobile/tablet */}
                  <svg 
                    className="w-6 h-6 lg:hidden" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* Text - Show on desktop */}
                  <span className="hidden lg:inline uppercase tracking-wide text-sm font-medium">Menu</span>
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="fixed inset-0 z-[100]">
                  {/* Dark overlay */}
                  <div 
                    className="absolute inset-0 bg-black/40"
                    onClick={close}
                  />
                  
                  {/* Sidebar panel - slides from LEFT on desktop, RIGHT on mobile */}
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="translate-x-full lg:-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in duration-200"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full lg:-translate-x-full"
                  >
                    <div
                      data-testid="nav-menu-popup"
                      className="relative h-full w-[85vw] max-w-[300px] bg-white shadow-2xl flex flex-col ml-auto lg:ml-0 z-[100]"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold uppercase tracking-wide">{t('menu.title')}</h2>
                        <button 
                          data-testid="close-menu-button" 
                          onClick={close}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <X size="20" />
                        </button>
                      </div>

                      {/* Main content */}
                      <div className="flex-1 overflow-y-auto">
                        {/* Collections Section */}
                        {collections && collections.length > 0 && (
                          <div className="px-6 py-4 border-t border-gray-200">
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('menu.collections')}</h3>
                            <ul className="flex flex-col gap-1">
                              {collections.map((collection) => (
                                <li key={collection.id}>
                                  <LocalizedClientLink
                                    href={`/collections/${collection.handle}`}
                                    className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                                    onClick={close}
                                  >
                                    {collection.title}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Categories Section */}
                        {categories && categories.length > 0 && (
                          <div className="px-6 py-4 border-t border-gray-200">
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('menu.categories')}</h3>
                            <ul className="flex flex-col gap-1">
                              {categories.map((category) => {
                                if (category.parent_category) {
                                  return null
                                }
                                return (
                                  <li key={category.id}>
                                    <LocalizedClientLink
                                      href={`/categories/${category.handle}`}
                                      className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                                      onClick={close}
                                    >
                                      {category.name}
                                    </LocalizedClientLink>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        )}

                        {/* Regions Selector */}
                        <div className="px-6 py-4 border-t border-gray-200">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('menu.shipping_region')}</h3>
                          <div className="relative">
                            {regions && (
                              <div
                                onClick={toggleState.toggle}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                              >
                                <CountrySelect
                                  toggleState={toggleState}
                                  regions={regions}
                                />
                                <svg 
                                  className={`w-5 h-5 text-gray-600 transition-transform ${toggleState.state ? 'rotate-180' : ''}`} 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Language Selector */}
                        <div className="px-6 py-4 border-t border-gray-200">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('menu.language')}</h3>
                          <div className="flex gap-2 justify-start">
                            {locales.map((locale) => (
                              <button
                                key={locale}
                                onClick={() => changeLocale(locale)}
                                disabled={isPending}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all disabled:opacity-50 ${
                                  currentLocale === locale
                                    ? "bg-gray-900 text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                              >
                                {localeLabels[locale]}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Account Section */}
                        <div className="px-6 py-4 border-t border-gray-200">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('menu.account')}</h3>
                          {isLoggedIn ? (
                            <LocalizedClientLink
                              href="/account"
                              onClick={close}
                              className="flex items-center justify-center gap-3 py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                            >
                              <User size="20" />
                              <span>{t('menu.my_account')}</span>
                            </LocalizedClientLink>
                          ) : (
                            <LocalizedClientLink
                              href="/account"
                              onClick={close}
                              className="flex items-center justify-center gap-3 py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                            >
                              <User size="20" />
                              <span>{t('menu.login_register')}</span>
                            </LocalizedClientLink>
                          )}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="p-6 border-t border-gray-200 bg-gray-50">
                        <Text className="text-xs text-gray-500 text-center">
                          © {new Date().getFullYear()} Medusa Store. All rights reserved.
                        </Text>
                      </div>
                    </div>
                  </Transition.Child>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
