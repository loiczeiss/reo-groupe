'use client'

import Image from 'next/image'
import type { Media } from '@/payload-types'
import { motion } from 'motion/react'

interface TextAndFourImagesProps {
  heading: string
  description: string
  subheading1: string
  subcontent1: string
  subheading2: string
  subcontent2: string
  images: {
    image1?: Media
    image2?: Media
    image3?: Media
    image4?: Media
  }
  bgImage: Media
}

export function TextAndFourImagesBlock({
  heading,
  description,
  subheading1,
  subcontent1,
  subheading2,
  subcontent2,
  images,
  bgImage,
}: TextAndFourImagesProps) {
  return (
    <div
      className="w-full lg:h-screen flex max-lg:flex-col px-4 sm:px-12 py-6 md:py-16 bg-[50%_35%] md:bg-[47%_83%] max-lg:space-y-4 font-poppins bg-fixed"
      style={{
        backgroundImage: `url(${bgImage?.url})`,
        backgroundSize: '20%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Text content section */}
      <div className="lg:w-1/2 h-full overflow-y-auto flex flex-col items-center justify-center space-y-2 md:space-y-6">
        <div className="flex flex-col space-y-1 md:space-y-4 mt-0 md:mt-8 w-full">
          {/* Heading */}
          <h1 className="max-sm:text-center max-sm:px-8 text-md md:text-5xl font-semibold leading-none md:leading-tight line-clamp-4">
            {heading}
          </h1>

          {/* Description with overflow protection */}
          <div className="max-h-[40vh] ">
            <p className="text-[#575757] max-sm:text-center max-sm:px-12 max-sm:my-2 text-[9px] md:text-sm pr-4 md:pr-20 leading-none md:leading-tight">
              {description}
            </p>
          </div>
        </div>

        {/* Subheadings section */}
        <div className="flex w-full max-w-full overflow-hidden space-x-2">
          {/* Subheading 1 */}
          <div className="flex flex-col max-sm:text-center flex-1 min-w-0 pr-2">
            <h2 className="text-md md:text-6xl pl-2 truncate">{subheading1}</h2>
            <div className="max-h-[25vh]">
              <p className="max-sm:px-4 text-[10px] md:text-sm leading-none md:leading-tight pr-4 text-pretty">
                {subcontent1}
              </p>
            </div>
          </div>

          {/* Subheading 2 */}
          <div className="flex flex-col max-sm:text-center flex-1 min-w-0">
            <h2 className="text-md md:text-6xl pl-2 truncate">{subheading2}</h2>
            <div className="max-h-[20vh]">
              <p className="max-sm:px-4 text-[10px] md:text-sm leading-none md:leading-tight pr-4">
                {subcontent2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Images section */}
      <div className="max-sm:pt-4 flex flex-col lg:w-1/2 space-y-1 md:space-y-4">
        {/* Main image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[16/9] lg:h-2/3 lg:aspect-auto mt-2 md:mt-0"
        >
          <Image
            fill
            src={images?.image3?.url || '/placeholder.svg'}
            alt={images?.image3?.alt || 'Image 3'}
            className="object-cover rounded md:rounded-lg"
          />
        </motion.div>

        {/* Bottom images */}
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-[10vh] lg:h-1/3 flex space-x-1 md:space-x-4"
        >
          {[images?.image2, images?.image1, images?.image4].map((img, idx) => (
            <div key={idx} className="relative w-full">
              <Image
                fill
                src={img?.url || '/placeholder.svg'}
                alt={img?.alt || `Image ${idx + 1}`}
                className="object-cover rounded md:rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
