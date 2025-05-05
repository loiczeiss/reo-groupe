import { Block } from 'payload'

export const TextContent: Block = {
  slug: 'text',
  labels: {
    singular: 'Text Block',
    plural: 'Text Blocks',
  },
  fields: [{ name: 'content', label: 'Content', type: 'text' }],
}
