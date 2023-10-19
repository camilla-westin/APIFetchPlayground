import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: 'API Fetch Playground',
  description: 'Playing around with APIs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
      <Header />
        {children}
      </body>
    </html>
  )
}
