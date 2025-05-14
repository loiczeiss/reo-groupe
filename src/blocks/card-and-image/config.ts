import { Block } from 'payload'

export const CardAndImage: Block = {
  slug: 'CardAndImage',
  labels: { singular: "Carte et image (Avis client)", plural: "Carte et image (Avis client)" },
  fields: [
    { name: 'title', label: 'titre', type: 'text' },
    { name: 'bgImage', label: 'image de fond', type: 'upload', relationTo: 'media' },
    {
      name: 'cardGroupArray',
      label: 'groupe de cartes (liste)',
      type: 'array',
      fields: [
        {
          name: 'cardGroup',
          label: 'groupe de carte',
          type: 'group',
          fields: [
            { name: 'fullName', label: 'nom complet', type: 'text' },
            { name: 'profession', label: 'profession', type: 'text' },
            {
              name: 'thoughts',
              label: 'avis',
              type: 'textarea',
            },
            { name: 'picture', label: 'photo', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
  ],
}
