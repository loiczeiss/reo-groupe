import { Block } from 'payload'

export const ContactSection: Block = {
  slug: 'contactSection',
  labels: {
    singular: 'Section Contact',
    plural: 'Section Contacts',
  },
  fields: [
    {
      name: 'title',
      label: 'Titre de la section',
      type: 'text',
      required: true
    },
    {
      name: 'telephone',
      label: 'Téléphone',
      type: 'group',
      fields: [
        { name: 'number', label: 'Numéro de téléphone', type: 'text', required: true },
        { name: 'subheading', label: 'Sous-titre du téléphone', type: 'text', required : true },
      ],
    },
    {
      name: 'mail',
      label: 'Email',
      type: 'group',
      fields: [
        { name: 'email', label: 'Adresse email', type: 'text', required: true },
        { name: 'subheading', label: 'Sous-titre de l email', type: 'text', required : true },
      ],
    },
  ],
}
