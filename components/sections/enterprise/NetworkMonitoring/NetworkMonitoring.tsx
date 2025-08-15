import React from 'react'
import { Subhero } from '../../cloud-services/components/subhero'
import { nectusBenefits, nectusDesc, nectusFeatures, thousandEyesBenefits, thousandEyesDesc, thousandEyesFeatures } from './data'
import { KeyFeaturesSection } from '../../cloud-services/key-features'
import CloudSpecial from '../../cloud-services/components/Special'
import { cyberSecBG3 } from '@/app/assets'
import Header from '../../cloud-services/components/Header'

const NetworkMonitoring = () => {
  return (
    <div data-id="network-monitoring" id='network-monitoring'>
        <Header title={"Network monitoring"}/> 

      <Subhero
  subtitle='Nectus Network Monitoring & Management'
  description={nectusDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={nectusFeatures}
/>

<CloudSpecial
  tabData={nectusBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>

<Subhero
  subtitle='ThousandEyes Network Monitoring'
  description={thousandEyesDesc}
/>

<KeyFeaturesSection
  title="Key Features"
  features={thousandEyesFeatures}
/>

<CloudSpecial
  tabData={thousandEyesBenefits}
  className="h-[400vh]"
  imageSrc={cyberSecBG3}
  mask="black/80"
  progressMultiplierHorizontal={14}
/>


    </div>
  )
}

export default NetworkMonitoring
