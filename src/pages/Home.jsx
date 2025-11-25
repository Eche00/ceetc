import React from 'react'
import Hero from './homecomponents/Hero'
import About from './homecomponents/About'
import More from './homecomponents/More'
import Testimonial from './homecomponents/Testimonial'
import ListingCta from './propertiescomponent/ListingCta'

function Home() {
  return (
    <div>
      <div className=' w-full bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700] min-h-screen py-24'><Hero /></div>
      <div className=' w-full bg-[#E0DEF700] min-h-[80vh] '><About /></div>
      <div className=' w-full bg-[#E0DEF700] min-h-screen'><ListingCta /></div>
      <div className=' w-full bg-[#E0DEF700] min-h-screen'><More /></div>
      <div className=' w-full bg-[#E0DEF700] min-h-screen'><Testimonial /></div>
    </div>
  )
}

export default Home