import { Block } from 'payload'

export const ThreeByThreeContent: Block = {
  slug: 'threeByThreeContent',
  fields: [
    {
      name: 'headingGroup',
      label: 'Heading Group',
      type: 'group',
      fields: [
        {
          name: 'heading',
          label: 'heading',
          type: 'text',
        },
        {
          name: 'headingSpan',
          label: 'heading span',
          type: 'text',
        },
      ],
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'images',
      label: 'Images (3x3)',
      type: 'array',
      minRows: 9,
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
        },
        { name: 'servicesDescription', label: 'Services Description', type: 'text' },
      ],
    },
    {
      name: 'button',
      label: 'Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          label: 'Label',
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
