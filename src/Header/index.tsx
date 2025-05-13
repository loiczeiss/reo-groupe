"use client"

import { Media } from '@/payload-types'
import { HeaderDesktop } from '@/Header/Header-desktop'
import { useEffect, useState } from 'react'
import { HeaderMobile } from '@/Header/Header-mobile'

export interface HeaderProps {
  logo: Media
  nav:{
    id: string
    navItemName: string,
    navItemUrl: string,
    navItemLogo: Media
  }[],
  button: {
    label: string
  url: string
}
}

export function Header(props: HeaderProps){
  function useWindowWidth() {
    const [width, setWidth] = useState<number | null>(null)

    useEffect(() => {
      // Now we are in the browser
      const handleResize = () => setWidth(window.innerWidth)

      // Set initial width
      handleResize()

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
  }

  console.log("here", props.nav)
  const width = useWindowWidth()
  if (width === null) return null
  return(<div className={'w-screen'}>{ width > 620 ?
    <HeaderDesktop {...props} /> :
    <HeaderMobile {...props} />
  }</div>)
}