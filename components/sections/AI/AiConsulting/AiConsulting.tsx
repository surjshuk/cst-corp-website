import Section from '@/components/Section'
import React from 'react'
import Twin from '../AiDigitalTwin/components/Twin'
import { consultBenifits, consultPoints, consultTwin } from './data'
import Special from '../components/Special'
import { ThreePoints } from '@/components/shared/ThreePoints'
import Breaker from '../components/Breaker'
import { aicons } from '@/app/assets'

const AiConsulting = () => {
  return (
    <Section id='ai-consulting'>
      <Breaker/>
        <div className="lg:px-20 px-4 pt-12 md:grid grid-cols-2 items-end">
      
            <h1 className=" md:text-7xl text-4xl lg:mb-20 md:mb-24">
            AI Consulting Services
            </h1>
        
            <p className="md:mt-10 xl:w-2/6 lg:w-full md:w-2/3 w-1/2 md:ms-0 ms-auto mt-10 text-sm ">
                 
                Our AI Consulting Services empower Fortune 500 and S&P 500 enterprises to leverage AI for strategic advantage.
            </p>
        
            </div>
        <Twin title="Importance" points={consultTwin}/>
        <Special title="Monetization Strategies" points={consultPoints} image={aicons} />
        <ThreePoints title="Services" points={consultBenifits}/>
       
    </Section>
  )
}

export default AiConsulting
