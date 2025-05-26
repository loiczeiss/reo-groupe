// app/api/revalidate-page/route.ts
import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(req: Request) {
  const body = await req.json()
  const { slug } = body

  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 })

  revalidateTag(`page_${slug}`)
  revalidateTag(`global_${slug}`)

  return NextResponse.json({ revalidated: true, slug })
}
