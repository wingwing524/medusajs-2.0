"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import React, { useState, useEffect, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Detect mobile/tablet
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/5] bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-400">No image available</span>
      </div>
    )
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setMousePosition({ x, y })
  }

  const handleTap = () => {
    if (isMobile) {
      setIsFullscreen(true)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Main Display Image */}
        <div 
          className={`relative aspect-[3/4] w-full max-w-full sm:max-w-md lg:max-w-lg overflow-hidden bg-gray-100 rounded-lg ${isMobile ? 'cursor-pointer' : 'cursor-zoom-in'}`}
          onMouseEnter={() => !isMobile && setIsZoomed(true)}
          onMouseLeave={() => !isMobile && setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onClick={handleTap}
          onTouchStart={(e) => e.stopPropagation()}
        >
          {images[selectedImage]?.url && (
            <>
              <Image
                src={images[selectedImage].url}
                alt={`Product image ${selectedImage + 1}`}
                fill
                priority={selectedImage === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-transform duration-200 ${!isMobile && isZoomed ? 'scale-150' : 'scale-100'}`}
                style={
                  !isMobile && isZoomed
                    ? {
                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                      }
                    : undefined
                }
              />
              
              {/* Zoom Icon - Desktop only */}
              {!isMobile && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              )}

              {/* Tap to enlarge hint - Mobile only */}
              {isMobile && (
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                  Tap to enlarge
                </div>
              )}
            </>
          )}
          
          {/* Image Counter Badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
            {selectedImage + 1} / {images.length}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))
                }}
                className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))
                }}
                className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all min-h-[44px] ${
                  selectedImage === index
                    ? "border-gray-900 ring-2 ring-gray-900 ring-offset-2"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                {image.url && (
                  <Image
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* 360° View Placeholder */}
        <button className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 font-medium text-sm text-gray-700 min-h-[44px]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          360° View
        </button>
      </div>

      {/* Fullscreen Modal - Mobile only */}
      <Transition appear show={isFullscreen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsFullscreen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden transition-all">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="absolute top-4 right-4 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Close fullscreen"
                  >
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Fullscreen Image */}
                  <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                    {images[selectedImage]?.url && (
                      <Image
                        src={images[selectedImage].url}
                        alt={`Product image ${selectedImage + 1}`}
                        fill
                        sizes="100vw"
                        className="object-contain"
                        priority
                      />
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                      {selectedImage + 1} / {images.length}
                    </div>

                    {/* Navigation */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                          aria-label="Previous image"
                        >
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                          aria-label="Next image"
                        >
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip in Fullscreen */}
                  {images.length > 1 && (
                    <div className="mt-4 px-4">
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {images.map((image, index) => (
                          <button
                            key={image.id}
                            onClick={() => setSelectedImage(index)}
                            className={`relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                              selectedImage === index
                                ? "border-white ring-2 ring-white"
                                : "border-white/30"
                            }`}
                          >
                            {image.url && (
                              <Image
                                src={image.url}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ImageGallery
