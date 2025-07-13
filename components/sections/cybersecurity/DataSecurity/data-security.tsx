import { Hero } from "../set-2/hero";
import { Keyfeatures } from "../set-2/key-features";
import { PLACEHOLDER } from "@/app/assets";
import { PrismaCloud, PrismaCloudBenefits } from "./data";
import { Benefits } from "../set-2/benefits";




export const DataSecurity = () => {
    return (
        <>   
            <div className="w-full text-right">
              <h2 className="text-[80px] text-primary p-16">Data Security</h2>
            </div>
            <Hero
              title="Prisma Cloud by Palo Alto Networks"
              imageSrc={PLACEHOLDER}
            />
            <Keyfeatures 
              features={PrismaCloud} 
              overview="CrowdStrike Falcon for Cloud Workloads provides next-generation protection for cloud workloads across public cloud environments. The platform leverages the power of the CrowdStrike Falcon endpoint protection platform, using a lightweight agent to secure workloads from threats and vulnerabilities in real time. It delivers workload security through a cloud-native architecture, integrating with AWS, Azure, and Google Cloud."
            />
            <Benefits
              imageSrc={PLACEHOLDER}
              benefits={PrismaCloudBenefits}
            />
        </>
    );
}