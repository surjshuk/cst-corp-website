"use client";

import Special from "@/components/sections/AI/Special";
import { anomlyPoints, consultBenifits, consultPoints, consultTwin, customBenifits, digitalTwin, droneBenifits, governanceBenifits, governanceData, inventoryBenifits, inventoryPoints, mudBenifits, mudPoints, saferigBenifits, saferigPoints, twinPoints } from "@/components/sections/AI/data";
import { Benefits } from "@/components/sections/AI/benefits";
import Twin from "@/components/sections/AI/Twin";
import { BaggageClaim, Building, Car, CreditCard, Droplet, HeartPulse } from "lucide-react";

export default function Home() {
  return (
    <>
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

  
    <div data-id="ai-governance" id="ai-governance" >
      <div className="py-20 ps-20 pe-32">

          <div className="text-black ">
            <div className="w-1/3">
              <h1 className="  text-6xl">
                AI Governance
              </h1>
              <p className="text-xl">Ensuring Ethical, Secure, and Responsible Deployment</p>
            </div>
          <p className="mt-10 w-1/3 ms-auto me-20">
           Our drone-based solution uses AI analytics and high-resolution cameras to monitor critical infrastructure, reducing inspection costs and enhancing safety.
           </p>
        </div>
        <div className=" mt-20">

        <p className="mb-5 font-medium text-sm">
          Key Governance Aspects
        </p>
        <div className="grid grid-cols-2 gap-24" >
          {governanceData.map((e,i)=>(
            <div key={i} >
            <h3 className=" text-2xl text-blue-500">{e.title}</h3>
            <p className="mt-4">
              {e.description}
            </p>
            </div>
          ))}
        </div>
        </div>
            </div>
    <Benefits  benefits={governanceBenifits}/>

    <p className="w-2/6 ps-20 pe-32 py-20">Our governance approach ensures AI deployments are not only effective but also ethical and secure, aligning with both regulatory standards and organizational goals.
    </p>
    </div>

    <div data-id="industries-we-serve" id="industries-we-serve">

      <div className="border-t border-black py-20 ps-20 pe-32">
          <h1 className="w-1/3 text-black text-7xl">
          Industries We Serve
          </h1>
          <div className="grid grid-cols-2 gap-10 mt-20">

            <div>
              <div className="flex gap-2 items-center">
                <Droplet/>
                <h3 className="text-2xl">Oil and Gas</h3>
              </div>
              <p className="text-sm mt-4">Predictive maintenance and hazard detection.</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <Building/>
                <h3 className="text-2xl">Manufacturing</h3>
              </div>
              <p className="text-sm mt-4">Process optimization and quality control.</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <HeartPulse/>
                <h3 className="text-2xl">Healthcare </h3>
              </div>
              <p className="text-sm mt-4">Inventory management and predictive analytics.</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <CreditCard/>
                <h3 className="text-2xl">Finance</h3>
              </div>
              <p className="text-sm mt-4">Risk assessment and fraud detection.</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                  <BaggageClaim />
                <h3 className="text-2xl">Retail</h3>
              </div>
              <p className="text-sm mt-4">Personalized experiences and supply chain optimization.</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <Car/>
                <h3 className="text-2xl">Transportation</h3>
              </div>
              <p className="text-sm mt-4">Real-time logistics and fleet management.</p>
            </div>


          </div>
        
      </div>

      <div className="py-20 ps-20 pe-32">
        <div className="w-1/2 ms-auto">
          <h1 className=" text-black text-7xl">
            Why Choose Us?
          </h1>
          <div className=" my-16">
            <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Industry Expertise</h4>
              <p className="text-sm mt-2">Deep understanding of sector-specific challenges.</p>
            </div>
             <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Proven Solutions</h4>
              <p className="text-sm mt-2">Validated success in predictive maintenance and safety systems.</p>
            </div>
            <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Strategic Partnerships</h4>
              <p className="text-sm mt-2"> Collaboration with Bramer for advanced drone technology.</p>
            </div>
            <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Customized Approach</h4>
              <p className="text-sm mt-2"> Tailored solutions for unique business needs.</p>
            </div>
             <div className="border-b py-4 border-blue-500">
              <h4 className="text-blue-500 font-medium text-sm">Business Value Focus</h4>
              <p className="text-sm mt-2">  Delivers measurable ROI, efficiency, and safety gains.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
 
    </>
  );
}

