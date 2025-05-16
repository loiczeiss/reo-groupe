import { Block } from 'payload'

export const contactForm: Block = {
  slug: 'contactForm',
  labels: {
    singular: 'Formulaire de contact',
    plural: 'Formulaire de contact',
  },
  fields: [
    { name: 'title', label: 'Titre', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea', required: true },
    {
      name: 'firstName',
      label: 'Prénom',
      type: 'group',

      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'text', required: true },
      ],
    },
    {
      name: 'lastName',
      label: 'Nom de famille',
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
      minRows: 1,
      required: true,
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'text', required: true },
        {
          name: 'selections',
          label: 'Sélections',
          type: 'array',
          minRows: 2,
          required: true,
          fields: [{ name: 'selection', label: 'Sélection', type: 'text', required: true }],
        },
      ],
    },
    {
      name: 'mail',
      label: 'Email',
      type: 'group',

      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'text', required: true },
      ],
    },
    {
      name: 'descriptionInput',
      label: 'Description',
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
      name: 'requiredIndication',
      label: 'texte indication de champs requis',
      type: 'text',
      required: true,
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
            { name: 'texte', label: 'Texte des conditions', type: 'text', required: true },
            { name: 'url', label: 'URL des conditions', type: 'text' },
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
            { name: 'texte', label: 'Texte de la politique', type: 'text', required: true },
            { name: 'url', label: 'URL de la politique', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'copyrightNotice',
      label: 'Avis de copyright',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
