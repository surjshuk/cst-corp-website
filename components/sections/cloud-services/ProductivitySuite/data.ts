
import { keygooglework } from "@/app/assets";
import { Feature } from "../../AI/feature";
import { CloudSpecialType } from "../type";

export interface Tab {
  id: string;
  title: string;
  description?: string;
}

export const msDesc:string[] =[
`Microsoft Office 365 is a leading cloud-based productivity platform that empowers organizations with cutting-edge tools to collaborate, communicate, and innovate. Designed to enhance efficiency and streamline workflows, Office 365 combines industry-standard applications, seamless cloud integration, and enterprise-grade security into a single, scalable solution.`
]



export const whyMs:string[] = [
    `Microsoft Office 365 is a subscription-based service that delivers a suite of productivity applications and services. It includes popular tools such as Word, Excel, PowerPoint, and Outlook, as well as advanced collaboration tools like Microsoft Teams and OneDrive. As a cloud-first platform, Office 365 ensures you have access to the latest features, updates, and security enhancements, anytime and anywhere.`,
    `Whether you are a small business, a global enterprise, or an individual user, Office 365 offers tailored plans to meet diverse needs while providing unparalleled flexibility and value.`
]



export const msTabData:CloudSpecialType[] = [
{
    
    title:'Key Benefits of Microsoft Office 365',
    },
  {
    
    title:'Enhanced Productivity with Best-in-Class Tools',
    description:`From creating polished presentations to managing email and analyzing data, Office 365 equips teams with powerful tools to excel in their work. Applications like Word, Excel, and PowerPoint are intuitive, feature-rich, and built for maximum efficiency.`
},
  {
    
    title:'Seamless Collaboration',
    description:`Microsoft Office 365 fosters teamwork through advanced collaboration tools such as: Microsoft Teams: A unified platform for chat, video conferencing, file sharing, and team collaboration, •	SharePoint: A robust content management system that enables team collaboration and document sharing, •	OneDrive: A secure cloud storage solution that allows easy file sharing and access from any device. These tools ensure real-time collaboration and communication, enabling teams to stay connected and productive, even when working remotely.`
},{
    
    title:'Flexibility and Accessibility',
    description:`With Office 365, you can work from anywhere, on any device, with a consistent user experience across desktop, web, and mobile platforms. This flexibility empowers modern, hybrid, and remote workforces to stay productive no matter where they are.`
},{
    
    title:'Scalability for Growing Businesses',
    description:`Office 365 offers a variety of plans and subscription options, making it suitable for businesses of all sizes. Easily scale your subscriptions to match your organization’s growth, adding or removing licenses as needed.`
},
    {
    
    title:'Always Up-to-Date',
    description:`Office 365 subscribers benefit from automatic updates, ensuring access to the latest features, security patches, and functionality enhancements without the need for manual installations.`
},
   {
    
    title:'Enterprise-Grade Security',
    description: `Microsoft Office 365 is built with robust security measures to protect your data, including: Multi-factor authentication (MFA), Data encryption, Advanced threat protection (ATP), Compliance with global regulations (e.g., GDPR, HIPAA). With Office 365, your organization’s data is secure, enabling you to operate with confidence.`
},
];

export const msFeature: Feature[] = [
  {
    title: "Cloud-Based Productivity Suite",
    description:
      `Access all your favorite Microsoft applications, including Word, Excel, and PowerPoint, directly from the cloud. The suite is designed to integrate seamlessly with other Microsoft services for a holistic experience.`
    },
  {
    title: "Collaboration and Communication Tools",
    description:
    `Microsoft Teams and SharePoint enable real-time collaboration, while Outlook ensures seamless communication with integrated email and calendar functionality.`
  },
  {
    title: "Cloud Storage with OneDrive",
    description:
        `Each user receives up to 1TB of cloud storage, allowing for secure storage, backup, and sharing of files across devices.`
  },
  {
    title: "AI and Automation",
    description:
    `Office 365 applications leverage artificial intelligence to enhance productivity, from AI-driven design suggestions in PowerPoint to automated workflows in Power Automate.`
},
  {
    title: "Power BI Integration",
    description:
      `Turn data into actionable insights with Power BI, enabling informed decision-making and dynamic visualizations.` 
},{
    title: "Streamlined IT Management",
    description:
     `Centralized admin portals simplify license management, user provisioning, and access controls, making it easy for IT administrators to manage their organization’s Office 365 environment.`
}
];



export const googleDesc:string[] =[
`Google Workspace (formerly G Suite) is a comprehensive suite of cloud-based productivity and collaboration tools designed to help businesses of all sizes streamline operations, enhance teamwork, and drive efficiency. With powerful applications like Gmail, Google Drive, Google Meet, and Google Docs, Google Workspace provides businesses with the tools needed to work smarter, not harder. Choosing the right licensing plan ensures your team has access to the features and scalability they need to thrive in today’s fast-paced, digital-first environment.`
]



export const whyGoogle:string[] = [
  `Google Workspace is a cloud-based productivity platform that integrates essential business tools into one unified solution. Built with collaboration, security, and ease of use in mind, Google Workspace empowers teams to communicate seamlessly, collaborate in real time, and manage tasks effectively from any device, anywhere in the world.`
]



export const googleTabData:CloudSpecialType[] = [
{ 
    image:keygooglework,   
    title:'key Benefits of Google Workspace Licensing',
    },
  {
    
    title:'Flexible Plans for Every Business',
    description:`Google Workspace offers a variety of licensing options to meet the unique needs of different organizations, including: Business Starter: Ideal for small teams, with essential tools and storage. Business Standard: Designed for growing businesses, with enhanced collaboration and storage features. Business Standard: Designed for growing businesses, with enhanced collaboration and storage features. Enterprise Plans: Tailored for large organizations, offering custom storage, advanced analytics, and premium support.`
},
  {
    
    title:'Enhanced Team Collaboration',
    description:`Google Workspace enables teams to collaborate effortlessly, regardless of location. With shared drives, real-time co-authoring, and integrated communication tools, your team stays connected and productive.`
},{
    
    title:'Improved Productivity',
    description:`By streamlining workflows and integrating essential tools into one platform, Google Workspace reduces inefficiencies and empowers teams to focus on what matters most—delivering results.`
},{
    
    title:'Cost-Effective Solution',
    description: `With a subscription-based model, businesses can avoid the upfront costs of traditional software licenses and only pay for what they use. Scalable plans allow businesses to grow without overspending.`
},
    {
    
    title:'Enterprise-Grade Security',
    description: `Protect your data with Google’s robust security measures, including AI-driven threat detection, two-step verification, and advanced admin controls.`
},
   {
    
    title:'Easy Deployment and Management',
    description: `Google Workspace simplifies onboarding, user management, and device administration through an intuitive admin console. IT teams can manage users, devices, and apps efficiently.`
},
];

export const googleFeature: Feature[] = [
  {
    title: "Integrated Productivity Applications",
    description:
      `Google Workspace includes a suite of essential applications, such as: Gmail: Professional, ad-free email with custom domains, Google Drive: Secure cloud storage with file sharing and management, Google Docs, Sheets, and Slides: Collaborative tools for creating documents, spreadsheets, and presentations, Google Meet and Chat: Video conferencing and instant messaging for seamless communication, Google Calendar: Smart scheduling and time management, Google Forms: Tools for surveys and data collection, Google Sites: Simple website creation for teams and projects.`
},
  {
    title: "Collaboration in Real-Time",
    description:
   `With real-time editing and commenting features, teams can work together on documents, spreadsheets, and presentations without the need for multiple file versions. Changes are saved automatically, ensuring efficiency and minimizing errors.`
 },
  {
    title: "Advanced Security and Compliance",
    description:
        `Google Workspace prioritizes data protection with: Enterprise-grade security protocols, Built-in encryption for emails and files, Advanced endpoint management, Compliance with global standards like GDPR and ISO/IEC 27001.
`},
  {
    title: "Seamless Integration",
    description:
    `Google Workspace integrates seamlessly with third-party applications, including Microsoft 365, Slack, Salesforce, and more. The platform’s open API also allows for custom app development tailored to your business needs.`
},
  {
    title: "Cloud Accessibility",
    description:
      `Access your work anytime, anywhere, on any device. Google Workspace ensures your files and tools are always available in the cloud, promoting flexibility and remote work.`
    },{
    title: "Scalable Storage Options",
    description:
    `Google Workspace offers flexible storage solutions to meet the needs of businesses of all sizes, from small teams to large enterprises.`
}
];



