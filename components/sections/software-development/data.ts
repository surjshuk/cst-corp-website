/* ----- ----- ----- ----- ----- Appian ----- ----- ----- ----- ----- */

import { Feature } from "@/types/declaration";

export const AppianData = [
  {
    id: "appian-banking",
    title: "Banking",
    heading: "Transforming Financial Services with Innovation",
    description: [
      {
        subheading:
          "The banking sector requires agility to respond to evolving customer expectations, compliance requirements, and market conditions. Appian’s low-code platform empowers banks to enhance service delivery while ensuring operational efficiency.",
        subdescription: [
          {
            key: "Loan Processing",
            value: "Streamline end-to-end loan origination, approval, and servicing with automated workflows."
          },
          {
            key: "Customer Onboarding",
            value: "Create personalized, seamless onboarding experiences that reduce time to account activation."
          },
          {
            key: "Risk and Compliance Management",
            value: "Centralize regulatory processes, monitor risk, and ensure adherence to global standards."
          },
          {
            key: "Fraud Detection and Prevention",
            value: "Integrate real-time data insights and machine learning to proactively identify fraudulent activities."
          },
          {
            key: "Customer Service Excellence",
            value: "Enable omnichannel engagement through a unified platform that connects customers with the right support instantly."
          }
        ]
      }
    ]
  },
  {
    id: "appian-healthcare",
    title: "Healthcare",
    heading: "Modernizing Patient Care and Operational Efficiency",
    description: [
      {
        subheading:
          "Healthcare providers must balance patient-centric care with regulatory compliance and operational demands. Appian helps streamline clinical and administrative workflows for improved outcomes.",
        subdescription: [
          {
            key: "Patient Onboarding",
            value: "Automate appointment scheduling, document collection, and insurance verification."
          },
          {
            key: "Clinical Data Management",
            value: "Centralize patient records, test results, and treatment histories securely."
          },
          {
            key: "Regulatory Compliance",
            value: "Ensure adherence to HIPAA and local health regulations through workflow automation."
          },
          {
            key: "Medical Billing Automation",
            value: "Improve claim accuracy and reduce denials with automated billing workflows."
          },
          {
            key: "Remote Patient Monitoring",
            value: "Integrate IoT health devices for continuous patient health tracking and alerts."
          }
        ]
      }
    ]
  },
  {
    id: "appian-energy",
    title: "Energy",
    heading: "Driving Efficiency in Energy Operations",
    description: [
      {
        subheading:
          "Energy enterprises face increasing demand for sustainable, reliable, and efficient energy management. Appian offers digital solutions to optimize field operations and asset performance.",
        subdescription: [
          {
            key: "Asset Lifecycle Management",
            value: "Track, maintain, and optimize energy infrastructure assets through centralized workflows."
          },
          {
            key: "Field Service Management",
            value: "Automate field crew dispatch, job scheduling, and maintenance reporting."
          },
          {
            key: "Compliance & Safety Reporting",
            value: "Ensure operational safety standards and regulatory compliance with real-time reporting."
          },
          {
            key: "Incident Management",
            value: "Respond swiftly to operational hazards or service interruptions with automated escalation."
          },
          {
            key: "Energy Consumption Analytics",
            value: "Monitor and analyze consumption patterns for improved sustainability and cost-efficiency."
          }
        ]
      }
    ]
  },
  {
    id: "appian-retail",
    title: "Retail",
    heading: "Enhancing Retail Operations and Customer Experience",
    description: [
      {
        subheading:
          "Retailers must deliver seamless experiences while optimizing backend operations. Appian enables faster decision-making and customer engagement through intelligent automation.",
        subdescription: [
          {
            key: "Order Management",
            value: "Streamline order processing, inventory allocation, and fulfillment workflows."
          },
          {
            key: "Customer Loyalty Management",
            value: "Automate loyalty program enrollments, point redemptions, and reward notifications."
          },
          {
            key: "Omnichannel Engagement",
            value: "Provide consistent service across online, in-store, and mobile touchpoints."
          },
          {
            key: "Fraud Detection",
            value: "Detect and prevent promotional abuse and payment fraud in real time."
          },
          {
            key: "Store Operations Automation",
            value: "Digitize daily checklists, safety audits, and stock monitoring processes."
          }
        ]
      }
    ]
  },
  {
    id: "appian-government",
    title: "Manufacturing",
    heading: "Accelerating Smart Manufacturing Operations",
    description: [
      {
        subheading:
          "Manufacturers strive for operational excellence, supply chain agility, and product quality. Appian empowers manufacturers to automate critical processes for better responsiveness and control.",
        subdescription: [
          {
            key: "Production Planning",
            value: "Optimize production schedules, material planning, and resource allocation."
          },
          {
            key: "Quality Assurance Automation",
            value: "Digitize inspection processes and non-conformance reporting."
          },
          {
            key: "Supply Chain Visibility",
            value: "Track supplier performance and delivery status in real time."
          },
          {
            key: "Maintenance Management",
            value: "Automate predictive maintenance schedules and asset tracking."
          },
          {
            key: "Product Recall Management",
            value: "Respond swiftly to safety incidents with automated recall workflows."
          }
        ]
      }
    ]
  }
];

export const appianFeatures: Feature[] = [
  {
    title: "Cloud Security Posture Management (CSPM)",
    description:
      "Automates the detection of misconfigurations and security risks in cloud services, preventing potential breaches and ensuring compliance with industry standards such as HIPAA, PCI DSS, and GDPR.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Workload Protection",
    description:
      "Protects cloud workloads, containers, and serverless applications from vulnerabilities and threats.",
    // image: PLACEHOLDER,
  },
  {
    title: "Identity and Access Management (IAM) Security",
    description:
      "Monitors and enforces least-privilege access policies to prevent unauthorized access.",
    // image: PLACEHOLDER,
  },
  {
    title: "Cloud Data Encryption",
    description:
      "Ensures sensitive data in the cloud is encrypted at rest and in transit using industry-standard encryption protocols.",
    // image: PLACEHOLDER,
  },
  {
    title: "Compliance Monitoring",
    description:
      "Continuously monitors cloud environments to ensure adherence to regulatory and organizational compliance requirements.",
    // image: PLACEHOLDER,
  },
];
