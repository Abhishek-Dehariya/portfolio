import type { Metadata } from 'next'
import './src/styles.css'

export const metadata: Metadata = {
  title: 'Abhishek Dehariya — Frontend Developer',
  description: 'Frontend Developer specialized in React, Next.js, and TypeScript. Building scalable, modern, and user-friendly web experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
