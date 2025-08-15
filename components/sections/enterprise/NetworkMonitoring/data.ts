
import { Feature } from "../../AI/feature";

export interface Tab {
  id: string;
  title: string;
  description?: string;
}






export const nectusDesc: string[] = [
  `Nectus provides a robust and scalable network monitoring solution designed to offer real-time visibility and analysis of network traffic and performance. It combines comprehensive monitoring tools with an easy-to-use interface, enabling businesses to ensure optimal network performance, troubleshoot issues quickly, and achieve proactive network management.`
];

export const nectusFeatures: Feature[] = [
  {
    title: "Network Discovery",
    description: `Automatically discovers and maps your network’s infrastructure, devices, and connections, providing a comprehensive view of your network.`
  },
  {
    title: "Performance Monitoring",
    description: `Tracks key performance metrics including bandwidth, latency, and packet loss, offering real-time insights into the health and status of your network.`
  },
  {
    title: "Alerting & Notifications",
    description: `Configurable alerts notify users about network anomalies, enabling prompt action before problems affect operations.`
  },
  {
    title: "Customizable Dashboards",
    description: `Allows the creation of personalized dashboards to visualize network health, traffic patterns, and device performance metrics.`
  },
  {
    title: "Integration with Third-party Tools",
    description: `Seamlessly integrates with other IT management tools to enhance functionality and streamline workflows.`
  }
];

export const nectusBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits' },
  {
    id: "1",
    title: 'Proactive Network Management',
    description: `By monitoring network performance in real-time, businesses can address issues before they escalate, reducing downtime and maintaining operational efficiency.`
  },
  {
    id: "2",
    title: 'Enhanced Troubleshooting',
    description: `With detailed historical data and real-time analytics, Nectus simplifies the process of pinpointing network issues and troubleshooting them effectively.`
  },
  {
    id: "3",
    title: 'Improved Network Reliability',
    description: `Continuous monitoring and alerts ensure that your network stays stable and responsive, even as demands and usage increase.`
  }
];



export const thousandEyesDesc: string[] = [
  `ThousandEyes delivers cloud-based network monitoring solutions that offer deep visibility into the performance and health of networks, applications, and services. By leveraging distributed monitoring agents, ThousandEyes provides insights into both internal networks and third-party infrastructure like ISPs, cloud services, and SaaS providers.`
];

export const thousandEyesFeatures: Feature[] = [
  {
    title: "End-to-End Visibility",
    description: `Provides visibility into the entire network stack, from the user’s device to the destination service, ensuring no part of the network is left unmonitored.`
  },
  {
    title: "Internet and Cloud Monitoring",
    description: `Tracks internet service providers (ISPs), data centers, cloud providers, and SaaS applications, giving businesses insights into external dependencies.`
  },
  {
    title: "Network Path Analysis",
    description: `Identifies bottlenecks and delays within the network path, enabling quicker identification of issues affecting performance.`
  },
  {
    title: "Application Performance Monitoring",
    description: `Monitors application performance to ensure that critical services are always available and performing optimally.`
  },
  {
    title: "Customizable Alerts & Reports",
    description: `Allows users to set custom alerts for any network condition and provides detailed reports for deeper analysis.`
  }
];

export const thousandEyesBenefits: Tab[] = [
  { id: "0", title: 'Key Benefits' },
  {
    id: "1",
    title: 'Enhanced Network Troubleshooting',
    description: `By providing comprehensive insights across all network layers, ThousandEyes helps businesses identify and resolve issues faster.`
  },
  {
    id: "2",
    title: 'Improved User Experience',
    description: `The platform helps optimize application performance and end-user experience by pinpointing areas of concern across global networks.`
  },
  {
    id: "3",
    title: 'Scalability & Flexibility',
    description: `ThousandEyes is suitable for enterprises of all sizes, offering scalable monitoring solutions that grow with your business.`
  }
];
