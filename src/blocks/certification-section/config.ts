import { Block } from 'payload'

export const CertificationSection: Block = {
  slug: 'certificationSection',
  labels: {
    singular: 'Section Certifications',
    plural: 'Sections Certifications',
  },
  fields: [
    {
      name: 'title',
      label: 'Titre de la section',
      type: 'text',
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'certificationArray',
      label: 'Liste des certifications',
      type: 'array',
      minRows: 2,
      maxRows: 6,
      fields: [
        {
          name: 'textContent',
          label: 'Texte principal',
          type: 'text',
        },
        {
          name: 'textSubContent',
          label: 'Texte secondaire',
          type: 'text',
        },
      ],
    },
  ],
}
