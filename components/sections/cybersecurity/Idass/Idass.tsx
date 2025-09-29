import Section from '@/components/Section'
import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import { CollapsiblePoints } from '@/components/shared/CollapisblePoints'
import {entraBenefits, entraFeatures, entraUseCases, fortinetBenefits, fortinetKeyFeatures, fortinetUseCases, fortiTokenFeatures, fortiTokenUseCases, globalProtectFeatures, globalProtectUseCases, googleAuthenticatorUseCases, googleAuthFeatures, identityFeatures, identityUseCases, microsoftEntraFeatures, microsoftUseCases, oktaBenefits, oktaUseCases, paloAltoBenefits, paloAltoFeatures, paloAltoUseCases, QRadarFeatures, rapidFeatures } from './data'
import { UseCases } from '../set-1/usecases'
import { idaasOktaFeatures } from '../CloudSecurity/data'
import { ThreePoints } from '@/components/shared/ThreePoints'
import { FortinetFeatures, ProofpointFeatures } from '../Network/data'
import Index from '../components/Index'

const Idass = () => {
  return (
    <>
    
        <Section id="identity-and-access-managemenet(IAM)">
    <Index
        title="identity and access managemenet (IAM)"
          slug="cybersecurity"
        data = {[
        
         {
          header:"Multi Factor Authentication (MFA)",
          section:"MFA",
          subheader:[
          `Okta Adaptive MFA`,

          `Microsoft Entra ID (Formerly Azure AD)`,
          `Google Authentication`,
          `FortiToken`,
          `Palo Alto Networks – GlobalProtect VPN`
        
        ]},
         {
          header:"Multi Factor Authentication (MFA)",
          section:"MFA",
          subheader:[
          `Okta for Single Sign-On (SSO) and Identity Access Management (Identity and Access Managemenet (IAM))`,
          `Microsoft Entra ID (formerly Azure AD) for SSO and Identity and Access Managemenet (IAM)`,
          // `Cisco DUO + ISE + Umbrella for SSO and Identity and Access Managemenet (IAM)`,
          `Forti Authenticator for SSO and Identity and Access Managemenet (IAM)`,
          `Palo Alto GlobalProtect for SSO and Identity and Access Managemenet (IAM)`
        ]},
         {
          header:"User Behavior Analytics (UBA)",
          section:"UBA",
          subheader:[
          `Rapid7`,
          `IBM QRadar`,
          `Proofpoint`,
          `Microsoft Defender for Identity`,
          `Fortinet FortiInsight`,
          `IBM QRadar`
        ]},
        
      ]}
  />
          <Header title="Multi Factor Authentication (MFA)"  />
    
          <SubHeader
            title="Okta Adaptive MFA"
            description="Okta Adaptive MFA is a robust multi-factor authentication solution that provides dynamic access controls based on user behavior and context. As part of the Okta Identity Cloud, it seamlessly integrates with a wide range of applications, services, and devices to enhance identity and access management."
           group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right" />
          <CollapsiblePoints data={identityFeatures} />
          <UseCases cases={identityUseCases} />
    
    
          {/* <SubHeader
            title="Cisco Duo"
            description="Cisco Duo offers a user-friendly MFA and zero-trust security platform that ensures secure access to applications and systems. It is known for its simplicity and strong focus on user experience while delivering enterprise-grade security."
             group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right" />
          <CollapsiblePoints data={ciscoFeatures} />
          <UseCases cases={ciscoUseCases} /> */}
    
          <SubHeader
            title="Microsoft Entra ID (Formerly Azure AD)"
            description="Microsoft Entra ID provides comprehensive identity and access management services as part of Microsoft’s Entra suite. It integrates seamlessly with Microsoft 365, Azure, and thousands of third-party applications."
            group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right"/>
    
          <CollapsiblePoints data={microsoftEntraFeatures} />
          <UseCases cases={microsoftUseCases} />
    
          <SubHeader
            title="Google Authentication"
            description="Google Authentication is a lightweight and effective MFA solution designed for personal and business users. It is particularly known for its Google Authenticator app, which generates time-based one-time passwords (TOTP)."
             group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right" />
    
          <CollapsiblePoints data={googleAuthFeatures} />
          <UseCases cases={googleAuthenticatorUseCases} />
    
          <SubHeader
            title="FortiToken"
            description="FortiToken, developed by Fortinet, is a comprehensive MFA solution that combines hardware and software tokens to enhance security for enterprise systems and applications. It integrates seamlessly with the Fortinet Security Fabric."
             group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right" />
    
          <CollapsiblePoints data={fortiTokenFeatures} />
          <UseCases cases={fortiTokenUseCases} />
    
          <SubHeader
            title="Palo Alto Networks – GlobalProtect VPN"
            description="GlobalProtect by Palo Alto Networks ensures secure remote access through a robust VPN solution. When integrated with multi-factor authentication (MFA), it offers strong identity verification for enterprise systems. It works natively with Palo Alto’s security infrastructure to provide comprehensive protection."
             group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right" />
    
          <CollapsiblePoints data={globalProtectFeatures} />
    
          <UseCases cases={globalProtectUseCases} />
    
          <Header title="Multi Factor Authentication (MFA)"  />
    
          <SubHeader
            title="Okta for Single Sign-On (SSO) and Identity Access Management (Identity and Access Managemenet (IAM))"
            description="Okta is a leading cloud-based identity and access management platform, offering robust Single Sign-On (SSO) capabilities. It enables organizations to streamline user authentication across multiple applications while ensuring high levels of security and compliance. As a pioneer in the identity management space, Okta is trusted by enterprises worldwide for its scalability, ease of use, and advanced security features."
             group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right" />
          <CollapsiblePoints data={idaasOktaFeatures} />
          <ThreePoints points={oktaBenefits} />
    
          <UseCases cases={oktaUseCases} />
    
          <SubHeader
            title="Microsoft Entra ID (formerly Azure AD) for SSO and Identity and Access Managemenet (IAM)"
            description="Microsoft Entra ID, previously known as Azure Active Directory, is Microsoft’s comprehensive cloud-based identity and access management solution. It provides seamless SSO capabilities across Microsoft’s ecosystem and thousands of third-party applications, ensuring efficient and secure user authentication."
             group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right" />
          <CollapsiblePoints data={entraFeatures} />
    
          <ThreePoints points={entraBenefits} />
    
          <UseCases cases={entraUseCases} />
    
    
          {/* <SubHeader
            title="Cisco DUO + ISE + Umbrella for SSO and Identity and Access Managemenet (IAM)"
            description="Cisco offers a comprehensive suite of identity and access management solutions combining DUO (multi-factor authentication and SSO), Identity Services Engine (ISE), and Umbrella (cloud security). Together, they deliver robust SSO capabilities with advanced threat detection and secure access controls."
            group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right"/>
    
          <CollapsiblePoints data={ciscoDuoFeatures} />
    
          <ThreePoints points={ciscoDuoBenefits} />
    
          <UseCases cases={ciscoDuoUseCases} /> */}
    
          <SubHeader
            title="Forti Authenticator for SSO and Identity and Access Managemenet (IAM)"
            description="Forti Authenticator is Fortinet’s enterprise-grade identity and access management solution. It provides secure and seamless SSO capabilities while integrating with Fortinet’s Security Fabric for holistic threat protection."
             group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right"/>
    
          <CollapsiblePoints data={fortinetKeyFeatures} />
    
          <ThreePoints points={fortinetBenefits} />
    
          <UseCases cases={fortinetUseCases} />
    
    
          <SubHeader
            title="Palo Alto GlobalProtect for SSO and Identity and Access Managemenet (IAM)"
            description="Palo Alto Networks’ GlobalProtect provides secure remote access with integrated SSO capabilities. Designed for organizations prioritizing secure VPN connections and user authentication, GlobalProtect ensures seamless and secure access to corporate resources."
             group="Identity and Access Managemenet (IAM)" 
            section="MFA"
            position="right" />
    
          <CollapsiblePoints data={paloAltoFeatures} />
    
          <ThreePoints points={paloAltoBenefits} />
    
          <UseCases cases={paloAltoUseCases} />
    
          <Header title="User Behavior Analytics (UBA)"  />
    
      <SubHeader
            title="Rapid7"
            description="Rapid7 is a cybersecurity and IT risk management company that provides a range of solutions designed to identify vulnerabilities, manage incidents, and monitor user behavior. Its user behavior analytics (UBA) solution is part of its larger security platform, which offers visibility and control over network activities, detecting threats, and improving security posture."
            group="Identity and Access Managemenet (IAM)" 
            section="UBA"
            website="sd"
            position="right" />
    
    <CollapsiblePoints data={rapidFeatures} />
    
    <SubHeader
            title="IBM QRadar"
            description="IBM QRadar is a leading Security Information and Event Management (SIEM) solution that integrates data from across an organization’s IT environment to provide comprehensive threat detection, monitoring, and analysis. QRadar offers deep insights into user activities through its advanced UBA capabilities, enhancing security visibility and response."
            group="Identity and Access Managemenet (IAM)" 
            section="UBA"
            website="sd"
            position="right" />
            
            <CollapsiblePoints data={QRadarFeatures} />
       <SubHeader
      title="Proofpoint"
      description="Proofpoint is a cybersecurity company specializing in cloud-based threat intelligence and protection, particularly against email-based threats. It provides advanced solutions for email security, data protection, and user awareness. Proofpoint’s UBA capabilities extend into its broader user behavior monitoring solutions, which help organizations protect identities and data in real-time." 
      group="Identity and Access Managemenet (IAM)"
      section="UBA"
      website="sd"
      position="right"
    />
    <CollapsiblePoints data={ProofpointFeatures} />
    
    
    <SubHeader
      title="Microsoft Defender for Identity"
      description="Microsoft Defender for Identity (formerly Azure ATP) is a cloud-based security solution focused on protecting user identities and detecting insider threats. It integrates with Microsoft 365 environments and offers advanced analytics to monitor user behavior and identify potential security risks associated with identity and access." 
      group="Identity and Access Managemenet (IAM)"
      section="UBA"
      website="sd"
      position="right"
    />
    <CollapsiblePoints data={identityFeatures} />
    
    
    <SubHeader
      title="Fortinet FortiInsight"
      description="Fortinet is a global leader in broad, integrated, and high-performance cybersecurity solutions, with FortiInsight being part of its advanced security platform. FortiInsight leverages UBA to detect and respond to insider threats, ensuring a proactive approach to identity and access management security." 
      group="Identity and Access Managemenet (IAM)"
      section="UBA"
      website="sd"
      position="right"
    />
    <CollapsiblePoints data={FortinetFeatures} />
    
    
    <SubHeader
      title="IBM QRadar"
      description="IBM QRadar is a leading Security Information and Event Management (SIEM) solution that integrates data from across an organization’s IT environment to provide comprehensive threat detection, monitoring, and analysis. QRadar offers deep insights into user activities through its advanced UBA capabilities, enhancing security visibility and response."
      group="Identity and Access Managemenet (IAM)"
      section="UBA"
      website="sd"
      position="right"
    />
    <CollapsiblePoints data={QRadarFeatures} />
    
          
    
    
        </Section>
      
    </>
  )
}

export default Idass
