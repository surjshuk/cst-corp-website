
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


export const fortiGateDesc:string[] = [
    `In an era where cyber threats are more sophisticated and pervasive than ever, businesses need security solutions that are agile, scalable, and capable of providing real-time protection. FortiGate Cloud Security offers a cutting-edge solution that leverages the power of cloud technology to protect your network, data, and applications from evolving cyber threats. As part of Fortinet’s world-renowned security fabric, FortiGate Cloud Security provides comprehensive, next-generation firewall (NGFW) protection, with seamless integration into the cloud environment for businesses of all sizes`,
  `FortiGate Cloud Security combines the advanced threat intelligence, deep inspection capabilities, and automation of FortiGate firewalls with the flexibility and scalability of the cloud. Whether you're safeguarding branch offices, remote workers, or hybrid cloud environments, FortiGate Cloud Security is designed to deliver high-performance protection against a wide range of cyberattacks, ensuring your organization can operate securely and confidently in the cloud.`
  ]

export const whyFortiate:string[] = [
  `FortiGate Cloud Security is a cloud-delivered security solution that integrates FortiGate Next-Generation Firewalls (NGFWs) with the cloud for centralized, simplified security management. It provides organizations with a cloud-based platform to deploy, monitor, and manage their network security without the complexity and overhead of on-premises hardware. The platform is built for enterprises looking to protect their cloud environments, data centers, and remote workers with advanced threat protection, real-time traffic inspection, and continuous monitoring.`,
  `By combining the power of FortiGate’s next-gen firewall with cloud scalability, FortiGate Cloud Security helps businesses reduce the time, cost, and resources needed to maintain traditional security infrastructure. It offers protection against a wide variety of threats, including malware, ransomware, phishing attacks, and advanced persistent threats (APTs), while enabling visibility into network traffic and application usage. With FortiGate, you can manage your security policies, configurations, and compliance requirements all through an intuitive, centralized cloud interface.`  
]

export const fortiGateTabData:Tab[] = [
{
    id: "0",
    title:'Key Benefits of FortiGate Cloud Security',
    },
  {
    id: "1",
    title:'Advanced Threat Protection',
    description:'FortiGate Cloud Security provides enterprise-grade security powered by Fortinet’s security fabric, offering deep packet inspection (DPI), intrusion prevention systems (IPS), antivirus, web filtering, and application control. By leveraging machine learning, artificial intelligence, and FortiGuard Labs threat intelligence, FortiGate delivers real-time protection against both known and unknown threats, including zero-day attacks. With this level of security, your organization is always one step ahead of cybercriminals.'
   },
  {
    id: "2",
    title:'Cloud-Native Scalability and Flexibility',
    description:'FortiGate Cloud Security is built to scale with your organization. Whether your business is growing rapidly, expanding into new regions, or adopting a hybrid cloud architecture, FortiGate provides the flexibility and scalability to meet your evolving security needs. With cloud management, you can quickly deploy new locations, users, and devices without worrying about hardware limitations. The cloud-native nature of FortiGate ensures that as your network grows, your security infrastructure grows seamlessly with it.'
  },{
    id: "3",
    title:'Centralized Security Management',
    description:`One of the key advantages of FortiGate Cloud Security is its centralized management interface, which provides a unified view of your entire network security landscape. With FortiGate, you can manage and monitor your security policies, firewall settings, traffic logs, and incident reports from a single platform. This centralized approach not only simplifies management but also helps ensure consistent security across all network touchpoints—whether on-premises, in the cloud, or at remote locations.`
   },{
    id: "4",
    title:'Seamless Integration with Cloud Infrastructure',
    description:`FortiGate Cloud Security integrates natively with leading public cloud providers such as AWS, Microsoft Azure, and Google Cloud. This deep integration ensures that your security policies extend seamlessly across all cloud environments. By providing security that is consistent and scalable, FortiGate enables businesses to operate securely in their cloud environments while adhering to security best practices and compliance standards.`
  },
    {
    id: "5",
    title:'Zero Trust Security Model',
    description:`FortiGate adopts a Zero Trust approach to security, ensuring that no user or device is trusted by default, regardless of location or network. With granular, role-based access controls, FortiGate ensures that only authorized users and devices can access sensitive resources. Continuous monitoring and real-time authentication help enforce this model, providing businesses with the highest levels of security in today’s distributed network environments.`
    },
   {
    id: "6",
    title:'Enhanced Visibility and Reporting',
    description: `With FortiGate Cloud Security, businesses gain complete visibility into network traffic, application usage, and security events. The platform provides detailed reporting, dashboards, and alerts that help IT teams detect anomalies, investigate threats, and take proactive measures to mitigate risk. FortiGate’s robust reporting features help businesses stay compliant with industry regulations and provide transparency into their network security posture.`
    },
    {
    id: "7",
    title:'Reduced Operational Complexity',
    description: `FortiGate Cloud Security eliminates the need for complex, on-premises hardware deployments, significantly reducing operational overhead. With automated updates, centralized policy management, and real-time traffic analysis, FortiGate allows IT teams to focus on strategic initiatives while ensuring that security remains a top priority. This simplicity and automation are key advantages of using a cloud-based security solution.`
    },
     {
    id: "8",
    title:'Seamless VPN and Secure Remote Access',
    description: `FortiGate Cloud Security includes secure Virtual Private Network (VPN) capabilities, enabling businesses to protect remote workers, branch offices, and mobile users. With encrypted, high-performance VPN tunnels, FortiGate ensures secure access to corporate applications, data, and services from any device or location. This remote access capability is particularly critical in today’s hybrid work environment, where securing remote users is essential for maintaining corporate security.`
  }
];

export const fortiGateFeature: Feature[] = [
  {
    title: "FortiGate Next-Generation Firewall (NGFW)",
    description:
      `At the core of FortiGate Cloud Security is FortiGate’s industry-leading next-generation firewall. With a range of advanced features like intrusion prevention, application control, DNS filtering, and SSL inspection, FortiGate offers comprehensive protection against a wide variety of threats. The NGFW ensures that all network traffic is inspected, filtered, and analyzed, regardless of whether it’s coming from the internet, a cloud application, or a remote user.`
    },
  {
    title: "FortiGuard Labs Threat Intelligence",
    description:
      `FortiGate leverages real-time threat intelligence from FortiGuard Labs, Fortinet’s global security research and intelligence team. This team tracks emerging threats and provides timely updates to FortiGate firewalls, ensuring that businesses are always protected from the latest cyber threats. By utilizing AI-driven threat intelligence, FortiGate provides accurate, actionable information that enables businesses to mitigate risks before they escalate into security breaches.`
  },
  {
    title: "Device Compliance and Visibility",
    description:
        `GlobalProtect verifies that devices meet compliance standards before granting access. This ensures only trusted and managed devices can access sensitive resources, enhancing the overall security posture.`
          // image: PLACEHOLDER,
  },
  {
    title: "Cloud Management and Reporting",
    description:`FortiGate Cloud Security offers a comprehensive cloud management interface, allowing businesses to monitor and configure their security infrastructure from anywhere. With detailed dashboards, customizable reports, and real-time alerts, businesses can easily track network performance, investigate potential threats, and respond to security incidents in real time. This centralized management platform ensures that security is always top of mind, no matter where your team is located.`
  },
  {
    title: "Integration with SD-WAN",
    description:
      `FortiGate integrates seamlessly with SD-WAN (Software-Defined Wide Area Network) to offer high-performance networking alongside enhanced security. By combining FortiGate’s cloud security with SD-WAN capabilities, businesses can deliver faster, more reliable connections between branch offices, data centers, and cloud environments, all while maintaining a high level of security.`
    },
  {
    title: "Compliance and Regulatory Support",
    description:
     `FortiGate Cloud Security is designed to help businesses meet stringent regulatory and compliance requirements, including GDPR, HIPAA, PCI DSS, and more. The platform’s robust security features and reporting capabilities provide the visibility and control needed to adhere to these regulations while ensuring data privacy and security across the organization.`
  }
];

export const arubaDesc:string[] = [
  `HPE Aruba Central is a cloud-native network management solution that allows businesses to centrally manage, monitor, and optimize their entire network infrastructure from anywhere in the world. By offering a comprehensive and unified platform for both wired and wireless networks, Aruba Central simplifies network operations, provides deep insights through analytics, and enables automated network management. Whether you’re managing a small office network or a large enterprise environment, Aruba Central delivers an intelligent, flexible, and scalable solution that accelerates your digital transformation.`,
  `Designed to meet the growing demands of modern, mobile-first organizations, Aruba Central combines the power of cloud management with the ease of automation and artificial intelligence. It enables businesses to streamline network administration, improve performance, enhance security, and reduce operational overhead—all while ensuring that the network is always running optimally.`  
]

export const whyaruba:string[] = [
`Aruba Central is a cloud-based platform that centralizes the management of all Aruba network devices, including access points, switches, routers, and security appliances. It offers a single, unified interface where IT teams can configure, monitor, and troubleshoot their network infrastructure with ease. Aruba Central delivers end-to-end network visibility and control, simplifying the management of complex networks while enabling businesses to scale their network infrastructure seamlessly.`,
`As a cloud-managed solution, Aruba Central enables businesses to manage their network infrastructure remotely, ensuring that IT teams can access real-time data and insights regardless of location. The platform’s integration with Aruba’s intelligent hardware and software, including Wi-Fi 6 access points and Aruba’s security solutions, ensures that businesses can optimize network performance while ensuring the highest levels of security and reliability.`
]

export const arubaTabData:Tab[] = [
{
    id: "0",
    title:'Key Benefits of HPE Aruba Central',
    },
  {
    id: "1",
    title:'Simplified Network Management',
      description:`Aruba Central transforms how businesses manage their networks by offering a centralized, intuitive interface that simplifies complex tasks. With Aruba Central, network administrators can quickly deploy, configure, and manage network devices, monitor network health, and troubleshoot issues—all from a single platform. This reduces the complexity of traditional network management, enabling faster resolution times and minimizing the need for manual interventions.`  },
  {
    id: "2",
    title:'AI-Powered Insights and Automation',
    description:`Aruba Central leverages artificial intelligence (AI) and machine learning to provide businesses with intelligent insights into their network performance. The platform’s AI-powered tools automatically detect network issues, identify trends, and offer actionable recommendations to optimize network performance. By automating routine network management tasks such as configuration, monitoring, and troubleshooting, Aruba Central frees up IT teams to focus on more strategic initiatives while ensuring a consistently high-performing network.`
  },{
    id: "3",
    title:'Real-Time Visibility and Analytics',
    description:`With Aruba Central, businesses gain real-time visibility into the performance of their entire network infrastructure. The platform provides comprehensive analytics that enables IT teams to monitor everything from device health and network traffic to security events and user activity. Detailed reports and dashboards help organizations understand how their network is performing, identify potential issues before they impact users, and take proactive steps to optimize network operations.`
  },{
    id: "4",
    title:'Enhanced Security and Compliance',
    description:`Security is built into Aruba Central at every layer of the network. The platform provides centralized visibility into network security events, alerts businesses to potential threats, and enables automated threat mitigation. Aruba Central also integrates with Aruba ClearPass, Aruba’s network access control solution, to ensure that only authorized users and devices can access the network. With features like role-based access control, secure VPN access, and encryption, businesses can protect sensitive data and meet compliance requirements more effectively.`
   },
    {
    id: "5",
    title:'Scalable and Flexible',
    description:`Aruba Central is designed to grow with your business. Whether you’re managing a small branch office or a global enterprise network, the platform provides the scalability and flexibility needed to support evolving network demands. Aruba Central can easily accommodate new devices, locations, and users, making it an ideal solution for businesses of all sizes and industries. Its cloud-native architecture ensures that scaling your network management capabilities is seamless and cost-effective.`
  },
   {
    id: "6",
    title:'Cloud-Native with Seamless Updates',
    description: `As a cloud-based solution, Aruba Central eliminates the need for on-premises infrastructure and manual updates. Software and firmware updates are automatically pushed to the platform, ensuring that your network devices are always up to date with the latest features, security patches, and enhancements. This eliminates the time-consuming process of manually updating devices and reduces the risk of vulnerabilities due to outdated software.`
  },
    {
    id: "7",
    title:'Flexible Deployment Options',
    description:`Aruba Central offers businesses the flexibility to deploy their network management solution in the way that best suits their needs. Whether you’re looking to manage a fully cloud-based network, a hybrid environment, or an on-premises network, Aruba Central provides the tools and capabilities to manage every aspect of your network from a single, integrated platform. This flexibility makes Aruba Central the ideal choice for organizations looking to streamline network operations and reduce complexity.`
  }
];

export const arubaFeature: Feature[] = [
  {
    title: "Cloud-Based Network Management",
    description:
    `Aruba Central’s cloud-native platform allows businesses to manage their networks remotely, providing access to critical network data and performance metrics from anywhere, at any time. This flexibility enables IT teams to stay connected to their networks regardless of location, ensuring quick response times and efficient management.`
  },
  {
    title: "AI-Powered Monitoring and Troubleshooting",
    description:
      `Aruba Central's built-in artificial intelligence continuously monitors network performance and user activity to detect anomalies, predict issues, and automate problem resolution. The platform’s AI capabilities provide detailed insights into network health, device performance, and application usage, helping IT teams take proactive measures to prevent downtime.`
    },
  {
    title: "Automated Network Configuration",
    description:`Aruba Central simplifies network configuration by enabling automatic provisioning and configuration of network devices. This reduces the complexity of deploying and managing devices across multiple sites, allowing for faster setup times and reducing the risk of human error. The platform’s automation capabilities also ensure that networks are consistently configured according to best practices.`
  },
  {
    title: "Comprehensive Security Integration",
    description:`Aruba Central integrates seamlessly with Aruba’s security portfolio, including Aruba ClearPass and Aruba IntroSpect, to provide comprehensive network security. The platform continuously monitors network activity, identifies potential threats, and enforces security policies to prevent unauthorized access and protect sensitive data.`
  },
  {
    title: "Guest Wi-Fi and Location Services",
    description:
      `Aruba Central offers features for managing guest Wi-Fi access and location-based services, making it easier for businesses to provide secure and personalized experiences for customers and visitors. With tools for setting up branded guest portals, managing user authentication, and tracking location-based insights, Aruba Central helps businesses engage their customers while ensuring the security and efficiency of their networks.`
    },
  {
    title: "Network Analytics and Reporting",
    description:
    `Aruba Central provides in-depth analytics and reporting capabilities that offer detailed insights into network performance. From user behavior to device health and traffic patterns, businesses can access real-time data and generate custom reports to monitor network activity and optimize performance.`
  },
    {
    title: "Multi-Site Management",
    description:
     `For businesses with multiple locations, Aruba Central offers centralized multi-site management, allowing IT teams to manage several networks from a single interface. Whether your organization has offices across the country or around the globe, Aruba Central provides a streamlined way to manage network performance, security, and devices at scale.`
  }
];

export const VmDesc = 
  {
    description:[
      `VMware NSX is a network virtualization and security platform that enables the creation of virtual networks within a physical network infrastructure. It provides a comprehensive suite of networking and security services, including:`,
      `VMware NSX supports multi-cloud environments, including private, public, and hybrid clouds, providing consistent networking and security policies across diverse infrastructures. `
    ],
    points:[`Network Virtualization: Allows the creation of virtual networks that are decoupled from the underlying physical hardware, enabling greater flexibility and agility.`,
      `Security Services: Offers distributed firewall capabilities, micro-segmentation, and advanced threat protection to secure applications and data across data centers and clouds.`,
      `Automation and Operations: Facilitates automated network provisioning, monitoring, and management, reducing manual intervention and operational overhead.`
    ]
  }

  export const whyVmDesc = {
     description:[
      `VMware VeloCloud, now known as VMware SD-WAN by VeloCloud, is a cloud-delivered SD-WAN solution designed to optimize the performance and reliability of wide-area networks. Key features include:`,
      `VMware SD-WAN by VeloCloud enhances application performance, reduces costs, and improves the user experience by providing reliable and secure connectivity across distributed environments. `
     ],
    points:[
      `Dynamic Multi-Path Optimization (DMPO): Aggregates multiple WAN links, such as MPLS, broadband, and LTE, to provide optimal path selection and load balancing.`,
      `Application-Aware Routing: Prioritizes critical applications and ensures consistent performance by dynamically adjusting traffic paths based on real-time network conditions.`,
      `Integrated Security: Includes built-in security features like Next-Generation Firewall (NGFW), secure tunneling, and traffic segmentation to protect data in transit.`,
      `Zero-Touch Provisioning: Simplifies deployment by allowing devices to be automatically configured and connected to the network without manual intervention.`
    ]
  }

  
  export const vmCloudDesc = {
     description:[
     `VMware offers a range of cloud networking services designed to support modern application architectures and multi-cloud environments. These services include:`
     ],
    points:[
    `VMware NSX-T Data Center: A multi-cloud networking and security platform that provides networking, security, and load balancing services for applications running in private, public, and hybrid clouds.`,
    `VMware SD-WAN by VeloCloud: A cloud-delivered SD-WAN solution that optimizes the performance and reliability of wide-area networks, ensuring secure and efficient connectivity to applications and data.`,
    `VMware SASE (Secure Access Service Edge): A cloud-hosted solution that combines networking and security services to provide secure and optimized access to applications in the cloud, at the edge, or in the data center.`
    ]
  }

  export const ciscoDesc = [
    `Cisco offers a comprehensive suite of cloud networking solutions, integrating Cloud DNS and Cloud Load Balancing to enhance security, scalability, and performance for modern cloud applications. Together, these solutions deliver a robust, high-performing, and secure network infrastructure for businesses operating in multi-cloud environments`,
    `Cisco Cloud DNS and Cloud Load Balancing work in tandem to ensure fast, secure, and reliable access to applications and services while optimizing performance and providing resilience against potential disruptions. These services are designed to address the growing demands of modern enterprises for scalable, flexible, and secure cloud networking`
  ]


  export const dnsFeature: Feature[] = [
  {
    title: "DNS-Layer Security",
    description:
    `By blocking access to malicious domains, Cisco’s cloud DNS offers proactive protection against threats like malware, phishing, and ransomware. It acts as the first line of defense, preventing malicious connections before they can establish`
  },
  {
    title: "Global Cloud Architecture",
    description:
    `Cisco’s cloud DNS is powered by a globally distributed network, ensuring low-latency and high-performance DNS resolution for users across regions. This enables optimal user experiences for applications that rely on DNS queries.`
   },
    {
    title: "Threat Intelligence Integration",
    description:
    `Powered by Cisco Talos, Cisco’s DNS service is continuously updated with actionable intelligence to identify and block emerging threats. This allows organizations to stay ahead of cyber risks`
    },
    {
    title: "Comprehensive Visibility and Analytics",
    description:
    `Gain real-time insights into DNS traffic, enabling organizations to monitor network activity and detect unusual behavior quickly. Cisco’s DNS solution helps improve operational awareness and decision-making`
  }
  ]


  
  export const loadFeature: Feature[] = [
  {
    title: "Intelligent Traffic Distribution",
    description:
    `Cisco's cloud load balancing solution ensures that incoming traffic is intelligently distributed across servers, applications, and data centers. This balances workloads dynamically, optimizing performance and preventing any server or data center from being overwhelmed`
  },
  {
    title: "Global Traffic Management",
    description:
    `Cisco’s load balancing solution routes traffic to the nearest or most responsive data center, reducing latency and providing faster access to applications, regardless of the user’s location. This is particularly beneficial for businesses with a distributed global workforce`
   },
    {
    title: "High Availability and Auto-Scaling",
    description:
    `Ensure continuous application availability by automatically rerouting traffic during service disruptions or failures, and dynamically scaling resources based on demand. This ensures applications remain responsive even during traffic spikes.`
  },
    {
    title: "Enhanced Security",
    description:
    `Cisco’s cloud load balancing includes advanced security features such as SSL/TLS offloading, DDoS protection, and Web Application Firewall (WAF) to safeguard applications from threats and maintain high security without sacrificing performance`
  },
    {
    title: "Seamless Application Integration",
    description:
    `By integrating with Cisco’s Application Centric Infrastructure (ACI), cloud load balancing can be managed and automated according to centralized policies. This enables businesses to optimize their infrastructure while ensuring security and scalability`
  },
  ]

  
    export const ciscoBenifits  = [
  {
    title: "Optimized User Experience",
    description:"By combining Cloud DNS with Cloud Load Balancing, Cisco ensures that applications are fast, reliable, and secure. The intelligent distribution of traffic and DNS queries minimizes latency and provides consistent, high-quality service to users globally"
  },
  {
    title: "Enhanced Security",
    description: `Both Cloud DNS and Load Balancing solutions are equipped with advanced security features, protecting applications from various cyber threats while maintaining performance. This is critical for businesses that handle sensitive data or operate in regulated industries.`
    },
    {
    title: "Scalability and Flexibility",
    description: `Cisco’s cloud networking solutions are designed to scale dynamically based on business requirements. Cloud DNS and Load Balancing can handle increased traffic, ensuring applications perform reliably as businesses grow`
   },
    {
    title: "Comprehensive Network Visibility",
    description: `Together, Cisco’s Cloud DNS and Cloud Load Balancing provide in-depth analytics and monitoring capabilities, offering full visibility into network traffic and enabling swift responses to any performance or security issues.`
  }


      
    ]