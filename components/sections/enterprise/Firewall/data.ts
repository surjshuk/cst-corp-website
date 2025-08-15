
import { Feature } from "../../AI/feature";

export interface Tab {
  id: string;
  title: string;
  description?: string;
}


export const ciscoDesc: string[] = [
  `Cisco Firepower Threat Defense (FTD) firewalls combine next-generation firewall (NGFW) capabilities with advanced threat detection and intelligence from Cisco Talos. These firewalls are designed to secure hybrid environments with advanced visibility, automation, and integrated threat defense.`
];

export const ciscoFeature: Feature[] = [
  {
    title: "Comprehensive NGFW Functionality",
    description: `Includes application visibility and control (AVC), an integrated intrusion prevention system (IPS), and Advanced Malware Protection (AMP) for continuous file analysis.`
  },
  {
    title: "Cisco SecureX Integration",
    description: `Provides centralized threat visibility and automation for streamlined incident response, with cross-product integration for a unified security ecosystem.`
  },
  {
    title: "Advanced Threat Intelligence",
    description: `Powered by Cisco Talos, one of the largest commercial threat intelligence groups.`
  },
  {
    title: "Secure Remote Access",
    description: `Supports secure VPN access for remote users through Cisco AnyConnect and offers Zero Trust Network Access (ZTNA) capabilities.`
  },
  {
    title: "Cloud-Ready Security",
    description: `Supports hybrid environments with multi-cloud integration and includes Cisco Umbrella integration for DNS-layer protection.`
  },
  {
    title: "Built-In SD-WAN",
    description: `Simplifies network management and enhances performance for branch offices.`
  }
];

export const ciscoTabData: Tab[] = [
  { id: "0", title: "Key Benefits of Cisco Firepower Threat Defense (FTD)" },
  {
    id: "1",
    title: "Unified Management",
    description: `Cisco FMC (Firepower Management Center) enables centralized policy management.`
  },
  {
    id: "2",
    title: "Scalable Security",
    description: `Tailored solutions for SMBs, mid-sized businesses, and enterprise environments.`
  },
  {
    id: "3",
    title: "Global Threat Intelligence",
    description: `Provides up-to-date protection against evolving threats.`
  },
  {
    id: "4",
    title: "Optimized Performance",
    description: `Delivers high throughput with reduced latency.`
  }
];

export const ciscoDeploy: Feature[] = [
  {
    title: "Physical Appliances",
    description: `Firepower 1000, 2100, 4100, and 9300 series designed for various performance needs.`
  },
  {
    title: "Virtual Firewalls",
    description: `Cisco Secure Firewall Virtual for cloud or virtualized deployments.`
  },
  {
    title: "Cloud-Native Solutions",
    description: `Available in AWS, Azure, and GCP environments.`
  }
];


export const fortinetDesc: string[] = [
  `Fortinet FortiGate Firewalls deliver high-performance network security solutions designed to protect enterprise infrastructures. Powered by Fortinet’s FortiOS operating system and custom-built security processors (SPUs), FortiGate firewalls offer advanced threat protection and robust networking capabilities for organizations of all sizes.`
];

export const fortinetFeature: Feature[] = [
  {
    title: "Next-Generation Firewall (NGFW) Capabilities",
    description: `Provides application control with deep visibility and granular control over application traffic, blocking risky or non-compliant apps. Includes an intrusion prevention system (IPS) that detects and blocks exploits, malware, and malicious network activity, and web filtering to protect users from accessing malicious or inappropriate websites.`
  },
  {
    title: "Security-Driven Networking",
    description: `Seamlessly integrates networking and security functionalities for optimized performance, with built-in SD-WAN featuring dynamic path selection for secure and reliable connectivity.`
  },
  {
    title: "Advanced Threat Protection",
    description: `Offers AI-powered threat intelligence for real-time protection against known and unknown threats using FortiGuard Labs threat intelligence, and sandboxing to inspect suspicious files in an isolated environment to identify zero-day threats.`
  },
  {
    title: "High-Performance Hardware",
    description: `Utilizes Fortinet’s SPUs to accelerate inspection processes, enhancing throughput and reducing latency, with models available that support up to 1 Tbps firewall throughput for data-intensive environments.`
  },
  {
    title: "Cloud Integration",
    description: `Provides native support for hybrid and multi-cloud environments, including AWS, Azure, and Google Cloud, along with centralized management via FortiManager for all FortiGate devices deployed on-premises or in the cloud.`
  },
  {
    title: "Zero Trust Network Access (ZTNA)",
    description: `Facilitates secure access for remote users based on identity and role, eliminating reliance on implicit trust.`
  }
];

export const fortinetTabData: Tab[] = [
  { id: "0", title: "Key Benefits of Fortinet FortiGate Firewalls" },
  {
    id: "1",
    title: "Unified Threat Protection",
    description: `Combines advanced security features in a single platform, reducing complexity and costs.`
  },
  {
    id: "2",
    title: "Scalability",
    description: `Provides solutions for small businesses to large enterprises, with form factors ranging from virtual firewalls to high-performance appliances.`
  },
  {
    id: "3",
    title: "Low TCO (Total Cost of Ownership)",
    description: `Simplified licensing and efficient resource utilization lower operational costs.`
  },
  {
    id: "4",
    title: "Regulatory Compliance",
    description: `Assists organizations in meeting compliance standards like GDPR, HIPAA, and PCI-DSS.`
  }
];

export const fortinetDeploy: Feature[] = [
  {
    title: "Physical Appliances",
    description: `FortiGate hardware models cater to organizations of all sizes.`
  },
  {
    title: "Virtual Firewalls",
    description: `Suitable for VMware, Hyper-V, and other virtualized environments.`
  },
  {
    title: "Cloud-Native Firewalls",
    description: `Deployed natively in AWS, Azure, and Google Cloud.`
  }
];


export const barracudaDesc: string[] = [
  `The Barracuda CloudGen Firewall is a comprehensive security solution designed to protect and enhance dispersed network infrastructures. It offers advanced security by integrating a wide array of next-generation firewall technologies, ensuring real-time protection against a multitude of cyber threats.`
];

export const barracudaFeatures: Feature[] = [
  {
    title: "Advanced Threat Protection (ATP)",
    description: `Multi-Layered Security combines advanced threat signatures, behavioral and heuristic analysis, static code analysis, and comprehensive sandboxing to detect and block advanced threats, including zero-day and ransomware attacks. Real-Time Updates are provided via Barracuda's global threat intelligence network, ensuring rapid protection against emerging threats.`
  },
  {
    title: "Secure SD-WAN Capabilities",
    description: `Intelligent Traffic Management ensures optimal bandwidth utilization by automatically adjusting Quality of Service (QoS) and application usage policies based on real-time bandwidth and latency measurements. High Availability is achieved by aggregating multiple active connections to enhance network reliability and performance.`
  },
  {
    title: "Comprehensive Application Control",
    description: `Layer 7 Application Profiling provides deep visibility into application traffic, allowing for granular policy enforcement. Web Filtering blocks access to malicious or non-compliant websites, enhancing security and productivity.`
  },
  {
    title: "Intrusion Prevention System (IPS)",
    description: `Real-Time Threat Detection identifies and mitigates threats such as SQL injections, cross-site scripting, and denial-of-service attacks. Stream Segmentation and Packet Anomaly Protection enhance security by analyzing traffic patterns to detect anomalies.`
  },
  {
    title: "VPN Connectivity",
    description: `The TINA Protocol, Barracuda's proprietary Transport Independent Network Architecture, enhances VPN connectivity by offering high-speed connections and improved reliability over standard IPsec. Secure Remote Access provides encrypted connections for remote users, ensuring secure access to corporate resources.`
  },
  {
    title: "Centralized Management",
    description: `The Firewall Control Center allows for scalable centralized management, reducing administrative overhead and enabling the definition and enforcement of granular policies across dispersed networks.`
  }
];

export const barracudaBenefits: Tab[] = [
  { id: "0", title: 'Benefits' },
  {
    id: "1",
    title: 'Enhanced Security Posture',
    description: `Multi-layered protection ensures comprehensive defense against a wide range of cyber threats.`
  },
  {
    id: "2",
    title: 'Optimized Network Performance',
    description: `Integrated SD-WAN capabilities and intelligent traffic management enhance connectivity and reduce bandwidth costs.`
  },
  {
    id: "3",
    title: 'Simplified Cloud Integration',
    description: `Purpose-built for cloud environments, facilitating easy deployment and management across multiple cloud platforms.`
  },
  {
    id: "4",
    title: 'Reduced Operational Costs',
    description: `Centralized management and automated processes decrease administrative efforts and associated costs.`
  }
];

export const barracudaDeploy: Feature[] = [
  {
    title: "Hardware Appliances",
    description: `Ideal for on-premises deployments requiring dedicated hardware solutions.`
  },
  {
    title: "Virtual Appliances",
    description: `Suitable for virtualized environments, providing scalability and efficient resource utilization.`
  },
  {
    title: "Cloud-Based Appliances",
    description: `Designed for seamless integration with public cloud platforms such as Microsoft Azure, AWS, and Google Cloud Platform.`
  }
];

export const barracudaModelSpecs: string[] = [
  `Barracuda offers a range of CloudGen Firewall models to accommodate different performance and capacity requirements. Performance metrics vary based on system configuration and infrastructure. For detailed specifications and to select the appropriate model for your needs, please refer to Barracuda's official documentation.`
];
