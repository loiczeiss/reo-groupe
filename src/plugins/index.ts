import { seoPlugin } from '@payloadcms/plugin-seo'
import type { Plugin } from 'payload'

import type { Page} from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'
import type { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'

const generateTitle: GenerateTitle< Page> = ({ doc }) => {
  return doc?.name ? `${doc.name} | Payload Website Template` : 'Payload Website Template'
}

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL()
  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
]
