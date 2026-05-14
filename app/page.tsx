'use client'

import { Toaster } from 'sonner'
import { Navbar } from '@/components/portfolio/Navbar'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Skills } from '@/components/portfolio/Skills'
import { Experience } from '@/components/portfolio/Experience'
import { Projects } from '@/components/portfolio/Projects'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" richColors />
    </div>
  )
}
