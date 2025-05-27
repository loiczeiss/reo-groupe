import { GlobalConfig } from 'payload'
import { revalidateGlobalHook } from '@/hooks/RevalidateGlobalHook'

export const Header: GlobalConfig = {
  slug: 'header',
  hooks: {
    afterChange: [
      (args) => {
        console.log('[Global.afterChange] Hook fired with args:', {
          args,
        })

        return revalidateGlobalHook({ ...args })
      },
    ],
  },
  fields: [
    { name: 'logo', label: 'logo', type: 'upload', relationTo: 'media' },
    {
      name: 'nav',
      label: 'nav',
      type: 'array',
      fields: [
        { name: 'navItemName', label: 'navItemName', type: 'text' },
        { name: 'navItemUrl', label: 'navItemUrl', type: 'text' },
        { name: 'navItemLogo', label: 'navItemLogo', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'button',
      label: 'button',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'url', label: 'url', type: 'text' },
      ],
    },
  ],
}
