import { Block } from 'payload'

export const TestimonialCarousel: Block = {
  slug: 'testimonialCarousel',
  labels: { singular: 'carousselle de témoignages', plural: 'carousselle de témoignages' },
  fields: [
    {
      name: 'testimonials',
      label: 'Témoignages',
      type: 'array',
      required:false,
      minRows: 2,
      fields: [
        { name: 'name', label: 'Nom', type: 'text', required: true },
        { name: 'rating', label: 'Note', type: 'number', min: 0, max: 5, required: true },
        { name: 'review', label: 'Avis', type: 'text', required: true },
        { name: 'image', label: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
  ],
}
