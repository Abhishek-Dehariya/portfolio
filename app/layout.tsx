import type { Metadata } from 'next'
import './src/styles.css'

const BASE_URL = 'https://abhishekdehariya.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Abhishek Dehariya — Full-Stack Developer | Solar & Energy Domain Expert',
  description:
    'Full-Stack Developer with 8+ years in solar & renewable energy (59 MW portfolio) and 1.5 years building production web apps with React.js & Next.js. Based in Gurugram, open to ClimateTech & SolarTech roles.',
  keywords: [
    'Abhishek Dehariya',
    'abhishek dehariya',
    'Full Stack Developer',
    'Solar Energy Developer',
    'React Developer',
    'Next.js Developer',
    'ClimateTech Developer',
    'Renewable Energy Tech',
    'SolarTech',
    'Energy Domain Expert',
    'Solar O&M Engineer',
    'Asset Management',
    'SCADA Dashboard',
    'Gurugram Developer',
    'India',
  ],
  authors: [{ name: 'Abhishek Dehariya', url: BASE_URL }],
  creator: 'Abhishek Dehariya',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Abhishek Dehariya — Full-Stack Developer | Solar & Energy Expert',
    description:
      '8+ yrs solar operations (59 MW) + 1.5 yrs production dev. Building software that solves real renewable energy problems.',
    siteName: 'Abhishek Dehariya Portfolio',
    images: [{ url: '/abhishek.jpeg', width: 800, height: 800, alt: 'Abhishek Dehariya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Dehariya — Full-Stack Developer | Solar & Energy Expert',
    description: '8+ yrs solar operations (59 MW) + 1.5 yrs production dev. Building software that solves real renewable energy problems.',
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
  jobTitle: 'Full-Stack Developer',
  worksFor: { '@type': 'Organization', name: 'Terragi Proptech Private Limited' },
  email: 'a.dehariya10@gmail.com',
  telephone: '+919806610010',
  sameAs: [
    'https://github.com/Abhishek-Dehariya',
    'https://linkedin.com/in/abhishek-dehariya-02404911a',
  ],
  knowsAbout: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AWS', 'Azure', 'Full-Stack Development', 'Solar Energy', 'SCADA Systems', 'Asset Management', 'Renewable Energy', 'ClimateTech'],
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
