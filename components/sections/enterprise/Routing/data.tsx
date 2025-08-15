
export interface Tab {
  id: string;
  title: string;
  description?: string;
}


export const ciscoDesc: string[] = [
  `Cisco is a global leader in networking, providing robust, scalable, and secure solutions designed for businesses of all sizes. Cisco’s routing and switching products deliver high performance, advanced security, and comprehensive management, enabling organizations to build reliable and secure networks.`
];


export const ciscoData = {
    points:[`Cisco 4000 Series Integrated Services Routers (ISR): These routers are ideal for enterprises, offering integrated security, WAN optimization, and application services. The Cisco ISR 4000 series provides powerful routing performance with support for SD-WAN, cloud services, and voice and video capabilities, ensuring seamless network operations across branch offices and remote sites`,
        `Cisco ASR 1000 Series Aggregation Services Routers: These high-performance routers are designed for large-scale enterprises and service providers. They provide secure and resilient WAN connectivity, handling high-speed traffic aggregation, and offering built-in security features such as next-gen firewall, IPS, and VPN`,
        `Cisco Catalyst 8300 Series Edge Platforms: These edge routers are optimized for SD-WAN solutions and provide security, visibility, and cloud integration, making them perfect for deploying branch offices in dynamic environments.`
    ]
}


export const cicoSwitchData = {
    points:[`Cisco Catalyst 9000 Series: Cisco’s Catalyst 9000 series is a comprehensive portfolio of switches designed for enterprises with diverse needs. These switches support advanced features like automation, advanced security protocols, and analytics, and are highly suited for high-density data center, campus, and branch office environments.`,
        `Cisco Nexus 9000 Series: The Nexus 9000 Series is designed for data centers and offers superior scalability and programmability. With support for both traditional and software-defined networking (SDN), these switches deliver high-density 10/25/40/100G Ethernet ports and are ideal for high-performance data center applications.`,
        `Cisco Meraki MS Series: A cloud-managed solution, Meraki’s MS switches offer easy deployment, scalability, and centralized management via the Meraki Dashboard. The MS Series switches offer Layer 2 and Layer 3 switching, and Power over Ethernet (PoE) support, making them ideal for businesses needing reliable performance without complex setups.`
    ]
}

export const ciscoService = {
    points:[
        `Cisco DNA Center: This is Cisco’s network management and automation platform, enabling administrators to configure, manage, and troubleshoot networks with ease. It supports network insights, security, and automation capabilities.`,
        `Cisco SD-WAN: Cisco SD-WAN is a software-defined solution that enhances WAN performance, reduces costs, and simplifies network operations by centralizing management. It provides flexible, reliable connectivity across the network with built-in security and automated policy management.`
    ]
}



