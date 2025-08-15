import React from 'react'
import Header from '../../cloud-services/components/Header'
import { Subhero } from '../../cloud-services/components/subhero'
import CloudSpecial from '../../cloud-services/components/Special'
import { KeyFeaturesSection } from '../../cloud-services/key-features'
import { cyberSecBG3 } from '@/app/assets'
import { barracudaBenefits, barracudaDeploy, barracudaDesc, barracudaFeatures, barracudaModelSpecs, ciscoDeploy, ciscoDesc, ciscoFeature, ciscoTabData, fortinetDeploy, fortinetDesc, fortinetFeature, fortinetTabData } from './data'

const Firewall = () => {
  return (
    <div data-id="firewall" id="firewall">
      <Header title={"Firewall"}/> 

      <Subhero
  subtitle="Cisco"
  description={ciscoDesc}
/>

<CloudSpecial
  tabData={ciscoTabData}
  className="h-[400vh]"
  imageSrc={cyberSecBG3} 
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<KeyFeaturesSection
  title="Key Features of Cisco Firepower Threat Defense (FTD)"
  features={ciscoFeature}
/>


<KeyFeaturesSection
  title="Deployment Options"
  features={ciscoDeploy}
/>

<Subhero
  subtitle="Fortinet Firewalls"
  description={fortinetDesc}
/>

<CloudSpecial
  tabData={fortinetTabData}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


<KeyFeaturesSection
  title="Key Features of Fortinet FortiGate Firewalls"
  features={fortinetFeature}
/>


<KeyFeaturesSection
  title="Deployment Options"
  features={fortinetDeploy}
/>

<Subhero
  subtitle='Barracuda CloudGen Firewall'
  description={barracudaDesc}
/>


<CloudSpecial
  tabData={barracudaBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


<KeyFeaturesSection
  title="Key Features"
  features={barracudaFeatures}
/>

<KeyFeaturesSection
  title="Deployment Options"
  features={barracudaDeploy}
/>

<Subhero
  subtitle="Model Specifications"
  description={barracudaModelSpecs}
  position='left'
/>

    </div>
  )
}

export default Firewall
