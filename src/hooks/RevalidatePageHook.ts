import { CollectionAfterChangeHook, GlobalAfterChangeHook } from 'payload'

type AfterChangeHookArgs =
  | ({ type: 'collection' } & Parameters<CollectionAfterChangeHook>[0])
  | ({ type: 'global' } & Parameters<GlobalAfterChangeHook>[0])

export const revalidatePageHook = async (args: AfterChangeHookArgs) => {
  const { doc } = args

  if (!doc.slug) {
    console.warn('[revalidatePageHook] No slug found, skipping revalidation')
    return
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-page-globals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug: doc.slug }),
    })

    if (!res.ok) {
      console.error('[revalidatePageHook] Revalidation failed:', await res.text())
    } else {
      console.log('[revalidatePageHook] Revalidation succeeded for slug:', doc.slug)
    }
  } catch (err) {
    console.error('Failed to revalidate page:', err)
  }
}
