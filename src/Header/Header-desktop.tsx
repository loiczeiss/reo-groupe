"use client"

import { HeaderProps } from '@/Header/index'
import { Nav } from '@/Header/Nav'
import Image from "next/image"
import StyledButton from '@/components/Styled-button/Styled-button'


export function HeaderDesktop(props: HeaderProps) {
  const {nav, logo, button}= props
  return  <header className="absolute top-0 left-0 right-0 z-50 px-12 lg:px-16">
    <div className="max-w-[1920px] mx-auto bg-white rounded-3xl shadow-sm my-12 py-1 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative h-8 w-16 flex-shrink-0">
          <Image
            src={(logo.url as string) || "/placeholder.svg"}
            alt={logo.alt}
            className="object-contain"
            fill
            priority
          />
        </div>

        {/* Navigation */}
        <Nav nav={nav} />

        {/* Button */}
        <div className="flex-shrink-0">
          <StyledButton button={button} className={'pr-1 text-[#668E2E] text-[12px]'} bgColor={'#F5F5F5'} divIconClassName={"bg-[#668E2E]"} iconClassName={"text-[#F5F5F5]"}/>
        </div>
      </div>
    </div>
  </header>
}
