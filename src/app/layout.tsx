import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Abdellah BOUAAMOUD - Software Engineer - Potfolio ',
  description: 'Personal portfolio of Abdellah BOUAAMOUD, a Software Engineering student with expertise in Full-Stack Development, Cloud Infrastructure, and Database Administration.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 