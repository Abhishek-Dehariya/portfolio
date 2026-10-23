'use client'

import { Toaster } from 'sonner'
import { Navbar } from '@/components/portfolio/Navbar'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { SolarExperience } from '@/components/portfolio/SolarExperience'
import { SolarCapabilities } from '@/components/portfolio/SolarCapabilities'
import { Projects } from '@/components/portfolio/Projects'
import { WhyEnergySoftware } from '@/components/portfolio/WhyEnergySoftware'
import { SoftwareEngineering } from '@/components/portfolio/SoftwareEngineering'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'
import { CustomCursor } from '@/components/portfolio/CustomCursor'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-rose-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SolarExperience />
        <SolarCapabilities />
        <Projects />
        <WhyEnergySoftware />
        <SoftwareEngineering />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" richColors />
    </div>
  )
}
