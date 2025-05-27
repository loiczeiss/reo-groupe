import { CollectionAfterChangeHook, GlobalAfterChangeHook } from 'payload'

type AfterChangeHookArgs =
  | ({ type: 'collection' } & Parameters<CollectionAfterChangeHook>[0])
  | ({ type: 'global' } & Parameters<GlobalAfterChangeHook>[0])
export const revalidatePageHook = async (args: AfterChangeHookArgs) => {
  const { doc } = args

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
