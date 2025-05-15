'use client'

import { Media } from '@/payload-types'

interface NavProps {
  nav: {
    navItemName?: string | null | undefined;
    navItemUrl?: string | null | undefined;
    navItemLogo?: number | Media | null | undefined;
    id?: string | null | undefined;
  }[] | null | undefined
}

export function Nav(props: NavProps) {
  const { nav } = props

  return (
    <div className={'flex flex-row space-x-2 lg:space-x-4'}>
      {nav?.map((item, index) => (
        <a key={index} href={item.navItemUrl as string} className={'text-[#668E2E] text-[11px] lg:text-[13px] hover:underline'}>
          {item.navItemName}
        </a>
      ))}
    </div>
  )
}
