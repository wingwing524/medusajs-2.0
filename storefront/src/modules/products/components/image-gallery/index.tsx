"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import React from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = React.useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/5] bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-400">No image available</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Display Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 rounded-lg">
        {images[selectedImage]?.url && (
          <Image
            src={images[selectedImage].url}
            alt={`Product image ${selectedImage + 1}`}
            fill
            priority={selectedImage === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}
        
        {/* Image Counter Badge */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
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
    </div>
  )
}

export default ImageGallery
