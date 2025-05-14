import { Block } from 'payload'

export const RealisationsCarousel: Block = {
  slug: 'realisationsCarousel',
  labels: {
    singular: 'Carrousel de réalisations',
    plural: 'Carrousels de réalisations',
  },
  fields: [
    {
      name: 'title',
      label: 'Titre',
      type: 'group',
      fields: [
        { name: 'titleSpan1', label: 'Titre (partie 1)', type: 'text' },
        { name: 'titleSpan2', label: 'Titre (partie 2 en vert)', type: 'text' },
      ],
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
    },
    {
      name: 'subDescription',
      label: 'Sous-description',
      type: 'text',
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      maxRows: 9,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
