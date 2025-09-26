import React from 'react'
import { altoNetworkFeatures, arubaNetworkPoints, barraFeatures, clearPassPoints, FortiClientFeatures, fortiFeatures, fortigateFeatures, fortiNACPoints, intrusionFeatures, nextGenFeatures, paloAltoZtaPoints, paloglobalFeatures, prismaAccessPoints, trendFeatures, vmwareNetworkPoints } from './data'
import { NetworkSection } from '../CloudSecurity/components/networkSection'
import SubHeader from '../components/SubHeader'
import Header from '../components/Header'
import { CollapsiblePoints } from '@/components/shared/CollapisblePoints'
import Section from '@/components/Section'
import Index from '../components/Index'

const Network = () => {
  return (
    <>

      
        <Section id="network-security" data-id="network-security">

            <Index
        title="network security"
          slug="cybersecurity"
        data = {[
      

        {
          header:"Firewall Solutions",
          section:"Firewall Solutions",
          subheader:[
          `FortiGate (by Fortinet)`,
          `Palo Alto Next-Generation Firewalls (NGFW)`,
     
          `Barracuda Networks`,
          
        ]},

          {
          header:"Intrusion Detection and Prevention System (IDPS)",
          section:"idps",
          subheader:[
          `FortiGate (Fortinet) – Intrusion Detection and Prevention Systems (IDPS)`,
          `Palo Alto Networks – Threat Prevention`,
          `Trend Micro – TippingPoint`,
          `IBM QRadar – Intrusion Detection and Response`,
          
        ]},

         {
          header:"Virtual Private Network (VPN)",
          section:"vpn",
          subheader:[
         
          `FortiClient`,
          `Palo Alto Networks GlobalProtect`,
        
        ]},

        
        //  {
        //   header:"Network Access Control (NAC)",
        //   section:"nac",
        //   subheader:[
        //   `Cisco Identity Services Engine (ISE)`,
     
        // ]},


           {
          header:"Network Access Control (NAC)",
          section:"nac",
          subheader:[
          `FortiNAC`,
          `Aruba ClearPass Policy Manager`,
          `Palo Alto Networks Prisma Access`,
          // `Cisco Enterprise Network Design`,
          `Aruba Secure Wireless and Wired Designs`,
          `Palo Alto Networks Zero Trust Architecture`,
          `VMware Network and Security Solutions`,
          
     
        ]},

        
      ]}
  />
            
            <Header title="Firewall Solutions" />
            <SubHeader
              title="FortiGate (by Fortinet)"
              description="FortiGate firewalls are part of Fortinet's comprehensive cybersecurity portfolio, designed to deliver advanced threat protection and robust performance. FortiGate firewalls are powered by Fortinet’s custom-built Security Processing Unit (SPU), enabling unparalleled speed and scalability. These solutions are highly regarded for their integration within the Fortinet Security Fabric, providing seamless management across endpoints, networks, and cloud environments."
               group="Network Security" 
              section="Firewall Solutions"
              position="right" />
            <CollapsiblePoints data={fortiFeatures} />
      
            <SubHeader
              title="Palo Alto Next-Generation Firewalls (NGFW)"
              description="Palo Alto Networks’ NGFWs are designed to provide granular control and visibility into network traffic while securing against advanced threats. The firewalls leverage machine learning and automation to streamline threat detection and response."
              group="Network Security" 
              section="Firewall Solutions"
              position="right" />
            <CollapsiblePoints data={nextGenFeatures} />
      
      
             {/* <SubHeader
              title="Cisco Firepower"
              description="Cisco Firepower firewalls deliver comprehensive threat defense across networks, endpoints, and applications. These next-generation solutions are powered by Cisco Talos, one of the world’s largest commercial threat intelligence teams."
              group="Network Security" 
              section="Firewall Solutions"
              position="right" />
            <CollapsiblePoints data={firepowerFeatures} />
       */}
            <SubHeader
              title="Barracuda Networks"
              description="Barracuda Networks specializes in simplified and efficient firewall solutions that deliver enterprise-grade protection without the complexity of traditional setups. Barracuda firewalls are particularly strong in securing distributed networks and cloud-connected systems."
              group="Network Security" 
              section="Firewall Solutions"
              position="right" />
            <CollapsiblePoints data={barraFeatures} />
      
      
            <Header title="Intrusion Detection and Prevention System (IDPS)"  />
            <SubHeader
              title="FortiGate (Fortinet) – Intrusion Detection and Prevention Systems (IDPS)"
              description="Fortinet’s FortiGate Next-Generation Firewalls (NGFW) incorporate robust Intrusion Detection and Prevention Systems (IDPS) to deliver industry-leading security solutions. FortiGate IDPS is designed to detect and block cyber threats in real time by leveraging the Fortinet Security Fabric."
              group="Network Security" 
              section="IDPS"
              position="right" />
            <CollapsiblePoints data={fortigateFeatures} />
      
             <SubHeader
              title="Palo Alto Networks – Threat Prevention"
              description="Palo Alto Networks offers Threat Prevention as part of their industry-leading next-generation firewall platform. This solution integrates advanced Intrusion Detection and Prevention Systems to proactively identify and block sophisticated cyber threats."
               group="Network Security" 
              section="IDPS"
              position="right" />
            <CollapsiblePoints data={altoNetworkFeatures} />
      
            <SubHeader
              title="Trend Micro – TippingPoint"
              description="Trend Micro’s TippingPoint is a dedicated Intrusion Prevention System (IPS) solution offering unparalleled threat visibility and network protection. Known for its efficiency and adaptability, TippingPoint excels in both physical and virtual environments."
               group="Network Security" 
              section="IDPS"
              position="right"  />
            <CollapsiblePoints data={trendFeatures} />
      
            <SubHeader
              title="IBM QRadar – Intrusion Detection and Response"
              description="IBM QRadar is a leading Security Information and Event Management (SIEM) platform that includes robust Intrusion Detection and Response capabilities. It combines advanced analytics with real-time monitoring to secure enterprise networks against sophisticated cyber threats."
               group="Network Security" 
              section="IDPS"
              position="right"  />
            <CollapsiblePoints data={intrusionFeatures} />
      
            
            <Header title="Virtual Private Network (VPN)" />
            {/* <SubHeader
              title="Cisco AnyConnect Secure Mobility Client"
              description="Cisco AnyConnect is a leading VPN solution that provides secure, seamless access to enterprise networks from virtually any device, anywhere. Designed with businesses in mind, AnyConnect ensures encrypted communications while enhancing user productivity with its always-on VPN functionality."
               group="Network Security" 
              section="VPN"
              position="right"  />
            <CollapsiblePoints data={anyConnectFeatures} /> */}
      
             <SubHeader
              title="FortiClient"
              description="FortiClient is a powerful VPN and endpoint protection solution developed by Fortinet. It combines VPN functionality with advanced endpoint security, making it ideal for businesses that prioritize both secure access and device protection."
               group="Network Security" 
              section="VPN"
              position="right" />
            <CollapsiblePoints data={FortiClientFeatures} />
      
            <SubHeader
              title="Palo Alto Networks GlobalProtect"
              description="GlobalProtect by Palo Alto Networks is a next-generation VPN solution that provides secure access to corporate networks while maintaining visibility and control over all traffic. It aligns with the principles of Zero Trust, ensuring that only authorized users and devices can access enterprise resources."
               group="Network Security" 
              section="VPN"
              position="right" />
            <CollapsiblePoints data={paloglobalFeatures} />
      
            {/* <Header title="Network Access Control (NAC)"/> */}
      
      {/* <SubHeader
              title="Cisco Identity Services Engine (ISE)"
              description="Cisco Identity Services Engine (ISE) is an advanced Network Access Control (NAC) solution designed to enable secure access to network resources. Built with a robust policy-based architecture, ISE provides visibility, control, and automation for device and user access across wired, wireless, and VPN connections. Cisco ISE is particularly effective in enhancing network security by"
              group="Network Security" 
              section="NAC"
              website="ds"
              position="right" />
      
            <NetworkSection sectionTitle="Cisco ISE is particularly effective in enhancing network security by-"
            subPoints={ciscoIdentity}
            
            /> */}
      <Header title="Network Access Control (NAC)" />
      
      <SubHeader
        title="FortiNAC"
        description="FortiNAC, developed by Fortinet, is a comprehensive NAC solution designed to deliver complete visibility, control, and automated responses to network access. FortiNAC plays a crucial role in securing complex networks with diverse endpoints, including IoT devices."
        group="Network Security"
        section="NAC"
        website="ds"
        position="right"
      />
      <NetworkSection
        sectionTitle="FortiNAC enhances network security through:"
        subPoints={fortiNACPoints}
      />
      
      <SubHeader
        title="Aruba ClearPass Policy Manager"
        description="Aruba ClearPass Policy Manager is a leading NAC solution that delivers granular control over network access while simplifying user and device management. Known for its flexibility and ease of use, ClearPass enables organizations to implement secure and seamless network access."
        group="Network Security"
        section="NAC"
        website="ds"
        position="right"
      />
      <NetworkSection
        sectionTitle="ClearPass empowers secure and flexible network access with:"
        subPoints={clearPassPoints}
      />
      
      <SubHeader
        title="Palo Alto Networks Prisma Access"
        description="Palo Alto Networks Prisma Access is a cloud-delivered solution that extends secure access capabilities to users and devices, regardless of location. While not a traditional NAC solution, Prisma Access includes NAC-like features that enhance network security and user experience."
        group="Network Security"
        section="NAC"
        website="ds"
        position="right"
      />
      <NetworkSection
        sectionTitle="Prisma Access strengthens secure access with cloud-scale capabilities:"
        subPoints={prismaAccessPoints}
      />
      
      {/* <SubHeader
        title="Cisco Enterprise Network Design"
        description="Cisco is a global leader in networking and IT, providing cutting-edge solutions for enterprise network design. With decades of innovation, Cisco offers scalable, secure, and efficient network infrastructure tailored to businesses of all sizes."
        group="Network Security"
        section="NAC"
        website="ds"
        position="right"
      />
      <NetworkSection
        sectionTitle="Cisco delivers robust, scalable, and secure enterprise network architecture:"
        subPoints={ciscoEnterprisePoints}
      /> */}
      
      <SubHeader
        title="Aruba Secure Wireless and Wired Designs"
        description="Aruba, a Hewlett Packard Enterprise company, excels in delivering secure wired and wireless networking solutions. Focused on mobility and IoT, Aruba’s designs prioritize user experience and security."
        group="Network Security"
        section="NAC"
        website="ds"
        position="right"
      />
      <NetworkSection
        sectionTitle="Aruba enables unified, secure, and intelligent networking for modern enterprises:"
        subPoints={arubaNetworkPoints}
      />
      
      <SubHeader
        title="Palo Alto Networks Zero Trust Architecture"
        description="Palo Alto Networks is a pioneer in cybersecurity, known for its Zero Trust Architecture (ZTA) solutions. These designs focus on reducing the attack surface and protecting critical assets."
        group="Network Security"
        section="NAC"
        website="ds"
        position="right"
      />
      <NetworkSection
        sectionTitle="Palo Alto enforces strict access, segmentation, and real-time threat prevention:"
        subPoints={paloAltoZtaPoints}
      />
      
      <SubHeader
        title="VMware Network and Security Solutions"
        description="VMware is a leader in virtualization and cloud infrastructure, providing secure and flexible networking solutions. Its NSX platform transforms networking and security by enabling a software-defined approach."
        group="Network Security"
        section="NAC"
        website="ds"
        position="right"
      />
      <NetworkSection
        sectionTitle="VMware brings virtualization, SDN, and micro-segmentation to modern cloud networks:"
        subPoints={vmwareNetworkPoints}
      />
      
            
          </Section>
    </>
  )
}

export default Network
