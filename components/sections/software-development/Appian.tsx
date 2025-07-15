import { PLACEHOLDER } from "@/app/assets";
import Special from "./components/Special";
import { SubHero } from "./components/subhero";
import { AppianData, AppianFeatures } from "./data";
import { KeyFeaturesSection } from "./components/key-features";

export const Appian = () => {
    return (
        <>
            <SubHero 
                title="Appian Solutions Across Industries"
                description="Appian is a leading low-code platform designed to accelerate digital transformation across diverse industries. By combining automation, artificial intelligence (AI), and seamless integrations, Appian empowers organizations to optimize operations, enhance customer experiences, and achieve measurable business outcomes. Below, we detail how Appian delivers tailored solutions for banking, healthcare, energy, retail, government, and manufacturing."
            />
            <Special tabData={AppianData} className={"h-[600vh]"} imageSrc={PLACEHOLDER} mask="black/80"/>
            <KeyFeaturesSection features={AppianFeatures} title="Appian" />
        </>
    );
}   