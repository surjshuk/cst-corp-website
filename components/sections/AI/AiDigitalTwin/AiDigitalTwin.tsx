import Section from '@/components/Section'
import React from 'react'
import Twin from './components/Twin'
import { bramerPoints, customBenifits, digitalTwin, twinPoints } from './data'
import { ThreePoints } from '@/components/shared/ThreePoints'
import Special from '../components/Special'
import Breaker from '../components/Breaker'
import { digitwin } from '@/app/assets'
import SubHeader from '../../cybersecurity/components/SubHeader'

const AiDigitalTwin = () => {
  
    return (
     <Section data-id="ai-digital-twin" id="ai-digital-twin">
<Breaker/>
        <div className="lg:px-20 px-4 pt-12 md:grid grid-cols-2 items-end">
      
            <h1 className=" md:text-7xl text-4xl lg:mb-20 md:mb-24">
            AI Digital Twin Technology
            </h1>
        
            <p className="md:mt-10 xl:w-2/6 lg:w-full md:w-2/3 w-1/2 md:ms-0 ms-auto mt-10 text-sm ">
                Digital Twin Technology creates virtual models of physical assets, enabling real-time monitoring and optimization across their lifecycle.
          
            </p>
        
            </div>
        <Twin title="Types of Digital Twins" points={digitalTwin}/>
       
        <ThreePoints points={customBenifits}/>
 
        <Special points={twinPoints} title="How It Works" image={digitwin}/>

        
<SubHeader 
    title="Bramer ai drone solution"
    description='This solution optimizes hospital and clinic supply chains by forecasting demand, tracking usage in real-time, and preventing shortages or waste. Using AI-driven insights, it balances critical stock levels for medicines, consumables, and devices, ensuring resources are always available when patients and doctors need them most.'
/>

           <Special points={bramerPoints}/>
 </Section>
  )

}

export default AiDigitalTwin
