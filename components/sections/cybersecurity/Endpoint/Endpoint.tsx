import Section from '@/components/Section'
import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import { CollapsiblePoints } from '@/components/shared/CollapisblePoints'
import { ThreePoints } from '@/components/shared/ThreePoints'
import { appVMwareBenefits, appVMwareFeatures, edrCrowdStrikeBenefits, edrCrowdStrikeFeatures, mdmSentinelBenefits, mdmSentinelFeatures, patchMicrosoftFeatures, pathMicrosoftBenefits } from './data'
import { dataProofpointFeatures } from '../EmailSecurity/data'

const Endpoint = () => {
  return (
    <>
      <Section id="endpoint-security" data-id="endpoint-security">
            {/* Endpoint Protection Platforms (EPP)*/}
            <Header title="Data Loss Prevention (DLP) for Email"  />
      
            <SubHeader
              title="Trend Micro Endpoint Protection Platform"
              description="Trend Micro is a leading cybersecurity company offering robust Endpoint Protection Platform (EPP) solutions tailored to meet modern organizational needs. Trend Micro’s Endpoint security suite provides advanced threat defense against ransomware, malware, phishing, and other sophisticated cyberattacks."
               group="Endpoint Security" 
              section="DLP"
              position="right"  />
            <CollapsiblePoints data={dataProofpointFeatures} />
      
            {/* Endpoint Detection and Response (EDR) */}
            <Header title="Endpoint Detection and Response (EDR)"  />
      
            <SubHeader
              title="CrowdStrike Falcon Insight"
              description="CrowdStrike Falcon Insight is a cloud-native endpoint detection and response (EDR) solution designed to provide real-time visibility into endpoint activities and deliver advanced threat detection capabilities. Built on the CrowdStrike Falcon platform, it integrates seamlessly with other Falcon modules to offer comprehensive protection."
              group="Endpoint Security" 
              section="EDR"
              position="right"  />
            <CollapsiblePoints data={edrCrowdStrikeFeatures} />
      
            <ThreePoints points={edrCrowdStrikeBenefits} />
      
            {/* Mobile Device Management (MDM)  */}
            <Header title=" Mobile Device Management (MDM)" />
      
            <SubHeader
              title="SentinelOne Singularity Mobile"
              description="SentinelOne Singularity Mobile is a next-generation AI-powered Mobile Threat Defense (MTD) solution that provides endpoint security for mobile devices. It uses advanced behavioral AI models to detect, prevent, and respond to mobile threats in real time."
               group="Endpoint Security" 
              section="MDM"
              position="right" />
            <CollapsiblePoints data={mdmSentinelFeatures} />
      
            <ThreePoints points={mdmSentinelBenefits} />
      
      
      
            {/* Application Whitelisting */}
            <Header title=" Application Whitelisting"  />
      
            <SubHeader
              title="VMware Carbon Black"
              description="VMware Carbon Black is a leading endpoint security platform that leverages advanced threat detection, response, and prevention to safeguard enterprise environments. Its application whitelisting feature focuses on identifying and blocking unauthorized applications to reduce the risk of malware and zero-day attacks."
               group="Endpoint Security" 
              section="Application Whitelisting"
              position="right"  />
            <CollapsiblePoints data={appVMwareFeatures} />
      
            <ThreePoints points={appVMwareBenefits} />
      
      
            {/* Patch Management */}
            <Header title=" Patch Management"  />
      
            <SubHeader
              title="Microsoft Endpoint Configuration Manager (MECM)"
              description="Microsoft Endpoint Configuration Manager (formerly System Center Configuration Manager or SCCM) is a comprehensive tool designed for managing large-scale IT environments."
              group="Endpoint Security" 
              section="MECM"
              position="right" />
            <CollapsiblePoints data={patchMicrosoftFeatures} />
      
            <ThreePoints points={pathMicrosoftBenefits} />
      
          </Section>
    </>
  )
}

export default Endpoint
