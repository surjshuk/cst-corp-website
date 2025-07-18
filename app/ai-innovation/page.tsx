"use client";

import AIScroll from "@/components/sections/common/AIScroll";
import Solutions from "@/components/sections/AI/solutions";

import {
  servicesTabData,
  enterpriseSuccessTabData,
  pythiaAITabData,
  monitoringDetectionTabData,
  solutionsTabData,
  aiConsultingFeatures,
  industriesFeatures,
  ethicalSecurityFeatures,
  digitalTwinTypes,
} from "@/components/sections/AI/tabData"; // Adjust this import path based on your project structure
import { PLACEHOLDER } from "../assets";
import { Feature } from "@/components/sections/AI/feature";
import { Overview } from "@/components/sections/AI/overview";
import {  mainBG1, mainBG2, mainBG4 } from "../assets/index";
import { AIBG2 } from "../assets/index";

export default function Home() {
  return (
    <>
      <div id="generic-ai">
        <div data-id="generic-ai">
          <Solutions />
          <AIScroll
            tabData={solutionsTabData}
            className="h-[400vh]"
            imageSrc={mainBG2}
            mask="black/80"
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
      </div>
    </>
  );
}

