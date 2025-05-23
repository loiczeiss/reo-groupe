"use client"

import StyledButton from '@/components/Styled-button/Styled-button'
import { Media } from '@/payload-types'

interface IntroComponentProps {
  title: string,
  introArray:{
    introText: string,
  }[]
  buttonGroup:{
    label: string,
    url: string,
  }
  bgImage?:Media
}

export default function IntroComponent(props: IntroComponentProps) {
  const { title, introArray, buttonGroup, bgImage } = props
  return (
    <div className="mx-2 sm:mx-8">
      <div className="bg-[#6ba23f] text-white p-8  rounded-lg shadow-md text-center"  style={{
        backgroundColor: "#668E2E",
        ...(bgImage?.url && {
          backgroundImage: `url(${bgImage.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }),
      }}>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-xs sm:text-lg px-8 sm:px-16 text-pretty ">
          {introArray.map((item, index) => (
            <p key={index} className="mb-4">
              {item.introText}
            </p>
          ))}

        </div>
        <div className="mt-6 flex justify-center">
         <StyledButton button={buttonGroup} className={'max-sm:px-2 border border-[#6ba23f] hover:bg-[#6ba23f]'} bgColor={"rgba(0, 0, 0, 0)"} iconClassName={"max-sm:h-4 max-sm:w-4" }/>
        </div>
      </div>
    </div>
  )
}
