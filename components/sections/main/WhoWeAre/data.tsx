import { AUTONOMY, cyberSecBG1, cyberSecBG2, mainBG3, mainBG4 } from "@/app/assets";
import { MainSpecialType } from "./type";

export const mainTabData:MainSpecialType[] = [
  {
    heading: "AI Drone Technology",
    image:AUTONOMY,
    description: [
      `Proprietary autonomous navigation for precise, independent flight.`,
      `Advanced payloads including LiDAR and EO/IR for versatile mission capabilities.`,
      `Real-time AI enabling GPS-denied operations and rapid decision-making.`,
      `Applications in defense ISR, geospatial mapping, and safe industrial inspections.`
    ]
  },
  {
    heading: "Pythia AI",
     image:cyberSecBG1,
    description: [
      `Utilizes sensor and EDR data from rigs for continuous monitoring.`,
      `Detects anomalies in pressure, vibration, torque, flow, and temperature.`,
      `Forecasts failures and models Remaining Useful Life (RUL) of assets.`,
      `Provides actionable insights to maximize operational foresight and uptime.`
    ]
  },
  {
    heading: "AI Digital Twin Technology",
    image:cyberSecBG2,
    description: [
      `Creates virtual replicas of physical assets and systems.`,
      `Predicts failures before they occur to reduce downtime.`,
      `Optimizes efficiency and slashes operational costs.`,
      `Drives innovation and future-proofs business processes.`
    ]
  },
  {
   
    heading: "AI-Enabled Medical Inventory Management",
    image:mainBG3,
    description: [
      `Automates tracking of medicines for hospitals, pharmacies, and providers.`,
      `Prevents losses from overstocking, shortages, or expiries.`,
      `Ensures uninterrupted availability of critical medications.`,
      `Improves overall operational efficiency in healthcare supply chains.`
    ]
  },
  {
    heading: "SentinelOne: A Leader for 5 Consecutive Years",
    image:mainBG4,
    description: [
      `Recognized as a Leader in the Magic Quadrant for five years in a row.`,
      `SentinelOne Singularity serves as the core Endpoint Protection Platform (EPP) product.`,
      `Supports cloud-delivered (including GovCloud), hybrid, and on-premises (including air-gapped) EPP management.`,
      `Offers additional workspace security controls such as identity protection.`
    ]
  }
];