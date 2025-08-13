

import { Benefit } from "@/types/declaration";
import { Feature } from "../../AI/feature";

export interface Tab {
  id: string;
  title: string;
  description?: string;
}

export const ciscoDesc:string[] =[
 `Cisco UC solutions through Webex offer a fully integrated suite of collaboration tools designed for seamless communication across organizations. These solutions combine voice, video, messaging, and meetings into a single unified platform, providing employees with the flexibility to connect from any device or location.`
]



export const ciscoFeature: Feature[] = [
  {
    title: "Enterprise-Grade Calling",
    description: `
    High-quality, secure VoIP services with advanced call handling features, such as call forwarding, auto-attendant, and voicemail.`

},
  {
    title: "Meetings and Video Conferencing",
    description:
    `Real-time collaboration with HD video and immersive audio supported by AI features like transcription, noise reduction, and automatic framing.`
  },
  {
    title: "Messaging Integration",
    description:
    `Persistent team messaging with file sharing and searchable message history to enhance team productivity.`
  },
  {
    title: "Device Flexibility",
    description:
    `Seamless compatibility with Webex-certified devices like IP phones, video endpoints, and room kits.`
},
  {
    title: "Security and Compliance",
    description:
     `Built-in end-to-end encryption and compliance with global regulatory standards.`
}
];


export const ciscoBenefits : Benefit[] = [

    {
      text: "Enhanced collaboration with AI-powered features.",
      position: "left",
    },
    {
      text: "Reduced IT complexity through a single unified interface.",
      position: "right",
    },
    {
      text: "Scalability to accommodate businesses of all sizes.",
      position: "left",
    },
    
    
  ]


  export const manageDesc:string[] =[
    `Cisco Unified Communications Manager (CUCM) is a robust call-processing platform that supports a comprehensive range of telephony and collaboration services. It is designed for both on-premises and hybrid cloud deployments.`
]



export const manageFeature: Feature[] = [
  {
    title: "o	Call Control and Management",
    description: `Provides advanced call routing, mobility, and conferencing features to support enterprise communication needs.`
},
  {
    title: "o	Device Support",
    description:
    `Supports a wide range of endpoints, including Cisco IP phones, softphones, and third-party devices.`
 },
  {
    title: "o	Video and Collaboration Integration",
    description:
    `Enables HD video calling and integrates with Cisco Webex for seamless meetings and messaging.`
 },
  {
    title: "o	Hybrid Cloud Capabilities",
    description: `Offers hybrid deployment options to connect on-premises and cloud systems.`
},
  {
    title: "o	Enhanced Security",
    description:
    `Utilizes secure SIP protocols and encryption to protect communications.`
}
];


export const manageBenefits : Benefit[] = [

    {
      text: "Flexibility in deployment models (on-premises, cloud, or hybrid).",
      position: "left",
    },
    {
      text: "Simplifies communication management for enterprises",
      position: "right",
    },
    {
      text: "Scalable for organizations of varying sizes and complexities.",
      position: "left",
    },
    
    
  ]



  export const contactCenterDesc: string[] = [
  `Cisco Contact Center provides a cloud-based, scalable solution for delivering superior customer experiences. This platform enables organizations to engage customers through multiple channels, including voice, chat, email, and social media.`
];

export const contactCenterFeature: Feature[] = [
  {
    title: "Omnichannel Support",
    description: `Seamless interaction across multiple channels, enabling personalized customer service.`
  },
  {
    title: "AI-Powered Insights",
    description: `Leverages artificial intelligence to provide real-time analytics, sentiment analysis, and customer journey mapping.`
  },
  {
    title: "Automation Tools",
    description: `Includes chatbots and self-service options to improve efficiency and reduce operational costs.`
  },
  {
    title: "Integration Capabilities",
    description: `Easily integrates with CRM systems like Salesforce, Zendesk, and Microsoft Dynamics.`
  },
  {
    title: "Scalability",
    description: `Supports businesses of all sizes, from small teams to global enterprises.`
  }
];

export const contactCenterBenefits: Benefit[] = [
  {
    text: "Improved customer satisfaction through personalized interactions.",
    position: "left"
  },
  {
    text: "Enhanced productivity with AI-driven automation.",
    position: "right"
  },
  {
    text: "Cost savings by reducing manual workloads and increasing agent efficiency.",
    position: "left"
  }
];


export const webexDesc: string[] = [
  `Cisco Webex is a comprehensive collaboration platform designed to connect teams through voice, video, messaging, and advanced meeting capabilities. Built for hybrid work environments, Webex ensures seamless communication across devices and locations while emphasizing security, reliability, and user experience.`
];


export const webexCallingDesc: string[] = [
  `A cloud-based calling solution that integrates seamlessly into the Webex platform.`
];

export const webexCallingFeature: Feature[] = [
  {
    title: "HD Voice Quality",
    description: `Supports clear audio communication with advanced noise reduction and echo cancellation.`
  },
  {
    title: "Enterprise-Grade PBX Features",
    description: `Includes call forwarding, transfer, voicemail, auto-attendant, and hunt groups.`
  },
  {
    title: "Global Reach",
    description: `Available in over 100 countries, supporting geographically distributed teams.`
  },
  {
    title: "Mobility Features",
    description: `Enables users to make and receive business calls from mobile devices, desktops, and IP phones.`
  }
];

export const webexCallingBenefits: Benefit[] = [
  {
    text: "Eliminates the need for on-premises PBX systems.",
    position: "left"
  },
  {
    text: "Unified calling experience within Webex Meetings and Messaging.",
    position: "right"
  }
];

// Webex Meetings
export const webexMeetingsDesc: string[] = [
  `A feature-rich virtual meeting platform for individuals and teams.`
];

export const webexMeetingsFeature: Feature[] = [
  {
    title: "High-Definition Video and Audio",
    description: `Supports up to 1080p video resolution with active speaker and grid view options.`
  },
  {
    title: "AI-Powered Capabilities",
    description: `Includes transcription, real-time translation in multiple languages, gesture recognition, and noise suppression.`
  },
  {
    title: "Capacity",
    description: `Allows up to 1,000 participants in a single meeting with interactive features like polls, Q&A, and breakout rooms.`
  },
  {
    title: "Recording and Playback",
    description: `Easily record meetings, store them in the cloud, and share with team members.`
  }
];

export const webexMeetingsBenefits: Benefit[] = [
  { text: "Improves engagement with immersive features.", position: "left" },
  { text: "Ideal for internal collaboration and customer-facing presentations.", position: "right" }
];

// Webex Messaging
export const webexMessagingDesc: string[] = [
  `A persistent messaging tool for real-time and asynchronous collaboration.`
];

export const webexMessagingFeature: Feature[] = [
  {
    title: "Secure Team Spaces",
    description: `Create dedicated spaces for projects, teams, or departments.`
  },
  {
    title: "File Sharing",
    description: `Share documents, images, and multimedia files securely.`
  },
  {
    title: "Searchable History",
    description: `Easily find past conversations, files, or messages with a powerful search engine.`
  },
  {
    title: "Integrations",
    description: `Connect with tools like Microsoft 365, Google Workspace, Salesforce, and Jira.`
  }
];

export const webexMessagingBenefits: Benefit[] = [
  { text: "Reduces email dependency.", position: "left" },
  { text: "Enhances team productivity and responsiveness.", position: "right" }
];

// Webex Devices
export const webexDevicesDesc: string[] = [
  `Cisco’s certified hardware solutions, optimized for Webex.`
];

export const webexDevicesFeature: Feature[] = [
  {
    title: "Webex Desk Series",
    description: `High-quality personal video conferencing devices.`
  },
  {
    title: "Webex Room Kits",
    description: `Advanced video and audio solutions for meeting rooms of all sizes.`
  },
  {
    title: "Webex Board",
    description: `An interactive whiteboard that integrates with Webex Meetings and Messaging.`
  }
];

export const webexDevicesBenefits: Benefit[] = [
  { text: "Improves meeting room experiences.", position: "left" },
  { text: "Provides consistent performance across all setups.", position: "right" }
];

// Webex Events
export const webexEventsDesc: string[] = [
  `A robust platform for hosting webinars, virtual events, and town halls.`
];

export const webexEventsFeature: Feature[] = [
  {
    title: "Support for up to 100,000 attendees",
    description: `Host large-scale events with ease and reliability.`
  },
  {
    title: "Advanced Production Tools",
    description: `Create polished presentations with professional-grade controls.`
  },
  {
    title: "Analytics and Insights",
    description: `Gain detailed metrics on attendee engagement and participation.`
  }
];

export const webexEventsBenefits: Benefit[] = [
  { text: "Enhances the reach of corporate communications.", position: "left" },
  { text: "Ideal for marketing campaigns, product launches, and training sessions.", position: "right" }
];


export const webexAdvancedFeatures: Feature[] = [
  {
    title: "AI-Driven Productivity",
    description: `Includes Webex Assistant, a virtual assistant that helps schedule meetings, take notes, and follow up on action items; People Insights, which provides profiles and insights on meeting participants for more meaningful connections; and Real-Time Translation, supporting translations in over 100 languages for global collaboration.`
  },
  {
    title: "Security and Compliance",
    description: `Offers end-to-end encryption to protect data during meetings, messaging, and file sharing; Data Loss Prevention (DLP) to ensure sensitive information remains secure; and compliance certifications meeting global standards such as GDPR, HIPAA, and FedRAMP.`
  },
  {
    title: "Analytics and Management",
    description: `Features Control Hub, a centralized dashboard for IT administrators to manage users, devices, and configurations; Real-Time Insights for call quality, meeting engagement, and usage trends; and Proactive Troubleshooting to help diagnose and resolve issues quickly.`
  }
];

export const teamsVoiceCallingDesc: string[] = [
  `A modern cloud-based telephony solution that enables voice communication via the Microsoft Teams platform. This service replaces traditional phone systems with a fully integrated UC experience.`
];

export const teamsVoiceCallingFeature: Feature[] = [
  {
    title: "PSTN Calling",
    description: `Enables outbound and inbound calls to and from the Public Switched Telephone Network (PSTN).`
  },
  {
    title: "Auto-Attendant and Call Queues",
    description: `Provides automated business call management with call routing and hold features.`
  },
  {
    title: "Voicemail with Transcription",
    description: `Delivers voicemail messages with automated text transcription for quick review.`
  },
  {
    title: "Direct Routing Integration",
    description: `Integrates with on-premises telephony systems via Direct Routing for hybrid setups.`
  },
  {
    title: "Advanced Call Analytics",
    description: `Offers detailed reporting and insights into call quality, usage, and trends.`
  },
  {
    title: "Emergency Calling",
    description: `Supports critical emergency call features such as Dynamic E911 in the U.S.`
  }
];

export const teamsVideoConferencingDesc: string[] = [
  `Microsoft Teams offers robust video conferencing capabilities, suitable for one-on-one meetings, team calls, and large webinars.`
];

export const teamsVideoConferencingFeature: Feature[] = [
  {
    title: "High-Definition Video and Audio",
    description: `Delivers clear, high-quality video and sound for all meeting types.`
  },
  {
    title: "Customizable Meeting Layouts",
    description: `Includes options like Together Mode for a more engaging and inclusive meeting experience.`
  },
  {
    title: "Meeting Transcription and Translation",
    description: `Provides real-time transcription and translation to support global collaboration.`
  },
  {
    title: "Cloud Meeting Recording",
    description: `Allows meetings to be recorded, stored in the cloud, and played back on demand.`
  },
  {
    title: "Screen Sharing and Whiteboard Integration",
    description: `Supports sharing your screen and collaborating on ideas with Microsoft Whiteboard.`
  },
  {
    title: "Breakout Rooms",
    description: `Enables splitting participants into smaller groups for focused discussions.`
  }
];


// Chat and Messaging
export const teamsChatMessagingDesc: string[] = [
  `Real-time messaging is at the heart of Microsoft Teams' collaboration features, designed to streamline communication across teams.`
];

export const teamsChatMessagingFeature: Feature[] = [
  { title: "Persistent Chat", description: `Supports group and one-on-one chat that remains available for ongoing reference.` },
  { title: "Rich Text and Reactions", description: `Includes formatting options, emoji reactions, and GIFs for expressive communication.` },
  { title: "File Sharing and Collaboration", description: `Enables sharing documents and collaborating on them directly within the chat.` },
  { title: "Message Pinning", description: `Allows quick access to important discussions by pinning messages.` },
  { title: "Searchable History", description: `Provides a powerful search to locate past messages and shared files.` }
];

// Collaboration Tools
export const teamsCollaborationToolsDesc: string[] = [
  `Seamless integration with the Microsoft 365 suite and third-party apps ensures that Teams is a powerful hub for collaboration.`
];

export const teamsCollaborationToolsFeature: Feature[] = [
  { title: "Real-Time Co-Authoring", description: `Work simultaneously on Word, Excel, and PowerPoint documents.` },
  { title: "Shared File Storage", description: `Store and manage documents via SharePoint and OneDrive.` },
  { title: "Task Management Integration", description: `Organize and track tasks using Microsoft Planner and To-Do.` },
  { title: "Third-Party App Support", description: `Integrates with tools like Trello, Salesforce, and Adobe Sign.` },
  { title: "Workflow Automation", description: `Automate repetitive processes using Power Automate.` }
];

// Teams Rooms
export const teamsRoomsDesc: string[] = [
  `A dedicated solution for turning meeting rooms into smart, hybrid collaboration spaces.`
];

export const teamsRoomsFeature: Feature[] = [
  { title: "Certified Teams Devices", description: `Integrates seamlessly with cameras, microphones, and speakers optimized for Teams.` },
  { title: "Easy Room Scheduling", description: `Book rooms effortlessly via Teams panels.` },
  { title: "Hybrid Meeting Capabilities", description: `Include remote participants alongside in-room attendees.` },
  { title: "Content Sharing and Annotations", description: `Share content and add live annotations during meetings.` }
];

// Webinar Hosting
export const teamsWebinarHostingDesc: string[] = [
  `An enterprise-grade solution for hosting professional webinars and large virtual events.`
];

export const teamsWebinarHostingFeature: Feature[] = [
  { title: "High Participant Capacity", description: `Host up to 10,000 attendees, with scalability to 20,000 during promotional periods.` },
  { title: "Pre-Event Tools", description: `Set up registration and gather attendee information before events.` },
  { title: "Interactive Engagement", description: `Use polls, Q&A sessions, and collect attendee feedback in real time.` },
  { title: "Post-Event Analytics", description: `Analyze engagement and attendance metrics after the event.` }
];

// Messaging
export const rcMessagingDesc: string[] = [
  `RingCentral’s messaging service facilitates real-time communication across devices, designed for team collaboration with cross-platform support.`
];

export const rcMessagingFeatures: Feature[] = [
  { title: "Team Chat", description: `Unlimited chat rooms for departments, projects, or one-on-one conversations, with persistent chat history.` },
  { title: "File Sharing", description: `Securely upload and share files, images, and links in real time.` },
  { title: "Task Management", description: `Assign tasks, set deadlines, and track progress directly within chats.` },
  { title: "Advanced Search", description: `Quickly locate messages, files, or conversations across multiple chats.` },
  { title: "Integration with Business Tools", description: `Supports Microsoft Teams, Google Drive, Trello, and more for seamless workflows.` },
  { title: "Cross-Platform Access", description: `Desktop, mobile, and web apps ensure communication continuity.` }
];

// Video Conferencing (RingCentral Video)
export const rcVideoDesc: string[] = [
  `A cloud-based video conferencing platform for virtual meetings, webinars, and collaboration, built to deliver HD quality and productivity tools.`
];

export const rcVideoFeatures: Feature[] = [
  { title: "HD Video and Audio", description: `Supports up to 500 participants with clear, reliable quality.` },
  { title: "Screen Sharing", description: `Share full screens, specific apps, or browser tabs.` },
  { title: "Collaborative Tools", description: `Includes live annotations, whiteboarding, and integrated chat.` },
  { title: "Recording and Transcriptions", description: `Automatic cloud storage and AI-driven transcriptions.` },
  { title: "Customizable Layouts", description: `Switch between speaker view, gallery view, or presentation mode.` },
  { title: "Webinars and Live Events", description: `Engage audiences with polls and Q&A features.` },
  { title: "Virtual Backgrounds", description: `Enhance professionalism or privacy during calls.` },
  { title: "Integrations", description: `Seamlessly works with Microsoft Outlook, Google Calendar, and Slack.` }
];

// Unified Phone System
export const rcPhoneDesc: string[] = [
  `A centralized communication hub combining voice calls, messaging, and video to streamline business communications.`
];

export const rcPhoneFeatures: Feature[] = [
  { title: "Multi-Site Support", description: `Connect multiple office locations under one system.` },
  { title: "Call Routing", description: `Route calls based on caller info, time zones, or availability.` },
  { title: "Toll-Free Numbers", description: `Offer vanity, local, and toll-free numbers for branding.` },
  { title: "Call Queuing", description: `Manage peak times with queue placement and wait time notifications.` },
  { title: "Integration with CRM Tools", description: `Sync customer call data with Salesforce, HubSpot, and Zendesk.` }
];

// Contact Center Solutions
export const rcContactCenterDesc: string[] = [
  `An omnichannel platform for managing customer service interactions across multiple communication channels.`
];

export const rcContactCenterFeatures: Feature[] = [
  { title: "Omnichannel Communication", description: `Manage phone, chat, email, and social media interactions.` },
  { title: "AI-Driven Insights", description: `Analyze sentiment, behavior trends, and agent performance in real time.` },
  { title: "Workforce Optimization", description: `Automate scheduling, track productivity, and monitor service levels.` },
  { title: "Interactive Voice Response (IVR)", description: `Guide customers to the right service with customizable menus.` },
  { title: "Integration with Help Desks", description: `Connect with Zendesk and similar platforms for personalized support.` }
];

// Mobile App
export const rcMobileAppDesc: string[] = [
  `A unified mobile application to access calls, messages, and video meetings anytime, anywhere.`
];

export const rcMobileAppFeatures: Feature[] = [
  { title: "Unified Dashboard", description: `Manage calls, messages, and meetings from one interface.` },
  { title: "Secure Messaging", description: `End-to-end encrypted chats with file sharing capabilities.` },
  { title: "Call Features", description: `Make business calls from personal devices without revealing personal numbers.` },
  { title: "Meeting Scheduling", description: `Schedule and join meetings with one tap.` },
  { title: "Offline Access", description: `Access chat history and files without internet connectivity.` }
];
 

export const vonageVoipDesc: string[] = [
  `Vonage's cloud-based Voice over Internet Protocol (VoIP) service revolutionizes traditional telephony by leveraging the internet for voice communications. This approach eliminates the need for conventional phone lines, offering businesses enhanced flexibility and a suite of advanced features.`
];

export const vonageVoipFeatures: Feature[] = [
  {
    title: "Advanced Call Management",
    description: `Vonage provides over 40 voice and unified communications features, including call routing, call forwarding, and simultaneous ring, ensuring that calls reach the right person or device, enhancing accessibility and responsiveness.`
  },
  {
    title: "Voicemail Transcription",
    description: `Voicemails are transcribed and sent to your email, allowing for quick reading and reference, which is particularly useful in noisy environments or meetings.`
  },
  {
    title: "Virtual Receptionist (Auto Attendant)",
    description: `This feature greets callers and directs them to the appropriate department or individual, providing a professional image and streamlining call handling.`
  },
  {
    title: "Scalability",
    description: `Easily add or remove users and features through the VBC Admin Dashboard, allowing your phone system to grow with your business needs.`
  }
];

export const vonageMessagingDesc: string[] = [
  `Vonage's messaging solutions encompass a comprehensive suite of services designed to facilitate real-time communication and collaboration within businesses and with customers.`
];

export const vonageMessagingFeatures: Feature[] = [
  {
    title: "Business SMS and MMS",
    description: `Send and receive text and multimedia messages using your business phone number, maintaining a professional identity across all communications.`
  },
  {
    title: "Team Messaging",
    description: `Collaborate with colleagues through instant messaging, share files, and manage projects within a unified platform, reducing reliance on external messaging apps.`
  },
  {
    title: "Business Inbox",
    description: `Consolidate messages from various channels, including SMS, MMS, and Facebook Messenger, into a single inbox, ensuring no customer communication is missed.`
  }
];



export const vonageVideoDesc: string[] = [
  `Vonage's video conferencing platform, known as Vonage Meetings, offers a robust solution for virtual face-to-face interactions, catering to the evolving needs of modern businesses.`
];

export const vonageVideoFeatures: Feature[] = [
  {
    title: "High-Quality Video and Audio",
    description: `Experience clear video and audio during meetings, enhancing communication effectiveness.`
  },
  {
    title: "Screen Sharing",
    description: `Share your screen with participants to present documents, slides, or applications, facilitating collaborative discussions.`
  },
  {
    title: "Virtual Backgrounds",
    description: `Customize your meeting background to maintain privacy or project a professional image.`
  },
  {
    title: "Meeting Recording",
    description: `Record meetings for future reference, training purposes, or to share with absent team members.`
  },
  {
    title: "Whiteboarding and Collaboration Tools",
    description: `Utilize digital whiteboards and annotation tools to brainstorm ideas and illustrate concepts in real-time.`
  }
];


export const vonageAIDesc: string[] = [
  `Vonage enhances its UCaaS offerings with advanced Artificial Intelligence (AI) integrations, designed to streamline operations and elevate customer engagement.`
];

export const vonageAIFeatures: Feature[] = [
  {
    title: "Conversational AI",
    description: `Deploy AI-powered virtual assistants and chatbots to handle routine inquiries, appointment scheduling, and customer support, freeing up human agents for more complex tasks.`
  },
  {
    title: "Sentiment Analysis",
    description: `Analyze customer interactions to gauge sentiment, allowing businesses to proactively address issues and improve service quality.`
  },
  {
    title: "Automated Call Routing",
    description: `Utilize AI to direct calls to the most appropriate department or agent based on the caller's needs and historical data, reducing wait times and enhancing customer satisfaction.`
  },
  {
    title: "Speech Recognition and Transcription",
    description: `Convert spoken language into text in real-time, enabling features like live captioning, searchable transcripts, and improved accessibility.`
  }
];

export const vonageProgVoiceDesc: string[] = [
  `Vonage's Programmable Voice service empowers businesses to create customized voice communication experiences tailored to their specific needs.`
];

export const vonageProgVoiceFeatures: Feature[] = [
  {
    title: "Interactive Voice Response (IVR)",
    description: `Design automated menus that guide callers to the appropriate resource or information, enhancing self-service capabilities.`
  },
  {
    title: "Call Recording",
    description: `Record calls for quality assurance, training, and compliance purposes, with options for on-demand or automatic recording.`
  },
  {
    title: "Text-to-Speech and Speech Recognition",
    description: `Convert text into natural-sounding speech and recognize spoken language, enabling dynamic interactions and data collection.`
  }
];


export const intermediaUniteDesc: string[] = [
  `Intermedia Unite is a comprehensive, cloud-based unified communications platform that integrates various communication and collaboration tools into a single seamless experience. Designed to enhance productivity and streamline business processes, Unite offers the following key features:`
];

export const intermediaUniteFeatures: Feature[] = [
  {
    title: "Cloud-Based Phone System",
    description: `Experience high-definition (HD) audio quality with a robust cloud-based phone system. Unite supports various devices, including pre-configured desk phones, the Unite Desktop App for Mac or PC, and the Unite Mobile App for iOS and Android devices, ensuring seamless communication across platforms.`
  },
  {
    title: "Video Conferencing with AnyMeeting®",
    description: `Host or join HD video conferences effortlessly using AnyMeeting®, which operates directly within your web browser. This eliminates the need for additional software installations, allowing participants to join meetings with a simple click. Features include screen sharing, meeting recording, and interactive tools like polls to enhance engagement.`
  },
  {
    title: "Team Chat and Messaging",
    description: `Facilitate real-time communication among team members through instant messaging. The platform supports individual and group chats, file sharing, and message history, ensuring that important information is always accessible.`
  },
  {
    title: "File Sharing and Management",
    description: `Securely store, share, and manage files with built-in file synchronization. Collaborate on documents in real-time, ensuring that all team members have access to the most up-to-date information.`
  },
  {
    title: "Integration with Contact Center",
    description: `Enhance customer interactions by integrating advanced call features within Unite. This integration streamlines communication workflows, leading to improved customer satisfaction.`
  }
];

export const intermediaContactCenterDesc: string[] = [
  `Intermedia's Contact Center solution is designed to optimize customer interactions across various channels, ensuring a consistent and efficient experience. Key features include:`,
];

export const intermediaContactCenterFeatures: Feature[] = [
  {
    title: "Omni-Channel Support",
    description: `Manage customer communications across multiple channels, including voice, email, chat, and SMS, from a single interface.`
  },
  {
    title: "Advanced Call Routing",
    description: `Direct calls to the most appropriate agents based on predefined criteria, ensuring efficient handling of customer inquiries.`
  },
  {
    title: "Real-Time Analytics and Reporting",
    description: `Access comprehensive analytics to monitor performance metrics, agent productivity, and customer satisfaction levels.`
  },
  {
    title: "Workforce Optimization",
    description: `Utilize tools for scheduling, quality management, and performance assessments to ensure optimal team performance.`
  }
];


export const intermediaArchivingDesc: string[] = [
  `Intermedia Archiving provides a secure and efficient way to preserve and retrieve critical business communications. This service is essential for organizations that need to maintain compliance with industry regulations or simply wish to have a comprehensive record of interactions.`
];

export const intermediaArchivingFeatures: Feature[] = [
  {
    title: "Comprehensive Data Capture",
    description: `Automatically archive emails, chat messages, SMS, voicemails, call recordings, screen recordings, transcriptions, and more into a unified platform.`
  },
  {
    title: "Advanced Search and Retrieval",
    description: `Quickly locate specific communications using robust search functionalities, ensuring that important information is readily accessible when needed.`
  },
  {
    title: "Compliance Support",
    description: `Assist in meeting regulatory requirements by securely storing communications and providing audit trails.`
  },
  {
    title: "Data Security",
    description: `Ensure that archived data is protected with advanced security measures, including encryption and access controls.`
  }
];

export const intermediaSipTrunkingDesc: string[] = [
  `Intermedia's SIP Trunking service enables businesses to modernize their existing phone systems by leveraging the power of the internet.`
];

export const intermediaSipTrunkingFeatures: Feature[] = [
  {
    title: "Cost Efficiency",
    description: `Reduce expenses associated with traditional phone lines by utilizing internet-based voice communication.`
  },
  {
    title: "Scalability",
    description: `Easily adjust the number of call paths to align with business needs without the constraints of physical phone lines.`
  },
  {
    title: "Enhanced Features",
    description: `Access advanced functionalities such as direct inward dialing (DID), caller ID, and failover options to maintain uninterrupted communication.`
  },
  {
    title: "Compatibility",
    description: `Integrate seamlessly with a wide range of existing PBX systems, preserving prior investments in hardware.`
  }
];

export const intermediaBackupDesc: string[] = [
  `Intermedia offers robust solutions for data backup and file management to ensure business continuity and data integrity.`
];

export const intermediaBackupFeatures: Feature[] = [
  {
    title: "SecuriSync®",
    description: `A file synchronization and sharing service that provides real-time backup and restore capabilities.`
  },
  {
    title: "Automatic Backup",
    description: `Continuously back up files to prevent data loss.`
  },
  {
    title: "File Restoration",
    description: `Easily recover previous versions of files or restore deleted items.`
  },
  {
    title: "Collaboration Tools",
    description: `Share files securely with team members and external partners, with control over permissions and access.`
  },
  {
    title: "Backup for Microsoft 365",
    description: `Protect data within Microsoft 365 applications, including Outlook, OneDrive, and SharePoint, by ensuring that a secure backup is available for quick recovery.`
  }
];


export const ringcentralVoipDesc: string[] = [
  `RingCentral’s VoIP service replaces traditional phone lines, allowing businesses to make and receive calls over the internet. With global reach and enterprise-grade quality, it’s designed for businesses of all sizes.`
];

export const ringcentralVoipFeatures: Feature[] = [
  {
    title: "Unlimited Calling",
    description: `Available within the U.S. and specific global regions, with competitive rates for international calls.`
  },
  {
    title: "Call Management",
    description: `Advanced call forwarding and simultaneous ringing to multiple devices. Customizable call handling rules, such as routing calls based on business hours or caller ID.`
  },
  {
    title: "Auto-Receptionist",
    description: `A virtual receptionist to route calls intelligently with customizable menus and greetings.`
  },
  {
    title: "Voicemail Features",
    description: `Voicemail transcription that converts messages to text and sends them to email or SMS. Visual voicemail for easy access via apps or desktop.`
  },
  {
    title: "HD Audio Quality",
    description: `Leveraging codecs and infrastructure for clear, reliable sound.`
  },
  {
    title: "Scalability",
    description: `Supports growing businesses by seamlessly adding new lines or numbers.`
  },
  {
    title: "Mobile Integration",
    description: `Access your business phone system from the mobile app for calls, texts, and faxes.`
  }
];
