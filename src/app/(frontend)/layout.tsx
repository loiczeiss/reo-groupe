import React from 'react'
import './styles.css'
import '@/styles/globals.css'
import {Inter} from 'next/font/google'
import { Header } from '@/Header'
import { getCachedGlobal } from '@/utilities/getGlobals'
import main from '../../../.storybook/main'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}
const inter = Inter({ subsets: ['latin'] })
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const headerData= await getCachedGlobal('header', 1)()
const { logo, nav, button} = headerData
  return (
    <html lang="en">

      <body>
      <Header logo={logo} nav={nav} button={button}/>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  )
}
