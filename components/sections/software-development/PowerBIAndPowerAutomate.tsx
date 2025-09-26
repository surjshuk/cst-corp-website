import { SubHero } from "./components/subhero";


import { KeyFeaturesSection } from "./components/key-features";
import { powerBiData,powerBiFeatures } from "./data";

import MainCarousel from "./components/MainCarousel";

export const PowerBIAndPowerAutomate = () => {
  return (
    <>
      <SubHero
        title="Microsoft Power BI and Power Automate Solutions Across Industries"
        description="Microsoft Power BI and Power Automate are powerful tools that empower organizations to transform data into actionable insights and automate workflows to boost efficiency. These solutions provide advanced analytics, seamless integrations, and intuitive automation capabilities that help businesses make smarter decisions, streamline processes, and drive innovation.
        Here’s how Power BI and Power Automate deliver industry-specific value in banking, healthcare, energy, retail, government, and manufacturing"
      />
      <MainCarousel tabData={powerBiData} />
      <KeyFeaturesSection features={powerBiFeatures} title="powerBi" />
    </>
  );
};
