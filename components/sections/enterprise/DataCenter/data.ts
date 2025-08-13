
import { Feature } from "../../AI/feature";

export interface Tab {
  id: string;
  title: string;
  description?: string;
}

export const ciscoDesc:string[] =[
`Cisco Nexus Switches are the world's leading data center networking solution, designed to meet the needs of modern enterprises with unparalleled performance, scalability, and flexibility. As the backbone of many of today’s most critical data center infrastructures, Cisco Nexus Switches are trusted by organizations of all sizes to drive innovation, reduce IT complexity, and optimize operational efficiency.`,
`Whether you are modernizing your data center, migrating to the cloud, or supporting mission-critical applications, Cisco Nexus Switches provide the robust and secure platform you need to accelerate your digital transformation.`
]


export const whyCisco:string[] = [
    `Cisco Nexus Switches are a series of data center switches designed to provide high-performance, low-latency, and scalable networking solutions for data centers. They offer a range of models to meet various requirements, from high-density 10/25/40/100/400 Gigabit Ethernet connectivity to advanced features like automation, programmability, and support for software-defined networking (SDN). Cisco Nexus Switches are built to support both traditional and modern workloads, including cloud computing, virtualization, and artificial intelligence (AI) applications. They integrate seamlessly with Cisco's Application Centric Infrastructure (ACI) and Nexus Dashboard, providing a comprehensive solution for data center networking. `
]


export const ciscoTabData:Tab[] = [
{
    id: "0",
    title:'Key Benefits of Cisco Nexus Switches',
    },
  {
    id: "1",
    title:'Unmatched Performance and Scalability',
    description:`Cisco Nexus Switches are engineered to deliver industry-leading performance, supporting high-density 10/25/40/100/400 Gigabit Ethernet connectivity. This ensures that your data center can handle the most demanding workloads with ease, providing the scalability needed to grow your infrastructure as your business needs evolve. `
},
  {
    id: "2",
    title:'Advanced Automation and Programmability',
    description: `With features like Cisco NX-OS and support for SDN, Cisco Nexus Switches enable automation and programmability, reducing manual configuration errors and accelerating deployment times. This allows for more efficient management of your data center network and faster response to changing business requirements. `
},{
    id: "3",
    title:'Comprehensive Security Features',
    description:`Cisco Nexus Switches come with built-in security features, including role-based access control, port security, and support for network segmentation. These features help protect your data center from unauthorized access and potential threats, ensuring a secure networking environment. `},
{
    id: "4",
    title:'Seamless Integration with Cisco ACI',
    description:`Cisco Nexus Switches integrate seamlessly with Cisco's Application Centric Infrastructure (ACI), providing a policy-driven approach to data center networking. This integration simplifies network management, enhances application performance, and improves overall operational efficiency. `
},
    {
    id: "5",
    title:'Robust Ecosystem and Tools',
    description:`Cisco Nexus Switches are part of the larger Cisco ecosystem, which includes a broad range of tools and services designed to support your enterprise IT needs. With tools like Cisco Nexus Dashboard for centralized management and monitoring, businesses can enhance productivity and streamline IT operations.`
},
   {
    id: "6",
    title:'World-Class Support and Training',
    description: `Cisco provides comprehensive support and training services for Nexus Switches, offering businesses 24/7 access to expert guidance, troubleshooting, and patches. Cisco's subscription model offers access to the latest software releases, security updates, and patches, ensuring that your systems remain secure and up to date. In addition, Cisco provides extensive training and certification programs, enabling your IT team to develop the skills needed to manage your data center network effectively. `
},
];

export const ciscoFeature: Feature[] = [
  {
    title: "High-Density Connectivity",
    description:
      `Cisco Nexus Switches offer high-density 10/25/40/100/400 Gigabit Ethernet connectivity, providing the bandwidth necessary to support modern data center workloads. This high-density design reduces the need for additional hardware, simplifying network architecture and reducing costs. `
    },
  {
    title: "Advanced Automation and Programmability",
    description:
     `With support for SDN and Cisco NX-OS, Cisco Nexus Switches enable automation and programmability, allowing for more efficient network management and faster deployment times. This flexibility ensures that your network can adapt to changing business requirements and technological advancements. `
  },
  {
    title: "Comprehensive Security Features",
    description:`Cisco Nexus Switches include built-in security features such as role-based access control, port security, and support for network segmentation. These features help protect your data center from unauthorized access and potential threats, ensuring a secure networking environment. `
  },
  {
    title: "Seamless Integration with Cisco ACI",
    description:`Cisco Nexus Switches integrate seamlessly with Cisco's Application Centric Infrastructure (ACI), providing a policy-driven approach to data center networking. This integration simplifies network management, enhances application performance, and improves overall operational efficiency. `
},
  {
    title: "Robust Ecosystem and Tools",
    description:`Cisco Nexus Switches are part of the larger Cisco ecosystem, which includes a broad range of tools and services designed to support your enterprise IT needs. With tools like Cisco Nexus Dashboard for centralized management and monitoring, businesses can enhance productivity and streamline IT operations. `
},{
    title: "World-Class Support and Training",
    description:
     `Cisco provides comprehensive support and training services for Nexus Switches, offering businesses 24/7 access to expert guidance, troubleshooting, and patches. Cisco's subscription model offers access to the latest software releases, security updates, and patches, ensuring that your systems remain secure and up to date. In addition, Cisco provides extensive training and certification programs, enabling your IT team to develop the skills needed to manage your data center network effectively.`
    }
];


export const hpeDesc: string[] = [
  `Hewlett Packard Enterprise (HPE) offers a comprehensive suite of data center networking solutions, including HPE FlexNetwork and HPE Comware, designed to meet the needs of modern enterprises with unparalleled performance, scalability, and flexibility. As the backbone of many of today’s most critical data center infrastructures, HPE's networking solutions are trusted by organizations of all sizes to drive innovation, reduce IT complexity, and optimize operational efficiency.`,
  `Whether you are modernizing your data center, migrating to the cloud, or supporting mission-critical applications, HPE's data center networking solutions provide the robust and secure platform you need to accelerate your digital transformation.`
]

export const whyHPE: string[] = [
  `HPE Data Center Networking encompasses a range of solutions designed to deliver high-performance, scalable, and secure networking for data centers. This includes HPE FlexNetwork, which offers intelligent data center switching, and HPE Comware, a modular operating system that powers a variety of switches and routers. These solutions are built to support both traditional and modern workloads, including cloud computing, virtualization, and artificial intelligence (AI) applications. They integrate seamlessly with HPE's broader IT infrastructure, providing a comprehensive solution for data center networking.`
]

export const hpeTabData: Tab[] = [
  { id: "0", title: "Key Benefits of HPE Data Center Networking" },
  { id: "1", title: "Unmatched Performance and Scalability", description: `HPE's data center networking solutions are engineered to deliver industry-leading performance, supporting high-density 10/25/40/100/400 Gigabit Ethernet connectivity. This ensures that your data center can handle the most demanding workloads with ease, providing the scalability needed to grow your infrastructure as your business needs evolve.` },
  { id: "2", title: "Advanced Automation and Programmability", description: `With features like HPE Intelligent Management Center (IMC) and support for software-defined networking (SDN), HPE's solutions enable automation and programmability, reducing manual configuration errors and accelerating deployment times. This allows for more efficient management of your data center network and faster response to changing business requirements.` },
  { id: "3", title: "Comprehensive Security Features", description: `HPE's data center networking solutions come with built-in security features, including role-based access control, port security, and support for network segmentation. These features help protect your data center from unauthorized access and potential threats, ensuring a secure networking environment.` },
  { id: "4", title: "Seamless Integration with HPE IT Infrastructure", description: `HPE's data center networking solutions integrate seamlessly with HPE's broader IT infrastructure, including compute, storage, and cloud services. This integration simplifies network management, enhances application performance, and improves overall operational efficiency.` },
  { id: "5", title: "Robust Ecosystem and Tools", description: `HPE's data center networking solutions are part of the larger HPE ecosystem, which includes a broad range of tools and services designed to support your enterprise IT needs. With tools like HPE Aruba Fabric Composer for software-defined orchestration, businesses can enhance productivity and streamline IT operations.` },
  { id: "6", title: "World-Class Support and Training", description: `HPE provides comprehensive support and training services for its data center networking solutions, offering businesses 24/7 access to expert guidance, troubleshooting, and patches. HPE's subscription model offers access to the latest software releases, security updates, and patches, ensuring that your systems remain secure and up to date. In addition, HPE provides extensive training and certification programs, enabling your IT team to develop the skills needed to manage your data center network effectively.` }
]

export const hpeFeature: Feature[] = [
  { title: "High-Density Connectivity", description: `HPE's data center networking solutions offer high-density 10/25/40/100/400 Gigabit Ethernet connectivity, providing the bandwidth necessary to support modern data center workloads. This high-density design reduces the need for additional hardware, simplifying network architecture and reducing costs.` },
  { title: "Advanced Automation and Programmability", description: `With support for SDN and HPE Intelligent Management Center (IMC), HPE's solutions enable automation and programmability, allowing for more efficient network management and faster deployment times. This flexibility ensures that your network can adapt to changing business requirements and technological advancements.` },
  { title: "Comprehensive Security Features", description: `HPE's data center networking solutions include built-in security features such as role-based access control, port security, and support for network segmentation. These features help protect your data center from unauthorized access and potential threats, ensuring a secure networking environment.` },
  { title: "Seamless Integration with HPE IT Infrastructure", description: `HPE's data center networking solutions integrate seamlessly with HPE's broader IT infrastructure, including compute, storage, and cloud services. This integration simplifies network management, enhances application performance, and improves overall operational efficiency.` },
  { title: "Robust Ecosystem and Tools", description: `HPE's data center networking solutions are part of the larger HPE ecosystem, which includes a broad range of tools and services designed to support your enterprise IT needs. With tools like HPE Aruba Fabric Composer for software-defined orchestration, businesses can enhance productivity and streamline IT operations.` },
  { title: "World-Class Support and Training", description: `HPE provides comprehensive support and training services for its data center networking solutions, offering businesses 24/7 access to expert guidance, troubleshooting, and patches. HPE's subscription model offers access to the latest software releases, security updates, and patches, ensuring that your systems remain secure and up to date. In addition, HPE provides extensive training and certification programs, enabling your IT team to develop the skills needed to manage your data center network effectively.` }
]
 

export const dellDesc: string[] = [
  `Dell EMC offers a comprehensive suite of data center networking solutions, including PowerSwitch and VxRail, designed to meet the needs of modern enterprises with unparalleled performance, scalability, and flexibility. As the backbone of many of today’s most critical data center infrastructures, Dell EMC's networking solutions are trusted by organizations of all sizes to drive innovation, reduce IT complexity, and optimize operational efficiency.`,
  `Whether you are modernizing your data center, migrating to the cloud, or supporting mission-critical applications, Dell EMC's data center networking solutions provide the robust and secure platform you need to accelerate your digital transformation.`
]

export const whyDell: string[] = [
  `Dell EMC Data Center Networking encompasses a range of solutions designed to deliver high-performance, scalable, and secure networking for data centers. This includes PowerSwitch, which offers intelligent data center switching, and VxRail, a hyperconverged infrastructure solution that integrates compute, storage, and networking. These solutions are built to support both traditional and modern workloads, including cloud computing, virtualization, and artificial intelligence (AI) applications. They integrate seamlessly with Dell EMC's broader IT infrastructure, providing a comprehensive solution for data center networking.`
]

export const dellTabData: Tab[] = [
  { id: "0", title: "Key Benefits of Dell EMC Data Center Networking" },
  { id: "1", title: "Unmatched Performance and Scalability", description: `Dell EMC's data center networking solutions are engineered to deliver industry-leading performance, supporting high-density 10/25/40/100/400 Gigabit Ethernet connectivity. This ensures that your data center can handle the most demanding workloads with ease, providing the scalability needed to grow your infrastructure as your business needs evolve.` },
  { id: "2", title: "Advanced Automation and Programmability", description: `With features like Open Networking and support for software-defined networking (SDN), Dell EMC's solutions enable automation and programmability, reducing manual configuration errors and accelerating deployment times. This allows for more efficient management of your data center network and faster response to changing business requirements.` },
  { id: "3", title: "Comprehensive Security Features", description: `Dell EMC's data center networking solutions come with built-in security features, including role-based access control, port security, and support for network segmentation. These features help protect your data center from unauthorized access and potential threats, ensuring a secure networking environment.` },
  { id: "4", title: "Seamless Integration with Dell EMC IT Infrastructure", description: `Dell EMC's data center networking solutions integrate seamlessly with Dell EMC's broader IT infrastructure, including compute, storage, and cloud services. This integration simplifies network management, enhances application performance, and improves overall operational efficiency.` },
  { id: "5", title: "Robust Ecosystem and Tools", description: `Dell EMC's data center networking solutions are part of the larger Dell EMC ecosystem, which includes a broad range of tools and services designed to support your enterprise IT needs. With tools like Dell EMC Open Networking, businesses can enhance productivity and streamline IT operations.` },
  { id: "6", title: "World-Class Support and Training", description: `Dell EMC provides comprehensive support and training services for its data center networking solutions, offering businesses 24/7 access to expert guidance, troubleshooting, and patches. Dell EMC's subscription model offers access to the latest software releases, security updates, and patches, ensuring that your systems remain secure and up to date. In addition, Dell EMC provides extensive training and certification programs, enabling your IT team to develop the skills needed to manage your data center network effectively.` }
]

export const dellFeature: Feature[] = [
  { title: "High-Density Connectivity", description: `Dell EMC's data center networking solutions offer high-density 10/25/40/100/400 Gigabit Ethernet connectivity, providing the bandwidth necessary to support modern data center workloads. This high-density design reduces the need for additional hardware, simplifying network architecture and reducing costs.` },
  { title: "Advanced Automation and Programmability", description: `With support for SDN and Dell EMC Open Networking, Dell EMC's solutions enable automation and programmability, allowing for more efficient network management and faster deployment times. This flexibility ensures that your network can adapt to changing business requirements and technological advancements.` },
  { title: "Comprehensive Security Features", description: `Dell EMC's data center networking solutions include built-in security features such as role-based access control, port security, and support for network segmentation. These features help protect your data center from unauthorized access and potential threats, ensuring a secure networking environment.` },
  { title: "Seamless Integration with Dell EMC IT Infrastructure", description: `Dell EMC's data center networking solutions integrate seamlessly with Dell EMC's broader IT infrastructure, including compute, storage, and cloud services. This integration simplifies network management, enhances application performance, and improves overall operational efficiency.` },
  { title: "Robust Ecosystem and Tools", description: `Dell EMC's data center networking solutions are part of the larger Dell EMC ecosystem, which includes a broad range of tools and services designed to support your enterprise IT needs. With tools like Dell EMC Open Networking, businesses can enhance productivity and streamline IT operations.` },
  { title: "World-Class Support and Training", description: `Dell EMC provides comprehensive support and training services for its data center networking solutions, offering businesses 24/7 access to expert guidance, troubleshooting, and patches. Dell EMC's subscription model offers access to the latest software releases, security updates, and patches, ensuring that your systems remain secure and up to date. In addition, Dell EMC provides extensive training and certification programs, enabling your IT team to develop the skills needed to manage your data center network effectively.` }
]



export const ibmDesc: string[] = [
  `IBM offers a comprehensive suite of cloud data center networking solutions designed to meet the evolving needs of modern enterprises. These solutions provide secure, high-performance connectivity, enabling businesses to accelerate their digital transformation and optimize their IT infrastructure.`
]

export const ibmWhy: string[] = [
`IBM Cloud Data Center Networking encompasses a range of services and products that deliver secure, high-performance connectivity for cloud environments. These offerings include:`,
`•	IBM Cloud Global Data Centers: A resilient global network of data centers optimized for local access, low latency, and certified security. This infrastructure supports the deployment of applications and databases with high availability, fault tolerance, and scalability. `,
`•	IBM Cloud Networking Services: A suite of services that provide essential security features, such as resource isolation and protection for internet-facing workloads. These services ensure superior performance with high availability, supporting a wide range of applications, particularly those with stringent availability requirements.`,
`•	IBM Cloud Internet Services: A set of security, reliability, and performance capabilities designed to protect public-facing web content and applications. These services offer DDoS protection, global load balancing, and other features to enhance the security and performance of your applications. `,
`•	IBM Cloud Infrastructure Center: An OpenStack-compatible software platform for managing the infrastructure of private clouds on IBM zSystems and IBM Power Systems. This platform enables efficient management of cloud resources, providing greater control and customization to meet the specific demands of your workloads. `

]



export const ibmTabData:Tab[] = [
{
    id: "0",
    title:'Key Benefits of IBM Cloud Data Center Networking',
    },
  {
    id: "1",
    title:'Global Reach with Local Access',
    description: `IBM's global network of data centers ensures that your applications and data are hosted close to your users, providing low-latency access and improving performance. This global presence supports a wide range of deployment options, including public, private, and hybrid cloud environments. `
},
  {
    id: "2",
    title:'Robust Security Features',
    description: `IBM Cloud networking services offer essential security features that isolate resources and protect internet-facing workloads. These features help safeguard your data and applications from potential threats, ensuring a secure networking environment. `
},{
    id: "3",
    title:'High Availability and Performance',
    description: `The IBM Cloud network delivers support for an ever-expanding set of applications, particularly those with high availability requirements. This ensures that your applications remain accessible and perform optimally, even during peak usage periods. `
},{
    id: "4",
    title:'Comprehensive Management Tools',
    description:`IBM provides a range of management tools to help you monitor and manage your cloud infrastructure effectively. These tools offer greater control over your resources, enabling you to optimize performance and reduce operational complexity. `
},
    {
    id: "5",
    title:'Scalability and Flexibility',
    description:`IBM Cloud's approach to Infrastructure as a Service (IaaS) lets you scale and shrink resources as needed around the world in more than 60 data centers. This flexibility allows you to adapt to changing business requirements and workloads`
}
];




export const ibmFeature: Feature[] = [
    
{
    title: "Advanced Security Capabilities",
    description: `IBM Cloud Internet Services offer security, reliability, and performance capabilities designed to protect public-facing web content and applications. These services include DDoS protection, global load balancing, and other features to enhance the security and performance of your applications. `
},
{
    title: "Global Data Center Infrastructure",
    description: `IBM Cloud has a resilient global network of locations to host your highly available cloud workloads. Resources in different locations are consolidated into an account-based billing and usage view, allowing you to deploy workloads to the location nearest to your customers to achieve low-latency connectivity. `
},
{
    title: "Comprehensive Cloud Services",
    description: `IBM Cloud offers a full stack of compute, down to the bare metal, providing more control and customization to meet the precise demands of your workload. This approach allows you to accelerate performance and optimize your IT infrastructure. `
},
{
    title: "OpenStack Compatibility",
    description: `IBM Cloud Infrastructure Center is an OpenStack-compatible software platform for managing the infrastructure of private clouds on IBM zSystems and IBM Power Systems. This compatibility enables efficient management of cloud resources, providing greater control and customization to meet the specific demands of your workloads. `
},

]