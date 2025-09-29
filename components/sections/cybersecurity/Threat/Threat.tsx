import { ThreePoints } from '@/components/shared/ThreePoints'
import React from 'react'
import { arcticWolfFeatures, arcticWolfMdrFeatures, arcticWolfUseCases, arcticWolfXDRFeatures, crowdStrikeFalconXDRFeatures, darktraceSoarBenefits, darktraceSoarFeatures, falconInsightFeatures, fortiMdrFeatures, fortiSIEMFeatures, fortiSIEMUseCases, fortiSoarBenefits, fortiSoarFeatures, fortiXDRFeatures, ibmQradarFeatures, ibmQradarUseCases, qradarSoarBenefits, qradarSoarFeatures, sentinelOneXdrFeatures, sentinelOneXDRFeatures } from './data'
import SubHeader from '../components/SubHeader'
import { CollapsiblePoints } from '@/components/shared/CollapisblePoints'
import Header from '../components/Header'
import { UseCases } from '../set-1/usecases'
import Section from '@/components/Section'
import Index from '../components/Index'

const Threat = () => {
  return (
    <>
      
  <Section id="threat-detection-and-response" data-id="threat-detection-and-response">
        
                    <Index
                title="threat detection and response (TDR)"
                slug="cybersecurity"
                data = {[
              
        
       
                    {
                  header:"Security Information and Event Management",
                  section:"siem",
                  subheader:[
                  // `Cisco SecureX (SIEM)`,
                  `FortiSIEM`,
                  `Arctic Wolf SIEM`,
                  `IBM QRadar SIEM`,
                  // `Cisco Secure MDR`,
                  `FortiMDR`,
                  `SentinelOne Singularity XDR`,
                  `Arctic Wolf MDR`,
                  `CrowdStrike Falcon Insight MDR`
             
                ]},
        
                   {
                  header:"Extended Detection and Response (XDR)",
                  section:"xdr",
                  subheader:[
                //  `Cisco SecureX`,
                 `FortiXDR`,
                 `SentinelOne Singularity XDR`,
                 `Arctic Wolf XDR`,
                 `CrowdStrike Falcon Insight XDR`,
                //  `Cisco SOAR`,
                 `FortiSOAR by Fortinet`,
                 `Darktrace Antigena SOAR`,
                 `IBM Security QRadar SOAR`,
        
                ]},
        
        
                
                
              ]}
          />
    <Header title="Security Information and Event Management "  />

    {/* <SubHeader
      title="Cisco SecureX (SIEM)"
      description="Cisco SecureX is a unified security platform that integrates Cisco and third-party tools to streamline threat detection, investigation, and response. It empowers security operations with real-time insights, automation, and integrated threat intelligence."
      group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
    />  

    <CollapsiblePoints data={ciscoSecureXFeatures} />
    <UseCases cases={ciscoSecureXUseCases} /> */}


    <SubHeader
      title="FortiSIEM"
      description="FortiSIEM is a next-generation SIEM solution offering centralized visibility, advanced threat detection, and automated response across hybrid environments."
      group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
    />

    <CollapsiblePoints data={fortiSIEMFeatures} />
    <UseCases cases={fortiSIEMUseCases} />

    <SubHeader
  title="Arctic Wolf SIEM"
  description="Arctic Wolf is a cloud-native SIEM platform combined with a fully managed SOC, delivering 24/7 threat monitoring, investigation, and response with a human-first approach."
group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfFeatures} />
<UseCases cases={arcticWolfUseCases} />


    <SubHeader
      title="IBM QRadar SIEM"
      description="IBM QRadar is a leading SIEM solution that delivers real-time security intelligence, advanced threat detection, and integration at scale for enterprise and MSSP environments."
     group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
    />

    <CollapsiblePoints data={ibmQradarFeatures} />
    <UseCases cases={ibmQradarUseCases} />



{/* <SubHeader
  title="Cisco Secure MDR"
  description="Cisco Secure MDR is a managed detection and response solution combining 24/7 monitoring, threat intelligence from Cisco Talos, and expert-led incident response across cloud, endpoint, and network environments."
 group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
/>

  <CollapsiblePoints data={ciscoMdrFeatures } /> */}
   
   <SubHeader
  title="FortiMDR"
  description="FortiMDR delivers managed detection and response across your security fabric, integrating with Fortinet tools to provide AI-driven threat detection, expert investigation, and compliance-ready reporting."
  group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={fortiMdrFeatures} />

<SubHeader
  title="SentinelOne Singularity XDR"
  description="SentinelOne Singularity XDR delivers autonomous threat detection, protection, and response across endpoints, cloud, and IoT with AI-driven intelligence and automated remediation."
group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneXdrFeatures} />

<SubHeader
  title="Arctic Wolf MDR"
  description="Arctic Wolf MDR delivers 24/7 threat detection, investigation, and response through a managed SOC-as-a-Service, combining human expertise with real-time intelligence to secure hybrid environments."
  group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfMdrFeatures} />

<SubHeader
  title="CrowdStrike Falcon Insight MDR"
  description="CrowdStrike Falcon Insight MDR provides 24/7 endpoint protection and threat hunting through AI-driven EDR, expert analysis, and cloud-native architecture to secure modern enterprise environments."
  group="threat detection and response (TDR)" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={falconInsightFeatures} />


  <Header title="Extended Detection and Response (XDR) "  />

{/* <SubHeader
  title="Cisco SecureX"
  description="Cisco SecureX is an integrated platform that unifies threat detection, response, and security operations across Cisco and third-party tools, enabling real-time visibility and automation."
group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={ciscoSecureFeatures} /> */}


<SubHeader
  title="FortiXDR"
  description="FortiXDR is Fortinet’s comprehensive XDR solution that delivers automated threat detection and response across endpoints, networks, and the cloud. It integrates seamlessly with Fortinet’s Security Fabric for unified defense and centralized management."
  group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={fortiXDRFeatures} />

<SubHeader
  title="SentinelOne Singularity XDR"
  description="SentinelOne Singularity XDR is an autonomous, AI-driven platform offering end-to-end protection across endpoints, cloud, and network environments. It combines behavioral analytics, machine learning, and automated response to stop threats in real-time."
  group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneXDRFeatures} />

<SubHeader
  title="Arctic Wolf XDR"
  description="Arctic Wolf XDR is a fully managed extended detection and response service that combines 24/7 monitoring, threat intelligence, and expert-led response to secure your environment across endpoints, cloud, and networks."
  group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfXDRFeatures} />

<SubHeader
  title="CrowdStrike Falcon Insight XDR"
  description="CrowdStrike Falcon Insight XDR extends endpoint detection and response capabilities across the enterprise by integrating cloud-native architecture, real-time analytics, and AI-powered automation to identify and respond to threats with speed and precision."
group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={crowdStrikeFalconXDRFeatures} />

{/* <SubHeader
  title="Cisco SOAR"
  description="Cisco SOAR is a robust Security Orchestration, Automation, and Response platform that streamlines security operations by automating workflows, enhancing team collaboration, and accelerating incident response through integrations with Cisco and third-party tools."
group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={ciscoSoarFeatures} />
<ThreePoints points={ciscoSoarBenefits} /> */}

<SubHeader
  title="FortiSOAR by Fortinet"
  description="FortiSOAR is a powerful Security Orchestration, Automation, and Response (SOAR) platform that accelerates the detection, investigation, and remediation of threats. It integrates seamlessly with Fortinet’s ecosystem and third-party tools to streamline incident response and boost operational efficiency."
group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={fortiSoarFeatures} />
<ThreePoints points={fortiSoarBenefits} />

<SubHeader
  title="Darktrace Antigena SOAR"
  description="Darktrace Antigena SOAR combines AI-driven threat detection with automated response capabilities, enabling security teams to autonomously defend against emerging cyber threats. Leveraging real-time machine learning, it delivers intelligent orchestration, automation, and response workflows."
group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={darktraceSoarFeatures} />
<ThreePoints points={darktraceSoarBenefits} />

<SubHeader
  title="IBM Security QRadar SOAR"
  description="IBM QRadar SOAR enhances IBM's QRadar SIEM by enabling automated, orchestrated, and collaborative incident response. It streamlines security operations with advanced playbooks, threat intelligence, and deep integration with the broader IBM security ecosystem."
group="threat detection and response (TDR)" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={qradarSoarFeatures} />
<ThreePoints points={qradarSoarBenefits} />


  </Section>

    </>
  )
}

export default Threat
