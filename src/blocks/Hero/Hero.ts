import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Bloc Héros', plural: 'Blocs Héros' },
  fields: [
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      label: 'Image de fond',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'images',
      label: 'Images Héros',
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
    {
      name: 'buttonGroup',
      label: 'Groupe de boutons',
      type: 'group',
      fields: [
        {
          name: 'aboutButton',
          label: 'Bouton à propos',
          type: 'group',
          fields: [
            { name: 'label', label: 'Libellé', type: 'text' },
            { name: 'url', label: 'URL', type: 'text' },
          ],
        },
        {
          name: 'priceButton',
          label: 'Bouton tarif',
          type: 'group',
          fields: [
            { name: 'label', label: 'Libellé', type: 'text' },
            { name: 'url', label: 'URL', type: 'text' },
          ],
        },
      ],
    },
  ],
}
