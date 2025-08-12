
import Special from "./components/Special";
import { SubHero } from "./components/subhero";
import { outSystemsData, outSystemsFeatures,outSystemsAnotherData,outSystemsAnotherFeatures } from "./data";
import { KeyFeaturesSection } from "./components/key-features";
import { mainBG1, mainBG3 } from "@/app/assets/";

export const OutSystems = () => {
    return (
        <>    
            <SubHero 
                title="OutSystems Low-Code Development Platform: Transforming Digital Innovation"
                description="Appian is a leading low-code platform designed to accelerate digital transformation across diverse industries. By combining automation, artificial intelligence (AI), and seamless integrations, Appian empowers organizations to optimize operations, enhance customer experiences, and achieve measurable business outcomes. Below, we detail how Appian delivers tailored solutions for banking, healthcare, energy, retail, government, and manufacturing."
            />
            <Special tabData={outSystemsData} className={"h-[600vh]"} imageSrc={mainBG1} mask="black/70"/>
            <KeyFeaturesSection features={outSystemsFeatures} title="outSystems" />

            <SubHero 
                title="OutSystems Solutions Across Key Industries"
                description="OutSystems enables organizations across various industries to accelerate innovation, optimize operations, and deliver exceptional user experiences. By combining speed, scalability, and flexibility, OutSystems empowers businesses to create tailored solutions that address unique challenges and achieve measurable outcomes."
            />
            <Special tabData={outSystemsAnotherData} className={"h-[600vh]"} imageSrc={mainBG3} mask="black/70"/>
            <KeyFeaturesSection features={outSystemsAnotherFeatures} title="outSystemAnother" />

        </>
    );
}