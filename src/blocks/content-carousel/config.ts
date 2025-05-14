import { Block } from 'payload'

export const ContentCarousel: Block = {
  slug: 'contentCarousel',
  labels: { singular: "Carousselle d'experts", plural: "Carousselle d'experts" },
  fields: [
    {
      name: 'headingGroup',
      label: 'groupe de titre',
      type: 'group',
      fields: [
        {
          name: 'heading',
          label: 'titre',
          type: 'group',
          fields: [
            { name: 'heading0', label: 'titre 0', type: 'text' },
            {
              name: 'headingSpan1',
              label: 'partie en surbrillance 1',
              type: 'text',
            },
            { name: 'headingSpan2', label: 'partie en surbrillance 2', type: 'text' },
            {
              name: 'headingSpan3',
              label: 'partie en surbrillance 3',
              type: 'text',
            },
          ],
        },
        {
          name: 'headingDescription',
          label: 'description du titre',
          type: 'text',
        },
      ],
    },
    {
      name: 'images',
      label: "images des experts",
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
        {
          name: 'completeExpertName',
          label: "nom complet de l'expert",
          type: 'text',
        },
        {
          name: 'expertDescription',
          label: "description de l'expert",
          type: 'text',
        },
      ],
    },
    {
      name: 'CTAButton',
      label: 'bouton d’appel à l’action',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'url', label: 'URL', type: 'text' },
      ],
    },
  ],
}
