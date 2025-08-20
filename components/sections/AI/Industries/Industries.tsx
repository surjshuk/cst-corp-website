import Section from '@/components/Section'
import React from 'react'
import { industries } from './data'
import Breaker from '../Breaker'

const Industries = () => {
  return (
      <Section data-id="industries-we-serve" id="industries-we-serve">
<Breaker/>
      <div className="lg:p-20 px-4 py-8">
          <h1 className="lg:w-1/3 md:w-[45%] text-black md:text-7xl text-4xl">
          Industries We Serve
          </h1>
          <div className="grid md:grid-cols-2 gap-y-10 lg:my-28 my-14">

      {industries.map((item, i) => (
        <div key={i} className="xl:w-[45%] lg:w-[65%] md:w-[55%] w-[65%]">
          <div className="flex gap-2 items-center">
            {item.icon}
            <h3 className="text-2xl">{item.title}</h3>
          </div>
          <p className="text-sm mt-6">{item.description}</p>
        </div>
      ))}
    </div>
        
      </div>

      <div className="lg:p-20 px-4 py-8">
        <div className="2xl:w-1/2 lg:w-[60%] md:w-[60%] w-[85%] ms-auto">
          <h1 className=" text-black md:text-7xl text-4xl  xl:w-[75%] md:w-[90%]">
            Why Choose Us?
          </h1>
          <div className=" md:my-16 my-8">
            <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Industry Expertise</h4>
              <p className="text-sm mt-2">Deep understanding of sector-specific challenges.</p>
            </div>
             <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Proven Solutions</h4>
              <p className="text-sm mt-2">Validated success in predictive maintenance and safety systems.</p>
            </div>
            <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Strategic Partnerships</h4>
              <p className="text-sm mt-2"> Collaboration with Bramer for advanced drone technology.</p>
            </div>
            <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Customized Approach</h4>
              <p className="text-sm mt-2"> Tailored solutions for unique business needs.</p>
            </div>
             <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Business Value Focus</h4>
              <p className="text-sm mt-2">  Delivers measurable ROI, efficiency, and safety gains.</p>
            </div>
          </div>
        </div>
      </div>

    </Section>
 
  )
}

export default Industries
