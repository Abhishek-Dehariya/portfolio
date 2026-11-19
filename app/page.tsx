'use client'

import { Toaster } from 'sonner'
import { Navbar } from '@/components/portfolio/Navbar'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { SolarExperience } from '@/components/portfolio/SolarExperience'
import { SolarCapabilities } from '@/components/portfolio/SolarCapabilities'
import { SoftwareEngineering } from '@/components/portfolio/SoftwareEngineering'
import { TechnicalSkills } from '@/components/portfolio/TechnicalSkills'
import { Projects } from '@/components/portfolio/Projects'
import { WhyEnergySoftware } from '@/components/portfolio/WhyEnergySoftware'
import { Contact } from '@/components/portfolio/Contact'
import { Endorsements } from '@/components/portfolio/Endorsements'
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
        <SoftwareEngineering />
        <TechnicalSkills />
        <Projects />
        <WhyEnergySoftware />
        <Endorsements />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" richColors />
    </div>
  )
}
