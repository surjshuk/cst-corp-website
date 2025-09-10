import React from 'react'
// import Header from '../components/Header'
import { SubHeader } from '../components/SubHeader'
import { arubaDesc, arubaFeature, arubaTabData, ciscoBenifits, ciscoDesc, cloudPaloDesc, cloudPaloFeature, cloudPaloTabData, dnsFeature, fortiGateDesc, fortiGateFeature, fortiGateTabData, loadFeature, vmCloudDesc, VmDesc, whyaruba, whyCloudPalo, whyFortiate, whyVmDesc } from './data'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'

import { Benefits } from '../components/benefits'
import Section from '@/components/Section'
import { SubheroVm } from '../components/subheroVM'
import Index from '../components/Index'

const CloudNetwork = () => {

  return (
    <Section data-id="cloud-network" id="cloud-network">
      <Index
        title="Cloud Network"
        slug="cloud-services"
        data = {[
          {
          header:"Cloud Network",
        
          subheader:[
          `Palo Alto Networks GlobalProtect Cloud Services`,
          `FortiGate Cloud Security`,
          `HPE Aruba Central`,
          `Cisco Cloud Networking Solutions`

        ]},
       
        
      ]}
      />
        {/* <Header title={"Cloud Network"}/>  */}
       <SubHeader
      title='Palo Alto Networks GlobalProtect Cloud Services'
      subtitle='Secure Access Anywhere, Anytime'
      description={cloudPaloDesc}
      group='Cloud Network'
      website='ssds'
      position='right'
      />
       <SubHeader
      title='What is GlobalProtect Cloud Services?'
      description={whyCloudPalo}   
      position='left'  />

      
        <CloudSpecial tabData={cloudPaloTabData} />
        
        <KeyFeaturesSection title="Key Features of Palo Alto Networks GlobalProtect Cloud Services" features={cloudPaloFeature}/>
       

 <SubHeader
      title='FortiGate Cloud Security'
      subtitle='Empowering Your Business with Next-Generation Cloud Security'
      description={fortiGateDesc}
       group='Cloud Network'
      website='ssds'
      position='right'
      />
       <SubHeader
      title='What is FortiGate Cloud Security?'
      description={whyFortiate}   
      position='left'  />

       
        <CloudSpecial tabData={fortiGateTabData} />
        
        <KeyFeaturesSection title="Key Features of FortiGate Cloud Security" features={fortiGateFeature}/>
       

       
 <SubHeader
      title='HPE Aruba Central'
      subtitle='The Future of Network Management with Cloud-Based Simplicity'
      description={arubaDesc}
       group='Cloud Network'
      website='ssds'
      position='right'
      />
       <SubHeader
      title='What is HPE Aruba Central?'
      description={whyaruba}   
      position='left'  />

       
        <CloudSpecial tabData={arubaTabData} />
        
        <KeyFeaturesSection title="Key Features of HPE Aruba Central" features={arubaFeature}/>
       

      
       
 <SubheroVm
      subtitle='VMware Cloud Networking'
      intro='VMware NSX'
      data={VmDesc}
      />
      
       <SubheroVm
subtitle='VMware VeloCloud'
     data={whyVmDesc}
      position='left'  />
       <SubheroVm
subtitle='VMware Cloud Networking Services'
     data={vmCloudDesc}
      position='right'  />



       
 <SubHeader
      title='Cisco Cloud Networking Solutions'
      subtitle='DNS and Load Balancing'
      description={ciscoDesc}
       group='Cloud Network'
      website='ssds'
      position='right'
      />

            <KeyFeaturesSection title="Key Features of Cisco Cloud DNS" features={dnsFeature}/>
       

            <KeyFeaturesSection title="Key Features of Cisco Cloud Load Balancing" features={loadFeature}/>
       

      <Benefits  benefits={ciscoBenifits}/>


    </Section>
  )

}

export default CloudNetwork


