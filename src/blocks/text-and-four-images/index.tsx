import { Media } from '@/payload-types'
import Image from 'next/image'
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
    <div className={'w-full md:h-screen flex px-12 py-16 bg-[46%_64%] md:bg-[47%_83%]'} style={{backgroundImage: `url(${bgImage?.url})`,backgroundSize: '20%'
   ,backgroundRepeat: 'no-repeat',}}>
      <div className={'w-1/2 flex flex-col items-center space-y-2 md:space-y-6'}>
        <div className={'flex flex-col space-y-1 md:space-y-4 mt-0 md:mt-8'}>
          <h1 className={'text-sm md:text-5xl font-semibold leading-none md:leading-tight'}>{heading}</h1>
          <p className={'text-[#575757] text-[5px] md:text-sm pr-4 md:pr-20 leading-none md:leading-tight'}>{description}</p>
        </div>
        <div className={'flex'}>
          <div className={'flex flex-col'}>
            <h1 className={'text-sm md:text-6xl pl-2'}>{subheading1}</h1>
            <p className={'text-[5px] md:text-sm leading-none md:leading-tight pr-4'}>{subcontent1}</p>
          </div>
          <div className={'flex flex-col'}>
            <h1 className={'text-sm md:text-6xl pl-2'}>{subheading2}</h1>
            <p className={'text-[5px] md:text-sm leading-none md:leading-tight pr-4'}>{subcontent2}</p>
          </div>
        </div>
      </div>
      <div className={'flex flex-col w-1/2 space-y-1 md:space-y-4'}>
        <div className="relative w-full h-[84px] md:h-2/3 mt-2 md:mt-0">
          <Image fill src={images?.image3?.url as string} alt={images?.image3?.alt as string} className={'object-cover rounded md:rounded-lg'}/>
        </div>
        <div className={'h-[44px] md:h-1/3 flex space-x-1 md:space-x-4'}>
          <div className="relative w-full">
            <Image fill src={images?.image2?.url as string} alt={images?.image2?.alt as string} className={'object-cover rounded md:rounded-lg'}/>
          </div>
          <div className="relative w-full">
            <Image fill src={images?.image1?.url as string} alt={images?.image1?.alt as string} className={'object-cover rounded md:rounded-lg'}/>

          </div>
          <div className="relative w-full">
            <Image fill src={images?.image4?.url as string} alt={images?.image4?.alt as string} className={'object-cover rounded md:rounded-lg'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
