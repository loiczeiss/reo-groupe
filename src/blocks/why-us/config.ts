import { Block } from 'payload'

export const WhyUs: Block = {
  slug: 'whyUs',
  fields: [
    {
      name: 'headingGroup',
      label: 'headingGroup',
      type: 'group',
      fields: [
        { name: 'heading', label: 'heading', type: 'text' },
        {name: 'headingSpan', label: 'heading span', type: 'text' },
        { name: 'headingDescription', label: 'heading`s description', type: 'text' },
      ],
    },
    {
      name: 'subheadingGroup1',
      label: 'subheading group 1',
      type: 'group',
      fields: [
        { name: 'subheading', label: 'subheading', type: 'text' },
        {
          name: 'subheadingDescription',
          label: 'subheadingDescription',
          type: 'text',
        },
        { name: 'subheadingLogo', label: 'subheading logo', type: 'upload', relationTo: 'media' },
      ],
    },{
      name: 'subheadingGroup2',
      label: 'Subheading Group 2',
      type: 'group',
      fields: [
        { name: 'subheading', label: 'Subheading', type: 'text' },
        {
          name: 'subheadingDescription',
          label: 'Subheading Description',
          type: 'text',
        },
        {
          name: 'subheadingLogo',
          label: 'Subheading Logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'subheadingGroup3',
      label: 'Subheading Group 3',
      type: 'group',
      fields: [
        { name: 'subheading', label: 'Subheading', type: 'text' },
        {
          name: 'subheadingDescription',
          label: 'Subheading Description',
          type: 'text',
        },
        {
          name: 'subheadingLogo',
          label: 'Subheading Logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    }

  ],
}
