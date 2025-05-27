import { GlobalConfig } from 'payload'
import { revalidateGlobalHook } from '@/hooks/RevalidateGlobalHook'

export const Footer: GlobalConfig = {
  slug: 'footer',
  hooks: {
    afterChange: [
      (args) => {
        console.log('[Global.afterChange] Hook fired with args:', {
         args
        })

        return revalidateGlobalHook({...args})
      },
    ],
  },
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    {
      name: 'mailInput',
      label: 'Input mail',
      type: 'group',
      fields: [
        { name: 'inputPlaceholder', label: 'Input placeholder', type: 'text' },
        { name: 'buttonLabel', label: 'Button Label', type: 'text' },
      ],
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'image', label: 'image', type: 'upload', relationTo: 'media' }],
    },
    { name: 'bgImage', label: 'background image', type: 'upload', relationTo: 'media' },
    { name: 'subheading', label: 'Subheading', type: 'text' },
    {
      name: 'button',
      label: 'Groupe de boutons',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'url', label: 'URL', type: 'text' },
      ],
    },
    {
      name: 'socials',
      label: 'Réseaux sociaux',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'logo', label: 'logo', type: 'upload', relationTo: 'media' },
        { name: 'url', label: 'URL', type: 'text' },
      ],
    },
    { name: 'copyrightText', label: 'Texte Copyright', type: 'text' },
    {
      name: 'confidentiality',
      label: 'Confidentiality',
      type: 'group',
      fields: [
        { name: 'confidentialityText', label: 'Texte Confidentialité', type: 'text' },
        { name: 'confidentialityURL', label: 'URL confidentialité', type: 'text' },
      ],
    },
    {
      name: 'legalNotice',
      label: 'Legal Notice',
      type: 'group',
      fields: [
        { name: 'legalNoticeText', label: 'Texte Mentions légales', type: 'text' },
        { name: 'legalNoticeURL', label: 'URL mentions légales', type: 'text' },
      ],
    },
    {
      name: 'navArray',
      label: 'Nav array',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'navText', label: ' Texte Nav', type: 'text' },
        { name: 'navUrl', label: 'URL Nav', type: 'text' },
      ],
    },
  ],
}
