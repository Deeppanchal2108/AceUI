import React from 'react'
import Hero from '@/components/sections/hero'
import BannerSection from '@/components/sections/banner-section'
import PreFooter from '@/components/sections/pre-footer'
import ScrollSection from '@/components/sections/scroll-section'
import Footer from '@/components/sections/footer'
function page() {
  return (
    <div  className='bg-black'>
      <Hero />
      <BannerSection />
      <ScrollSection/>
      <PreFooter />
      <Footer/>
      
    </div>
  )
}

export default page
