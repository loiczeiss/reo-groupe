'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/utilities/ui'
import Image from 'next/image'
import type { Media } from '@/payload-types'

interface CertificationSectionBlockProps {
  title: string
  logo: Media
  certificationArray: {
    textContent: string
    textSubContent: string
  }[]
}

export function CertificationSectionBlock(props: CertificationSectionBlockProps) {
  const { title, logo, certificationArray } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  if (width === null) {
    return (
      <section className="bg-[#668E2E] py-12 px-4 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">{title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="bg-white rounded-lg overflow-hidden border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Skeleton className="w-12 h-12 rounded-full mb-4" />
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const itemsPerPage = {
    mobile: 2,
    tablet: 2,
    desktop: 4,
  }

  const isDesktop = width >= 1024
  const isTablet = width >= 768
  const itemsPerPageCount = isDesktop ? itemsPerPage.desktop : isTablet ? itemsPerPage.tablet : itemsPerPage.mobile
  const totalPages = Math.ceil(certificationArray.length / itemsPerPageCount)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  const start = activeIndex * itemsPerPageCount
  const visibleCertifications = certificationArray.slice(start, start + itemsPerPageCount)

  return (
    <section className="bg-[#668E2E] py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-transform">
          {visibleCertifications.map((cert, index) => (
            <Card key={index} className="bg-white rounded-lg overflow-hidden border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 relative">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center relative">
                    <Image src={logo.url as string} alt={logo.alt} fill className="object-contain" />
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-2">{cert.textContent}</h3>
                <p className="text-gray-600 text-sm">{cert.textSubContent}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-colors',
                activeIndex === index ? 'bg-white' : 'bg-green-900/40'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
