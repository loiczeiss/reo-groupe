import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero Block', plural: 'Hero Blocks' },
  fields: [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'backgroundImage', label: 'BackgroundImage', type: 'upload', relationTo: 'media' },
  ],
}
