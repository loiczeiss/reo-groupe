import { Block } from 'payload'

export const CardAndImage: Block = {
  slug: 'CardAndImage',
  labels: {
    singular: "Carte et image (Avis client)",
    plural: "Carte et image (Avis client)",
  },
  fields: [
    {
      name: 'title',
      label: 'titre',
      type: 'text',
      required: true,
    },
    {
      name: 'bgImage',
      label: 'image de fond',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'cardGroupArray',
      label: 'groupe de cartes (liste)',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'cardGroup',
          label: 'groupe de carte',
          type: 'group',
          fields: [
            {
              name: 'fullName',
              label: 'nom complet',
              type: 'text',
              required: true,
            },
            {
              name: 'profession',
              label: 'profession',
              type: 'text',
              required: true,
            },
            {
              name: 'thoughts',
              label: 'avis',
              type: 'textarea',
              required: true,
            },
            {
              name: 'picture',
              label: 'photo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
