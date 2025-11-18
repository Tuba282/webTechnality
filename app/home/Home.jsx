import Brand from '@/components/Brand';
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { HeroMarquee } from '@/components/ScrollMarquee';
import React from 'react'
import PricingCard from '@/components/PricingCard';
import FeatureGrid from '@/components/FeatureGrid';
import { Faq } from '@/components/Faq';
import Services from '@/screens/Services/Services';
import OurProcess from '@/components/OurProcess';
import FounderSection from '@/components/FounderSection';
import TargetCursor from '@/components/ui/TargetCursor';

const Home = () => {

  return (
    <div className='bg-[#D3D3D3]'>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <Hero />
      {/* <ContainerScroll>
        <video
            src=""
            autoPlay
            muted
            loop
              className=" w-full h-full object-cover"
          />

      </ContainerScroll> */}

      <HeroMarquee />
      <Brand />
      <OurProcess/>
      <Services/>
      <FounderSection/>
      <PricingCard />
      <FeatureGrid />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home