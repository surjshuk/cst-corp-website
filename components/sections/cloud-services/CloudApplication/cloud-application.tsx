import React from 'react'
import { Subhero } from '../components/subhero'
import { AwsDesc, AwsFeature, AwsServiceDesc, AwsTabData, GoogleAiDesc, GoogleFeature, GoogleTabData, whatGoogleDesc } from './data'
import CloudSpecial from '../components/Special'
import { cyberSecBG3 } from '@/app/assets'
import Header from '../components/Header'
import { KeyFeaturesSection } from '../components/KeyFeatures'


const CloudApplication = () => {
  return (
    
    <div data-id="cloud-application" id="cloud-application">
      <Header title={"Cloud Application Services"}/> 
      <Subhero
      subtitle='Google AI and Machine Learning APIs'
      intro='Unlock the Power of Intelligent, Data-Driven Innovation'
      description={GoogleAiDesc}
      />
       <Subhero
      subtitle='What are Google AI and Macine Learning APIs?'
      description={whatGoogleDesc}   
      position='left'  />


        <CloudSpecial tabData={GoogleTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Google AI and Machine Learning APIs" features={GoogleFeature}/>
        
         <Subhero
      subtitle='AWS AI Services'
      intro='Empowering Businesses with Scalable, Intelligent Solutions'
      description={AwsDesc}
      />
       <Subhero
      subtitle='What Are AWS AI Services?'
      description={AwsServiceDesc}   
      position='left'  />

      
        <CloudSpecial tabData={AwsTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key AWS AI Services" features={AwsFeature}/>
        
    
    </div>
  )
}

export default CloudApplication
