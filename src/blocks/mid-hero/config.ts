import { Block } from 'payload'

export const MidHero : Block ={
  slug:"midHero",
  fields:[
    {name: "bgImage", label: 'image background', type:"upload", relationTo:"media"},
    {name: "heading", label: 'heading', type: 'text'},
    {name: "description", label: 'description', type: 'textarea'},
  ]
}