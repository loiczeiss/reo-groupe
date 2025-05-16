'use client'
import { Media } from '@/payload-types'

interface MidHeroBlockProps {
  heading: string
  description: string
  bgImage: Media
}

export function MidHeroBlock(props: MidHeroBlockProps) {
  const { heading, description, bgImage } = props
  return (
    <main className="px-8 py-[11px] sm:p-[18px] lg:p-[32px]">
      <div
        className="w-full p-8 relative overflow-hidden sm:pt-24 rounded-lg"
        style={{
          backgroundColor: '#668E2E',
          ...(bgImage?.url && {
            backgroundImage: `url(${bgImage.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }),
        }}
      >
        {/* Subtle texture overlay */}

        <div className="z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-white text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            {heading}
          </h2>
          <p className="text-white text-[12px] sm:text-sm md:text-base lg:text-lg max-sm:leading-tight">
            {description}
          </p>
        </div>
      </div>
    </main>
  )
}
