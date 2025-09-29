import React from 'react'
import { arcticWolfCipFeatures, arcticWolfIotSecurityFeatures, arubaBenefits, arubaCipFeatures, arubaFeatures, arubaIotSecurityFeatures, arubaScadaBenefits, arubaScadaFeatures, darktraceBenefits, darktraceCipFeatures, darktraceFeatures, darktraceIotSecurityFeatures, darktraceScadaBenefits, darktraceScadaFeatures, fortinetCipFeatures, fortinetICSBenefits, fortinetICSFeatures, fortinetIotSecurityFeatures, fortinetScadaBenefits, fortinetScadaFeatures, paloAltoICSBenefits, paloAltoICSFeatures, paloAltoIotSecurityFeatures, paloAltoScadaBenefits, paloAltoScadaFeatures, paloCipFeatures, sentinelOneBenefits, sentinelOneCipFeatures, sentinelOneFeatures, sentinelOneIotSecurityFeatures, sentinelOneScadaBenefits, sentinelOneScadaFeatures, tenableBenefits, tenableCipFeatures, tenableFeatures, tenableIotSecurityFeatures, tenableScadaBenefits, tenableScadaFeatures } from './data'
import { CollapsiblePoints } from '@/components/shared/CollapisblePoints'
import SubHeader from '../components/SubHeader'
import Header from '../components/Header'
import { ThreePoints } from '@/components/shared/ThreePoints'
import Section from '@/components/Section'
import Index from '../components/Index'

const Operational = () => {
  return (
    <>
      <Section id="operational-technology-security" data-id="operational-technology-security">
        
            <Index
        title="Operational Technology Security (OTS)"
          slug="cybersecurity"
        data= {[
      


          {
          header:"Industrial Control Systems (ICS) Security",
          section:"ics",
          subheader:[
          // `Cisco ICS Security`,
          `Fortinet ICS Security`,
          `Palo Alto ICS Security`,
          `Tenable ICS Security`,
          `Aruba Networks ICS Security`,
          `Darktrace ICS Security`,
          `SentinelOne ICS Security`,
          
     
        ]},

         {
          header:"Supervisory Control and Data Acquisition (SCADA) Security",
          section:"ics",
          subheader:[
          // `Cisco SCADA Security Solutions`,
          `Fortinet SCADA Security Solutions`,
          `Palo Alto Networks SCADA Security Solutions`,
          `Tenable SCADA Security Solutions`,
          `Aruba Networks SCADA Security Solutions`,
          `Darktrace SCADA Security Solutions`,
          `SentinelOne SCADA Security Solutions`,
          
     
        ]},

          {
          header:"Critical Infrastructure Protection (CIP)",
          section:"cip",
          subheader:[
          // `Cisco Critical Infrastructure Protection`,
          `Fortinet Critical Infrastructure Protection`,
          `Palo Alto Networks Critical Infrastructure Protection`,
          `Tenable Critical Infrastructure Protection`,
          `Aruba Networks SCADA Security Solutions`,
          `Darktrace Critical Infrastructure Protection`,
          `SentinelOne Critical Infrastructure Protection`,
          `Arctic Wolf Critical Infrastructure Protection`
     
        ]},

         {
          header:"IoT Device Security",
          section:"iot",
          subheader:[
          // `Cisco IoT Security`,
          `Fortinet IoT Security`,
          `Palo Alto Networks IoT Security`,
          `Tenable IoT Security`,
          `Aruba Networks IoT Security`,
          `Darktrace IoT Security`,
          `SentinelOne IoT Security`,
          `Arctic Wolf IoT Security`
     
        ]},

         
        
        
      ]}
  />
      <Header title="Industrial Control Systems (ICS) Security" />

      {/* <SubHeader
  title="Cisco ICS Security"
  description="Cisco's Industrial Control Systems (ICS) security solutions are part of its broader Operational Technology (OT) security portfolio. Cisco integrates networking, security, and visibility to safeguard critical ICS environments against evolving cyber threats. Cisco's solutions are built to protect against threats while ensuring operational."
 group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

 <CollapsiblePoints data={icsFeature} />
  <ThreePoints points={icsBenefits} /> */}

  <SubHeader
  title="Fortinet ICS Security"
  description="Fortinet delivers robust ICS security solutions through its FortiGuard and FortiGate platforms, designed to protect critical infrastructure environments from cyber threats while maintaining operational reliability."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={fortinetICSFeatures} />
<ThreePoints points={fortinetICSBenefits} />

<SubHeader
  title="Palo Alto ICS Security"
  description="Palo Alto Networks’ ICS security solutions leverage their advanced cloud and AI-powered cybersecurity platforms to protect critical OT assets from advanced cyber threats."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={paloAltoICSFeatures} />
<ThreePoints points={paloAltoICSBenefits} />

<SubHeader
  title="Tenable ICS Security"
  description="Tenable offers specialized ICS security solutions through its Tenable.ot platform, providing unparalleled visibility and risk management for OT environments."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={tenableFeatures} />
<ThreePoints points={tenableBenefits} />
<SubHeader
  title="Aruba Networks ICS Security"
  description="Aruba Networks, a Hewlett Packard Enterprise company, offers advanced ICS security solutions to ensure secure connectivity and operational integrity for OT environments."
 group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={arubaFeatures} />
<ThreePoints points={arubaBenefits} />

<SubHeader
  title="Darktrace ICS Security"
  description="Darktrace uses artificial intelligence (AI) to deliver advanced ICS security solutions. Its self-learning AI protects industrial environments from novel and sophisticated cyber threats."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={darktraceFeatures} />
<ThreePoints points={darktraceBenefits} />


<SubHeader
  title="SentinelOne ICS Security"
  description="SentinelOne provides endpoint detection and response (EDR) solutions for ICS environments, combining AI and automation to secure critical OT infrastructure."
  position="left"
/>

<CollapsiblePoints data={sentinelOneFeatures} />
<ThreePoints points={sentinelOneBenefits} />


<Header title="Supervisory Control and Data Acquisition (SCADA) Security
"  />

{/* <SubHeader
  title="Cisco SCADA Security Solutions"
  description="Cisco offers a robust suite of security solutions tailored for Supervisory Control and Data Acquisition (SCADA) systems within Operational Technology (OT) environments. Recognizing the unique challenges of industrial networks, Cisco's approach integrates advanced security measures to protect critical infrastructure without compromising operational efficiency."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={ciscoScadaFeatures} />
<ThreePoints points={ciscoScadaBenefits} /> */}


<SubHeader
  title="Fortinet SCADA Security Solutions"
  description="Fortinet delivers specialized security solutions for SCADA systems, focusing on the convergence of IT and OT networks. Their approach emphasizes comprehensive protection, visibility, and control to safeguard critical industrial processes."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={fortinetScadaFeatures} />
<ThreePoints points={fortinetScadaBenefits} />

<SubHeader
  title="Palo Alto Networks SCADA Security Solutions"
  description="Palo Alto Networks offers advanced security solutions tailored for SCADA systems, focusing on safeguarding critical infrastructure within OT environments. Their approach integrates comprehensive security measures to protect against evolving cyber threats."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={paloAltoScadaFeatures} />
<ThreePoints points={paloAltoScadaBenefits} />

<SubHeader
  title="Tenable SCADA Security Solutions"
  description="Tenable focuses on vulnerability management and proactive security for SCADA systems, offering solutions that provide comprehensive visibility and control over industrial environments."
 group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={tenableScadaFeatures} />
<ThreePoints points={tenableScadaBenefits} />
<SubHeader
  title="Aruba Networks SCADA Security Solutions"
  description="Aruba Networks provides advanced networking and security capabilities that can be adapted to safeguard SCADA systems in OT environments through Zero Trust, AI-powered detection, and comprehensive access control."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={arubaScadaFeatures} />
<ThreePoints points={arubaScadaBenefits} />

<SubHeader
  title="Darktrace SCADA Security Solutions"
  description="Darktrace leverages self-learning AI and autonomous response to secure SCADA environments, delivering real-time detection and proactive defense against evolving cyber threats."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={darktraceScadaFeatures} />
<ThreePoints points={darktraceScadaBenefits} />

<SubHeader
  title="SentinelOne SCADA Security Solutions"
  description="SentinelOne enhances SCADA system security through AI-driven endpoint protection, real-time detection, and automated remediation, minimizing risk and downtime in industrial environments."
   group="Operational Technology Security (OTS)" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneScadaFeatures} />
<ThreePoints points={sentinelOneScadaBenefits} />


<Header title="Critical Infrastructure Protection (CIP)"  />

{/* <SubHeader
  title="Cisco Critical Infrastructure Protection"
  description="Cisco delivers a comprehensive suite of solutions designed to secure critical infrastructure across industries by integrating real-time visibility, network segmentation, threat intelligence, and zero trust architecture."
   group="Operational Technology Security (OTS)" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={ciscoCipFeatures} /> */}


<SubHeader
  title="Fortinet Critical Infrastructure Protection"
  description="Fortinet secures OT environments in critical infrastructure through its integrated Security Fabric, offering advanced threat protection, visibility, and compliance-driven security across industrial networks."
     group="Operational Technology Security (OTS)" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={fortinetCipFeatures} />

<SubHeader
  title="Palo Alto Networks Critical Infrastructure Protection"
  description="Palo Alto Networks secures critical infrastructure with zero trust architecture, deep visibility, and automated threat prevention across OT environments."
   group="Operational Technology Security (OTS)" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={paloCipFeatures} />

<SubHeader
  title="Tenable Critical Infrastructure Protection"
  description="Tenable delivers deep visibility and proactive vulnerability management for critical infrastructure, securing OT assets with precision and operational safety."
   group="Operational Technology Security (OTS)" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={tenableCipFeatures} />

<SubHeader
  title="Aruba Networks Critical Infrastructure Protection"
  description="Aruba delivers secure, identity-driven networking to safeguard critical infrastructure from edge to cloud, integrating Zero Trust and SASE frameworks for OT resilience."
   group="Operational Technology Security (OTS)" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={arubaCipFeatures} />

<SubHeader
  title="Darktrace Critical Infrastructure Protection"
  description="Darktrace secures critical infrastructure with self-learning AI that detects, investigates, and autonomously responds to threats in real time."
   group="Operational Technology Security (OTS)" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={darktraceCipFeatures} />

<SubHeader
  title="SentinelOne Critical Infrastructure Protection"
  description="SentinelOne secures critical infrastructure by delivering autonomous endpoint protection, behavioral threat detection, and real-time remediation capabilities."
    group="Operational Technology Security (OTS)" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneCipFeatures} />

<SubHeader
  title="Arctic Wolf Critical Infrastructure Protection"
  description="Arctic Wolf delivers MDR services with 24/7 monitoring, proactive threat hunting, and rapid incident response to protect critical infrastructure."
     group="Operational Technology Security (OTS)" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfCipFeatures} />


<Header title="IoT Device Security " />

{/* <SubHeader
  title="Cisco IoT Security"
  description="Cisco’s Industrial Threat Defense secures OT, ICS, and cyber-physical systems through visibility, segmentation, and unified threat response."
     group="Operational Technology Security (OTS)" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={ciscoIotSecurityFeatures} /> */}

<SubHeader
  title="Fortinet IoT Security"
  description="Fortinet secures IoT ecosystems with integrated visibility, segmentation, and threat intelligence via its Security Fabric."
group="Operational Technology Security (OTS)" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={fortinetIotSecurityFeatures} />


<SubHeader
  title="Palo Alto Networks IoT Security"
  description="Palo Alto Networks delivers AI-driven IoT security integrated with Prisma Access and NGFWs for real-time visibility and protection."
  group="Operational Technology Security (OTS)" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={paloAltoIotSecurityFeatures} />

<SubHeader
  title="Tenable IoT Security"
  description="Tenable brings visibility and vulnerability management to IoT environments, integrating risk insights across OT ecosystems."
 group="Operational Technology Security (OTS)" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={tenableIotSecurityFeatures} />


<SubHeader
  title="Aruba Networks IoT Security"
  description="Aruba secures IoT at the edge with unified infrastructure, zero trust enforcement, and AI-powered insights."
  group="Operational Technology Security (OTS)" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={arubaIotSecurityFeatures} />


<SubHeader
  title="Darktrace IoT Security"
  description="Darktrace secures IoT environments using self-learning AI that detects and autonomously responds to threats in real time."
group="Operational Technology Security (OTS)" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={darktraceIotSecurityFeatures} />


<SubHeader
  title="SentinelOne IoT Security"
  description="SentinelOne protects IoT environments through its Ranger module, delivering autonomous discovery, threat detection, and policy enforcement."
group="Operational Technology Security (OTS)" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneIotSecurityFeatures} />

<SubHeader
  title="Arctic Wolf IoT Security"
  description="Arctic Wolf delivers managed security services for IoT environments, combining 24/7 monitoring, expert SOC support, and proactive threat defense."
group="Operational Technology Security (OTS)" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfIotSecurityFeatures} />



    </Section>
    </>
  )
}

export default Operational
