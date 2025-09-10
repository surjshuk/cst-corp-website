import Section from "@/components/Section";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { CollapsiblePoints } from "@/components/shared/CollapisblePoints";
import { ThreePoints } from "@/components/shared/ThreePoints";
import { dlpCiscoBenefits, dlpCiscoFeatures, dlpPaloAltoBenefits, dlpPaloAltoFeatures, dlpTrendMicroBenefits, dlpTrendMicroFeatures, dlpVersaBenefits, dlpVersaFeatures, idaasIBMFeatures } from "./data";
import { fortiDLPBenefits } from "../CloudSecurity/data";
import Index from "../components/Index";


export const DataSecurity = () => {
    return (
        <>   
             <Section id="data-security" >
              
      <Index
        title="Data Security"
      slug="cybersecurity"
        data = {[
   
         {
          header:"Data Loss Prevention (DLP)",
          section:"dlp",
          subheader:[
          `FortiDLP`,
          `Cisco Umbrella- DLP`,
          `Palo Alto Prisma - DLP`,
          `Versa Networks - DLP`,
          `Microsoft Purview`,
         
        ]},
        
        
      ]}
      />
            
                  <Header title="Data Loss Prevention (DLP)"/>
                  <SubHeader
                    title=" FortiDLP"
                    description="Fortinet's FortiDLP is a comprehensive data loss prevention solution that provides organizations with real-time protection to safeguard sensitive data across endpoints, networks, and the cloud. It leverages Fortinet’s advanced security fabric architecture, enabling seamless integration with FortiGate firewalls, FortiMail, FortiWeb, and other Fortinet products."
                    group="Data Security" 
                    section="DLP"
                    position="right"  />
                  <CollapsiblePoints data={idaasIBMFeatures} />
            
                  <ThreePoints points={fortiDLPBenefits} />
            
            
                  <SubHeader
                    title=" Cisco Umbrella- DLP "
                    description="Cisco Umbrella is a cloud-delivered network security platform that provides comprehensive DLP capabilities, particularly focusing on protecting data from leaks during cloud-based activities. Cisco Umbrella integrates DLP with its suite of advanced threat protection tools, including DNS-layer security, cloud firewall, and secure web gateway."
                    group="Data Security" 
                    section="DLP"
                    position="right"/>
                  <CollapsiblePoints data={dlpCiscoFeatures} />
            
                  <ThreePoints points={dlpCiscoBenefits} />
            
            
                  <SubHeader
                    title=" Palo Alto Prisma - DLP "
                    description="Palo Alto Prisma is a cloud-native platform designed to secure data and applications across cloud environments. Prisma’s DLP capabilities provide comprehensive protection for organizations that rely on cloud infrastructure and SaaS applications."
                    group="Data Security" 
                    section="DLP"
                    position="right" />
                  <CollapsiblePoints data={dlpPaloAltoFeatures} />
            
                  <ThreePoints points={dlpPaloAltoBenefits} />
            
            
                  <SubHeader
                    title=" Trend Micro - DLP "
                    description="Trend Micro DLP is a robust solution designed to protect sensitive information across endpoints, networks, and cloud environments. It leverages AI and machine learning to provide proactive DLP protection, ensuring that data is always secure, whether it’s at rest, in transit, or in use."
                    group="Data Security" 
                    section="DLP"
                    position="right"/>
                  <CollapsiblePoints data={dlpTrendMicroFeatures} />
            
                  <ThreePoints points={dlpTrendMicroBenefits} />
            
                  <SubHeader
                    title=" Versa Networks - DLP"
                    description="Versa Networks provides a comprehensive SD-WAN and secure access service edge (SASE) solution that includes data loss prevention as part of its security services. Versa’s DLP capabilities are tightly integrated with its SASE platform to secure data across distributed environments."
                    group="Data Security" 
                    section="DLP"
                    position="right"/>
                  <CollapsiblePoints data={dlpVersaFeatures} />
            
                  <ThreePoints points={dlpVersaBenefits} />
            
            
            
                  <SubHeader
                    title=" Microsoft Purview "
                    description="Microsoft Purview (formerly Microsoft 365 Compliance Center) provides advanced data loss prevention features within Microsoft 365 environments. It helps organizations discover, classify, and protect sensitive data across Microsoft 365 services, including SharePoint, OneDrive, Teams, and Exchange."
                    group="Data Security" 
                    section="DLP"
                    position="right" />
                  <CollapsiblePoints data={dlpTrendMicroFeatures} />
            
                  <ThreePoints points={dlpTrendMicroBenefits} />
                </Section>
        </>
    );
}