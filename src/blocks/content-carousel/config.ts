import { Block } from 'payload'

export const ContentCarousel: Block = {
  slug: 'contentCarousel',
  fields: [
    {
      name: 'headingGroup',
      label: 'headingGroup',
      type: 'group',
      fields: [
        {
          name: 'heading',
          label: 'heading',
          type: 'group',
          fields: [
            { name: 'heading0' , label: 'heading0', type: 'text' },
            {
              name: 'headingSpan1',
              label: 'headingSpan1',
              type: 'text',
            },
            { name: 'headingSpan2', label: 'headingSpan2', type: 'text' },
            {
              name: 'headingSpan3',
              label: 'headingSpan3',
              type: 'text',
            },
          ],
        },
        { name: 'headingDescription', label: 'heading description', type: 'text' },
      ],
    },
    {
      name: 'images',
      label: 'images of experts',
      type: 'array',
      minRows: 2,
      maxRows: 5,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
        },
        { name: 'completeExpertName', label: 'complete expert name', type: 'text' },
        {
          name: 'expertDescription',
          label: 'expert description',
          type: 'text',
        },
      ],
    },
    {
      name: 'CTAButton',
      label: 'CTA button',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'url', label: 'url', type: 'text' },
      ],
    },
  ],
}
