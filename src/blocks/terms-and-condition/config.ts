import {Block} from 'payload'

export const TermsBlock: Block = {
  slug:"terms",
  labels:{
    singular: "Termes et conditions.",
    plural:"Termes et conditions."
  },
  fields:[
    {
      name: 'sections',
      label: 'Sections',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'heading',
          label: 'Titre de la section',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          label: 'Contenu (texte ou HTML)',
          type: 'richText',
          required: true,
        },
      ],
    },
  ]
}