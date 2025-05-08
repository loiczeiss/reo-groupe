import { Block } from 'payload'

export const RealisationsCarousel: Block = {
  slug: 'realisationsCarousel',
  fields: [
    { name: 'title', label: 'title', type: 'group', fields
    :[{name: 'titleSpan1', label: 'titleSpan1', type: 'text'},
        {name: 'titleSpan2', label: 'titleSpan2', type: 'text'},
      ]},
    {
      name: 'description',
      label: 'description',
      type: 'text',
    },
    { name: 'subDescription', label: 'sub description', type: 'text' },
    {
      name: 'images',
      label: 'images',
      type: 'array',
      minRows: 3,
      maxRows: 9,
      fields: [
        {
          name: 'image',
          label: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
