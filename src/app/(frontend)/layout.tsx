import React from 'react'
import './styles.css'
import '@/styles/globals.css'
import {Inter} from 'next/font/google'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}
const inter = Inter({ subsets: ['latin'] })
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">

      <body>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  )
}
