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
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Texte indicatif', type: 'text' },
      ],
    },
    {
      name: 'mailInput',
      label: 'Champ e-mail',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Texte indicatif', type: 'text' },
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
          label: 'Sélections',
          type: 'array',
          minRows: 2,
          fields: [{ name: 'selection', label: 'Sélection', type: 'text' }],
        },
      ],
    },
    {
      name: 'dateInput',
      label: 'Date',
      type: 'group',
      fields: [{ name: 'label', label: 'Label', type: 'text' }],
    },
    {
      name: 'otherInput',
      label: 'Champ autre',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Texte indicatif', type: 'text' },
      ],
    },
    {
      name: 'detailsInput',
      label: 'Détails',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'placeholder', label: 'Texte indicatif', type: 'text' },
      ],
    },
    {
      name: 'checkboxGroup',
      label: 'Groupe checkbox',
      type: 'group',
      fields: [
        { name: 'checkboxText', label: 'texte de la checkbox', type: 'text' },
        {
          name: 'conditions',
          label: 'conditions générales',
          type: 'text',
        },{name: "conditionsURL", label: 'conditionsURL', type: 'text' },
      ],
    },
    {name:"requiredIndication", label: "texte indication de champs requis", type:"text"},
    {
      name: 'buttonGroup',
      label: 'Bouton de soumission',
      type: 'group',
      fields: [
        { name: 'label', label: 'Texte du bouton', type: 'text' },

      ],
    },
  ],
}
