import React from 'react'
import { SubHeader } from '../components/SubHeader'
import { AwsDesc, AwsFeature, AwsServiceDesc, AwsTabData, GoogleAiDesc, GoogleFeature, GoogleTabData, whatGoogleDesc } from './data'
import CloudSpecial from '../components/Special'
import Header from '../components/Header'
import { KeyFeaturesSection } from '../components/KeyFeatures'
import Section from '@/components/Section'


const CloudApplication = () => {
  return (
    
    <Section data-id="cloud-application" id="cloud-application">
      <Header title={"Cloud Application Services"}/> 
      <SubHeader
      title='Google AI and Machine Learning APIs'
      subtitle='Unlock the Power of Intelligent, Data-Driven Innovation'
      description={GoogleAiDesc}
      group='Cloud Application Services'
      website='ssds'
      position='right'
      />
       <SubHeader
      title='What are Google AI and Macine Learning APIs?'
      description={whatGoogleDesc}   
      position='left'  />


        <CloudSpecial tabData={GoogleTabData} />
        
        <KeyFeaturesSection title="Key Google AI and Machine Learning APIs" features={GoogleFeature}/>
        
         <SubHeader
      title='AWS AI Services'
      subtitle='Empowering Businesses with Scalable, Intelligent Solutions'
      description={AwsDesc}
      group='Cloud Application Services'
      website='ssds'
      position='right'
      />
       <SubHeader
      title='What Are AWS AI Services?'
      description={AwsServiceDesc}   
      position='left'  />

      
        <CloudSpecial tabData={AwsTabData} />
        
        <KeyFeaturesSection title="Key AWS AI Services" features={AwsFeature}/>
        
    
    </Section>
  )
}

export default CloudApplication
