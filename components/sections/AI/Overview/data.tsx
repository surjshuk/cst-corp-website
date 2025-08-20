import { ThreePoint } from "@/types/declaration"

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
