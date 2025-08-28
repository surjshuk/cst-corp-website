import Section from '@/components/Section'
import React from 'react'
import { governanceBenifits, governanceData } from './data'
import { ThreePoints } from '@/components/shared/ThreePoints'
import Breaker from '../components/Breaker'

const AiGovernance = () => {
  return (
      <Section data-id="ai-governance" id="ai-governance" >
            <Breaker/>
             <div className="lg:px-20 px-4 pt-12 grid-cols-2 items-end">
    

            <h1 className=" md:text-7xl text-4xl ">
             AI Governance
            </h1>
    <div className='grid md:grid-cols-2'>
    <p className="text-xl mt-3 md:w-[95%] w-[70%]">Ensuring Ethical, Secure, and Responsible Deployment</p>
        
            <p className="  md:ms-0 ms-auto md:mt-8 mt-4 w-[60%] text-sm ">
                   We are committed to responsible AI deployment through a comprehensive governance framework that ensures ethical, secure, and compliant use of AI technologies. Our approach mitigates risks, fosters trust, and aligns with global standards, enabling organizations to deploy AI confidently.
 Our AI Consulting Services empower Fortune 500 and S&P 500 enterprises to leverage AI for strategic advantage.
            </p>
    </div>
        
            </div>

          <div className="lg:p-20 px-4 py-8">
    
              
            <p className="mb-5 font-medium text-sm">
              Key Governance Aspects
            </p>
            <div className="grid grid-cols-2 md:gap-x-0 gap-y-20 gap-x-10" >
              {governanceData.map((e,i)=>(
                <div key={i} className='xl:w-[60%] md:w-[80%] w-full' >
                <h3 className=" text-2xl text-blue-500 md:w-2/5">{e.title}</h3>
                <p className="mt-4 text-sm">
                  {e.description}
                </p>
                </div>
              ))}
            </div>
            </div>
        <ThreePoints  points={governanceBenifits}/>
    
        <p className="xl:w-2/6 lg:w-[45%] md:w-[33%] w-[70%] lg:p-20 p-4 text-sm">Our governance approach ensures AI deployments are not only effective but also ethical and secure, aligning with both regulatory standards and organizational goals.
        </p>
        </Section>
  )
}

export default AiGovernance
