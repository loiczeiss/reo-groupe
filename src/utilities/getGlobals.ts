// getGlobals.ts
import type { Config } from 'src/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 2) {
  const payload = await getPayload({ config: configPromise })
  return await payload.findGlobal({ slug, depth })
}

export const getCachedGlobal = (slug: Global, depth = 2) =>
  unstable_cache(
    async () => getGlobal(slug, depth),
    [slug, depth.toString()], // Clé de cache unique pour chaque combinaison (slug + depth)
    { tags: [`global_${slug}`] }
  )
