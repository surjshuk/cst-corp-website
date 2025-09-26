/* ----- ----- ----- ----- ----- Appian ----- ----- ----- ----- ----- */

import { appian, mspowerbi, outlow, outsys } from "@/app/assets";
import { Feature } from "@/types/declaration";

export const AppianData = [
  {
    id: "appian-banking",
    title: "Banking",
    heading: "Transforming Financial Services with Innovation",
    image:appian,
    description: 
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
    
  },
  {
    id: "appian-healthcare",
    title: "Healthcare",
    heading: "Improving Patient Care and Operational Efficiency",
        image:appian,
    description: 
      {
        subheading:
          "In healthcare, Appian’s solutions prioritize patient outcomes and operational effectiveness. Its low-code capabilities address complex processes, regulatory demands, and the need for interoperability.",
        subdescription: [
          {
            key: "Patient Intake and Scheduling",
            value: "Automate patient onboarding and appointment scheduling to enhance efficiency and reduce wait times.."
          },
          {
            key: "Care Coordination",
            value: "Foster collaboration among providers by centralizing patient data and treatment plans in a unified interface."
          },
          {
            key: "Regulatory Compliance",
            value: "Ensure adherence to HIPAA and local health regulations through workflow automation."
          },
          {
            key: "Clinical Trials Management",
            value: "Simplify recruitment, tracking, and compliance for clinical trials, accelerating time-to-market for new therapies."
          },
          {
            key: "Revenue Cycle Optimization",
            value: " Streamline billing and collections while maintaining compliance with healthcare regulations."
          },
          {
            key: "Regulatory Reporting",
            value: " Automate the generation of compliance reports to meet standards such as HIPAA and GDPR. ."
          }
        ]
      }
    
  },
  {
    id: "appian-energy",
    title: "Energy",
    heading: "Enhancing Sustainability and Operational Excellence",
        image:appian,
    description: 
      {
        subheading:
          "The energy sector faces challenges like fluctuating demand, regulatory changes, and the push toward sustainability. Appian delivers solutions that improve efficiency and adapt to industry changes.",
        subdescription: [
          {
            key: "Asset Management",
            value: "Monitor and manage energy assets, from power plants to pipelines, in real-time."
          },
          {
            key: "Field Service Optimization",
            value: "Automate scheduling and tracking of field operations to minimize downtime and maximize efficiency."
          },
          {
            key: "Regulatory Compliance",
            value: "Simplify compliance with environmental and safety regulations through automated reporting and monitoring."
          },
          {
            key: "Sustainability Initiatives",
            value: "Leverage data insights to optimize renewable energy projects and reduce carbon footprints."
          },
          {
            key: "Supply Chain Visibility",
            value: "Gain real-time insights into supply chain operations, improving transparency and risk mitigation."
          }
        ]
      }
    
  },
  {
    id: "appian-retail",
    title: "Retail",
    heading: "Elevating Customer Experience and Streamlining Operations",
        image:appian,
    description: 
      {
        subheading:
          "Retailers must adapt to rapidly changing customer behaviors and market trends. Appian’s low-code platform helps businesses deliver personalized experiences while optimizing backend processes.",
        subdescription: [
          {
            key: "Omnichannel Customer Engagement",
            value: "Provide seamless, personalized experiences across in-store, online, and mobile channels."
          },
          {
            key: "Inventory Management",
            value: "Automate inventory tracking and replenishment to avoid stockouts or overstocking."
          },
          {
            key: "Loyalty Programs",
            value: "Create dynamic, data-driven loyalty initiatives that enhance customer retention."
          },
          {
            key: "Fraud Prevention",
            value: "Detect and prevent fraudulent activities in e-commerce and payment processes."
          },
          {
            key: "Workforce Optimization",
            value: "Manage scheduling, task allocation, and performance tracking for retail employees."
          }
        ]
      }
    
  },
  {
    id: "appian-government",
    title: "Government",
    heading: "Enhancing Public Services and Accountability",
        image:appian,
    description: 
      {
        subheading:
          "Appian empowers government agencies to modernize operations, enhance citizen engagement, and increase transparency. Its low-code platform simplifies the development of secure, scalable applications for public sector needs.",
        subdescription: [
          {
            key: "Citizen Service Portals",
            value: "Create user-friendly platforms for submitting requests, tracking applications, and accessing public services."
          },
          {
            key: "Case Management",
            value: "Manage investigations, grants, and benefit applications with automated workflows and real-time updates."
          },
          {
            key: "Regulatory Compliance",
            value: "Streamline compliance reporting and document management for public policies and audits."
          },
          {
            key: "Emergency Response Coordination",
            value: "Facilitate real-time communication and resource allocation during crises."
          },
          {
            key: "Infrastructure Modernization",
            value: "Enable digital transformation of legacy systems to enhance efficiency and scalability."
          }
        ]
      }
    
  },
  {
    id: "appian-manufacturing",
    title: "Manufacturing",
    heading: "Driving Innovation and Operational Excellence",
        image:appian,
    description: 
      {
        subheading:
          "Manufacturers must optimize production, supply chain operations, and workforce management to stay competitive. Appian’s solutions provide the tools needed to innovate while ensuring efficiency and quality.",
        subdescription: [
          {
            key: "Production Optimization",
            value: " Monitor production data in real-time, identify inefficiencies, and streamline workflows."
          },
          {
            key: "Quality Assurance",
            value: "Centralize supplier information, contracts, and performance metrics for improved relationships."
          },
          {
            key: "Supplier Management",
            value: "Streamline compliance reporting and document management for public policies and audits."
          },
          {
            key: "Predictive Maintenance",
            value: " Leverage IoT and AI to identify potential equipment failures and schedule proactive maintenance."
          },
          {
            key: "Compliance Management",
            value: "Ensure adherence to safety and environmental regulations through automated monitoring and reporting."
          }
        ]
      }
    
  }
];

export const AppianFeatures: Feature[] = [
  {
    title: "Rapid Development",
    description:
      "Build enterprise-grade applications in weeks, not months.",
    // image: PLACEHOLDER,
  },
  {
    title: "Unified Platform",
    description:
      "Connect data, processes, and people for end-to-end visibility and collaboration.",
    // image: PLACEHOLDER,
  },
  {
    title: "Identity and Access Management (IAM) Security",
    description:
      "Monitors and enforces least-privilege access policies to prevent unauthorized access.",
    // image: PLACEHOLDER,
  },
  {
    title: "Security and Compliance",
    description:
      "Ensure adherence to industry regulations with built-in security and governance capabilities.",
    // image: PLACEHOLDER,
  },
  {
    title: "Scalability",
    description:
      "Scale effortlessly to meet growing business needs across any industry.",
    // image: PLACEHOLDER,
  },
  
  {
    title: "Enhanced Automation",
    description:
      "Reduce manual effort, eliminate bottlenecks, and improve accuracy with intelligent automation.",
    // image: PLACEHOLDER,
  },
];

/* ----- ----- ----- ----- ----- outsystems ----- ----- ----- ----- ----- */
export const outSystemsData = [
  {
    id: "oustsystem-1",
    title: "outSystems",
    heading: "Full-Stack Development Made Simple",
    image:outlow,
    description: 
      {
        subheading:
          "OutSystems provides a robust full-stack development environment that caters to all aspects of application creation—from frontend design to backend logic and database management.",
        subdescription: [
          {
            key: "Frontend Development",
            value: " Create intuitive, visually stunning user interfaces using a drag-and-drop interface that supports responsive design across devices. Tailor your applications to deliver seamless user experiences without requiring extensive coding expertise.."
          },
          
          {
            key: "Backend Development",
            value: "Simplify complex business processes with visual workflows and logic modeling. OutSystems ensures seamless integration between frontend and backend components for a cohesive development experience.."
          },
          
          {
            key: "Database Management",
            value: " Build and manage relational databases effortlessly. OutSystems provides a centralized, intuitive platform for designing data models, ensuring consistency, scalability, and security."
          }
        ]
      }
    
  },
  {
    id: "outSytems-2",
    title: "outSytems-2",
    heading: "Improving Patient Care and Operational Efficiency",
     image:outlow,
    description: 
      {
        subheading:
          "In healthcare, Appian’s solutions prioritize patient outcomes and operational effectiveness. Its low-code capabilities address complex processes, regulatory demands, and the need for interoperability.",
        subdescription: [
          {
            key: "Patient Intake and Scheduling",
            value: "Automate patient onboarding and appointment scheduling to enhance efficiency and reduce wait times.."
          },
          {
            key: "Clinical Data Management",
            value: "Care Coordination: Foster collaboration among providers by centralizing patient data and treatment plans in a unified interface."
          },
          {
            key: "Clinical Trials Management",
            value: "Simplify recruitment, tracking, and compliance for clinical trials, accelerating time-to-market for new therapies."
          },
          {
            key: "Revenue Cycle Optimization",
            value: "Streamline billing and collections while maintaining compliance with healthcare regulations."
          },
          {
            key: "Regulatory Reporting",
            value: "Automate the generation of compliance reports to meet standards such as HIPAA and GDPR. "
          }
        ]
      }
    
  },
  {
    id: "outSystems-3",
    title: "outSystems-3",
    heading: "Generative AI Toolset",
     image:outlow,
    description: 
      {
        subheading:
          "Energy enterprises face increasing demand for sustainable, reliable, and efficient energy management. Appian offers digital solutions to optimize field operations and asset performance.",
        subdescription: [
          {
            key: "Accelerated Development",
            value: "Use AI to automatically generate code snippets, workflows, and even complete application components, drastically reducing development time."
          },
          {
            key: "Enhanced Collaboration",
            value: "AI-powered recommendations help developers and non-technical stakeholders collaborate effectively, ensuring the final product aligns with business needs."
          },
          {
            key: "Intelligent Debugging",
            value: "OutSystems GenAI tools proactively identify and resolve potential issues, ensuring application stability and performance from the start."
          },
          
        ]
      }
    
  },
  {
    id: "outSystems-4",
    title: "outSystems-4",
    heading: "Pre-Built Integrations for Seamless Connectivity",
     image:outlow,
    description: 
      {
        subheading:
          "OutSystems simplifies integration with a comprehensive library of pre-built connectors and APIs.",
        subdescription: [
          {
            key: "Enterprise Systems",
            value: "Easily integrate with CRM, ERP, HR, and other enterprise platforms, including SAP, Salesforce, and Microsoft Dynamics."
          },
          {
            key: "Custom APIs",
            value: "Develop and deploy custom APIs effortlessly, enabling your applications to integrate with virtually any system or service."
          },
        ]
      }
    
  },
  {
    id: "outSystems-5",
    title: "outSystems-5",
    heading: "Advanced Automation Capabilities",
     image:outlow,
    description: 
      {
        subheading:
          "OutSystems takes automation to the next level, helping organizations streamline operations and improve efficiency.",
        subdescription: [
          {
            key: "Process Automation",
            value: "Design, execute, and monitor business workflows using an intuitive visual interface. Automate repetitive tasks to free up resources for higher-value activities."
          },
          {
            key: "DevOps Automation",
            value: "Built-in DevOps tools simplify application deployment, testing, and monitoring, ensuring continuous delivery with minimal downtime."
          },
          {
            key: "AI-Driven Insights",
            value: "Leverage AI-powered analytics to identify inefficiencies, predict outcomes, and optimize automated workflows for better business results."
          },
    
        ]
      }
    
  }
];

export const outSystemsFeatures: Feature[] = [
  {
    title: "Rapid Time-to-Market",
    description:
      "Build and deploy applications in weeks, not months, giving your business a competitive edge.",
    // image: PLACEHOLDER,
  },
  {
    title: "Enterprise-Grade Performance",
    description:
      "Enterprise-Grade Performance: Deliver secure, scalable, and high-performing applications designed to meet the most demanding business needs.",
    // image: PLACEHOLDER,
  },
  {
    title: "Flexibility for the Future",
    description:
      "Adapt to changing requirements with ease, thanks to the platform’s modular design and robust support for customizations.",
    // image: PLACEHOLDER,
  },
  {
    title: "Enhanced Collaboration",
    description:
      "Empower both technical and non-technical teams to contribute, ensuring applications are aligned with your business goals.",
    // image: PLACEHOLDER,
  },
 
];

/* ----- ----- ----- ----- ----- outsystemsAnother ----- ----- ----- ----- ----- */

export const outSystemsAnotherData = [
  {
    id: "oustsystem-banking",
    title: "Banking",
    heading: "Digital Transformation in Financial Services",
    image:outsys,
    description: 
      {
        subheading:
          "OutSystems helps banks and financial institutions modernize their operations, deliver superior customer experiences, and maintain compliance with ever-evolving regulations.",
        subdescription: [
          {
            key: "Streamlined Customer",
            value: "Experiences: Create seamless digital banking solutions, including mobile apps, customer portals, and chatbots, to enhance engagement and satisfaction."
          },
          
          {
            key: "Core Banking Modernization",
            value: "Migrate legacy systems to modern, scalable platforms while maintaining operational continuity."
          },
          
          {
            key: "Fraud Detection and Risk Management",
            value: "Leverage advanced analytics and AI-powered tools to enhance fraud prevention and improve decision-making processes."
          },
          {
            key: "Regulatory Compliance",
            value: "Automate compliance processes to ensure adherence to complex financial regulations and standards."
          },
          
          {
            key: "Personalized Financial Services",
            value: "Develop solutions that enable personalized financial planning, investment tracking, and account management."
          }
        ]
      }
    
  },
  {
    id: "outSytems-healthcare",
    title: "Healthcare",
    heading: "Transforming Patient Care and Operations",
     image:outsys,
    description: 
      {
        subheading:
          "OutSystems enables healthcare organizations to deliver better patient outcomes through innovative, secure, and scalable solutions.",
        subdescription: [
          {
            key: "Patient-Centric Applications",
            value: " Build patient portals, telehealth platforms, and mobile health apps to improve accessibility and engagement."
          },
          {
            key: "Streamlined Clinical Workflows",
            value: "Automate scheduling, billing, and patient records to reduce administrative burdens and improve efficiency."
          },
          {
            key: "Interoperability and Data Integration",
            value: "Seamlessly integrate with EHR/EMR systems and other healthcare platforms for a unified view of patient data."
          },
          {
            key: "Compliance and Security",
            value: " Ensure adherence to healthcare regulations such as HIPAA and GDPR while safeguarding sensitive patient information."
          },
          {
            key: "Remote Monitoring and IoT",
            value: "Leverage IoT-enabled devices and applications for real-time patient monitoring and proactive care."
          }
        ]
      }
    
  },
  {
    id: "outSystems-energy",
    title: "Energy",
    heading: "Driving Efficiency and Sustainability",
     image:outsys,
    description: 
      {
        subheading:
          "OutSystems helps energy companies navigate the complexities of a rapidly evolving industry by enabling digital transformation and operational optimization.",
        subdescription: [
          {
            key: "Asset Management",
            value: "Create applications to monitor, maintain, and optimize energy assets in real-time, reducing downtime and operational costs."
          },
          {
            key: "Smart Grid Solutions",
            value: "Develop platforms to manage smart grid operations, including energy distribution and consumption monitoring."
          },
          {
            key: "Regulatory Compliance",
            value: "Automate reporting and compliance processes to meet strict environmental and energy regulations."
          },
          {
            key: "Customer Engagement",
            value: "Build customer portals and mobile apps to enhance service delivery and improve satisfaction."
          },
          {
            key: "Sustainability Initiatives",
            value: "Enable solutions for renewable energy management, carbon tracking, and sustainability reporting."
          },
          
        ]
      }
    
  },
  {
    id: "outSystems-retail",
    title: "Retail",
    heading: "Enhancing Customer Experiences and Operational Efficiency",
     image:outsys,
    description: 
      {
        subheading:
          "OutSystems empowers retailers to stay competitive by enabling agile, data-driven solutions that elevate customer experiences and streamline operations.",
        subdescription: [
          {
            key: "Omnichannel Experiences",
            value: "Develop integrated e-commerce platforms, mobile apps, and in-store technologies for a seamless customer journey."
          },
          {
            key: "Personalized Marketing",
            value: "Leverage customer data to create personalized promotions, loyalty programs, and targeted campaigns."
          },
          {
            key: "Inventory and Supply Chain Management",
            value: "Build solutions to optimize inventory tracking, supplier collaboration, and logistics."
          },
          {
            key: "Point-of-Sale (POS) Innovation",
            value: "Modernize POS systems with real-time integration to ensure a consistent shopping experience."
          },
          {
            key: "Data Analytics and Insights",
            value: "Harness AI and analytics to gain actionable insights into customer behavior and sales performance."
          },
        ]
      }
    
  },
  {
    id: "outSystems-govenment",
    title: "Government",
    heading: "Accelerating Public Sector Innovation",
     image:outsys,
    description: 
      {
        subheading:
          "OutSystems helps governments and public sector organizations deliver citizen-centric services while improving efficiency and reducing costs.",
        subdescription: [
          {
            key: "Citizen Services Portals",
            value: "Create easy-to-use digital platforms for tax filings, permits, benefits, and other government services."
          },
          {
            key: "Legacy System Modernization",
            value: "Transition outdated systems to modern, secure platforms without disrupting essential services."
          },
          {
            key: "Emergency Response Applications",
            value: " Build applications for disaster management, public health tracking, and crisis response."
          },
          {
            key: "Regulatory Compliance",
            value: "Ensure adherence to data protection laws and security standards while delivering digital services."
          },
          {
            key: "Operational Automation",
            value: "Automate processes like procurement, resource allocation, and case management to improve efficiency."
          },
    
        ]
      }
    
  },
  {
    id: "outSystems-manufacturing",
    title: "Manufacturing",
    heading: "Driving Smart Factory and Industry 4.0 Initiatives",
     image:outsys,
    description: 
      {
        subheading:
          "OutSystems equips manufacturers with the tools to innovate, optimize production, and maintain a competitive edge in the era of Industry 4.0.",
        subdescription: [
          {
            key: "Smart Factory Applications",
            value: "Develop IoT-enabled solutions for real-time monitoring, predictive maintenance, and production optimization."
          },
          {
            key: "Supply Chain Optimization",
            value: "Build platforms to enhance supplier collaboration, track shipments, and manage inventory efficiently."
          },
          {
            key: "Quality Control and Compliance",
            value: "Automate quality assurance processes and ensure compliance with industry regulations."
          },
          {
            key: "Employee Productivity Tools",
            value: "Create applications to streamline workflows, training programs, and resource allocation."
          },
          {
            key: "Data-Driven Decision Making",
            value: "Leverage AI and analytics to identify trends, reduce waste, and improve operational efficiency."
          },
    
        ]
      }
    
  }
];

export const outSystemsAnotherFeatures: Feature[] = [
{
    title: "Rapid Development",
    description:
      "Build and deploy applications faster than ever, enabling your organization to respond to market demands and operational needs with agility.",
    // image: PLACEHOLDER,
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with existing systems, third-party tools, and emerging technologies to create a unified ecosystem.",
    // image: PLACEHOLDER,
  },
  {
    title: "Security and Compliance",
    description:
      "Built-in security features and compliance support ensure your applications meet industry standards.",
    // image: PLACEHOLDER,
  },
  {
    title: "Scalability and Flexibility",
    description:
      "Whether for external, core, or internal applications, OutSystems ensures your solutions grow with your business.",
    // image: PLACEHOLDER,
  },
  {
    title: "User-Centric Design",
    description:
      "Deliver intuitive, engaging applications that meet the expectations of customers and employees alike.",
    // image: PLACEHOLDER,
  },
 
];

/* ----- ----- ----- ----- ----- power Bi ----- ----- ----- ----- ----- */
export const powerBiData = [
  {
    id: "powerBi-banking",
    title: "Banking",
    heading: "Enhancing Financial Insights and Process Automation",
    image: mspowerbi,
    description: 
      {
        subheading:
          "Power BI",
        subdescription: [
          {
            key: "Data-Driven Decision Making",
            value: "Analyze customer data, transaction patterns, and market trends in real-time to identify opportunities and mitigate risks."
          },
          
          {
            key: "Fraud Detection",
            value: "Build dashboards that monitor transactional data and flag anomalies to proactively identify potential fraud."
          },
          
          {
            key: "Customer Segmentation",
            value: "Visualize customer demographics and behaviors to drive targeted marketing campaigns and personalized financial products."
          },
          {
            key: "Regulatory Compliance",
            value: "Centralize compliance reporting and monitor adherence to financial regulations."
          },
          
          {
            key: "Loan Processing Automation",
            value: "Streamline loan approval processes by automating document collection, verification, and notifications."
          },
          {
            key: "Fraud Alerts",
            value: "Set up workflows to notify teams instantly when fraudulent activities are detected."
          },
          {
            key: "Account Management",
            value: "Automate account closure and maintenance workflows to reduce manual errors and improve efficiency."
          },
        ]
      }
    
  },
  {
    id: "powerBi-healthcare",
    title: "Healthcare",
    heading: "Empowering Patient Care and Operational Efficiency",
     image: mspowerbi,
    description: 
      {
        subheading:
          "Power BI",
        subdescription: [
          {
            key: "Patient Analytics",
            value: "Monitor patient data, treatment outcomes, and resource utilization to improve care quality."
          },
          {
            key: "Hospital Operations",
            value: "Visualize metrics like bed occupancy rates, staffing schedules, and supply levels for optimized resource management."
          },
          {
            key: "Population Health Management",
            value: "Use data models to identify trends in population health and predict areas needing intervention."
          },
          {
            key: "Regulatory Reporting",
            value: "Simplify reporting for compliance with HIPAA, GDPR, and other healthcare standards."
          },
          {
            key: "Appointment Scheduling",
            value: " Automate scheduling and reminders to reduce no-shows and streamline clinic workflows."
          },
          {
            key: "Claims Processing",
            value: "Speed up insurance claims processing by automating approval workflows and documentation verification."
          },
          {
            key: "Patient Follow-Up",
            value: "Trigger follow-up reminders and alerts for patients post-treatment, enhancing continuity of care."
          },
        ]
      }
    
  },
  {
    id: "powerBi-energy",
    title: "Energy",
    heading: "Optimizing Operations and Enhancing Sustainability",
     image: mspowerbi,
    description: 
      {
        subheading:
          "Power BI",
        subdescription: [
          {
            key: "Energy Consumption Analytics",
            value: "Visualize energy usage patterns to optimize operations and reduce costs."
          },
          {
            key: "Asset Performance Monitoring",
            value: "Track and analyze the health of assets like pipelines, grids, and turbines in real-time."
          },
          {
            key: "Sustainability Reporting",
            value: "Generate reports to monitor carbon emissions and align with sustainability goals."
          },
          {
            key: "Supply and Demand Forecasting",
            value: "Use predictive analytics to anticipate energy demand and streamline resource allocation."
          },
          {
            key: "Field Service Operations",
            value: "Automate job scheduling and dispatch for maintenance teams."
          },
          {
            key: "Incident Management",
            value: "Create workflows for immediate notifications and responses to outages or equipment failures."
          },
          {
            key: "Compliance Automation",
            value: "Ensure adherence to safety standards by automating documentation and audit processes"
          },
          
        ]
      }
    
  },
  {
    id: "powerBi-retail",
    title: "Retail",
    heading: "Enhancing Customer Experiences and Operational Efficiency",
     image: mspowerbi,
    description: 
      {
        subheading:
          "Power BI",
        subdescription: [
          {
            key: "Customer Insights",
            value: "Gain a 360-degree view of customer preferences, purchasing behavior, and lifetime value."
          },
          {
            key: "Sales Performance",
            value: "Monitor sales data in real-time to identify top-performing products and regions."
          },
          {
            key: "Inventory Management",
            value: "Analyze inventory levels to ensure optimal stock levels and reduce wastage."
          },
          {
            key: "Marketing Analytics",
            value: "Measure the success of campaigns and refine strategies based on performance data."
          },
          {
            key: "Order Processing",
            value: "Automate order fulfillment workflows, from inventory checks to shipment tracking."
          },
          {
            key: "Customer Support",
            value: "Trigger automated responses and escalations for customer inquiries to improve service."
          },
          {
            key: "Loyalty Program Management",
            value: "Simplify loyalty program administration with automated point tracking and rewards notifications."
          },
        ]
      }
    
  },
  {
    id: "powerBi-govenment",
    title: "Government",
    heading: "Enhancing Public Services and Transparency",
     image: mspowerbi,
    description: 
      {
        subheading:
          "Power BI",
        subdescription: [
          {
            key: "Public Service Dashboards",
            value: "Provide real-time data on public programs, resource allocation, and citizen engagement."
          },
          {
            key: "Budget Management",
            value: "Visualize spending and budget trends to optimize resource allocation and reduce waste."
          },
          {
            key: "Crisis Management",
            value: "Use data to monitor and respond to emergencies, such as natural disasters or public health crises."
          },
          {
            key: "Transparency Reporting",
            value: "Publish dashboards for public access to foster trust and accountability."
          },
          {
            key: "Citizen Requests",
            value: "Automate workflows for processing requests like permits, applications, and complaints."
          },
          {
            key: "Document Management",
            value: "Streamline the creation, approval, and storage of official documents."
          },
          {
            key: "Inspection Scheduling",
            value: "Automate inspections for public infrastructure and generate reports instantly."
          },
    
        ]
      }
    
  },
  {
    id: "powerBi-manufacturing",
    title: "Manufacturing",
    heading: "Driving Innovation and Operational Excellence",
     image: mspowerbi,
    
    description: 
      {
        subheading:
          "Power BI",
        subdescription: [
          {
            key: "Production Monitoring",
            value: "Analyze production data to identify inefficiencies and optimize workflows."
          },
          {
            key: "Quality Control",
            value: "Monitor product quality metrics to reduce defects and enhance customer satisfaction."
          },
          {
            key: "Supply Chain Analytics",
            value: " Gain real-time insights into supply chain performance and mitigate risks."
          },
          {
            key: "Workforce Productivity",
            value: "Visualize employee performance and allocate resources effectively."
          },
          {
            key: "Equipment Maintenance",
            value: "Automate maintenance schedules and alert teams to potential issues before they escalate."
          },
          {
            key: "Order Tracking",
            value: "Streamline order processing and tracking from production to delivery."
          },
          {
            key: "Inventory Replenishment",
            value: " Automate stock reordering to prevent production delays."
          },
          {
            key: "Compliance Reporting",
            value: "Ensure adherence to industry standards by automating documentation and audit workflows."
          },
    
        ]
      }
    
  }
];

export const powerBiFeatures: Feature[] = [
{
    title: "Seamless Integration",
    description:
      "Easily connect with existing systems and external tools for a unified digital ecosystem.",
    // image: PLACEHOLDER,
  },
  {
    title: "Real-Time Insights",
    description:
      "Empower decision-makers with instant access to critical data and trends.",
    // image: PLACEHOLDER,
  },
  {
    title: "Enhanced User Experiences",
    description:
      "Deliver personalized, intuitive, and engaging applications to internal and external users alike.",
    // image: PLACEHOLDER,
  },
  {
    title: "Scalable and Customizable",
    description:
      "Tailor solutions to meet specific business needs, from individual departments to enterprise-wide applications.",
    // image: PLACEHOLDER,
  },
  {
    title: "Efficiency Through Automation",
    description:
      "Minimize manual effort and reduce errors by automating routine processes.",
    // image: PLACEHOLDER,
  },
 
];