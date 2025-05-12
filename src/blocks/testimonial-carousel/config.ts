import { Block } from 'payload'


export const TestimonialCarousel: Block = {
  slug: "testimonialCarousel",
  fields: [
    {name: "testimonials", label: "Témoignages", type: 'array', minRows: 2, fields: [
        {name:"name", label:"Nom", type:'text'},
        {name: "rating", label: "Note", type:'number', min:0, max:5},
        {name: "review", label: "Avis", type:'text'},
        {name: "image", label: "image", type: "upload", relationTo: "media"}
      ]}
  ]

}