import React from 'react'
import Hero from '@/components/sections/hero'
import BannerSection from '@/components/sections/banner-section'
import PreFooter from '@/components/sections/pre-footer'
function page() {
  return (
    <div  className='bg-black'>
      <Hero />
      <BannerSection />
      <PreFooter/>
      
    </div>
  )
}

export default page
