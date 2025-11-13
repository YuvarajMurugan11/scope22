import React from 'react'

import About_Us_Page1 from '../About_Us Page1/About_Us_Page1'
import About_Us_Page2 from '../About_Us Page2/About_Us_Page2'
import About_Us_Page3 from '../About_Us Page3/About_Us_Page3'
import About_Us_Page4 from '../About_Us Page4/About_Us_Page4'
import About_Us_Page5 from '../About_Us Page5/About_Us_Page5'
import About_Us_Page6 from '../About_Us Page6/About_Us_Page6'
import About_Us_Page7 from '../About_Us Page7/About_Us_Page7'
import About_Us_Page8 from '../About_Us Page8/About_Us_Page8'
import About_Us_Page9 from '../About_Us Page9/About_Us_Page9'

const About_Us_Page = () => {
  return (
    <>
    <div className='About_Us' style={{ overflowX: 'hidden' }}>
      <About_Us_Page1/>
    <About_Us_Page2/>
    <About_Us_Page3/>
    <About_Us_Page4/>
    <About_Us_Page5/>
    <About_Us_Page6/>
    <About_Us_Page7/>
    <About_Us_Page8/>
    <About_Us_Page9/>
    </div>
    </>
  )
}

export default About_Us_Page