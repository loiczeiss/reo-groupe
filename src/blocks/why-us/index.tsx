import { Media } from '@/payload-types'
import Image from 'next/image'
interface WhyUsBlockProps {
  headingGroup: { heading: string; headingSpan: string; headingDescription: string }
  subheadingGroup1: { subheading: string; subheadingDescription: string; subheadingLogo: Media }
  subheadingGroup2: { subheading: string; subheadingDescription: string; subheadingLogo: Media }
  subheadingGroup3: { subheading: string; subheadingDescription: string; subheadingLogo: Media }
}

export function WhyUsBlock(props: WhyUsBlockProps) {
  const { headingGroup, subheadingGroup1, subheadingGroup2, subheadingGroup3 } = props
  return (
    <article className={'w-full flex flex-col md:flex-row px-12 py-10 md:px-0 md:py-0 bg-[#F5F3F3]'}>
      <div className={'flex flex-col justify-start md:justify-center md:w-1/2  md:px-8 md:pr-20'}>
        <h1 className={'text-[#232548] text-[20px] md:text-5xl font-semibold leading-tight'}>{headingGroup.heading}</h1>
        <span className={'text-[#668E2E] text-[20px] md:text-5xl font-semibold leading-tight'}>{headingGroup.headingSpan}</span>
        <p className={'text-[7px] md:text-sm pt-2 md:pt-4 leading-tight pr-4 md:pr-0'}>{headingGroup.headingDescription}</p>
      </div>
      <div className={'flex flex-col justify-between md:w-1/2 py-4 md:py-0 md:p-8 space-y-4'}>
        <div className={'bg-white px-[11.276px] py-[7.517px] md:py-4 md:px-6 rounded-lg'}>
          <div className={'flex justify-between items-center pb-1 md:pb-4'}>
            <h1 className={'text-[11px] md:text-2xl text-[#232548] font-semibold'}>
              {subheadingGroup1.subheading}
            </h1>
            <div className={'relative h-8 md:h-16 w-8 md:w-16 mr-4 md:mr-0'}>
              <Image
                fill
                src={subheadingGroup1.subheadingLogo.url as string}
                alt={subheadingGroup1.subheadingLogo.alt}

              />
            </div>
          </div>
          <p className={'text-[6.5px] md:text-sm text-[#232548] leading-tight'}>{subheadingGroup1.subheadingDescription}</p>
        </div>
        <div className={'bg-white px-[11.276px] py-[7.517px] md:py-4 md:px-6 rounded-lg'}>
          <div className={'flex justify-between items-center pb-1 md:pb-4'}>
            <h1 className={'text-[11px] md:text-2xl text-[#232548] font-semibold'}>
              {subheadingGroup2.subheading}
            </h1>
            <div className={'relative h-8 md:h-16 w-8 md:w-16 mr-4 md:mr-0'}>
              <Image
                fill
                src={subheadingGroup2.subheadingLogo.url as string}
                alt={subheadingGroup2.subheadingLogo.alt}
              />
            </div>
          </div>
          <p className={'text-[6.5px] md:text-sm text-[#232548] leading-tight'}>{subheadingGroup2.subheadingDescription}</p>
        </div>
        <div className={'bg-white px-[11.276px] py-[7.517px] md:py-4 md:px-6 rounded-lg'}>
          <div className={'flex justify-between items-center pb-1 md:pb-4'}>
            <h1 className={'text-[11px] md:text-2xl text-[#232548] font-semibold'}>
              {subheadingGroup3.subheading}
            </h1>
            <div className={'relative h-8 md:h-16 w-8 md:w-16 mr-4 md:mr-0'}>
              <Image
                fill
                src={subheadingGroup3.subheadingLogo.url as string}
                alt={subheadingGroup3.subheadingLogo.alt}
              />
            </div>
          </div>
          <p className={'text-[6.5px] md:text-sm text-[#232548] leading-tight'}>{subheadingGroup3.subheadingDescription}</p>
        </div>
      </div>
    </article>
  )
}
