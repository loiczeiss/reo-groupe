import { Block } from 'payload'

export const MidHero: Block = {
  slug: "midHero",
  labels:{singular:"Bloc héros moyen", plural:'Bloc héros moyen'},
  fields: [
    { name: "bgImage", label: 'Image de fond', type: "upload", relationTo: "media" },
    { name: "heading", label: 'Titre', type: 'text' },
    { name: "description", label: 'Description', type: 'textarea' },
  ]
}
