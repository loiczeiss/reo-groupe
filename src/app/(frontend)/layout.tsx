import React from 'react'
import './styles.css'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { HeaderComponent } from '@/Header'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { FooterComponent } from '@/Footer'
import { Footer, Header } from '@/payload-types'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}
const inter = Inter({ subsets: ['latin'] })
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const headerData = await getCachedGlobal('header')() as Header
  const footerData = await getCachedGlobal('footer')() as Footer



  return (
    <html lang="en">
      <body>
        <HeaderComponent headerData={headerData} />
        <main className={inter.className}>{children}</main>
        <FooterComponent
         footerData={footerData}
        />
      </body>
    </html>
  )
}
