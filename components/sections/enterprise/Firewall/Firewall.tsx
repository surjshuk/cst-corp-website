import React from 'react'
import CloudSpecial from '../../cloud-services/components/Special'
import { KeyFeaturesSection } from '../../cloud-services/key-features'
import { barracudaBenefits, barracudaDeploy, barracudaDesc, barracudaFeatures, barracudaModelSpecs, ciscoDeploy, ciscoDesc, ciscoFeature, ciscoTabData, fortinetDeploy, fortinetDesc, fortinetFeature, fortinetTabData } from './data'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Section from '@/components/Section'

const Firewall = () => {
  return (
    <Section data-id="firewall" id="firewall">
      <Header title={"Firewall"}/> 

      <SubHeader
  title="Cisco"
  description={ciscoDesc}
     group='Firewall'
      website='ssds'
      position='right'
/>

<CloudSpecial
  tabData={ciscoTabData}
  
/>

<KeyFeaturesSection
  title="Key Features of Cisco Firepower Threat Defense (FTD)"
  features={ciscoFeature}
/>


<KeyFeaturesSection
  title="Deployment Options"
  features={ciscoDeploy}
/>

<SubHeader
  title="Fortinet Firewalls"
  description={fortinetDesc}
     group='Firewall'
      website='ssds'
      position='right'
/>

<CloudSpecial
  tabData={fortinetTabData}
  
/>


<KeyFeaturesSection
  title="Key Features of Fortinet FortiGate Firewalls"
  features={fortinetFeature}
/>


<KeyFeaturesSection
  title="Deployment Options"
  features={fortinetDeploy}
/>

<SubHeader
  title='Barracuda CloudGen Firewall'
  description={barracudaDesc}
     group='Firewall'
      website='ssds'
      position='right'
/>


<CloudSpecial
  tabData={barracudaBenefits}

/>


<KeyFeaturesSection
  title="Key Features"
  features={barracudaFeatures}
/>

<KeyFeaturesSection
  title="Deployment Options"
  features={barracudaDeploy}
/>

<SubHeader
  title="Model Specifications"
  description={barracudaModelSpecs}
  position='left'
/>

    </Section>
  )
}

export default Firewall
