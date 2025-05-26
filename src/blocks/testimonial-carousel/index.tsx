'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Star } from 'lucide-react'
import { cn } from '@/utilities/ui'
import type { Media } from '@/payload-types'

interface Testimonial {
  id: number
  name: string
  image: Media
  rating: number
  review: string
}
type Review = {
  id: number;
  author: string;
  rating: number;
  review: string;
  authorImage: string;
  // You can add more fields here if needed (e.g., date, likes, etc.)
};

interface TestimonialCarouselBlockProps {
  testimonials?: Testimonial[]
}

export function TestimonialCarouselBlock(props: TestimonialCarouselBlockProps) {
  const { testimonials } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const [width, setWidth] = useState<number | null>(null)
  const [fetchedTestimonials, setFetchedTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/get-reviews')
        if (!res.ok) {
          console.error('Failed to fetch', res.status)
          return
        }
        const data: Review[] = await res.json()

        const formatted: Testimonial[] = data.map(
          (review: Review) => ({
            id: review.id,
            name: review.author,
            image: {
              url: review.authorImage,
              alt: review.author,
            } as Media,
            rating: review.rating,
            review: review.review,
          }),
        )

        setFetchedTestimonials(formatted)
      } catch (err) {
        console.error('Error fetching testimonials:', err)
      }
    }

    fetchTestimonials()
  }, [])

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Use props.testimonials if passed, otherwise use fetched testimonials
  const displayTestimonials =
    fetchedTestimonials.length > 0 ? fetchedTestimonials : (testimonials ?? [])

  // Show skeleton loading UI if either:
  // 1) width is not initialized (like before)
  // 2) testimonials are loading (no props AND fetchedTestimonials is empty)
  if (width === null || (!testimonials && fetchedTestimonials.length === 0)) {
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
  const itemsPerPageCount = isDesktop
    ? itemsPerPage.desktop
    : isTablet
      ? itemsPerPage.tablet
      : itemsPerPage.mobile

  const totalPages = Math.ceil(displayTestimonials.length / itemsPerPageCount)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="w-full py-12 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {displayTestimonials.map((testimonial) => (
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
                'w-2 h-2 rounded-full transition-colors',
                activeIndex === index ? 'bg-green-600' : 'bg-gray-300',
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="border-0 h-full shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center mb-6">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={(testimonial.image.url as string) || '/placeholder.svg'}
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
