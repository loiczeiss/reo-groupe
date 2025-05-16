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
      required:true
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required:true
    },
    {
      name: 'certificationArray',
      label: 'Liste des certifications',
      type: 'array',
      required:true,
      minRows: 2,
      maxRows: 6,
      fields: [
        {
          name: 'textContent',
          label: 'Texte principal',
          type: 'text',
          required:true
        },
        {
          name: 'textSubContent',
          label: 'Texte secondaire',
          type: 'text',
          required :true
        },
      ],
    },
  ],
}
