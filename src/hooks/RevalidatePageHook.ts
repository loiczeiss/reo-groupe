import type { AfterChangeHook } from 'payload/dist/collections/config'

export const revalidatePageHook: AfterChangeHook = async ({ doc }) => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-page`, {
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
