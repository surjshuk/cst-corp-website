import { Benefit } from "@/types/declaration"


export const anomlyPoints = [
    {
        title:"Real-Time Anomaly Detection",
        description:"Learns asset behavior from historical and live data to identify anomalies."
    },
    {
        title:"Failure Prediction & RUL Estimation",
        description:"Tracks degradation and estimates equipment lifespan using AI models."
    },
    {
        title:"Physics-Simulated Fault Signatures",
        description:"Validates alerts with physics-informed models (e.g., rotor dynamics)   ."
    },
    {
        title:"Prescriptive Guidance",
        description:"Recommends specific actions like “inspect seal” or “reduce generator load."
    },
    {
        title:"Alert Validator",
        description:"Incorporates operator feedback to reduce false positives."
    },
    {
        title:"Safety Vision",
        description:"Monitors PPE compliance and hazards via CCTV/thermal cameras."
    }
]

export const mudPoints = [
      {
        title:"Optimization Engine",
        description:"Uses health scores, fuel data, and load patterns to assign runtime windows."
    },
      {
        title:"Health Scoring & Diagnostics",
        description:"Leverages SCADA, EDR, and BDR data for predictive diagnostics."
    },
      {
        title:"Hosting Flexibility",
        description:" Available as cloud-based, on-premises, or control-center modes."
    },
      {
        title:"Fuel & Load Optimization",
        description:" Employs greedy algorithms and weighted scoring to minimize fuel use and balance loads."
    },
      {
        title:"Custom Schedules & Reporting",
        description:"Generates hourly Gantt charts, anomaly detection reports, and efficiency rankings."
    },
      {
        title:"User-Friendly Dashboard",
        description:" Displays Gantt charts, time-series plots, and utilization insights in multiple languages."
    }   
]


export const mudBenifits : Benefit[] = [

  {
    text: "Reduces fuel costs and carbon emissions.",
    position: "left",
  },
  {
    text: "Extends equipment lifespan and prevents unplanned maintenance.",
    position: "right",
  },
  {
    text: "Enhances operational resilience across multiple rigs.",
    position: "left",
  },
  ]

  
export const saferigPoints = [
    {
        title:"Zone-Based Safety Monitoring",
        description:"Detects unauthorized presence in restricted zones."
    },
    
    {
        title:"Edge AI & Offline Functionality",
        description:" Operates on local hardware (e.g., NVIDIA Jetson) in low/no-internet conditions."
    },
      {
        title:"Custom Rule Engine",
        description:" Supports rig-specific safety policies."
    },
      {
        title:"PPE Compliance Detection",
        description:" Ensures personnel wear required protective gear."
    },
      {
        title:"Real-Time Alerts",
        description:"  Transmits violations via gRPC and displays on a browser-based dashboard."
    },
      {
        title:"Audit Logging",
        description:" Stores timestamped alerts for compliance and future integration."
    },
]

export const saferigBenifits : Benefit[] = [

  {
    text: "Reduces workplace accidents and legal liabilities.",
    position: "left",
  },
  {
    text: "Ensures compliance with global safety regulations.",
    position: "right",
  },
  {
    text: "Operates reliably in remote, low-bandwidth environments.",
    position: "left",
  },
  ]


  

export const inventoryPoints = [
    {
        title:"Forecasting Capability",
        description:"Predicts demand using historical and real-time data."
    },
    {
        title:"Expiry Tracking",
        description:"Alerts for medicines nearing expiry to minimize waste."
    },
    {
        title:"Multilingual Interface",
        description:"Ensures accessibility for diverse teams."
    },
    {
        title:"Automated Purchase Orders",
        description:"Generates orders based on stock levels and supplier timelines."
    },
    {
        title:"Inventory Analytics",
        description:" Tracks stock levels, fast/slow-moving drugs, and dead stock."
    },
    {
        title:"Hosting Options",
        description:"Cloud, on-premises, or private cloud deployment."
    }
]
    

export const inventoryBenifits : Benefit[] = [

  {
    text: "Prevents stockouts of critical drugs, improving patient safety.",
    position: "left",
  },
  {
    text: "Reduces ₹390 crore losses from expired drugs (as reported in Telangana).",
    position: "right",
  },
  {
    text: "Enhances operational efficiency and regulatory compliance.",
    position: "left",
  },
  ]


  
export const droneBenifits : Benefit[] = [

  {
    text: "Detects structural damage and operational inefficiencies.",
    position: "left",
  },
  {
    text: "Lowers inspection time and costs compared to traditional methods.",
    position: "right",
  },
  {
    text: "Ensures compliance with safety and regulatory standards.",
    position: "left",
  },
  ]

  
  
export const customBenifits : Benefit[] = [

  {
    text: "Predictive Analytics: Optimizes production and forecasts risks.",
    position: "left",
  },
  {
    text: "Computer Vision: Enhances safety monitoring and quality control.",
    position: "right",
  },
  {
    text: "Automation: Streamlines tasks to reduce costs.",
    position: "left",
  },
    {
    text: "Data-Driven Insights: Extracts actionable insights from complex datasets.",
    position: "right",
  },
  ]


export const digitalTwin = [
    {
        title:"Component Twins",
        description:"Model individual parts (e.g., a motor in a wind turbine)."
    },
     {
        title:"Asset Twins  ",
        description:"Capture interactions among multiple components."
    },
     {
        title:"Process Twins",
        description:"Replicate entire operational environments."
    },
     {
        title:"System Twins",
        description:"Optimize performance across multiple assets."
    }
]


export const twinPoints = [
    {
        title:"IoT",
        description:"Connects sensors to cloud platforms for real-time data."
    },
    {
        title:"Digital Twins vs. Simulations",
        description:" Unlike offline simulations, digital twins provide interactive, real-time environments linked to physical assets."
    },
    {
        title:"AI/ML",
        description:"Processes data to optimize performance and predict maintenance needs."
    },
]

  
  
export const consultBenifits : Benefit[] = [

  {
    text: "Consulting and Advisory: Develops strategic AI roadmaps.",
    position: "left",
  },
  {
    text: "Development and Integration: Builds and deploys custom AI models.",
    position: "right",
  },
  {
    text: "Support and Maintenance: Ensures long-term performance and adaptability.",
    position: "left",
  }
  ]


export const consultTwin = [
    {
        title:"Accelerated Adoption",
        description:"Bridges expertise gaps for seamless AI integration."
    },
     {
        title:"Navigating Complexity  ",
        description:"Addresses technical and ethical challenges."
    },
     {
        title:"Regulatory Compliance",
        description:"Ensures adherence to regulations like the EU AI Act."
    },
     {
        title:"Economic Impact",
        description:"Unlocks $15.7 trillion in global economic value by 2030 (PwC)."
    },
    {
        title:"Tailored Solutions",
        description:"Delivers customized AI for unique enterprise needs."
    }
]


export const consultPoints = [
    {
        title:"Niche Specialization",
        description:"Targets high-impact sectors like healthcare and finance."
    },
    {
        title:"Outcome-Based Pricing",
        description:"Aligns fees with measurable outcomes."
    },
    {
        title:"Corporate Training",
        description:"Enhances workforce AI literacy."
    },
    {
        title:"Proprietary Frameworks",
        description:"Licenses reusable AI models for high-margin revenue."
    },
    {
        title:"Retainer-Based Engagements",
        description:"Ensures continuous value delivery. "
    },
    {
        title:"Productized Packages",
        description:"Offers scalable solutions like AI readiness assessments. "
    },
    {
        title:"AI-as-a-Service Partnerships",
        description:"Leverages cloud platforms for end-to-end solutions. "
    },
     {
        title:"Data Strategy Integration",
        description:" Combines AI with data governance for robust performance. "
    },
]