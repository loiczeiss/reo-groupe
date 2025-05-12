import { Block } from 'payload'

export const QuoteForm: Block = {
  slug: 'quoteForm',
  fields: [
    { name: 'title', label: 'Titre', type: 'text' },
    { name: 'description', label: 'description', type: 'textarea' },
    {
      name: 'firstName',
      label: 'input Prénom',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'lastName',
      label: 'input Nom de famille',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'select',
      label: 'selection multiple',
      type: 'array',
      minRows: 2,

      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
        {
          name: 'selections',
          label: 'selections',
          type: 'array',
          minRows: 2,
          fields: [{ name: 'selection', label: 'selection', type: 'text' }],
        },
      ],
    },
    {
      name: 'mail',
      label: 'input mail',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'descriptionInput',
      label: 'input description',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'button',
      label: "bouton d'envoi",
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'url', label: 'url', type: 'text' },
      ],
    },
    {
      name: 'consentText',
      label: 'texte consentement',
      type: 'group',
      fields: [
        {
          name: 'prefix',
          label: 'Texte d’introduction',
          type: 'text',
        },
        {
          name: 'termsLabel',
          label: 'Texte pour les conditions d’utilisation',
          type: 'group',
          fields: [
            { name: 'texte', label: 'Texte pour les conditions', type: 'text' },
            { name: 'url', label: 'URL pour les conditions', type: 'text' },
          ],
        },
        {
          name: 'andSeparator',
          label: "Texte séparateur (ex. : 'et')",
          type: 'text',
        },
        {
          name: 'privacyLabel',
          label: 'Texte pour la politique de confidentialité',
          type: 'group',
          fields: [
            { name: 'texte', label: 'Texte pour la politique de confidentialité', type: 'text' },
            { name: 'url', label: 'URL pour la politique de confidentialité', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'copyrightNotice',
      label: 'copyrightNotice',
      type: 'text',
    },
    {name: 'image', label: 'image', type: 'upload', relationTo: 'media' },
  ],
}
