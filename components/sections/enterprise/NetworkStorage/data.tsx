

import { Feature } from "../../AI/feature";

export interface Tab {
  id: string;
  title: string;
  description?: string;
}



export const emcUnityXTDesc: string[] = [
  `EMC Unity XT is a versatile hybrid cloud storage platform designed for modern enterprises. It supports both file and block storage, and is highly scalable, providing data services across the enterprise. Unity XT integrates seamlessly into cloud environments, enabling businesses to extend their storage capabilities with ease.`
];

export const emcUnityXTFeatures: Feature[] = [
  {
    title: "Unified Storage Experience",
    description: "Unity XT supports block, file, and VMware vVols, all from a single system, reducing the complexity of managing multiple types of data."
  },
  {
    title: "Flexibility and Scalability",
    description: "The system allows businesses to scale up to 16PB of data in a single system, ensuring future growth is supported. It is ideal for both small businesses and large enterprises."
  },
  {
    title: "Cloud Integration",
    description: "Unity XT offers cloud integration with Dell Technologies Cloud, VMware Cloud Foundation, and public cloud environments (AWS, Azure, Google Cloud) to support hybrid cloud and cloud-tiering."
  },
  {
    title: "Simplified Management",
    description: "With its intuitive interface, Unity XT allows IT teams to manage storage from anywhere, reducing administrative complexity. It also integrates with automation tools."
  },
  {
    title: "Security Features",
    description: "Built-in encryption at rest, secure data transport, and multi-level access controls help secure sensitive data."
  },
  {
    title: "Cost Efficiency",
    description: "Unity XT reduces cost with inline compression and deduplication, optimizing storage efficiency."
  }
];

export const emcUnityXTBenefits: Tab[] = [
  { id: "0", title: 'Benefits' },
  {
    id: "1",
    title: 'Unified Storage Experience',
    description: "Supports block, file, and VMware vVols from one system, simplifying storage management."
  },
  {
    id: "2",
    title: 'Flexibility and Scalability',
    description: "Scales up to 16PB, making it suitable for both SMBs and large enterprises."
  },
  {
    id: "3",
    title: 'Cloud Integration',
    description: "Integrates with Dell Technologies Cloud, VMware Cloud Foundation, and AWS/Azure/Google Cloud."
  },
  {
    id: "4",
    title: 'Simplified Management',
    description: "Intuitive interface and automation integration reduce administrative overhead."
  },
  {
    id: "5",
    title: 'Security Features',
    description: "Encryption at rest, secure transport, and multi-level access controls protect data."
  },
  {
    id: "6",
    title: 'Cost Efficiency',
    description: "Inline compression and deduplication lower storage costs."
  }
];


export const emcPowerMaxDesc: string[] = [
  `PowerMax is an enterprise-class, all-flash storage solution known for its high performance, low latency, and intelligent automation powered by machine learning. It is engineered for high-demand applications, offering multi-cloud integration, comprehensive data protection, and end-to-end NVMe architecture.`
];

export const emcPowerMaxBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits' },
  {
    id: "1",
    title: 'Performance and Efficiency',
    description: "Leverages NVMe and inline data reduction for high throughput, low latency, and efficient storage, capable of handling demanding workloads like databases, analytics, and AI."
  },
  {
    id: "2",
    title: 'Real-Time Analytics',
    description: "Built-in ML and analytics deliver real-time insights, monitoring, and predictive analytics for optimal utilization and proactive resolution."
  },
  {
    id: "3",
    title: 'Multi-Cloud Integration',
    description: "Seamless integration with AWS, Azure, and Google Cloud for DR, backup, and archiving with consistent multi-cloud data management."
  },
  {
    id: "4",
    title: 'Data Protection',
    description: "Continuous data protection, snapshot backups, and non-disruptive migration ensure data availability and protection."
  },
  {
    id: "5",
    title: 'Enterprise-Class Security',
    description: "End-to-end encryption for data at rest and in transit, supporting compliance with GDPR, HIPAA, and other regulations."
  }
];

// EMC Isilon
export const emcIsilonDesc: string[] = [
  `Isilon is Dell’s scale-out NAS storage solution, designed for handling unstructured data. It’s ideal for industries that rely heavily on big data, such as media and entertainment, healthcare, and research. Isilon is renowned for its scalability and performance, supporting petabytes of data across hundreds of nodes.`
];

export const emcIsilonBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits' },
  {
    id: "1",
    title: 'Scalability',
    description: "Designed to scale from terabytes to petabytes without reconfiguring infrastructure, ensuring storage keeps pace with business growth."
  },
  {
    id: "2",
    title: 'Simplified Management',
    description: "Uses a single file system and namespace, with all nodes in a unified cluster for easier, more efficient data management."
  },
  {
    id: "3",
    title: 'High Performance',
    description: "Automated tiering delivers high throughput for workloads needing low latency and fast retrieval."
  },
  {
    id: "4",
    title: 'Data Protection and Security',
    description: "Built-in redundancy, replication, snapshots, and encryption safeguard against failures and cyber threats."
  },
  {
    id: "5",
    title: 'Multi-Protocol Support',
    description: "Supports NFS, SMB, FTP, and more for compatibility with diverse applications and environments."
  }
];

// Dell ECS
export const dellEcsDesc: string[] = [
  `Dell ECS is an object storage platform for cloud-native and enterprise workloads. It scales massively, offers resilience, and supports cloud deployments, making it ideal for big data, backup, archive, and IoT applications.`
];

export const dellEcsBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits' },
  {
    id: "1",
    title: 'Global Scalability',
    description: "Scales from terabytes to exabytes with a globally distributed architecture without performance loss."
  },
  {
    id: "2",
    title: 'Cost-Efficiency',
    description: "Low TCO for object storage with deduplication and compression to minimize storage footprint."
  },
  {
    id: "3",
    title: 'Cloud-Native',
    description: "Supports S3-compatible APIs, multi-cloud, and cloud-native app development."
  },
  {
    id: "4",
    title: 'Data Durability',
    description: "Multiple redundancy layers and erasure coding ensure data availability despite hardware failures."
  },
  {
    id: "5",
    title: 'Compliance and Security',
    description: "Encryption, strong access controls, and audit logging for HIPAA, GDPR, PCI DSS compliance."
  }
];

// Dell VxRail
export const dellVxRailDesc: string[] = [
  `VxRail is Dell's hyperconverged infrastructure tightly integrated with VMware. It simplifies virtualized application deployment and management, offering scalability, automation, and resource efficiency.`
];

export const dellVxRailBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits' },
  {
    id: "1",
    title: 'Seamless VMware Integration',
    description: "Fully integrated with VMware vSphere, vSAN, and vCenter for simplified management using familiar tools."
  },
  {
    id: "2",
    title: 'Automation and Lifecycle Management',
    description: "Automates updates for firmware, software, and hardware with minimal manual work."
  },
  {
    id: "3",
    title: 'Scalability',
    description: "Expands from a few nodes to large clusters as compute and storage needs grow."
  },
  {
    id: "4",
    title: 'Cloud Enablement',
    description: "Integrates with VMware Cloud Foundation for hybrid cloud, migration, backup, and DR."
  },
  {
    id: "5",
    title: 'High Availability',
    description: "Redundancy and failover features maintain uptime during hardware failures."
  }
];



export const netappAFFDesc: string[] = [
  `NetApp AFF is an all-flash storage array that delivers high performance and low latency for mission-critical applications. It is optimized for flash media, providing rapid data access and processing capabilities.`
];

export const netappFASDesc: string[] = [
  `NetApp FAS is a versatile storage system that supports both file and block protocols, offering a unified solution for diverse workloads. It is available in hybrid configurations, combining flash and disk storage to balance performance and cost.`
];

export const netappONTAPDesc: string[] = [
  `ONTAP is NetApp's data management software that powers both AFF and FAS systems. It provides a comprehensive set of data services, including data protection, security, and storage efficiency.`
];

export const netappStorageGRIDDesc: string[] = [
  `StorageGRID is NetApp's object storage solution designed for managing unstructured data at scale. It provides a secure, durable, and scalable platform for storing and managing large volumes of unstructured data.`
];

// ---------- Benefits Data ----------

export const netappAFFBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of NetApp AFF (All Flash FAS)' },
  { id: "1", title: 'High Performance', description: `AFF systems utilize all-flash storage to deliver exceptional performance, making them ideal for workloads requiring low latency and high throughput.` },
  { id: "2", title: 'Scalability', description: `Designed to scale seamlessly, AFF systems can grow with your business needs, accommodating increasing data volumes without compromising performance.` },
  { id: "3", title: 'Data Efficiency', description: `Features such as inline data deduplication and compression reduce storage requirements, optimizing capacity utilization and lowering costs.` },
  { id: "4", title: 'Integrated Data Protection', description: `AFF includes built-in data protection features like snapshots and replication, ensuring data availability and resilience.` },
  { id: "5", title: 'Cloud Integration', description: `Seamless integration with public and private cloud environments enables hybrid cloud deployments, providing flexibility and cost efficiency.` }
];

export const netappFASBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of NetApp FAS (Fabric-Attached Storage)' },
  { id: "1", title: 'Unified Architecture', description: `Supports multiple protocols (NFS, SMB, iSCSI, FC) from a single platform, simplifying management and reducing infrastructure complexity.` },
  { id: "2", title: 'Hybrid Flexibility', description: `Combines flash and disk storage to deliver a balance of performance and cost, allowing businesses to optimize their storage investments.` },
  { id: "3", title: 'Data Protection', description: `Offers robust data protection features, including snapshots, replication, and disaster recovery capabilities, ensuring data integrity and availability.` },
  { id: "4", title: 'Scalability', description: `Easily scalable to meet growing data demands, with the ability to add storage capacity and performance as needed.` },
  { id: "5", title: 'Cloud Integration', description: `Facilitates hybrid cloud deployments, enabling seamless data movement between on-premises and cloud environments.` }
];

export const netappONTAPBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of NetApp ONTAP' },
  { id: "1", title: 'Data Management', description: `Offers advanced data management capabilities, including automated tiering, data deduplication, and compression, to optimize storage efficiency.` },
  { id: "2", title: 'Data Protection', description: `Includes integrated data protection features such as snapshots, replication, and disaster recovery, ensuring data availability and resilience.` },
  { id: "3", title: 'Security', description: `Provides robust security features, including encryption, access controls, and compliance reporting, to protect sensitive data.` },
  { id: "4", title: 'Cloud Integration', description: `Enables seamless integration with public and private cloud environments, supporting hybrid cloud strategies and data mobility.` },
  { id: "5", title: 'Automation', description: `Supports automation of routine tasks, reducing administrative overhead and improving operational efficiency.` }
];

export const netappStorageGRIDBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of NetApp StorageGRID' },
  { id: "1", title: 'Scalability', description: `Designed to scale horizontally, StorageGRID can handle petabytes of data, accommodating the growing needs of modern enterprises.` },
  { id: "2", title: 'Data Durability', description: `Utilizes erasure coding and data replication to ensure high levels of data durability and availability.` },
  { id: "3", title: 'Security', description: `Offers robust security features, including encryption at rest and in transit, access controls, and compliance reporting, to protect sensitive data.` },
  { id: "4", title: 'Cloud Integration', description: `Seamlessly integrates with public and private cloud environments, enabling hybrid cloud deployments and data mobility.` },
  { id: "5", title: 'Cost Efficiency', description: `Optimizes storage costs by allowing data to be tiered to lower-cost storage media, balancing performance and cost.` }
];



export const nimbleDesc: string[] = [
  `HPE Nimble Storage provides a flash-optimized, hybrid storage solution designed for speed, capacity, and efficiency. It supports both flash and HDD media, offering cost-effective solutions for high-performance workloads.`
];

export const cloudVolumesDesc: string[] = [
  `HPE Cloud Volumes provides a cloud storage solution designed to simplify hybrid cloud environments, allowing businesses to extend their on-premises storage to public clouds such as AWS, Microsoft Azure, or Google Cloud.`
];

export const infoSightDesc: string[] = [
  `HPE Nimble Storage InfoSight is an AI-driven predictive analytics platform that monitors and analyzes storage systems to ensure optimal performance and prevent potential issues before they occur. It leverages machine learning to identify and resolve problems autonomously.`
];

// ---------- Benefits Data ----------

export const nimbleBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of HPE Nimble Storage' },
  { id: "1", title: 'Performance and Speed', description: `Combines flash and hybrid disk drives to deliver low-latency performance for applications and databases, reducing response times.` },
  { id: "2", title: 'Scalability', description: `HPE Nimble Storage systems can easily scale as business data needs grow, supporting large data volumes without compromising performance.` },
  { id: "3", title: 'Efficiency', description: `Inline data compression and deduplication reduce storage footprint and lower costs.` },
  { id: "4", title: 'Data Protection', description: `Integrated features such as snapshots, replication, and disaster recovery ensure data security and availability.` },
  { id: "5", title: 'Cloud-Ready', description: `Seamless cloud integration allows businesses to create hybrid cloud environments, extend on-prem storage to the cloud, and manage it all from a single platform.` }
];

export const cloudVolumesBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of HPE Cloud Volumes' },
  { id: "1", title: 'Cloud Integration', description: `Seamlessly integrates on-prem storage with cloud providers, enabling enterprises to leverage the benefits of hybrid cloud environments.` },
  { id: "2", title: 'Scalability', description: `Cloud Volumes can scale on demand to meet growing business data needs, offering a flexible and efficient way to manage cloud storage.` },
  { id: "3", title: 'Performance', description: `Optimized for cloud-based workloads, HPE Cloud Volumes provides high-performance, low-latency storage, ensuring efficient operations for enterprise applications.` },
  { id: "4", title: 'Cost Efficiency', description: `Offers a pay-as-you-go pricing model, enabling businesses to only pay for the cloud storage they use while optimizing costs.` },
  { id: "5", title: 'Data Protection and Security', description: `Provides robust data protection and compliance with industry standards, ensuring data security across both on-prem and cloud environments.` }
];

export const infoSightBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of HPE Nimble Storage InfoSight' },
  { id: "1", title: 'Predictive Analytics', description: `InfoSight uses AI and machine learning to predict and prevent issues, ensuring a high level of performance and reliability without manual intervention.` },
  { id: "2", title: 'Proactive Support', description: `Automates troubleshooting and service requests, reducing downtime and improving overall system availability.` },
  { id: "3", title: 'Performance Optimization', description: `Automatically adjusts resources to ensure optimal performance for critical applications and workloads.` },
  { id: "4", title: 'Cost Efficiency', description: `By identifying inefficiencies and streamlining storage operations, InfoSight helps to reduce costs and maximize resource utilization.` },
  { id: "5", title: 'Cloud Integration', description: `Works seamlessly with HPE Cloud Volumes and other cloud environments, enabling hybrid cloud deployment and management.` }
];


export const flashSystemDesc: string[] = [
  `IBM FlashSystem provides an advanced all-flash storage solution designed for high performance, low latency, and high reliability. Built for mission-critical applications, FlashSystem delivers storage efficiency and scalability for enterprises looking to optimize their data centers.`
];

export const storwizeDesc: string[] = [
  `IBM Storwize is a family of storage systems designed to offer cost-effective solutions for both small and large enterprises. Storwize solutions combine virtualization, compression, and advanced data management technologies to deliver efficient storage for a wide range of use cases.`
];

export const cloudObjectDesc: string[] = [
  `IBM Cloud Object Storage provides scalable, secure, and cost-efficient cloud storage for unstructured data. It supports modern cloud-native applications, enabling businesses to store and manage massive amounts of data in a flexible and durable manner.`
];

export const spectrumDesc: string[] = [
  `IBM Spectrum Storage Suite is a comprehensive portfolio of software-defined storage solutions designed to manage data storage across multiple environments. It provides flexible and scalable storage management, from on-premises data centers to the cloud, and enables enterprise-level data protection and storage efficiency.`
];

// ---------- Benefits Data ----------

export const flashSystemBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of IBM FlashSystem' },
  { id: "1", title: 'High Performance', description: `FlashSystem accelerates application performance with high-speed data access and low latency, making it ideal for demanding workloads.` },
  { id: "2", title: 'Scalability', description: `FlashSystem allows businesses to scale storage as needed, providing enterprise-class performance without compromising capacity.` },
  { id: "3", title: 'Data Protection', description: `Includes built-in data protection features such as snapshots, replication, and encryption, ensuring data integrity and security.` },
  { id: "4", title: 'Efficiency', description: `IBM FlashSystem utilizes data compression, deduplication, and storage optimization to minimize costs and maximize storage capacity.` },
  { id: "5", title: 'Cloud Integration', description: `Offers seamless integration with cloud environments, enabling hybrid cloud deployments and disaster recovery solutions.` }
];

export const storwizeBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of IBM Storwize' },
  { id: "1", title: 'Storage Efficiency', description: `IBM Storwize delivers enhanced data reduction techniques, including deduplication and compression, reducing storage footprint and costs.` },
  { id: "2", title: 'Virtualization', description: `Built-in virtualization enables Storwize to manage data across heterogeneous storage systems, simplifying management and increasing flexibility.` },
  { id: "3", title: 'High Availability', description: `Offers advanced features such as active-active replication and failover capabilities, ensuring business continuity and data availability.` },
  { id: "4", title: 'Scalable and Flexible', description: `Storwize systems can be scaled as business needs grow, supporting a wide range of storage configurations and workloads.` },
  { id: "5", title: 'Simplified Management', description: `Integrated management tools streamline the deployment, monitoring, and maintenance of storage resources, reducing operational complexity.` }
];

export const cloudObjectBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of IBM Cloud Object Storage' },
  { id: "1", title: 'Scalability', description: `IBM Cloud Object Storage offers virtually unlimited scalability, allowing businesses to store vast amounts of unstructured data with ease.` },
  { id: "2", title: 'Cost Efficiency', description: `Uses a pay-as-you-go model, providing significant cost savings by enabling users to pay only for the storage they consume.` },
  { id: "3", title: 'Durability and Availability', description: `Built to deliver high availability and durability for critical data, ensuring that data is protected across multiple geographic locations.` },
  { id: "4", title: 'Security', description: `Includes robust encryption, identity management, and compliance capabilities, ensuring data is protected and meets industry standards.` },
  { id: "5", title: 'Integration with Cloud Services', description: `Seamlessly integrates with other IBM Cloud services and public cloud platforms, enabling hybrid and multicloud data management.` }
];

export const spectrumBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of IBM Spectrum Storage Suite' },
  { id: "1", title: 'Software-Defined Flexibility', description: `Spectrum Storage enables the virtualization and management of storage resources, providing businesses with the flexibility to use both physical and cloud storage.` },
  { id: "2", title: 'Data Management and Automation', description: `Streamlines data management with intelligent automation, helping to reduce manual tasks, improve operational efficiency, and optimize storage resources.` },
  { id: "3", title: 'Hybrid Cloud Integration', description: `Enables seamless management of on-premises and cloud storage, making it ideal for businesses with hybrid cloud strategies.` },
  { id: "4", title: 'Scalability', description: `Designed to scale with business growth, providing the ability to manage vast amounts of data across complex environments.` },
  { id: "5", title: 'Data Protection and Security', description: `Built-in data protection features such as snapshots, replication, and encryption help ensure data security, continuity, and compliance.` }
];




export const cephDesc: string[] = [
  `Red Hat Ceph Storage is an open-source, software-defined storage platform that provides scalable and reliable object, block, and file storage. It is designed for cloud environments, big data applications, and containerized workloads. Ceph Storage is widely used for managing large volumes of unstructured data, offering flexibility and high availability.`
];

export const glusterDesc: string[] = [
  `Red Hat Gluster Storage is an open-source, distributed file system designed to handle unstructured data at scale. It is built to deliver high performance, reliability, and flexibility for enterprise workloads, especially in virtualized and containerized environments.`
];

export const openshiftDesc: string[] = [
  `Red Hat OpenShift Container Storage is a software-defined storage solution optimized for containerized and cloud-native applications. It is tightly integrated with Red Hat OpenShift, the leading Kubernetes platform, and provides persistent storage for stateful applications running in containers.`
];

// ---------- Benefits Data ----------

export const cephBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of Red Hat Ceph Storage' },
  { id: "1", title: 'Scalability', description: `Red Hat Ceph Storage is highly scalable, allowing businesses to expand storage as their needs grow, from a single server to large-scale deployments.` },
  { id: "2", title: 'High Availability', description: `Designed for fault tolerance, Ceph provides data replication and self-healing capabilities to ensure that data is always available and protected.` },
  { id: "3", title: 'Unified Storage', description: `Supports block, object, and file storage in a single platform, making it ideal for diverse use cases and cloud-native applications.` },
  { id: "4", title: 'Open-Source Flexibility', description: `Built on open-source principles, Red Hat Ceph Storage offers the flexibility to customize and extend the platform according to specific business needs.` },
  { id: "5", title: 'Cloud-Native Integration', description: `Seamlessly integrates with cloud environments and Kubernetes, making it perfect for containerized workloads and hybrid cloud deployments.` }
];

export const glusterBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of Red Hat Gluster Storage' },
  { id: "1", title: 'Distributed File System', description: `Gluster Storage allows enterprises to manage large volumes of data across distributed environments, providing a unified file system with high scalability.` },
  { id: "2", title: 'Performance', description: `Offers excellent performance for read-heavy workloads and can be easily tuned to meet specific requirements for diverse data types.` },
  { id: "3", title: 'Multi-Protocol Support', description: `Gluster Storage supports NFS, SMB, and object protocols, enabling seamless integration with a variety of applications and systems.` },
  { id: "4", title: 'Self-Healing and High Availability', description: `Features self-healing mechanisms and built-in redundancy to ensure continuous availability and data integrity.` },
  { id: "5", title: 'Cost-Effective Scaling', description: `Gluster Storage offers a cost-effective, scalable solution for businesses looking to reduce storage costs while maintaining high performance and reliability.` }
];

export const openshiftBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of Red Hat OpenShift Container Storage' },
  { id: "1", title: 'Container-Native Storage', description: `Designed for containerized applications, OpenShift Container Storage offers persistent storage and data management for stateful workloads in OpenShift clusters.` },
  { id: "2", title: 'Scalability and Flexibility', description: `OpenShift Container Storage scales effortlessly to meet the needs of container-based environments, providing flexible storage that grows with your business.` },
  { id: "3", title: 'Cloud Integration', description: `Easily integrates with public and private cloud environments, allowing businesses to adopt hybrid cloud models and maintain data consistency across platforms.` },
  { id: "4", title: 'Self-Healing and Resilient', description: `Built-in resilience and automated self-healing features ensure data availability and business continuity.` },
  { id: "5", title: 'Multi-Tenant Architecture', description: `Supports multi-tenant environments, allowing organizations to securely manage and isolate storage for different workloads and users.` }
];


export const veeamDesc: string[] = [
  `Veeam Backup & Replication is a data protection solution that offers powerful backup and recovery capabilities for virtual, physical, and cloud workloads. It enables businesses to ensure business continuity, protect data, and quickly restore applications in case of an outage or disaster. The solution is designed for enterprises that require high levels of availability, fast recovery times, and secure data protection.`
];

export const veeamCloudDesc: string[] = [
  `Veeam Cloud Connect is a secure and easy-to-use solution for offsite backup and disaster recovery that leverages the cloud. It allows businesses to back up data to a cloud repository, ensuring protection against local disasters and providing a reliable offsite copy of critical workloads. This solution is designed for organizations that need to protect their data without managing a separate disaster recovery site.`
];

// ---------- Benefits Data ----------

export const veeamBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of Veeam Backup & Replication' },
  { id: "1", title: 'Comprehensive Backup', description: `Supports backup for virtual, physical, and cloud-based workloads, providing a complete data protection strategy.` },
  { id: "2", title: 'Fast and Flexible Recovery', description: `Businesses can quickly restore entire VMs, files, or applications, minimizing downtime and ensuring business continuity.` },
  { id: "3", title: 'Advanced Ransomware Protection', description: `Built-in ransomware protection and immutable backups help defend against cyberattacks, ensuring that backups are secure and recoverable.` },
  { id: "4", title: 'Scalability', description: `Designed to scale from small environments to large enterprise infrastructures, enabling businesses to protect growing data volumes with ease.` },
  { id: "5", title: 'Cloud Integration', description: `Supports seamless backup to public and private clouds, offering flexibility in managing backup storage and data recovery across hybrid environments.` }
];

export const veeamCloudBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of Veeam Cloud Connect' },
  { id: "1", title: 'Secure Offsite Backup', description: `Enables encrypted, secure backup to cloud repositories, ensuring data is protected from potential local disasters or outages.` },
  { id: "2", title: 'Seamless Integration with Cloud Providers', description: `Easily integrates with cloud service providers to store backups, providing businesses with flexible options for cloud-based storage.` },
  { id: "3", title: 'Disaster Recovery Capabilities', description: `Provides reliable disaster recovery for applications and data, allowing businesses to quickly recover to a cloud environment in case of a system failure or disaster.` },
  { id: "4", title: 'Cost-Effective', description: `Eliminates the need for expensive, physical disaster recovery infrastructure while maintaining secure backup and recovery capabilities.` },
  { id: "5", title: 'Easy Management', description: `Simplifies cloud backup and disaster recovery processes with centralized management, enabling IT teams to oversee and monitor all backup activities from a single console.` }
];




export const teraStationDesc: string[] = [
  `Buffalo's TeraStation is a comprehensive, high-performance NAS (Network Attached Storage) solution designed for businesses that require secure and reliable data storage. TeraStation provides flexible storage configurations and is known for its scalability, making it an ideal choice for businesses of any size. With data protection, centralized file sharing, and powerful backup capabilities, TeraStation helps businesses manage their data securely.`
];

export const linkStationDesc: string[] = [
  `Buffalo's LinkStation is a user-friendly, entry-level NAS solution designed for home offices and small businesses. It provides affordable, secure, and scalable storage for file sharing, data backup, and remote access. LinkStation integrates seamlessly with Windows, Mac, and mobile devices, making it a versatile option for businesses looking to simplify their data management.`
];

// ---------- Benefits Data ----------

export const teraStationBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of Buffalo TeraStation' },
  { id: "1", title: 'Enterprise-Class Features', description: `TeraStation is equipped with advanced features like RAID, AES 256-bit encryption, and remote access, providing businesses with a robust storage solution for critical data.` },
  { id: "2", title: 'Centralized File Sharing', description: `Enables secure, centralized storage of documents, files, and data, allowing multiple users to access and collaborate on business-critical files.` },
  { id: "3", title: 'Data Protection', description: `With automated backup features and RAID support, TeraStation ensures that your data is protected against loss, providing peace of mind.` },
  { id: "4", title: 'Scalable Storage Options', description: `TeraStation offers various storage configurations, allowing businesses to expand their storage capacity as their data needs grow.` },
  { id: "5", title: 'Ease of Use', description: `TeraStation’s user-friendly interface makes it simple to set up and manage, reducing the complexity of managing network storage for small to medium-sized businesses.` }
];

export const linkStationBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of Buffalo LinkStation' },
  { id: "1", title: 'Affordable Storage Solution', description: `LinkStation is a cost-effective storage solution that helps businesses with limited budgets store, share, and back up data without compromising security or performance.` },
  { id: "2", title: 'Easy Setup and Management', description: `LinkStation features a simple setup process and intuitive management tools, making it easy for non-technical users to deploy and operate.` },
  { id: "3", title: 'File Sharing and Collaboration', description: `LinkStation allows multiple users to securely access and collaborate on files from any device, enhancing productivity and teamwork.` },
  { id: "4", title: 'Remote Access', description: `With Buffalo’s web access feature, businesses can access their LinkStation storage remotely, ensuring that data is available anytime, anywhere.` },
  { id: "5", title: 'Data Protection', description: `LinkStation supports automatic backup and data recovery options to protect business data from potential loss.` }
];



export const qnapNASDesc: string[] = [
  `QNAP NAS (Network Attached Storage) solutions provide a flexible, easy-to-manage platform for businesses to centralize their data, facilitate secure file sharing, and back up critical information. With a wide range of models and configurations, QNAP NAS systems are ideal for businesses of all sizes, offering reliable and high-performance storage solutions for data access, protection, and management.`
];

export const qnapEnterpriseDesc: string[] = [
  `QNAP’s enterprise storage solutions are designed to meet the high-performance demands of large organizations. These systems deliver robust performance, advanced features, and unmatched scalability, ensuring that businesses can handle massive amounts of data, support high-transaction workloads, and optimize overall IT operations.`
];

export const qnapCloudDesc: string[] = [
  `QNAP cloud storage solutions combine the power of on-premises NAS systems with cloud-based capabilities, allowing businesses to leverage both local and cloud storage for enhanced flexibility, scalability, and redundancy. This hybrid storage model ensures that businesses can easily back up, store, and access data from anywhere while maintaining complete control over their data.`
];

// ---------- Benefits Data ----------

export const qnapNASBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of QNAP NAS Storage' },
  { id: "1", title: 'Centralized Data Management', description: `QNAP NAS provides businesses with a single, centralized location to store, manage, and access their data, streamlining workflows and enhancing productivity.` },
  { id: "2", title: 'Scalable Storage', description: `QNAP NAS solutions are highly scalable, allowing businesses to expand storage as data requirements grow without significant infrastructure changes.` },
  { id: "3", title: 'Data Protection and Backup', description: `Built-in backup tools and RAID support ensure that your data is protected, while QNAP’s hybrid cloud solutions allow for easy cloud-based backup and disaster recovery.` },
  { id: "4", title: 'Security and Encryption', description: `With AES 256-bit encryption and comprehensive security features, QNAP NAS systems provide robust protection against unauthorized access and data breaches.` },
  { id: "5", title: 'Remote Access', description: `QNAP NAS offers remote access capabilities, enabling users to securely access their files from anywhere, at any time, through the myQNAPcloud service.` }
];

export const qnapEnterpriseBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of QNAP Enterprise Storage' },
  { id: "1", title: 'High Performance', description: `QNAP’s enterprise storage solutions offer superior speed, reliability, and low latency, making them suitable for mission-critical applications and high-throughput environments.` },
  { id: "2", title: 'Scalability', description: `QNAP’s enterprise storage is designed to scale seamlessly, allowing organizations to grow their storage infrastructure without compromising performance.` },
  { id: "3", title: 'Data Integrity and Security', description: `With built-in data protection mechanisms such as snapshot technology, RAID, and encryption, QNAP ensures the integrity and security of sensitive business data.` },
  { id: "4", title: 'Advanced Features', description: `Features like high availability (HA), virtualization support, and comprehensive monitoring tools help businesses optimize their IT operations and ensure business continuity.` },
  { id: "5", title: 'Cost-Efficient', description: `QNAP’s enterprise storage solutions offer a balance between performance and affordability, providing an excellent value for organizations looking to optimize their storage infrastructure.` }
];

export const qnapCloudBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits of QNAP Cloud Storage' },
  { id: "1", title: 'Hybrid Cloud Integration', description: `QNAP’s cloud storage solutions integrate seamlessly with public and private clouds, allowing businesses to extend their on-premises storage into the cloud for improved flexibility and scalability.` },
  { id: "2", title: 'Data Backup and Disaster Recovery', description: `Businesses can use QNAP’s cloud storage to back up critical data to the cloud, ensuring disaster recovery in case of on-premises hardware failure or data loss.` },
  { id: "3", title: 'Access from Anywhere', description: `With QNAP’s cloud services, users can access files and data remotely from any device, anytime, ensuring enhanced collaboration and productivity.` },
  { id: "4", title: 'Cost Efficiency', description: `By leveraging cloud storage, businesses can reduce the need for large upfront hardware investments and scale storage based on actual usage, minimizing costs.` },
  { id: "5", title: 'Secure Data Storage', description: `QNAP ensures that data stored in the cloud is encrypted and protected, offering secure, reliable, and compliant storage options.` }
];