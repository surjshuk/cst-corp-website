import React from 'react'
import Header from '../components/Header'
import { Subhero } from '../components/subhero'
import { cloudPaloDesc, cloudPaloFeature, cloudPaloTabData, whyCloudPalo } from './data'
import CloudSpecial from '../components/Special'
import { cyberSecBG3 } from '@/app/assets'
import { KeyFeaturesSection } from '../key-features'

const CloudNetwork = () => {

  return (
    <div data-id="cloud-network" id="cloud-network">
        <Header title={"Cloud Network"}/> 
       <Subhero
      subtitle='Palo Alto Networks GlobalProtect Cloud Services'
      intro='Secure Access Anywhere, Anytime'
      description={cloudPaloDesc}
      />
       <Subhero
      subtitle='What is GlobalProtect Cloud Services?'
      description={whyCloudPalo}   
      position='left'  />

      
        <CloudSpecial tabData={cloudPaloTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of Palo Alto Networks GlobalProtect Cloud Services" features={cloudPaloFeature}/>
       


    </div>
  )

}

export default CloudNetwork


