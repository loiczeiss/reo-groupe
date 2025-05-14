import { Block } from 'payload'

export const WhyUs: Block = {
  slug: 'whyUs',
  labels: {
    singular: 'Pourquoi nous',
    plural: 'Pourquoi nous',
  },
  fields: [
    {
      name: 'headingGroup',
      label: 'groupe de titre',
      type: 'group',
      fields: [
        { name: 'heading', label: 'titre', type: 'text' },
        {
          name: 'headingSpan',
          label: 'partie en surbrillance du titre',
          type: 'text',
        },
        {
          name: 'headingDescription',
          label: 'description du titre',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'subheadingGroup1',
      label: 'groupe de sous-titre 1',
      type: 'group',
      fields: [
        { name: 'subheading', label: 'sous-titre', type: 'text' },
        {
          name: 'subheadingDescription',
          label: 'description du sous-titre',
          type: 'textarea',
        },
        {
          name: 'subheadingLogo',
          label: 'logo du sous-titre',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'subheadingGroup2',
      label: 'groupe de sous-titre 2',
      type: 'group',
      fields: [
        { name: 'subheading', label: 'sous-titre', type: 'text' },
        {
          name: 'subheadingDescription',
          label: 'description du sous-titre',
          type: 'textarea',
        },
        {
          name: 'subheadingLogo',
          label: 'logo du sous-titre',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'subheadingGroup3',
      label: 'groupe de sous-titre 3',
      type: 'group',
      fields: [
        { name: 'subheading', label: 'sous-titre', type: 'text' },
        {
          name: 'subheadingDescription',
          label: 'description du sous-titre',
          type: 'textarea',
        },
        {
          name: 'subheadingLogo',
          label: 'logo du sous-titre',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
