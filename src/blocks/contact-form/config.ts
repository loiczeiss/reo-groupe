import { Block } from 'payload'

export const contactForm: Block = {
  slug: 'contactForm',
  labels: {
    singular: 'Formulaire de contact',
    plural: 'Formulaire de contact',
  },
  fields: [
    { name: 'title', label: 'Titre', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'firstName',
      label: 'Prénom',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Placeholder', type: 'text' },
      ],
    },
    {
      name: 'lastName',
      label: 'Nom de famille',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Placeholder', type: 'text' },
      ],
    },
    {
      name: 'select',
      label: 'Sélection multiple',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Placeholder', type: 'text' },
        {
          name: 'selections',
          label: 'Sélections',
          type: 'array',
          minRows: 2,
          fields: [{ name: 'selection', label: 'Sélection', type: 'text' }],
        },
      ],
    },
    {
      name: 'mail',
      label: 'Email',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Placeholder', type: 'text' },
      ],
    },
    {
      name: 'descriptionInput',
      label: 'Description',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Placeholder', type: 'text' },
      ],
    },
    {
      name: 'button',
      label: "Bouton d'envoi",
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'url', label: 'URL', type: 'text' },
      ],
    },
    {name:"requiredIndication", label: "texte indication de champs requis", type:"text"},
    {
      name: 'consentText',
      label: 'Texte de consentement',
      type: 'group',
      fields: [
        {
          name: 'prefix',
          label: 'Texte d’introduction',
          type: 'text',
        },
        {
          name: 'termsLabel',
          label: 'Conditions d’utilisation',
          type: 'group',
          fields: [
            { name: 'texte', label: 'Texte des conditions', type: 'text' },
            { name: 'url', label: 'URL des conditions', type: 'text' },
          ],
        },
        {
          name: 'andSeparator',
          label: "Texte séparateur (ex. : 'et')",
          type: 'text',
        },
        {
          name: 'privacyLabel',
          label: 'Politique de confidentialité',
          type: 'group',
          fields: [
            { name: 'texte', label: 'Texte de la politique', type: 'text' },
            { name: 'url', label: 'URL de la politique', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'copyrightNotice',
      label: 'Avis de copyright',
      type: 'text',
    },
    { name: 'image', label: 'Image', type: 'upload', relationTo: 'media', required:true},
  ],
}
