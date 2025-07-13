import { securityFeatures } from "@/lib/data";
import { Hero } from "../set-1/hero";
import { Keyfeatures } from "../set-1/key-features";



export const CloudSecurity = () => {
    return (
        <>   
            <div className="w-full text-right">
              <h2 className="text-[80px] text-primary p-16">Cloud Security</h2>
            </div>
            <Hero
              title="Prisma Cloud by Palo Alto Networks"
              description="Prisma Cloud is a comprehensive Cloud Security Posture Management (CSPM) solution by Palo Alto Networks, designed to safeguard cloud environments across multiple public clouds, including AWS, Azure, Google Cloud, and more. It provides organizations with visibility, compliance, and risk management capabilities to ensure the security of cloud-native applications, infrastructure, and data."
            />
            <Keyfeatures features={securityFeatures} />
            <Hero
              title="AWS Security Hub"
              description="AWS Security Hub is Amazon Web Services’ (AWS) native CSPM solution designed to centralize security findings and provide a unified view of an organization’s security posture across AWS environments. It integrates with AWS services and third-party security tools to provide centralized insights and automate security workflows."
            />
            <Hero
              title="Microsoft Defender for Cloud"
              description=": Microsoft Defender for Cloud is a unified cloud security posture management solution that offers protection across hybrid and multi-cloud environments. It provides visibility, threat protection, and compliance management for workloads hosted on Azure, AWS, and Google Cloud."
            />
        </>
    );
}