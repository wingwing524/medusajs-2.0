"use client"

import { useState, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useTranslations } from "../../../../i18n/client"

const Hero = () => {
  const t = useTranslations('home')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
      title: t('hero_title'),
      subtitle: t('hero_subtitle'),
      description: t('hero_description'),
      primaryCTA: { text: t('shop_now'), href: "/store" },
      secondaryCTA: { text: t('view_collections'), href: "/collections" }
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80",
      title: t('new_arrivals_hero'),
      subtitle: t('fresh_styles'),
      description: t('new_arrivals_desc'),
      primaryCTA: { text: t('shop_new'), href: "/store?sort=created_at" },
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
      title: t('exclusive_collection'),
      subtitle: t('limited_edition'),
      description: t('exclusive_desc'),
      primaryCTA: { text: t('explore'), href: "/collections" },
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isHovered, slides.length])

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  
  return (
    <div 
      className="relative h-[400px] sm:h-[500px] lg:h-[70vh] lg:min-h-[500px] w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="content-container">
              <div className="max-w-2xl text-white">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                  {slide.title}
                  <br />
                  <span className="text-gray-300">{slide.subtitle}</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-200 max-w-lg">
                  {slide.description}
                </p>
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                  <LocalizedClientLink
                    href={slide.primaryCTA.href}
                    className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 text-center min-h-[44px] flex items-center justify-center text-sm sm:text-base"
                  >
                    {slide.primaryCTA.text}
                  </LocalizedClientLink>
                  {slide.secondaryCTA && (
                    <LocalizedClientLink
                      href={slide.secondaryCTA.href}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all text-center min-h-[44px] flex items-center justify-center text-sm sm:text-base"
                    >
                      {slide.secondaryCTA.text}
                    </LocalizedClientLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Desktop only */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/75'
            } h-2 rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
