"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import type { Media } from "@/payload-types"
import { useState } from "react"
import { CircleArrowOutUpRight } from "lucide-react"

import StyledButton from "@/components/Styled-button/Styled-button"
import { motion } from "motion/react"

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

  return (
    <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 px-12 py-3 md:px-8 md:py-12 text-[#232548] font-poppins">
      <div className="flex flex-col space-y-1">
        <h2 className="text-[24px] md:text-4xl font-bold leading-tight">
          {headingGroup?.heading} <span className="text-[#668E2E]">{headingGroup?.headingSpan}</span>
        </h2>
        {description && (
          <p className="text-[12px] md:text-sm max-w-xl leading-none md:leading-tight px-4">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {images.map((img, i) => {
          const layoutId = `modal-${i}`
          return (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <motion.div
                  layoutId={layoutId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  onClick={() => setSelectedImage(img)}
                  className="relative w-full h-[30vh] md:h-[300px] overflow-hidden rounded-lg focus:outline-none group hover:cursor-pointer"
                >
                  <Image
                    src={(img.image.url as string) || "/placeholder.svg"}
                    alt={img.alt || `Image ${i + 1}`}
                    fill
                    className="object-cover rounded-lg transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#232548]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white">
                    <h3 className="font-semibold text-sm md:text-lg mb-2">{img.services}</h3>
                    <p className="text-[10px] md:text-xs text-center overflow-y-hidden max-h-[80%] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                      {img.servicesDescription}
                    </p>
                    <div className="absolute bottom-2 right-2">
                      <CircleArrowOutUpRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Bottom Label (visible when not hovering) */}
                  <div className="absolute bottom-0 left-0 w-full text-start bg-gradient-to-t from-black/70 to-transparent text-white px-4 py-2 flex justify-between items-center text-sm sm:text-base group-hover:opacity-0 transition-opacity duration-300">
                    {img.services}
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                      <CircleArrowOutUpRight />
                    </motion.div>
                  </div>
                </motion.div>
              </DialogTrigger>

              {selectedImage && (
                <DialogContent className="p-0 bg-white border-none max-w-[80vw] md:max-w-xl max-h-[90vh]">
                  <div className="flex flex-col items-center md:w-full max-sm:py-4 sm:p-8 space-y-4">
                    <div className="relative h-[20vh] md:h-[40vh] w-2/3 rounded-lg">
                      <Image
                        src={(selectedImage.image.url as string) || "/placeholder.svg"}
                        alt={selectedImage.image.alt || ""}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col items-center space-y-2 gap-2 text-center">
                      <h1 className="text-md md:text-xl font-semibold text-[#232548] max-sm:leading-tight">
                        {selectedImage.services}
                      </h1>
                      <p className="text-[11px] md:text-xs leading-none px-4 sm:px-24">
                        {selectedImage.servicesDescription}
                      </p>
                    </div>

                    <StyledButton className="max-sm:h-5 max-sm:text-[11px] max-sm:p-1" button={button} />
                  </div>
                </DialogContent>
              )}
            </Dialog>
          )
        })}
      </div>
    </div>
  )
}
