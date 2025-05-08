import { Block } from 'payload'

export const CertificationSection: Block = {
  slug: 'certificationSection',
  fields: [
    {name: 'title', label: 'title', type: 'text'},
    {name: 'logo', label: 'logo', type: 'upload', relationTo: 'media'},
    {name: 'certificationArray', label: 'certifications array', type:'array', minRows:2, maxRows:6, fields:[
        {name: 'textContent', label: 'textContent', type: 'text'},
        {name: 'textSubContent', label: 'textSubContent', type: 'text'}
      ] }
  ],
}
