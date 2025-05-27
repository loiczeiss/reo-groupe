import React from 'react'
import './styles.css'
import '@/styles/globals.css'
import { Inter, Poppins } from 'next/font/google'
import { HeaderComponent } from '@/Header'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { FooterComponent } from '@/Footer'
import { Footer, Header } from '@/payload-types'
import { Toaster } from 'sonner'
import { RevalidateTest } from '@/components/test/textRevalidation'

//
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

// Load fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // <-- Add weights here
  variable: '--font-poppins'
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const headerData = (await getCachedGlobal('header')()) as Header
  const footerData = (await getCachedGlobal('footer')()) as Footer

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
    <body className={`${inter.className}`}>
    <HeaderComponent headerData={headerData} />
    <main>{children}</main>
    <RevalidateTest/>
    <Toaster richColors position="top-right"/>
    <FooterComponent footerData={footerData} />
    </body>
    </html>
  )
}
