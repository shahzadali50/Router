import React from 'react'
import Common from './component/Common'
import bannerImage from '../src/assets/images/banner/image.png'

function About() {
  return (
    <>
    <Common
      name="Welcome to About Page"
      imgscr={bannerImage}
      visit ="contact"
      btname="Contact Now"
    />
     
    </>
  )
}

export default About