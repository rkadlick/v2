import './globals.css'
import type { Metadata } from 'next'
import { text } from '@/fonts'
import { ThemeProvider } from './ThemeProvider'

export const metadata: Metadata = {
  title: 'Ryan Kadlick - Portfolio',
  description: 'The developer portfoio of Ryan Kadlick',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={text.className}>
      <body>
      <ThemeProvider 
            storageKey='theme'
            enableSystem={true}
            defaultTheme='system'
            
      >{children}</ThemeProvider >
      </body>
    </html>
  )
}
