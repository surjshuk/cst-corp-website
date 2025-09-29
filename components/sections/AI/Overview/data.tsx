import { ThreePoint } from "@/types/declaration"


export const pythiaPoints = [ 
    {
        title:"Adaptive Anomaly Detection",
        description:"Continuously learns asset behavior from both historical and streaming data to flag abnormal conditions."
    },
    {
        title:"Predictive Lifespan Modeling",
        description:"Provides Remaining Useful Life (RUL) estimates for critical rig components with high accuracy."
    },
    {
        title:"Physics-Aware Diagnostics",
        description:"Combines AI insights with engineering models to confirm failure signatures and reduce false alarms."
    },
    {
        title:"Actionable Maintenance Guidance",
        description:"Translates fault detection into step-by-step recommendations operators can immediately apply."
    },
    {
        title:"Feedback-Driven Refinement",
        description:"Incorporates operator input to continuously improve prediction reliability and trustworthiness."
    },
    {
        title:"Integrated Safety Monitoring",
        description:"Enhances operational safety with real-time hazard detection through video and thermal feeds."
    }
]


export const medicalPoints = [ 
    {
        title:"Demand Forecasting",
        description:"Predicts future inventory needs using patient trends, seasonal data, and treatment patterns."
    },
    {
        title:"Real-Time Stock Tracking",
        description:"Monitors supplies with IoT and barcode integration to maintain accurate inventory visibility."
    },
    {
        title:"Automated Replenishment",
        description:"Generates smart purchase orders and alerts to avoid stockouts or overstocking."
    },
    {
        title:"Expiry & Waste Management",
        description:"Identifies expiring medicines early and optimizes usage to reduce wastage and cost."
    },
    {
        title:"Critical Item Prioritization",
        description:"Highlights lifesaving supplies like blood bags, oxygen, or emergency drugs for proactive restocking."
    },
    {
        title:"Regulatory Compliance",
        description:"Ensures traceability and reporting aligned with healthcare standards and safety protocols."
    }
]


export const aicctvPoints = [ 
    {
        title:"Smart Object Recognition",
        description:"Identifies people, vehicles, and items with high accuracy in diverse environments."
    },
    {
        title:"Behavior & Threat Detection",
        description:"Flags unusual movement, loitering, or aggression using AI-powered pattern analysis."
    },
    {
        title:"Intrusion Alerts",
        description:"Automatically detects perimeter breaches or restricted area entries in real time."
    },
    {
        title:"Safety & Compliance Monitoring",
        description:"Ensures PPE usage, fire exits clearance, and safety protocol adherence via vision models."
    },
    {
        title:"Crowd & Flow Analysis",
        description:"Analyzes crowd density, queue length, and flow to support safety and efficiency."
    },
    {
        title:"Evidence Archiving",
        description:"Indexes video streams with searchable tags for faster investigations and compliance audits."
    }
]

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


export const mudBenifits : ThreePoint[] = [

  {
    text: "Reduces fuel costs and carbon emissions.",
    
  },
  {
    text: "Extends equipment lifespan and prevents unplanned maintenance.",
   
  },
  {
    text: "Enhances operational resilience across multiple rigs.",
    
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

export const saferigBenifits : ThreePoint[] = [

  {
    text: "Reduces workplace accidents and legal liabilities.",
    
  },
  {
    text: "Ensures compliance with global safety regulations.",
   
  },
  {
    text: "Operates reliably in remote, low-bandwidth environments.",
    
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
    

export const inventoryBenifits : ThreePoint[] = [

  {
    text: "Prevents stockouts of critical drugs, improving patient safety.",
    
  },
  {
    text: "Reduces ₹390 crore losses from expired drugs (as reported in Telangana).",
   
  },
  {
    text: "Enhances operational efficiency and regulatory compliance.",
    
  },
  ]


  
export const droneBenifits : ThreePoint[] = [

  {
    text: "Detects structural damage and operational inefficiencies.",
    
  },
  {
    text: "Lowers inspection time and costs compared to traditional methods.",
   
  },
  {
    text: "Ensures compliance with safety and regulatory standards.",
    
  },
  ]

  
  
export const customBenifits : ThreePoint[] = [

  {
    text: "Predictive Analytics: Optimizes production and forecasts risks.",
    
  },
  {
    text: "Computer Vision: Enhances safety monitoring and quality control.",
   
  },
  {
    text: "Automation: Streamlines tasks to reduce costs.",
    
  },
    {
    text: "Data-Driven Insights: Extracts actionable insights from complex datasets.",
   
  },
  ]
