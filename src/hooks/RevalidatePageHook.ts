import type { CollectionAfterChangeHook } from 'payload'

export const revalidatePageHook: CollectionAfterChangeHook = async ({ doc }) => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-page-globals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug: doc.slug }),
    })
  } catch (err) {
    console.error('Failed to revalidate page:', err)
  }
}
