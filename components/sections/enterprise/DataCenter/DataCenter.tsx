import React from 'react'
import Header from '../../cloud-services/components/Header'
import { Subhero } from '../../cloud-services/components/subhero'
import CloudSpecial from '../../cloud-services/components/Special'
import { broadcomBenefits, broadcomDesc, broadcomFeatures, ciscoDesc, ciscoTabData, dellDesc, dellFeature, dellTabData, fortinetBenefits, fortinetDesc, fortinetFeatures, hpeDesc, hpeFeature, hpeTabData, ibmDesc, ibmFeature, ibmTabData, ibmWhy, prismaBenefits, prismaDesc, prismaFeatures, vmwareBenefits, vmwareDesc, vmwareFeatures, whatIsBroadcom, whatIsFortinet, whatIsPrisma, whatIsVmware, whyCisco, whyDell, whyHPE } from './data'
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

<Subhero
  subtitle='Fortinet Data Center Networking'
  intro='FortiGate, FortiSwitch, and FortiLink Solutions'
  description={fortinetDesc}
/>

<Subhero
  subtitle='What is Fortinet Data Center Networking?'
  description={whatIsFortinet}
  position='left'
/>

<CloudSpecial
  tabData={fortinetBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Key Features of Fortinet Data Center Networking"
  features={fortinetFeatures}
/>


<Subhero
  subtitle='Palo Alto Networks Prisma SD-WAN'
  intro='Enhancing Data Center Connectivity with Secure, High-Performance Networking'
  description={prismaDesc}
/>

<Subhero
  subtitle='What is Prisma SD-WAN?'
  description={whatIsPrisma}
  position='left'
/>

<CloudSpecial
  tabData={prismaBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Key Features of Prisma SD-WAN"
  features={prismaFeatures}
/>


<Subhero
  subtitle='VMware by Broadcom'
  intro='NSX, vSphere, and vSAN for Data Center Networking'
  description={vmwareDesc}
/>

<Subhero
  subtitle='What are VMware by Broadcom Data Center Solutions?'
  description={whatIsVmware}
  position='left'
/>

<CloudSpecial
  tabData={vmwareBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Key Features of VMware by Broadcom Data Center Solutions"
  features={vmwareFeatures}
/>


<Subhero
  subtitle='Broadcom Data Center Switching Solutions'
  intro='Tomahawk and StrataXGS Series'
  description={broadcomDesc}
/>

<Subhero
  subtitle="What are Broadcom's Data Center Switching Solutions?"
  description={whatIsBroadcom}
  position='left'
/>

<CloudSpecial
  tabData={broadcomBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Key Features of Broadcom's Data Center Switching Solutions"
  features={broadcomFeatures}
/>




    </div>

  )
}

export default DataCenter
