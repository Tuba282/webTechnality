import React from 'react'
import AboutHero from './AboutHero'
import Navbar from '@/components/Navbar'
import AboutAbout from './AboutAbout'
import FounderSection from '@/components/FounderSection'
import Footer from '@/components/Footer'
import AboutStats from './AboutStats'

const About = () => {
  return (
    <div>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(34, 193, 195, 0) 0%, rgba(138, 136, 132, 1) 100%)`,
          // backgroundImage: `radial-gradient(circle at center, #575857, transparent)`,
          backgroundSize: `100% 100%`
        }}
      />
      {/* <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 300px at 50% 300px, #8A8884, transparent)`,
          // backgroundImage: `radial-gradient(circle at center, #575857, transparent)`,
          backgroundSize: `100% 100%`
        }}
      /> */}
      <Navbar />
      <AboutHero />
      <AboutAbout/>
      <FounderSection/>
      <AboutStats/>
      <Footer/>
      
    </div>
  )
}

export default About