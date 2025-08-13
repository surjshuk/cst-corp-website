import React from 'react'
import Header from '../../cloud-services/components/Header'
import { Subhero } from '../../cloud-services/components/subhero'
import CloudSpecial from '../../cloud-services/components/Special'
import { ciscoDesc, ciscoTabData, dellDesc, dellFeature, dellTabData, hpeDesc, hpeFeature, hpeTabData, ibmDesc, ibmFeature, ibmTabData, ibmWhy, whyCisco, whyDell, whyHPE } from './data'
import { cyberSecBG3 } from '@/app/assets'
import { cloudPaloFeature } from '../../cloud-services/CloudNetwork/data'
import { KeyFeaturesSection } from '../../cloud-services/key-features'

const DataCenter = () => {

  return (

    <div data-id="data-center" id='data-center'>

      <Header title={"Data Center"}/> 
       <Subhero
      subtitle='Cisco Nexus Switches'
      intro='The Industry-Leading Data Center Networking Solution for Performance, Scalability, and Flexibility'
      description={ciscoDesc}
      />
       <Subhero
      subtitle='What are Cisco Nexus Switches?'
      description={whyCisco}   
      position='left'  />

      
        <CloudSpecial tabData={ciscoTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of Cisco Nexus Switches" features={cloudPaloFeature}/>
       
      <Subhero
  subtitle="HPE Data Center Networking"
  intro="The Industry-Leading Solution for Performance, Scalability, and Flexibility"
  description={hpeDesc}
/>

<Subhero
  subtitle="What is HPE Data Center Networking?"
  description={whyHPE}
  position="left"
/>

<CloudSpecial
  tabData={hpeTabData}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}   // reuse the same background image if needed
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Key Features of HPE Data Center Networking"
  features={hpeFeature}
/>


<Subhero
  subtitle="Dell EMC Data Center Networking"
  intro="The Industry-Leading Solution for Performance, Scalability, and Flexibility"
  description={dellDesc}
/>

<Subhero
  subtitle="What is Dell EMC Data Center Networking?"
  description={whyDell}
  position="left"
/>

<CloudSpecial
  tabData={dellTabData}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Key Features of Dell EMC Data Center Networking"
  features={dellFeature}
/>



<Subhero
  subtitle="IBM Cloud Data Center Networking"
  intro="Empowering Your Digital Transformation with Secure, High-Performance Connectivity"
  description={ibmDesc}
/>

<Subhero
  subtitle="What is IBM Cloud Data Center Networking?"
  description={ibmWhy}
  position="left"
/>

<CloudSpecial
  tabData={ibmTabData}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Key Features of IBM Cloud Data Center Networking"
  features={ibmFeature}
/>




    </div>

  )
}

export default DataCenter
