"use client"

import { Header } from '@/payload-types'
import { HeaderDesktop } from '@/Header/Header-desktop'
import { useEffect, useState } from 'react'
import { HeaderMobile } from '@/Header/Header-mobile'

export interface HeaderProps {
headerData: Header
}

export function HeaderComponent(props: HeaderProps){
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


  const width = useWindowWidth()
  if (width === null) return null
  return(<div className={'w-screen'}>{ width > 620 ?
    <HeaderDesktop {...props} /> :
    <HeaderMobile {...props} />
  }</div>)
}