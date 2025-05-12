import {Block} from 'payload'

export const ContactSection: Block = {
  slug: 'contactSection',
  fields: [
    { name: 'title', label: 'titre', type: 'text' },
    {
      name: 'telephone',
      label: 'telephone',
      type: 'group',
      fields: [

        {name: "number", label: "numéro", type: 'text' },
        {name: "subheading", label: "sous-titre", type: 'text' },
      ],
    },
    {name: "mail", label: "email", type: 'group', fields:[

        {name: "email", label: "email", type: 'text' },
        {name: "subheading", label: "sous-titre", type: 'text' },
      ] },
  ],
}
