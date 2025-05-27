import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { slug } = body

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
    }

    revalidateTag(`page_${slug}`)
    revalidateTag(`global_${slug}`)

    return NextResponse.json({ revalidated: true, slug })
  } catch (error) {
    console.error('Error revalidating tags:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
