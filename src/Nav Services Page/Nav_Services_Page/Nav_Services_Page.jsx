import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Nav_1 from '../Nav-Page-1/Nav_1'
import Nav_2 from '../Nav-Page-2/Nav_2'
import Nav_3 from '../Nav-Page-3/Nav_3'
import Nav_4 from '../Nav-Page-4/Nav_4'
import Nav_5 from '../Nav-Page-5/Nav_5'
import Nav_6 from '../Nav-Page-6/Nav_6'


const Nav_Services_Page = () => {

     useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          once: true, // whether animation should happen only once - while scrolling down
        })
      }, [])
  return (
    <>
     
      <Nav_1/>
      <Nav_2/> 
      <Nav_3/>
      <Nav_4/>
      <Nav_5/>
      <Nav_6/>
    
    </>
  )
}

export default Nav_Services_Page