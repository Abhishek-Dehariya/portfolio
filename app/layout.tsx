import type { Metadata } from 'next'
import './src/styles.css'

const BASE_URL = 'https://abhishekdehariya.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Abhishek Dehariya — Frontend Developer | React & Next.js',
  description:
    'Abhishek Dehariya is a Frontend Developer with 3+ years of experience building scalable web apps using React.js, Next.js, TypeScript, and Tailwind CSS. Open to frontend roles and freelance projects.',
  keywords: [
    'Abhishek Dehariya',
    'abhishek dehariya',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Software Developer India',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Terragi',
    'Portfolio',
  ],
  authors: [{ name: 'Abhishek Dehariya', url: BASE_URL }],
  creator: 'Abhishek Dehariya',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Abhishek Dehariya — Frontend Developer',
    description:
      'Frontend Developer building scalable web apps with React, Next.js, and TypeScript.',
    siteName: 'Abhishek Dehariya Portfolio',
    images: [{ url: '/abhishek.jpeg', width: 800, height: 800, alt: 'Abhishek Dehariya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Dehariya — Frontend Developer',
    description: 'Frontend Developer building scalable web apps with React, Next.js, and TypeScript.',
    images: ['/abhishek.jpeg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abhishek Dehariya',
  url: BASE_URL,
  image: `${BASE_URL}/abhishek.jpeg`,
  jobTitle: 'Frontend Developer',
  worksFor: { '@type': 'Organization', name: 'Terragi Proptech Private Limited' },
  email: 'a.dehariya10@gmail.com',
  telephone: '+919806610010',
  sameAs: [
    'https://github.com/Abhishek-Dehariya',
    'https://linkedin.com/in/abhishek-dehariya-02404911a',
  ],
  knowsAbout: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AWS', 'Azure', 'Frontend Development'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
