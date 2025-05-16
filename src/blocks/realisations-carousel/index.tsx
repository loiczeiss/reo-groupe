'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface RealisationsCarouselBlockProps {
  title: {
    titleSpan1: string
    titleSpan2: string
  }
  description: string
  subDescription: string
  images: {
    image: Media
  }[]
}

export function RealisationsCarouselBlock(props: RealisationsCarouselBlockProps) {
  const { title, images, description, subDescription } = props
  const [activeIndex, setActiveIndex] = useState(2)

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Fixed aspect ratio for all images
  const imageAspectRatio = '1.4' // width/height ratio (280px/200px = 1.4)

  return (
    <div className="bg-[#EDEDED] py-[4%] font-poppins">
      <div className="max-w-[90%] w-[1100px] mx-auto text-center">
        <div className={'flex flex-col px-12 sm:px-16 space-y-2'}>
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-[2%]">
            {title.titleSpan1} <span className="text-green-600">{title.titleSpan2}</span>
          </h2>
          <p className="text-gray-700 mb-[4%] mx-auto text-xs lg:text-base max-w-[90%] max-lg:leading-tight">
            {description}
          </p>

          <p className="text-gray-800 mb-[5%] font-medium text-xs lg:text-base pb-4 max-sm:leading-tight ">
            {subDescription}
          </p>
        </div>
        {/* Carousel container with fixed aspect ratio */}
        <div className="relative w-full h-0 pb-[30%] ">
          <div className="absolute inset-0">
            {images.map((item, index) => {
              // Calculate position and z-index based on distance from active index
              const distance = Math.abs(index - activeIndex)
              const isActive = index === activeIndex

              // Calculate offset for the overlapping effect - consistent across all screen sizes
              let translateX = 0
              if (index < activeIndex) {
                translateX = -100 + distance * 30
              } else if (index > activeIndex) {
                translateX = 100 - distance * 30
              }

              // Scale based on whether it's active or not - consistent across all screen sizes
              const scale = isActive ? 1 : 0.8

              // Opacity based on distance from active
              const opacity = isActive ? 1 : 0.7 - distance * 0.15

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out shadow-lg"
                  style={{
                    width: '28%', // Consistent percentage of container width
                    aspectRatio: imageAspectRatio,
                    transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale})`,
                    opacity: opacity > 0 ? opacity : 0,
                    zIndex: isActive ? 10 : 10 - distance,
                    display: distance > 2 ? 'none' : 'block',
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image.url || '/placeholder.svg'}
                      alt={item.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-[1%] -translate-y-8">
          <button
            onClick={handlePrev}
            className="p-[0.5%] text-green-600 hover:text-green-700 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-[min(5vw,1.25rem)] h-[min(5vw,1.25rem)]" />
          </button>

          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              style={{
                width: index === activeIndex ? 'min(3vw,0.75rem)' : 'min(2vw,0.5rem)',
                height: index === activeIndex ? 'min(3vw,0.75rem)' : 'min(2vw,0.5rem)',
              }}
              aria-label={`Voir réalisation ${index + 1}`}
            />
          ))}

          <button
            onClick={handleNext}
            className="p-[0.5%] text-green-600 hover:text-green-700 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-[min(5vw,1.25rem)] h-[min(5vw,1.25rem)]" />
          </button>
        </div>
      </div>
    </div>
  )
}
