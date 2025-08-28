import * as Logos from "@/app/assets/logos/index"; // T

import { CollapisblePoint } from "@/types/declaration";
import { LogoItem } from "../type";

export const logosData: LogoItem[] = [
  { image: Logos.Appian, link: "https://www.appian.com" },
  { image: Logos.AzureMicrosoft, link: "https://azure.microsoft.com" },
  { image: Logos.Barracuda, link: "https://www.barracuda.com" },
  { image: Logos.Connectwise, link: "https://www.connectwise.com" },
  { image: Logos.Cradlepoint, link: "https://www.cradlepoint.com" },
  { image: Logos.CrowdStrike, link: "https://www.crowdstrike.com" },
  { image: Logos.Darktrace, link: "https://www.darktrace.com" },
  { image: Logos.Dell, link: "https://www.dell.com" },
  { image: Logos.Fortinet, link: "https://www.fortinet.com" },
  { image: Logos.HPE, link: "https://www.hpe.com" },
  { image: Logos.IBM, link: "https://www.ibm.com" },
  { image: Logos.Intermedia, link: "https://www.intermedia.com" },
  { image: Logos.Kaseya, link: "https://www.kaseya.com" },
  { image: Logos.Microsoft, link: "https://www.microsoft.com" },
  { image: Logos.NetApp, link: "https://www.netapp.com" },
  { image: Logos.Okta, link: "https://www.okta.com" },
  { image: Logos.Outsystems, link: "https://www.outsystems.com" },
  { image: Logos.PaloAltoNetworks, link: "https://www.paloaltonetworks.com" },
  { image: Logos.SamsungKnox, link: "https://www.samsungknox.com" },
  { image: Logos.SentinelOne, link: "https://www.sentinelone.com" },
  { image: Logos.TrendMicro, link: "https://www.trendmicro.com" },
  { image: Logos.Veeam, link: "https://www.veeam.com" },
  { image: Logos.WorkspaceGoogle, link: "https://workspace.google.com" },
  { image: Logos.Adobe, link: "https://www.adobe.com" },
  { image: Logos.APC, link: "https://www.apc.com" },
  { image: Logos.AWSAmazon, link: "https://amazon.in" },
  { image: Logos.ZohoManageEngine, link: "https://www.manageengine.com" }
];

export type KeyFeaturesSectionProps = {
  features: CollapisblePoint[];
};

export const productData:CollapisblePoint[] = [{
  title:"Oil & Gas Robotics Solutions",
  description:"Design and deploy autonomous aerial and ground robotic platforms for offshore and onshore oil & gas operations. Capabilities include pipeline inspection, flare stack monitoring, hazardous area surveillance, and site security using AI-driven UAVs and rugged AGVs with encrypted mesh communications."
},{
title:"Infrastructure Monitoring & Asset Management",
description:"Provide AI-enabled multi-platform robotic systems for continuous monitoring and inspection of bridges, highways, dams, power grids, and industrial infrastructure. Integrates LiDAR, thermal, and visual imaging for predictive maintenance, anomaly detection, and digital twin generation."
},{
  title:"Construction Site Automation & Progress Monitoring",
  description:"Deploy UAV and AGV solutions for real-time construction site mapping, equipment tracking, material logistics, and safety enforcement. Automated photogrammetry and AI-driven analytics deliver project status, inventory updates, and site anomaly alerts for improved operational efficiency."
},{
title:"Inspection & Surveillance Robotics",
description: "Engineer customized unmanned systems for critical asset inspections in confined, hazardous, or remote environments. Applications include power plants, substations, ports, warehouses, and perimeter security using multi-sensor UAVs, ground robots, and smart edge-based C2 software."
},{
title:"Precise Agriculture & Land Management",
description: "Design autonomous aerial and ground systems for crop health monitoring, precision spraying, soil analysis, and yield prediction. AI-driven analytics deliver actionable insights for farm management, disease detection, and optimized resource allocation across large agricultural estates."
}]

export const dtlsData:CollapisblePoint[] = [{
  title:"SafeRig - AI-Powered Oil Rig Hazard Detection Platform",
  description: "SafeRig is a ruggedized AI-based safety management system built for offshore oil rigs and heavy industrial sites. It detects worker safety violations, unauthorized access to hazardous zones, and PPE non-compliance in real-time using computer vision and edge-deployed AI models. Designed for low-bandwidth, remote rigs, it operates fully offline via NVIDIA Jetson/industrial mini-PC hardware. Core features include AI-based zone mapping, automatic rule enforcement, gRPC alerting, and timestamped incident logging — reducing human error, downtime, and regulatory breaches."
},{
title:"AI-Enabled Medical Inventory Management System",
description: "A comprehensive AI-powered inventory management platform tailored for hospitals, public health centers, and pharma distribution networks. It addresses stockouts, wastage, and manual errors by combining real-time inventory tracking, expiry monitoring, and AI-driven demand forecasting. The system generates predictive replenishment alerts, automatic purchase orders, and multi-channel notifications (SMS, email, dashboard). Deployable on cloud, on-prem, or sovereign hospital clouds, it enhances operational efficiency, reduces critical stockout events, and supports government health scheme compliance."
},{
  title:"AI-Driven Generator & Mud Pump Optimization Platform",
  description: "An AI-based scheduling and diagnostics platform for oil and gas rigs to optimize generator and mud pump operations. The system integrates real-time SCADA/EDR/BDR data feeds, calculating equipment health scores from vibration, temperature, and fault logs. It dynamically assigns shift-wise runtime schedules using AI models for load balancing, fuel efficiency optimization, and predictive maintenance planning. Includes advanced analytics dashboards featuring Gantt charts, time series insights, fuel consumption heatmaps, and anomaly detection reporting — reducing fuel costs, minimizing unplanned shutdowns, and extending equipment lifespan."
}]