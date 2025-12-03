"use client"

import { useState, useRef, useEffect } from "react"
import Globe from "@modules/common/icons/globe"
import ChevronDown from "@modules/common/icons/chevron-down"

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "zh-HK", label: "繁", name: "繁體中文" },
  { code: "zh-CN", label: "简", name: "简体中文" },
]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    // TODO: Implement actual language switching logic
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-x-2 hover:text-ui-fg-base transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <Globe size="20" />
        <span className="text-small-regular">{selectedLanguage.label}</span>
        <ChevronDown
          size="16"
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-ui-border-base rounded-md shadow-lg z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`w-full text-left px-4 py-2 text-small-regular hover:bg-gray-50 transition-colors ${
                  selectedLanguage.code === language.code
                    ? "bg-gray-100 font-medium"
                    : ""
                }`}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
