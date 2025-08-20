import { prismaFeatures , casbPaloAltoBenefits,idaasIBMFeatures ,casbPaloAltoFeatures , casbTrendMicroFeatures ,casbTrendMicroBenefits, casbProofPointBenefits , casbProofPointFeatures   ,idaasOktaFeatures   , idaasMicrosoftFeatures, idaasGoogleFeatures, idaasDuoSecFeatures, fortiDLPBenefits, dlpCiscoBenefits, dlpPaloAltoFeatures, dlpPaloAltoBenefits, dlpTrendMicroFeatures, dlpCiscoFeatures, dlpVersaFeatures, dlpVersaBenefits, dlpTrendMicroBenefits, segProofPointFeatures, segProofPointBenefits, segBarracudaFeatures, segBarracudaBenefits, segCiscoFeatures, segCiscoBenefits, segFortinetFeatures, segFortinetBenefits, segTrendMicroFeatures, segTrendMicroBenefits, segSecurenceFeatures, segSecurenceBenefits, spamProofpointBenefits, spamProofpointFeatures, emailProofpointFeatures, emailProofpointBenefits, dataProofpointFeatures, edrCrowdStrikeFeatures, edrCrowdStrikeBenefits, mdmSentinelFeatures, mdmSentinelBenefits, appVMwareFeatures, appVMwareBenefits, patchMicrosoftFeatures, pathMicrosoftBenefits,identityFeatures, ciscoFeatures, microsoftEntraFeatures, googleAuthFeatures, fortiTokenFeatures, identityUseCases, ciscoUseCases, microsoftUseCases, googleAuthenticatorUseCases, fortiTokenUseCases, globalProtectFeatures, globalProtectUseCases, oktaFeatures, oktaBenefits, oktaUseCases, entraBenefits, entraFeatures, entraUseCases, ciscoDuoFeatures, ciscoDuoBenefits, ciscoDuoUseCases, fortinetKeyFeatures, fortinetUseCases, fortinetBenefits, paloAltoFeatures, paloAltoBenefits, paloAltoUseCases, rapidFeatures, QRadarFeatures, ProofpointFeatures, FortinetFeatures, fortiFeatures, nextGenFeatures, firepowerFeatures, barraFeatures, fortigateFeatures, altoNetworkFeatures, trendFeatures, intrusionFeatures, anyConnectFeatures, FortiClientFeatures, paloglobalFeatures, ciscoIdentity, fortiNACPoints, clearPassPoints, prismaAccessPoints, ciscoEnterprisePoints, arubaNetworkPoints, vmwareNetworkPoints, paloAltoZtaPoints, icsFeature, icsBenefits, fortinetICSFeatures, fortinetICSBenefits, paloAltoICSFeatures, paloAltoICSBenefits, tenableFeatures, tenableBenefits, arubaFeatures, arubaBenefits, darktraceFeatures, darktraceBenefits, sentinelOneFeatures, sentinelOneBenefits, ciscoScadaFeatures, ciscoScadaBenefits, sentinelOneScadaBenefits, sentinelOneScadaFeatures, darktraceScadaBenefits, darktraceScadaFeatures, arubaScadaBenefits, arubaScadaFeatures, tenableScadaBenefits, tenableScadaFeatures, paloAltoScadaBenefits, paloAltoScadaFeatures, fortinetScadaBenefits, fortinetScadaFeatures, ciscoCipFeatures, arcticWolfCipFeatures, sentinelOneCipFeatures, darktraceCipFeatures, arubaCipFeatures, tenableCipFeatures, paloCipFeatures, fortinetCipFeatures, arcticWolfIotSecurityFeatures, sentinelOneIotSecurityFeatures, darktraceIotSecurityFeatures, arubaIotSecurityFeatures, tenableIotSecurityFeatures, paloAltoIotSecurityFeatures, fortinetIotSecurityFeatures, ciscoIotSecurityFeatures, ciscoSecureXFeatures, ciscoSecureXUseCases, fortiSIEMFeatures, fortiSIEMUseCases, ibmQradarFeatures, ibmQradarUseCases, arcticWolfFeatures, arcticWolfUseCases, ciscoMdrFeatures, fortiMdrFeatures, sentinelOneXdrFeatures, arcticWolfMdrFeatures, falconInsightFeatures, ciscoSecureFeatures, fortiXDRFeatures, sentinelOneXDRFeatures, arcticWolfXDRFeatures, crowdStrikeFalconXDRFeatures, ciscoSoarFeatures, ciscoSoarBenefits, qradarSoarFeatures, qradarSoarBenefits, darktraceSoarFeatures, darktraceSoarBenefits, fortiSoarFeatures, fortiSoarBenefits } from "@/lib/data";

 import { awsFeatures } from "@/lib/data";
 import { microsoftFeatures } from "@/lib/data";
import { googleFeatures } from "@/lib/data";
import { cwppFeatures } from "@/lib/data";
 import { microFeatures } from "@/lib/data";
 import { cwppPrismaFeatures } from "@/lib/data";
import { cwppPrismaBenefits } from "@/lib/data";
import { cwppMicroFeatures } from "@/lib/data";
import { cwppMicroBenefits } from "@/lib/data";
import { crowdStrikeFeatures } from "@/lib/data";
import { crowdStrikeBenefits } from "@/lib/data";
import { cwppMicrosoftFeatures } from "@/lib/data";
import { cwppMicrosoftBenefits } from "@/lib/data";
import { cwppAWSFeatures } from "@/lib/data";
import { cwppAWSBenefits } from "@/lib/data";
import { cwppCloudFeatures } from "@/lib/data";
import { cwppCloudBenefits } from "@/lib/data";
import { saseCiscoFeatures } from "@/lib/data";
import { fortiSASEFeatures  } from "@/lib/data";
import { sasePrismaFeatures  } from "@/lib/data";
import { saseVMwareFeatures  } from "@/lib/data";
import { barracudaFeatures   } from "@/lib/data";
import { saseVersaFeatures   } from "@/lib/data";
import { casbMicrosoftFeatures   } from "@/lib/data";
import {  casbCloudLockBenefits } from "@/lib/data";
import { casbCloudLockFeatures   } from "@/lib/data";
import { UseCases } from "../set-1/usecases";
import { NetworkSection } from "./networkSection";
import Section from "@/components/Section";
import { CollapsiblePoints } from "@/components/shared/CollapisblePoints";
import { ThreePoints } from "@/components/shared/ThreePoints";
import Header from "../Header";
import SubHeader from "../SubHeader";


// import { prismaFeatures } from "@/lib/data";



export const CloudSecurity = () => (
  <>
    
    <Section id="cloud-security" data-id="cloud-security">


      {/* Cloud Security Posture Management (CSPM) */}
      <Header title="Cloud Security Posture Management (CSPM)"  />

      <SubHeader
        title="Prisma Cloud by Palo Alto Networks"
        description="Prisma Cloud is a comprehensive Cloud Security Posture Management (CSPM) solution by Palo Alto Networks, designed to safeguard cloud environments across multiple public clouds, including AWS, Azure, Google Cloud, and more. It provides organizations with visibility, compliance, and risk management capabilities to ensure the security of cloud-native applications, infrastructure, and data."
        group="Cloud Security" 
        section="CSPM"
        position="right"
        />
      <CollapsiblePoints data={prismaFeatures} />

      <SubHeader
        title="AWS Security Hub"
        description="AWS Security Hub is Amazon Web Services’ (AWS) native CSPM solution designed to centralize security findings and provide a unified view of an organization’s security posture across AWS environments. It integrates with AWS services and third-party security tools to provide centralized insights and automate security workflows." 
         group="Cloud Security" 
        section="CSPM"
        position="right"
        />
        
      <CollapsiblePoints data={awsFeatures} />


      <SubHeader
        title="Microsoft Defender for Cloud"
        description="Microsoft Defender for Cloud is a unified cloud security posture management solution that offers protection across hybrid and multi-cloud environments. It provides visibility, threat protection, and compliance management for workloads hosted on Azure, AWS, and Google Cloud."
        group="Cloud Security" 
        section="CSPM"
        position="right" />
      <CollapsiblePoints data={microsoftFeatures} />

      <SubHeader
        title="Google Security Command Center"
        description="Google Security Command Center (SCC) is a security and risk management tool for Google Cloud environments. It provides centralized visibility into the security posture of Google Cloud services, helping organizations to detect threats, monitor configurations, and ensure compliance with security best practices."
        group="Cloud Security" 
        section="CSPM"
        position="right"
        />
      <CollapsiblePoints data={googleFeatures} />



      <SubHeader
        title="FortiCWP (Cloud Workload Protection)"
        description="FortiCWP is Fortinet’s Cloud Workload Protection solution designed to secure applications and workloads across multi-cloud environments. It provides visibility, compliance, and threat detection for cloud-native workloads, including containers, serverless computing, and virtual machines."
       group="Cloud Security" 
        section="CSPM"
        position="right" />
      <CollapsiblePoints data={cwppFeatures} />


      <SubHeader
        title="Trend Micro Cloud One "
        description=" Trend Micro Cloud One is a security platform for cloud environments that combines CSPM, cloud workload protection, container security, and more. It is designed to offer unified security for cloud services, workloads, and applications. " 
        group="Cloud Security" 
        section="CSPM"
        position="right"
        />
      <CollapsiblePoints data={microFeatures} />


      {/* Cloud Workload Protection Platforms (CWPP) */}

      <Header title="Cloud Workload Protection Platforms (CWPP)"  />
      <SubHeader
        title="Prisma Cloud by Palo Alto Networks"
        description=" Prisma Cloud, a comprehensive cloud-native security platform, provides robust cloud workload protection for hybrid and multi-cloud environments. It combines a wide range of security capabilities to protect cloud-native applications and infrastructure. The platform is designed to ensure visibility, compliance, and security across workloads, containers, serverless functions, and virtual machines (VMs) in public, private, and hybrid cloud environments. "
        group="Cloud Security" 
        section="CWPP"
        position="right"
        />
      <CollapsiblePoints data={cwppPrismaFeatures} />

      <ThreePoints points={cwppPrismaBenefits} />

      <SubHeader
        title="Trend Micro Cloud One"
        description="Trend Micro Cloud One is a cloud-native security platform designed to secure workloads across cloud environments. It offers integrated cloud security capabilities for workloads, containers, and serverless functions, focusing on continuous protection and visibility. Cloud One is built to support workloads in both public and hybrid clouds like AWS, Azure, and Google Cloud."
       group="Cloud Security" 
        section="CWPP"
        position="right" />
      <CollapsiblePoints data={cwppMicroFeatures} />

      <ThreePoints points={cwppMicroBenefits} />


      <SubHeader
        title="CrowdStrike Falcon for Cloud Workloads"
        description="CrowdStrike Falcon for Cloud Workloads provides next-generation protection for cloud workloads across public cloud environments. The platform leverages the power of the CrowdStrike Falcon endpoint protection platform, using a lightweight agent to secure workloads from threats and vulnerabilities in real time. It delivers workload security through a cloud-native architecture, integrating with AWS, Azure, and Google Cloud." 
        group="Cloud Security" 
        section="CWPP"
        position="right"
        />
      <CollapsiblePoints data={crowdStrikeFeatures} />

      <ThreePoints points={crowdStrikeBenefits} />


      <SubHeader
        title="Microsoft Defender for Cloud"
        description="Microsoft Defender for Cloud (formerly Azure Security Center) is a comprehensive cloud-native security platform that protects workloads across hybrid and multi-cloud environments. It offers cloud workload protection as part of Microsoft’s broader cloud security suite, with deep integration into Azure and support for AWS and Google Cloud environments. Defender for Cloud provides continuous security posture management and advanced threat protection for workloads."
        group="Cloud Security" 
        section="CWPP"
        position="right" />
      <CollapsiblePoints data={cwppMicrosoftFeatures} />

      <ThreePoints points={cwppMicrosoftBenefits} />

      <SubHeader
        title="AWS Workload Protection"
        description="AWS Workload Protection leverages Amazon Web Services’ native security tools and capabilities to safeguard workloads in the AWS cloud environment. The platform integrates multiple AWS security services to offer comprehensive protection against threats, vulnerabilities, and misconfigurations across cloud workloads." 
        group="Cloud Security" 
        section="CWPP"
        position="right"
        />
      <CollapsiblePoints data={cwppAWSFeatures} />

      <ThreePoints points={cwppAWSBenefits} />

      <SubHeader
        title="Google Cloud Security Command Center"
        description="Google Cloud Security Command Center (SCC) is a security management platform designed to provide centralized visibility and control over Google Cloud workloads. It focuses on detecting vulnerabilities, misconfigurations, and security threats across various Google Cloud assets, providing insights to mitigate potential risks to workloads."
        group="Cloud Security" 
        section="CWPP"
        position="right" />
      <CollapsiblePoints data={cwppCloudFeatures} />

      <ThreePoints points={cwppCloudBenefits} />


      {/* Secure Access Service Edge (SASE) */}
      <Header title="Secure Access Service Edge (SASE)" />

      <SubHeader
        title="Cisco Umbrella"
        description="Cisco Umbrella is a cloud-delivered security solution that provides a range of services to protect users and networks from cyber threats. Umbrella combines Secure Web Gateway (SWG), DNS-layer security, firewall, and cloud-delivered firewall capabilities, with integration into Cisco SD-WAN for secure, cloud-based access."
        group="Cloud Security" 
        section="SASE"
        position="right" />
      <CollapsiblePoints data={saseCiscoFeatures} />



      <SubHeader
        title="FortiSASE"
        description="FortiSASE is Fortinet’s solution for secure access service edge (SASE), integrating cloud-delivered security services with networking capabilities for end-to-end protection across all users, devices, and locations." 
        group="Cloud Security" 
        section="SASE"
        position="right" 
        />
      <CollapsiblePoints data={fortiSASEFeatures} />


      <SubHeader
        title="Palo Alto Prisma Access"
        description="Prisma Access by Palo Alto Networks is a comprehensive SASE solution that provides secure access to cloud applications, internet resources, and private applications regardless of user location. It delivers enterprise-grade security with cloud-native architecture. "
        group="Cloud Security" 
        section="SASE"
        position="right"  />
      <CollapsiblePoints data={sasePrismaFeatures} />

      <SubHeader
        title="  VMware SASE"
        description="VMware’s SASE solution combines SD-WAN, secure web gateway, cloud firewall, and ZTNA into a single platform designed to provide secure, high-performance access to cloud applications and data." 
        group="Cloud Security" 
        section="SASE"
        position="right" />
      <CollapsiblePoints data={saseVMwareFeatures} />


      <SubHeader
        title=" Barracuda SecureEdge "
        description="Barracuda CloudGen WAN is a SASE solution that provides secure, scalable SD-WAN capabilities to optimize cloud access, protect user data, and simplify network management."
        group="Cloud Security" 
        section="SASE"
        position="right" />
      <CollapsiblePoints data={barracudaFeatures} />

      <SubHeader
        title=" Versa SASE "
        description="Versa SASE is a comprehensive, cloud-delivered SASE platform that offers SD-WAN, ZTNA, secure web gateway, cloud firewall, and more in a single, integrated solution." 
        group="Cloud Security" 
        section="SASE"
        position="right" />

      <CollapsiblePoints data={saseVersaFeatures} />


      {/* Cloud Access Security Brokers (CASB) */}

      <Header title="Cloud Access Security Brokers (CASB)" />
      <SubHeader
        title=" Microsoft Defender - CASB "
        description="Microsoft Defender for Cloud Apps, formerly known as Microsoft Cloud App Security, is a robust CASB solution that provides comprehensive visibility and control over your cloud applications. Integrated with Microsoft 365, Defender for Cloud Apps enables organizations to secure their cloud environments by discovering, monitoring, and controlling the use of cloud applications."
        group="Cloud Security" 
        section="CASB"
        position="right"  />
      <CollapsiblePoints data={casbMicrosoftFeatures} />


      <SubHeader
        title=" Cisco Cloudlock - CASB "
        description="Cisco Cloudlock is a cloud-native CASB solution that provides protection for cloud environments by monitoring and controlling data in cloud applications. It offers a user-friendly interface and focuses on reducing the risk associated with cloud adoption, including data breaches, compliance violations, and insider threats. "
        group="Cloud Security" 
        section="CASB"
        position="right" />
      <CollapsiblePoints data={casbCloudLockFeatures} />

      <ThreePoints points={casbCloudLockBenefits} />

      <SubHeader
        title=" Palo Alto Networks - CASB"
        description="Palo Alto Networks' SaaS Security (formerly known as Netskope SaaS Security) delivers a cloud-native CASB solution that helps organizations secure their Software-as-a-Service (SaaS) applications and data. It leverages the power of Palo Alto Networks' threat intelligence to detect, mitigate, and prevent security risks within cloud environments."
        group="Cloud Security" 
        section="CASB"
        position="right"  />
      <CollapsiblePoints data={casbPaloAltoFeatures} />

      <ThreePoints points={casbPaloAltoBenefits} />

      <SubHeader
        title=" Trend Micro Cloud App Security - CASB"
        description=" Trend Micro Cloud App Security is a comprehensive CASB solution designed to protect organizations' cloud-based applications and services, with strong data loss prevention, threat protection, and compliance features. It integrates with popular platforms like Microsoft 365, Google Workspace, and Salesforce to secure data and prevent security breaches."
        group="Cloud Security" 
        section="CASB"
        position="right"  />
      <CollapsiblePoints data={casbTrendMicroFeatures} />

      <ThreePoints points={casbTrendMicroBenefits} />


      <SubHeader
        title=" Proofpoint - CASB"
        description=" Proofpoint’s CASB solution focuses on securing cloud applications and protecting sensitive data within the cloud. With a user-centric approach, Proofpoint allows organizations to gain visibility and control over their cloud environments while addressing insider threats and regulatory compliance."
        group="Cloud Security" 
        section="CASB"
        position="right" />
      <CollapsiblePoints data={casbProofPointFeatures} />

      <ThreePoints points={casbProofPointBenefits} />


      {/* Identity as a Service (IDaaS) */}

      <Header title="Identity as a Service (IDaaS)" />

      <SubHeader
        title=" Okta (IDaaS)"
        description="Okta is a leading provider of Identity and Access Management (IAM) services with a cloud-based platform designed to manage and secure user authentication and access across a variety of applications, devices, and services. As an Identity as a Service (IDaaS) provider, Okta delivers comprehensive security features including single sign-on (SSO), multi-factor authentication (MFA), lifecycle management, and more."
        group="Cloud Security" 
        section="CASB"
        position="right" />
      <CollapsiblePoints data={idaasOktaFeatures} />

      <SubHeader
        title=" Microsoft Azure AD (IDaaS)"
        description="Microsoft Azure Active Directory (Azure AD) is a comprehensive cloud-based identity and access management service that provides a suite of tools to securely manage users, devices, and applications within the cloud. Azure AD is part of Microsoft's cloud ecosystem, offering seamless integration with Microsoft 365, Windows 10, and thousands of third-party applications."
       group="Cloud Security" 
        section="CASB"
        position="right" />
      <CollapsiblePoints data={idaasMicrosoftFeatures} />




      <SubHeader
        title=" Google Workspace Identity (IDaaS)"
        description="Google Workspace Identity is Google’s identity and access management platform designed to offer secure authentication and access controls across the suite of Google Cloud services. It is part of Google Cloud’s comprehensive security architecture, providing businesses with the tools to manage user identities, devices, and applications in the cloud."
        group="Cloud Security" 
        section="CASB"
        position="right" />
      <CollapsiblePoints data={idaasGoogleFeatures} />



      <SubHeader
        title=" IBM Security Verify (IDaaS)"
        description="IBM Security Verify is a cloud-native identity and access management platform that helps organizations provide secure and seamless user access to applications and services while ensuring robust protection against identity-related risks. It supports a broad range of identity management capabilities such as authentication, identity governance, and user provisioning."
        group="Cloud Security" 
        section="CASB"
        position="right" />
      <CollapsiblePoints data={idaasIBMFeatures} />

      <SubHeader
        title="Duo Security by Cisco (IDaaS)"
        description="Duo Security, a Cisco company, offers a cloud-based IDaaS platform known for its simplicity and effectiveness in securing user identities and devices. It specializes in multi-factor authentication (MFA), device security, and secure access to cloud and on-premises applications, making it a popular choice for organizations looking to protect their digital assets."
        group="Cloud Security" 
        section="CASB"
        position="right"  />
      <CollapsiblePoints data={idaasDuoSecFeatures} />

    </Section>
    {/* Data Loss Prevention (DLP)  DATA SECURITY */}

    <Section id="data-security" data-id="data-security">

      <Header title="Data Loss Prevention (DLP)"/>
      <SubHeader
        title=" FortiDLP"
        description="Fortinet's FortiDLP is a comprehensive data loss prevention solution that provides organizations with real-time protection to safeguard sensitive data across endpoints, networks, and the cloud. It leverages Fortinet’s advanced security fabric architecture, enabling seamless integration with FortiGate firewalls, FortiMail, FortiWeb, and other Fortinet products."
        group="Data Security" 
        section="DLP"
        position="right"  />
      <CollapsiblePoints data={idaasIBMFeatures} />

      <ThreePoints points={fortiDLPBenefits} />


      <SubHeader
        title=" Cisco Umbrella- DLP "
        description="Cisco Umbrella is a cloud-delivered network security platform that provides comprehensive DLP capabilities, particularly focusing on protecting data from leaks during cloud-based activities. Cisco Umbrella integrates DLP with its suite of advanced threat protection tools, including DNS-layer security, cloud firewall, and secure web gateway."
        group="Data Security" 
        section="DLP"
        position="right"/>
      <CollapsiblePoints data={dlpCiscoFeatures} />

      <ThreePoints points={dlpCiscoBenefits} />


      <SubHeader
        title=" Palo Alto Prisma - DLP "
        description="Palo Alto Prisma is a cloud-native platform designed to secure data and applications across cloud environments. Prisma’s DLP capabilities provide comprehensive protection for organizations that rely on cloud infrastructure and SaaS applications."
        group="Data Security" 
        section="DLP"
        position="right" />
      <CollapsiblePoints data={dlpPaloAltoFeatures} />

      <ThreePoints points={dlpPaloAltoBenefits} />


      <SubHeader
        title=" Trend Micro - DLP "
        description="Trend Micro DLP is a robust solution designed to protect sensitive information across endpoints, networks, and cloud environments. It leverages AI and machine learning to provide proactive DLP protection, ensuring that data is always secure, whether it’s at rest, in transit, or in use."
        group="Data Security" 
        section="DLP"
        position="right"/>
      <CollapsiblePoints data={dlpTrendMicroFeatures} />

      <ThreePoints points={dlpTrendMicroBenefits} />

      <SubHeader
        title=" Versa Networks - DLP"
        description="Versa Networks provides a comprehensive SD-WAN and secure access service edge (SASE) solution that includes data loss prevention as part of its security services. Versa’s DLP capabilities are tightly integrated with its SASE platform to secure data across distributed environments."
        group="Data Security" 
        section="DLP"
        position="right"/>
      <CollapsiblePoints data={dlpVersaFeatures} />

      <ThreePoints points={dlpVersaBenefits} />



      <SubHeader
        title=" Microsoft Purview "
        description="Microsoft Purview (formerly Microsoft 365 Compliance Center) provides advanced data loss prevention features within Microsoft 365 environments. It helps organizations discover, classify, and protect sensitive data across Microsoft 365 services, including SharePoint, OneDrive, Teams, and Exchange."
        group="Data Security" 
        section="DLP"
        position="right" />
      <CollapsiblePoints data={dlpTrendMicroFeatures} />

      <ThreePoints points={dlpTrendMicroBenefits} />
    </Section>

    <Section id="email-security" data-id="email-security">


      {/* Secure Email Gateways (SEGs) */}
      <Header title="Secure Email Gateways (SEGs)"  />

      <SubHeader
        title="Proofpoint"
        description="Proofpoint is a market leader in email security and compliance, offering advanced threat protection through its cloud-based platform. Its solution integrates machine learning and advanced analytics to identify and neutralize sophisticated threats."
        group="Email Security" 
        section="SEGs"
        position="right"
         />
      <CollapsiblePoints data={segProofPointFeatures} />

      <ThreePoints points={segProofPointBenefits} />


      <SubHeader
        title="Barracuda"
        description="Barracuda’s Email Security Gateway is a robust solution for protecting businesses against a wide range of email threats. It offers both on-premises and cloud-based deployment options."
        group="Email Security" 
        section="SEGs"
        position="right"/>
      <CollapsiblePoints data={segBarracudaFeatures} />

      <ThreePoints points={segBarracudaBenefits} />

      <SubHeader
        title="CISCO"
        description="Cisco’s Email Security Appliance (ESA) provides robust protection against email threats, leveraging the power of Cisco’s Talos Intelligence Group for real-time threat analysis."
        group="Email Security" 
        section="SEGs"
        position="right" />
      <CollapsiblePoints data={segCiscoFeatures} />

      <ThreePoints points={segCiscoBenefits} />

      <SubHeader
        title="Fortinet"
        description="Fortinet’s FortiMail is an advanced email security solution that provides multi-layered protection against email-based threats. It is part of the Fortinet Security Fabric, offering comprehensive integration."
        group="Email Security" 
        section="SEGs"
        position="right" />
      <CollapsiblePoints data={segFortinetFeatures} />

      <ThreePoints points={segFortinetBenefits} />

      <SubHeader
        title="Trend Micro"
        description="Trend Micro’s Email Security solution offers advanced protection through its cloud-native platform. It is particularly effective in defending against phishing and advanced persistent threats (APTs)."
        group="Email Security" 
        section="SEGs"
        position="right"/>
      <CollapsiblePoints data={segTrendMicroFeatures} />

      <ThreePoints points={segTrendMicroBenefits} />


      <SubHeader
        title="Securence"
        description="Securence provides reliable email filtering and protection services tailored for businesses of all sizes. Known for its simplicity and effectiveness, it focuses on delivering a robust solution for spam and malware."
        group="Email Security" 
        section="SEGs"
        position="right"/>
      <CollapsiblePoints data={segSecurenceFeatures} />

      <ThreePoints points={segSecurenceBenefits} />


      {/* Spam Filters */}
      <Header title="Spam Filters"  />

      <SubHeader
        title="Proofpoint"
        description="Proofpoint is a leader in cybersecurity solutions, focusing on protecting organizations from advanced threats and compliance risks. Its email security solutions are designed to identify and block phishing, ransomware, and business email compromise (BEC) attacks."
        group="Email Security" 
        section="Spam Filters"
        position="right"/>
      <CollapsiblePoints data={spamProofpointFeatures} />

      <ThreePoints points={spamProofpointBenefits} />


      {/* Email Encryption */}
      <Header title="Email Encryption" />

      <SubHeader
        title="Proofpoint"
        description="Proofpoint is a leader in cybersecurity, offering advanced email encryption solutions designed to protect sensitive communications and ensure regulatory compliance. Proofpoint’s encryption technology uses policy-based encryption to automatically secure messages containing sensitive information, reducing the risk of human error. Messages are encrypted in transit and can only be accessed by authorized recipients through secure portals or direct decryption."
         group="Email Security" 
        section="Email Encryption"
        position="right" />
      <CollapsiblePoints data={emailProofpointFeatures} />

      <ThreePoints points={emailProofpointBenefits} />

      {/* Data Loss Prevention for Email */}
      <Header title="Data Loss Prevention (DLP) for Email" />

      <SubHeader
        title="Proofpoint"
        description="Proofpoint is a leading cybersecurity company specializing in protecting organizations from advanced threats and compliance risks. Its email encryption solution ensures secure communication by encrypting emails containing sensitive data."
         group="Email Security" 
        section="DLP"
        position="right"  />
      <CollapsiblePoints data={dataProofpointFeatures} />

    </Section>


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

    <Section id="identity-and-access-managemenet(IAM)" data-id="identity-and-access-managemenet(IAM)">

      <Header title="Multi Factor Authentication (MFA)"  />

      <SubHeader
        title="Okta Adaptive MFA"
        description="Okta Adaptive MFA is a robust multi-factor authentication solution that provides dynamic access controls based on user behavior and context. As part of the Okta Identity Cloud, it seamlessly integrates with a wide range of applications, services, and devices to enhance identity and access management."
       group="IAM" 
        section="MFA"
        position="right" />
      <CollapsiblePoints data={identityFeatures} />
      <UseCases cases={identityUseCases} />


      <SubHeader
        title="Cisco Duo"
        description="Cisco Duo offers a user-friendly MFA and zero-trust security platform that ensures secure access to applications and systems. It is known for its simplicity and strong focus on user experience while delivering enterprise-grade security."
         group="IAM" 
        section="MFA"
        position="right" />
      <CollapsiblePoints data={ciscoFeatures} />
      <UseCases cases={ciscoUseCases} />

      <SubHeader
        title="Microsoft Entra ID (Formerly Azure AD)"
        description="Microsoft Entra ID provides comprehensive identity and access management services as part of Microsoft’s Entra suite. It integrates seamlessly with Microsoft 365, Azure, and thousands of third-party applications."
        group="IAM" 
        section="MFA"
        position="right"/>

      <CollapsiblePoints data={microsoftEntraFeatures} />
      <UseCases cases={microsoftUseCases} />

      <SubHeader
        title="Google Authentication"
        description="Google Authentication is a lightweight and effective MFA solution designed for personal and business users. It is particularly known for its Google Authenticator app, which generates time-based one-time passwords (TOTP)."
         group="IAM" 
        section="MFA"
        position="right" />

      <CollapsiblePoints data={googleAuthFeatures} />
      <UseCases cases={googleAuthenticatorUseCases} />

      <SubHeader
        title="FortiToken"
        description="FortiToken, developed by Fortinet, is a comprehensive MFA solution that combines hardware and software tokens to enhance security for enterprise systems and applications. It integrates seamlessly with the Fortinet Security Fabric."
         group="IAM" 
        section="MFA"
        position="right" />

      <CollapsiblePoints data={fortiTokenFeatures} />
      <UseCases cases={fortiTokenUseCases} />

      <SubHeader
        title="Palo Alto Networks – GlobalProtect VPN"
        description="GlobalProtect by Palo Alto Networks ensures secure remote access through a robust VPN solution. When integrated with multi-factor authentication (MFA), it offers strong identity verification for enterprise systems. It works natively with Palo Alto’s security infrastructure to provide comprehensive protection."
         group="IAM" 
        section="MFA"
        position="right" />

      <CollapsiblePoints data={globalProtectFeatures} />

      <UseCases cases={globalProtectUseCases} />

      <Header title="Multi Factor Authentication (MFA)"  />

      <SubHeader
        title="Okta for Single Sign-On (SSO) and Identity Access Management (IAM)"
        description="Okta is a leading cloud-based identity and access management platform, offering robust Single Sign-On (SSO) capabilities. It enables organizations to streamline user authentication across multiple applications while ensuring high levels of security and compliance. As a pioneer in the identity management space, Okta is trusted by enterprises worldwide for its scalability, ease of use, and advanced security features."
         group="IAM" 
        section="MFA"
        position="right" />
      <CollapsiblePoints data={oktaFeatures} />
      <ThreePoints points={oktaBenefits} />

      <UseCases cases={oktaUseCases} />

      <SubHeader
        title="Microsoft Entra ID (formerly Azure AD) for SSO and IAM"
        description="Microsoft Entra ID, previously known as Azure Active Directory, is Microsoft’s comprehensive cloud-based identity and access management solution. It provides seamless SSO capabilities across Microsoft’s ecosystem and thousands of third-party applications, ensuring efficient and secure user authentication."
         group="IAM" 
        section="MFA"
        position="right" />
      <CollapsiblePoints data={entraFeatures} />

      <ThreePoints points={entraBenefits} />

      <UseCases cases={entraUseCases} />


      <SubHeader
        title="Cisco DUO + ISE + Umbrella for SSO and IAM"
        description="Cisco offers a comprehensive suite of identity and access management solutions combining DUO (multi-factor authentication and SSO), Identity Services Engine (ISE), and Umbrella (cloud security). Together, they deliver robust SSO capabilities with advanced threat detection and secure access controls."
        group="IAM" 
        section="MFA"
        position="right"/>

      <CollapsiblePoints data={ciscoDuoFeatures} />

      <ThreePoints points={ciscoDuoBenefits} />

      <UseCases cases={ciscoDuoUseCases} />

      <SubHeader
        title="Forti Authenticator for SSO and IAM"
        description="Forti Authenticator is Fortinet’s enterprise-grade identity and access management solution. It provides secure and seamless SSO capabilities while integrating with Fortinet’s Security Fabric for holistic threat protection."
         group="IAM" 
        section="MFA"
        position="right"/>

      <CollapsiblePoints data={fortinetKeyFeatures} />

      <ThreePoints points={fortinetBenefits} />

      <UseCases cases={fortinetUseCases} />


      <SubHeader
        title="Palo Alto GlobalProtect for SSO and IAM"
        description="Palo Alto Networks’ GlobalProtect provides secure remote access with integrated SSO capabilities. Designed for organizations prioritizing secure VPN connections and user authentication, GlobalProtect ensures seamless and secure access to corporate resources."
         group="IAM" 
        section="MFA"
        position="right" />

      <CollapsiblePoints data={paloAltoFeatures} />

      <ThreePoints points={paloAltoBenefits} />

      <UseCases cases={paloAltoUseCases} />

      <Header title="User Behavior Analytics (UBA)"  />

  <SubHeader
        title="Rapid7"
        description="Rapid7 is a cybersecurity and IT risk management company that provides a range of solutions designed to identify vulnerabilities, manage incidents, and monitor user behavior. Its user behavior analytics (UBA) solution is part of its larger security platform, which offers visibility and control over network activities, detecting threats, and improving security posture."
        group="IAM" 
        section="UBA"
        website="sd"
        position="right" />

<CollapsiblePoints data={rapidFeatures} />

<SubHeader
        title="IBM QRadar"
        description="IBM QRadar is a leading Security Information and Event Management (SIEM) solution that integrates data from across an organization’s IT environment to provide comprehensive threat detection, monitoring, and analysis. QRadar offers deep insights into user activities through its advanced UBA capabilities, enhancing security visibility and response."
        group="IAM" 
        section="UBA"
        website="sd"
        position="right" />
        
        <CollapsiblePoints data={QRadarFeatures} />
   <SubHeader
  title="Proofpoint"
  description="Proofpoint is a cybersecurity company specializing in cloud-based threat intelligence and protection, particularly against email-based threats. It provides advanced solutions for email security, data protection, and user awareness. Proofpoint’s UBA capabilities extend into its broader user behavior monitoring solutions, which help organizations protect identities and data in real-time." 
  group="IAM"
  section="UBA"
  website="sd"
  position="right"
/>
<CollapsiblePoints data={ProofpointFeatures} />


<SubHeader
  title="Microsoft Defender for Identity"
  description="Microsoft Defender for Identity (formerly Azure ATP) is a cloud-based security solution focused on protecting user identities and detecting insider threats. It integrates with Microsoft 365 environments and offers advanced analytics to monitor user behavior and identify potential security risks associated with identity and access." 
  group="IAM"
  section="UBA"
  website="sd"
  position="right"
/>
<CollapsiblePoints data={identityFeatures} />


<SubHeader
  title="Fortinet FortiInsight"
  description="Fortinet is a global leader in broad, integrated, and high-performance cybersecurity solutions, with FortiInsight being part of its advanced security platform. FortiInsight leverages UBA to detect and respond to insider threats, ensuring a proactive approach to identity and access management security." 
  group="IAM"
  section="UBA"
  website="sd"
  position="right"
/>
<CollapsiblePoints data={FortinetFeatures} />


<SubHeader
  title="IBM QRadar"
  description="IBM QRadar is a leading Security Information and Event Management (SIEM) solution that integrates data from across an organization’s IT environment to provide comprehensive threat detection, monitoring, and analysis. QRadar offers deep insights into user activities through its advanced UBA capabilities, enhancing security visibility and response."
  group="IAM"
  section="UBA"
  website="sd"
  position="right"
/>
<CollapsiblePoints data={QRadarFeatures} />

      {/* Network */}
      


    </Section>

    <Section id="network-security" data-id="network-security">
      
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


       <SubHeader
        title="Cisco Firepower"
        description="Cisco Firepower firewalls deliver comprehensive threat defense across networks, endpoints, and applications. These next-generation solutions are powered by Cisco Talos, one of the world’s largest commercial threat intelligence teams."
        group="Network Security" 
        section="Firewall Solutions"
        position="right" />
      <CollapsiblePoints data={firepowerFeatures} />

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
      <SubHeader
        title="Cisco AnyConnect Secure Mobility Client"
        description="Cisco AnyConnect is a leading VPN solution that provides secure, seamless access to enterprise networks from virtually any device, anywhere. Designed with businesses in mind, AnyConnect ensures encrypted communications while enhancing user productivity with its always-on VPN functionality."
         group="Network Security" 
        section="VPN"
        position="right"  />
      <CollapsiblePoints data={anyConnectFeatures} />

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

      <Header title="Network Access Control (NAC)"/>

<SubHeader
        title="Cisco Identity Services Engine (ISE)"
        description="Cisco Identity Services Engine (ISE) is an advanced Network Access Control (NAC) solution designed to enable secure access to network resources. Built with a robust policy-based architecture, ISE provides visibility, control, and automation for device and user access across wired, wireless, and VPN connections. Cisco ISE is particularly effective in enhancing network security by"
        group="Network Security" 
        section="NAC"
        website="ds"
        position="right" />

      <NetworkSection sectionTitle="Cisco ISE is particularly effective in enhancing network security by-"
      subPoints={ciscoIdentity}
      
      />
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

<SubHeader
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
/>

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

    <Section id="operational-technology-security" data-id="operational-technology-security">
        
      <Header title="Industrial Control Systems (ICS) Security" />

      <SubHeader
  title="Cisco ICS Security"
  description="Cisco's Industrial Control Systems (ICS) security solutions are part of its broader Operational Technology (OT) security portfolio. Cisco integrates networking, security, and visibility to safeguard critical ICS environments against evolving cyber threats. Cisco's solutions are built to protect against threats while ensuring operational."
 group="OTS" 
        section="ICS"
        position="right" 
/>

 <CollapsiblePoints data={icsFeature} />
  <ThreePoints points={icsBenefits} />

  <SubHeader
  title="Fortinet ICS Security"
  description="Fortinet delivers robust ICS security solutions through its FortiGuard and FortiGate platforms, designed to protect critical infrastructure environments from cyber threats while maintaining operational reliability."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={fortinetICSFeatures} />
<ThreePoints points={fortinetICSBenefits} />

<SubHeader
  title="Palo Alto ICS Security"
  description="Palo Alto Networks’ ICS security solutions leverage their advanced cloud and AI-powered cybersecurity platforms to protect critical OT assets from advanced cyber threats."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={paloAltoICSFeatures} />
<ThreePoints points={paloAltoICSBenefits} />

<SubHeader
  title="Tenable ICS Security"
  description="Tenable offers specialized ICS security solutions through its Tenable.ot platform, providing unparalleled visibility and risk management for OT environments."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={tenableFeatures} />
<ThreePoints points={tenableBenefits} />
<SubHeader
  title="Aruba Networks ICS Security"
  description="Aruba Networks, a Hewlett Packard Enterprise company, offers advanced ICS security solutions to ensure secure connectivity and operational integrity for OT environments."
 group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={arubaFeatures} />
<ThreePoints points={arubaBenefits} />

<SubHeader
  title="Darktrace ICS Security"
  description="Darktrace uses artificial intelligence (AI) to deliver advanced ICS security solutions. Its self-learning AI protects industrial environments from novel and sophisticated cyber threats."
   group="OTS" 
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

<SubHeader
  title="Cisco SCADA Security Solutions"
  description="Cisco offers a robust suite of security solutions tailored for Supervisory Control and Data Acquisition (SCADA) systems within Operational Technology (OT) environments. Recognizing the unique challenges of industrial networks, Cisco's approach integrates advanced security measures to protect critical infrastructure without compromising operational efficiency."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={ciscoScadaFeatures} />
<ThreePoints points={ciscoScadaBenefits} />


<SubHeader
  title="Fortinet SCADA Security Solutions"
  description="Fortinet delivers specialized security solutions for SCADA systems, focusing on the convergence of IT and OT networks. Their approach emphasizes comprehensive protection, visibility, and control to safeguard critical industrial processes."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={fortinetScadaFeatures} />
<ThreePoints points={fortinetScadaBenefits} />

<SubHeader
  title="Palo Alto Networks SCADA Security Solutions"
  description="Palo Alto Networks offers advanced security solutions tailored for SCADA systems, focusing on safeguarding critical infrastructure within OT environments. Their approach integrates comprehensive security measures to protect against evolving cyber threats."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={paloAltoScadaFeatures} />
<ThreePoints points={paloAltoScadaBenefits} />

<SubHeader
  title="Tenable SCADA Security Solutions"
  description="Tenable focuses on vulnerability management and proactive security for SCADA systems, offering solutions that provide comprehensive visibility and control over industrial environments."
 group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={tenableScadaFeatures} />
<ThreePoints points={tenableScadaBenefits} />
<SubHeader
  title="Aruba Networks SCADA Security Solutions"
  description="Aruba Networks provides advanced networking and security capabilities that can be adapted to safeguard SCADA systems in OT environments through Zero Trust, AI-powered detection, and comprehensive access control."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={arubaScadaFeatures} />
<ThreePoints points={arubaScadaBenefits} />

<SubHeader
  title="Darktrace SCADA Security Solutions"
  description="Darktrace leverages self-learning AI and autonomous response to secure SCADA environments, delivering real-time detection and proactive defense against evolving cyber threats."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={darktraceScadaFeatures} />
<ThreePoints points={darktraceScadaBenefits} />

<SubHeader
  title="SentinelOne SCADA Security Solutions"
  description="SentinelOne enhances SCADA system security through AI-driven endpoint protection, real-time detection, and automated remediation, minimizing risk and downtime in industrial environments."
   group="OTS" 
        section="ICS"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneScadaFeatures} />
<ThreePoints points={sentinelOneScadaBenefits} />


<Header title="Critical Infrastructure Protection (CIP)"  />

<SubHeader
  title="Cisco Critical Infrastructure Protection"
  description="Cisco delivers a comprehensive suite of solutions designed to secure critical infrastructure across industries by integrating real-time visibility, network segmentation, threat intelligence, and zero trust architecture."
   group="OTS" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={ciscoCipFeatures} />


<SubHeader
  title="Fortinet Critical Infrastructure Protection"
  description="Fortinet secures OT environments in critical infrastructure through its integrated Security Fabric, offering advanced threat protection, visibility, and compliance-driven security across industrial networks."
     group="OTS" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={fortinetCipFeatures} />

<SubHeader
  title="Palo Alto Networks Critical Infrastructure Protection"
  description="Palo Alto Networks secures critical infrastructure with zero trust architecture, deep visibility, and automated threat prevention across OT environments."
   group="OTS" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={paloCipFeatures} />

<SubHeader
  title="Tenable Critical Infrastructure Protection"
  description="Tenable delivers deep visibility and proactive vulnerability management for critical infrastructure, securing OT assets with precision and operational safety."
   group="OTS" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={tenableCipFeatures} />

<SubHeader
  title="Aruba Networks Critical Infrastructure Protection"
  description="Aruba delivers secure, identity-driven networking to safeguard critical infrastructure from edge to cloud, integrating Zero Trust and SASE frameworks for OT resilience."
   group="OTS" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={arubaCipFeatures} />

<SubHeader
  title="Darktrace Critical Infrastructure Protection"
  description="Darktrace secures critical infrastructure with self-learning AI that detects, investigates, and autonomously responds to threats in real time."
   group="OTS" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={darktraceCipFeatures} />

<SubHeader
  title="SentinelOne Critical Infrastructure Protection"
  description="SentinelOne secures critical infrastructure by delivering autonomous endpoint protection, behavioral threat detection, and real-time remediation capabilities."
    group="OTS" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneCipFeatures} />

<SubHeader
  title="Arctic Wolf Critical Infrastructure Protection"
  description="Arctic Wolf delivers MDR services with 24/7 monitoring, proactive threat hunting, and rapid incident response to protect critical infrastructure."
     group="OTS" 
        section="CIP"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfCipFeatures} />


<Header title="IoT Device Security " />

<SubHeader
  title="Cisco IoT Security"
  description="Cisco’s Industrial Threat Defense secures OT, ICS, and cyber-physical systems through visibility, segmentation, and unified threat response."
     group="OTS" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={ciscoIotSecurityFeatures} />

<SubHeader
  title="Fortinet IoT Security"
  description="Fortinet secures IoT ecosystems with integrated visibility, segmentation, and threat intelligence via its Security Fabric."
group="OTS" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={fortinetIotSecurityFeatures} />


<SubHeader
  title="Palo Alto Networks IoT Security"
  description="Palo Alto Networks delivers AI-driven IoT security integrated with Prisma Access and NGFWs for real-time visibility and protection."
  group="OTS" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={paloAltoIotSecurityFeatures} />

<SubHeader
  title="Tenable IoT Security"
  description="Tenable brings visibility and vulnerability management to IoT environments, integrating risk insights across OT ecosystems."
 group="OTS" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={tenableIotSecurityFeatures} />


<SubHeader
  title="Aruba Networks IoT Security"
  description="Aruba secures IoT at the edge with unified infrastructure, zero trust enforcement, and AI-powered insights."
  group="OTS" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={arubaIotSecurityFeatures} />


<SubHeader
  title="Darktrace IoT Security"
  description="Darktrace secures IoT environments using self-learning AI that detects and autonomously responds to threats in real time."
group="OTS" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={darktraceIotSecurityFeatures} />


<SubHeader
  title="SentinelOne IoT Security"
  description="SentinelOne protects IoT environments through its Ranger module, delivering autonomous discovery, threat detection, and policy enforcement."
group="OTS" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneIotSecurityFeatures} />

<SubHeader
  title="Arctic Wolf IoT Security"
  description="Arctic Wolf delivers managed security services for IoT environments, combining 24/7 monitoring, expert SOC support, and proactive threat defense."
group="OTS" 
        section="IOT"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfIotSecurityFeatures} />



    </Section>

  <Section id="threat-detection-and-response" data-id="threat-detection-and-response">
        
    <Header title="Security Information and Event Management "  />

    <SubHeader
      title="Cisco SecureX (SIEM)"
      description="Cisco SecureX is a unified security platform that integrates Cisco and third-party tools to streamline threat detection, investigation, and response. It empowers security operations with real-time insights, automation, and integrated threat intelligence."
      group="TDR" 
        section="SIEM"
        position="right" 
    />  

    <CollapsiblePoints data={ciscoSecureXFeatures} />
    <UseCases cases={ciscoSecureXUseCases} />


    <SubHeader
      title="FortiSIEM"
      description="FortiSIEM is a next-generation SIEM solution offering centralized visibility, advanced threat detection, and automated response across hybrid environments."
      group="TDR" 
        section="SIEM"
        position="right" 
    />

    <CollapsiblePoints data={fortiSIEMFeatures} />
    <UseCases cases={fortiSIEMUseCases} />

    <SubHeader
  title="Arctic Wolf SIEM"
  description="Arctic Wolf is a cloud-native SIEM platform combined with a fully managed SOC, delivering 24/7 threat monitoring, investigation, and response with a human-first approach."
group="TDR" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfFeatures} />
<UseCases cases={arcticWolfUseCases} />


    <SubHeader
      title="IBM QRadar SIEM"
      description="IBM QRadar is a leading SIEM solution that delivers real-time security intelligence, advanced threat detection, and integration at scale for enterprise and MSSP environments."
     group="TDR" 
        section="SIEM"
        position="right" 
    />

    <CollapsiblePoints data={ibmQradarFeatures} />
    <UseCases cases={ibmQradarUseCases} />



<SubHeader
  title="Cisco Secure MDR"
  description="Cisco Secure MDR is a managed detection and response solution combining 24/7 monitoring, threat intelligence from Cisco Talos, and expert-led incident response across cloud, endpoint, and network environments."
 group="TDR" 
        section="SIEM"
        position="right" 
/>

  <CollapsiblePoints data={ciscoMdrFeatures } />
   
   <SubHeader
  title="FortiMDR"
  description="FortiMDR delivers managed detection and response across your security fabric, integrating with Fortinet tools to provide AI-driven threat detection, expert investigation, and compliance-ready reporting."
  group="TDR" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={fortiMdrFeatures} />

<SubHeader
  title="SentinelOne Singularity XDR"
  description="SentinelOne Singularity XDR delivers autonomous threat detection, protection, and response across endpoints, cloud, and IoT with AI-driven intelligence and automated remediation."
group="TDR" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneXdrFeatures} />

<SubHeader
  title="Arctic Wolf MDR"
  description="Arctic Wolf MDR delivers 24/7 threat detection, investigation, and response through a managed SOC-as-a-Service, combining human expertise with real-time intelligence to secure hybrid environments."
  group="TDR" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfMdrFeatures} />

<SubHeader
  title="CrowdStrike Falcon Insight MDR"
  description="CrowdStrike Falcon Insight MDR provides 24/7 endpoint protection and threat hunting through AI-driven EDR, expert analysis, and cloud-native architecture to secure modern enterprise environments."
  group="TDR" 
        section="SIEM"
        position="right" 
/>

<CollapsiblePoints data={falconInsightFeatures} />


  <Header title="Extended Detection and Response (XDR) "  />

<SubHeader
  title="Cisco SecureX"
  description="Cisco SecureX is an integrated platform that unifies threat detection, response, and security operations across Cisco and third-party tools, enabling real-time visibility and automation."
group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={ciscoSecureFeatures} />


<SubHeader
  title="FortiXDR"
  description="FortiXDR is Fortinet’s comprehensive XDR solution that delivers automated threat detection and response across endpoints, networks, and the cloud. It integrates seamlessly with Fortinet’s Security Fabric for unified defense and centralized management."
  group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={fortiXDRFeatures} />

<SubHeader
  title="SentinelOne Singularity XDR"
  description="SentinelOne Singularity XDR is an autonomous, AI-driven platform offering end-to-end protection across endpoints, cloud, and network environments. It combines behavioral analytics, machine learning, and automated response to stop threats in real-time."
  group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={sentinelOneXDRFeatures} />

<SubHeader
  title="Arctic Wolf XDR"
  description="Arctic Wolf XDR is a fully managed extended detection and response service that combines 24/7 monitoring, threat intelligence, and expert-led response to secure your environment across endpoints, cloud, and networks."
  group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={arcticWolfXDRFeatures} />

<SubHeader
  title="CrowdStrike Falcon Insight XDR"
  description="CrowdStrike Falcon Insight XDR extends endpoint detection and response capabilities across the enterprise by integrating cloud-native architecture, real-time analytics, and AI-powered automation to identify and respond to threats with speed and precision."
group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={crowdStrikeFalconXDRFeatures} />

<SubHeader
  title="Cisco SOAR"
  description="Cisco SOAR is a robust Security Orchestration, Automation, and Response platform that streamlines security operations by automating workflows, enhancing team collaboration, and accelerating incident response through integrations with Cisco and third-party tools."
group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={ciscoSoarFeatures} />
<ThreePoints points={ciscoSoarBenefits} />

<SubHeader
  title="FortiSOAR by Fortinet"
  description="FortiSOAR is a powerful Security Orchestration, Automation, and Response (SOAR) platform that accelerates the detection, investigation, and remediation of threats. It integrates seamlessly with Fortinet’s ecosystem and third-party tools to streamline incident response and boost operational efficiency."
group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={fortiSoarFeatures} />
<ThreePoints points={fortiSoarBenefits} />

<SubHeader
  title="Darktrace Antigena SOAR"
  description="Darktrace Antigena SOAR combines AI-driven threat detection with automated response capabilities, enabling security teams to autonomously defend against emerging cyber threats. Leveraging real-time machine learning, it delivers intelligent orchestration, automation, and response workflows."
group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={darktraceSoarFeatures} />
<ThreePoints points={darktraceSoarBenefits} />

<SubHeader
  title="IBM Security QRadar SOAR"
  description="IBM QRadar SOAR enhances IBM's QRadar SIEM by enabling automated, orchestrated, and collaborative incident response. It streamlines security operations with advanced playbooks, threat intelligence, and deep integration with the broader IBM security ecosystem."
group="TDR" 
        section="XDR"
        position="right" 
/>

<CollapsiblePoints data={qradarSoarFeatures} />
<ThreePoints points={qradarSoarBenefits} />


  </Section>
  </>

)