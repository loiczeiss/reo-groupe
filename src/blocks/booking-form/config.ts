import { Block } from 'payload'

export const BookingForm: Block = {
  slug: 'bookingForm',
  labels: {
    singular: 'Formulaire de réservation',
    plural: 'Formulaires de réservation',
  },
  fields: [
    {
      name: 'nameInput',
      label: 'Champ prénom/nom',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Texte indicatif', type: 'text', required: true },
      ],
    },
    {
      name: 'mailInput',
      label: 'Champ e-mail',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Texte indicatif', type: 'text', required: true },
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
          label: 'Sélections',
          type: 'array',
          minRows: 2,
          required: true,
          fields: [
            { name: 'selection', label: 'Sélection', type: 'text', required: true }
          ],
        },
      ],
    },
    {
      name: 'dateInput',
      label: 'Date',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true }
      ],
    },
    {
      name: 'otherInput',
      label: 'Champ autre',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Texte indicatif', type: 'text', required: true },
      ],
    },
    {
      name: 'detailsInput',
      label: 'Détails',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'placeholder', label: 'Texte indicatif', type: 'text', required: true },
      ],
    },
    {
      name: 'checkboxGroup',
      label: 'Groupe checkbox',
      type: 'group',
      fields: [
        { name: 'checkboxText', label: 'texte de la checkbox', type: 'text', required: true },
        { name: 'conditions', label: 'conditions générales', type: 'text', required: true },
        { name: 'conditionsURL', label: 'conditionsURL', type: 'text', required: true },
      ],
    },
    {
      name: "requiredIndication",
      label: "texte indication de champs requis",
      type: "text",
      required: true,
    },
    {
      name: 'buttonGroup',
      label: 'Bouton de soumission',
      type: 'group',
      fields: [
        { name: 'label', label: 'Texte du bouton', type: 'text', required: true },
      ],
    },
  ],
}
