import React from 'react'
import Header from '../components/Header'
import { Subhero } from '../components/subhero'
import { arubaDesc, arubaFeature, arubaTabData, ciscoBenifits, ciscoDesc, cloudPaloDesc, cloudPaloFeature, cloudPaloTabData, dnsFeature, fortiGateDesc, fortiGateFeature, fortiGateTabData, loadFeature, vmCloudDesc, VmDesc, whyaruba, whyCloudPalo, whyFortiate, whyVmDesc } from './data'
import CloudSpecial from '../components/Special'
import { cyberSecBG3 } from '@/app/assets/'
import { KeyFeaturesSection } from '../key-features'
import { SubheroVm } from '../components/subheroVM'
import { Benefits } from '../components/benefits'

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
       

 <Subhero
      subtitle='FortiGate Cloud Security'
      intro='Empowering Your Business with Next-Generation Cloud Security'
      description={fortiGateDesc}
      />
       <Subhero
      subtitle='What is FortiGate Cloud Security?'
      description={whyFortiate}   
      position='left'  />

       
        <CloudSpecial tabData={fortiGateTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of FortiGate Cloud Security" features={fortiGateFeature}/>
       

       
 <Subhero
      subtitle='HPE Aruba Central'
      intro='The Future of Network Management with Cloud-Based Simplicity'
      description={arubaDesc}
      />
       <Subhero
      subtitle='What is HPE Aruba Central?'
      description={whyaruba}   
      position='left'  />

       
        <CloudSpecial tabData={arubaTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of HPE Aruba Central" features={arubaFeature}/>
       

      
       
 <SubheroVm
      subtitle='VMware Cloud Networking'
      intro='VMware NSX'
      data={VmDesc}
      />
      
       <SubheroVm
intro='VMware VeloCloud'
     data={whyVmDesc}
      position='left'  />
       <SubheroVm
intro='VMware Cloud Networking Services'
     data={vmCloudDesc}
      position='right'  />



       
 <Subhero
      subtitle='Cisco Cloud Networking Solutions'
      intro='DNS and Load Balancing'
      description={ciscoDesc}/>

            <KeyFeaturesSection title="Key Features of Cisco Cloud DNS" features={dnsFeature}/>
       

            <KeyFeaturesSection title="Key Features of Cisco Cloud Load Balancing" features={loadFeature}/>
       

      <Benefits subTitle='Cisco Cloud Networking Package: DNS + Load Balancing' benefits={ciscoBenifits}/>


    </div>
  )

}

export default CloudNetwork


