import { Benefit, Feature } from "@/types/declaration";

export const PrismaCloud: Feature[] = [
  {
    title: "Cloud Workload Protection (CWPP)",
    description:
      "Provides deep security capabilities for workloads with threat detection, real-time monitoring, and vulnerability management.",
  },
  {
    title: "Advanced Threat Intelligence",
    description:
      "Uses Falcon's global threat intelligence to identify and block malicious activities targeting cloud workloads.",
  },
  {
    title: "Cloud Security Posture Management (CSPM)",
    description:
      "Helps organizations monitor and maintain secure configurations in cloud environments, ensuring compliance with security best practices.",
  },
  {
    title: "Vulnerability Management",
    description:
      "Identifies and patches vulnerabilities in cloud workloads to prevent attacks.",
  },
  {
    title: "Endpoint Detection and Response (EDR)",
    description:
      "Extends CrowdStrike's EDR capabilities to cloud workloads, offering proactive threat hunting and investigation.",
  },
];

export const PrismaCloudBenefits: Benefit[] = [
  {
    text: "Unified threat detection and response with the full power of the CrowdStrike Falcon platform.",
    position: "left",
  },
  {
    text: "Automated and continuous monitoring of cloud workloads with proactive threat intelligence and actionable insights.",
    position: "right",
  },
  {
    text: "Scalable protection with no impact on workload performance.",
    position: "left",
  },
];