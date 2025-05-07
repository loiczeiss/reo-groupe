import { Block } from 'payload'

export const CardAndImage: Block = {
  slug: 'CardAndImage',
  fields: [
    { name: 'title', label: 'title', type: 'text' },
    {
      name: 'cardGroupArray',
      label: 'card group array',
      type: 'array',
      fields: [
        {
          name: 'cardGroup',
          label: 'card group',
          type: 'group',
          fields: [
            { name: 'fullName', label: 'full name', type: 'text' },
            {name: "profession", label: 'profession', type: 'text' },
            {
              name: 'thoughts',
              label: 'thoughts',
              type: 'text',
            },
            { name: 'picture', label: 'picture', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
  ],
}
