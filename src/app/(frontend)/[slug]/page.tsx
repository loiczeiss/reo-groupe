import { headers as getHeaders } from 'next/headers'
import { getPayload, RequiredDataFromCollectionSlug } from 'payload'
import React, { cache } from 'react'
import { Metadata } from 'next'

import config from '@payload-config'
import '../styles.css'
import { RenderBlocks } from '@/utilities/renderBlocks'


// 👇 Generate static params for dynamic routes
// export async function generateStaticParams() {
//   const payload = await getPayload({ config })
//
//   const pages = await payload.find({
//     collection: 'pages',
//     draft: false,
//     limit: 1000,
//     overrideAccess: false,
//     pagination: false,
//     select: { slug: true },
//   })
//
//   return pages.docs
//     .filter((doc) => doc.slug !== 'home')
//     .map(({ slug }) => ({ slug }))
// }
//
// // 👇 Page component
type Props = {
  params: {
    slug?: string
  }
}

export default async function HomePage({ params }: Props) {
  const slug = params?.slug || 'home'

  const headersList = getHeaders() // still async, but just reads headers; no need for `await` in newer Next.js

  const page = await queryPageBySlug(slug)

  if (!page) return <div>Page not found</div>

  return (
    <div >
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}

// 👇 Metadata generation
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = params?.slug || 'home'
//   const page = await queryPageBySlug(slug)
//
//   return {
//     title: page?.name || 'Untitled Page',
//     description: `Page for ${slug}`,
//   }
// }

// 👇 Cached query for page by slug
const queryPageBySlug = cache(async (slug: string): Promise<RequiredDataFromCollectionSlug<'pages'> | null> => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
