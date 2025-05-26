import { Block } from 'payload'

export const ThreeByThreeContent: Block = {
  slug: 'threeByThreeContent',
  labels: { singular: 'contenu et images 3x3', plural: 'contenu et images 3x3' },
  fields: [
    {
      name: 'headingGroup',
      label: 'groupe de titre',
      type: 'group',
      fields: [
        {
          name: 'heading',
          label: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'headingSpan',
          label: 'partie en surbrillance du titre',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      label: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'images',
      label: 'Images (3x3)',
      type: 'array',
      minRows: 3,
      maxRows: 9,
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
          name: 'services',
          label: 'services',
          type: 'text',
          required: true,
        },
        {
          name: 'servicesDescription',
          label: 'description des services',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'button',
      label: 'bouton',
      type: 'group',
      fields: [
        {
          name: 'label',
          label: 'texte du bouton',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
