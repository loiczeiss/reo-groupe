import Image from 'next/image'
import { Media } from '@/payload-types'
import StyledButton from '@/components/Styled-button/Styled-button'

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
  buttonGroup: {
    aboutButton: {
      label: string
      url: string
    }
    priceButton: {
      label: string
      url: string
    }
  }
}

export function HeroBlock(props: HeroBlockProps) {
  const { title, description, backgroundImage, images, buttonGroup } = props

  return (
    <div
      className="flex m-2 md:m-8 h-[100vw] md:h-[calc(80vw-64px)] lg:h-[calc(100vh-64px)] rounded-lg text-black relative"
      style={{
        backgroundImage: `url(${backgroundImage?.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center  w-1/2 pl-2 md:pl-8 z-10 text-white space-y-1 md:space-y-4">
        <h1 className="text-[20px] md:text-5xl leading-tight">{title}</h1>
        <p className="text-[6px] md:text-xs md:pr-24 leading-none md:leading-tight py-1 lg:py-0">
          {description}
        </p>
        <div className={'flex space-x-2 w-2/3'}>
          <StyledButton
            button={buttonGroup.aboutButton}
            className={' h-4 md:h-full text-[6px] text-[#668E2E] md:text-sm px-1 '}
            bgColor={'#232548'}
            divColor={'#668E2E'}
            iconClassName={'text-[#232548] w-[6px] h-[6px]'}
          />
          <StyledButton
            button={buttonGroup.priceButton}
            className={' h-4 text-[6px] md:h-full md:text-sm text-[#668E2E] px-1'}
            bgColor={'#fff'}
            divColor={'#fff'}
          />
        </div>
      </div>

      <div className="w-1/2 flex overflow-hidden">
        <div className="h-full w-2/3 flex flex-col space-y-2 md:space-y-4 overflow-hidden">
          <div className="w-full h-[424px] rounded-[12px] overflow-hidden -mt-20 relative">
            {images?.image6?.url && (
              <Image
                src={images.image6.url}
                alt={images.image6.alt}
                fill
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
          <div className="w-full h-[424px] rounded-[12px] overflow-hidden relative">
            {images?.image5?.url && (
              <Image
                src={images.image5.url}
                alt={images.image5.alt}
                fill
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="w-full h-[424px] rounded-[12px] overflow-hidden -mb-20 relative">
            {images?.image1?.url && (
              <Image
                src={images.image1.url}
                alt={images.image1.alt}
                fill
                className="w-full h-full object-cover "
              />
            )}
          </div>
        </div>

        <div className="h-full w-1/3 flex flex-col space-y-2 md:space-y-4 ml-4 md:ml-8 overflow-hidden rounded-r-lg">
          <div className="h-[424px] rounded-l-[12px] rounded-t-lg overflow-hidden -mt-20 w-full relative">
            {images?.image3?.url && (
              <Image
                src={images.image3.url}
                alt={images.image3.alt}
                fill
                className="w-full h-full object-cover "
              />
            )}
          </div>
          <div className="h-[424px] rounded-l-[12px] overflow-hidden w-full relative">
            {images?.image4?.url && (
              <Image
                src={images.image4.url}
                alt={images.image4.alt}
                fill
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="h-[424px] rounded-l-[12px] overflow-hidden w-full relative">
            {images?.image2?.url && (
              <Image
                src={images.image2.url}
                alt={images.image2.alt}
                fill
                className="w-full h-full object-cover rounded-b-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
