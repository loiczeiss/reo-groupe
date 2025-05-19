'use client'

import { HeaderProps } from '@/Header/index'
import { Nav } from '@/Header/Nav'
import Image from 'next/image'
import StyledButton from '@/components/Styled-button/Styled-button'
import { Media } from '@/payload-types'
import { motion } from 'motion/react'

export function HeaderDesktop(props: HeaderProps) {
  const { nav, logo, button } = props.headerData

  function isMedia(value: number | Media | null | undefined): value is Media {
    return typeof value !== 'number'
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-12 lg:px-16">
      <motion.div
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
        className="max-w-[1920px] mx-auto bg-white rounded-3xl shadow-sm my-12 py-1 px-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative h-8 w-16 flex-shrink-0">
            {isMedia(logo) && logo.url && (
              <Image
                src={logo.url}
                alt={logo.alt ?? 'Logo'}
                className="object-contain"
                fill
                priority
              />
            )}
          </div>

          {/* Navigation */}
          <Nav nav={nav} />

          {/* Button */}
          <div className="flex-shrink-0">
            <StyledButton
              button={button}
              className={'pr-1 text-[#668E2E] text-[12px]'}
              bgColor={'#F5F5F5'}
              divIconClassName={'bg-[#668E2E]'}
              iconClassName={'text-[#F5F5F5]'}
            />
          </div>
        </div>
      </motion.div>
    </header>
  )
}
