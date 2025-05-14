"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Star } from "lucide-react"
import { cn } from "@/utilities/ui"
import type { Media } from "@/payload-types"

interface TestimonialCarouselBlockProps {
  testimonials: {
    id: number
    name: string
    image: Media
    rating: number
    review: string
  }[]
}

export function TestimonialCarouselBlock(props: TestimonialCarouselBlockProps) {
  const { testimonials } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    // This ensures code runs only on client
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Render skeleton loader while width is being determined
  if (width === null) {
    return (
      <div className="w-full py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border-0 h-full shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Skeleton className="h-14 w-14 rounded-full" />
                    <div className="ml-4 space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Skeleton key={star} className="h-5 w-5 rounded" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-2 h-2 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  }

  const isDesktop = width >= 1024
  const isTablet = width >= 768
  const itemsPerPageCount = isDesktop ? itemsPerPage.desktop : isTablet ? itemsPerPage.tablet : itemsPerPage.mobile

  const totalPages = Math.ceil(testimonials.length / itemsPerPageCount)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                activeIndex === index ? "bg-green-600" : "bg-gray-300",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({
                           testimonial,
                         }: {
  testimonial: {
    id: number
    name: string
    image: Media
    rating: number
    review: string
  }
}) {
  return (
    <Card className="border-0 h-full shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center mb-6">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={(testimonial.image.url as string) || "/placeholder.svg"}
              alt={testimonial.image.alt}
              className="object-cover"
            />
            <AvatarFallback className="bg-[#1cd8c9]">{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800">{testimonial.name}</h3>
            <div className="flex">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 max-sm:text-xs">{testimonial.review}</p>
      </CardContent>
    </Card>
  )
}
