'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Media } from '@/payload-types'
import { useState } from 'react'
import { CircleArrowOutUpRight, MoveUpRight } from 'lucide-react'

import StyledButton from '@/components/Styled-button/Styled-button'

interface Props {
  headingGroup: {
    heading: string
    headingSpan: string
  }
  description?: string
  images: {
    image: Media
    alt?: string
    services: string
    servicesDescription: string
  }[]
  button: { label: string; url: string }
}

export function ThreeByThreeContentBlock({ headingGroup, description, images, button }: Props) {
  const [selectedImage, setSelectedImage] = useState<{
    image: Media
    alt?: string
    services: string
    servicesDescription: string
  } | null>(null)
  console.log(headingGroup)
  return (
    <div className="flex flex-col items-center text-center space-y-6 px-8 py-12">
      <h2 className="text-4xl font-bold">
        {headingGroup?.heading}{' '}
        <span className={'text-[#668E2E]'}>{headingGroup?.headingSpan}</span>
      </h2>
      {description && <p className="text-sm max-w-xl">{description}</p>}

      <div className="grid grid-cols-3 gap-4 w-full max-w-5xl">
        {images.map((img, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <div
                onClick={() => setSelectedImage(img)}
                className="relative w-full h-[300px] overflow-hidden rounded-lg focus:outline-none group hover:cursor-pointer"
              >
                <Image
                  src={img.image.url as string}
                  alt={img.alt || `Image ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 w-full text-start bg-linear-0 from-black to-transparent text-white  px-4 py-2 flex justify-between items-center text-base">
                  {img.services}

                  <CircleArrowOutUpRight />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-white r border-none max-w-3xl max-h-[90vh]">
              {selectedImage && (
                <div className={'flex flex-col items-center w-full p-8 h-7/8vh space-y-4'}>
                  <div className={'relative h-[40vh] w-2/3 rounded-lg'}>
                    <Image
                      src={selectedImage?.image.url as string}
                      alt={selectedImage.image.alt || ''}
                      fill
                      className=" h-auto object-cover rounded-xl"
                    />
                  </div>
                  <div className={'flex flex-col items-center space-y-2'}>
                    <h1 className={'text-xl font-semibold text-[#232548]'}>
                      {selectedImage.services}
                    </h1>
                    <p className={'text-xs'}>{selectedImage.servicesDescription}</p>
                  </div>
                  <StyledButton button={button} />
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
