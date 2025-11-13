import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import PowerBI_1 from '../PowerBI-Page-1/PowerBI_1'
import PowerBI_2 from '../PowerBI-Page-2/PowerBI_2'
import PowerBI_3 from '../PowerBI-Page-3/PowerBI_3'
import PowerBI_4 from '../PowerBI-Page-4/PowerBI_4'
import PowerBI_5 from '../PowerBI-Page-5/PowerBI_5'
import PowerBI_6 from '../PowerBI-Page-6/PowerBI_6'
import PowerBI_7 from '../PowerBI-Page-7/PowerBI_7'


const PowerBI_page = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          once: true, // whether animation should happen only once - while scrolling down
        })
      }, [])
    
  return (
   <>
    <PowerBI_1/>
      <PowerBI_2/>
      <PowerBI_7/>
      <PowerBI_3/>
      <div data-aos="fade-up"><PowerBI_4/></div>
      <PowerBI_5/>
      <div data-aos="fade-up"><PowerBI_6/></div>
   </>
  )
}

export default PowerBI_page