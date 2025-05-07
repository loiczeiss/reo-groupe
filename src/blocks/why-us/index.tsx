import { Media } from '@/payload-types'

interface WhyUsBlockProps {
  headingGroup: { heading: string; headingSpan: string; headingDescription: string }
  subheadingGroup1: { subheading: string; subheadingDescription: string; subheadingLogo: Media }
  subheadingGroup2: { subheading: string; subheadingDescription: string; subheadingLogo: Media }
  subheadingGroup3: { subheading: string; subheadingDescription: string; subheadingLogo: Media }
}

export function WhyUsBlock(props: WhyUsBlockProps) {
  const { headingGroup, subheadingGroup1, subheadingGroup2, subheadingGroup3 } = props
  return (<></>
    // <article className={'w-full flex bg-[#F5F3F3]'}>
    //   <div className={'flex flex-col justify-center w-1/2 px-8 pr-20'}>
    //     <h1 className={'text-[#232548] text-5xl font-semibold'}>{headingGroup.heading}</h1>
    //     <span className={'text-[#668E2E] text-5xl font-semibold'}>{headingGroup.headingSpan}</span>
    //     <p className={'text-sm pt-4'}>{headingGroup.headingDescription}</p>
    //   </div>
    //   <div className={'flex flex-col justify-between w-1/2 p-8 space-y-4'}>
    //     <div className={'bg-white py-4 px-6 rounded-lg'}>
    //       <div className={'flex justify-between items-center pb-4'}>
    //         <h1 className={'text-2xl text-[#232548] font-semibold'}>
    //           {subheadingGroup1.subheading}
    //         </h1>
    //         <div className={'relative h-16 w-16 '}>
    //           <Image
    //             fill
    //             src={subheadingGroup1.subheadingLogo.url as string}
    //             alt={subheadingGroup1.subheadingLogo.alt}
    //           />
    //         </div>
    //       </div>
    //       <p className={'text-sm text-[#232548]'}>{subheadingGroup1.subheadingDescription}</p>
    //     </div>
    //     <div className={'bg-white py-4 px-6 rounded-lg'}>
    //       <div className={'flex justify-between items-center pb-4'}>
    //         <h1 className={'text-2xl text-[#232548] font-semibold'}>
    //           {subheadingGroup2.subheading}
    //         </h1>
    //         <div className={'relative h-16 w-16 '}>
    //           <Image
    //             fill
    //             src={subheadingGroup2.subheadingLogo.url as string}
    //             alt={subheadingGroup2.subheadingLogo.alt}
    //           />
    //         </div>
    //       </div>
    //       <p className={'text-sm text-[#232548]'}>{subheadingGroup2.subheadingDescription}</p>
    //     </div>
    //     <div className={'bg-white py-4 px-6 rounded-lg'}>
    //       <div className={'flex justify-between items-center pb-4'}>
    //         <h1 className={'text-2xl text-[#232548] font-semibold'}>
    //           {subheadingGroup3.subheading}
    //         </h1>
    //         <div className={'relative h-16 w-16 '}>
    //           <Image
    //             fill
    //             src={subheadingGroup3.subheadingLogo.url as string}
    //             alt={subheadingGroup3.subheadingLogo.alt}
    //           />
    //         </div>
    //       </div>
    //       <p className={'text-sm text-[#232548]'}>{subheadingGroup3.subheadingDescription}</p>
    //     </div>
    //   </div>
    // </article>
  )
}
