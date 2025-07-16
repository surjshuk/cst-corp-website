import { prismaFeatures , casbPaloAltoBenefits,idaasIBMFeatures ,casbPaloAltoFeatures , casbTrendMicroFeatures ,casbTrendMicroBenefits, casbProofPointBenefits , casbProofPointFeatures   ,idaasOktaFeatures   , idaasMicrosoftFeatures, idaasGoogleFeatures, idaasDuoSecFeatures, fortiDLPBenefits, dlpCiscoBenefits, dlpPaloAltoFeatures, dlpPaloAltoBenefits, dlpTrendMicroFeatures, dlpCiscoFeatures, dlpVersaFeatures, dlpVersaBenefits, dlpTrendMicroBenefits, segProofPointFeatures, segProofPointBenefits, segBarracudaFeatures, segBarracudaBenefits, segCiscoFeatures, segCiscoBenefits, segFortinetFeatures, segFortinetBenefits, segTrendMicroFeatures, segTrendMicroBenefits, segSecurenceFeatures, segSecurenceBenefits, spamProofpointBenefits, spamProofpointFeatures, emailProofpointFeatures, emailProofpointBenefits, dataProofpointFeatures, edrCrowdStrikeFeatures, edrCrowdStrikeBenefits, mdmSentinelFeatures, mdmSentinelBenefits, appVMwareFeatures, appVMwareBenefits, patchMicrosoftFeatures, pathMicrosoftBenefits } from "@/lib/data";
import { KeyFeaturesSection } from "../set-1/key-features";
import { Benefits } from "../set-1/benefits";
import { Hero } from "../set-1/hero";
import { SubHero } from "../set-1/subhero";
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
import {  AIBG2, CSPM, CWPP, cyberSecBG1, cyberSecBG2, cyberSecBG3, development, DLP, ENCRYPTION, mainBG3, SASE, SERVER } from "@/app/assets/index";





// import { prismaFeatures } from "@/lib/data";



export const CloudSecurity = () => {
    return (
        <>   
            {/* <div className="w-full text-left">
              <h2 className="text-[80px] text-primary p-16">Cloud Security Posture Management (CSPM)</h2>
            </div> */}

<div id="cloud-security" data-id="cloud-security" >


 {/* Cloud Security Posture Management (CSPM) */}
            <Hero title="Cloud Security Posture Management (CSPM)" imageSrc={CSPM}/>
            <SubHero
              title="Prisma Cloud by Palo Alto Networks"
              description="Prisma Cloud is a comprehensive Cloud Security Posture Management (CSPM) solution by Palo Alto Networks, designed to safeguard cloud environments across multiple public clouds, including AWS, Azure, Google Cloud, and more. It provides organizations with visibility, compliance, and risk management capabilities to ensure the security of cloud-native applications, infrastructure, and data."
              position="left"
            />
            <KeyFeaturesSection features={prismaFeatures} />

            <SubHero
              title="AWS Security Hub"
              description="AWS Security Hub is Amazon Web Services’ (AWS) native CSPM solution designed to centralize security findings and provide a unified view of an organization’s security posture across AWS environments. It integrates with AWS services and third-party security tools to provide centralized insights and automate security workflows."
            />
            <KeyFeaturesSection features={awsFeatures} />


            <SubHero
              title="Microsoft Defender for Cloud"
              description="Microsoft Defender for Cloud is a unified cloud security posture management solution that offers protection across hybrid and multi-cloud environments. It provides visibility, threat protection, and compliance management for workloads hosted on Azure, AWS, and Google Cloud."
              position="left"
            />
            <KeyFeaturesSection features={microsoftFeatures} />

            <SubHero
              title="Google Security Command Center"
              description="Google Security Command Center (SCC) is a security and risk management tool for Google Cloud environments. It provides centralized visibility into the security posture of Google Cloud services, helping organizations to detect threats, monitor configurations, and ensure compliance with security best practices."
              
            />
            <KeyFeaturesSection features={googleFeatures} />


            
            <SubHero
              title="FortiCWP (Cloud Workload Protection)"
              description="FortiCWP is Fortinet’s Cloud Workload Protection solution designed to secure applications and workloads across multi-cloud environments. It provides visibility, compliance, and threat detection for cloud-native workloads, including containers, serverless computing, and virtual machines."
              position = "left"
            />
             <KeyFeaturesSection features={cwppFeatures} />


            <SubHero
              title="Trend Micro Cloud One "
              description=" Trend Micro Cloud One is a security platform for cloud environments that combines CSPM, cloud workload protection, container security, and more. It is designed to offer unified security for cloud services, workloads, and applications. "
              
            />
            <KeyFeaturesSection features={microFeatures} />


 {/* Cloud Workload Protection Platforms (CWPP) */}

            <Hero title="Cloud Workload Protection Platforms (CWPP)" imageSrc={CWPP}/>
            <SubHero
              title="Prisma Cloud by Palo Alto Networks"
              description=" Prisma Cloud, a comprehensive cloud-native security platform, provides robust cloud workload protection for hybrid and multi-cloud environments. It combines a wide range of security capabilities to protect cloud-native applications and infrastructure. The platform is designed to ensure visibility, compliance, and security across workloads, containers, serverless functions, and virtual machines (VMs) in public, private, and hybrid cloud environments. "
              position = "left"
            />
             <KeyFeaturesSection features={cwppPrismaFeatures} />
           
            <Benefits benefits={cwppPrismaBenefits} />

            <SubHero
              title="Trend Micro Cloud One"
              description="Trend Micro Cloud One is a cloud-native security platform designed to secure workloads across cloud environments. It offers integrated cloud security capabilities for workloads, containers, and serverless functions, focusing on continuous protection and visibility. Cloud One is built to support workloads in both public and hybrid clouds like AWS, Azure, and Google Cloud."
              position = "left"
            />
             <KeyFeaturesSection features={cwppMicroFeatures} />
           
            <Benefits benefits={cwppMicroBenefits} />


            <SubHero
              title="CrowdStrike Falcon for Cloud Workloads"
              description="CrowdStrike Falcon for Cloud Workloads provides next-generation protection for cloud workloads across public cloud environments. The platform leverages the power of the CrowdStrike Falcon endpoint protection platform, using a lightweight agent to secure workloads from threats and vulnerabilities in real time. It delivers workload security through a cloud-native architecture, integrating with AWS, Azure, and Google Cloud."
              
            />
             <KeyFeaturesSection features={crowdStrikeFeatures} />
           
            <Benefits benefits={crowdStrikeBenefits} />


            <SubHero
              title="Microsoft Defender for Cloud"
              description="Microsoft Defender for Cloud (formerly Azure Security Center) is a comprehensive cloud-native security platform that protects workloads across hybrid and multi-cloud environments. It offers cloud workload protection as part of Microsoft’s broader cloud security suite, with deep integration into Azure and support for AWS and Google Cloud environments. Defender for Cloud provides continuous security posture management and advanced threat protection for workloads."
              position = "left"
            />
             <KeyFeaturesSection features={cwppMicrosoftFeatures} />
           
            <Benefits benefits={cwppMicrosoftBenefits} />

            <SubHero
              title="AWS Workload Protection"
              description="AWS Workload Protection leverages Amazon Web Services’ native security tools and capabilities to safeguard workloads in the AWS cloud environment. The platform integrates multiple AWS security services to offer comprehensive protection against threats, vulnerabilities, and misconfigurations across cloud workloads."

            />
             <KeyFeaturesSection features={cwppAWSFeatures} />
           
            <Benefits benefits={cwppAWSBenefits} />

            <SubHero
              title="Google Cloud Security Command Center"
              description="Google Cloud Security Command Center (SCC) is a security management platform designed to provide centralized visibility and control over Google Cloud workloads. It focuses on detecting vulnerabilities, misconfigurations, and security threats across various Google Cloud assets, providing insights to mitigate potential risks to workloads."
              position = "left"
            />
             <KeyFeaturesSection features={cwppCloudFeatures} />
           
            <Benefits benefits={cwppCloudBenefits} />
      

{/* Secure Access Service Edge (SASE) */}
        <Hero title="Secure Access Service Edge (SASE)" imageSrc={SASE}/>
            
            <SubHero
              title="Cisco Umbrella"
              description="Cisco Umbrella is a cloud-delivered security solution that provides a range of services to protect users and networks from cyber threats. Umbrella combines Secure Web Gateway (SWG), DNS-layer security, firewall, and cloud-delivered firewall capabilities, with integration into Cisco SD-WAN for secure, cloud-based access."
              position = "left"
            />
             <KeyFeaturesSection features={saseCiscoFeatures} />



             <SubHero
              title="FortiSASE"
              description="FortiSASE is Fortinet’s solution for secure access service edge (SASE), integrating cloud-delivered security services with networking capabilities for end-to-end protection across all users, devices, and locations."

            />
             <KeyFeaturesSection features={fortiSASEFeatures} />

            
             <SubHero
              title="Palo Alto Prisma Access"
              description="Prisma Access by Palo Alto Networks is a comprehensive SASE solution that provides secure access to cloud applications, internet resources, and private applications regardless of user location. It delivers enterprise-grade security with cloud-native architecture. "
              position = "left"
            />
             <KeyFeaturesSection features={sasePrismaFeatures} />
            
             <SubHero
              title="  VMware SASE"
              description="VMware’s SASE solution combines SD-WAN, secure web gateway, cloud firewall, and ZTNA into a single platform designed to provide secure, high-performance access to cloud applications and data."
              
            />
             <KeyFeaturesSection features={saseVMwareFeatures} />


             <SubHero
              title=" Barracuda SecureEdge "
              description="Barracuda CloudGen WAN is a SASE solution that provides secure, scalable SD-WAN capabilities to optimize cloud access, protect user data, and simplify network management."
              position = "left"
            />
             <KeyFeaturesSection features={barracudaFeatures} />

             <SubHero
              title=" Versa SASE "     
              description="Versa SASE is a comprehensive, cloud-delivered SASE platform that offers SD-WAN, ZTNA, secure web gateway, cloud firewall, and more in a single, integrated solution."

            />
             <KeyFeaturesSection features={saseVersaFeatures} />
            
        
        {/* Cloud Access Security Brokers (CASB) */}

             <Hero title="Cloud Access Security Brokers (CASB)" imageSrc={cyberSecBG2}/>
             <SubHero
              title=" Microsoft Defender - CASB "
              description="Microsoft Defender for Cloud Apps, formerly known as Microsoft Cloud App Security, is a robust CASB solution that provides comprehensive visibility and control over your cloud applications. Integrated with Microsoft 365, Defender for Cloud Apps enables organizations to secure their cloud environments by discovering, monitoring, and controlling the use of cloud applications."
              position = "left"
            />
             <KeyFeaturesSection features={casbMicrosoftFeatures} />


             <SubHero
              title=" Cisco Cloudlock - CASB "
              description="Cisco Cloudlock is a cloud-native CASB solution that provides protection for cloud environments by monitoring and controlling data in cloud applications. It offers a user-friendly interface and focuses on reducing the risk associated with cloud adoption, including data breaches, compliance violations, and insider threats. "
              position = "right"
            />
             <KeyFeaturesSection features={casbCloudLockFeatures} />

             <Benefits benefits={casbCloudLockBenefits} />

             <SubHero
              title=" Palo Alto Networks - CASB"
              description="Palo Alto Networks' SaaS Security (formerly known as Netskope SaaS Security) delivers a cloud-native CASB solution that helps organizations secure their Software-as-a-Service (SaaS) applications and data. It leverages the power of Palo Alto Networks' threat intelligence to detect, mitigate, and prevent security risks within cloud environments."
              position = "left"
            />
             <KeyFeaturesSection features={casbPaloAltoFeatures} />

             <Benefits benefits={casbPaloAltoBenefits} />

             <SubHero
              title=" Trend Micro Cloud App Security - CASB"
              description=" Trend Micro Cloud App Security is a comprehensive CASB solution designed to protect organizations' cloud-based applications and services, with strong data loss prevention, threat protection, and compliance features. It integrates with popular platforms like Microsoft 365, Google Workspace, and Salesforce to secure data and prevent security breaches."
              position = "right"
            />
             <KeyFeaturesSection features={casbTrendMicroFeatures} />

             <Benefits benefits={casbTrendMicroBenefits} />


             <SubHero
              title=" Proofpoint - CASB"
              description=" Proofpoint’s CASB solution focuses on securing cloud applications and protecting sensitive data within the cloud. With a user-centric approach, Proofpoint allows organizations to gain visibility and control over their cloud environments while addressing insider threats and regulatory compliance."
              position = "left"
            />
             <KeyFeaturesSection features={casbProofPointFeatures} />

             <Benefits benefits={casbProofPointBenefits} />


 {/* Identity as a Service (IDaaS) */}

      <Hero title="Identity as a Service (IDaaS)" imageSrc={cyberSecBG3}/>
 
            <SubHero
              title=" Okta (IDaaS)"
              description="Okta is a leading provider of Identity and Access Management (IAM) services with a cloud-based platform designed to manage and secure user authentication and access across a variety of applications, devices, and services. As an Identity as a Service (IDaaS) provider, Okta delivers comprehensive security features including single sign-on (SSO), multi-factor authentication (MFA), lifecycle management, and more."
              position = "left"
            />
             <KeyFeaturesSection features={idaasOktaFeatures} />

             <SubHero
              title=" Microsoft Azure AD (IDaaS)"
              description="Microsoft Azure Active Directory (Azure AD) is a comprehensive cloud-based identity and access management service that provides a suite of tools to securely manage users, devices, and applications within the cloud. Azure AD is part of Microsoft's cloud ecosystem, offering seamless integration with Microsoft 365, Windows 10, and thousands of third-party applications."
              position = "right"
            />
             <KeyFeaturesSection features={idaasMicrosoftFeatures} />

             
             

             <SubHero
              title=" Google Workspace Identity (IDaaS)"
              description="Google Workspace Identity is Google’s identity and access management platform designed to offer secure authentication and access controls across the suite of Google Cloud services. It is part of Google Cloud’s comprehensive security architecture, providing businesses with the tools to manage user identities, devices, and applications in the cloud."
              position = "left"
            />
             <KeyFeaturesSection features={idaasGoogleFeatures} />



             <SubHero
              title=" IBM Security Verify (IDaaS)"
              description="IBM Security Verify is a cloud-native identity and access management platform that helps organizations provide secure and seamless user access to applications and services while ensuring robust protection against identity-related risks. It supports a broad range of identity management capabilities such as authentication, identity governance, and user provisioning."
              position = "right"
            />
             <KeyFeaturesSection features={idaasIBMFeatures} />
            
             <SubHero
              title="Duo Security by Cisco (IDaaS)"
              description="Duo Security, a Cisco company, offers a cloud-based IDaaS platform known for its simplicity and effectiveness in securing user identities and devices. It specializes in multi-factor authentication (MFA), device security, and secure access to cloud and on-premises applications, making it a popular choice for organizations looking to protect their digital assets."
              position = "left"
            />
             <KeyFeaturesSection features={idaasDuoSecFeatures} />

</div>
{/* Data Loss Prevention (DLP)  DATA SECURITY */}

<div id="data-security" data-id="data-security">

    <Hero title="Data Loss Prevention (DLP)" imageSrc={DLP}/>
            <SubHero
              title=" FortiDLP"
              description="Fortinet's FortiDLP is a comprehensive data loss prevention solution that provides organizations with real-time protection to safeguard sensitive data across endpoints, networks, and the cloud. It leverages Fortinet’s advanced security fabric architecture, enabling seamless integration with FortiGate firewalls, FortiMail, FortiWeb, and other Fortinet products."
              position = "left"
            />
             <KeyFeaturesSection features={idaasIBMFeatures} />

             <Benefits benefits={fortiDLPBenefits} />
            

             <SubHero
              title=" Cisco Umbrella- DLP "
              description="Cisco Umbrella is a cloud-delivered network security platform that provides comprehensive DLP capabilities, particularly focusing on protecting data from leaks during cloud-based activities. Cisco Umbrella integrates DLP with its suite of advanced threat protection tools, including DNS-layer security, cloud firewall, and secure web gateway."
              position = "right"
            />
             <KeyFeaturesSection features={dlpCiscoFeatures} />

             <Benefits benefits={dlpCiscoBenefits} />
            

             <SubHero
              title=" Palo Alto Prisma - DLP "
              description="Palo Alto Prisma is a cloud-native platform designed to secure data and applications across cloud environments. Prisma’s DLP capabilities provide comprehensive protection for organizations that rely on cloud infrastructure and SaaS applications."
              position = "left"
            />
             <KeyFeaturesSection features={dlpPaloAltoFeatures} />

             <Benefits benefits={dlpPaloAltoBenefits} />
            

             <SubHero
              title=" Trend Micro - DLP "
              description="Trend Micro DLP is a robust solution designed to protect sensitive information across endpoints, networks, and cloud environments. It leverages AI and machine learning to provide proactive DLP protection, ensuring that data is always secure, whether it’s at rest, in transit, or in use."
              position = "right"
            />
             <KeyFeaturesSection features={dlpTrendMicroFeatures} />

             <Benefits benefits={dlpTrendMicroBenefits} />

             <SubHero
              title=" Versa Networks - DLP"
              description="Versa Networks provides a comprehensive SD-WAN and secure access service edge (SASE) solution that includes data loss prevention as part of its security services. Versa’s DLP capabilities are tightly integrated with its SASE platform to secure data across distributed environments."
              position = "left"
            />
             <KeyFeaturesSection features={dlpVersaFeatures} />

             <Benefits benefits={dlpVersaBenefits} />
            


             <SubHero
              title=" Microsoft Purview "
              description="Microsoft Purview (formerly Microsoft 365 Compliance Center) provides advanced data loss prevention features within Microsoft 365 environments. It helps organizations discover, classify, and protect sensitive data across Microsoft 365 services, including SharePoint, OneDrive, Teams, and Exchange."
              position = "right"
            />
             <KeyFeaturesSection features={dlpTrendMicroFeatures} />

             <Benefits benefits={dlpTrendMicroBenefits} />
</div>

<div id ="email-security" data-id="email-security">


            {/* Secure Email Gateways (SEGs) */}
            <Hero title="Secure Email Gateways (SEGs)" imageSrc={cyberSecBG1}/>
            
            <SubHero
              title="Proofpoint"
              description="Proofpoint is a market leader in email security and compliance, offering advanced threat protection through its cloud-based platform. Its solution integrates machine learning and advanced analytics to identify and neutralize sophisticated threats."
              position = "left"
            />
             <KeyFeaturesSection features={segProofPointFeatures} />

             <Benefits benefits={segProofPointBenefits} />


             <SubHero
              title="Barracuda"
              description="Barracuda’s Email Security Gateway is a robust solution for protecting businesses against a wide range of email threats. It offers both on-premises and cloud-based deployment options."
              position = "right"
            />
             <KeyFeaturesSection features={segBarracudaFeatures} />

             <Benefits benefits={segBarracudaBenefits} />

             <SubHero
              title="CISCO"
              description="Cisco’s Email Security Appliance (ESA) provides robust protection against email threats, leveraging the power of Cisco’s Talos Intelligence Group for real-time threat analysis."
              position = "left"
            />
             <KeyFeaturesSection features={segCiscoFeatures} />

             <Benefits benefits={segCiscoBenefits} />

             <SubHero
              title="Fortinet"
              description="Fortinet’s FortiMail is an advanced email security solution that provides multi-layered protection against email-based threats. It is part of the Fortinet Security Fabric, offering comprehensive integration."
              position = "right"
            />
             <KeyFeaturesSection features={segFortinetFeatures} />

             <Benefits benefits={segFortinetBenefits} />

             <SubHero
              title="Trend Micro"
              description="Trend Micro’s Email Security solution offers advanced protection through its cloud-native platform. It is particularly effective in defending against phishing and advanced persistent threats (APTs)."
              position = "left"
            />
             <KeyFeaturesSection features={segTrendMicroFeatures} />

             <Benefits benefits={segTrendMicroBenefits} />


             <SubHero
              title="Securence"
              description="Securence provides reliable email filtering and protection services tailored for businesses of all sizes. Known for its simplicity and effectiveness, it focuses on delivering a robust solution for spam and malware."
              position = "right"
            />
             <KeyFeaturesSection features={segSecurenceFeatures} />

             <Benefits benefits={segSecurenceBenefits} />


{/* Spam Filters */}
<Hero title="Spam Filters" imageSrc={development}/>

            <SubHero
              title="Proofpoint"
              description="Proofpoint is a leader in cybersecurity solutions, focusing on protecting organizations from advanced threats and compliance risks. Its email security solutions are designed to identify and block phishing, ransomware, and business email compromise (BEC) attacks."
              position = "left"
            />
             <KeyFeaturesSection features={spamProofpointFeatures} />

             <Benefits benefits={spamProofpointBenefits} />


{/* Email Encryption */}
<Hero title="Email Encryption" imageSrc={ENCRYPTION}/>

            <SubHero
              title="Proofpoint"
              description="Proofpoint is a leader in cybersecurity, offering advanced email encryption solutions designed to protect sensitive communications and ensure regulatory compliance. Proofpoint’s encryption technology uses policy-based encryption to automatically secure messages containing sensitive information, reducing the risk of human error. Messages are encrypted in transit and can only be accessed by authorized recipients through secure portals or direct decryption."
              position = "right"
            />
             <KeyFeaturesSection features={emailProofpointFeatures} />

             <Benefits benefits={emailProofpointBenefits} />

{/* Data Loss Prevention for Email */}
<Hero title="Data Loss Prevention (DLP) for Email" imageSrc={DLP}/>

            <SubHero
              title="Proofpoint"
              description="Proofpoint is a leading cybersecurity company specializing in protecting organizations from advanced threats and compliance risks. Its email encryption solution ensures secure communication by encrypting emails containing sensitive data."
              position = "left"
            />
             <KeyFeaturesSection features={dataProofpointFeatures} />

</div>
  










<div id="endpoint-security" data-id="endpoint-security"> 
{/* Endpoint Protection Platforms (EPP)*/}
<Hero title="Data Loss Prevention (DLP) for Email" imageSrc={cyberSecBG3}/>

            <SubHero
              title="Trend Micro Endpoint Protection Platform"
              description="Trend Micro is a leading cybersecurity company offering robust Endpoint Protection Platform (EPP) solutions tailored to meet modern organizational needs. Trend Micro’s Endpoint security suite provides advanced threat defense against ransomware, malware, phishing, and other sophisticated cyberattacks."
              position = "right"
            />
             <KeyFeaturesSection features={dataProofpointFeatures} />

{/* Endpoint Detection and Response (EDR) */}
<Hero title="Endpoint Detection and Response (EDR)" imageSrc={cyberSecBG2}/>

            <SubHero
              title="CrowdStrike Falcon Insight"
              description="CrowdStrike Falcon Insight is a cloud-native endpoint detection and response (EDR) solution designed to provide real-time visibility into endpoint activities and deliver advanced threat detection capabilities. Built on the CrowdStrike Falcon platform, it integrates seamlessly with other Falcon modules to offer comprehensive protection."
              position = "left"
            />
             <KeyFeaturesSection features={edrCrowdStrikeFeatures} />

             <Benefits benefits={edrCrowdStrikeBenefits} />

{/* Mobile Device Management (MDM)  */}
<Hero title=" Mobile Device Management (MDM)" imageSrc={AIBG2}/>

            <SubHero
              title="SentinelOne Singularity Mobile"
              description="SentinelOne Singularity Mobile is a next-generation AI-powered Mobile Threat Defense (MTD) solution that provides endpoint security for mobile devices. It uses advanced behavioral AI models to detect, prevent, and respond to mobile threats in real time."
              position = "right"
            />
             <KeyFeaturesSection features={mdmSentinelFeatures} />

             <Benefits benefits={mdmSentinelBenefits} />

            

{/* Application Whitelisting */}
<Hero title=" Application Whitelisting" imageSrc={SERVER}/>

            <SubHero
              title="VMware Carbon Black"
              description="VMware Carbon Black is a leading endpoint security platform that leverages advanced threat detection, response, and prevention to safeguard enterprise environments. Its application whitelisting feature focuses on identifying and blocking unauthorized applications to reduce the risk of malware and zero-day attacks."
              position = "right"
            />
             <KeyFeaturesSection features={appVMwareFeatures} />

             <Benefits benefits={appVMwareBenefits} />

             
{/* Patch Management */}
<Hero title=" Patch Management" imageSrc={mainBG3}/>

            <SubHero
              title="Microsoft Endpoint Configuration Manager (MECM)"
              description="Microsoft Endpoint Configuration Manager (formerly System Center Configuration Manager or SCCM) is a comprehensive tool designed for managing large-scale IT environments."
              position = "left"
            />
             <KeyFeaturesSection features={patchMicrosoftFeatures} />

             <Benefits benefits={pathMicrosoftBenefits} />


</div>        
        </>
       
    );
}