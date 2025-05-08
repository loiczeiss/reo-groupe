import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import { HeroBlock } from '@/blocks/Hero/Hero-block'
import { TextBlock } from '@/blocks/Text/Text-block'
import { TextAndFourImagesBlock } from '@/blocks/text-and-four-images'

import { ThreeByThreeContentBlock } from '@/blocks/three-by-three-content'
import { WhyUsBlock } from '@/blocks/why-us'
import { ContentCarouselBlock } from '@/blocks/content-carousel'
import { CardAndImageBlock } from '@/blocks/card-and-image'
import RealisationsCarouselBlock from '@/blocks/realisations-carousel'
import FaqComponentBlock from '@/blocks/FAQ-component'

const blockComponents = {
  hero: HeroBlock,
  text: TextBlock, // if you have this block component
  textAndFourImages: TextAndFourImagesBlock,
  threeByThreeContent: ThreeByThreeContentBlock,
  whyUs: WhyUsBlock,
  contentCarousel: ContentCarouselBlock,
  CardAndImage: CardAndImageBlock,
  realisationsCarousel: RealisationsCarouselBlock,
  faqComponent: FaqComponentBlock
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
                  <Block {...block} />
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
