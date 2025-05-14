import { headers as getHeaders } from 'next/headers'
import { getPayload, RequiredDataFromCollectionSlug } from 'payload'
import React, { cache } from 'react'
import { Metadata } from 'next'

import config from '@payload-config'
import '../styles.css'
import { RenderBlocks } from '@/utilities/renderBlocks'
import { generateMeta } from '@/utilities/generateMeta'



export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,


  })

  return pages.docs
    .filter((doc) => doc.slug !== 'home')
    .map(({ slug }) => ({ slug }))
}
//
// // 👇 Page component
type Props = {
  params: {
    slug?: string
  }
}

export default async function HomePage({ params }: Props) {
  const slug = params?.slug || 'home'

  const page = await queryPageBySlug(slug)

  if (!page) return <div>Page not found</div>

  return (
    <div >
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}
type Args = {
  params: Promise<{
    slug?: string
  }>
}
export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug(slug)
  return generateMeta({ doc: page })
}
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
