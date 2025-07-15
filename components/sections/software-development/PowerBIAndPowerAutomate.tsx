import { SubHero } from "./components/subhero";

import Special from "./components/Special";
import { KeyFeaturesSection } from "./components/key-features";
import { powerBiData,powerBiFeatures } from "./data";
import { mainBG4 } from "@/app/assets/index";

export const PowerBIAndPowerAutomate = () => {
  return (
    <>
      <SubHero
        title="Microsoft Power BI and Power Automate Solutions Across Industries"
        description="Microsoft Power BI and Power Automate are powerful tools that empower organizations to transform data into actionable insights and automate workflows to boost efficiency. These solutions provide advanced analytics, seamless integrations, and intuitive automation capabilities that help businesses make smarter decisions, streamline processes, and drive innovation.
        Here’s how Power BI and Power Automate deliver industry-specific value in banking, healthcare, energy, retail, government, and manufacturing"
      />

      <Special tabData={powerBiData} className={"h-[600vh]"} imageSrc={mainBG4} mask="black/70"/>
      <KeyFeaturesSection features={powerBiFeatures} title="powerBi" />
    </>
  );
};
