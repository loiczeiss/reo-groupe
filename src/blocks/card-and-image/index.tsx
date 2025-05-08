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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface CardAndImageBlockProps {
  title: string
  bgImage: Media
  cardGroupArray: {
    cardGroup: {
      fullName: string
      profession: string
      thoughts: string
      picture: Media
    }
  }[]
}

export function CardAndImageBlock(props: CardAndImageBlockProps) {
  const { title, cardGroupArray, bgImage } = props
  const [api, setApi] = useState<CarouselApi>()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const updateIndex = () => {
      const selected = api.selectedScrollSnap()
      setIndex(selected)
    }

    updateIndex()
    api.on('select', updateIndex)

    return () => {
      api.off('select', updateIndex)
    }
  }, [api])

  return (
    <div>
      <Carousel opts={{ align: 'start', loop: true }} setApi={setApi}>
        <CarouselContent>
          {cardGroupArray.map((item, i) => (
            <CarouselItem key={i} className="basis-full">
              {i === index ? (
                <div className="flex flex-row w-full h-full px-6 py-10 rounded-md max-sm:space-x-[2px] space-x-4 text-[#232548] justify-center">
                  {/* Left (2/3) - Content */}
                  <div
                    className="flex flex-col justify-between space-y-1 md:space-y-4 w-[195.406px] h-[121.869px] p-[18.5px_9.25px] md:w-[460.789px] md:h-[287.38px] md:p-[43.625px_21.813px] lg:w-[845px] lg:h-[527px] lg:p-[80px_40px] rounded-xs md:rounded-2xl"
                    style={{
                      backgroundImage: `url(${bgImage.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <h2 className="text-[11.1px] leading-[11.1px] sm:text-[26.175px] sm:leading-[26.175px] lg:text-[48px] lg:leading-[48px]">
                      {title}
                    </h2>


                    <div className="flex justify-between">
                      <div className="flex gap-1 sm:gap-2">
                        <Avatar className="max-sm:w-[13.875px] max-sm:h-[13.875px] max-sm:aspect-[13.87/13.87] max-md:w-[32.719px] max-md:h-[32.719px] max-md:aspect-[32.72/32.72] w-[60px] h-[60px] aspect-square">
                          <AvatarImage
                            src={item.cardGroup.picture.url as string}
                            alt={item.cardGroup.picture.alt}
                            className="object-cover"
                          />
                          <AvatarFallback className="object-cover w-[13.875px] h-[13.875px]">
                            {item.cardGroup.fullName
                              .split(' ')
                              .map((char) => char.charAt(0).toUpperCase())
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <p className="max-sm:text-[4.162px] max-sm:leading-[6.475px] max-md:text-[9.816px] max-md:leading-[15.269px] text-[18px] leading-[28px]">
                            {item.cardGroup.fullName}
                          </p>
                          <p className="max-sm:text-[3.237px] max-sm:leading-[4.625px] max-md:text-[7.634px] max-md:leading-[10.906px] text-[14px] leading-[20px]">
                            {item.cardGroup.profession}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CarouselPrevious
                          className="w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[24px] md:h-[24px] static"
                          variant="ghost"
                        />
                        <CarouselNext
                          className="w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[24px] md:h-[24px] static"
                          variant="ghost"
                        />
                      </div>
                    </div>
                    <blockquote className="italic text-[4.162px] leading-[6.475px] sm:text-[9.816px] sm:leading-[15.269px] lg:text-[18px] lg:leading-[28px]">
                      “{item.cardGroup.thoughts}”
                    </blockquote>

                  </div>

                  {/* Right (1/3) - Image with overlay */}
                  <div className="flex flex-col items-start flex-shrink-0 max-sm:w-[95.044px] max-sm:h-[121.869px] max-sm:p-[7.4px] gap-[0.925px] relative rounded-xs md:rounded-2xl md:w-[224.123px] md:h-full md:p-[17.45px] h-full">
                    <Image
                      src={item.cardGroup.picture.url as string}
                      alt={item.cardGroup.picture.alt || ''}
                      fill
                      className="object-cover rounded-xs md:rounded-2xl"
                    />
                    <div className="absolute top-0 left-0 w-[95.044px] h-[44.4px] p-[7.4px_7.4px] md:w-[224.123px] md:h-[104.7px] md:p-[17px_17px] max-sm:space-y-[2px] space-y-2 bg-gradient-to-b from-black/60 to-transparent rounded-xs md:rounded-2xl">
                      <p className="font-semibold text-[5px] md:text-[13px] max-lg:leading-none">
                        {item.cardGroup.fullName}
                      </p>
                      <p className="text-[3.237px] md:text-[7.6px] max-lg:leading-none">
                        {item.cardGroup.profession}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-48" />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
