import Section from '@/components/Section'
import React from 'react'
import Header from './components/Header'
import Special from '../components/Special'
import { ThreePoints } from '@/components/shared/ThreePoints'
import { anomlyPoints, customBenifits, droneBenifits, inventoryBenifits, inventoryPoints, mudBenifits, mudPoints, saferigBenifits, saferigPoints } from './data'
import Breaker from '../components/Breaker'
import SubHeader from './components/SubHeader'

const Overview = () => {
  return (
      
    <Section data-id="overview" id="overview" >

        <div className="lg:px-20 px-4 pt-8">

            <div className={` xl:w-2/5 md:w-2/4 w-[65%] lg:py-20 py-5`}>
            <h1 className="md:text-7xl text-4xl">
                AI Solutions
            </h1>
            <p className="md:mt-10 mt-5 text-sm w-[85%] leading-tight">
            Transform your operations with cutting-edge AI solutions designed to drive efficiency, enhance safety, and deliver unparalleled business value. From predictive maintenance to real-time hazard detection, our innovative platforms empower industries like oil and gas, healthcare, and manufacturing to achieve operational excellence. Discover how our AI-driven tools can revolutionize your business with measurable outcomes and seamless integration. Start your AI journey today and unlock a future of intelligent innovation.
            </p>
            </div>
        </div>

           <Header
                title = "  Our AI-Powered Solutions"
                description="Our suite of AI solutions leverages advanced machine learning, computer vision, and analytics to address critical industry challenges, ensuring innovation, efficiency, and competitive advantage.  
              "
              position='right'/>

        
            <SubHeader 
                title=" Smart Predictive Maintenance"
                description='Our flagship solution, PythiaAI, revolutionizes predictive maintenance for oil and gas rig equipment such as mud pumps, top drives, and diesel generators. By analyzing real-time Electronic Drilling Recorder (EDR) data and optional sensor inputs (pressure, vibration, torque, flow, temperature), PythiaAI delivers precise fault detection, accurate Remaining Useful Life (RUL) modeling, and actionable guidance.
            
                '
            />
          
           <Special points={anomlyPoints}/>


            <Header 
                title=" Monitoring and Detection"
                description='PythiaAI detects failure modes such as seal leaks, cavitation, piston wear (mud pumps), gearbox wear, bearing fatigue (top drives), and load imbalances (diesel generators). In a recent case, it predicted a mud pump seal failure 24 hours in advance, combining vibration and EDR data for early warnings.
                '
                position='right'
                
            />

            
            <Header 
                title="  Measurable Value"
               points = {[
                `Prevents costly failures ($5,000–$15,000/hour), yielding multimillion-dollar savings.`,
                `Achieves 8x to 35x ROI, with one client reporting a 35% reduction in downtime and 20% lower maintenance costs, saving $2 billion annually.`,
                `Reduces downtime by 30–80% with low false-alarm rates.`
               ]}
                
            />

              <Header 
                title="Seamless Deployment"
                description='Integrates with existing rig data networks (EDR, SCADA) and enterprise systems, ensuring reliability with offline buffering.'
                
            />

<Breaker/>
            <SubHeader 
                title=" AI-Enabled Generator and Mud Pump Optimization Platform"
                description=' Our Generator and Mud Pump Optimization Platform enhances oil and gas rig efficiency by intelligently managing equipment scheduling, fuel consumption, and maintenance planning.
              '
            />
            
            <Special points={mudPoints}/>
            <ThreePoints points={mudBenifits}/>
    
           
    
             <Special points={saferigPoints}/>
            <ThreePoints points={saferigBenifits}/>
    <Breaker/>
            <SubHeader
  title="SafeRig: AI-Powered Hazard Detection"
  description="SafeRig is an AI-driven safety platform designed for offshore oil rigs and high-risk industrial environments, using computer vision and edge AI to ensure worker safety and compliance."
/>

             <Special points={inventoryPoints}/>
            <ThreePoints points={inventoryBenifits}/>

            <Breaker/>
    
            <SubHeader
  title="Drone-Based Infrastructure Monitoring"
  description="Our drone-based solution uses AI analytics and high-resolution cameras to monitor critical infrastructure, reducing inspection costs and enhancing safety."
/>

            <ThreePoints points={droneBenifits}/>

            <Breaker/>
    
            <SubHeader
  title="Custom AI Solutions"
  description="Our drone-based solution uses AI analytics and high-resolution cameras to monitor critical infrastructure, reducing inspection costs and enhancing safety."
/>

            <ThreePoints title="Applications" points={customBenifits}/>
    
     </Section>
    
  )
}

export default Overview
