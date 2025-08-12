import { Hero } from "../set-1/hero";
import { PLACEHOLDER } from "@/app/assets/";
import { PrismaCloud, PrismaCloudBenefits } from "./data";
import { Benefits } from "../set-1/benefits";
import { KeyFeaturesSection } from "../set-1/key-features";




export const DataSecurity = () => {
    return (
        <>   
            {/* <div className="w-full text-right">
              <h2 className="text-xl laptop:text-[80px] text-primary p-16">Data Security</h2>
            </div> */}
            <Hero
              title="Prisma Cloud by Palo Alto Networks"
              imageSrc={PLACEHOLDER}
            />
            <KeyFeaturesSection 
              features={PrismaCloud} 
            />
            <Benefits
              benefits={PrismaCloudBenefits}
            />
        </>
    );
}