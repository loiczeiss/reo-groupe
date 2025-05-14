import { Block } from 'payload'

export const TextAndFourImages: Block = {
slug: 'textAndFourImages',
  labels: {
    singular: 'Texte et quatres images',
    plural: 'Texte et quatres images',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'subheading1',
      label: 'Subheading 1',
      type: 'text',
      required: false,
    },
    {
      name: 'subcontent1',
      label: 'Subcontent 1',
      type: 'textarea',
      required: false,
    },
    {
      name: 'subheading2',
      label: 'Subheading 2',
      type: 'text',
      required: false,
    },
    {
      name: 'subcontent2',
      label: 'Subcontent 2',
      type: 'textarea',
      required: false,
    },
    {
      name: 'images',
      label: 'Images',
      type: 'group',
      fields: [
        {
          name: 'image1',
          label: 'Main Image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'image2',
          label: 'Image 2',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'image3',
          label: 'Image 3',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'image4',
          label: 'Image 4',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    {name:"bgImage", label: "bg image", type:'upload', relationTo: 'media'}
  ],
}
