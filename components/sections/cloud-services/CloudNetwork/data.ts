import { Feature } from "../../AI/feature";

export interface Tab {
  id: string;
  title: string;
  description?: string;
}

export const cloudPaloDesc:string[] =[
`In today’s modern business environment, where remote work, hybrid teams, and multi-cloud adoption are becoming the norm, securing user access to corporate resources has never been more critical. Palo Alto Networks GlobalProtect Cloud Services is an advanced, cloud-based security solution designed to deliver seamless, secure, and consistent connectivity for users and devices—no matter where they are or what applications they access.`,
`GlobalProtect Cloud Services extends enterprise-grade security to your entire workforce, empowering your organization to protect its sensitive data, applications, and users while improving productivity and operational efficiency. By unifying security and connectivity in one solution, GlobalProtect ensures that businesses stay protected against evolving threats without compromising user experience or business agility.`
]



export const whyCloudPalo:string[] = [
    `GlobalProtect Cloud Services is a cutting-edge security solution offered by Palo Alto Networks that integrates secure access, advanced threat prevention, and a zero-trust network architecture (ZTNA) into a single, cloud-delivered service. Designed for the challenges of modern work environments, GlobalProtect eliminates the need for complex, legacy VPN infrastructures by delivering secure access from anywhere while maintaining visibility and control over users, devices, and applications.`,
    `By leveraging the globally distributed Palo Alto Networks Prisma Access cloud infrastructure, GlobalProtect ensures a high-performance and scalable solution, making it the ideal choice for organizations with distributed teams, multi-cloud strategies, or remote workforces.`
]



export const cloudPaloTabData:Tab[] = [
{
    id: "0",
    title:'Key Benefits of GlobalProtect Cloud Services',
    },
  {
    id: "1",
    title:'Comprehensive Security Anywhere',
    description:'GlobalProtect provides consistent, enterprise-grade security for users across any location or device. Whether your workforce is accessing resources on-premises, in the cloud, or across hybrid environments, the service ensures that they are protected from cyber threats with advanced capabilities such as malware detection, intrusion prevention, and data loss prevention (DLP).'
 },
  {
    id: "2",
    title:'Zero Trust Network Access (ZTNA)',
    description:'Embrace a Zero Trust security framework with GlobalProtect. It enforces the principle of “never trust, always verify” by ensuring secure access only to authorized users, devices, and applications. This approach minimizes the risk of unauthorized access and protects sensitive corporate data.'
  },{
    id: "3",
    title:'Seamless User Experience',
    description:`GlobalProtect eliminates the need for traditional VPN complexity, offering seamless, always-on secure connectivity. Users experience consistent and high-performance access to applications, whether they are hosted in the cloud, on-premises, or in SaaS environments.`},
    {
    id: "4",
    title:'Cloud-Native Scalability',
    description:`Built on Palo Alto Networks' Prisma Access cloud infrastructure, GlobalProtect delivers unparalleled scalability. Whether you’re onboarding hundreds or thousands of users, the service scales effortlessly to meet the demands of growing organizations without requiring hardware upgrades.`
    },
    {
    id: "5",
    title:'Enhanced Productivity',
    description:`By ensuring fast and reliable connectivity with intelligent traffic routing and optimized application access, GlobalProtect helps users stay productive without compromising security.`
    },
   {
    id: "6",
    title:'Centralized Visibility and Control',
    description: `Manage and monitor all user activity, devices, and applications from a single pane of glass. GlobalProtect’s centralized management capabilities enable IT teams to enforce consistent security policies, simplify operations, and respond to threats in real time.`
    },
    {
    id: "7",
    title:'Optimized for Hybrid and Multi-Cloud Environments',
    description: `GlobalProtect ensures seamless connectivity and security for businesses operating in hybrid and multi-cloud environments. It enables direct access to cloud-based applications while maintaining enterprise-grade protection.`
     }
];

export const cloudPaloFeature: Feature[] = [
  {
    title: "Secure Remote Access",
    description:
      `GlobalProtect enables secure, encrypted connectivity for users working remotely or traveling, ensuring access to corporate resources without the vulnerabilities of traditional VPNs.`
        },
  {
    title: "Advanced Threat Prevention",
    description:
      `Powered by Palo Alto Networks’ industry-leading security platform, GlobalProtect provides advanced threat prevention capabilities, including: Malware and ransomware protection, Intrusion prevention, URL filtering, Data loss prevention (DLP), SSL decryption `
// image: PLACEHOLDER,
  },
  {
    title: "Device Compliance and Visibility",
    description:
        `GlobalProtect verifies that devices meet compliance standards before granting access. This ensures only trusted and managed devices can access sensitive resources, enhancing the overall security posture.`
          // image: PLACEHOLDER,
  },
  {
    title: "Global Cloud Infrastructure",
    description:
    `With a globally distributed cloud architecture, GlobalProtect ensures fast and reliable access to applications and services from anywhere. Its robust network backbone minimizes latency and maximizes performance for end users.`
     },
  {
    title: "Always-On VPN and Split Tunneling",
    description:
      `GlobalProtect supports always-on VPN connections to maintain continuous security for users. Split tunneling ensures that non-critical traffic does not overwhelm the corporate network, improving performance for critical business applications.` },
  {
    title: "Granular Policy Enforcement",
    description:
     ` GlobalProtect provides granular control over user access, allowing administrators to create custom policies based on user identity, role, device type, location, and application`
    },
  {
    title: "Cloud Management with Prisma Access",
    description:
      ` Integrated with Palo Alto Networks’ Prisma Access platform, GlobalProtect simplifies the management of distributed networks by providing centralized visibility, policy enforcement, and threat monitoring in real time`
    },
  {
    title: "Integration with Palo Alto Networks Ecosystem",
    description:
    `GlobalProtect seamlessly integrates with other Palo Alto Networks solutions, such as the Next-Generation Firewall (NGFW), Cortex XDR, and Panorama, for a comprehensive, end-to-end security approach.`
}
];

