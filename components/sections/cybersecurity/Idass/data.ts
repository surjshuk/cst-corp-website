import { CollapisblePoint, ThreePoint, UseCase } from "@/types/declaration"

/*  ----- ----- ----- Endpoint Protection Platforms (EPP)  ----- ----- -----  */
export const eppTrendMicroFeatures : CollapisblePoint[] = [
  {
    title: "Behavioral Analysis",
    description:
      "Trend Micro uses AI-powered behavioral monitoring to detect and respond to unusual activities, minimizing the risk of zero-day exploits.",
   
  },
  {
    title: " Integrated Threat Intelligence",
    description:
      " By leveraging its Smart Protection Network, Trend Micro delivers real-time threat intelligence to preemptively block threats.",
   
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "The platform is optimized for Windows, Mac, and Linux systems, ensuring comprehensive protection across diverse environments.",
   
  },
  {
    title: "Cloud App Security",
    description:
      "Protects cloud applications such as Office 365, Google Workspace, and more.",
   
  },
  {
    title: "Centralized Management Console",
    description:
      " A single-pane-of-glass dashboard simplifies deployment, management, and reporting.",
   
  },
 
]


/*  ----- ----- -----  Endpoint Detection and Response (EDR)  ----- ----- -----  */
export const edrCrowdStrikeFeatures : CollapisblePoint[] = [
  {
    title: "Real-Time Threat Detection",
    description:
      "Provides continuous monitoring and alerts for suspicious activities.",
   
  },
  {
    title: " Behavioral Analytics ",
    description:
      "Uses artificial intelligence (AI) and machine learning (ML) to detect anomalies and prevent breaches.",
   
  },
  {
    title: "Cloud-Delivered ",
    description:
      "Eliminates the need for on-premises hardware, ensuring scalability and ease of deployment.",
   
  },
  {
    title: "Incident Response ",
    description:
      "Offers tools for threat hunting, forensic analysis, and remediation.",
   
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Leverages CrowdStrike’s extensive threat intelligence database for proactive defense.",
   
  },
 
]

export const edrCrowdStrikeBenefits : ThreePoint[] = [

  {
    text: "Reduces the dwell time of threats.",
   
  },
  {
    text: "Provides unparalleled visibility across endpoints.",
    
  },
  {
    text: "Simplifies security operations through automation.",
   
  }
]



/*  ----- ----- -----  Mobile Device Management (MDM)   ----- ----- -----  */
export const mdmSentinelFeatures : CollapisblePoint[] = [
  {
    title: "Real-time Threat Detection ",
    description:
      "Monitors mobile activity for malicious behavior, such as phishing attempts, device compromise, or application misuse.",
   
  },
  {
    title: " Zero Trust Integration",
    description:
      " Enforces zero-trust principles by evaluating device health before granting access to sensitive resources.",
   
  },
  {
    title: "Advanced Security ",
    description:
      "Identifies and blocks device, network, and application-level threats without requiring user interaction.",
   
  },
  {
    title: "Cloud-Native ",
    description:
      "Easily deployable via a cloud-based platform with lightweight agents, ensuring minimal impact on device performance.",
   
  },
  {
    title: "Integration",
    description:
      "Seamlessly integrates with popular MDMs like Microsoft Intune and VMware Workspace ONE for enhanced mobile security.",
   
  },
  {
    title: "Integration",
    description:
      "Seamlessly integrates with popular MDMs like Microsoft Intune and VMware Workspace ONE for enhanced mobile security.",
   
  }
 
]

export const mdmSentinelBenefits : ThreePoint[] = [

  {
    text: "Organizations requiring high-level security for BYOD (Bring Your Own Device) policies.",
   
  },
  {
    text: "Enterprises dealing with sensitive data where phishing and malware are high risks.",
    
  },
  {
    text: "Hybrid workforces needing protection across personal and corporate-owned devices.",
   
  }
]



/*  ----- -----  Application Whitelisting   ----- -----  */
/*  ----- ----- -----   VMware Carbon Black   ----- ----- -----  */
export const appVMwareFeatures : CollapisblePoint[] = [
  {
    title: "Behavioral Endpoint Threat Detection",
    description:
      "Monitors application behavior in real time to identify suspicious activity.",
   
  },
  {
    title: " Dynamic Whitelisting ",
    description:
      "Automatically adapts to the unique application environments of businesses, ensuring minimal disruption.",
   
  },
  {
    title: " Cloud-Native Security ",
    description:
      " Delivers robust performance and scalability with its cloud-based architecture.",
   
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Enriches detection capabilities with global threat intelligence.",
   
  }
 
]

export const appVMwareBenefits : ThreePoint[] = [

  {
    text: "Prevents unauthorized applications from running on endpoints, effectively mitigating malware.",
   
  },
  {
    text: "Reduces attack surfaces by locking down endpoint configurations.",
    
  },
  {
    text: "Provides detailed forensic insights for incident response.",
   
  }
]




/*  ----- ----- -----  Patch Management   ----- ----- -----  */
/*  ----- -----  Microsoft Endpoint Configuration Manager (MECM) ----- -----  */
export const patchMicrosoftFeatures : CollapisblePoint[] = [
  {
    title: "Automated Patch Deployment",
    description:
      " MECM enables automated delivery of software updates for Microsoft products and third-party applications.",
   
  },
  {
    title: " Granular Control",
    description:
      " Offers detailed deployment scheduling, prioritization, and reporting.",
   
  },
  {
    title: " Cross-Platform Support",
    description:
      " Provides support for Windows, macOS, and Linux systems, ensuring consistent patch application across diverse environments.",
   
  },
  {
    title: "Security Integration",
    description:
      "Integrated with Microsoft Defender for Endpoint, ensuring timely patching for security vulnerabilities.",
   
  }
 
]

export const pathMicrosoftBenefits : ThreePoint[] = [

  {
    text: "Prevents unauthorized applications from running on endpoints, effectively mitigating malware.",
   
  },
  {
    text: "Reduces attack surfaces by locking down endpoint configurations.",
    
  },
  {
    text: "Provides detailed forensic insights for incident response.",
   
  }
]

// Identity and access management
// Multi Factor Authentication (MFA
   

export const identityFeatures: CollapisblePoint[] = [
  {
    title: "Risk-Based Authentication",
    description:
      "Leverages contextual factors such as user location, device type, and behavior patterns to adjust authentication requirements dynamically.",
   
  },
  {
    title: "Flexible Authentication Methods",
    description:
      "Supports a wide array of factors, including biometrics, push notifications, security keys, and SMS-based OTPs.",
   
  },
  {
    title: "Integration",
    description:
      "Easily integrates with applications, VPNs, and on-premise systems via Okta’s pre-built integrations and APIs.",
   
  },
  {
    title: "Custom Policies",
    description:
      "Enables administrators to create granular policies tailored to their organization’s specific needs.",
   
  },
  {
    title: "Compliance",
    description:
      "Meets global regulatory requirements, including GDPR, HIPAA, and SOC 2 compliance.",
   
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

export const ciscoFeatures: CollapisblePoint[] = [
  {
    title: "Push-Based Authentication",
    description:
      "Easy and fast authentication via mobile push notifications.",
   
  },
  {
    title: "Zero Trust Framework",
    description:
      "Verifies the trustworthiness of users and devices before granting access.",
   
  },
  {
    title: "Device Insights",
    description:
      "Provides visibility into user devices, allowing administrators to enforce policies based on device security posture.",
   
  },
  {
    title: "Broad Compatibility",
    description:
      "Supports integration with VPNs, cloud apps, and on-premises systems.",
   
  },
  {
    title: "Adaptive Policies",
    description:
      "Allows fine-grained access control based on contextual factors.",
   
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

export const microsoftEntraFeatures: CollapisblePoint[] = [
  {
    title: "Conditional Access",
    description:
      "Policies based on user risk, sign-in risk, and device compliance.",
   
  },
  {
    title: "Passwordless Authentication",
    description:
      "Supports biometrics and security keys for a seamless login experience.",
   
  },
  {
    title: "Identity Protection",
    description:
      "Detects and mitigates identity-based threats using advanced AI.",
   
  },
  {
    title: "Self-Service Capabilities",
    description:
      "Allows users to manage passwords and security settings autonomously.",
   
  },
  {
    title: "Extensive Integration",
    description:
      "Compatible with a wide range of enterprise tools and systems.",
   
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


export const googleAuthFeatures: CollapisblePoint[] = [
  {
    title: "Ease of Use",
    description:
      "Simple setup and usage through the Google Authenticator app.",
   
  },
  {
    title: "TOTP",
    description:
      "Generates secure, time-sensitive codes for authentication.",
   
  },
  {
    title: "Broad Adoption",
    description:
      "Supported by a wide range of applications and websites.",
   
  },
  {
    title: "Offline Functionality",
    description:
      "Works without an internet connection after initial setup.",
   
  },
  {
    title: "Open Standards",
    description:
      "Based on the open TOTP and HMAC-based OTP (HOTP) protocols.",
   
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


export const fortiTokenFeatures: CollapisblePoint[] = [
  {
    title: "Hardware and Software Tokens",
    description:
      "Offers flexibility with physical tokens and the FortiToken Mobile app.",
   
  },
  {
    title: "Integration with FortiGate",
    description:
      "Works natively with FortiGate firewalls for VPN and network access control.",
   
  },
  {
    title: "Time-Based OTP",
    description:
      "Generates time-sensitive OTPs for secure authentication.",
   
  },
  {
    title: "User Self-Service",
    description:
      "Reduces administrative overhead by allowing users to manage their tokens.",
   
  },
  {
    title: "Scalability",
    description:
      "Designed for enterprises of all sizes with easy deployment options.",
   
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



export const globalProtectFeatures: CollapisblePoint[] = [
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

export const oktaFeatures: CollapisblePoint[] = [
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

export const oktaBenefits: ThreePoint[] = [
  {
    text: "Simplifies access to enterprise applications for employees, partners, and customers.",
   
  },
  {
    text: "Reduces password fatigue and IT helpdesk workload.",
    
  },
  {
    text: "Enhances security posture with built-in compliance features (GDPR, HIPAA, etc.).",
   
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

export const entraFeatures: CollapisblePoint[] = [
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

export const entraBenefits: ThreePoint[] = [
  {
    text: "Increases productivity by enabling users to access all apps with a single set of credentials.",
   
  },
  {
    text: "Enhances security with advanced threat detection and risk-based policies.",
    
  },
  {
    text: "Simplifies identity management for organizations with mixed on-premises and cloud environments.",
   
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

export const ciscoDuoFeatures: CollapisblePoint[] = [
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

export const ciscoDuoBenefits: ThreePoint[] = [
  {
    text: "Enhances security with multi-layered authentication and continuous monitoring.",
   
  },
  {
    text: "Improves user experience with a unified SSO portal.",
    
  },
  {
    text: "Simplifies compliance with detailed reporting and audit trails.",
   
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

export const fortinetKeyFeatures: CollapisblePoint[] = [
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

export const fortinetBenefits: ThreePoint[] = [
  {
    text: "Reduces complexity by unifying authentication for applications and networks.",
   
  },
  {
    text: "Strengthens security with integrated MFA and contextual access policies.",
    
  },
  {
    text: "Enhances compliance with detailed logging and audit capabilities.",
   
  },
];


export const paloAltoFeatures: CollapisblePoint[] = [
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

export const paloAltoBenefits: ThreePoint[] = [
  {
    text: "Enhances security for remote workers with context-aware policies.",
   
  },
  {
    text: "Improves user experience with SSO and simplified access workflows.",
    
  },
  {
    text: "Integrates easily with existing Palo Alto security solutions.",
   
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


export const rapidFeatures: CollapisblePoint[] = [
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

export const QRadarFeatures: CollapisblePoint[] = [
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