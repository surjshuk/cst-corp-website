import Section from '@/components/Section'
import React from 'react'
import { MainCarousel } from './components/MainCarousel'
import { carouseltabData } from './data'

const WhatWeDo = () => {
  return (
   <Section id='what-we-serve' data-id="what-we-serve">
        <div className="border-t border-black pt-10 md:mx-12 mx-5 md:mt-20 mt-16">
            <h2 className="2xl:text-6xl lg:text-4xl 2xl:w-2/3 md:text-3xl text-xl md:w-[80%] w-[95%]">
              At CST, we’re building a future of shared success by solving your tech needs and helping you reach your goals.
            </h2>
    
            <div className="flex md:flex-row flex-col md:justify-end md:items-start items-end md:gap-16 gap-8 2xl:my-24 lg:my-16 my-12 2xl:me-32 lg:me-12">
              <p className="text-base 2xl:w-2/12 md:w-[32%]  w-[80%]">At CST Corp, we foster a future of collaborative achievement by addressing complex technology challenges and
 empowering organizations to reach their goals. </p>
              {/* <p className="2xl:w-2/12 md:w-[30%]  w-[80%]">With the post-digital age showing no signs of slowing down, the need for scalability and rapid business transformation has never been more crucial.</p> */}
            </div>
        </div>
  
               
        <div className="md:mx-14 mx-10 py-4 md:mt-20 mt-16 border-b-2 border-b-black">
            {/* <p className="text-blue-500 text-sm">Who we serve?</p> */}
          </div>
  
           <MainCarousel tabData={carouseltabData}/>
  
        </Section>
  )
}

export default WhatWeDo
