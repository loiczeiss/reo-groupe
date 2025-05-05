import { Block, CollectionConfig } from 'payload'
import { Hero } from '@/blocks/Hero/Hero'
import { TextContent } from '@/blocks/Text/text'




const Pages: CollectionConfig = {
  slug: 'pages',
  labels:{
    singular: 'Page',
    plural: 'Pages'
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero, TextContent],
    }

  ],

}

export { Pages }