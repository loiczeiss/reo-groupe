import type { Media } from "@/payload-types"
import Image from "next/image"

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

export function TextAndFourImagesBlock(props: TextAndFourImagesProps) {
  const { heading, description, subheading1, subcontent1, subheading2, subcontent2, images, bgImage } = props

  return (
    <div
      className={
        "w-full min-h-screen max-h-fit flex max-sm:flex-col px-4 sm:px-12 py-6 md:py-16 bg-[50%_35%] md:bg-[47%_83%]"
      }
      style={{
        backgroundImage: `url(${bgImage?.url})`,
        backgroundSize: "20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text content section */}
      <div className={"md:w-1/2 flex flex-col items-center space-y-2 md:space-y-6 overflow-hidden"}>
        <div className={"flex flex-col space-y-1 md:space-y-4 mt-0 md:mt-8 w-full"}>
          {/* Heading with overflow protection */}
          <h1
            className={
              "max-sm:text-center max-sm:px-8 text-md md:text-5xl font-semibold leading-none md:leading-tight line-clamp-4"
            }
          >
            {heading}
          </h1>

          {/* Description with overflow protection */}
          <div className={"max-h-[30vh] overflow-y-auto"}>
            <p
              className={
                "text-[#575757] max-sm:text-center max-sm:px-12 max-sm:my-2 text-[10px] md:text-sm pr-4 md:pr-20 leading-none md:leading-tight"
              }
            >
              {description}
            </p>
          </div>
        </div>

        {/* Subheadings section with overflow protection */}
        <div className={"flex w-full max-w-full overflow-hidden"}>
          {/* First subheading */}
          <div className={"flex flex-col max-sm:text-center flex-1 min-w-0 pr-2"}>
            <h1 className={"text-md md:text-6xl pl-2 truncate"}>{subheading1}</h1>
            <div className={"max-h-[20vh] overflow-y-auto"}>
              <p className={"max-sm:px-4 text-[10px] md:text-sm leading-none md:leading-tight pr-4 text-pretty"}>
                {subcontent1}
              </p>
            </div>
          </div>

          {/* Second subheading */}
          <div className={"flex flex-col max-sm:text-center flex-1 min-w-0"}>
            <h1 className={"text-md md:text-6xl pl-2 truncate"}>{subheading2}</h1>
            <div className={"max-h-[20vh] overflow-y-auto"}>
              <p className={"max-sm:px-4 text-[10px] md:text-sm leading-none md:leading-tight pr-4"}>{subcontent2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Images section */}
      <div className={"max-sm:pt-4 flex flex-col md:w-1/2 space-y-1 md:space-y-4"}>
        {/* Main image with aspect ratio */}
        <div className="relative w-full aspect-[16/9] md:h-2/3 md:aspect-auto mt-2 md:mt-0">
          <Image
            fill
            src={(images?.image3?.url as string) || "/placeholder.svg"}
            alt={images?.image3?.alt as string}
            className={"object-cover rounded md:rounded-lg"}
          />
        </div>

        {/* Bottom row of images */}
        <div className={"h-[10vh] md:h-1/3 flex space-x-1 md:space-x-4"}>
          {/* Image 1 */}
          <div className="relative w-full">
            <Image
              fill
              src={(images?.image2?.url as string) || "/placeholder.svg"}
              alt={images?.image2?.alt as string}
              className={"object-cover rounded md:rounded-lg"}
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full">
            <Image
              fill
              src={(images?.image1?.url as string) || "/placeholder.svg"}
              alt={images?.image1?.alt as string}
              className={"object-cover rounded md:rounded-lg"}
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full">
            <Image
              fill
              src={(images?.image4?.url as string) || "/placeholder.svg"}
              alt={images?.image4?.alt as string}
              className={"object-cover rounded md:rounded-lg"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
