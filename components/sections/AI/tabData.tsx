import {
    INDUSTRIESBG,
    SERVICESBG,
    SOLUTIONSBG,
    ENTERPRISEBG,
    PYTHIAAI,
    MONITORING,
  } from "@/app/assets";

  
  // Reusable content template
  const defaultContent = {
    titleClass: "text-3xl font-bold",
    subtitleClass: "text-xl text-gray-300",
    bulletsClass: "list-disc pl-5 text-base",
    paragraphClass: "text-sm max-w-[550px]",
    wrapperClass: "bg-opacity-50 p-4",
    contentClass: "flex flex-col gap-4",
    layout: "left",
  };

  export const solutionsTabData = [
    {
      id: "0",
      tabTitle: "",
      contentTitle: "Our AI solutions are built to foster innovation and give businesses a competitive edge. Each solution leverages advanced machine learning and analytics to produce real, measurable outcomes.",
      subtitle: "",
      bullets: [],
      paragraph: "",
      contentTitleClass: "w-[573px] h-[300px] text-[50px]  text-primary",
      subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white",
      paragraphClass: "absolute bottom-0 right-0 w-[681px] h-[198px] text-[30px] max-w-[681px] leading-loose",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6 relative", // Added relative for positioning
      image: SOLUTIONSBG,
      mask: "",
      layout: "left"
    } ,
    {


            id: "1",
            tabTitle: "",
            contentTitle: "AI-Driven Analytics Platform",
            subtitle: "Leverages advanced AI to process data and provide actionable insights for business optimization.",
            bullets: ["Data-Driven Decisions", "Real-Time Insights", "Scalable Solutions", "Improved Efficiency"],
            paragraph: "Our AI-driven analytics platform uses cutting-edge algorithms to process vast amounts of data, delivering real-time insights that empower businesses to make informed decisions. This solution scales with your needs, enhancing efficiency and driving growth while minimizing operational risks.",
            contentTitleClass: "w-[573px] h-[110px] text-[70px] text-primary",
            subtitleClass: "w-[573px] h-[110px] text-[35px] text-gray-200 mt-[70px]",
            bulletsClass: "list-disc pl-6 text-[25px] space-y-[22px] text-white mt-[60px] overflow-hidden",
            paragraphClass: "absolute bottom-[246px] right-[30px] max-w-[881px] w-full max-h-[398px] h-auto text-[30px] leading-loose overflow-wrap-break-word",
            wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
            contentClass: "flex flex-col",
            layout: "left"

          

          
      },
      

    {
        id: "2",
        tabTitle: "",
        contentTitle: "Drone-Based Infrastructure Monitoring",
        subtitle: "Combines drone technology with AI analytics to inspect and monitor critical infrastructure.",
        bullets: ["Enhances Safety", "Ensures Compliance", " Cuts Inspection time and cose"],
        paragraph: "CST can deploy advanced drones equipped with high-resolution cameras and AI algorithms to monitor critical infrastructure. Our solution detects issues such as structural damage or operational inefficiencies with high precision, reducing inspection costs and time while improving safety. Drone-based inspections can significantly lower operational expenses compared to traditional methods, aligning with modern safety and compliance standards.",
        contentTitleClass: "max-w-[573px] w-full h-auto text-[70px] md:text-[70px] text-primary",
        subtitleClass: "max-w-[573px] w-full h-auto text-[35px] md:text-[35px] text-gray-200 mt-[40px]",
        bulletsClass: "list-disc pl-6 text-[25px] md:text-[25px] space-y-[30px] text-white mt-[40px]",
        paragraphClass: "absolute bottom-[49px] right-[30px] max-w-[881px] w-full h-auto text-[30px] leading-loose overflow-wrap-break-word",
        wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
        contentClass: "flex flex-col",
        layout: "left"
      },
      

    {

    id: "3",
    tabTitle: "",
    contentTitle: " Custom AI Solutions ",
    subtitle: " Develop tailored AI models to address specific business challenges, from automation to data insights  ",
    bullets: ["Unlocks efficiencies", "Scalable solutions that foster growth"],
    paragraph: "We specialize in building bespoke AI models tailored to your unique business needs. Whether it’s automating processes, enhancing decision-making with predictive analytics, or leveraging computer vision for quality control, our solutions integrate seamlessly into your operations. Our agile development process ensures rapid deployment and scalability, empowering your organization to stay ahead in a dynamic market.",
    contentTitleClass: "w-[573px] h-[110px] text-[70px] text-primary",
    subtitleClass: "w-[573px] h-[110px] text-[35px] text-gray-200 mt-[70px]",
    bulletsClass: "list-disc pl-6 text-[25px] space-y-[22px] text-white mt-[60px] overflow-hidden",
    paragraphClass: "absolute bottom-[246px] right-[30px] max-w-[881px] w-full max-h-[398px] h-auto text-[30px] leading-loose overflow-wrap-break-word",
    wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
    contentClass: "flex flex-col",
    layout: "left"

    },

    {

        id: "4 ",
        tabTitle: "",
        contentTitle: " Custom AI Solutions ",
        subtitle: " ",
        bullets: [" Predictive Analytics: Optimizing production processes and forecasting operational risks. ", " Computer Vision: Enhancing safety monitoring and quality control through image and video analysis. ", " Automation: Streamlining routine tasks to improve efficiency and reduce costs. ", "  Data-Driven Insights: Leveraging machine learning to extract actionable insights from complex datasets."],
        paragraph: "",
        contentTitleClass: "w-[573px] h-[110px] text-[70px] text-primary",
        subtitleClass: "w-[573px] h-[110px] text-[35px] text-gray-200 mt-[70px]",
        bulletsClass: "list-disc pl-6 text-[25px] space-y-[22px] text-white mt-[60px] overflow-hidden",
        paragraphClass: "absolute bottom-[246px] right-[30px] max-w-[881px] w-full max-h-[398px] h-auto text-[30px] leading-loose overflow-wrap-break-word",
        wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
        contentClass: "flex flex-col",
        layout: "left"

        
      }

  ];
  
  
  export const servicesTabData = [
    {
        id: " 0",
            tabTitle: "Consulting and Advisory",
            contentTitle: "Strategic guidance to identify AI opportunities and develop a tailored roadmap.",
            subtitle: "  Our team of AI experts collaborates with you to understand your business challenges and opportunities. We develop a strategic AI roadmap, identifying high-impact use cases such as process automation or predictive analytics, ensuring alignment with your long-term goals. Our advisory services draw on deep industry knowledge to maximize ROI. ",
            bullets: [],
            paragraph: " Aligns AI initiatives with business goals for maximum impact.",
            contentTitleClass: "w-[673px] h-[110px] text-[60px] text-primary",
            subtitleClass: "absolute bottom-[100px] left-[70px] max-w-[750px] w-full max-h-[398px] h-auto text-[25px] leading-loose overflow-wrap-break-word",
            bulletsClass: "list-disc pl-6 text-[25px] space-y-[22px] text-white mt-[60px] overflow-hidden",
            paragraphClass: "absolute bottom-[246px] right-[30px] max-w-[881px] w-full max-h-[398px] h-auto text-[30px] leading-loose overflow-wrap-break-word",
            
            wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
            contentClass: "flex flex-col",
            image: SERVICESBG,
            mask: "",
            layout: "left"
      },
      
    {

      id: " 1",
            tabTitle:"Development and Integration" ,
            contentTitle:"Custom AI model development and seamless integration into existing systems.",
            
            subtitle: "We design, build, and deploy custom AI solutions tailored to your specific requirements. From machine learning models to computer vision applications, our development process ensures robust, scalable solutions. We integrate these systems seamlessly into your existing workflows, minimizing disruption and accelerating time-to-value." ,
            bullets: [],
            paragraph:  "Custom AI model development and seamless integration into existing systems."  ,
            contentTitleClass: "w-[673px] h-[110px] text-[60px] text-primary",
            subtitleClass: "absolute bottom-[100px] left-[70px] max-w-[750px] w-full max-h-[398px] h-auto text-[25px] leading-loose overflow-wrap-break-word",
            bulletsClass: "list-disc pl-6 text-[25px] space-y-[22px] text-white mt-[60px] overflow-hidden",
            paragraphClass: "absolute bottom-[275px] right-[150px] max-w-[279px] w-full max-h-[118px] h-auto text-[30px] leading-loose overflow-wrap-break-word",
            wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
            contentClass: "flex flex-col",
            image: SERVICESBG,
            mask: "",
            layout: "left"
    },
    {

      id: " 2",
            tabTitle:"Support and Maintainance",
            contentTitle:"Ongoing monitoring, updates, and optimization of AI systems",
            
            subtitle: "Our managed AI services provide continuous monitoring, updates, and optimization to keep your AI systems performing at their peak. We proactively address issues, adapt to changing needs, and ensure your solutions remain aligned with business objectives, delivering sustained value over time.",
            bullets: [],
            paragraph: "Ensures long-term performance and adaptability of AI solutions.",
            contentTitleClass: "w-[673px] h-[110px] text-[60px] text-primary",
            subtitleClass: "absolute bottom-[100px] left-[70px] max-w-[750px] w-full max-h-[398px] h-auto text-[25px] leading-loose overflow-wrap-break-word",
            bulletsClass: "list-disc pl-6 text-[25px] space-y-[22px] text-white mt-[60px] overflow-hidden",
            paragraphClass: "absolute bottom-[275px] right-[150px] max-w-[279px] w-full max-h-[118px] h-auto text-[30px] leading-loose overflow-wrap-break-word",
            wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
            contentClass: "flex flex-col",
            image: SERVICESBG,
            mask: "",
            layout: "left"
    }
  ];
  
  
  // Industries
  
//   export const industriesTabData = [
//     {
//       id: "0",
//       tabTitle: "Manufacturing",
//       contentTitle: "Smart Factories",
//       subtitle: "AI in Manufacturing",
//       bullets: ["Workflow optimization", "Automated inspection", "Resource tracking"],
//       paragraph: "Our managed AI services provide continuous monitoring, updates, and optimization to keep your AI systems performing at their peak. We proactively address issues, adapt to changing needs, and ensure your solutions remain aligned with business objectives, delivering sustained value over time.",
//       contentTitleClass: "w-[573px] h-[110px] text-[50px] font-extrabold text-primary",
//       subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
//       bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
//       paragraphClass: "absolute bottom-0 right-0 w-[681px] h-[198px] text-[30px] max-w-[681px] leading-loose",
//       wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
//       contentClass: "flex flex-col gap-6 p-6 relative",
//       image: INDUSTRIESBG,
//       mask: "",
//       layout: "left"
//     },
//     {
//       id: "1",
//       tabTitle: "Agriculture",
//       contentTitle: "Precision Farming",
//       subtitle: "Drone Agriculture",
//       bullets: ["Soil analysis", "Pest detection", "Yield optimization"],
//       paragraph: "Use drones and AI to make agriculture more efficient and data-driven. Ut enim ad minim veniam, quis nostrud exercitation.",
//       contentTitleClass: "w-[573px] h-[110px] text-[50px] font-extrabold text-primary",
//       subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
//       bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
//       paragraphClass: "absolute bottom-0 right-0 w-[681px] h-[198px] text-[30px] max-w-[681px] leading-loose",
//       wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
//       contentClass: "flex flex-col gap-6 p-6 relative",
//       image: INDUSTRIESBG,
//       mask: "",
//       layout: "left"
//     },
//     {
//       id: "2",
//       tabTitle: "Energy",
//       contentTitle: "Infrastructure Monitoring",
//       subtitle: "Energy Sector AI",
//       bullets: ["Power line scans", "Thermal imaging", "Outage prediction"],
//       paragraph: "AI-powered drones help inspect and maintain critical infrastructure. Excepteur sint occaecat cupidatat non proident.",
//       contentTitleClass: "w-[573px] h-[110px] text-[50px] font-extrabold text-primary",
//       subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
//       bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
//       paragraphClass: "absolute bottom-0 right-0 w-[681px] h-[198px] text-[30px] max-w-[681px] leading-loose",
//       wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
//       contentClass: "flex flex-col gap-6 p-6 relative",
//       video: "/videos/energy-demo.mp4",
//       mask: "",
//       layout: "left"
//     },
//     {
//       id: "3",
//       tabTitle: "Construction",
//       contentTitle: "Site Surveys",
//       subtitle: "Construction Drones",
//       bullets: ["Progress tracking", "3D mapping", "Safety monitoring"],
//       paragraph: "Accelerate site operations and documentation using aerial intelligence. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
//       contentTitleClass: "w-[573px] h-[110px] text-[50px] font-extrabold text-primary",
//       subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
//       bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
//       paragraphClass: "absolute bottom-0 right-0 w-[681px] h-[198px] text-[30px] max-w-[681px] leading-loose",
//       wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
//       contentClass: "flex flex-col gap-6 p-6 relative",
//       image: INDUSTRIESBG,
//       mask: "",
//       layout: "left"
//     }
//   ];
  
  
  // Enterprise Success
  export const enterpriseSuccessTabData = [
    {
      id: "0",
      tabTitle: "Accelerated AI Adoption",
      contentTitle: "Accelerated AI Adoption",
      subtitle: "",
      bullets: [],
      paragraph: "Organizations across sectors—finance, healthcare, manufacturing, and beyond—are integrating AI to drive competitive advantage. However, many lack the in-house expertise to implement AI effectively. AI consultants bridge this gap, enabling seamless adoption and ensuring alignment with business objectives.",
      contentTitleClass: "w-[573px] h-[110px] text-[80px]  font-extrabold text-primary",
      subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
      paragraphClass: "absolute bottom-8 right-6 w-[90%] max-w-[640px] text-[30px] leading-loose text-white",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6 relative",
      image: ENTERPRISEBG,
      mask: "",
      layout: "left"
    },
    {
      id: "1",
      tabTitle: "Navigating Complexity",
      contentTitle: "Navigating Complexity",
      subtitle: "",
      bullets: [],
      paragraph: "As AI technologies advance—encompassing generative AI, reinforcement learning, and edge computing—specialized knowledge is essential to address technical, operational, and ethical challenges. Consultants provide the expertise needed to deploy cutting-edge solutions responsibly.",
      contentTitleClass: "w-[573px] h-[110px] text-[80px]  font-extrabold text-primary",
      subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
      paragraphClass: "absolute bottom-8 right-6 w-[90%] max-w-[640px] text-[30px] leading-loose text-white",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6 relative",
      image: ENTERPRISEBG,
      mask: "",
      layout: "left"
    },
    {
      id: "2",
      tabTitle: "Regulatory Compliance",
      contentTitle: "Regulatory Compliance",
      subtitle: "",
      bullets: [],
      paragraph: "With the rise of AI regulations, such as the EU AI Act, enterprises face increasing scrutiny over AI governance. AI consultants ensure compliance, mitigate risks, and embed ethical principles, safeguarding brand reputation and stakeholder trust.",
      contentTitleClass: "w-[573px]  h-[110px] text-[80px]  font-extrabold text-primary",
      subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
      paragraphClass: "absolute bottom-8 right-6 w-[90%] max-w-[640px] text-[30px] leading-loose text-white",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6 relative",
      image: ENTERPRISEBG,
      mask: "",
      layout: "left"
    },
    {
      id: "3",
      tabTitle: "Economic Transformation",
      contentTitle: "Economic Transformation",
      subtitle: "",
      bullets: [],
      paragraph: "AI is projected to contribute $15.7 trillion to the global economy by 2030, according to PwC. Consultants play a pivotal role in translating this potential into tangible outcomes, from cost optimization to revenue growth.",
      contentTitleClass: "w-[573px] h-[110px] text-[80px]  font-extrabold text-primary",
      subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
      paragraphClass: "absolute bottom-8 right-6 w-[90%] max-w-[640px] text-[30px] leading-loose text-white",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6 relative",
      image: ENTERPRISEBG,
      mask: "",
      layout: "left"
    },
    {
        id: "4",
        tabTitle: "Tailored Solutions",
        contentTitle: "Tailored Solutions",
        subtitle: "",
        bullets: [],
        paragraph: "Generic AI tools often fail to address unique enterprise needs. AI consulting delivers customized solutions, enabling organizations to unlock value in areas such as supply chain optimization, customer experience enhancement, and predictive analytics.",
        contentTitleClass: "w-[573px] h-[110px] text-[80px]  font-extrabold text-primary",
      subtitleClass: "w-[555px] h-[99px] text-[30px] text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-[23px] space-y-[22px] text-white font-medium",
      paragraphClass: "absolute bottom-8 right-6 w-[90%] max-w-[640px] text-[30px] leading-loose text-white",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6 relative",
      image: ENTERPRISEBG,
      mask: "",
      layout: "left"
      }
  ];
  
  
  // AI Consulting
  export const aiConsultingTabData = [
    {
      id: "0",
      tabTitle: "Strategy",
      contentTitle: "AI Strategy Consulting",
      subtitle: "Monetizing AI",
      bullets: ["Strategic planning", "Revenue optimization", "AI implementation"],
      paragraph: "Lay the foundation with strong strategic alignment for monetizing AI. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose font-light",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: INDUSTRIESBG,
      mask: "",
      layout: "left"
    },
    {
      id: "1",
      tabTitle: "Implementation",
      contentTitle: "Implementation Services",
      subtitle: "Expert Advice",
      bullets: ["Agile delivery", "MVPs", "Continuous iteration"],
      paragraph: "Go from prototype to product with expert guidance. Ut enim ad minim veniam, quis nostrud exercitation.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose font-light",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: INDUSTRIESBG,
      mask: "",
      layout: "left"
    },
    {
      id: "2",
      tabTitle: "Optimization",
      contentTitle: "Optimization Techniques",
      subtitle: "Maximizing Value",
      bullets: ["Latency reduction", "Model tuning", "Pipeline refactor"],
      paragraph: "Refine and optimize to hit peak system performance. Excepteur sint occaecat cupidatat non proident.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose font-light",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      video: "/videos/optimization-demo.mp4",
      mask: "",
      layout: "left"
    },
    {
      id: "3",
      tabTitle: "Governance",
      contentTitle: "Governance",
      subtitle: "Trust & Ethics",
      bullets: ["Bias auditing", "Data governance", "Compliance"],
      paragraph: "Ensure AI systems align with ethical and legal standards. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose font-light",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: INDUSTRIESBG,
      mask: "",
      layout: "left"
    }
  ];
  
  
  
  export const monitoringDetectionTabData = [
    {
      id: "0",
      tabTitle: "Threat Detection",
      contentTitle: "Threat Detection",
      subtitle: "Stay Alert",
      bullets: ["Anomaly detection", "Real-time alerts", "Behavioral AI"],
      paragraph: "Proactively detect potential threats with AI monitoring. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: MONITORING,
      mask: "",
      layout: "left"
    },
    {
      id: "1",
      tabTitle: "Surveillance",
      contentTitle: "Surveillance",
      subtitle: "Eyes Everywhere",
      bullets: ["Video feeds", "Object tracking", "Zone alerts"],
      paragraph: "Continuous surveillance using autonomous monitoring systems. Ut enim ad minim veniam, quis nostrud exercitation.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: MONITORING,
      mask: "",
      layout: "left"
    },
    {
      id: "2",
      tabTitle: "Incident Logging",
      contentTitle: "Incident Logging",
      subtitle: "Smart History",
      bullets: ["Event timeline", "Evidence capture", "Cloud logging"],
      paragraph: "Document and retrieve incidents with structured logs. Excepteur sint occaecat cupidatat non proident.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: MONITORING,
      mask: "",
      layout: "left"
    },
    {
      id: "3",
      tabTitle: "Response Automation",
      contentTitle: "Response Automation",
      subtitle: "Act Instantly",
      bullets: ["Automated workflows", "Escalation rules", "Fail-safes"],
      paragraph: "Trigger rapid responses without human delays. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: MONITORING,
      mask: "",
      layout: "left"
    }
  ];
  
  
  
  export const pythiaAITabData = [

        {
            id: "0",
            tabTitle: "",
            contentTitle: "Real-Time Anomaly Detection",
            subtitle: "Learns asset behavior from historical and live data to identify anomalies.",
            bullets: [
              "Uses AI models to track degradation and estimate Remaining Useful Life (RUL).",
              "Failure Prediction & RUL Estimation"
            ],
            paragraph: "Pythia AI combines multiple tools into one intuitive interface. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            titleClass: "text-[50px] text-[#0059FF] text-left max-w-[500px]",
            subtitleClass: "text-[35px] text-white text-left max-w-[500px]",
            bulletsClass: "list-disc pl-6 text-[30px] text-white space-y-6 text-left max-w-[500px]",
            paragraphClass: "text-[30px] text-white text-left max-w-[681px] h-[198px] absolute right-0 bottom-0 pr-6 pb-6",
            wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
            contentClass: "flex flex-col gap-6 p-6 relative",
            image: PYTHIAAI,
            mask: "",
            layout: "left"
          },
    {
      id: "1",
      tabTitle: "",
      contentTitle: "Failure Prediction & RUL Estimation",
      subtitle: "Smart Insights",
      bullets: ["Forecasting", "Pattern recognition", "Custom reports"],
      paragraph: "Use AI-driven analytics to fuel decision-making. Ut enim ad minim veniam, quis nostrud exercitation.",
      titleClass: "text-[50px] text-[#0059FF] text-left",
        subtitleClass: "text-[35px] text-white text-left",
        bulletsClass: "list-disc pl-6 !text-[30px] text-white space-y-[22px] text-left",
        paragraphClass: "text-[30px] text-white text-right max-w-[681px] h-[198px] absolute right-0 bottom-0 pr-6 pb-6",
        wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
        contentClass: "flex flex-col gap-6 p-6 relative",  
      image: PYTHIAAI,
      mask: "",
      layout: "left"
    },
    {
      id: "2",
      tabTitle: "",
      contentTitle: "Physics-Simulated Fault Signatures",
      subtitle: "Plug & Play",
      bullets: ["CRM systems", "IoT", "ERP tools"],
      paragraph: "Connect Pythia to your business stack with ease. Excepteur sint occaecat cupidatat non proident.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose font-light",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: PYTHIAAI,
      mask: "",
      layout: "left"
    },
    {
      id: "3",
      tabTitle: "",
      contentTitle: "Prescriptive Guidance",
      subtitle: "Built-in Trust",
      bullets: ["Encryption", "Audit trails", "Access control"],
      paragraph: "Enterprise-grade security ensures data stays protected. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose font-light",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
      image: PYTHIAAI,
      mask: "",
      layout: "left"
    },
    {
        id: "4",
        tabTitle: "",
        contentTitle: "Alert Validator (Human-in-the-Loop)",
        subtitle: "Built-in Trust",
        bullets: ["Encryption", "Audit trails", "Access control"],
        paragraph: "Enterprise-grade security ensures data stays protected. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
        titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
        subtitleClass: "text-2xl text-gray-200 italic",
        bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
        paragraphClass: "text-base max-w-md leading-loose font-light",
        wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
        contentClass: "flex flex-col gap-6 p-6",
        image: PYTHIAAI,
        mask: "",
        layout: "left"
      },
      {
        id: "5",
        tabTitle: "",
        contentTitle: "Security",
        subtitle: "Built-in Trust",
        bullets: ["Encryption", "Audit trails", "Access control"],
        paragraph: "Enterprise-grade security ensures data stays protected. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
        titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
        titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose font-light",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
        image: PYTHIAAI,
        mask: "",
        layout: "left"
      },
      {
        id: "6",
        tabTitle: "",
        contentTitle: "Safety Vision (Optional Add-On)",
        subtitle: "Built-in Trust",
        bullets: ["Encryption", "Audit trails", "Access control"],
        paragraph: "Enterprise-grade security ensures data stays protected. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
        titleClass: "text-4xl font-extrabold text-primary tablet:text-5xl",
      subtitleClass: "text-2xl text-gray-200 italic",
      bulletsClass: "list-disc pl-6 text-lg space-y-2 text-white font-medium",
      paragraphClass: "text-base max-w-md leading-loose font-light",
      wrapperClass: "bg-black bg-opacity-60 rounded-lg shadow-lg",
      contentClass: "flex flex-col gap-6 p-6",
        image: PYTHIAAI,
        mask: "",
        layout: "left"
      }
  ];



  

