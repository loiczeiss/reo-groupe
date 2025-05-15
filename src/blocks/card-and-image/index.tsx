"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import type { Media } from "@/payload-types"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/utilities/ui"

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
  const [_api, setApi] = useState<CarouselApi>()

  const [isLoaded, setIsLoaded] = useState(false)
  const [_imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({})



  // Set component as loaded after initial render
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Track when an image is loaded
  const handleImageLoaded = (idx: number) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [idx]: true,
    }))
  }



  return (
    <div className="w-full">
      {/* Fixed height container to prevent layout shifts */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
        <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="absolute inset-0">
          <CarouselContent className="h-full">
            {cardGroupArray.map((item, i) => (
              <CarouselItem key={i} className="basis-full h-full">
                <div
                  className={cn(
                    "flex flex-row w-full h-full px-4 py-4 md:px-6 md:py-10 rounded-md space-x-2 md:space-x-4 text-[#232548] justify-center",
                    // Fade in when loaded to prevent flash of content
                    isLoaded ? "opacity-100 transition-opacity duration-300" : "opacity-0",
                  )}
                >
                  {/* Left (2/3) - Content */}
                  <div
                    className="relative flex flex-col justify-between space-y-2 md:space-y-4 w-2/3 p-2 sm:p-4 md:p-8 lg:p-12 rounded-md md:rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: "#f5f5f5", // Fallback color while image loads
                      backgroundImage: bgImage?.url ? `url(${bgImage.url})` : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {/* Title with text truncation */}
                    <h2 className="text-xs max-sm:pr-4 sm:text-xl md:text-3xl lg:text-4xl font-bold line-clamp-2">
                      {title || "Untitled"}
                    </h2>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 sm:gap-2">
                        {/* Avatar with fixed dimensions and fallback */}
                        <div className="flex-shrink-0">
                          <Avatar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
                            <AvatarImage
                              src={(item.cardGroup.picture?.url as string) || "/placeholder.svg?height=64&width=64"}
                              alt={item.cardGroup.picture?.alt || item.cardGroup.fullName || "Profile picture"}
                              className="object-cover"
                              onLoad={() => handleImageLoaded(i)}
                            />
                            <AvatarFallback>
                              {item.cardGroup.fullName
                                ? item.cardGroup.fullName
                                  .split(" ")
                                  .map((char) => char.charAt(0).toUpperCase())
                                  .slice(0, 2)
                                  .join("")
                                : "U"}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex flex-col min-w-0">
                          {" "}
                          {/* min-w-0 enables truncation */}
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium truncate">
                            {item.cardGroup.fullName || "Anonymous"}
                          </p>
                          <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-700 truncate">
                            {item.cardGroup.profession || "Professional"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2 flex-shrink-0">
                        <CarouselPrevious className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 static" variant="ghost" />
                        <CarouselNext className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 static" variant="ghost" />
                      </div>
                    </div>

                    {/* Quote with multi-line ellipsis */}
                    <blockquote className="italic text-xs sm:text-sm md:text-base lg:text-lg max-h-[8rem] overflow-y-auto whitespace-pre-wrap break-words">
                      {`"${item.cardGroup.thoughts || 'No thoughts provided'}"`}
                    </blockquote>
                  </div>

                  {/* Right (1/3) - Image with overlay */}
                  <div className="relative w-1/3 rounded-md md:rounded-2xl overflow-hidden bg-gray-200">
                    {" "}
                    {/* Placeholder background */}
                    <div className="w-full h-full">
                      <Image
                        src={(item.cardGroup.picture?.url as string) || "/placeholder.svg?height=500&width=300"}
                        alt={item.cardGroup.picture?.alt || item.cardGroup.fullName || ""}
                        fill
                        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                        className="object-cover"
                        priority={i === 0} // Prioritize loading the first image
                        onLoad={() => handleImageLoaded(i)}
                      />
                    </div>
                    <div className="flex flex-col justify-end absolute bottom-0 left-0 w-full h-1/3 p-3 md:p-4 space-y-1 bg-gradient-to-t from-white/30 to-transparent text-[#232548]">
                      <p className="font-semibold max-sm:leading-tight m-0 text-[12px] md:text-sm lg:text-base truncate">
                        {item.cardGroup.fullName || "Anonymous"}
                      </p>
                      <p className="text-[12px] max-sm:leading-tight md:text-xs lg:text-sm truncate">
                        {item.cardGroup.profession || "Professional"}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
