import React from 'react'
import Common from './component/Common'
import bannerImage from '../src/assets/images/banner/image.png'



function Home() {
  return (
   <>
   <Common
    name="Lead your brand by  understanding your shopper like never before"
      imgscr={bannerImage}
      visit ="/services"
      btname="Get Started Now"
   />
      
      
   </>
  )
}

export default Home