"use client";
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TargetCursor from '@/components/ui/TargetCursor'
import FeaturedProject from '@/components/FeaturedProject'
import Stats from '@/components/Stats'
import PortfolioGrid from '@/components/PortfolioGrid'
import CTA from '@/components/CTA'

const Portfolio = () => {

  const statsData = [
    { label: "Projects Completed", value: 150, suffix: "+" },
    { label: "Happy Clients", value: 80, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
  ];

  return (
    <div className='w-full bg-[#F6F6F6]'>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
      <Navbar />
      <main>
        {/* Reuseable Header Here */}
        <FeaturedProject />
        <Stats data={statsData} />
        <PortfolioGrid />
        <CTA />
      </main>
      <Footer is_margin={false} />
    </div>
  )
}

export default Portfolio