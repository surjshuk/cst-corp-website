// import { Benefits } from "@/components/sections/cybersecurity/set-1/benefits";
import { Feature } from "@/types/declaration";
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

  
   

  
   

  
   