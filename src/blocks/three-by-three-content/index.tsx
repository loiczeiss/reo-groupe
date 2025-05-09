'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Media } from '@/payload-types'
import { useState } from 'react'
import { CircleArrowOutUpRight } from 'lucide-react'

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
    <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 px-12 py-3 md:px-8  md:py-12 text-[#232548]">
     <div className={'flex flex-col space-y-1'}> <h2 className="text-[24px] md:text-4xl font-bold leading-tight">
       {headingGroup?.heading}{' '}
       <span className={'text-[#668E2E]'}>{headingGroup?.headingSpan}</span>
     </h2>
       {description && <p className="text-[12px] md:text-sm max-w-xl leading-none md:leading-tight px-4">{description}</p>}</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {images.map((img, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <div
                onClick={() => setSelectedImage(img)}
                className="relative w-full h-[30vh] md:h-[300px] overflow-hidden rounded-lg focus:outline-none group hover:cursor-pointer"
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
            <DialogContent className="p-0 bg-white  border-none max-w-[80vw] md:max-w-xl max-h-[90vh]">
              {selectedImage && (
                <div className={'flex flex-col items-center md:w-full p-8 h-7/8vh space-y-4'}>
                  <div className={'relative h-[20vh] md:h-[40vh] w-2/3 rounded-lg'}>
                    <Image
                      src={selectedImage?.image.url as string}
                      alt={selectedImage.image.alt || ''}
                      fill
                      className="  object-cover rounded-xl"
                    />
                  </div>
                  <div className={'flex flex-col items-center space-y-2'}>
                    <h1 className={'text-md md:text-xl font-semibold text-[#232548]'}>
                      {selectedImage.services}
                    </h1>
                    <p className={'text-[11px] md:text-xs leading-none'}>{selectedImage.servicesDescription}</p>
                  </div>
                  <StyledButton className={'max-sm:h-5 max-sm:text-[11px] max-sm:p-1'}  button={button} />
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
