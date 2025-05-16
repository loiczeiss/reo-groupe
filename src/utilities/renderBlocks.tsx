import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import { Index } from '@/blocks/Hero'
import { TextAndFourImagesBlock } from '@/blocks/text-and-four-images'
import { ThreeByThreeContentBlock } from '@/blocks/three-by-three-content'
import { WhyUsBlock } from '@/blocks/why-us'
import { ContentCarouselBlock } from '@/blocks/content-carousel'
import { CardAndImageBlock } from '@/blocks/card-and-image'
import { RealisationsCarouselBlock } from '@/blocks/realisations-carousel'
import { FaqComponentBlock } from '@/blocks/FAQ-component'
import { CertificationSectionBlock } from '@/blocks/certification-section'
import { BookingFormBlock } from '@/blocks/booking-form'
import { QuoteFormBlock } from '@/blocks/quote-form'
import { ContactFormBlock } from '@/blocks/contact-form'
import { ContactSectionBlock } from '@/blocks/contact-section'
import { TestimonialCarouselBlock } from '@/blocks/testimonial-carousel'
import { MidHeroBlock } from '@/blocks/mid-hero'

const blockComponents = {
  hero: Index,
  textAndFourImages: TextAndFourImagesBlock,
  threeByThreeContent: ThreeByThreeContentBlock,
  whyUs: WhyUsBlock,
  contentCarousel: ContentCarouselBlock,
  CardAndImage: CardAndImageBlock,
  realisationsCarousel: RealisationsCarouselBlock,
  faqComponent: FaqComponentBlock,
  certificationSection: CertificationSectionBlock,
  bookingForm: BookingFormBlock,
  quoteForm: QuoteFormBlock,
  contactForm: ContactFormBlock,
  contactSection: ContactSectionBlock,
  testimonialCarousel: TestimonialCarouselBlock,
  midHero: MidHeroBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                  <Block {...(block as any)} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
