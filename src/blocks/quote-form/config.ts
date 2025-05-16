import { Block } from 'payload'

export const QuoteForm: Block = {
  slug: 'quoteForm',
  labels: {
    singular: 'Formulaire de devis',
    plural: 'Formulaires de devis',
  },
  fields: [
    { name: 'title', label: 'Titre', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea', required: true },

    {
      name: 'firstName',
      label: 'Champ Prénom',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'text', required: true },
      ],
    },
    {
      name: 'lastName',
      label: 'Champ Nom de famille',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'text', required: true },
      ],
    },
    {
      name: 'select',
      label: 'Sélection multiple',
      type: 'array',
      required: true,
      minRows: 2,
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'text', required: true },
        {
          name: 'selections',
          label: 'Options de sélection',
          type: 'array',
          required: true,
          minRows: 2,
          fields: [{ name: 'selection', label: 'Option', type: 'text', required: true }],
        },
      ],
    },
    {
      name: 'mail',
      label: 'Champ Email',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'text', required: true },
      ],
    },
    {
      name: 'descriptionInput',
      label: 'Champ Description',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'text', required: true },
      ],
    },
    {
      name: 'button',
      label: "Bouton d'envoi",
      type: 'group',
      fields: [{ name: 'label', label: 'Label', type: 'text', required: true }],
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
          required: true,
        },
        {
          name: 'termsLabel',
          label: 'Conditions d’utilisation',
          type: 'group',
          fields: [
            { name: 'texte', label: 'Texte', type: 'text', required: true },
            { name: 'url', label: 'URL', type: 'text' },
          ],
        },
        {
          name: 'andSeparator',
          label: "Texte séparateur (ex. : 'et')",
          type: 'text',
          required: true,
        },
        {
          name: 'privacyLabel',
          label: 'Politique de confidentialité',
          type: 'group',
          fields: [
            { name: 'texte', label: 'Texte', type: 'text', required: true },
            { name: 'url', label: 'URL', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'copyrightNotice',
      label: 'Mention de droit d’auteur',
      type: 'text',
      required: true,
    },
    {
      name: 'requiredIndication',
      label: 'texte indication de champs requis',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image décorative',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
