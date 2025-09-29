import React from 'react'
import { broadcomBenefits, broadcomDesc, broadcomFeatures, dellDesc, dellFeature, dellTabData, fortinetBenefits, fortinetDesc, fortinetFeatures, hpeDesc, hpeFeature, hpeTabData, ibmDesc, ibmFeature, ibmTabData, ibmWhy, prismaBenefits, prismaDesc, prismaFeatures, vmwareBenefits, vmwareDesc, vmwareFeatures, whatIsBroadcom, whatIsFortinet, whatIsPrisma, whatIsVmware, whyDell, whyHPE } from './data'

import { KeyFeaturesSection } from '../../cloud-services/key-features'
// import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Section from '@/components/Section'
import MainCarousel from '../components/Special'
import { broadcamdat, dellemc, fortinet, hpedata, ibmcloudSS, prisma, vmware } from '@/app/assets'
import Index from '../components/Index'

const DataCenter = () => {

  return (

    <Section data-id="data-center" id='data-center'>
        <Index
        title="Data Center"
        slug="enterprise-network"
        data = {[
          {
          header:"Data Center",
        
          subheader:[
        //  `Cisco Nexus Switches`,
         `HPE Data Center Networking`,
         `Dell EMC Data Center Networking`,
         `IBM Cloud Data Center Networking`,
         `Fortinet Data Center Networking`,
         `Palo Alto Networks Prisma SD-WAN`,
         `VMware by Broadcom`,
         `Broadcom Data Center Switching Solutions`,
        
        ]},
       
        
      ]}
      />

      {/* <Header title={"Data Center"}/>  */}
       {/* <SubHeader
      title='Cisco Nexus Switches'
      subtitle='The Industry-Leading Data Center Networking Solution for Performance, Scalability, and Flexibility'
      description={ciscoDesc}
       group='Data Center'
      website='ssds'
      position='right'

      />
       <SubHeader
      title='What are Cisco Nexus Switches?'
      description={whyCisco}   
      position='left'  />

      
        <MainCarousel tabData={ciscoTabData} />
        
        <KeyFeaturesSection title="Key Features of Cisco Nexus Switches" features={cloudPaloFeature}/> */}
       
      <SubHeader
  title="HPE Data Center Networking"
  subtitle="The Industry-Leading Solution for Performance, Scalability, and Flexibility"
  description={hpeDesc}
     group='Data Center'
      website='ssds'
      position='right'
/>

<SubHeader
  title="What is HPE Data Center Networking?"
  description={whyHPE}
  position="left"
/>

<MainCarousel
  tabData={hpeTabData}
  image={hpedata}
/>

<KeyFeaturesSection
  title="Key Features of HPE Data Center Networking"
  features={hpeFeature}
/>


<SubHeader
  title="Dell EMC Data Center Networking"
  subtitle="The Industry-Leading Solution for Performance, Scalability, and Flexibility"
  description={dellDesc}
     group='Data Center'
      website='ssds'
      position='right'
/>

<SubHeader
  title="What is Dell EMC Data Center Networking?"
  description={whyDell}
  position="left"
/>

<MainCarousel
  tabData={dellTabData}
  image={dellemc}
/>

<KeyFeaturesSection
  title="Key Features of Dell EMC Data Center Networking"
  features={dellFeature}
/>



<SubHeader
  title="IBM Cloud Data Center Networking"
  subtitle="Empowering Your Digital Transformation with Secure, High-Performance Connectivity"
  description={ibmDesc}
     group='Data Center'
      website='ssds'
      position='right'
/>

<SubHeader
  title="What is IBM Cloud Data Center Networking?"
  description={ibmWhy}
  position="left"
/>

<MainCarousel
  tabData={ibmTabData}
  image={ibmcloudSS}
/>

<KeyFeaturesSection
  title="Key Features of IBM Cloud Data Center Networking"
  features={ibmFeature}
/>

<SubHeader
  title='Fortinet Data Center Networking'
  subtitle='FortiGate, FortiSwitch, and FortiLink Solutions'
  description={fortinetDesc}
     group='Data Center'
      website='ssds'
      position='right'
/>

<SubHeader
  title='What is Fortinet Data Center Networking?'
  description={whatIsFortinet}
  position='left'
/>

<MainCarousel
  tabData={fortinetBenefits}
image={fortinet}
/>

<KeyFeaturesSection
  title="Key Features of Fortinet Data Center Networking"
  features={fortinetFeatures}
/>


<SubHeader
  title='Palo Alto Networks Prisma SD-WAN'
  subtitle='Enhancing Data Center Connectivity with Secure, High-Performance Networking'
  description={prismaDesc}
     group='Data Center'
      website='ssds'
      position='right'
/>

<SubHeader
  title='What is Prisma SD-WAN?'
  description={whatIsPrisma}
  position='left'
/>

<MainCarousel
  tabData={prismaBenefits}
image={prisma}
/>

<KeyFeaturesSection
  title="Key Features of Prisma SD-WAN"
  features={prismaFeatures}
/>


<SubHeader
  title='VMware by Broadcom'
  subtitle='NSX, vSphere, and vSAN for Data Center Networking'
  description={vmwareDesc}
     group='Data Center'
      website='ssds'
      position='right'
/>

<SubHeader
  title='What are VMware by Broadcom Data Center Solutions?'
  description={whatIsVmware}
  position='left'
/>

<MainCarousel
  tabData={vmwareBenefits}
  image = {vmware}
/>

<KeyFeaturesSection
  title="Key Features of VMware by Broadcom Data Center Solutions"
  features={vmwareFeatures}
/>


<SubHeader
  title='Broadcom Data Center Switching Solutions'
  subtitle='Tomahawk and StrataXGS Series'
  description={broadcomDesc}
     group='Data Center'
      website='ssds'
      position='right'
/>

<SubHeader
  title="What are Broadcom's Data Center Switching Solutions?"
  description={whatIsBroadcom}
  position='left'
/>

<MainCarousel
  tabData={broadcomBenefits}
  image={broadcamdat}
/>

<KeyFeaturesSection
  title="Key Features of Broadcom's Data Center Switching Solutions"
  features={broadcomFeatures}
/>




    </Section>

  )
}

export default DataCenter
