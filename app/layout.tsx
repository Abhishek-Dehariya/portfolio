import type { Metadata } from 'next'
import './src/styles.css'

const BASE_URL = 'https://abhishekdehariya.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Abhishek Dehariya | Solar O&M & Asset Management + Energy Software',
  description:
    'Solar O&M and asset management engineer with 8+ years managing 59 MW of ground-mount and rooftop solar assets across MP, Rajasthan and Gujarat. Also builds energy software with React.js, Next.js and TypeScript. Based in Gurugram.',
  keywords: [
    'Abhishek Dehariya',
    'abhishek dehariya',
    'Solar O&M Engineer',
    'Solar Asset Management',
    'Solar Asset Manager',
    'Solar Plant O&M',
    'Renewable Energy Engineer',
    'Plant Performance Monitoring',
    'SCADA Solar',
    'PR Curve Analysis',
    'Solar MIS Reporting',
    'Rooftop Solar',
    'Ground Mount Solar',
    'Energy Software',
    'ClimateTech',
    'SolarTech',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Gurugram',
    'India',
  ],
  authors: [{ name: 'Abhishek Dehariya', url: BASE_URL }],
  creator: 'Abhishek Dehariya',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Abhishek Dehariya | Solar O&M & Asset Management + Energy Software',
    description:
      '8+ years managing 59 MW of solar assets — plant O&M, asset management, SCADA performance analysis and client MIS. Also builds energy software with React.js & Next.js.',
    siteName: 'Abhishek Dehariya Portfolio',
    images: [{ url: '/abhishek.png', width: 800, height: 800, alt: 'Abhishek Dehariya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Dehariya | Solar O&M & Asset Management + Energy Software',
    description:
      '8+ years managing 59 MW of solar assets — plant O&M, asset management and performance analysis. Also builds energy software with React.js & Next.js.',
    images: ['/abhishek.png'],
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
  image: `${BASE_URL}/abhishek.png`,
  jobTitle: 'Solar O&M & Asset Management Engineer',
  worksFor: { '@type': 'Organization', name: 'Terragi Proptech Private Limited' },
  email: 'a.dehariya10@gmail.com',
  telephone: '+919806610010',
  sameAs: [
    'https://github.com/Abhishek-Dehariya',
    'https://linkedin.com/in/abhishek-dehariya-02404911a',
  ],
  knowsAbout: ['Solar O&M', 'Solar Asset Management', 'Plant Performance Monitoring', 'Performance Ratio (PR) Analysis', 'SCADA Systems', 'Inverter Diagnostics', 'Rooftop Solar', 'Ground-Mount Solar', 'Client MIS Reporting', 'Renewable Energy', 'Energy Software', 'React.js', 'Next.js', 'TypeScript', 'Full-Stack Development', 'ClimateTech'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var saved = localStorage.getItem('theme');
                var isLight = saved === 'light' || (!saved && window.matchMedia('(prefers-color-scheme: light)').matches);
                if (isLight) {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            })()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
