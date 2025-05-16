'use client'

import * as React from 'react'
import { cn } from '@/utilities/ui'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

import { HeaderProps } from '@/Header/index'
import { SvgFromUrl } from '@/Header/SvgFromUrl'
import StyledButton from '@/components/Styled-button/Styled-button'
import { Media } from '@/payload-types'

export function HeaderMobile(props: HeaderProps) {
  const [open, setOpen] = React.useState(false)
  const { nav, logo, button } = props.headerData

  function isMedia(value: number | Media | null | undefined): value is Media {
    return typeof value !== 'number'
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className={'flex flex-row justify-between px-12 py-3 items-center'}>
          <div className={'w-14 h-6 relative '}>
            {isMedia(logo) && logo.url && (
              <Image src={logo.url as string} alt={logo.alt} fill className={'object-cover'} />
            )}
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-full max-w-full  border-none">
        <div className="flex flex-col h-full bg-white rounded-lg">
          <div className="flex justify-between items-start p-4">
            <div className="flex-1 flex justify-start mt-24">
              {isMedia(logo) && logo.url && (
                <Image
                  src={logo.url as string}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="object-cover"
                />
              )}
            </div>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-4">
            {nav?.map((item, i) => (
              <div key={i} className="group">
                <a
                  href={item.navItemUrl as string}
                  className={cn(
                    'flex items-center gap-4 rounded-md py-3 text-sm font-medium transition-colors',
                    'hover:bg-[#8BAD5F] hover:text-white',
                  )}
                >
                  {isMedia(item?.navItemLogo) && (
                    <div className="flex h-6 w-6 items-center justify-center relative pl-4">
                      {item?.navItemLogo?.url?.endsWith('.svg') ? (
                        <SvgFromUrl
                          url={item.navItemLogo.url as string}
                          alt={item.navItemLogo.alt}
                          className="w-6 h-6 text-[#8BAD5F] group-hover:text-[#95FF00]"
                        />
                      ) : (
                        <Image
                          src={item.navItemLogo.url as string}
                          alt={item.navItemLogo.alt}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  )}
                  <span>{item.navItemName}</span>
                </a>
              </div>
            ))}
          </nav>

          <div className="mt-auto p-6 flex flex-col items-center justify-between space-y-4">
            <StyledButton button={button} className={'px-2'} divIconClassName={'hidden'} />
            <div className="flex flex-col items-center">
              {isMedia(logo) && logo.url && (
                <Image
                  src={logo.url as string}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  className="h-auto"
                />
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
