'use client'

import { useEffect, useState } from 'react'

type SvgFromUrlProps = {
  url: string
  alt?: string
  className?: string
}

export function SvgFromUrl({ url, alt = '', className = '' }: SvgFromUrlProps) {
  const [svg, setSvg] = useState<string | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(setSvg)
      .catch(err => {
        console.error(`Error loading SVG at ${url}`, err)
        setSvg(null)
      })
  }, [url])

  if (!svg) return null

  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
