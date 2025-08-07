// import { Benefits } from "@/components/sections/cybersecurity/set-1/benefits";
import { Feature, SubPoints, UseCase } from "@/types/declaration";
import { Benefit } from "@/types/declaration";
/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- ----- Cloud Security Posture Management (CSPM) ----- ----- -----  */
export const prismaFeatures: Feature[] = [
  //CSPM CONTENT
  //##########################################################################################
  {
    title: "Cloud Security Posture Management (CSPM)",
    description:
      "Automates the detection of misconfigurations and security risks in cloud services, preventing potential breaches and ensuring compliance with industry standards such as HIPAA, PCI DSS, and GDPR.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Workload Protection",
    description:
      "Protects cloud workloads, containers, and serverless applications from vulnerabilities and threats.",
    // image: PLACEHOLDER,
  },
  {
    title: "Identity and Access Management (IAM) Security",
    description:
      "Monitors and enforces least-privilege access policies to prevent unauthorized access.",
    // image: PLACEHOLDER,
  },
  {
    title: "Compliance and Governance",
    description:
      "Helps organizations maintain continuous compliance by continuously assessing configurations against best practices and regulatory frameworks.",
    // image: PLACEHOLDER,
  },
  {
    title: "Risk and Vulnerability Assessment",
    description:
      "Identifies and mitigates risks across the entire cloud stack, including compute, storage, and networking.",
    // image: PLACEHOLDER,
  },

/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----  ----- AWS SECURITY HUB ----- ----- -----   ----- */
]

 export const awsFeatures: Feature[] = [

    
  {
    title: "Centralized Security Findings",
    description:
      "Aggregates security alerts from various AWS services (like Amazon GuardDuty, Amazon Inspector) and partner security solutions to provide a centralized security view.",
    // image: PLACEHOLDER,
  },
  {
    title: "Automated Security Compliance Checks",
    description:
      "AWS Security Hub helps automate compliance assessments by continuously monitoring workloads against industry standards, including CIS AWS Foundations Benchmark and AWS Foundational Security Best Practices.",
    // image: PLACEHOLDER,
  },
  {
    title: "Custom Insights and Remediation",
    description:
      "Organizations can create custom insights, enabling them to tailor security monitoring to specific needs and implement automated remediation actions.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration with AWS Services",
    description:
      "Seamless integration with AWS-native services such as GuardDuty, Macie, and IAM Access Analyzer to enhance security and compliance management.",
    // image: PLACEHOLDER,
  },
  {
    title: "Partner Integrations",
    description:
      "Supports integration with a broad range of third-party security tools for deeper insights and more robust threat protection.",
    // image: PLACEHOLDER,
  },


]
/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----  ----- MICROSOFT DEFENDER  ----- ----- -----   ----- */


 export const microsoftFeatures: Feature[] = [
      
  {
    title: "Security Posture Management",
    description:
      "Provides continuous assessments of cloud resources, highlighting misconfigurations, vulnerabilities, and policy violations.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Protection",
    description:
      "Detects and responds to threats across cloud environments, including protection for virtual machines, databases, and containers.",
    // image: PLACEHOLDER,
  },
  {
    title: "Compliance Management",
    description:
      "Supports compliance assessments against common industry standards such as ISO 27001, NIST, and GDPR, with built-in regulatory compliance reports.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud-Native Application Security",
    description:
      "Safeguards cloud-native applications and microservices architectures by detecting vulnerabilities in containerized environments.",
    // image: PLACEHOLDER,
  },
  {
    title: "Security Recommendations",
    description:
      "Offers actionable security recommendations to improve posture and reduce risks, with guidance for remediation.",
    // image: PLACEHOLDER,
  },

]
/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----   GOOGLE SECURITY COMMAND CENTER   ----- -----   ----- */

export const googleFeatures : Feature[] = [
            
          {
            title: "Centralized Security Monitoring",
            description:
              "Provides a consolidated dashboard for monitoring the security posture of all Google Cloud resources, including compute, storage, and networking services.",
            // image: PLACEHOLDER,
          },
          {
            title: "Threat Detection and Vulnerability Management",
            description:
              "Detects and prioritizes threats, vulnerabilities, and misconfigurations, enabling quick responses and mitigation.",
            // image: PLACEHOLDER,
          },
          {
            title: "Cloud Asset Inventory",
            description:
              "Helps users visualize and inventory cloud assets, making it easier to track configurations and detect potential risks.",
            // image: PLACEHOLDER,
          },
          {
            title: "Compliance Monitoring",
            description:
              "Includes compliance checks and continuous monitoring for a wide range of security frameworks and regulations.",
            // image: PLACEHOLDER,
          },
          {
            title: "Integration with Other Google Security Tools",
            description:
              "Integrates with tools like Google Cloud’s Chronicle SIEM and VirusTotal for enhanced threat detection and response.",
            // image: PLACEHOLDER,
          },

  ]


  export const cwppFeatures : Feature[] = [

  {
    title: "Workload Protection",
    description:
      "Ensures continuous protection of cloud workloads, including servers, containers, and Kubernetes clusters, by identifying vulnerabilities and threats.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Security Posture Management (CSPM)",
    description:
      "Detects misconfigurations in cloud environments to reduce risk and ensure best practices for security and compliance.",
    // image: PLACEHOLDER,
  },
  {
    title: "Compliance Monitoring",
    description:
      "Supports compliance monitoring for a variety of regulatory standards, including PCI DSS and HIPAA, helping organizations to maintain necessary compliance.",
    // image: PLACEHOLDER,
  },
  {
    title: "Risk and Vulnerability Management",
    description:
      "Scans workloads for vulnerabilities and recommends fixes, reducing attack surfaces and exposure to security risks.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration with Fortinet Security Solutions",
    description:
      "Integrates seamlessly with Fortinet’s broader suite of security products, including FortiGate firewalls, for comprehensive protection.",
    // image: PLACEHOLDER,
  },

  ]

/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----   TREND MICRO CLOUD ONE   ----- -----   ----- */


  export const microFeatures : Feature[] = [
  {
    title: "Cloud Security Posture Management (CSPM)",
    description:
      " Continuously monitors and assesses cloud configurations to prevent security misconfigurations and enforce best practices.",
    // image: PLACEHOLDER,
  },
  {
    title: "Workload and Container Security",
    description:
      "Provides comprehensive protection for cloud workloads and containers by detecting vulnerabilities, threats, and misconfigurations.",
    // image: PLACEHOLDER,
  },
  {
    title: "Compliance and Governance",
    description:
      ": Monitors cloud environments for regulatory compliance, offering pre-built security best practices and reports for standards like CIS and PCI DSS.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Detection and Response",
    description:
      ": Incorporates threat detection features that analyze workloads for suspicious activity and provide real-time alerts.",
    // image: PLACEHOLDER,
  },
  {
    title: "Automation and Remediation",
    description:
      "Offers automated response and remediation for identified threats and misconfigurations, ensuring continuous protection.",
    // image: PLACEHOLDER,
  },

  ]
/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----   Cloud Workload Protection Platforms (CWPP)   ----- -----  ----- */

  export const cwppPrismaFeatures : Feature[] = [
     
  {
    title: "Cloud Security Posture Management (CSPM)",
    description:
      "Provides visibility into cloud infrastructure risks and compliance posture. ",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Workload Protection (CWPP)",
    description:
      "Secures workloads running in public clouds (AWS, Azure, GCP) with automated vulnerability scanning, runtime protection, and container security.",
    // image: PLACEHOLDER,
  },
  {
    title: "Identity & Access Management (IAM) Security",
    description:
      "Monitors and enforces secure identity and access control policies.",
    // image: PLACEHOLDER,
  },
  {
    title: "Serverless Security",
    description:
      "Extends protection to serverless functions with risk assessment and runtime security.",
    // image: PLACEHOLDER,
  },
  {
    title: "Compliance Monitoring",
    description:
      "Prisma Cloud helps meet various regulatory standards, such as PCI DSS, HIPAA, and GDPR, with automated compliance checks and reports.",
    // image: PLACEHOLDER,
  },

  {
    title: "Threat Detection & Response",
    description:
      "Uses machine learning to detect anomalies, vulnerabilities, and exploits in cloud workloads.",
    // image: PLACEHOLDER,
  },

  ]

  export const cwppPrismaBenefits : Benefit[] = [

    {
      text: "Comprehensive multi-cloud protection that is integrated into the DevOps lifecycle.",
      position: "left",
    },
    {
      text: "Deep visibility into cloud environments, including VMs, containers, and serverless applications.",
      position: "right",
    },
    {
      text: "Automated vulnerability scanning to detect and mitigate security risks before they impact cloud applications.",
      position: "left",
    },
    
    
  ]

  /* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
  /*  ----- ----- -----   Cloud Workload Protection Platforms (CWPP)   ----- -----  ----- */
/*  ----- ----- -----  Trend Micro Cloud One  ----- -----  ----- */

export const cwppMicroFeatures : Feature[] = [

     
  {
    title: "Cloud Workload Protection (CWPP)",
    description:
      "Protects workloads running on public cloud environments through vulnerability management, security monitoring, and runtime protection.",
    // image: PLACEHOLDER,
  },
  {
    title: "Container Security",
    description:
      "Protects containerized applications and Kubernetes environments with continuous scanning and runtime protection.",
    // image: PLACEHOLDER,
  },
  {
    title: "Serverless Security",
    description:
      " Provides security for serverless computing environments, including AWS Lambda, Azure Functions, and Google Cloud Functions.",
    // image: PLACEHOLDER,
  },
  {
    title: "File Storage Protection",
    description:
      "Secures cloud file storage services like Amazon S3, Google Cloud Storage, and Azure Blob Storage.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Network Security",
    description:
      "Enhances network security with visibility, network traffic monitoring, and threat intelligence.",
    // image: PLACEHOLDER,
  },
  {
    title: "Compliance & Reporting",
    description:
      "Helps organizations comply with regulatory requirements by offering automated compliance assessments for frameworks like PCI DSS and HIPAA.",
    // image: PLACEHOLDER,
  },


]

export const cwppMicroBenefits : Benefit[] = [
  {
    text: "Single integrated platform for managing cloud security across workloads, containers, and serverless.",
    position: "left",
  },
  {
    text: "Continuous security coverage with real-time threat intelligence feeds and automated security policies.",
    position: "right",
  },
  {
    text: "Optimized for seamless deployment with minimal overhead.",
    position: "left",
  },
]


 /* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
 /*  ----- ----- -----   Cloud Workload Protection Platforms (CWPP)   ----- -----  ----- */
/*  ----- ----- -----  CrowdStrike Falcon for Cloud Workloads  ----- -----  ----- */
export const crowdStrikeFeatures : Feature[] = [
     
  {
    title: "Cloud Workload Protection (CWPP)",
    description:
      "Provides deep security capabilities for workloads with threat detection, real-time monitoring, and vulnerability management.",
    // image: PLACEHOLDER,
  },
  {
    title: "Advanced Threat Intelligence",
    description:
      "Uses Falcon's global threat intelligence to identify and block malicious activities targeting cloud workloads.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Security Posture Management (CSPM)",
    description:
      "Helps organizations monitor and maintain secure configurations in cloud environments, ensuring compliance with security best practices.",
    // image: PLACEHOLDER,
  },
  {
    title: "Vulnerability Management",
    description:
      "Identifies and patches vulnerabilities in cloud workloads to prevent attacks.",
    // image: PLACEHOLDER,
  },
  {
    title: "Endpoint Detection and Response (EDR)",
    description:
      " Extends CrowdStrike's EDR capabilities to cloud workloads, offering proactive threat hunting and investigation.",
    // image: PLACEHOLDER,
  },


]

export const crowdStrikeBenefits : Benefit[] = [

  {
    text: "Unified threat detection and response with the full power of the CrowdStrike Falcon platform.",
    position: "left",
  },
  {
    text: "Automated and continuous monitoring of cloud workloads with proactive threat intelligence and actionable insights.",
    position: "right",
  },
  {
    text: "Scalable protection with no impact on workload performance.",
    position: "left",
  },
  ]
/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----   Cloud Workload Protection Platforms (CWPP)   ----- -----  ----- */
/*  ----- ----- -----  Microsoft Defender for Cloud  ----- -----  ----- */
  
  export const cwppMicrosoftFeatures : Feature[] = [
  {
    title: "Cloud Workload Protection (CWPP)",
    description:
      "Protects cloud-based workloads against vulnerabilities, threats, and misconfigurations.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Security Posture Management (CSPM)",
    description:
      "Monitors cloud infrastructure for security misconfigurations and compliance violations.",
    // image: PLACEHOLDER,
  },
  {
    title: "Advanced Security Analytics",
    description:
      "Provides deep visibility into cloud workload behaviors and security events to detect and respond to anomalies.",
    // image: PLACEHOLDER,
  },
  {
    title: "Container Security",
    description:
      "Integrates with Kubernetes and Azure Container Service to secure containers and microservices environments.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Protection",
    description:
      "Detects threats using built-in machine learning and behavioral analytics, and offers actionable recommendations.",
    // image: PLACEHOLDER,
  },

  ]

  export const cwppMicrosoftBenefits : Benefit[] = [

    {
      text: "Seamless integration with Microsoft Azure, and support for multi-cloud and hybrid environments.",
      position: "left",
    },
    {
      text: "Proactive threat protection and vulnerability management to safeguard cloud workloads.",
      position: "right",
    },
    {
      text: "Robust compliance tracking and monitoring to ensure regulatory standards are met.",
      position: "left",
    },
  ]

/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----   Cloud Workload Protection Platforms (CWPP)   ----- -----  ----- */
/*  ----- ----- -----  AWS Workload Protection  ----- -----  ----- */
  
  export const cwppAWSFeatures : Feature[] = [
    {
      title: "AWS Security Hub",
      description:
        "Centralizes security management and visibility for workloads running on AWS, integrating data from various security services.",
      // image: PLACEHOLDER,
    },
    {
      title: "Amazon GuardDuty",
      description:
        "Provides intelligent threat detection for AWS workloads using machine learning and anomaly detection.",
      // image: PLACEHOLDER,
    },
    {
      title: "Amazon Macie",
      description:
        "Protects sensitive data within workloads by identifying and securing personally identifiable information (PII).",
      // image: PLACEHOLDER,
    },
    {
      title: "AWS Firewall Manager",
      description:
        "Ensures consistent security policy enforcement across cloud workloads by managing firewall configurations.",
      // image: PLACEHOLDER,
    },
    {
      title: "Amazon Inspector",
      description:
        "Automatically scans for vulnerabilities and deviations from best security practices in EC2 instances and workloads.",
      // image: PLACEHOLDER,
    },
  
    ]
  
    export const cwppAWSBenefits : Benefit[] = [
  
      {
        text: "Native integration with AWS services for streamlined workload protection.",
        position: "left",
      },
      {
        text: "Automated vulnerability assessments to reduce risks and increase security posture.",
        position: "right",
      },
      {
        text: "Comprehensive threat intelligence to detect and mitigate cloud-native threats.",
        position: "left",
      },
    ]


/* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- -----    Cloud Workload Protection Platforms (CWPP)   -----  ----- */
/*  ----- ----- -----  Google Cloud Security Command Center ----- -----  ----- */
  
  export const cwppCloudFeatures : Feature[] = [
    {
      title: "Threat Detection & Monitoring",
      description:
        "Identifies security threats and vulnerabilities in real-time, providing insight into potential risks in workloads.",
      // image: PLACEHOLDER,
    },
    {
      title: "Cloud Workload Protection (CWPP)",
      description:
        "Protects workloads running on Google Cloud with automated vulnerability scanning, threat detection, and compliance checks.",
      // image: PLACEHOLDER,
    },
    {
      title: "Event Correlation & Investigation",
      description:
        "Helps security teams investigate incidents by correlating events across the Google Cloud environment.",
      // image: PLACEHOLDER,
    },
    {
      title: "Compliance & Reporting",
      description:
        "Provides tools for managing compliance requirements, including automated scans for common regulatory frameworks.",
      // image: PLACEHOLDER,
    },
    {
      title: "Security Posture Management",
      description:
        "Continuously monitors for misconfigurations, vulnerabilities, and non-compliance across cloud infrastructure.",
      // image: PLACEHOLDER,
    },
  
    ]
  
    export const cwppCloudBenefits : Benefit[] = [
  
      {
        text: "Seamless integration with Google Cloud services for efficient workload protection.",
        position: "left",
      },
      {
        text: "Robust incident response tools and compliance management.",
        position: "right",
      },
      {
        text: "Real-time threat monitoring and continuous vulnerability management.",
        position: "left",
      },
    ]



 /* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----  Secure Access Service Edge (SASE)  ----- -----  ----- */
/*  ----- ----- ----- Cisco Umbrella  ----- -----  ----- */
  
  export const saseCiscoFeatures : Feature[] = [
    {
      title: "DNS Security",
      description:
        "Identifies security threats and vulnerabilities in real-time, providing insight into potential risks in workloads.",
      // image: PLACEHOLDER,
    },
    {
      title: "Cloud-Delivered Firewall",
      description:
        "Protects workloads running on Google Cloud with automated vulnerability scanning, threat detection, and compliance checks.",
      // image: PLACEHOLDER,
    },
    {
      title: "Integrated with SD-WAN",
      description:
        "When combined with Cisco SD-WAN, it enables secure application access, reducing the complexity of network management and ensuring a consistent security posture across cloud and on-premises environments.",
      // image: PLACEHOLDER,
    },
    {
      title: "Threat Intelligence",
      description:
        "",
      // image: PLACEHOLDER,
    },
  
    ]

    /*  ----- ----- -----   FortiSASE  ----- -----  ----- */
   

    export const fortiSASEFeatures : Feature[] = [
      {
        title: "FortiGuard Security Services",
        description:
          "Delivers comprehensive threat intelligence and security services, including web filtering, firewall protection, anti-virus, and intrusion prevention.",
        // image: PLACEHOLDER,
      },
      {
        title: "Secure SD-WAN",
        description:
          "FortiSASE incorporates SD-WAN capabilities to provide optimized and secure connectivity for users, ensuring performance and reliability for cloud-based applications.",
        // image: PLACEHOLDER,
      },
      {
        title: "Zero Trust Network Access (ZTNA)",
        description:
          "Helps enforce a Zero Trust model by verifying the identity of users and devices before granting access, ensuring that only authenticated entities can access sensitive applications and data.",
        // image: PLACEHOLDER,
      },
      {
        title: "Scalability",
        description:
          "Built on Fortinet’s robust security infrastructure, FortiSASE offers scalability to meet the demands of growing organizations with diverse security needs.",
        // image: PLACEHOLDER,
      },
    ]

    export const sasePrismaFeatures : Feature[] = [
      {
        title: "Cloud-Delivered Security",
        description:
          "Combines advanced security features such as Secure Web Gateway (SWG), firewall-as-a-service (FWaaS), and data loss prevention (DLP).",
        // image: PLACEHOLDER,
      },
      {
        title: "Zero Trust Security",
        description:
          "Offers seamless integration with Zero Trust principles to ensure that only verified users and devices are granted access to critical resources.",
        // image: PLACEHOLDER,
      },
      {
        title: "SD-WAN Integration",
        description:
          "Prisma Access integrates SD-WAN for optimized and secure connectivity, with automatic traffic routing based on business policies to ensure optimal user experience.",
        // image: PLACEHOLDER,
      },
      {
        title: "Scalable and Global",
        description:
          "With a vast global footprint, Prisma Access ensures fast and secure access to users, regardless of their location.",
        // image: PLACEHOLDER,
      },
    ]

    export const saseVMwareFeatures : Feature[] = [
      {
        title: "Integrated SD-WAN and Security",
        description:
          "VMware SASE provides a unified platform for both network connectivity and security, optimizing performance while maintaining strong security controls.",
        // image: PLACEHOLDER,
      },
      {
        title: "Zero Trust Access",
        description:
          "Integrates ZTNA capabilities to ensure secure, identity-based access to applications and services, eliminating implicit trust in users or devices.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud Security",
        description:
          "Features a cloud-native architecture with next-gen firewall, secure web gateway, and advanced threat protection, allowing businesses to safeguard their data across cloud environments.",
        // image: PLACEHOLDER,
      },
      {
        title: "Policy-Driven Automation",
        description:
          "Automates security policies to ensure compliance and minimize the risk of human error, providing administrators with more control over user and device access.",
        // image: PLACEHOLDER,
      },
    ]

    export const barracudaFeatures  : Feature[] = [
      {
        title: "SD-WAN and Security Integration",
        description:
          "Combines SD-WAN and security features, providing a unified solution to improve performance while ensuring data is protected across all endpoints.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud-Native Architecture",
        description:
          "Built on a cloud-native platform, CloudGen WAN optimizes cloud application access and reduces the need for traditional network appliances, enabling faster and more secure connections.",
        // image: PLACEHOLDER,
      },
      {
        title: "Multi-Cloud Connectivity",
        description:
          "Barracuda’s solution seamlessly integrates with major public cloud platforms like AWS, Azure, and Google Cloud, ensuring secure cloud-to-cloud traffic.",
        // image: PLACEHOLDER,
      },
      {
        title: "Simplified Network Management",
        description:
          "The solution provides centralized management for SD-WAN and cloud security, making it easier for organizations to deploy, monitor, and troubleshoot network issues.",
        // image: PLACEHOLDER,
      },
    ]

    

    export const saseVersaFeatures  : Feature[] = [
      {
        title: "Integrated SD-WAN and Security Services",
        description:
          "Versa SASE provides a comprehensive set of security services combined with SD-WAN capabilities, allowing secure and optimized cloud access for users and devices.",
        // image: PLACEHOLDER,
      },
      {
        title: "Zero Trust and Identity-Based Access",
        description:
          "Employs Zero Trust principles and offers identity-based security to ensure that only authenticated users and devices can access resources.",
        // image: PLACEHOLDER,
      },
      {
        title: "Advanced Threat Protection",
        description:
          "Includes real-time threat detection, URL filtering, and anti-malware services to protect users from a wide range of threats.",
        // image: PLACEHOLDER,
      },
      {
        title: "Flexible Deployment Options",
        description:
          "Versa offers flexible deployment options, including on-premises and cloud, allowing organizations to customize their network and security architecture.",
        // image: PLACEHOLDER,
      },
    ]

     /* ----- ----- ----- ----- ----- CLOUD SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- -----  Cloud Access Security Brokers (CASB)  ----- -----  ----- */
/*  ----- ----- -----  Microsoft Defender - CASB  ----- -----  ----- */

    export const casbMicrosoftFeatures  : Feature[] = [
      {
        title: "Cloud App Discovery",
        description:
          " Automatically discover all cloud apps in use within your organization, including sanctioned and unsanctioned apps, with real-time visibility and risk analysis.",
        // image: PLACEHOLDER,
      },
      {
        title: "Conditional Access Policies",
        description:
          "Seamlessly integrates with Azure AD to apply security policies based on the user's identity, location, device compliance, and application risk level.",
        // image: PLACEHOLDER,
      },
      {
        title: "Threat Detection",
        description:
          "Uses advanced machine learning to detect abnormal behavior, insider threats, compromised accounts, and other malicious activities across cloud apps.",
        // image: PLACEHOLDER,
      },
      {
        title: "Compliance & Governance",
        description:
          "Ensures compliance with regulations such as GDPR, HIPAA, and SOC 2, and helps protect your organization from data breaches and violations.",
        // image: PLACEHOLDER,
      },
      {
        title: "Data Loss Prevention (DLP)",
        description:
          "Advanced DLP capabilities to safeguard sensitive data, preventing unauthorized access, sharing, or leakage across cloud services.",
        // image: PLACEHOLDER,
      },
    ]

  
    export const casbMicrosoftBenefits : Benefit[] = [
  
      {
        text: "Securing Office 365: Provides enhanced security for Microsoft 365 apps, including SharePoint, Teams, and OneDrive.",
        position: "left",
      },
      {
        text: "Advanced Threat Protection: Detects and mitigates cloud-specific threats, such as data exfiltration, ransomware, and account takeover.",
        position: "right",
      },
      {
        text: "Shadow IT Management: Identifies and controls shadow IT applications, reducing security risks from unauthorized cloud apps.",
        position: "left",
      },
    ]


    /*  ----- ----- -----  Cloud Access Security Brokers (CASB)  ----- -----  ----- */

    /*  ----- ----- -----  Cloud Access Security Brokers (CASB)  ----- -----  ----- */
    /*  ----- ----- -----  Cisco Cloudlock - CASB  ----- -----  ----- */

    
    export const casbCloudLockFeatures  : Feature[] = [
      {
        title: "Cloud Data Loss Prevention (DLP)",
        description:
          " Enforces DLP policies to prevent sensitive information from being leaked or shared inappropriately across cloud platforms.",
        // image: PLACEHOLDER,
      },
      {
        title: "User Activity Monitoring",
        description:
          " Tracks and analyzes user activity within cloud applications, offering visibility into potentially risky behaviors and anomalous actions.",
        // image: PLACEHOLDER,
      },
      {
        title: "Third-Party Integrations",
        description:
          "Seamlessly integrates with popular cloud services such as Salesforce, Google Workspace, Microsoft 365, and Box.",
        // image: PLACEHOLDER,
      },
      {
        title: "Compliance & Governance",
        description:
          "Ensures compliance with regulations such as GDPR, HIPAA, and SOC 2, and helps protect your organization from data breaches and violations.",
        // image: PLACEHOLDER,
      },
      {
        title: "Automated Remediation",
        description:
          " Automatically triggers predefined actions like alerts, quarantines, or access restrictions in response to detected security issues.",
        // image: PLACEHOLDER,
      },
    ]

  
    export const casbCloudLockBenefits : Benefit[] = [
  
      {
        text: "Cloud Data Protection: Prevents unauthorized access, sharing, or leakage of sensitive data, both inside and outside the organization.",
        position: "left",
      },
      {
        text: "Cloud App Governance: Implements governance policies across cloud applications to enforce compliance and secure access.",
        position: "right",
      },
      {
        text: "Risk Assessment and Monitoring: Continuously evaluates cloud services and apps for risks, providing insights into cloud usage patterns and vulnerabilities.",
        position: "left",
      },
    ]

      /*  ----- ----- -----  Cloud Access Security Brokers (CASB)  ----- -----  ----- */
    /*  ----- ----- -----  Palo Alto Networks - CASB  ----- -----  ----- */


    export const casbPaloAltoFeatures  : Feature[] = [
      {
        title: "Cloud Application Discovery",
        description:
          "  Identifies both sanctioned and unsanctioned SaaS applications being used by employees, providing visibility into cloud app usage and associated risks.",
        // image: PLACEHOLDER,
      },
      {
        title: "Data Protection",
        description:
          "Implements granular policies to control how sensitive data is shared, accessed, and protected across SaaS applications.",
        // image: PLACEHOLDER,
      },
      {
        title: "User and Entity Behavior Analytics (UEBA)",
        description:
          "Uses machine learning to analyze user activity patterns and detect anomalous behaviors that may indicate compromised accounts or malicious insider activity.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud Threat Protection",
        description:
          "Provides robust protection against cloud-specific threats like ransomware, account takeovers, and data exfiltration.",
        // image: PLACEHOLDER,
      },
      {
        title: " Advanced Analytics",
        description:
          "Offers detailed reporting and analytics to provide actionable insights into cloud app usage and security posture.",
        // image: PLACEHOLDER,
      },
    ]

  
    export const casbPaloAltoBenefits : Benefit[] = [
  
      {
        text: "SaaS Security Monitoring: Detects and responds to suspicious behavior or data breaches across cloud applications like Office 365, Box, and Salesforce.",
        position: "left",
      },
      {
        text: "Threat Intelligence: Uses threat intelligence and contextual analysis to detect cloud-specific threats in real-time.",
        position: "right",
      },
      {
        text: "Data Loss Prevention: Protects data through encryption, tokenization, and strong access controls to prevent leakage or theft of sensitive information.",
        position: "left",
      },
    ]


      /*  ----- ----- -----  Cloud Access Security Brokers (CASB)  ----- -----  ----- */
    /*  ----- ----- -----  Trend Micro Cloud App Security - CASB  ----- -----  ----- */
    
    export const casbTrendMicroFeatures  : Feature[] = [
      {
        title: " Data Loss Prevention (DLP)",
        description:
          " Provides extensive DLP capabilities to prevent the leakage of sensitive data to unauthorized users or outside the organization.",
        // image: PLACEHOLDER,
      },
      {
        title: "Advanced Threat Protection",
        description:
          "Detects and blocks threats like malware, ransomware, and phishing attempts within cloud applications.",
        // image: PLACEHOLDER,
      },
      {
        title: "Encryption & Tokenization",
        description:
          " Protects sensitive data by encrypting it or replacing it with tokens to ensure its confidentiality while in use.",
        // image: PLACEHOLDER,
      },
      {
        title: "Compliance Support",
        description:
          "Offers tools to help organizations meet various compliance standards, including GDPR, HIPAA, and PCI-DSS.",
        // image: PLACEHOLDER,
      },
      {
        title: " Visibility and Reporting",
        description:
          "Provides detailed insights and reporting on cloud app usage, risk levels, and security threats.",
        // image: PLACEHOLDER,
      },
    ]

  
    export const casbTrendMicroBenefits : Benefit[] = [
  
      {
        text: "Protection for Microsoft 365: Offers advanced security capabilities for Microsoft 365 applications, including Exchange, OneDrive, and Teams.",
        position: "left",
      },
      {
        text: "Compliance Management: Enforces compliance policies across cloud applications to meet industry regulations and standards.",
        position: "right",
      },
      {
        text: " Cloud Threat Mitigation: Protects cloud apps from common security threats such as data breaches, account compromise, and insider threats.",
        position: "left",
      },
    ]
    

      /*  ----- ----- -----  Cloud Access Security Brokers (CASB)  ----- -----  ----- */
    /*  ----- ----- -----  PROOFPOINT - CASB  ----- -----  ----- */
    
    export const casbProofPointFeatures  : Feature[] = [
      {
        title: " Data Loss Prevention (DLP)",
        description:
          " Provides extensive DLP capabilities to prevent the leakage of sensitive data to unauthorized users or outside the organization.",
        // image: PLACEHOLDER,
      },
      {
        title: "Advanced Threat Protection",
        description:
          "Detects and blocks threats like malware, ransomware, and phishing attempts within cloud applications.",
        // image: PLACEHOLDER,
      },
      {
        title: "Encryption & Tokenization",
        description:
          " Protects sensitive data by encrypting it or replacing it with tokens to ensure its confidentiality while in use.",
        // image: PLACEHOLDER,
      },
      {
        title: "Compliance Support",
        description:
          " Offers tools to help organizations meet various compliance standards, including GDPR, HIPAA, and PCI-DSS.",
        // image: PLACEHOLDER,
      },
      {
        title: " Visibility and Reporting",
        description:
          " Provides detailed insights and reporting on cloud app usage, risk levels, and security threats.",
        // image: PLACEHOLDER,
      },
    ]

  
    export const casbProofPointBenefits : Benefit[] = [
  
      {
        text: "Protection for Microsoft 365: Offers advanced security capabilities for Microsoft 365 applications, including Exchange, OneDrive, and Teams..",
        position: "left",
      },
      {
        text: "Compliance Management: Enforces compliance policies across cloud applications to meet industry regulations and standards.",
        position: "right",
      },
      {
        text: " Cloud Threat Mitigation: Protects cloud apps from common security threats such as data breaches, account compromise, and insider threats.",
        position: "left",
      },
    ]
    

     /*  ----- ----- -----  Cloud Access Security Brokers (CASB)  ----- -----  ----- */
    /*  ----- ----- -----  IDAAS Identity as a Service (IDaaS) ----- -----  ----- */
    
    export const idaasOktaFeatures  : Feature[] = [
      {
        title: "  Single Sign-On (SSO) ",
        description:
          "Okta’s SSO allows users to access multiple applications with a single login, improving user convenience and productivity while ensuring secure access to corporate systems.",
        // image: PLACEHOLDER,
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        description:
          " Okta provides a robust MFA solution to prevent unauthorized access. It supports a wide range of methods, including biometrics, push notifications, and OTPs (one-time passcodes).",
        // image: PLACEHOLDER,
      },
      {
        title: " API Access Management",
        description:
          "Okta enables secure and scalable API authentication, ensuring that only authorized systems and users can interact with APIs.",
        // image: PLACEHOLDER,
      },
      {
        title: " Adaptive Authentication",
        description:
          "Okta uses behavioral analytics to assess user risk and adapt authentication requirements accordingly, adding an extra layer of security without compromising user experience.",
        // image: PLACEHOLDER,
      },
      {
        title: " Lifecycle Management",
        description:
          " Okta automates user provisioning and de-provisioning, ensuring that access rights are consistently updated across the organization as users join, move, or leave.",
        // image: PLACEHOLDER,
      },
    ]

    export const idaasMicrosoftFeatures  : Feature[] = [
      {
        title: "  Single Sign-On (SSO)",
        description:
          "Azure AD enables users to access a wide range of applications and resources through a single set of credentials, enhancing productivity and reducing password fatigue.",
        // image: PLACEHOLDER,
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        description:
          " Azure AD supports MFA to enhance security by requiring users to provide additional verification, such as phone calls, text messages, or the Microsoft Authenticator app.",
        // image: PLACEHOLDER,
      },
      {
        title: " Conditional Access",
        description:
          "Azure AD’s conditional access policies allow businesses to apply rules and conditions to grant or block access based on user location, device health, and more. This helps mitigate risks associated with untrusted devices or networks.",
        // image: PLACEHOLDER,
      },
      {
        title: "Identity Protection",
        description:
          "Azure AD uses machine learning and AI to detect suspicious login patterns and risky behaviors, enabling automated responses to potential threats.",
        // image: PLACEHOLDER,
      },
      {
        title: "B2B and B2C Collaboration",
        description:
          "Azure AD allows organizations to securely share resources with partners (B2B) and provide external users (B2C) with secure access to their services.",
        // image: PLACEHOLDER,
      },
    ]

    

    export const idaasGoogleFeatures  : Feature[] = [
      {
        title: "  Single Sign-On (SSO)",
        description:
          " Google Workspace Identity allows users to sign in once and gain access to a wide variety of Google services and third-party apps, improving productivity while maintaining secure access to corporate resources.",
        // image: PLACEHOLDER,
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        description:
          "  Google Workspace Identity enables MFA with several methods, including Google prompts, security keys, and Google Authenticator, to strengthen access security.",
        // image: PLACEHOLDER,
      },
      {
        title: " Identity Management",
        description:
          "The platform allows administrators to manage user accounts, roles, and permissions through an easy-to-use interface.",
        // image: PLACEHOLDER,
      },
      {
        title: "Context-Aware Access",
        description:
          "Google Workspace Identity allows organizations to set policies based on user context, such as location, device status, or the sensitivity of the resource being accessed, to block or allow access.",
        // image: PLACEHOLDER,
      },
      {
        title: "User and Device Management",
        description:
          "Google Workspace Identity integrates with Google’s endpoint management to help organizations enforce security policies for both managed and unmanaged devices.",
        // image: PLACEHOLDER,
      },
    ]


    export const idaasIBMFeatures  : Feature[] = [
      {
        title: "  Single Sign-On (SSO)",
        description:
          " IBM Security Verify simplifies the user experience by allowing users to access a variety of applications with a single login, reducing password fatigue and improving productivity.",
        // image: PLACEHOLDER,
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        description:
          " IBM Security Verify provides adaptive MFA, which requires additional verification methods based on factors like user risk level, device health, and location.",
        // image: PLACEHOLDER,
      },
      {
        title: " Identity Governance & Administration (IGA)",
        description:
          "IBM Security Verify includes tools for automating user provisioning, role management, and compliance reporting, helping organizations streamline identity workflows and reduce administrative overhead.",
        // image: PLACEHOLDER,
      },
      {
        title: "Risk-Based Authentication",
        description:
          "IBM’s platform uses AI and machine learning to assess login behaviors and environmental risks, dynamically adjusting authentication requirements to mitigate threats.",
        // image: PLACEHOLDER,
      },
      {
        title: "User and Device Management",
        description:
          "IBM Security Verify supports federated identity management and secure access to APIs, helping organizations manage both internal and external user access.",
        // image: PLACEHOLDER,
      },
    ]

    export const idaasDuoSecFeatures : Feature[] = [
      {
        title: "  Single Sign-On (SSO)",
        description:
          "Duo provides SSO functionality that reduces the number of passwords users must remember, improving both security and user experience.",
        // image: PLACEHOLDER,
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        description:
          "Duo Security is best known for its MFA capabilities, offering a range of authentication methods, including push notifications, biometrics, and hardware tokens. This ensures that only authorized users can access critical systems.",
        // image: PLACEHOLDER,
      },
      {
        title: "Device Health Monitoring",
        description:
          "Duo goes beyond user authentication by providing device health checks. It ensures that only secure, compliant devices can access corporate resources, enforcing security policies on endpoints.",
        // image: PLACEHOLDER,
      },
      {
        title: "Adaptive Authentication",
        description:
          "Duo’s adaptive authentication adjusts the level of verification required based on risk factors, such as the user’s behavior, location, and device security posture.",
        // image: PLACEHOLDER,
      },
      {
        title: "Zero Trust Security",
        description:
          "Duo supports Zero Trust security principles, where access is continuously verified based on real-time assessments of the user, device, and environment.",
        // image: PLACEHOLDER,
      },
    ]




    export const fortiDLPFeatures: Feature[] = [
      {
        title: "  Content Inspection",
        description:
          "FortiDLP inspects files, emails, and data traffic to detect and prevent leakage of sensitive information. It uses deep content inspection (DLP) to identify confidential data such as personally identifiable information (PII), intellectual property (IP), and financial information.",
        // image: PLACEHOLDER,
      },
      {
        title: "Policy Enforcement",
        description:
          " The solution allows administrators to define granular DLP policies based on data types, destinations, and protocols, ensuring that sensitive information is protected wherever it travels.",
        // image: PLACEHOLDER,
      },
      {
        title: "Centralized Management",
        description:
          "With FortiManager integration, administrators can manage DLP policies, configure settings, and receive real-time alerts from a central console, simplifying the administration of complex environments.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud Integration",
        description:
          "FortiDLP integrates with cloud services and applications to protect sensitive data stored in or accessed through cloud environments.",
        // image: PLACEHOLDER,
      },
      {
        title: "Endpoint Protection",
        description:
          "FortiDLP can be deployed on endpoints to enforce policies directly at the device level, preventing unauthorized file access, transfer, or sharing.",
        // image: PLACEHOLDER,
      },
    ]

    export const fortiDLPBenefits : Benefit[] = [

      {
        text: "Preventing the accidental or malicious sharing of sensitive data through email, web applications, or cloud services.",
        position: "left",
      },
      {
        text: "Protecting corporate intellectual property and financial data from leaks via endpoint devices.",
        position: "right",
      },
      
    ]

/* ----- ----- ----- ----- ----- DATA SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- ----- DATA SECURITY / DATA LOSS PREVENTION(DLP) ----- ----- -----  */

   

    export const dlpCiscoFeatures: Feature[] = [
      {
        title: "DNS-layer Protection",
        description:
          "Cisco Umbrella prevents data loss by inspecting DNS requests and blocking connections to risky domains, ensuring that sensitive data is not inadvertently exposed or leaked through malicious websites.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud Security ",
        description:
          "Umbrella’s DLP solution focuses on preventing data breaches from cloud apps and services by monitoring and controlling access to cloud storage platforms such as Google Drive, Dropbox, and OneDrive.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud Security",
        description:
          " Umbrella’s DLP solution focuses on preventing data breaches from cloud apps and services by monitoring and controlling access to cloud storage platforms such as Google Drive, Dropbox, and OneDrive.",
        // image: PLACEHOLDER,
      },
      {
        title: "Granular DLP Policies",
        description:
          "It enables granular policy control based on users, devices, or applications, ensuring that data is protected as it moves across corporate networks and cloud environments.",
        // image: PLACEHOLDER,
      },
      {
        title: "Real-time Threat Intelligence",
        description:
          "Umbrella provides real-time data loss prevention by leveraging Cisco's extensive threat intelligence network to block communications with known malicious sources or destinations.",
        // image: PLACEHOLDER,
      },
    ]

    export const dlpCiscoBenefits : Benefit[] = [

      {
        text: "Safeguarding data from cloud-based threats and preventing unauthorized cloud data transfers.",
        position: "left",
      },
      {
        text: "Protecting against phishing and other internet-based threats that could result in data leakage.",
        position: "right",
      },
      
    ]


    export const dlpPaloAltoFeatures : Feature[] = [
      {
        title: "Cloud Access Security Broker (CASB)",
        description:
          "Prisma DLP includes CASB functionality to monitor user activity and data interactions with cloud services, detecting risky behavior and preventing unauthorized data transfers.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud Security Posture Management (CSPM) ",
        description:
          "Prisma provides continuous assessment of security postures across cloud environments, ensuring compliance with industry standards and preventing misconfigurations that could lead to data loss.",
        // image: PLACEHOLDER,
      },
      {
        title: " Advanced Content Inspection",
        description:
          "Prisma uses advanced DLP policies to inspect data being uploaded or downloaded from cloud applications, ensuring that sensitive data such as credit card numbers, PII, and medical records are not exposed.",
        // image: PLACEHOLDER,
      },
      {
        title: "Data Identification and Classification",
        description:
          "Prisma DLP can automatically identify and classify sensitive data in cloud storage, enabling automated enforcement of DLP policies based on data type.",
        // image: PLACEHOLDER,
      },
      
    ]


    export const dlpPaloAltoBenefits : Benefit[] = [

      {
        text: "Enabling secure collaboration on cloud platforms by preventing the accidental sharing of sensitive data.",
        position: "left",
      },
      {
        text: "Protecting intellectual property and personally identifiable information stored in or shared through cloud environments.",
        position: "right",
      },
      
    ]




    export const dlpTrendMicroFeatures : Feature[] = [
      {
        title: "Data Loss Prevention Across Multiple Channels",
        description:
          " Trend Micro DLP protects sensitive data from being leaked via email, USB devices, web applications, cloud storage, and print services.",
        // image: PLACEHOLDER,
      },
      {
        title: "Real-time Monitoring and Blocking ",
        description:
          "The solution offers real-time data monitoring and blocking of data leakage, which allows for immediate action to be taken in case of a potential breach.",
        // image: PLACEHOLDER,
      },
      {
        title: " Content Discovery and Classification",
        description:
          "Trend Micro DLP includes advanced content discovery capabilities to locate sensitive data, categorize it, and apply appropriate protective measures. This includes recognizing specific data types like PII and financial records.",
        // image: PLACEHOLDER,
      },
      {
        title: "Content Discovery and Classification",
        description:
          "Trend Micro DLP includes advanced content discovery capabilities to locate sensitive data, categorize it, and apply appropriate protective measures. This includes recognizing specific data types like PII and financial records.",
        // image: PLACEHOLDER,
      },
      
    ]


    export const dlpTrendMicroBenefits : Benefit[] = [

      {
        text: "Securing confidential client data to prevent leakage via email or USB drives.",
        position: "left",
      },
      {
        text: "Preventing data exposure from employees sharing sensitive files through cloud applications or external storage devices.",
        position: "right",
      },
      
    ]



    export const dlpVersaFeatures : Feature[] = [
      {
        title: " Unified Security Platform",
        description:
          "Versa combines DLP with other security features like firewall, intrusion detection/prevention, secure web gateway, and VPN to offer holistic protection for data.",
        // image: PLACEHOLDER,
      },
      {
        title: "Endpoint and Network DLP",
        description:
          " Versa provides protection across both endpoints and the network, ensuring that sensitive data is safeguarded as it moves across the enterprise network.",
        // image: PLACEHOLDER,
      },
      {
        title: " Endpoint and Network DLP",
        description:
          "Versa provides protection across both endpoints and the network, ensuring that sensitive data is safeguarded as it moves across the enterprise network.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud and Remote Security",
        description:
          "Versa’s DLP works seamlessly with cloud applications and remote workers, ensuring secure access to corporate data while preventing leaks.",
        // image: PLACEHOLDER,
      },
      
    ]


    export const dlpVersaBenefits : Benefit[] = [

      {
        text: "Preventing data breaches while enabling secure remote work environments.",
        position: "left",
      },
      {
        text: "Protecting sensitive data shared across multiple locations or between branch offices.",
        position: "right",
      },
      
    ]


    export const dlpMicrosoftFeatures : Feature[] = [
      {
        title: " Sensitive Information Types",
        description:
          "Purview DLP includes a library of predefined sensitive information types, including financial data, PII, and healthcare data, enabling automatic policy enforcement based on these types.",
        // image: PLACEHOLDER,
      },
      {
        title: "Sensitive Information Types: ",
        description:
          "Purview DLP includes a library of predefined sensitive information types, including financial data, PII, and healthcare data, enabling automatic policy enforcement based on these types.",
        // image: PLACEHOLDER,
      },
      {
        title: " Cloud and Endpoint Coverage",
        description:
          " DLP policies extend beyond Microsoft 365 to include endpoints and mobile devices, protecting data no matter where it resides or is accessed from.",
        // image: PLACEHOLDER,
      },
      {
        title: "Cloud and Endpoint Coverage",
        description:
          "DLP policies extend beyond Microsoft 365 to include endpoints and mobile devices, protecting data no matter where it resides or is accessed from.",
        // image: PLACEHOLDER,
      },
      
    ]


    export const dlpMicrosoftBenefits : Benefit[] = [

      {
        text: "Ensuring compliance with data protection regulations like GDPR and HIPAA within Microsoft 365 environments.",
        position: "left",
      },
      {
        text: "Preventing unauthorized sharing or accidental exposure of sensitive data across enterprise collaboration tools.",
        position: "right",
      },
      
    ]



   

/* ----- ----- ----- ----- ----- EMAIL SECURITY ----- ----- ----- ----- ----- */
/*  ----- ----- ----- SECURE EMAIL GATEWAYS ----- ----- -----  */

export const segProofPointFeatures : Feature[] = [
  {
    title: " Targeted Threat Protection",
    description:
      "Detects phishing, ransomware, and zero-day attacks using dynamic sandboxing and URL rewriting.",
    // image: PLACEHOLDER,
  },
  {
    title: "Email Encryption",
    description:
      "Ensures sensitive data is protected through seamless encryption.",
    // image: PLACEHOLDER,
  },
  {
    title: "Data Loss Prevention (DLP): ",
    description:
      "Monitors and prevents unauthorized sharing of sensitive information.",
    // image: PLACEHOLDER,
  },
  {
    title: "User Education",
    description:
      "Includes a robust security awareness training module to educate users on identifying and avoiding threats.",
    // image: PLACEHOLDER,
  },
  
]


export const segProofPointBenefits : Benefit[] = [

  {
    text: "Ideal for enterprises seeking advanced threat detection and user training.",
    position: "left",
  },
  {
    text: "Regulatory compliance for industries like finance and healthcare.",
    position: "right",
  },
]
  

export const segBarracudaFeatures : Feature[] = [
  {
    title: " Advanced Threat Protection (ATP)",
    description:
      "Uses AI-driven detection to block malware and phishing attacks.",
    // image: PLACEHOLDER,
  },
  {
    title: "Spam and Malware Filtering",
    description:
      " Blocks spam and malicious content using heuristic analysis.",
    // image: PLACEHOLDER,
  },
  {
    title: "Data Loss Prevention",
    description:
      "Protects sensitive data with customizable DLP rules.",
    // image: PLACEHOLDER,
  },
  {
    title: "Archiving and Backup",
    description:
      "Ensures email continuity and compliance with built-in archiving.",
    // image: PLACEHOLDER,
  },
  
]


export const segBarracudaBenefits : Benefit[] = [

  {
    text: "SMBs and mid-sized businesses looking for an affordable and effective SEG.",
    position: "left",
  },
  {
    text: "Organizations seeking a straightforward deployment process.",
    position: "right",
  },
]


export const segCiscoFeatures : Feature[] = [
  {
    title: "Advanced Malware Protection (AMP)",
    description:
      " Blocks known and unknown threats with continuous monitoring.",
    // image: PLACEHOLDER,
  },
  {
    title: "Spam and Malware Filtering",
    description:
      "Uses reputation-based filtering to reduce spam significantly.",
    // image: PLACEHOLDER,
  },
  {
    title: "Encryption and DLP",
    description:
      "Ensures compliance with encryption and policy-based DLP.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Mailbox Defense",
    description:
      "Specifically designed for Office 365 and Google Workspace environments.",
    // image: PLACEHOLDER,
  },
  
]


export const segCiscoBenefits : Benefit[] = [

  {
    text: "Enterprises with a significant investment in Cisco infrastructure.",
    position: "left",
  },
  {
    text: "Organizations requiring advanced integration with other Cisco security products.",
    position: "right",
  },
]


export const segFortinetFeatures : Feature[] = [
  {
    title: "AI-Driven Threat Detection",
    description:
      "Leverages AI to block advanced threats, including spear phishing and BEC.",
    // image: PLACEHOLDER,
  },
  {
    title: "DLP and Encryption",
    description:
      " Ensures compliance by protecting sensitive information.",
    // image: PLACEHOLDER,
  },
  {
    title: "Advanced Threat Protection",
    description:
      "Includes sandboxing for real-time threat analysis.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integrated Security Fabric",
    description:
      "Provides end-to-end security across multiple attack vectors.",
    // image: PLACEHOLDER,
  },
  
]


export const segFortinetBenefits : Benefit[] = [

  {
    text: "Organizations with existing Fortinet infrastructure.",
    position: "left",
  },
  {
    text: "Businesses seeking an integrated security approach.",
    position: "right",
  },
]
 
export const segTrendMicroFeatures : Feature[] = [
  {
    title: "Predictive Machine Learning",
    description:
      "Identifies and blocks threats before they reach users.",
    // image: PLACEHOLDER,
  },
  {
    title: "URL and Attachment Analysis",
    description:
      "Protects against malicious links and attachments using advanced sandboxing.",
    // image: PLACEHOLDER,
  },
  {
    title: "Data Protection",
    description:
      "Ensures compliance with policy-based encryption and DLP.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration",
    description:
      "Works seamlessly with Microsoft 365 and Google Workspace.",
    // image: PLACEHOLDER,
  },
  
]


export const segTrendMicroBenefits : Benefit[] = [

  {
    text: "Organizations with existing Fortinet infrastructure.",
    position: "left",
  },
  {
    text: "Businesses seeking an integrated security approach.",
    position: "right",
  },
]


export const segSecurenceFeatures : Feature[] = [
  {
    title: "Spam and Virus Filtering",
    description:
      "Blocks unwanted emails and malicious attachments with high accuracy.",
    // image: PLACEHOLDER,
  },
  {
    title: "Policy Management",
    description:
      "Offers customizable filtering policies for different user groups.",
    // image: PLACEHOLDER,
  },
  {
    title: "Archiving",
    description:
      "Ensures compliance and easy retrieval of emails.",
    // image: PLACEHOLDER,
  },
  {
    title: "Continuity Features",
    description:
      "Provides email redundancy to ensure business continuity.",
    // image: PLACEHOLDER,
  },
  
]


export const segSecurenceBenefits : Benefit[] = [

  {
    text: "Organizations with existing Fortinet infrastructure.",
    position: "left",
  },
  {
    text: "Businesses seeking an integrated security approach.",
    position: "right",
  },
]


/*  ----- ----- ----- EMAIL SPAM PROOFPOINT ----- ----- -----  */
export const spamProofpointFeatures : Feature[] = [
  {
    title: "Targeted Attack Protection (TAP)",
    description:
      "Advanced threat detection using AI and machine learning to identify sophisticated attacks.",
    // image: PLACEHOLDER,
  },
  {
    title: "Email Filtering",
    description:
      "Comprehensive spam and malware blocking with advanced filtering techniques.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Response Auto-Pull (TRAP)",
    description:
      "Automatically removes malicious emails post-delivery.",
    // image: PLACEHOLDER,
  },
  {
    title: "User Training",
    description:
      "Integrated security awareness training to educate employees on phishing threats.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Security",
    description:
      "Protection for cloud-based platforms like Office 365 and G Suite.",
    // image: PLACEHOLDER,
  },
  
]


export const spamProofpointBenefits : Benefit[] = [

  {
    text: "Integrations with broader security ecosystems.",
    position: "left",
  },
  {
    text: "Highly customisable policies for email filtering and protection.",
    position: "right",
  },
]


/*  ----- ----- ----- EMAIL ENCRYPTION PROOFPOINT ----- ----- -----  */
export const emailProofpointFeatures : Feature[] = [
  {
    title: "End-to-End Encryption",
    description:
      "Ensures secure delivery and viewing of emails.",
    // image: PLACEHOLDER,
  },
  {
    title: "Data Loss Prevention (DLP)",
    description:
      " Scans outgoing messages for sensitive data and enforces encryption or blocking as necessary.",
    // image: PLACEHOLDER,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Supports GDPR, HIPAA, PCI DSS, and other industry standards.",
    // image: PLACEHOLDER,
  },
  {
    title: "Real-Time Threat Protection",
    description:
      "Protects against email-based threats such as phishing and malware.",
    // image: PLACEHOLDER,
  },
  {
    title: "User-Friendly Management",
    description:
      "Offers an intuitive interface for administrators to manage encryption policies and review encrypted email logs.",
    // image: PLACEHOLDER,
  },
  
]


export const emailProofpointBenefits : Benefit[] = [

  {
    text: "Integrations with broader security ecosystems.",
    position: "left",
  },
  {
    text: "Highly customisable policies for email filtering and protection.",
    position: "right",
  },
]

/*  ----- ----- ----- DATA LOSS PREVENTION PROOFPOINT ----- ----- -----  */
export const dataProofpointFeatures : Feature[] = [
  {
    title: "End-to-End Encryption",
    description:
      "Proofpoint provides end-to-end encryption, email DLP (Data Loss Prevention), and user-friendly secure message portals. It integrates with existing email systems to simplify encryption deployment.",
    // image: PLACEHOLDER,
  },
  {
    title: "Technology",
    description:
      " Uses TLS encryption and advanced machine learning to identify sensitive information in emails.",
    // image: PLACEHOLDER,
  },
  {
    title: "Regulatory ",
    description:
      " Meets compliance standards like HIPAA, GDPR, and CCPA, ensuring that businesses operate securely in regulated industries.",
    // image: PLACEHOLDER,
  },
 
]


/*  ----- ----- ----- Endpoint Protection Platforms (EPP)  ----- ----- -----  */
export const eppTrendMicroFeatures : Feature[] = [
  {
    title: "Behavioral Analysis",
    description:
      "Trend Micro uses AI-powered behavioral monitoring to detect and respond to unusual activities, minimizing the risk of zero-day exploits.",
    // image: PLACEHOLDER,
  },
  {
    title: " Integrated Threat Intelligence",
    description:
      " By leveraging its Smart Protection Network, Trend Micro delivers real-time threat intelligence to preemptively block threats.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "The platform is optimized for Windows, Mac, and Linux systems, ensuring comprehensive protection across diverse environments.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud App Security",
    description:
      "Protects cloud applications such as Office 365, Google Workspace, and more.",
    // image: PLACEHOLDER,
  },
  {
    title: "Centralized Management Console",
    description:
      " A single-pane-of-glass dashboard simplifies deployment, management, and reporting.",
    // image: PLACEHOLDER,
  },
 
]


/*  ----- ----- -----  Endpoint Detection and Response (EDR)  ----- ----- -----  */
export const edrCrowdStrikeFeatures : Feature[] = [
  {
    title: "Real-Time Threat Detection",
    description:
      "Provides continuous monitoring and alerts for suspicious activities.",
    // image: PLACEHOLDER,
  },
  {
    title: " Behavioral Analytics ",
    description:
      "Uses artificial intelligence (AI) and machine learning (ML) to detect anomalies and prevent breaches.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud-Delivered ",
    description:
      "Eliminates the need for on-premises hardware, ensuring scalability and ease of deployment.",
    // image: PLACEHOLDER,
  },
  {
    title: "Incident Response ",
    description:
      "Offers tools for threat hunting, forensic analysis, and remediation.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Leverages CrowdStrike’s extensive threat intelligence database for proactive defense.",
    // image: PLACEHOLDER,
  },
 
]

export const edrCrowdStrikeBenefits : Benefit[] = [

  {
    text: "Reduces the dwell time of threats.",
    position: "left",
  },
  {
    text: "Provides unparalleled visibility across endpoints.",
    position: "right",
  },
  {
    text: "Simplifies security operations through automation.",
    position: "left",
  }
]



/*  ----- ----- -----  Mobile Device Management (MDM)   ----- ----- -----  */
export const mdmSentinelFeatures : Feature[] = [
  {
    title: "Real-time Threat Detection ",
    description:
      "Monitors mobile activity for malicious behavior, such as phishing attempts, device compromise, or application misuse.",
    // image: PLACEHOLDER,
  },
  {
    title: " Zero Trust Integration",
    description:
      " Enforces zero-trust principles by evaluating device health before granting access to sensitive resources.",
    // image: PLACEHOLDER,
  },
  {
    title: "Advanced Security ",
    description:
      "Identifies and blocks device, network, and application-level threats without requiring user interaction.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud-Native ",
    description:
      "Easily deployable via a cloud-based platform with lightweight agents, ensuring minimal impact on device performance.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration",
    description:
      "Seamlessly integrates with popular MDMs like Microsoft Intune and VMware Workspace ONE for enhanced mobile security.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration",
    description:
      "Seamlessly integrates with popular MDMs like Microsoft Intune and VMware Workspace ONE for enhanced mobile security.",
    // image: PLACEHOLDER,
  }
 
]

export const mdmSentinelBenefits : Benefit[] = [

  {
    text: "Organizations requiring high-level security for BYOD (Bring Your Own Device) policies.",
    position: "left",
  },
  {
    text: "Enterprises dealing with sensitive data where phishing and malware are high risks.",
    position: "right",
  },
  {
    text: "Hybrid workforces needing protection across personal and corporate-owned devices.",
    position: "left",
  }
]



/*  ----- -----  Application Whitelisting   ----- -----  */
/*  ----- ----- -----   VMware Carbon Black   ----- ----- -----  */
export const appVMwareFeatures : Feature[] = [
  {
    title: "Behavioral Endpoint Threat Detection",
    description:
      "Monitors application behavior in real time to identify suspicious activity.",
    // image: PLACEHOLDER,
  },
  {
    title: " Dynamic Whitelisting ",
    description:
      "Automatically adapts to the unique application environments of businesses, ensuring minimal disruption.",
    // image: PLACEHOLDER,
  },
  {
    title: " Cloud-Native Security ",
    description:
      " Delivers robust performance and scalability with its cloud-based architecture.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Enriches detection capabilities with global threat intelligence.",
    // image: PLACEHOLDER,
  }
 
]

export const appVMwareBenefits : Benefit[] = [

  {
    text: "Prevents unauthorized applications from running on endpoints, effectively mitigating malware.",
    position: "left",
  },
  {
    text: "Reduces attack surfaces by locking down endpoint configurations.",
    position: "right",
  },
  {
    text: "Provides detailed forensic insights for incident response.",
    position: "left",
  }
]




/*  ----- ----- -----  Patch Management   ----- ----- -----  */
/*  ----- -----  Microsoft Endpoint Configuration Manager (MECM) ----- -----  */
export const patchMicrosoftFeatures : Feature[] = [
  {
    title: "Automated Patch Deployment",
    description:
      " MECM enables automated delivery of software updates for Microsoft products and third-party applications.",
    // image: PLACEHOLDER,
  },
  {
    title: " Granular Control",
    description:
      " Offers detailed deployment scheduling, prioritization, and reporting.",
    // image: PLACEHOLDER,
  },
  {
    title: " Cross-Platform Support",
    description:
      " Provides support for Windows, macOS, and Linux systems, ensuring consistent patch application across diverse environments.",
    // image: PLACEHOLDER,
  },
  {
    title: "Security Integration",
    description:
      "Integrated with Microsoft Defender for Endpoint, ensuring timely patching for security vulnerabilities.",
    // image: PLACEHOLDER,
  }
 
]

export const pathMicrosoftBenefits : Benefit[] = [

  {
    text: "Prevents unauthorized applications from running on endpoints, effectively mitigating malware.",
    position: "left",
  },
  {
    text: "Reduces attack surfaces by locking down endpoint configurations.",
    position: "right",
  },
  {
    text: "Provides detailed forensic insights for incident response.",
    position: "left",
  }
]

// Identity and access management
// Multi Factor Authentication (MFA
   

export const identityFeatures: Feature[] = [
  {
    title: "Risk-Based Authentication",
    description:
      "Leverages contextual factors such as user location, device type, and behavior patterns to adjust authentication requirements dynamically.",
    // image: PLACEHOLDER,
  },
  {
    title: "Flexible Authentication Methods",
    description:
      "Supports a wide array of factors, including biometrics, push notifications, security keys, and SMS-based OTPs.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration",
    description:
      "Easily integrates with applications, VPNs, and on-premise systems via Okta’s pre-built integrations and APIs.",
    // image: PLACEHOLDER,
  },
  {
    title: "Custom Policies",
    description:
      "Enables administrators to create granular policies tailored to their organization’s specific needs.",
    // image: PLACEHOLDER,
  },
  {
    title: "Compliance",
    description:
      "Meets global regulatory requirements, including GDPR, HIPAA, and SOC 2 compliance.",
    // image: PLACEHOLDER,
  }
];

export const identityUseCases:UseCase[] = [
  {
    title: "Securing workforce access to cloud-based and on-premises resources.",
  },
  {
    title: "Strengthening security for organizations using Microsoft cloud services.",
  },
  {
    title: "Website: Microsoft Entra ID (formerly Azure Active Directory) | Microsoft Security",
    link:"https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id"
  },
]

// cisco

export const ciscoFeatures: Feature[] = [
  {
    title: "Push-Based Authentication",
    description:
      "Easy and fast authentication via mobile push notifications.",
    // image: PLACEHOLDER,
  },
  {
    title: "Zero Trust Framework",
    description:
      "Verifies the trustworthiness of users and devices before granting access.",
    // image: PLACEHOLDER,
  },
  {
    title: "Device Insights",
    description:
      "Provides visibility into user devices, allowing administrators to enforce policies based on device security posture.",
    // image: PLACEHOLDER,
  },
  {
    title: "Broad Compatibility",
    description:
      "Supports integration with VPNs, cloud apps, and on-premises systems.",
    // image: PLACEHOLDER,
  },
  {
    title: "Adaptive Policies",
    description:
      "Allows fine-grained access control based on contextual factors.",
    // image: PLACEHOLDER,
  }
];

export const ciscoUseCases: UseCase[] = [
  {
    title: "Securing remote workforce and bring-your-own-device (BYOD) environments.",
  },
  {
    title: "Simplifying user authentication for critical business applications.",
  },
  {
    title: "Website: Cisco | Duo Security",
    link: "https://duo.com/partnerships/technology-partners/select-partners/cisco"
  }
];

export const microsoftEntraFeatures: Feature[] = [
  {
    title: "Conditional Access",
    description:
      "Policies based on user risk, sign-in risk, and device compliance.",
    // image: PLACEHOLDER,
  },
  {
    title: "Passwordless Authentication",
    description:
      "Supports biometrics and security keys for a seamless login experience.",
    // image: PLACEHOLDER,
  },
  {
    title: "Identity Protection",
    description:
      "Detects and mitigates identity-based threats using advanced AI.",
    // image: PLACEHOLDER,
  },
  {
    title: "Self-Service Capabilities",
    description:
      "Allows users to manage passwords and security settings autonomously.",
    // image: PLACEHOLDER,
  },
  {
    title: "Extensive Integration",
    description:
      "Compatible with a wide range of enterprise tools and systems.",
    // image: PLACEHOLDER,
  }
];

export const microsoftUseCases: UseCase[] = [
  {
    title: "Simplifying identity management for hybrid work environments.",
  },
  {
    title: "Strengthening security for organizations using Microsoft cloud services.",
  },
  {
    title: "Website: Microsoft Entra ID (formerly Azure Active Directory) | Microsoft Security",
    link: "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id"
  }
];


export const googleAuthFeatures: Feature[] = [
  {
    title: "Ease of Use",
    description:
      "Simple setup and usage through the Google Authenticator app.",
    // image: PLACEHOLDER,
  },
  {
    title: "TOTP",
    description:
      "Generates secure, time-sensitive codes for authentication.",
    // image: PLACEHOLDER,
  },
  {
    title: "Broad Adoption",
    description:
      "Supported by a wide range of applications and websites.",
    // image: PLACEHOLDER,
  },
  {
    title: "Offline Functionality",
    description:
      "Works without an internet connection after initial setup.",
    // image: PLACEHOLDER,
  },
  {
    title: "Open Standards",
    description:
      "Based on the open TOTP and HMAC-based OTP (HOTP) protocols.",
    // image: PLACEHOLDER,
  }
];

export const googleAuthenticatorUseCases: UseCase[] = [
  {
    title: "Adding an extra layer of security to personal and business accounts.",
  },
  {
    title: "Ensuring secure access to Google Workspace and third-party services.",
  },
  {
    title: "Website: Get verification codes with Google Authenticator - Android - Google Account Help",
    link: "https://support.google.com/accounts/answer/1066447?hl=en&co=GENIE.Platform%3DAndroid"
  }
];


export const fortiTokenFeatures: Feature[] = [
  {
    title: "Hardware and Software Tokens",
    description:
      "Offers flexibility with physical tokens and the FortiToken Mobile app.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration with FortiGate",
    description:
      "Works natively with FortiGate firewalls for VPN and network access control.",
    // image: PLACEHOLDER,
  },
  {
    title: "Time-Based OTP",
    description:
      "Generates time-sensitive OTPs for secure authentication.",
    // image: PLACEHOLDER,
  },
  {
    title: "User Self-Service",
    description:
      "Reduces administrative overhead by allowing users to manage their tokens.",
    // image: PLACEHOLDER,
  },
  {
    title: "Scalability",
    description:
      "Designed for enterprises of all sizes with easy deployment options.",
    // image: PLACEHOLDER,
  }
];

export const fortiTokenUseCases: UseCase[] = [
  {
    title: "Securing VPN connections and network resources.",
  },
  {
    title: "Enhancing the security of Fortinet-based IT environments.",
  },
  {
    title: "Website: FortiToken - Multi Factor Authentication (MFA) | Fortinet.com",
    link: "https://www.fortinet.com/products/identity-access-management/fortitoken",
  },
];



export const globalProtectFeatures: Feature[] = [
  {
    title: "Seamless Integration",
    description: "Works natively with Palo Alto Networks’ security infrastructure.",
  },
  {
    title: "Comprehensive Endpoint Security",
    description: "Ensures devices meet security policies before connecting.",
  },
  {
    title: "Adaptive Access Control",
    description: "Adjusts security requirements based on user behavior and location.",
  },
  {
    title: "Multi-Factor Authentication",
    description: "Supports a range of MFA methods for enhanced security.",
  },
  {
    title: "Advanced Threat Prevention",
    description: "Protects against malware and other cyber threats.",
  },
];

export const globalProtectUseCases: UseCase[] = [
  {
    title: "Providing secure remote access for employees.",
  },
  {
    title: "Enforcing strict compliance and security for sensitive enterprise environments.",
  },
  {
    title: "Website: Set Up Two-Factor Authentication",
    link: "https://docs.paloaltonetworks.com/globalprotect/10-1/globalprotect-admin/globalprotect-user-authentication/set-up-two-factor-authentication",
  },
];

export const oktaFeatures: Feature[] = [
  {
    title: "Universal Directory",
    description:
      "A centralized directory for managing users, devices, and policies across various platforms and applications.",
  },
  {
    title: "Adaptive Authentication",
    description:
      "Uses context-aware policies and machine learning to enforce multi-factor authentication (MFA) based on location, device, and user behavior.",
  },
  {
    title: "Pre-built Integrations",
    description:
      "Supports thousands of applications via the Okta Integration Network (OIN), making SSO deployment seamless.",
  },
  {
    title: "Customizable Access Policies",
    description:
      "Enables organizations to define granular access controls tailored to their specific needs.",
  },
  {
    title: "Zero Trust Security",
    description:
      "Aligns with Zero Trust principles to ensure users and devices are continuously authenticated and authorized.",
  },
];

export const oktaBenefits: Benefit[] = [
  {
    text: "Simplifies access to enterprise applications for employees, partners, and customers.",
    position: "left",
  },
  {
    text: "Reduces password fatigue and IT helpdesk workload.",
    position: "right",
  },
  {
    text: "Enhances security posture with built-in compliance features (GDPR, HIPAA, etc.).",
    position: "left",
  },
];

export const oktaUseCases: UseCase[] = [
  {
    title: "Workforce identity management",
  },
  {
    title: "Customer identity and access management (CIAM)",
  },
  {
    title: "Integration with hybrid and multi-cloud environments",
  },
  {
    title: "Website: Single Sign-On | SSO | Okta",
    link: "https://www.okta.com/products/single-sign-on-workforce-identity/",
  },
];

export const entraFeatures: Feature[] = [
  {
    title: "Conditional Access",
    description: "Enforces granular access policies based on user risk, device compliance, and location.",
  },
  {
    title: "Seamless Integration with Microsoft Ecosystem",
    description: "Fully integrates with Office 365, Dynamics 365, and other Microsoft services.",
  },
  {
    title: "Hybrid Identity Support",
    description: "Supports integration with on-premises Active Directory for hybrid environments.",
  },
  {
    title: "B2B and B2C Identity Management",
    description: "Facilitates secure collaboration with external partners and customers.",
  },
  {
    title: "Identity Protection",
    description: "Leverages machine learning to detect and respond to identity-related risks.",
  },
];

export const entraBenefits: Benefit[] = [
  {
    text: "Increases productivity by enabling users to access all apps with a single set of credentials.",
    position: "left",
  },
  {
    text: "Enhances security with advanced threat detection and risk-based policies.",
    position: "right",
  },
  {
    text: "Simplifies identity management for organizations with mixed on-premises and cloud environments.",
    position: "left",
  },
];

export const entraUseCases: UseCase[] = [
  {
    title: "Enterprise SSO for Microsoft and third-party applications",
  },
  {
    title: "Secure access to cloud and on-premises resources",
  },
  {
    title: "Identity governance and compliance",
  },
  {
    title: "Website: Microsoft Entra Single Sign-On (SSO)",
    link: "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-single-sign-on",
  },
];

export const ciscoDuoFeatures: Feature[] = [
  {
    title: "DUO’s SSO and MFA",
    description:
      "Provides simple and secure user authentication for applications, ensuring Zero Trust access.",
  },
  {
    title: "ISE (Identity Services Engine)",
    description:
      "Centralizes network access control, enabling secure onboarding and segmentation.",
  },
  {
    title: "Umbrella Integration",
    description:
      "Offers cloud-delivered security to protect users from threats during authentication.",
  },
  {
    title: "Context-Aware Access",
    description:
      "DUO and ISE work together to enforce adaptive policies based on user behavior, location, and device health.",
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Provides actionable insights into user authentication and access trends.",
  },
];

export const ciscoDuoBenefits: Benefit[] = [
  {
    text: "Enhances security with multi-layered authentication and continuous monitoring.",
    position: "left",
  },
  {
    text: "Improves user experience with a unified SSO portal.",
    position: "right",
  },
  {
    text: "Simplifies compliance with detailed reporting and audit trails.",
    position: "left",
  },
];

export const ciscoDuoUseCases: UseCase[] = [
  {
    title: "Network access control combined with secure application authentication",
  },
  {
    title: "Endpoint security integration for hybrid workforces",
  },
  {
    title: "Cloud-based threat protection during authentication",
  },
  {
    title: "Website: How to Use Duo Single Sign-On (SSO) | Duo Security",
    link: "https://duo.com/docs/sso",
  },
];

export const fortinetKeyFeatures: Feature[] = [
  {
    title: "Centralized Authentication",
    description:
      "Manages user authentication across networks and applications via LDAP, RADIUS, and SAML.",
  },
  {
    title: "Identity Federation",
    description:
      "Supports SSO for cloud and on-premises applications through SAML 2.0 and OAuth.",
  },
  {
    title: "Role-based Access Control",
    description:
      "Assigns granular permissions based on user roles and group membership.",
  },
  {
    title: "Two-factor Authentication Integration",
    description:
      "Works with FortiToken and other MFA solutions for enhanced security.",
  },
  {
    title: "Scalable Deployment",
    description:
      "Supports large-scale environments with high availability configurations.",
  },
];

export const fortinetUseCases: UseCase[] = [
  {
    title: "Unified SSO for Fortinet and third-party applications",
  },
  {
    title: "Secure network and VPN access",
  },
  {
    title: "Identity management in multi-cloud environments",
  },
  {
    title: "Website: Network & User Identity Authentication Services | FortiAuthenticator",
    link: "https://www.fortinet.com/products/identity-access-management/fortiauthenticator",
  },
];

export const fortinetBenefits: Benefit[] = [
  {
    text: "Reduces complexity by unifying authentication for applications and networks.",
    position: "left",
  },
  {
    text: "Strengthens security with integrated MFA and contextual access policies.",
    position: "right",
  },
  {
    text: "Enhances compliance with detailed logging and audit capabilities.",
    position: "left",
  },
];


export const paloAltoFeatures: Feature[] = [
  {
    title: "Integrated SSO",
    description: "Enables users to access corporate applications securely with single credentials.",
  },
  {
    title: "Zero Trust Network Access (ZTNA)",
    description: "Ensures secure connections by verifying user identity and device posture.",
  },
  {
    title: "Granular Policy Enforcement",
    description: "Applies policies based on user roles, locations, and device compliance.",
  },
  {
    title: "Seamless Integration with Palo Alto Ecosystem",
    description: "Works alongside Palo Alto firewalls and Prisma Access.",
  },
  {
    title: "Scalable Remote Access",
    description: "Provides secure VPN access for distributed workforces.",
  },
];

export const paloAltoBenefits: Benefit[] = [
  {
    text: "Enhances security for remote workers with context-aware policies.",
    position: "left",
  },
  {
    text: "Improves user experience with SSO and simplified access workflows.",
    position: "right",
  },
  {
    text: "Integrates easily with existing Palo Alto security solutions.",
    position: "left",
  },
];

export const paloAltoUseCases: UseCase[] = [
  {
    title: "Secure remote access for hybrid and distributed teams",
  },
  {
    title: "SSO for on-premises and cloud-based applications",
  },
  {
    title: "ZTNA for comprehensive endpoint security",
  },
  {
    title: "Website: Securing the Future with Precision AI - Palo Alto Networks",
    link: "https://www.paloaltonetworks.com/precision-ai-security?utm_source=google-jg-amer-portfolio-brnd-port&utm_medium=paid_search&utm_campaign=google-portfolio-portfolio-amer-multi-awareness-en-ai_native_security-brand&utm_content=7014u000001eJWRAA2&utm_term=palo%20alto%20networks%20ai&cq_plac=&cq_net=g&gad_source=1&gclid=EAIaIQobChMIzqnV16v9igMV9DrUAR0Ofz2eEAAYASAAEgIUSvD_BwE",
  },
];


export const rapidFeatures: Feature[] = [
  {
    title: "IAM Integration",
    description: "Integration with existing IAM platforms to track and analyze user behavior.",
  },
  {
    title: "Real-Time Alerts",
    description: "Real-time alerts for unusual or suspicious activity.",
  },
  {
    title: "Insider Threat Detection",
    description: "Machine learning and behavioral analytics to detect insider threats.",
  },
  {
    title: "Compliance and Reporting",
    description: "Compliance and reporting features for audits and regulatory requirements.",
  },
];

export const QRadarFeatures: Feature[] = [
  {
    title: "Real-Time Monitoring",
    description: "Real-time monitoring and correlation of user activity and identity events.",
  },
  {
    title: "Anomaly Detection",
    description: "Machine learning-driven anomaly detection to identify unauthorized access or malicious intent.",
  },
  {
    title: "Forensic Reporting",
    description: "Detailed reporting and visualization tools for forensic analysis.",
  },
  {
    title: "Seamless IAM Integration",
    description: "Seamless integration with other IBM and third-party IAM solutions for unified threat intelligence.",
  },
];


export const ProofpointFeatures: Feature[] = [
  {
    title: "Email-Based UBA",
    description: "Detects potential account compromise via abnormal email access patterns.",
  },
  {
    title: "IAM Integration",
    description: "Integration with existing IAM solutions to enhance threat detection and response.",
  },
  {
    title: "Advanced Threat Detection",
    description: "Uses advanced machine learning algorithms for identifying both external and internal threats.",
  },
  {
    title: "Comprehensive Reporting",
    description: "Provides reporting and analytics for security teams to act on anomalous behavior.",
  },
];


export const FortinetFeatures: Feature[] = [
  {
    title: "Active Directory Integration",
    description: "Integration with Active Directory and Azure AD for identity monitoring.",
  },
  {
    title: "Behavioral Analytics",
    description: "Machine learning to detect abnormal user behavior and potential security breaches.",
  },
  {
    title: "Real-Time Threat Detection",
    description: "Real-time alerts and detailed investigation tools for threat detection and response.",
  },
  {
    title: "Cloud-Native Scalability",
    description: "Cloud-native capabilities for scalability and seamless integration with other Microsoft security products.",
  },
];


export const fortiFeatures: Feature[] = [
  {
    title: "Next-Generation Firewall (NGFW)",
    description: "Combines traditional firewall features with advanced intrusion prevention systems (IPS), application control, and deep packet inspection.",
  },
  {
    title: "Secure SD-WAN Integration",
    description: "Built-in support for Secure SD-WAN ensures high performance and secure connectivity for distributed enterprises.",
  },
  {
    title: "AI-Driven Threat Intelligence",
    description: "FortiGuard Labs powers FortiGate with real-time threat intelligence to identify and neutralize emerging threats.",
  },
  {
    title: "Ease of Deployment",
    description: "Offers centralized management through FortiManager and intuitive interfaces, simplifying configuration and maintenance.",
  },
];


export const nextGenFeatures: Feature[] = [
  {
    title: "App-ID and User-ID Technology",
    description: "Enables precise application control and user-specific policies, enhancing security and reducing attack surfaces.",
  },
  {
    title: "Advanced Threat Prevention",
    description: "Combines IPS, anti-malware, URL filtering, and DNS security in a single platform.",
  },
  {
    title: "Cloud-Native Security",
    description: "Seamlessly integrates with Palo Alto’s Prisma Access for secure cloud adoption.",
  },
  {
    title: "Machine Learning-Powered Analysis",
    description: "Continuously identifies and adapts to evolving threats without manual intervention.",
  },
];


export const firepowerFeatures: Feature[] = [
  {
    title: "Advanced Malware Protection (AMP)",
    description: "Provides file analysis and retrospective security to detect and mitigate persistent threats.",
  },
  {
    title: "Integrated Intrusion Prevention System (IPS)",
    description: "Detects and blocks malicious traffic in real-time.",
  },
  {
    title: "Policy Management and Visibility",
    description: "Cisco’s Firepower Management Center enables centralized and detailed policy control.",
  },
  {
    title: "Seamless Cisco Integration",
    description: "Works in concert with Cisco’s other security products, including SecureX and AnyConnect.",
  },
];


export const barraFeatures: Feature[] = [
  {
    title: "Web Application Firewall (WAF)",
    description: "Protects applications from attacks like SQL injection, cross-site scripting, and bot threats.",
  },
  {
    title: "Advanced Threat Protection",
    description: "Combines sandboxing and behavioral analysis to prevent zero-day attacks.",
  },
  {
    title: "Cloud-Ready Solutions",
    description: "Designed for seamless deployment across public, private, and hybrid clouds.",
  },
  {
    title: "Centralized Management",
    description: "Barracuda Cloud Control offers an easy-to-use interface for managing multiple firewalls.",
  },
];


export const fortigateFeatures: Feature[] = [
  {
    title: "Signature-Based and Anomaly-Based Detection",
    description: "Monitors network traffic for known attack patterns and unusual behaviors.",
  },
  {
    title: "High-Performance Processing",
    description: "Powered by custom ASICs for ultra-low latency threat prevention.",
  },
  {
    title: "Threat Intelligence Integration",
    description: "Constantly updated threat signatures from FortiGuard Labs.",
  },
  {
    title: "Advanced Analytics and Reporting",
    description: "Provides detailed insights into intrusion attempts and system vulnerabilities.",
  },
];


export const altoNetworkFeatures: Feature[] = [
  {
    title: "Inline Detection and Prevention",
    description: "Inspects traffic in real time to block malicious files, known vulnerabilities, and malware.",
  },
  {
    title: "Machine Learning",
    description: "Enhances detection accuracy through behavior analysis and predictive modeling.",
  },
  {
    title: "Comprehensive Signature Database",
    description: "Regularly updated with the latest threat information.",
  },
  {
    title: "SSL Decryption",
    description: "Ensures visibility into encrypted traffic without impacting performance.",
  },
];

export const trendFeatures: Feature[] = [
  {
    title: "ThreatDV (Threat Digital Vaccine)",
    description: "Provides real-time updates to address the latest vulnerabilities.",
  },
  {
    title: "Zero-Day Initiative (ZDI)",
    description: "Gains access to vulnerabilities before they are widely known.",
  },
  {
    title: "Granular Traffic Control",
    description: "Enables precise enforcement of security policies.",
  },
  {
    title: "Integrated Network Visibility",
    description: "Enhances threat detection across hybrid environments.",
  },
];


export const intrusionFeatures: Feature[] = [
  {
    title: "Unified Threat Management",
    description: "Integrates with diverse security tools for comprehensive threat detection.",
  },
  {
    title: "AI-Driven Insights",
    description: "Watson for Cyber Security aids in investigating and mitigating threats faster.",
  },
  {
    title: "Scalable Architecture",
    description: "Supports enterprise environments of varying sizes.",
  },
  {
    title: "Compliance-Focused Reporting",
    description: "Helps meet regulatory requirements through customizable dashboards and alerts.",
  },
];


export const anyConnectFeatures: Feature[] = [
  {
    title: "Comprehensive Security",
    description: "Provides end-to-end encryption and supports multifactor authentication (MFA) for added security.",
  },
  {
    title: "Flexible Connectivity",
    description: "Works across various devices and platforms, including Windows, macOS, Linux, iOS, and Android.",
  },
  {
    title: "Centralized Management",
    description: "Easily manage deployments, user profiles, and policies through Cisco SecureX or Cisco ASA and Firepower firewalls.",
  },
  {
    title: "Advanced Threat Detection",
    description: "Integrates with Cisco's Umbrella to deliver real-time threat intelligence and protection against malware, phishing, and other cyber threats.",
  },
];


export const FortiClientFeatures: Feature[] = [
  {
    title: "Secure VPN Access",
    description: "Offers SSL and IPsec VPN options, ensuring secure remote access to corporate networks.",
  },
  {
    title: "Integrated Security",
    description: "Includes malware protection, vulnerability scanning, and web filtering to safeguard endpoints.",
  },
  {
    title: "Centralized Control",
    description: "Seamlessly integrates with FortiGate firewalls and Fortinet Security Fabric for centralized management and visibility.",
  },
  {
    title: "Zero Trust Network Access (ZTNA)",
    description: "FortiClient supports ZTNA for enhanced security, granting access only to verified users and devices.",
  },
];


export const paloglobalFeatures: Feature[] = [
  {
    title: "Zero Trust Architecture",
    description: "Enforces strong user authentication, device verification, and least-privileged access.",
  },
  {
    title: "Seamless Integration",
    description: "Natively integrates with Palo Alto Networks’ firewalls and Cortex solutions for unified security.",
  },
  {
    title: "Comprehensive Protection",
    description: "Delivers endpoint security, malware prevention, and threat intelligence.",
  },
  {
    title: "Cloud-Ready",
    description: "Supports hybrid and multi-cloud environments, making it ideal for modern, distributed organizations.",
  },
];


export const ciscoIdentity: SubPoints[] = [
  {
    title: "Centralized Policy Management",
    description:
      "Simplifies access control through a unified interface, allowing administrators to enforce policies based on user roles, device types, and security posture.",
  },
  {
    title: "Device Profiling and Endpoint Visibility",
    description:
      "Automatically identifies and classifies devices accessing the network, ensuring compliance with organizational policies.",
  },
  {
    title: "Zero Trust Framework Integration",
    description:
      "Strengthens security by implementing least-privilege access principles and micro-segmentation strategies.",
  },
  {
    title: "Guest Access Management",
    description:
      "Delivers secure, customizable guest onboarding with granular access controls.",
  },
  {
    title: "Advanced Threat Protection",
    description:
      "Leverages integration with Cisco’s ecosystem, including Cisco Secure Endpoint and Talos Intelligence, to provide real-time threat detection and mitigation.",
  },
];export const fortiNACPoints: SubPoints[] = [
  {
    title: "Network Visibility",
    description:
      "Provides detailed insights into every device on the network, including unmanaged and IoT devices, ensuring a comprehensive security overview.",
  },
  {
    title: "Automated Network Control",
    description:
      "Enforces dynamic access control policies based on user identity, device type, and compliance status.",
  },
  {
    title: "Device Onboarding",
    description:
      "Facilitates secure and streamlined onboarding processes for employees, contractors, and guests.",
  },
  {
    title: "Scalability",
    description:
      "Supports large-scale deployments, making it suitable for enterprises and organizations with extensive network infrastructures.",
  },
  {
    title: "Integration with Fortinet Security Fabric",
    description:
      "Offers seamless integration with Fortinet’s ecosystem, enhancing threat detection and response capabilities.",
  },
];

export const clearPassPoints: SubPoints[] = [
  {
    title: "Granular Access Control",
    description:
      "Enforces policies based on role, device type, location, and security posture to ensure secure access for users and devices.",
  },
  {
    title: "Device Fingerprinting and Profiling",
    description:
      "Automatically detects and classifies devices connecting to the network, including BYOD and IoT devices.",
  },
  {
    title: "Guest Access and Onboarding",
    description:
      "Offers user-friendly guest management and onboarding portals with customizable branding.",
  },
  {
    title: "Compliance and Enforcement",
    description:
      "Ensures that endpoints meet security requirements before granting access, leveraging integration with leading endpoint security tools.",
  },
  {
    title: "Advanced Integration",
    description:
      "Works seamlessly with multi-vendor infrastructures and security ecosystems, providing scalability and flexibility.",
  },
];


export const prismaAccessPoints: SubPoints[] = [
  {
    title: "Zero Trust Network Access (ZTNA)",
    description:
      "Implements a least-privilege access model, ensuring secure connections for users and devices.",
  },
  {
    title: "Cloud-Native Architecture",
    description:
      "Provides consistent policy enforcement across on-premises, cloud, and hybrid environments.",
  },
  {
    title: "Comprehensive Visibility",
    description:
      "Delivers insights into user activities and device behavior, enabling precise access control.",
  },
  {
    title: "Integrated Security",
    description:
      "Combines advanced threat prevention, data loss prevention, and URL filtering to protect against cyber threats.",
  },
  {
    title: "Flexible Deployment",
    description:
      "Supports remote workforces and global enterprises with seamless scalability and simplified management.",
  },
];

export const ciscoEnterprisePoints: SubPoints[] = [
  {
    title: "End-to-End Solutions",
    description:
      "Cisco’s enterprise network designs integrate switching, routing, and wireless technologies, offering seamless connectivity and optimal performance.",
  },
  {
    title: "Secure Access",
    description:
      "Employs technologies like Identity Services Engine (ISE) and Secure Network Analytics for robust security and threat detection.",
  },
  {
    title: "Software-Defined Networking (SDN)",
    description:
      "Cisco DNA Center provides centralized management, automation, and analytics for agile network operations.",
  },
  {
    title: "Resilience and Scalability",
    description:
      "Solutions are built to adapt to evolving business needs, ensuring minimal downtime and consistent performance.",
  },
];

export const fortinetSDWANPoints: SubPoints[] = [
  {
    title: "Integrated Security",
    description:
      "Fortinet’s SD-WAN combines next-generation firewall (NGFW) capabilities with advanced threat protection, ensuring comprehensive security at the edge.",
  },
  {
    title: "High-Performance Connectivity",
    description:
      "Optimizes application performance with intelligent path control and WAN optimization.",
  },
  {
    title: "Simplified Management",
    description:
      "The Fortinet Fabric Management Center enables centralized visibility and control over the entire network.",
  },
  {
    title: "Cloud-Ready Architecture",
    description:
      "Seamless integration with major cloud platforms ensures a consistent and secure user experience.",
  },
];


export const arubaNetworkPoints: SubPoints[] = [
  {
    title: "Unified Infrastructure",
    description:
      "Seamless integration between wired and wireless networks for simplified management and enhanced performance.",
  },
  {
    title: "Zero Trust Security",
    description:
      "Dynamic Segmentation and Policy Enforcement Firewall ensure that only authorized users and devices access the network.",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Aruba Central’s cloud-native platform provides real-time analytics and automation to optimize network operations.",
  },
  {
    title: "IoT Support",
    description:
      "Purpose-built for IoT environments with secure onboarding, segmentation, and lifecycle management of connected devices.",
  },
];

export const paloAltoZtaPoints: SubPoints[] = [
  {
    title: "Identity-Based Access",
    description:
      "Strict access controls ensure users and devices are authenticated before gaining access to any resource.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "Prisma Access and Cortex XDR deliver real-time visibility, analytics, and threat detection across the network.",
  },
  {
    title: "Micro-Segmentation",
    description:
      "Divides the network into secure zones, limiting lateral movement of threats and isolating critical systems.",
  },
  {
    title: "Advanced Threat Prevention",
    description:
      "Next-gen firewalls with ML-based detection proactively block known and unknown cyber threats.",
  },
];


// operational technology 

export const icsFeature: Feature[] = [
  {
    title: "Cisco Cyber Vision",
    description:
      "Provides complete visibility into ICS environments by identifying connected assets and detecting potential vulnerabilities. Real-time threat detection with deep packet inspection (DPI) of industrial protocols (e.g., Modbus, OPC-UA, Ethernet/IP)",
    // image: PLACEHOLDER,
  },
  {
    title: "Cisco Secure Firewall",
    description:
      "Works natively with FortiGate firewalls for VPN and network access control.",
    // image: PLACEHOLDER,
  },
  {
    title: "Time-Based OTP",
    description:
      "Generates time-sensitive OTPs for secure authentication.",
    // image: PLACEHOLDER,
  },
  {
    title: "User Self-Service",
    description:
      "Reduces administrative overhead by allowing users to manage their tokens.",
    // image: PLACEHOLDER,
  },
  {
    title: "Scalability",
    description:
      "Designed for enterprises of all sizes with easy deployment options.",
    // image: PLACEHOLDER,
  }
];

export const icsBenefits : Benefit[] = [

  {
    text: "Seamless integration with existing Cisco infrastructure.",
    position: "left",
  },
  {
    text: "Enhanced visibility and control over ICS assets.",
    position: "right",
  },
  {
    text: "Advanced threat detection and response for critical OT networks.",
    position: "left",
  }
]


export const fortinetICSFeatures: Feature[] = [
  {
    title: "FortiGate NGFW for ICS",
    description:
      "Supports deep packet inspection for industrial control protocols and enables robust segmentation between IT and OT networks with granular access control policies.",
    // image: PLACEHOLDER,
  },
  {
    title: "FortiGuard Industrial Security Service",
    description:
      "Delivers continuously updated threat intelligence specific to ICS environments, offering protection against malware, ransomware, and targeted ICS exploits.",
    // image: PLACEHOLDER,
  },
  {
    title: "FortiNAC for Visibility and Access Control",
    description:
      "Provides comprehensive visibility into all devices across OT networks and enforces dynamic access policies to prevent unauthorized connections.",
    // image: PLACEHOLDER,
  },
  {
    title: "FortiSIEM Integration",
    description:
      "Aggregates IT and OT telemetry to enable unified threat detection, compliance reporting, and accelerated incident response across industrial systems.",
    // image: PLACEHOLDER,
  }
];

export const fortinetICSBenefits: Benefit[] = [
  {
    text: "Comprehensive, scalable ICS protection using Fortinet’s Security Fabric architecture.",
    position: "left",
  },
  {
    text: "Optimized for industrial environments with minimal performance impact.",
    position: "right",
  },
  {
    text: "Integrated OT threat intelligence for rapid detection and response.",
    position: "left",
  }
];

export const paloAltoICSFeatures: Feature[] = [
  {
    title: "Palo Alto Networks NGFW with App-ID",
    description:
      "Identifies and classifies industrial protocol traffic using App-ID technology and blocks malicious activity targeting ICS systems.",
    // image: PLACEHOLDER,
  },
  {
    title: "Prisma Cloud for ICS Security",
    description:
      "Provides cloud-native threat detection and compliance management tailored for ICS environments. Uses machine learning to monitor traffic and asset behavior.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cortex XDR for ICS",
    description:
      "Delivers unified threat detection and response across IT and OT systems by correlating ICS-specific threats with enterprise-wide incidents.",
    // image: PLACEHOLDER,
  },
  {
    title: "Unit 42 Threat Intelligence",
    description:
      "Supplies actionable threat intelligence and vulnerability insights specific to industrial control systems, enhancing proactive defense.",
    // image: PLACEHOLDER,
  }
];

export const paloAltoICSBenefits: Benefit[] = [
  {
    text: "Enhanced visibility and prevention of OT-specific threats.",
    position: "left",
  },
  {
    text: "Unified security management for hybrid IT-OT environments.",
    position: "right",
  },
  {
    text: "Continuous monitoring to ensure operational safety.",
    position: "left",
  }
];


export const tenableFeatures: Feature[] = [
  {
    title: "Tenable.ot Platform",
    description:
      "Continuously identifies, monitors, and protects OT assets while offering real-time risk assessment tailored to industrial environments.",
    // image: PLACEHOLDER,
  },
  {
    title: "Vulnerability Management",
    description:
      "Detects unpatched devices, insecure configurations, and other OT vulnerabilities. Maps findings to frameworks like NIST and MITRE ATT&CK for ICS.",
    // image: PLACEHOLDER,
  },
  {
    title: "Anomaly Detection",
    description:
      "Applies behavioral analytics to identify suspicious activity and mitigate potential security breaches before impact.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration with Tenable.sc and Nessus",
    description:
      "Enables unified vulnerability management across IT and OT environments for comprehensive asset and risk visibility.",
    // image: PLACEHOLDER,
  }
];

export const tenableBenefits: Benefit[] = [
  {
    text: "Proactive risk management tailored for ICS environments.",
    position: "left",
  },
  {
    text: "Supports compliance with regulatory requirements.",
    position: "right",
  },
  {
    text: "Lightweight deployment to reduce operational disruption.",
    position: "left",
  }
];


export const arubaFeatures: Feature[] = [
  {
    title: "Aruba ClearPass for OT",
    description:
      "Delivers identity-based access control tailored for ICS environments. Detects unauthorized devices and quarantines them in real-time to protect OT networks.",
    // image: PLACEHOLDER,
  },
  {
    title: "EdgeConnect SD-WAN for ICS",
    description:
      "Provides secure, high-performance connectivity between industrial sites with centralized visibility and low-latency communication for critical OT systems.",
    // image: PLACEHOLDER,
  },
  {
    title: "Aruba Industrial IoT (IIoT) Security",
    description:
      "Implements Zero Trust security for IIoT and ICS networks by monitoring industrial protocols and detecting anomalous device behavior.",
    // image: PLACEHOLDER,
  }
];

export const arubaBenefits: Benefit[] = [
  {
    text: "Simplified and secure network management for hybrid IT-OT environments.",
    position: "left",
  },
  {
    text: "Enhanced scalability and resilience for industrial networks.",
    position: "right",
  },
  {
    text: "Integrated Zero Trust security for critical ICS assets.",
    position: "left",
  }
];


export const darktraceFeatures: Feature[] = [
  {
    title: "Darktrace Industrial Immune System",
    description:
      "Continuously monitors ICS networks to detect anomalies using self-learning AI. Adapts in real-time to emerging threats without requiring predefined rules or signatures.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Visualizer for ICS",
    description:
      "Provides real-time, intuitive visualizations of ICS network activity, enabling fast threat identification and operational context.",
    // image: PLACEHOLDER,
  },
  {
    title: "Autonomous Response with Antigena",
    description:
      "Automatically responds to threats across OT environments without disrupting core operations, neutralizing attacks with surgical precision.",
    // image: PLACEHOLDER,
  },
  {
    title: "AI-Powered Threat Detection",
    description:
      "Detects zero-day attacks, insider threats, and supply chain intrusions by analyzing behavioral deviations across ICS assets.",
    // image: PLACEHOLDER,
  }
];

export const darktraceBenefits: Benefit[] = [
  {
    text: "Autonomous, AI-driven protection tailored for industrial environments.",
    position: "left",
  },
  {
    text: "Minimal impact on operations due to self-adaptive technology.",
    position: "right",
  },
  {
    text: "Comprehensive visibility and real-time threat mitigation.",
    position: "left",
  }
];


export const sentinelOneFeatures: Feature[] = [
  {
    title: "Singularity Platform",
    description:
      "A unified EDR platform that secures both IT and OT environments. Delivers ICS-specific threat intelligence and behavioral analytics for proactive defense.",
    // image: PLACEHOLDER,
  },
  {
    title: "Ranger for IoT/OT Discovery",
    description:
      "Automatically identifies and monitors OT devices across the network. Visualizes asset interconnections to improve security posture and visibility.",
    // image: PLACEHOLDER,
  },
  {
    title: "Automated Threat Response",
    description:
      "Utilizes AI to detect, contain, and remediate cyber threats targeting ICS infrastructure, reducing time-to-response without human intervention.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration with Threat Intelligence Platforms (TIPs)",
    description:
      "Enhances situational awareness by ingesting ICS-specific threat intelligence from TIPs for real-time, contextual protection.",
    // image: PLACEHOLDER,
  }
];

export const sentinelOneBenefits: Benefit[] = [
  {
    text: "Simplified management of IT and OT security in a single platform.",
    position: "left",
  },
  {
    text: "Rapid detection and automated response reduce mean time to resolution (MTTR).",
    position: "right",
  },
  {
    text: "AI-driven capabilities reduce manual intervention.",
    position: "left",
  }
];


export const ciscoScadaFeatures: Feature[] = [
  {
    title: "Cisco Industrial Threat Defense",
    description:
      "Protects IoT, OT, and ICS assets by providing full visibility into industrial behaviors and reducing the attack surface. Simplifies OT cybersecurity with integrated threat defense capabilities.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cisco Cyber Vision",
    description:
      "Delivers deep visibility into industrial networks by identifying all assets and monitoring their communications. Built for seamless integration with network infrastructure, even at scale.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cisco Secure Firewall",
    description:
      "Enforces security policies, prevents unauthorized access, and segments industrial networks to contain threats across OT and IoT environments.",
    // image: PLACEHOLDER,
  },
  {
    title: "Zero Trust for OT",
    description:
      "Applies Zero Trust principles to OT networks by ensuring only authenticated and authorized users and devices access critical SCADA systems, reducing insider and external threats.",
    // image: PLACEHOLDER,
  }
];

export const ciscoScadaBenefits: Benefit[] = [
  {
    text: "Comprehensive protection across all layers of the industrial network.",
    position: "left",
  },
  {
    text: "Scalable deployment from small facilities to large-scale industrial operations.",
    position: "right",
  },
  {
    text: "Seamless integration with existing IT and OT infrastructure.",
    position: "left",
  },
  {
    text: "Real-time monitoring and alerting to quickly identify security incidents.",
    position: "right",
  }
];


export const fortinetScadaFeatures: Feature[] = [
  {
    title: "Fortinet Security Fabric",
    description:
      "An integrated platform delivering visibility, automation, and resilience across IT and OT environments. Enables non-disruptive security integration within complex SCADA infrastructures.",
    // image: PLACEHOLDER,
  },
  {
    title: "FortiGate Next-Generation Firewalls (NGFWs)",
    description:
      "Provides advanced threat protection including IPS, web filtering, and anti-spam—tailored for SCADA systems—all within a unified, high-performance appliance.",
    // image: PLACEHOLDER,
  },
  {
    title: "FortiNAC (Network Access Control)",
    description:
      "Enhances device and user visibility within SCADA networks, enforcing granular access control to ensure only authorized entities connect to critical systems.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration with SCADAfence",
    description:
      "Combines Fortinet’s infrastructure with SCADAfence’s OT-focused security tools for deeper threat detection, policy enforcement, and incident response across converged environments.",
    // image: PLACEHOLDER,
  }
];

export const fortinetScadaBenefits: Benefit[] = [
  {
    text: "Holistic security coverage across both IT and OT systems.",
    position: "left",
  },
  {
    text: "Designed to adapt to various industrial environments and operational scales.",
    position: "right",
  },
  {
    text: "Advanced threat detection for known and unknown attacks on SCADA networks.",
    position: "left",
  },
  {
    text: "Supports compliance with industrial cybersecurity regulations and standards.",
    position: "right",
  }
];

export const paloAltoScadaFeatures: Feature[] = [
  {
    title: "Next-Generation Firewall (NGFW)",
    description:
      "Performs deep packet inspection and SCADA protocol analysis to detect and block malicious activities targeting industrial control systems.",
    // image: PLACEHOLDER,
  },
  {
    title: "Prisma Access",
    description:
      "Delivers secure remote access to SCADA systems, protecting remote connections from cyber threats and maintaining operational integrity.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cortex XSOAR",
    description:
      "Provides orchestration, automation, and response capabilities to streamline incident management and remediation across SCADA environments.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Utilizes global threat intelligence to identify and defend against emerging threats targeting SCADA networks and assets.",
    // image: PLACEHOLDER,
  }
];

export const paloAltoScadaBenefits: Benefit[] = [
  {
    text: "Comprehensive protection across network, endpoint, and cloud environments.",
    position: "left",
  },
  {
    text: "Scalable for industrial operations of all sizes, from remote sites to enterprise facilities.",
    position: "right",
  },
  {
    text: "Real-time monitoring and alerting for rapid incident detection and response.",
    position: "left",
  },
  {
    text: "Seamless integration with existing IT and OT infrastructure for unified security operations.",
    position: "right",
  }
];

export const tenableScadaFeatures: Feature[] = [
  {
    title: "Tenable.ot",
    description:
      "Purpose-built for OT environments, Tenable.ot delivers asset discovery, threat detection, and vulnerability management for SCADA systems.",
    // image: PLACEHOLDER,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Enables real-time monitoring of SCADA networks to quickly identify anomalies, misconfigurations, and suspicious behavior.",
    // image: PLACEHOLDER,
  },
  {
    title: "Risk-Based Vulnerability Management",
    description:
      "Uses contextual risk scoring to prioritize vulnerabilities based on potential impact, helping teams focus remediation on the most critical threats.",
    // image: PLACEHOLDER,
  },
  {
    title: "Integration Capabilities",
    description:
      "Integrates seamlessly with existing IT security infrastructure to unify vulnerability management across IT and OT environments.",
    // image: PLACEHOLDER,
  }
];

export const tenableScadaBenefits: Benefit[] = [
  {
    text: "Enhanced visibility into all assets and communications within the SCADA environment.",
    position: "left",
  },
  {
    text: "Proactive identification and prioritization of vulnerabilities for targeted remediation.",
    position: "right",
  },
  {
    text: "Real-time detection of anomalous activity across SCADA networks.",
    position: "left",
  },
  {
    text: "Unified security operations across IT and OT through seamless integration.",
    position: "right",
  }
];


export const arubaScadaFeatures: Feature[] = [
  {
    title: "Zero Trust Network Access (ZTNA)",
    description:
      "Replaces traditional VPNs with a modern access model that ensures only authenticated and authorized users and devices can interact with SCADA systems.",
    // image: PLACEHOLDER,
  },
  {
    title: "AI-Powered Network Detection and Response (NDR)",
    description:
      "Provides real-time threat monitoring and automated responses using AI, enhancing protection for SCADA network traffic and operational integrity.",
    // image: PLACEHOLDER,
  },
  {
    title: "ClearPass Universal Profiler",
    description:
      "Identifies and profiles all devices connected to the network, enabling precise access control for SCADA components and infrastructure.",
    // image: PLACEHOLDER,
  },
];

export const arubaScadaBenefits: Benefit[] = [
  {
    text: "Enhanced visibility across all SCADA-connected devices through dynamic profiling.",
    position: "left",
  },
  {
    text: "Zero Trust enforcement limits access to only verified users and systems.",
    position: "right",
  },
  {
    text: "AI-driven detection and response ensures rapid mitigation of potential threats.",
    position: "left",
  },
];


export const darktraceScadaFeatures: Feature[] = [
  {
    title: "Darktrace Industrial Immune System",
    description:
      "Passively models the 'pattern of life' for all SCADA users, devices, and controllers to detect early-stage anomalies and threats.",
    // image: PLACEHOLDER,
  },
  {
    title: "Real-Time Threat Detection",
    description:
      "Uses AI algorithms to continuously monitor SCADA network traffic and detect anomalies in real-time.",
    // image: PLACEHOLDER,
  },
  {
    title: "Autonomous Response",
    description:
      "Automatically mitigates identified threats without human input, ensuring uninterrupted industrial operations.",
    // image: PLACEHOLDER,
  },
];

export const darktraceScadaBenefits: Benefit[] = [
  {
    text: "Proactively identifies threats before they disrupt operations by learning normal behavioral baselines.",
    position: "left",
  },
  {
    text: "Provides complete visibility across SCADA systems for holistic security.",
    position: "right",
  },
  {
    text: "Autonomous responses reduce incident impact and minimize downtime.",
    position: "left",
  },
];


export const sentinelOneScadaFeatures: Feature[] = [
  {
    title: "ActiveEDR",
    description:
      "Provides real-time detection and response for threats targeting endpoints within SCADA networks, ensuring rapid threat containment.",
    // image: PLACEHOLDER,
  },
  {
    title: "Automated Remediation",
    description:
      "Swiftly remediates threats without manual intervention, reducing downtime and operational disruption in SCADA environments.",
    // image: PLACEHOLDER,
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Leverages real-time threat intelligence to detect and prevent known and emerging cyber threats specific to industrial systems.",
    // image: PLACEHOLDER,
  },
];

export const sentinelOneScadaBenefits: Benefit[] = [
  {
    text: "Delivers robust protection for SCADA endpoints, securing critical devices from compromise.",
    position: "left",
  },
  {
    text: "Automated incident response reduces mean time to recovery and operational impact.",
    position: "right",
  },
  {
    text: "Integrates with threat intelligence to provide proactive and comprehensive threat defense.",
    position: "left",
  },
];

export const ciscoCipFeatures: Feature[] = [
  {
    title: "Cisco Cyber Vision",
    description:
      "Provides full visibility into OT environments by identifying and monitoring industrial assets and communications to detect anomalies and threats in real time.",
  },
  {
    title: "Cisco Secure Firewall",
    description:
      "Enforces network segmentation between OT and IT networks, preventing lateral movement and reducing the attack surface.",
  },
  {
    title: "Cisco Talos Threat Intelligence",
    description:
      "Continuously updates defenses using threat intelligence from one of the world’s largest commercial cybersecurity research teams.",
  },
  {
    title: "Zero Trust Security Framework",
    description:
      "Ensures only authenticated and authorized users and devices can access critical systems, minimizing risks of unauthorized access.",
  },
  {
    title: "Industrial IoT Security",
    description:
      "Secures industrial IoT devices by integrating with industrial protocols and providing end-to-end threat protection.",
  },
];



export const fortinetCipFeatures: Feature[] = [
  {
    title: "FortiGate Next-Generation Firewalls (NGFWs)",
    description:
      "Delivers deep packet inspection and granular control for industrial protocols, strengthening OT network defenses.",
  },
  {
    title: "FortiSIEM",
    description:
      "Centralizes monitoring and event correlation across IT and OT systems for rapid incident detection and response.",
  },
  {
    title: "FortiNAC (Network Access Control)",
    description:
      "Automates device discovery and segmentation to prevent unauthorized access and ensure only trusted devices connect.",
  },
  {
    title: "FortiAnalyzer",
    description:
      "Leverages AI-powered analytics to provide actionable insights, prioritize vulnerabilities, and mitigate threats.",
  },
  {
    title: "FortiGuard Labs",
    description:
      "Delivers 24/7 global threat intelligence to protect against advanced threats like ransomware and nation-state attacks.",
  },
];

export const paloCipFeatures: Feature[] = [
  {
    title: "Prisma Access for OT",
    description:
      "Enables secure and scalable remote access for operators managing distributed critical infrastructure, minimizing attack vectors.",
  },
  {
    title: "Next-Generation Firewalls",
    description:
      "Inspects and secures industrial protocols with granular traffic visibility, preventing unauthorized access in OT environments.",
  },
  {
    title: "Cortex XSOAR",
    description:
      "Automates security workflows and enhances collaboration between OT and IT teams during incident response.",
  },
  {
    title: "Cortex XDR",
    description:
      "Correlates telemetry from endpoints, networks, and cloud to detect and respond to complex industrial threats.",
  },
  {
    title: "IoT Security Solutions",
    description:
      "Secures connected OT devices by identifying vulnerabilities and enforcing security compliance across assets.",
  },
];

export const tenableCipFeatures: Feature[] = [
  {
    title: "Tenable.ot",
    description:
      "Delivers asset discovery, real-time visibility, and risk-based vulnerability management across industrial control systems.",
  },
  {
    title: "Active and Passive Scanning",
    description:
      "Ensures comprehensive security assessments while maintaining the safety and stability of sensitive OT environments.",
  },
  {
    title: "Integration with IT Systems",
    description:
      "Provides unified visibility and coordination between IT and OT security strategies for holistic protection.",
  },
  {
    title: "Real-Time Threat Detection",
    description:
      "Utilizes Tenable Research to identify vulnerabilities and threats, enabling proactive and informed response.",
  },
];


export const arubaCipFeatures: Feature[] = [
  {
    title: "Aruba Edge-to-Cloud Security",
    description:
      "Implements end-to-end secure connectivity using WLAN, SD-WAN, and remote access with Zero Trust and SASE-based segmentation.",
  },
  {
    title: "Aruba ClearPass Policy Manager",
    description:
      "Enforces identity-based access control for devices and users, securing critical infrastructure from unauthorized access.",
  },
  {
    title: "Infrastructure Intrusion Protection",
    description:
      "Detects and mitigates threats from rogue access points, AP impersonation, and unauthorized SSIDs in OT networks.",
  },
  {
    title: "Integration with MetaDefender",
    description:
      "Enhances OT asset visibility and threat prevention through seamless endpoint data flow and control integration.",
  },
];

export const darktraceCipFeatures: Feature[] = [
  {
    title: "Industrial Immune System",
    description:
      "Delivers AI-driven visibility and defense across industrial environments, identifying threats before they escalate.",
  },
  {
    title: "Cyber AI Analyst",
    description:
      "Automates threat investigation and provides real-time insights, accelerating incident response across OT systems.",
  },
  {
    title: "Zero Trust Approach",
    description:
      "Applies anomaly-based detection to enforce Zero Trust principles, securing complex supply chains and digital assets.",
  },
];

export const sentinelOneCipFeatures: Feature[] = [
  {
    title: "Behavioral AI Detection",
    description:
      "Leverages AI to detect and stop malicious activity across endpoints, even without known threat signatures.",
  },
  {
    title: "Automated Response and Remediation",
    description:
      "Automatically isolates infected endpoints and rolls back unauthorized changes to ensure operational continuity.",
  },
  {
    title: "Visibility and Control",
    description:
      "Provides real-time insight into endpoint behavior, empowering teams to monitor and manage OT systems proactively.",
  },
];

export const arcticWolfCipFeatures: Feature[] = [
  {
    title: "24/7 Security Operations Center (SOC)",
    description:
      "Ensures continuous protection with real-time threat monitoring and expert analysis by dedicated security teams.",
  },
  {
    title: "Threat Detection and Hunting",
    description:
      "Combines threat intelligence and analytics to proactively identify and neutralize threats within critical networks.",
  },
  {
    title: "Incident Response",
    description:
      "Delivers fast containment and remediation of incidents to reduce operational disruption and safeguard infrastructure.",
  },
];

export const ciscoIotSecurityFeatures: Feature[] = [
  {
    title: "Asset Visibility",
    description:
      "Leverages network infrastructure to detect and inventory OT/ICS assets, providing full behavioral visibility.",
  },
  {
    title: "Zero-Trust Segmentation",
    description:
      "Implements ISA/IEC62443-compliant micro-segmentation to isolate systems and prevent threat propagation.",
  },
  {
    title: "Threat Detection and Response",
    description:
      "Unifies OT insights with IT tools for cross-domain threat detection, investigation, and resolution.",
  },
  {
    title: "Secure Remote Access",
    description:
      "Delivers cloud-based secure remote access for OT operations, minimizing shadow IT and boosting manageability.",
  },
  {
    title: "Integration with Existing Tools",
    description:
      "Works seamlessly with current IT and security stacks, enabling modular and scalable implementation.",
  },
];

export const fortinetIotSecurityFeatures: Feature[] = [
  {
    title: "Device Discovery and Classification",
    description:
      "FortiNAC identifies and profiles all connected IoT devices to assess security posture and mitigate risk.",
  },
  {
    title: "Integrated Threat Intelligence",
    description:
      "FortiGuard Labs delivers real-time threat insights to protect IoT environments from evolving attacks.",
  },
  {
    title: "Network Segmentation",
    description:
      "Implements granular access controls to isolate IoT devices from critical infrastructure and prevent lateral movement.",
  },
  {
    title: "Scalable Protection",
    description:
      "FortiGate and FortiOS provide IoT-specific security profiles to automate and scale defenses.",
  },
  {
    title: "Secure Access Control",
    description:
      "Zero Trust Network Access (ZTNA) ensures only verified devices gain network access, bolstering security posture.",
  },
];


export const paloAltoIotSecurityFeatures: Feature[] = [
  {
    title: "Automated Device Identification",
    description:
      "Machine learning auto-classifies and baselines IoT devices, ensuring an accurate and real-time inventory.",
  },
  {
    title: "Behavioral Analytics",
    description:
      "Continuously monitors device activity to detect behavioral anomalies and early-stage threats.",
  },
  {
    title: "Dynamic Policy Enforcement",
    description:
      "Automatically adjusts policies based on the evolving risk profile of each IoT device.",
  },
  {
    title: "Threat Prevention",
    description:
      "Integrates with Threat Prevention and WildFire for cloud-based malware detection and exploit protection.",
  },
  {
    title: "Rapid Deployment",
    description:
      "As a cloud-native solution, enables instant visibility and security enforcement for IoT devices across environments.",
  },
];


export const tenableIotSecurityFeatures: Feature[] = [
  {
    title: "Comprehensive IoT Visibility",
    description:
      "Tenable.ot discovers all connected IoT assets and evaluates their security posture for accurate inventory management.",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Performs continuous scans to detect misconfigurations, outdated firmware, and exploitable vulnerabilities in IoT devices.",
  },
  {
    title: "Risk Prioritization",
    description:
      "Delivers prioritized insights to focus remediation on vulnerabilities that pose the highest risk to operations.",
  },
  {
    title: "Integration with ICS",
    description:
      "Aligns IoT security with industrial control systems, ensuring a unified approach to OT threat management.",
  },
  {
    title: "Actionable Reporting",
    description:
      "Provides clear, decision-ready intelligence to improve the security posture of IoT environments.",
  },
];


export const arubaIotSecurityFeatures: Feature[] = [
  {
    title: "Unified Infrastructure Management",
    description:
      "Centralizes management across wired and wireless networks, ensuring consistent policy enforcement for IoT devices.",
  },
  {
    title: "IoT Device Profiling",
    description:
      "Uses ClearPass to automatically detect, classify, and assign roles to IoT devices based on behavior and identity.",
  },
  {
    title: "Dynamic Segmentation",
    description:
      "Isolates each device into its own secure segment, preventing lateral movement and containing potential threats.",
  },
  {
    title: "Zero Trust Edge",
    description:
      "Applies zero trust principles to validate devices before network access, reducing the risk of unauthorized communication.",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Analyzes IoT traffic with AI to detect anomalies and trigger proactive threat response.",
  },
];


export const darktraceIotSecurityFeatures: Feature[] = [
  {
    title: "Autonomous Threat Detection",
    description:
      "AI-powered detection of abnormal device behavior and emerging threats without relying on rules or signatures.",
  },
  {
    title: "Self-Learning AI",
    description:
      "Learns the normal 'pattern of life' for each IoT device and adapts continuously to evolving environments.",
  },
  {
    title: "Real-Time Threat Response",
    description:
      "Antigena autonomously responds to threats within seconds, isolating or slowing compromised devices to prevent spread.",
  },
  {
    title: "Comprehensive Visibility",
    description:
      "Provides real-time insights into IoT device activity across the network, enhancing situational awareness and security posture.",
  },
];


export const sentinelOneIotSecurityFeatures: Feature[] = [
  {
    title: "Autonomous Device Discovery",
    description:
      "Ranger autonomously identifies and profiles all connected devices without additional hardware or network changes.",
  },
  {
    title: "Real-Time Threat Detection and Response",
    description:
      "AI-powered monitoring and protection across endpoints, containers, cloud workloads, and IoT devices.",
  },
  {
    title: "Network Visibility",
    description:
      "Leverages protected endpoints as distributed network sensors to detect rogue devices and monitor anomalies.",
  },
  {
    title: "Policy Enforcement",
    description:
      "Allows security teams to define and enforce communication policies across all connected IoT devices.",
  },
  {
    title: "Integration with Armis",
    description:
      "Enriches Armis with SentinelOne-managed metadata and application inventory for deeper device visibility.",
  },
];

export const arcticWolfIotSecurityFeatures: Feature[] = [
  {
    title: "Managed Detection and Response (MDR)",
    description:
      "Provides 24/7 monitoring of IoT devices to identify and respond to threats in real-time.",
  },
  {
    title: "Security Operations Center (SOC)",
    description:
      "SOC analysts act as an extension of your team, offering deep expertise in IoT threat detection and response.",
  },
  {
    title: "Risk Management",
    description:
      "Identifies vulnerabilities in IoT devices and provides guidance to mitigate risks effectively.",
  },
  {
    title: "Threat Intelligence",
    description:
      "Utilizes proprietary insights to detect emerging threats and apply proactive defense strategies.",
  },
  {
    title: "Customized Security Posture",
    description:
      "Tailors IoT security controls to fit the specific operational needs of the organization.",
  },
];


export const ciscoSecureXFeatures: Feature[] = [
  {
    title: "Unified Platform",
    description:
      "Combines telemetry from Cisco and third-party tools into a single interface, providing full visibility for security operations.",
  },
  {
    title: "Automation and Orchestration",
    description:
      "Accelerates response through automated workflows that reduce manual efforts and human error.",
  },
  {
    title: "Threat Intelligence",
    description:
      "Integrates Cisco’s global threat intelligence to proactively detect and prevent advanced threats.",
  },
  {
    title: "Analytics and Insights",
    description:
      "Uses machine learning and advanced analytics to identify patterns and anomalies for faster threat detection.",
  },
  {
    title: "Real-time Response",
    description:
      "Delivers actionable alerts in real time to expedite investigation and incident mitigation.",
  },
];

export const ciscoSecureXUseCases: UseCase[] = [
  {
    title: "Simplifying and accelerating threat detection, investigation, and response across diverse security tools.",
  },
  {
    title: "Unifying visibility and intelligence from Cisco and third-party security products for efficient operations.",
  },
  {
    title: "Automating security workflows to reduce incident response time and operational overhead.",
  },
  {
    title: "Leveraging Cisco's threat intelligence and analytics to proactively detect and respond to threats.",
  }
];


export const fortiSIEMFeatures: Feature[] = [
  {
    title: "Centralized Management",
    description:
      "Aggregates security events from diverse infrastructure components into a single, unified dashboard.",
  },
  {
    title: "Advanced Threat Detection",
    description:
      "Uses AI and machine learning to detect complex threats, including APTs and insider attacks.",
  },
  {
    title: "Automation and Incident Response",
    description:
      "Automates incident response workflows and playbooks to minimize manual effort and response time.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Supports growth from small deployments to large, distributed enterprises without performance degradation.",
  },
  {
    title: "Comprehensive Reporting and Dashboards",
    description:
      "Delivers real-time alerts, customizable dashboards, and detailed reports to support informed decision-making.",
  },
];

export const fortiSIEMUseCases: UseCase[] = [
  {
    title: "Centralizing security data from distributed environments for unified monitoring.",
  },
  {
    title: "Leveraging machine learning to detect advanced persistent threats and insider risks.",
  },
  {
    title: "Automating incident response to improve SOC efficiency and reduce mean time to respond (MTTR).",
  },
  {
    title: "Providing MSSPs with a scalable and multi-tenant SIEM platform for client security management.",
  },
  {
    title: "Website: FortiSIEM Data Sheet",
    link: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortisiem.pdf",
  },
];


export const ibmQradarFeatures: Feature[] = [
  {
    title: "Real-time Monitoring and Alerts",
    description:
      "Provides continuous monitoring and instant alerts for suspicious activity or security breaches.",
  },
  {
    title: "Powerful Correlation Engine",
    description:
      "Correlates events from across the network to detect patterns and reduce threat detection time.",
  },
  {
    title: "Customizable Dashboards",
    description:
      "Enables users to build tailored dashboards that highlight the most critical security metrics.",
  },
  {
    title: "Advanced Analytics and Machine Learning",
    description:
      "Uses AI to enhance detection capabilities and provide actionable insights into threats.",
  },
  {
    title: "Integration with Third-Party Tools",
    description:
      "Easily integrates with a wide array of security products for comprehensive threat management.",
  },
  {
    title: "Enterprise Scalability",
    description:
      "Handles high-volume log data for large, complex environments with ease.",
  },
];


export const ibmQradarUseCases: UseCase[] = [
  {
    title: "Monitoring large-scale enterprise networks for real-time threat detection.",
  },
  {
    title: "Correlating log and event data to identify sophisticated attack patterns.",
  },
  {
    title: "Streamlining compliance reporting for complex regulatory environments.",
  },
  {
    title: "Supporting MSSPs with multi-tenant threat monitoring and response capabilities.",
  },
  {
    title: "Website: IBM QRadar SIEM Overview",
    link: "https://www.ibm.com/products/qradar-siem",
  },
];

export const arcticWolfFeatures: Feature[] = [
  {
    title: "Managed Detection and Response (MDR)",
    description:
      "Fully managed 24/7 security monitoring, alerting, and response to threats.",
  },
  {
    title: "Comprehensive Coverage",
    description:
      "Includes SIEM, log management, network security, endpoint detection, and vulnerability management.",
  },
  {
    title: "Human-Driven Security Operations",
    description:
      "Combines AI-powered tools with security experts to enhance incident analysis and response.",
  },
  {
    title: "Cloud-Native Architecture",
    description:
      "Optimized for cloud-first environments, enabling easy deployment and scalability.",
  },
  {
    title: "Customizable Alerts and Reporting",
    description:
      "Offers personalized dashboards, reports, and alerts tailored to business-specific needs.",
  },
];

export const arcticWolfUseCases: UseCase[] = [
  {
    title: "SMBs and enterprises seeking a fully managed SIEM with 24/7 coverage.",
  },
  {
    title: "Organizations prioritizing a human-first approach to threat detection and response.",
  },
  {
    title: "Businesses needing simplified compliance with GDPR, HIPAA, PCI-DSS, and more.",
  },
  {
    title: "Website: Arctic Wolf Managed Detection and Response",
    link: "https://arcticwolf.com/solutions/managed-detection-and-response/",
  },
];

export const ciscoMdrFeatures: Feature[] = [
  {
    title: "24/7 Threat Monitoring",
    description:
      "Real-time monitoring and rapid response to detect and mitigate security incidents around the clock.",
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Leverages Cisco Talos intelligence to identify and protect against evolving threats.",
  },
  {
    title: "Expert-Led Response",
    description:
      "Dedicated security professionals deliver hands-on investigation and threat containment.",
  },
  {
    title: "Automated Detection and Investigation",
    description:
      "Machine learning-driven detection streamlines investigation of suspicious activities.",
  },
  {
    title: "Cloud-Native Support",
    description:
      "Supports hybrid and multi-cloud infrastructures for broad and flexible security coverage.",
  },
];

export const fortiMdrFeatures: Feature[] = [
  {
    title: "Threat Detection and Response",
    description:
      "AI-powered threat detection and rapid response to prevent damage before threats escalate.",
  },
  {
    title: "Incident Investigation",
    description:
      "Fortinet experts investigate alerts and guide remediation using automated playbooks and deep analysis.",
  },
  {
    title: "Scalable Coverage",
    description:
      "Secures organizations of all sizes across networks, endpoints, and multi-cloud environments.",
  },
  {
    title: "Seamless Integration",
    description:
      "Tightly integrated with Fortinet products like FortiGate, FortiAnalyzer, and FortiSIEM for unified operations.",
  },
  {
    title: "FortiGuard Threat Intelligence",
    description:
      "Continuously updated with global intelligence from FortiGuard Labs to defend against emerging threats.",
  },
  {
    title: "Compliance and Reporting",
    description:
      "Built-in compliance support for standards like PCI-DSS, HIPAA, and GDPR with automated reporting.",
  },
];

export const sentinelOneXdrFeatures: Feature[] = [
  {
    title: "Autonomous Detection and Response",
    description:
      "AI-driven automation detects and neutralizes threats in real-time with minimal human input.",
  },
  {
    title: "Multi-Surface Protection",
    description:
      "Secures endpoints, cloud workloads, and IoT devices for full-spectrum threat coverage.",
  },
  {
    title: "AI-Powered Behavioral Analysis",
    description:
      "Detects known and unknown threats using real-time behavioral analysis and machine learning.",
  },
  {
    title: "Automated Remediation",
    description:
      "Instantly isolates, removes, and recovers from threats without manual intervention.",
  },
  {
    title: "Unified Console",
    description:
      "Single dashboard offers deep visibility and control across all environments and assets.",
  },
  {
    title: "Global Threat Intelligence",
    description:
      "Continuously updated threat intel enhances detection and protection against evolving attacks.",
  },
];

export const arcticWolfMdrFeatures: Feature[] = [
  {
    title: "SOC-as-a-Service",
    description:
      "Fully managed Security Operations Center delivers 24/7 monitoring, threat detection, and response.",
  },
  {
    title: "Customizable Detection and Response",
    description:
      "Tailors detection rules and incident response strategies to each organization's unique needs.",
  },
  {
    title: "Human-Driven Threat Hunting",
    description:
      "Expert threat hunters investigate alerts and anomalies to ensure accurate and thorough threat resolution.",
  },
  {
    title: "Hybrid IT Protection",
    description:
      "Covers both cloud and on-premises environments for full-spectrum security.",
  },
  {
    title: "Rapid Incident Response",
    description:
      "Delivers quick containment and remediation to minimize risk and business disruption.",
  },
  {
    title: "Security Education & Awareness",
    description:
      "Offers training, insights, and reporting to elevate the organization’s overall cybersecurity posture.",
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Utilizes global threat intel to stay proactive against emerging attack trends and tactics.",
  },
];

export const falconInsightFeatures: Feature[] = [
  {
    title: "Next-Gen EDR",
    description:
      "Behavioral AI and machine learning power real-time detection and response to advanced endpoint threats.",
  },
  {
    title: "Managed Threat Hunting",
    description:
      "CrowdStrike’s expert hunters proactively search for hidden and emerging threats in your environment.",
  },
  {
    title: "Cloud-Native Architecture",
    description:
      "Deployed and managed entirely in the cloud, enabling seamless scalability and global reach.",
  },
  {
    title: "Integrated Threat Intelligence",
    description:
      "Leverages CrowdStrike’s global intelligence to identify attacker TTPs and emerging threats.",
  },
  {
    title: "Automated & Manual Response",
    description:
      "Combines instant automated containment with human-led investigations for complete threat resolution.",
  },
  {
    title: "Real-Time Endpoint Visibility",
    description:
      "Centralized view of all endpoint activity to speed up detection, investigation, and response.",
  },
  {
    title: "Prevention & Detection",
    description:
      "Blocks threats proactively while detecting those that evade prevention layers, closing the security gap.",
  },
];

export const ciscoSecureFeatures: Feature[] = [
  {
    title: "Centralized Security Operations",
    description:
      "Unifies visibility across endpoints, networks, and the cloud, allowing faster correlation and investigation of threats.",
  },
  {
    title: "Automation and Orchestration",
    description:
      "Automates repetitive tasks and orchestrates response across tools to improve SOC efficiency and reduce mean time to respond.",
  },
  {
    title: "Real-Time Threat Intelligence",
    description:
      "Powered by Cisco Talos to provide up-to-date global threat insights for proactive security operations.",
  },
  {
    title: "Customizable Workflows",
    description:
      "Build and deploy custom incident response workflows tailored to organizational security requirements.",
  },
  {
    title: "Integrated Security Tools",
    description:
      "Seamlessly connects with Cisco and third-party solutions to enhance threat detection, investigation, and response.",
  },
];


export const fortiXDRFeatures: Feature[] = [
  {
    title: "End-to-End Visibility",
    description:
      "Monitors endpoints, network, and cloud activity to detect advanced threats with improved accuracy and context.",
  },
  {
    title: "Automated Detection and Response",
    description:
      "Applies ML and behavioral analytics to detect threats and initiate automatic responses, minimizing risk and response time.",
  },
  {
    title: "Security Fabric Integration",
    description:
      "Integrates natively with Fortinet tools like FortiGate, FortiClient, and FortiSandbox for coordinated threat defense.",
  },
  {
    title: "Threat Intelligence from FortiGuard Labs",
    description:
      "Enhances detection and response using global threat intelligence from Fortinet’s research labs.",
  },
  {
    title: "Centralized Management Console",
    description:
      "FortiManager enables streamlined oversight with consolidated alerts, incident tracking, and insights in a single dashboard.",
  },
];

export const sentinelOneXDRFeatures: Feature[] = [
  {
    title: "AI-Powered Threat Detection",
    description:
      "Detects advanced and evasive threats using artificial intelligence, ensuring defense against both known and zero-day attacks.",
  },
  {
    title: "Full Stack Coverage",
    description:
      "Provides holistic protection across endpoints, networks, and cloud workloads, enabling a unified security posture.",
  },
  {
    title: "Automated Threat Response",
    description:
      "Automatically isolates devices, terminates malicious processes, and rolls back unauthorized changes with minimal human input.",
  },
  {
    title: "Threat Hunting Tools",
    description:
      "Enables proactive threat discovery through powerful query and investigation capabilities across the entire environment.",
  },
  {
    title: "Centralized Management",
    description:
      "Manages all XDR functionalities via a single console, offering deep visibility, faster incident response, and simplified operations.",
  },
  {
    title: "Real-Time Forensics",
    description:
      "Delivers real-time attack telemetry and detailed forensic insights to aid in rapid triage and remediation.",
  },
];

export const arcticWolfXDRFeatures: Feature[] = [
  {
    title: "24/7 Threat Monitoring",
    description:
      "Delivers round-the-clock monitoring through a dedicated Security Operations Center (SOC), ensuring no threats go unnoticed.",
  },
  {
    title: "Managed Detection and Response",
    description:
      "Expert-led threat detection and response allows organizations to offload security operations and stay focused on their core business.",
  },
  {
    title: "Security Orchestration and Automation",
    description:
      "Automates incident response workflows to reduce time-to-containment and improve operational efficiency.",
  },
  {
    title: "Real-Time Threat Intelligence",
    description:
      "Leverages global and proprietary threat intelligence to stay ahead of evolving attack techniques.",
  },
  {
    title: "Proactive Threat Hunting",
    description:
      "Security analysts continuously search for anomalies and emerging threats to prevent incidents before impact.",
  },
  {
    title: "Customized Alerts and Reporting",
    description:
      "Delivers actionable alerts and tailored reports aligned with business-specific risk priorities.",
  },
];

export const crowdStrikeFalconXDRFeatures: Feature[] = [
  {
    title: "Cloud-Native Architecture",
    description:
      "Delivers scalable and fast detection capabilities via CrowdStrike’s cloud platform, ensuring low-latency response and visibility.",
  },
  {
    title: "Integrated EDR and XDR",
    description:
      "Combines endpoint, network, and cloud telemetry to provide holistic detection and response across the environment.",
  },
  {
    title: "AI and Behavioral Analytics",
    description:
      "Employs machine learning to identify anomalies and advanced attacks that bypass traditional security tools.",
  },
  {
    title: "Automated Threat Response",
    description:
      "Automates actions such as device isolation, process termination, and file quarantine to quickly contain threats.",
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Leverages Falcon Intelligence and global threat feeds to correlate attack behaviors and accelerate investigations.",
  },
  {
    title: "Real-Time Visibility",
    description:
      "Enables continuous monitoring and live incident tracking across endpoints and workloads for immediate threat detection.",
  },
  {
    title: "Incident Investigation and Forensics",
    description:
      "Provides detailed timelines, attack paths, and telemetry for forensic analysis and root cause investigation.",
  },
];


export const ciscoSoarFeatures: Feature[] = [
  {
    title: "Incident Response Automation",
    description:
      "Automates handling of security incidents to enforce SOPs and significantly reduce response times.",
  },
  {
    title: "Case Management",
    description:
      "Enables end-to-end management of security incidents with tracking and documentation capabilities.",
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Enriches incident data by integrating with multiple threat intelligence feeds to support informed decision-making.",
  },
  {
    title: "Playbooks and Automation",
    description:
      "Includes customizable, automated workflows for specific incident types like malware, phishing, and intrusions.",
  },
  {
    title: "Collaboration Tools",
    description:
      "Provides a centralized platform for incident tracking and resolution with built-in team collaboration features.",
  },
  {
    title: "Rich Integrations",
    description:
      "Seamlessly integrates with Cisco products and third-party tools including SIEMs, firewalls, and TIPs.",
  },
];

export const ciscoSoarBenefits: Benefit[] = [
  {
    text: "Reduces mean time to detection (MTTD) and mean time to response (MTTR) through automation.",
    position: "left",
  },
  {
    text: "Boosts operational efficiency by eliminating repetitive manual tasks.",
    position: "right",
  },
  {
    text: "Enhances decision-making with enriched incident data and unified visibility.",
    position: "left",
  },
  {
    text: "Delivers comprehensive threat management with a focus on fast response and regulatory compliance.",
    position: "right",
  },
];

export const fortiSoarFeatures: Feature[] = [
  {
    title: "Incident Management",
    description:
      "Enables full lifecycle incident tracking with real-time visibility and workflow automation.",
  },
  {
    title: "Automated Response Playbooks",
    description:
      "Includes predefined playbooks to automate threat containment and reduce response time.",
  },
  {
    title: "Integration with Fortinet Products",
    description:
      "Natively integrates with FortiGate, FortiAnalyzer, FortiSIEM, and other Fortinet solutions to enhance detection and response.",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Supports integration with a broad range of third-party tools to unify your security ecosystem.",
  },
  {
    title: "Threat Intelligence Management",
    description:
      "Ingests and enriches threat intelligence feeds to provide contextual insights for faster threat assessment.",
  },
  {
    title: "Security Automation",
    description:
      "Automates repetitive security tasks like incident triage, investigation, and remediation.",
  },
];

export const fortiSoarBenefits: Benefit[] = [
  {
    text: "Seamless integration with Fortinet products for a unified and secure security operations center.",
    position: "left",
  },
  {
    text: "Greater efficiency through automated orchestration of repetitive tasks and workflows.",
    position: "right",
  },
  {
    text: "Accelerated response times with predefined and customizable automated playbooks.",
    position: "left",
  },
  {
    text: "Improved visibility and situational awareness with centralized incident and case management.",
    position: "right",
  },
];

export const darktraceSoarFeatures: Feature[] = [
  {
    title: "Autonomous Response",
    description:
      "AI-powered detection and automated response to neutralize threats in real time without human input.",
  },
  {
    title: "Integration with Darktrace Antigena",
    description:
      "Continuously learns from the environment to provide adaptive, AI-driven threat detection and response.",
  },
  {
    title: "Automated Playbooks",
    description:
      "Executes predefined security workflows automatically for consistent and efficient incident handling.",
  },
  {
    title: "Incident Escalation",
    description:
      "Automatically escalates incidents to human analysts when deeper investigation or manual oversight is required.",
  },
  {
    title: "Real-Time Threat Detection",
    description:
      "Monitors network traffic, user behavior, and endpoints to detect threats early in the kill chain.",
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Enriches detections with external threat intel feeds to enhance decision-making and response accuracy.",
  },
];

export const darktraceSoarBenefits: Benefit[] = [
  {
    text: "AI-powered automation enables autonomous threat response with minimal human intervention.",
    position: "left",
  },
  {
    text: "Proactive threat mitigation through real-time detection and adaptive learning.",
    position: "right",
  },
  {
    text: "Streamlined operations with automated playbooks that reduce manual workload.",
    position: "left",
  },
  {
    text: "Enhanced efficiency and scalability for SOC teams with reduced operational overhead.",
    position: "right",
  },
];
export const qradarSoarFeatures: Feature[] = [
  {
    title: "Incident and Case Management",
    description:
      "Centralized platform to track, manage, and resolve incidents from detection to remediation.",
  },
  {
    title: "Automated Playbooks",
    description:
      "Customizable workflows that automate responses to common security events, speeding up incident handling.",
  },
  {
    title: "Seamless Integration with QRadar SIEM",
    description:
      "Enriches incident data with insights from QRadar SIEM for improved threat detection and response.",
  },
  {
    title: "Collaboration Features",
    description:
      "Facilitates teamwork among analysts with built-in tools for communication and task sharing.",
  },
  {
    title: "Threat Intelligence Feeds",
    description:
      "Ingests threat intel to provide contextual data and enhance decision-making during incidents.",
  },
  {
    title: "Advanced Automation and Orchestration",
    description:
      "Integrates with third-party tools and automates complex workflows to boost operational efficiency.",
  },
];

export const qradarSoarBenefits: Benefit[] = [
  {
    text: "Tightly integrated with QRadar SIEM for unified security operations.",
    position: "left",
  },
  {
    text: "Accelerated incident response through automated playbooks and orchestration.",
    position: "right",
  },
  {
    text: "Enhanced team collaboration for faster, coordinated threat remediation.",
    position: "left",
  },
  {
    text: "Reduced manual workload with automated workflows and error-free execution.",
    position: "right",
  },
];
