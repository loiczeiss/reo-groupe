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
}

export function TextAndFourImagesBlock(props: TextAndFourImagesProps) {
  const { heading, description, subheading1, subcontent1, subheading2, subcontent2, images } = props
  return (
    <div className={'w-full h-screen flex px-12 py-16'}>
      <div className={'w-1/2 flex flex-col items-center space-y-6'}>
        <div className={'flex flex-col space-y-4'}>
          <h1 className={'text-5xl'}>{heading}</h1>
          <p className={'text-sm pr-20'}>{description}</p>
        </div>
        <div className={'flex'}>
          <div className={'flex flex-col'}>
            <h1 className={'text-6xl'}>{subheading1}</h1>
            <p className={'text-sm'}>{subcontent1}</p>
          </div>
          <div className={'flex flex-col'}>
            <h1 className={'text-6xl'}>{subheading2}</h1>
            <p className={'text-sm'}>{subcontent2}</p>
          </div>
        </div>
      </div>
      <div className={'flex flex-col w-1/2 space-y-4'}>
        <div className="relative w-full  h-2/3">
          <Image fill src={images?.image3?.url as string} alt={images?.image3?.alt as string} className={'object-cover rounded-lg'}/>
        </div>
        <div className={'h-1/3 flex space-x-4'}>
          <div className="relative w-full">
            <Image fill src={images?.image2?.url as string} alt={images?.image2?.alt as string} className={'object-cover rounded-lg'}/>
          </div>
          <div className="relative w-full">
            <Image fill src={images?.image1?.url as string} alt={images?.image1?.alt as string} className={'object-cover rounded-lg'}/>

          </div>
          <div className="relative w-full">
            <Image fill src={images?.image4?.url as string} alt={images?.image4?.alt as string} className={'object-cover rounded-lg'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
