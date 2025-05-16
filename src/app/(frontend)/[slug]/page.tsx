import { getPayload, RequiredDataFromCollectionSlug } from 'payload'
import React, { cache } from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import config from '@payload-config'
import '../styles.css'
import { RenderBlocks } from '@/utilities/renderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { notFound, redirect } from 'next/navigation'


export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  return pages.docs.filter((doc) => doc.slug !== 'home').map(({ slug }) => ({ slug }))
}

// Updated Props type to reflect that params is now a Promise
type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function HomePage({ params }: Props) {
  // Await the params
  const { slug } = await params

  if (slug === 'home') {
    redirect('/') // Redirect to root URL
  }
  const page = await queryPageBySlug(slug)

  if (process.env.IN_CONSTRUCTION_BOOLEAN === 'true') {
   redirect('/construction')
  }
  if (!page) return notFound()

  return (
    <div>
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}

// Updated Args type to reflect that params is now a Promise
type Args = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(
  { params }: Args,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  // Await the params
  const { slug } = await params
  const finalSlug = slug || 'home'

  const page = await queryPageBySlug(finalSlug)
  return generateMeta({ doc: page })
}

// Cached query for page by slug
const queryPageBySlug = cache(
  async (slug: string): Promise<RequiredDataFromCollectionSlug<'pages'> | null> => {
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
  },
)
