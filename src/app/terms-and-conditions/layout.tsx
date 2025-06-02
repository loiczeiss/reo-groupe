import React from 'react'

import '@/styles/globals.css'
import { Inter, Poppins } from 'next/font/google'

export const metadata = {
  description: 'Reo Groupe - Votre partenaire en solutions professionnelles',
  title: 'Reo Groupe',
}

// Load fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // <-- Add weights here
  variable: '--font-poppins',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
