// operational technology 

import { CollapisblePoint, ThreePoint } from "@/types/declaration";

export const icsFeature: CollapisblePoint[] = [
  {
    title: "Cisco Cyber Vision",
    description:
      "Provides complete visibility into ICS environments by identifying connected assets and detecting potential vulnerabilities. Real-time threat detection with deep packet inspection (DPI) of industrial protocols (e.g., Modbus, OPC-UA, Ethernet/IP)",
   
  },
  {
    title: "Cisco Secure Firewall",
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

export const icsBenefits : ThreePoint[] = [

  {
    text: "Seamless integration with existing Cisco infrastructure.",
   
  },
  {
    text: "Enhanced visibility and control over ICS assets.",
    
  },
  {
    text: "Advanced threat detection and response for critical OT networks.",
   
  }
]


export const fortinetICSFeatures: CollapisblePoint[] = [
  {
    title: "FortiGate NGFW for ICS",
    description:
      "Supports deep packet inspection for industrial control protocols and enables robust segmentation between IT and OT networks with granular access control policies.",
   
  },
  {
    title: "FortiGuard Industrial Security Service",
    description:
      "Delivers continuously updated threat intelligence specific to ICS environments, offering protection against malware, ransomware, and targeted ICS exploits.",
   
  },
  {
    title: "FortiNAC for Visibility and Access Control",
    description:
      "Provides comprehensive visibility into all devices across OT networks and enforces dynamic access policies to prevent unauthorized connections.",
   
  },
  {
    title: "FortiSIEM Integration",
    description:
      "Aggregates IT and OT telemetry to enable unified threat detection, compliance reporting, and accelerated incident response across industrial systems.",
   
  }
];

export const fortinetICSBenefits: ThreePoint[] = [
  {
    text: "Comprehensive, scalable ICS protection using Fortinet’s Security Fabric architecture.",
   
  },
  {
    text: "Optimized for industrial environments with minimal performance impact.",
    
  },
  {
    text: "Integrated OT threat intelligence for rapid detection and response.",
   
  }
];

export const paloAltoICSFeatures: CollapisblePoint[] = [
  {
    title: "Palo Alto Networks NGFW with App-ID",
    description:
      "Identifies and classifies industrial protocol traffic using App-ID technology and blocks malicious activity targeting ICS systems.",
   
  },
  {
    title: "Prisma Cloud for ICS Security",
    description:
      "Provides cloud-native threat detection and compliance management tailored for ICS environments. Uses machine learning to monitor traffic and asset behavior.",
   
  },
  {
    title: "Cortex XDR for ICS",
    description:
      "Delivers unified threat detection and response across IT and OT systems by correlating ICS-specific threats with enterprise-wide incidents.",
   
  },
  {
    title: "Unit 42 Threat Intelligence",
    description:
      "Supplies actionable threat intelligence and vulnerability insights specific to industrial control systems, enhancing proactive defense.",
   
  }
];

export const paloAltoICSBenefits: ThreePoint[] = [
  {
    text: "Enhanced visibility and prevention of OT-specific threats.",
   
  },
  {
    text: "Unified security management for hybrid IT-OT environments.",
    
  },
  {
    text: "Continuous monitoring to ensure operational safety.",
   
  }
];


export const tenableFeatures: CollapisblePoint[] = [
  {
    title: "Tenable.ot Platform",
    description:
      "Continuously identifies, monitors, and protects OT assets while offering real-time risk assessment tailored to industrial environments.",
   
  },
  {
    title: "Vulnerability Management",
    description:
      "Detects unpatched devices, insecure configurations, and other OT vulnerabilities. Maps findings to frameworks like NIST and MITRE ATT&CK for ICS.",
   
  },
  {
    title: "Anomaly Detection",
    description:
      "Applies behavioral analytics to identify suspicious activity and mitigate potential security breaches before impact.",
   
  },
  {
    title: "Integration with Tenable.sc and Nessus",
    description:
      "Enables unified vulnerability management across IT and OT environments for comprehensive asset and risk visibility.",
   
  }
];

export const tenableBenefits: ThreePoint[] = [
  {
    text: "Proactive risk management tailored for ICS environments.",
   
  },
  {
    text: "Supports compliance with regulatory requirements.",
    
  },
  {
    text: "Lightweight deployment to reduce operational disruption.",
   
  }
];


export const arubaFeatures: CollapisblePoint[] = [
  {
    title: "Aruba ClearPass for OT",
    description:
      "Delivers identity-based access control tailored for ICS environments. Detects unauthorized devices and quarantines them in real-time to protect OT networks.",
   
  },
  {
    title: "EdgeConnect SD-WAN for ICS",
    description:
      "Provides secure, high-performance connectivity between industrial sites with centralized visibility and low-latency communication for critical OT systems.",
   
  },
  {
    title: "Aruba Industrial IoT (IIoT) Security",
    description:
      "Implements Zero Trust security for IIoT and ICS networks by monitoring industrial protocols and detecting anomalous device behavior.",
   
  }
];

export const arubaBenefits: ThreePoint[] = [
  {
    text: "Simplified and secure network management for hybrid IT-OT environments.",
   
  },
  {
    text: "Enhanced scalability and resilience for industrial networks.",
    
  },
  {
    text: "Integrated Zero Trust security for critical ICS assets.",
   
  }
];


export const darktraceFeatures: CollapisblePoint[] = [
  {
    title: "Darktrace Industrial Immune System",
    description:
      "Continuously monitors ICS networks to detect anomalies using self-learning AI. Adapts in real-time to emerging threats without requiring predefined rules or signatures.",
   
  },
  {
    title: "Threat Visualizer for ICS",
    description:
      "Provides real-time, intuitive visualizations of ICS network activity, enabling fast threat identification and operational context.",
   
  },
  {
    title: "Autonomous Response with Antigena",
    description:
      "Automatically responds to threats across OT environments without disrupting core operations, neutralizing attacks with surgical precision.",
   
  },
  {
    title: "AI-Powered Threat Detection",
    description:
      "Detects zero-day attacks, insider threats, and supply chain intrusions by analyzing behavioral deviations across ICS assets.",
   
  }
];

export const darktraceBenefits: ThreePoint[] = [
  {
    text: "Autonomous, AI-driven protection tailored for industrial environments.",
   
  },
  {
    text: "Minimal impact on operations due to self-adaptive technology.",
    
  },
  {
    text: "Comprehensive visibility and real-time threat mitigation.",
   
  }
];


export const sentinelOneFeatures: CollapisblePoint[] = [
  {
    title: "Singularity Platform",
    description:
      "A unified EDR platform that secures both IT and OT environments. Delivers ICS-specific threat intelligence and behavioral analytics for proactive defense.",
   
  },
  {
    title: "Ranger for IoT/OT Discovery",
    description:
      "Automatically identifies and monitors OT devices across the network. Visualizes asset interconnections to improve security posture and visibility.",
   
  },
  {
    title: "Automated Threat Response",
    description:
      "Utilizes AI to detect, contain, and remediate cyber threats targeting ICS infrastructure, reducing time-to-response without human intervention.",
   
  },
  {
    title: "Integration with Threat Intelligence Platforms (TIPs)",
    description:
      "Enhances situational awareness by ingesting ICS-specific threat intelligence from TIPs for real-time, contextual protection.",
   
  }
];

export const sentinelOneBenefits: ThreePoint[] = [
  {
    text: "Simplified management of IT and OT security in a single platform.",
   
  },
  {
    text: "Rapid detection and automated response reduce mean time to resolution (MTTR).",
    
  },
  {
    text: "AI-driven capabilities reduce manual intervention.",
   
  }
];


export const ciscoScadaFeatures: CollapisblePoint[] = [
  {
    title: "Cisco Industrial Threat Defense",
    description:
      "Protects IoT, OT, and ICS assets by providing full visibility into industrial behaviors and reducing the attack surface. Simplifies OT cybersecurity with integrated threat defense capabilities.",
   
  },
  {
    title: "Cisco Cyber Vision",
    description:
      "Delivers deep visibility into industrial networks by identifying all assets and monitoring their communications. Built for seamless integration with network infrastructure, even at scale.",
   
  },
  {
    title: "Cisco Secure Firewall",
    description:
      "Enforces security policies, prevents unauthorized access, and segments industrial networks to contain threats across OT and IoT environments.",
   
  },
  {
    title: "Zero Trust for OT",
    description:
      "Applies Zero Trust principles to OT networks by ensuring only authenticated and authorized users and devices access critical SCADA systems, reducing insider and external threats.",
   
  }
];

export const ciscoScadaBenefits: ThreePoint[] = [
  {
    text: "Comprehensive protection across all layers of the industrial network.",
   
  },
  {
    text: "Scalable deployment from small facilities to large-scale industrial operations.",
    
  },
  {
    text: "Seamless integration with existing IT and OT infrastructure.",
   
  },
  {
    text: "Real-time monitoring and alerting to quickly identify security incidents.",
    
  }
];


export const fortinetScadaFeatures: CollapisblePoint[] = [
  {
    title: "Fortinet Security Fabric",
    description:
      "An integrated platform delivering visibility, automation, and resilience across IT and OT environments. Enables non-disruptive security integration within complex SCADA infrastructures.",
   
  },
  {
    title: "FortiGate Next-Generation Firewalls (NGFWs)",
    description:
      "Provides advanced threat protection including IPS, web filtering, and anti-spam—tailored for SCADA systems—all within a unified, high-performance appliance.",
   
  },
  {
    title: "FortiNAC (Network Access Control)",
    description:
      "Enhances device and user visibility within SCADA networks, enforcing granular access control to ensure only authorized entities connect to critical systems.",
   
  },
  {
    title: "Integration with SCADAfence",
    description:
      "Combines Fortinet’s infrastructure with SCADAfence’s OT-focused security tools for deeper threat detection, policy enforcement, and incident response across converged environments.",
   
  }
];

export const fortinetScadaBenefits: ThreePoint[] = [
  {
    text: "Holistic security coverage across both IT and OT systems.",
   
  },
  {
    text: "Designed to adapt to various industrial environments and operational scales.",
    
  },
  {
    text: "Advanced threat detection for known and unknown attacks on SCADA networks.",
   
  },
  {
    text: "Supports compliance with industrial cybersecurity regulations and standards.",
    
  }
];

export const paloAltoScadaFeatures: CollapisblePoint[] = [
  {
    title: "Next-Generation Firewall (NGFW)",
    description:
      "Performs deep packet inspection and SCADA protocol analysis to detect and block malicious activities targeting industrial control systems.",
   
  },
  {
    title: "Prisma Access",
    description:
      "Delivers secure remote access to SCADA systems, protecting remote connections from cyber threats and maintaining operational integrity.",
   
  },
  {
    title: "Cortex XSOAR",
    description:
      "Provides orchestration, automation, and response capabilities to streamline incident management and remediation across SCADA environments.",
   
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Utilizes global threat intelligence to identify and defend against emerging threats targeting SCADA networks and assets.",
   
  }
];

export const paloAltoScadaBenefits: ThreePoint[] = [
  {
    text: "Comprehensive protection across network, endpoint, and cloud environments.",
   
  },
  {
    text: "Scalable for industrial operations of all sizes, from remote sites to enterprise facilities.",
    
  },
  {
    text: "Real-time monitoring and alerting for rapid incident detection and response.",
   
  },
  {
    text: "Seamless integration with existing IT and OT infrastructure for unified security operations.",
    
  }
];

export const tenableScadaFeatures: CollapisblePoint[] = [
  {
    title: "Tenable.ot",
    description:
      "Purpose-built for OT environments, Tenable.ot delivers asset discovery, threat detection, and vulnerability management for SCADA systems.",
   
  },
  {
    title: "Continuous Monitoring",
    description:
      "Enables real-time monitoring of SCADA networks to quickly identify anomalies, misconfigurations, and suspicious behavior.",
   
  },
  {
    title: "Risk-Based Vulnerability Management",
    description:
      "Uses contextual risk scoring to prioritize vulnerabilities based on potential impact, helping teams focus remediation on the most critical threats.",
   
  },
  {
    title: "Integration Capabilities",
    description:
      "Integrates seamlessly with existing IT security infrastructure to unify vulnerability management across IT and OT environments.",
   
  }
];

export const tenableScadaBenefits: ThreePoint[] = [
  {
    text: "Enhanced visibility into all assets and communications within the SCADA environment.",
   
  },
  {
    text: "Proactive identification and prioritization of vulnerabilities for targeted remediation.",
    
  },
  {
    text: "Real-time detection of anomalous activity across SCADA networks.",
   
  },
  {
    text: "Unified security operations across IT and OT through seamless integration.",
    
  }
];


export const arubaScadaFeatures: CollapisblePoint[] = [
  {
    title: "Zero Trust Network Access (ZTNA)",
    description:
      "Replaces traditional VPNs with a modern access model that ensures only authenticated and authorized users and devices can interact with SCADA systems.",
   
  },
  {
    title: "AI-Powered Network Detection and Response (NDR)",
    description:
      "Provides real-time threat monitoring and automated responses using AI, enhancing protection for SCADA network traffic and operational integrity.",
   
  },
  {
    title: "ClearPass Universal Profiler",
    description:
      "Identifies and profiles all devices connected to the network, enabling precise access control for SCADA components and infrastructure.",
   
  },
];

export const arubaScadaBenefits: ThreePoint[] = [
  {
    text: "Enhanced visibility across all SCADA-connected devices through dynamic profiling.",
   
  },
  {
    text: "Zero Trust enforcement limits access to only verified users and systems.",
    
  },
  {
    text: "AI-driven detection and response ensures rapid mitigation of potential threats.",
   
  },
];


export const darktraceScadaFeatures: CollapisblePoint[] = [
  {
    title: "Darktrace Industrial Immune System",
    description:
      "Passively models the 'pattern of life' for all SCADA users, devices, and controllers to detect early-stage anomalies and threats.",
   
  },
  {
    title: "Real-Time Threat Detection",
    description:
      "Uses AI algorithms to continuously monitor SCADA network traffic and detect anomalies in real-time.",
   
  },
  {
    title: "Autonomous Response",
    description:
      "Automatically mitigates identified threats without human input, ensuring uninterrupted industrial operations.",
   
  },
];

export const darktraceScadaBenefits: ThreePoint[] = [
  {
    text: "Proactively identifies threats before they disrupt operations by learning normal behavioral baselines.",
   
  },
  {
    text: "Provides complete visibility across SCADA systems for holistic security.",
    
  },
  {
    text: "Autonomous responses reduce incident impact and minimize downtime.",
   
  },
];


export const sentinelOneScadaFeatures: CollapisblePoint[] = [
  {
    title: "ActiveEDR",
    description:
      "Provides real-time detection and response for threats targeting endpoints within SCADA networks, ensuring rapid threat containment.",
   
  },
  {
    title: "Automated Remediation",
    description:
      "Swiftly remediates threats without manual intervention, reducing downtime and operational disruption in SCADA environments.",
   
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Leverages real-time threat intelligence to detect and prevent known and emerging cyber threats specific to industrial systems.",
   
  },
];

export const sentinelOneScadaBenefits: ThreePoint[] = [
  {
    text: "Delivers robust protection for SCADA endpoints, securing critical devices from compromise.",
   
  },
  {
    text: "Automated incident response reduces mean time to recovery and operational impact.",
    
  },
  {
    text: "Integrates with threat intelligence to provide proactive and comprehensive threat defense.",
   
  },
];

export const ciscoCipFeatures: CollapisblePoint[] = [
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



export const fortinetCipFeatures: CollapisblePoint[] = [
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

export const paloCipFeatures: CollapisblePoint[] = [
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

export const tenableCipFeatures: CollapisblePoint[] = [
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


export const arubaCipFeatures: CollapisblePoint[] = [
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

export const darktraceCipFeatures: CollapisblePoint[] = [
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

export const sentinelOneCipFeatures: CollapisblePoint[] = [
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

export const arcticWolfCipFeatures: CollapisblePoint[] = [
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

export const ciscoIotSecurityFeatures: CollapisblePoint[] = [
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

export const fortinetIotSecurityFeatures: CollapisblePoint[] = [
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


export const paloAltoIotSecurityFeatures: CollapisblePoint[] = [
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


export const tenableIotSecurityFeatures: CollapisblePoint[] = [
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


export const arubaIotSecurityFeatures: CollapisblePoint[] = [
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


export const darktraceIotSecurityFeatures: CollapisblePoint[] = [
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


export const sentinelOneIotSecurityFeatures: CollapisblePoint[] = [
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

export const arcticWolfIotSecurityFeatures: CollapisblePoint[] = [
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
