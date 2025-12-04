"use client"

import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { X } from "@medusajs/icons"
import { useTranslations } from "../../../../i18n/client"

type SizeGuideModalProps = {
  isOpen: boolean
  onClose: () => void
}

const SizeGuideModal = ({ isOpen, onClose }: SizeGuideModalProps) => {
  const t = useTranslations('size_guide')
  const sizeChart = [
    { size: 'XS', chest: '32-34', waist: '24-26', hips: '34-36', length: '26' },
    { size: 'S', chest: '34-36', waist: '26-28', hips: '36-38', length: '27' },
    { size: 'M', chest: '36-38', waist: '28-30', hips: '38-40', length: '28' },
    { size: 'L', chest: '38-40', waist: '30-32', hips: '40-42', length: '29' },
    { size: 'XL', chest: '40-42', waist: '32-34', hips: '42-44', length: '30' },
    { size: 'XXL', chest: '42-44', waist: '34-36', hips: '44-46', length: '31' },
  ]

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title className="text-2xl font-bold text-gray-900">
                    {t('title')}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* How to Measure */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-4">{t('how_to_measure')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{t('chest')}</h4>
                          <p className="text-sm text-gray-600">{t('chest_instruction')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{t('waist')}</h4>
                          <p className="text-sm text-gray-600">{t('waist_instruction')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{t('hips')}</h4>
                          <p className="text-sm text-gray-600">{t('hips_instruction')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{t('length')}</h4>
                          <p className="text-sm text-gray-600">{t('length_instruction')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Size Chart */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4">{t('size_chart')}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-900 text-white">
                            <th className="px-4 py-3 text-left font-semibold">{t('size')}</th>
                            <th className="px-4 py-3 text-left font-semibold">{t('chest')}</th>
                            <th className="px-4 py-3 text-left font-semibold">{t('waist')}</th>
                            <th className="px-4 py-3 text-left font-semibold">{t('hips')}</th>
                            <th className="px-4 py-3 text-left font-semibold">{t('length')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sizeChart.map((row, index) => (
                            <tr key={row.size} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-4 py-3 font-semibold">{row.size}</td>
                              <td className="px-4 py-3">{row.chest}</td>
                              <td className="px-4 py-3">{row.waist}</td>
                              <td className="px-4 py-3">{row.hips}</td>
                              <td className="px-4 py-3">{row.length}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Fit Recommendations */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">{t('fit_recommendations')}</h3>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{t('fit_tip_1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{t('fit_tip_2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{t('fit_tip_3')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SizeGuideModal
