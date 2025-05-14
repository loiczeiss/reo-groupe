'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import StyledButton from '@/components/Styled-button/Styled-button'

interface ContentCarouselBlockProps {
  headingGroup: {
    heading: {
      heading0: string
      headingSpan1: string
      headingSpan2: string
      headingSpan3: string
    }
    headingDescription: string
  }
  images: {
    image: Media
    completeExpertName: string
    expertDescription: string
  }[]
  CTAButton: {
    label: string
    url: string
  }
}

export function ContentCarouselBlock(props: ContentCarouselBlockProps) {
  const { headingGroup, images, CTAButton } = props
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Track selected slide
  useEffect(() => {
    if (!api) return

    const updateIndex = () => {
      const selected = api.selectedScrollSnap()
      setCurrentIndex(selected)
    }

    updateIndex() // initial
    api.on('select', updateIndex)

    return () => {
      api.off('select', updateIndex)
    }
  }, [api])

  return (
    <div className="w-full  flex flex-col items-center py-8">
      <div
        className="flex flex-col items-center justify-center text-[#668E2E] w-2/3 space-y-1 md:space-y-4 pb-8 px-8 text-center"
      >
        <h1
          className="text-xl max-sm:leading-snug md:text-5xl font-semibold break-words whitespace-pre-wrap w-full max-w-full overflow-hidden"
        >
          {headingGroup.heading.heading0}
          <span className="text-[#232548]"> {headingGroup.heading.headingSpan1}</span>
          <br />
          {headingGroup.heading.headingSpan2}
          <span className="text-[#232548]"> {headingGroup.heading.headingSpan3}</span>
        </h1>

        <div
          className="text-xs max-sm:leading-normal max-sm:px-6 max-sm:pt-4 md:text-sm text-[#232548] text-center md:px-36
               max-h-[8rem] overflow-y-auto break-words whitespace-pre-wrap w-full"
        >
          {headingGroup.headingDescription}
        </div>
      </div>




      <Carousel opts={{ align: 'center', loop: true }} setApi={setApi} className="w-full relative">
        <CarouselContent className={'overflow-visible'}>
          {images.map((image, i) => (
            <CarouselItem
              key={i}
              className="basis-1/3 md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <div className="w-min md:h-[400px] flex justify-center items-center">
                <div className="relative w-[100px] md:w-[300px] h-[120px] md:h-[400px]">
                  <Image
                    src={image.image.url as string}
                    alt={image.image.alt}
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
      </Carousel>

      <div className="flex flex-col items-center mt-2 text-center text-[#232548] space-y-2 md:space-y-4 ">
        <div className={'space-y-1 md:space-y-2'}>
          <h2 className={'text-[16px] md:text-2xl max-sm:leading-none'}>{images[currentIndex]?.completeExpertName}</h2>
          <p className={'text-[12px] max-sm:leading-tight md:text-sm'}>{images[currentIndex]?.expertDescription}</p>
        </div>
        <StyledButton className={'max-sm:text-[9px] max-sm:h-4 max-sm:p-2 text-[#232548]'} iconClassName={'max-sm:text-[#668E2E]'} divIconClassName={'hidden'} button={CTAButton} />
      </div>
    </div>
  )
}
