

import { SubHero } from "./components/subhero";
import { outSystemsData, outSystemsFeatures,outSystemsAnotherData,outSystemsAnotherFeatures } from "./data";
import { KeyFeaturesSection } from "./components/key-features";
import MainCarousel from "./components/MainCarousel";

export const OutSystems = () => {
    return (
        <>    
            <SubHero 
                title="OutSystems Low-Code Development Platform: Transforming Digital Innovation"
                description="Appian is a leading low-code platform designed to accelerate digital transformation across diverse industries. By combining automation, artificial intelligence (AI), and seamless integrations, Appian empowers organizations to optimize operations, enhance customer experiences, and achieve measurable business outcomes. Below, we detail how Appian delivers tailored solutions for banking, healthcare, energy, retail, government, and manufacturing."
            />
            <MainCarousel tabData={outSystemsData} />
            <KeyFeaturesSection features={outSystemsFeatures} title="outSystems" />

            <SubHero 
                title="OutSystems Solutions Across Key Industries"
                description="OutSystems enables organizations across various industries to accelerate innovation, optimize operations, and deliver exceptional user experiences. By combining speed, scalability, and flexibility, OutSystems empowers businesses to create tailored solutions that address unique challenges and achieve measurable outcomes."
            />
            <MainCarousel tabData={outSystemsAnotherData} />
            <KeyFeaturesSection features={outSystemsAnotherFeatures} title="outSystemAnother" />

        </>
    );
}