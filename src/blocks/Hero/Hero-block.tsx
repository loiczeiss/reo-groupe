import Image from 'next/image'
import { Media } from '@/payload-types'

interface HeroBlockProps {
  title?: string
  description?: string
  backgroundImage?: Media
  images: {
    image1?: Media
    image2?: Media
    image3?: Media
    image4?: Media
    image5?: Media
    image6?: Media
  }
}

export function HeroBlock(props: HeroBlockProps) {
  const { title, description, backgroundImage, images } = props

  return (
    <div
      className="flex mx-8 my-8 h-[calc(100vh-64px)] rounded-lg text-black relative"
      style={{
        backgroundImage: `url(${backgroundImage?.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center w-1/2 pl-8 z-10 text-white">
        <h1 className="text-5xl">{title}</h1>
        <p className="text-xs pr-24">{description}</p>
      </div>

      <div className="w-1/2 flex overflow-hidden">
        <div className="h-full w-2/3 flex flex-col space-y-4 overflow-hidden">
          <div className="w-full h-[424px] rounded-[12px] overflow-hidden -mt-20">
            {images?.image6?.url && (
              <Image
                src={images.image6.url}
                alt={images.image6.alt}
                width={410}
                height={424}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
          <div className="w-full h-[424px] rounded-[12px] overflow-hidden">
            {images?.image5?.url && (
              <Image
                src={images.image5.url}
                alt={images.image5.alt}
                width={410}
                height={424}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="w-full h-[424px] rounded-[12px] overflow-hidden -mb-20">
            {images?.image1?.url && (
              <Image
                src={images.image1.url}
                alt={images.image1.alt}
                width={410}
                height={424}
                className="w-full h-full object-cover "
              />
            )}
          </div>
        </div>

        <div className="h-full w-1/3 flex flex-col space-y-4 ml-8 overflow-hidden rounded-r-lg">
          <div className="h-[424px] rounded-l-[12px] rounded-t-lg overflow-hidden -mt-20 w-full">
            {images?.image3?.url && (
              <Image
                src={images.image3.url}
                alt={images.image3.alt}
                width={410}
                height={424}
                className="w-full h-full object-cover "
              />
            )}
          </div>
          <div className="h-[424px] rounded-l-[12px] overflow-hidden w-full">
            {images?.image4?.url && (
              <Image
                src={images.image4.url}
                alt={images.image4.alt}
                width={410}
                height={424}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="h-[424px] rounded-l-[12px] overflow-hidden w-full">
            {images?.image2?.url && (
              <Image
                src={images.image2.url}
                alt={images.image2.alt}
                width={410}
                height={424}
                className="w-full h-full object-cover rounded-b-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
