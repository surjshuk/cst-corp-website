"use client";

// Component imports
import AIScroll from "@/components/sections/common/AIScroll";
import Industries from "@/components/sections/AI/industries";
import Services from "@/components/sections/AI/services";
import Solutions from "@/components/sections/AI/solutions";
import AIConsulting from "@/components/sections/AI/aiConsulting";
import EnterpriseSuccess from "@/components/sections/AI/enterpriseSuccess";
import MonitoringDetection from "@/components/sections/AI/monitoringDetection";
import EthicalSecurity from "@/components/sections/AI/ethicalSecurity";
import PythiaAI from "@/components/sections/AI/pythiaAI";


// tabData imports or inline declarations (make sure they're available in this file or imported from separate `tabData.ts`)
import {
  servicesTabData,
  enterpriseSuccessTabData,
  pythiaAITabData,
  monitoringDetectionTabData,
  solutionsTabData,
} from "@/components/sections/AI/tabData"; // Adjust this import path based on your project structure

export default function Home() {
  return (
    <>
      <div data-id="Solutions">
        <Solutions />
        <AIScroll
          tabData={solutionsTabData}
          className="h-[400vh]"
          progressMultiplierHorizontal={12}
          progressMultiplierVertical={{ small: 7, default: 7 }}
        />
      </div>

      <div data-id="Services">
        <Services />
        <AIScroll
          tabData={servicesTabData}
          className="h-[400vh]"
          progressMultiplierHorizontal={12}
          progressMultiplierVertical={{ small: 7, default: 7 }}
        />
      </div>

      <div data-id="Industries">
        <Industries />
       
      </div>
      {/* <WhyChooseUs/> */}
      {/* <div data-id="EthicalSecurity">
        <WhyChooseUs />
        <StaticScroll
          tabData={enterpriseSuccessTabData}
          className="h-[400vh]"
          progressMultiplierHorizontal={12}
          progressMultiplierVertical={{ small: 7, default: 7 }}
        />
      </div> */}

      <div data-id="EthicalSecurity">
        <EthicalSecurity />
      </div>

      <div data-id="EnterpriseSuccess">
        <EnterpriseSuccess />
        <AIScroll
          tabData={enterpriseSuccessTabData}
          className="h-[400vh]"
          progressMultiplierHorizontal={7.5}
          progressMultiplierVertical={{ small: 10.5, default: 10.5 }}
        />
      </div>

      <div data-id="AIConsulting">
        <AIConsulting />
      </div>

      <div data-id="PythiaAI" className="mt-[100px] mb-[50px]" >
        <PythiaAI />
        <AIScroll
          tabData={pythiaAITabData}
          className="h-[400vh]"
          progressMultiplierHorizontal={12}
          progressMultiplierVertical={{ small: 7, default: 7 }}
        />
      </div>

      <div data-id="MonitoringDetection">
        <MonitoringDetection />
        <AIScroll
          tabData={monitoringDetectionTabData}
          className="h-[400vh]"
          progressMultiplierHorizontal={12}
          progressMultiplierVertical={{ small: 7, default: 7 }}
        />
      </div>
    </>
  );
}
