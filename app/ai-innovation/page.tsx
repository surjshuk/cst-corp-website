"use client";

import Special from "@/components/sections/AI/Special";
import { anomlyPoints, consultBenifits, consultPoints, consultTwin, customBenifits, digitalTwin, droneBenifits, inventoryBenifits, inventoryPoints, mudBenifits, mudPoints, saferigBenifits, saferigPoints, twinPoints } from "@/components/sections/AI/data";
import { Benefits } from "@/components/sections/AI/benefits";
import Twin from "@/components/sections/AI/Twin";

export default function Home() {
  return (
    <>
      {/* <div id="generic-ai">
        <div data-id="generic-ai">
          <Solutions />
          <AIScroll
            tabData={solutionsTabData}
            className="h-[400vh]"
            imageSrc={mainBG2}
            mask="black/80"
            progressMultiplierHorizontal={14} progressMultiplierVertical={{small: 4, default: 7}}
          />  

        </div>

        <div data-id="generic-ai">
          <Overview
            title="Services"
            description={[
              "Our comprehensive AI services support organizations at every stage of their AI journey, from strategy to ongoing optimization. We focus on delivering practical, high-impact solutions that align with your business objectives."
            ]}
            />


          <AIScroll
            tabData={servicesTabData}
            className="h-[400vh]"
            imageSrc={PLACEHOLDER}
            mask="black/80"
            
            />

        <Feature
          title="Industries We Serve"
          intro="Our AI solutions are versatile, delivering transformative results across a wide range of industries. We’ve successfully implemented projects in sectors including:"
          features={industriesFeatures}
          concludingNote="Our flexible consulting and product approach allows us to tailor AI solutions to the unique challenges of any industry, ensuring measurable value and business impact."
          />  
        

        <Feature
          title="Ensuring Ethical and Secure Deployment"
          intro="We are committed to responsible AI deployment, enforcing strong security and ethical guardrails to mitigate risks. Our secure frameworks ensure:"
          features={ethicalSecurityFeatures}
          concludingNote="This flexible approach enables us to deliver AI systems that remain trustworthy, compliant, and operationally safe for high-integrity use cases."
          />
        </div>

      </div>
      <div data-id="ai-governance" id="ai-governance">
        <Overview
          title="Driving Enterprise Success in the Age of Intelligence"
          description={[
            "In an era defined by rapid technological advancement, artificial intelligence (AI) is reshaping industries and redefining competitive landscapes. For Fortune 500 and S&P 500 enterprises, leveraging AI is no longer optional—it is a strategic imperative. Our AI consulting services empower organizations to harness AI’s transformative potential, delivering measurable value through innovation, efficiency, and ethical deployment.",
            "Below, we explore the critical role of AI consulting in the future, strategies to maximize its value, and innovative approaches to meet the evolving needs of global enterprises."
          ]}
        />
        <AIScroll
          tabData={enterpriseSuccessTabData}
          className="h-[400vh]"
          imageSrc={AIBG2}
          mask="black/80"
        />

      </div>
      <div data-id="ai-consulting" id="ai-consulting">
        <Feature 
          title="Monetizing AI Consulting Effectively"
          intro="To deliver maximum value to clients and ensure sustainable growth, AI consulting must be strategically monetized. Our approach combines innovative pricing models, scalable offerings, and client-centric strategies to drive impactful results:"
          features={aiConsultingFeatures}
          concludingNote="By aligning our monetization strategies with client priorities, we deliver exceptional ROI while building a scalable, future-ready consulting practice."
        />
      </div>

      <div data-id="pythia-ai" id="pythia-ai" className="mt-[100px] mb-[50px]" >
        <Overview
          title="Pythia AI"
          description={[
            "PythiaAI is an advanced predictive maintenance platform for oil and gas rig equipment, such as mud pumps, top drives, and diesel generators.",
            "Using Electronic Drilling Recorder (EDR) data and optional sensors, it analyzes real-time data streams — pressure, vibration, torque, flow, and temperature — to detect anomalies and predict failures.",
            "PythiaAI provides precise fault detection, accurate Remaining Useful Life (RUL) modeling, and actionable guidance, empowering maintenance teams with exceptional operational foresight."
          ]}
        />
        <AIScroll
          tabData={pythiaAITabData}
          className="h-[600vh]"
          imageSrc={mainBG4}
          mask="black/80"
        />

        <Overview
          title="Monitoring and Detection"
          description={[
            "PythiaAI uses advanced AI to detect failure modes in oil and gas rig equipment. For mud pumps, it identifies seal leaks, cavitation, and piston wear. For top drives, it monitors gearbox wear, bearing fatigue, shaft misalignment, over-torque/over-speed, and hydraulic/electrical issues. For diesel generators, it tracks engine parameters and load imbalances to prevent outages. In high-risk scenarios, adding vibration, acoustic, or thermal sensors enhances fault detection for bearings, gearboxes, and injectors when EDR data is insufficient.",
            "In a recent case, PythiaAI combined vibration and EDR data to predict a mud pump seal failure 24 hours in advance. Its anomaly detection identifies deviations within 5-15 minutes, before signals degrade or trigger standard alarms.",
            "The following tables show an indicative list of alerts that can be generated for each asset type on the PythiaAI platform."
          ]}
        />
        <AIScroll
          tabData={monitoringDetectionTabData}
          className="h-[400vh]"
          imageSrc={mainBG1}
          mask="black/80"
        />
      </div>

      <div data-id="ai-twin" id="ai-twin">
        <Overview
          title="AI Digital Twin Technology"
          description={[
            "A Digital Twin is a real-time, AI-enhanced virtual model of a physical object, system, or process. By continuously receiving data from sensors via IoT and processing it through AI algorithms, digital twins replicate the current state and behavior of assets throughout their operational lifecycle.",
            "Unlike traditional simulations, digital twins are dynamic, updating in real-time to mirror the physical counterpart. This allows organizations to monitor, predict, and optimize performance remotely — improving decision-making, maintenance strategies, and operational efficiency."
          ]}
        />
        <Feature
          title="Types of Digital Twins"
          intro="Digital twins come in various forms, each addressing specific levels of complexity and operational scope:"
          features={digitalTwinTypes}
          concludingNote="Each type plays a vital role in building a connected, AI-driven operational environment capable of proactive management and optimization."
        />
        <Overview
          title="Benefits of Digital Twin Technology"
          description={[
            "Enhances real-time performance monitoring and proactive issue resolution, minimizing downtime.",
            "Leverages predictive analytics to detect potential failures before they occur, reducing maintenance costs.",
            "Enables remote oversight of critical, hazardous, or distributed assets, increasing operational safety and efficiency.",
            "Speeds up production cycles and facility design by enabling virtual prototyping and iterative testing before physical implementation."
          ]}
        />
      </div> */}

      <div data-id="overview" id="overview">

     
      <div className="ps-20 pe-32 py-10">
        <div className=" w-1/3 py-20">
          <h1 className="text-7xl">
            AI Solutions
          </h1>
          <p className="mt-10">Transform your operations with cutting-edge AI solutions designed to drive efficiency, enhance safety, and deliver unparalleled business value. From predictive maintenance to real-time hazard detection, our innovative platforms empower industries like oil and gas, healthcare, and manufacturing to achieve operational excellence. Discover how our AI-driven tools can revolutionize your business with measurable outcomes and seamless integration. Start your AI journey today and unlock a future of intelligent innovation.</p>
        </div>

        <div className=" w-1/3 py-10 ms-auto">
          <h1 className="text-6xl">
           Our AI-Powered Solutions
          </h1>
          <p className="mt-10">
            Our suite of AI solutions leverages advanced machine learning, computer vision, and analytics to address critical industry challenges, ensuring innovation, efficiency, and competitive advantage.  
          </p> 
        </div>

        <div>

        <h1 className="w-1/3 text-blue-500 text-6xl">
          Smart Predictive Maintenance
        </h1>
         <p className="mt-10 w-1/3 ms-auto">
           Our flagship solution, PythiaAI, revolutionizes predictive maintenance for oil and gas rig equipment such as mud pumps, top drives, and diesel generators. By analyzing real-time Electronic Drilling Recorder (EDR) data and optional sensor inputs (pressure, vibration, torque, flow, temperature), PythiaAI delivers precise fault detection, accurate Remaining Useful Life (RUL) modeling, and actionable guidance.
         </p>
        </div>

       
      </div>
       <Special points={anomlyPoints}/>

      <div className="ps-20 pe-32 py-10">
        <div className=" w-1/3 py-10 ms-auto">
          <h1 className="text-7xl">
           Monitoring and Detection
          </h1>
          <p className="mt-10">
            PythiaAI detects failure modes such as seal leaks, cavitation, piston wear (mud pumps), gearbox wear, bearing fatigue (top drives), and load imbalances (diesel generators). In a recent case, it predicted a mud pump seal failure 24 hours in advance, combining vibration and EDR data for early warnings.
           </p> 
        </div>
        <div className=" w-1/3 py-10">
          <h1 className="text-7xl">
            Measurable Value
          </h1>
          <ul className="mt-10 list-disc px-5">
            <li>Prevents costly failures ($5,000–$15,000/hour), yielding multimillion-dollar savings.</li>
            <li>Achieves 8x to 35x ROI, with one client reporting a 35% reduction in downtime and 20% lower maintenance costs, saving $2 billion annually.</li>
            <li>Reduces downtime by 30–80% with low false-alarm rates.</li>
          </ul>  
        </div>
        
        <div className=" w-1/3 py-20">
          <h1 className="text-7xl">
           Seamless Deployment
          </h1>
          <p className="mt-10">
            Integrates with existing rig data networks (EDR, SCADA) and enterprise systems, ensuring reliability with offline buffering.
          </p> 
        </div>

        <div className="border-t border-black py-20">
          <h1 className="w-1/2 text-blue-500 text-6xl">
            AI-Enabled Generator and Mud Pump Optimization Platform
          </h1>
         <p className="mt-10 w-1/3 ms-auto me-20">
           Our Generator and Mud Pump Optimization Platform enhances oil and gas rig efficiency by intelligently managing equipment scheduling, fuel consumption, and maintenance planning.
          </p>
        </div>

        
      </div>
        <Special points={mudPoints}/>
        <Benefits benefits={mudBenifits}/>

         <div className="border-t border-black py-20 ps-20 pe-32">
          <h1 className="w-1/2 text-blue-500 text-6xl">
           SafeRig: AI-Powered Hazard Detection
          </h1>
          <p className="mt-10 w-1/3 ms-auto me-20">
           SafeRig is an AI-driven safety platform designed for offshore oil rigs and high-risk industrial environments, using computer vision and edge AI to ensure worker safety and compliance.
          </p>
        </div>

         <Special points={saferigPoints}/>
        <Benefits benefits={saferigBenifits}/>

        
         <div className="border-t border-black py-20 ps-20 pe-32">
          <h1 className="w-1/2 text-blue-500 text-6xl">
          AI-Enabled Medicines Inventory Management System
          </h1>
          <p className="mt-10 w-1/3 ms-auto me-20">
           Our Medicines Inventory Management System transforms hospital inventory management in India, addressing issues like stockouts, overstocking, and medicine expiry.
          </p>
        </div>

         <Special points={inventoryPoints}/>
        <Benefits benefits={inventoryBenifits}/>

         <div className="border-t border-black py-20 ps-20 pe-32">
          <h1 className="w-1/2 text-blue-500 text-6xl">
          Drone-Based Infrastructure Monitoring
          </h1>
          <p className="mt-10 w-1/3 ms-auto me-20">
           Our drone-based solution uses AI analytics and high-resolution cameras to monitor critical infrastructure, reducing inspection costs and enhancing safety.
           </p>
        </div>
        <Benefits benefits={droneBenifits}/>

        <div className="border-t border-black py-20 ps-20 pe-32">
          <h1 className="w-1/2 text-blue-500 text-6xl">
          Custom AI Solutions
          </h1>
          <p className="mt-10 w-1/3 ms-auto me-20">
           Our drone-based solution uses AI analytics and high-resolution cameras to monitor critical infrastructure, reducing inspection costs and enhancing safety.
           </p>
        </div>
        <Benefits title="Applications" benefits={customBenifits}/>

 </div>
 <div data-id="ai-digital-twin" id="ai-digital-twin">


        <div className="ps-20 pe-32 py-20 grid grid-cols-2 items-end">
          <h1 className=" text-black text-7xl mb-20">
              AI Digital Twin Technology
          </h1>
          <p className="mt-10 w-2/6 text-sm">
           Digital Twin Technology creates virtual models of physical assets, enabling real-time monitoring and optimization across their lifecycle.
          </p>

        </div>
        <Twin title="Types of Digital Twins" points={digitalTwin}/>
       
        <Benefits benefits={customBenifits}/>
 
         <Special points={twinPoints} title="how it works"/>
 </div>

  <div data-id="ai-consulting" id="ai-consulting">

          <div className="ps-20 pe-32 py-20 grid grid-cols-2 items-end">
          <h1 className=" text-black text-7xl mb-20">
              AI Consulting Services
          </h1>
          <p className="mt-10 w-2/6 text-sm">
           Our AI Consulting Services empower Fortune 500 and S&P 500 enterprises to leverage AI for strategic advantage.
          </p>
        </div>


<Twin title="Importance" points={consultTwin}/>
       
         <Special title="Monetization Strategies" points={consultPoints} />
        <Benefits title="Services" benefits={consultBenifits}/>
  </div>
 
    </>
  );
}

