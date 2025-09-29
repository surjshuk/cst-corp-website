import React from 'react'
import { nectusBenefits, nectusDesc, nectusFeatures, thousandEyesBenefits, thousandEyesDesc, thousandEyesFeatures } from './data'
import { KeyFeaturesSection } from '../../cloud-services/key-features'

// import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Section from '@/components/Section'
import Index from '../components/Index'
import { necnetw, tenet } from '@/app/assets'
import MainCarousel from '../components/Special'

const NetworkMonitoring = () => {
  return (
    <Section data-id="network-monitoring" id='network-monitoring'>
        <Index
        title="Network Monitoring"
        slug="enterprise-network"
        data = {[
          {
          header:"Network Monitoring",
        
          subheader:[
         `Nectus Network Monitoring & Management`,
     `ThousandEyes Network Monitoring`,
     
        
        ]},
       
        
      ]}
      />
        {/* <Header title={"Network monitoring"}/>  */}

      <SubHeader
  title='Nectus Network Monitoring & Management'
  description={nectusDesc}
     group='Network monitoring'
      website='ssds'
      position='right'
/>

<KeyFeaturesSection
  title="Key Features"
  features={nectusFeatures}
/>

<MainCarousel
  tabData={nectusBenefits}
  image={necnetw}
/>

<SubHeader
  title='ThousandEyes Network Monitoring'
  description={thousandEyesDesc}
   group='Network monitoring'
      website='ssds'
      position='right'
/>

<KeyFeaturesSection
  title="Key Features"
  features={thousandEyesFeatures}
/>

<MainCarousel
  tabData={thousandEyesBenefits}
  image={tenet}
/>


    </Section>
  )
}

export default NetworkMonitoring
