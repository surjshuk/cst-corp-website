
import Section from "@/components/Section";
import { CollapsiblePoints } from "@/components/shared/CollapisblePoints";
import { ThreePoints } from "@/components/shared/ThreePoints";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { awsFeatures, barracudaFeatures, casbCloudLockBenefits, casbCloudLockFeatures, casbMicrosoftFeatures, casbPaloAltoBenefits, casbPaloAltoFeatures, casbProofPointBenefits, casbProofPointFeatures, casbTrendMicroBenefits, casbTrendMicroFeatures, crowdStrikeBenefits, crowdStrikeFeatures, cwppAWSBenefits, cwppAWSFeatures, cwppCloudBenefits, cwppCloudFeatures, cwppFeatures, cwppMicroBenefits, cwppMicroFeatures, cwppMicrosoftBenefits, cwppMicrosoftFeatures, cwppPrismaBenefits, cwppPrismaFeatures, fortiSASEFeatures, googleFeatures, idaasGoogleFeatures, idaasMicrosoftFeatures, idaasOktaFeatures, microFeatures, microsoftFeatures, prismaFeatures, saseCiscoFeatures, sasePrismaFeatures, saseVersaFeatures, saseVMwareFeatures } from "./data";
import { idaasDuoSecFeatures, idaasIBMFeatures } from "../DataSecurity/data";
import Index from "../components/Index";

export const CloudSecurity = () => (
  <>
    
    <Section id="cloud-security" data-id="cloud-security">

      <Index
        title="Cloud Security"
        slug="cyber-security"
        data = {[
          {
          header:"Cloud Security Posture Management (CSPM)",
          section:"cspm",
          subheader:[
          `Prisma Cloud by Palo Alto Networks`,
          `AWS Security Hub`,
          `Microsoft Defender for Cloud`,
          `Google Security Command Center`,
          `FortiCWP (Cloud Workload Protection)`,
          `Trend Micro Cloud One`
        ]},
        {
          header:"Cloud Workload Protection Platforms (CWPP)",
          section:"cwpp",
          subheader:[
          `Prisma Cloud by Palo Alto Networks`,
          `Trend Micro Cloud One`,
          `Crowdstrike Falcon for Cloud Workloads`,
          `Microsoft Defender for Cloud`,
          `Google Cloud Security Command Center`,
          `Trend Micro Cloud One`
        ]},
         {
          header:"Secure Access Service Edge (SASE)",
          section:"sase",
          subheader:[
          `Cisco Umbrella`,
          `FortiSASE`,
          `Palo Alto Prisma Access`,
          `VMware SASE`,
          `Barracuda SecureEdge`,
          `Versa SASE`
        ]},
        {
          header:"Cloud Access Security Brokers (CASB)",
          section:"casb",
          subheader:[
          `Microsoft Defender - CASB`,
          `Cisco Cloudlock - CASB`,
          `Palo Alto Networks - CASB`,
          `Trend Micro Cloud App Security - CASB`,
          `Proofpoint - CASB`,
         
        ]},
          {
          header:"Identity as a Service (IDaaS)",
          section:"idaas",
          subheader:[
          `Okta (IDaaS)`,
          `Microsoft Azure AD (IDaaS)`,
          `Google Workspace Identity (IDaaS)`,
          `IBM Security Verify (IDaaS)`,
          `Duo Security by Cisco (IDaaS)`,
         
        ]}
        
      ]}
      />

      <Header title="Cloud Security Posture Management (CSPM)"  />
      
     
      {/* Cloud Security Posture Management (CSPM) */}

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
        section="IDaaS"
        position="right" />
      <CollapsiblePoints data={idaasOktaFeatures} />

      <SubHeader
        title=" Microsoft Azure AD (IDaaS)"
        description="Microsoft Azure Active Directory (Azure AD) is a comprehensive cloud-based identity and access management service that provides a suite of tools to securely manage users, devices, and applications within the cloud. Azure AD is part of Microsoft's cloud ecosystem, offering seamless integration with Microsoft 365, Windows 10, and thousands of third-party applications."
       group="Cloud Security" 
        section="IDaaS"
        position="right" />
      <CollapsiblePoints data={idaasMicrosoftFeatures} />




      <SubHeader
        title=" Google Workspace Identity (IDaaS)"
        description="Google Workspace Identity is Google’s identity and access management platform designed to offer secure authentication and access controls across the suite of Google Cloud services. It is part of Google Cloud’s comprehensive security architecture, providing businesses with the tools to manage user identities, devices, and applications in the cloud."
        group="Cloud Security" 
        section="IDaaS"
        position="right" />
      <CollapsiblePoints data={idaasGoogleFeatures} />



      <SubHeader
        title=" IBM Security Verify (IDaaS)"
        description="IBM Security Verify is a cloud-native identity and access management platform that helps organizations provide secure and seamless user access to applications and services while ensuring robust protection against identity-related risks. It supports a broad range of identity management capabilities such as authentication, identity governance, and user provisioning."
        group="Cloud Security" 
        section="IDaaS"
        position="right" />
      <CollapsiblePoints data={idaasIBMFeatures} />

      <SubHeader
        title="Duo Security by Cisco (IDaaS)"
        description="Duo Security, a Cisco company, offers a cloud-based IDaaS platform known for its simplicity and effectiveness in securing user identities and devices. It specializes in multi-factor authentication (MFA), device security, and secure access to cloud and on-premises applications, making it a popular choice for organizations looking to protect their digital assets."
        group="Cloud Security" 
        section="IDaaS"
        position="right"  />
      <CollapsiblePoints data={idaasDuoSecFeatures} />

    </Section>

  </>

)