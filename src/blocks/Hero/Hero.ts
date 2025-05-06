import { Block } from 'payload';

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero Block', plural: 'Hero Blocks' },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'images',
      label: 'Hero Images',
      type: 'group',
      fields: [
        {
          name: 'image1',
          label: 'Image 1',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'image2',
          label: 'Image 2',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'image3',
          label: 'Image 3',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'image4',
          label: 'Image 4',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'image5',
          label: 'Image 5',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'image6',
          label: 'Image 6',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};
