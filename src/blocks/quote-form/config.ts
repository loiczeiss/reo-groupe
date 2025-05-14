import { Block } from 'payload'

export const QuoteForm: Block = {
  slug: 'quoteForm',
  labels: {
    singular: 'Formulaire de devis',
    plural: 'Formulaires de devis',
  },
  fields: [
    { name: 'title', label: 'Titre', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },

    {
      name: 'firstName',
      label: 'Champ Prénom',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Placeholder', type: 'text' },
      ],
    },
    {
      name: 'lastName',
      label: 'Champ Nom de famille',
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
      minRows: 2,
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Placeholder', type: 'text' },
        {
          name: 'selections',
          label: 'Options de sélection',
          type: 'array',
          minRows: 2,
          fields: [{ name: 'selection', label: 'Option', type: 'text' }],
        },
      ],
    },
    {
      name: 'mail',
      label: 'Champ Email',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Placeholder', type: 'text' },
      ],
    },
    {
      name: 'descriptionInput',
      label: 'Champ Description',
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
            { name: 'texte', label: 'Texte', type: 'text' },
            { name: 'url', label: 'URL', type: 'text' },
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
            { name: 'texte', label: 'Texte', type: 'text' },
            { name: 'url', label: 'URL', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'copyrightNotice',
      label: 'Mention de droit d’auteur',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Image décorative',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
