import { Block } from 'payload'

export const IntroductionComponent: Block = {
  slug: 'introduction',
  labels: { singular: 'bloc introductif', plural: 'blocs introductifs' },
  fields:[
    {name: 'title', label: "titre", type: 'text'},
    {name: "bgImage", label:"image de background", type:"upload", relationTo:"media"},
    {name: "introArray", label: "textes introductifs", type: 'array', minRows:1, maxRows:5, fields
    :[
        {name: "introText", label: "texte introductif", type: 'textarea'}
      ]},
    {name: "buttonGroup", label: "bouton", type:"group", fields: [
        {name: "label", label: "label du bouton", type: 'text'},
        {name: "url", label: "url du bouton", type: 'text'},
      ]}
  ]
}
