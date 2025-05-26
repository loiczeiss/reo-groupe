import { getPayload, RequiredDataFromCollectionSlug } from 'payload'
import { Metadata } from 'next'
import config from '@payload-config'
import { RenderBlocks } from '@/utilities/renderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { notFound, redirect } from 'next/navigation'
import { unstable_cache } from 'next/cache'
export const revalidate = 60 // revalidate page every 60 seconds

export default async function RootHomePage() {
  const page = await queryPageBySlug('home')
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

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryPageBySlug('home')
  return generateMeta({ doc: page })
}



const queryPageBySlug = unstable_cache(
  async (slug: string) => {
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
  ['page_by_slug_home'], // Cache key — unique per slug
  { tags: ['page_home'] } // Tag — can be revalidated
)
