'use client'
import { Media } from '@/payload-types'
import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface CardAndImageBlockProps {
  title: string
  cardGroupArray: {
    cardGroup: { fullname: string; profession: string; thoughts: string; picture: Media }
  }[]
}

export function CardAndImageBlock(props: CardAndImageBlockProps) {
  const { title, cardGroupArray } = props
  const [api, setApi] = useState<CarouselApi>()
  const [index, setIndex] = useState(0)
  const selectedGroup = cardGroupArray[index].cardGroup

  useEffect(() => {
    if (!api) return

    const updateIndex = () => {
      const selected = api.selectedScrollSnap()
      setIndex(selected)
    }

    updateIndex() // initial
    api.on('select', updateIndex)

    return () => {
      api.off('select', updateIndex)
    }
  }, [api])

  return (
    <div className={'flex px-12 py-10 md:px-0 md:py-7 space-x-4'}>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {/* Dummy items to allow carousel to work, can be empty or placeholders */}
          {cardGroupArray.map((item, i) => (
            <CarouselItem key={i} className="basis-full">
              {i === index ? (
                <div className="flex flex-row w-full h-full p-6 border rounded-md space-x-4">
                  {/* Left: Text content (2/3) */}
                  <div className="w-2/3 flex flex-col justify-between space-y-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <div className={'flex justify-between'}>
                      <div className={'flex'}>
                        <Avatar>
                          <AvatarImage
                            src={item.cardGroup.picture.url as string}
                            alt={item.cardGroup.picture.alt}
                          />
                          <AvatarFallback>
                            {item?.cardGroup.fullname
                              .split(' ')
                              .map((char) => char.charAt(0).toUpperCase())
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={'flex flex-col'}>
                          <p>{item.cardGroup.fullname}</p>
                          <p>{item.cardGroup.profession}</p>
                        </div>
                      </div>
                      <div>
                        <CarouselPrevious />
                        <CarouselNext />
                      </div>
                    </div>
                    <blockquote className="italic text-gray-800 text-lg">
                      “{item.cardGroup.thoughts}”
                    </blockquote>
                  </div>

                  {/* Right: Image with overlay (1/3) */}
                  <div className="w-1/3 relative">
                    <Image
                      src={item.cardGroup.picture.url as string}
                      alt={item.cardGroup.picture.alt || ''}
                      fill
                      className="object-cover rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 rounded-b-md">
                      <p className="font-semibold">{item.cardGroup.fullname}</p>
                      <p className="text-sm">{item.cardGroup.profession}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-48" />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Hydrate your div outside carousel itself */}
        <div className="mt-6 p-4 border rounded">
          <h2 className="text-xl font-bold">{cardGroupArray[index].cardGroup.fullname}</h2>
          <p>{cardGroupArray[index].cardGroup.profession}</p>
        </div>
      </Carousel>
    </div>
  )
}
