// minimal layout, just import tailwind
import '../../styles/globals.css'
import { Suspense } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <Suspense fallback={<div>Loading...</div>}>
        <body>{children}</body>
      </Suspense>
    </html>
  )
}
