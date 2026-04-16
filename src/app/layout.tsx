import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Global Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  )
}
