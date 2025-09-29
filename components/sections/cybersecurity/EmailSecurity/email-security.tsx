import Section from "@/components/Section";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { CollapsiblePoints } from "@/components/shared/CollapisblePoints";
import { ThreePoints } from "@/components/shared/ThreePoints";
import { dataProofpointFeatures, emailProofpointBenefits, emailProofpointFeatures, segBarracudaBenefits, segBarracudaFeatures, segFortinetBenefits, segFortinetFeatures, segProofPointBenefits, segProofPointFeatures, segSecurenceBenefits, segSecurenceFeatures, segTrendMicroBenefits, segTrendMicroFeatures, spamProofpointBenefits, spamProofpointFeatures } from "./data";
import Index from "../components/Index";

export const EmailSecurity = () => {
    return (
        <>   
             <Section id="email-security" data-id="email-security">
                    <Index
        title="Email Security"
          slug="cybersecurity"
        data = {[
         {
          header:"Secure Email Gateways (SEGs)",
          section:"segs",
          subheader:[
          `Proofpoint`,
          `Barracuda`,
          `Fortinet`,
          `Trend Micro`,
          `Securence`
         
        ]},
         {
          header:"Spam Filters",
          section:"Spam Filters",
          subheader:[
          `Proofpoint`,
        
        ]},
        {
          header:"Email Encryption",
          section:"Email Encryption",
          subheader:[
          `Proofpoint`,
        
        ]},
        {
          header:"Data Loss Prevention (DLP) for Email",
          section:"dlp",
          subheader:[
          `Proofpoint`,
        
        ]},
        
      ]}
      />
            
           
           
                 {/* Secure Email Gateways (SEGs) */}
                 <Header title="Secure Email Gateways (SEGs)"  />
           
                 <SubHeader
                   title="Proofpoint"
                   description="Proofpoint is a market leader in email security and compliance, offering advanced threat protection through its cloud-based platform. Its solution integrates machine learning and advanced analytics to identify and neutralize sophisticated threats."
                   group="Email Security" 
                   section="SEGs"
                   position="right"
                    />
                 <CollapsiblePoints data={segProofPointFeatures} />
           
                 <ThreePoints points={segProofPointBenefits} />
           
           
                 <SubHeader
                   title="Barracuda"
                   description="Barracuda’s Email Security Gateway is a robust solution for protecting businesses against a wide range of email threats. It offers both on-premises and cloud-based deployment options."
                   group="Email Security" 
                   section="SEGs"
                   position="right"/>
                 <CollapsiblePoints data={segBarracudaFeatures} />
           
                 <ThreePoints points={segBarracudaBenefits} />
{/*            
                 <SubHeader
                   title="CISCO"
                   description="Cisco’s Email Security Appliance (ESA) provides robust protection against email threats, leveraging the power of Cisco’s Talos Intelligence Group for real-time threat analysis."
                   group="Email Security" 
                   section="SEGs"
                   position="right" />
                 <CollapsiblePoints data={segCiscoFeatures} />
           
                 <ThreePoints points={segCiscoBenefits} /> */}
           
                 <SubHeader
                   title="Fortinet"
                   description="Fortinet’s FortiMail is an advanced email security solution that provides multi-layered protection against email-based threats. It is part of the Fortinet Security Fabric, offering comprehensive integration."
                   group="Email Security" 
                   section="SEGs"
                   position="right" />
                 <CollapsiblePoints data={segFortinetFeatures} />
           
                 <ThreePoints points={segFortinetBenefits} />
           
                 <SubHeader
                   title="Trend Micro"
                   description="Trend Micro’s Email Security solution offers advanced protection through its cloud-native platform. It is particularly effective in defending against phishing and advanced persistent threats (APTs)."
                   group="Email Security" 
                   section="SEGs"
                   position="right"/>
                 <CollapsiblePoints data={segTrendMicroFeatures} />
           
                 <ThreePoints points={segTrendMicroBenefits} />
           
           
                 <SubHeader
                   title="Securence"
                   description="Securence provides reliable email filtering and protection services tailored for businesses of all sizes. Known for its simplicity and effectiveness, it focuses on delivering a robust solution for spam and malware."
                   group="Email Security" 
                   section="SEGs"
                   position="right"/>
                 <CollapsiblePoints data={segSecurenceFeatures} />
           
                 <ThreePoints points={segSecurenceBenefits} />
           
           
                 {/* Spam Filters */}
                 <Header title="Spam Filters"  />
           
                 <SubHeader
                   title="Proofpoint"
                   description="Proofpoint is a leader in cybersecurity solutions, focusing on protecting organizations from advanced threats and compliance risks. Its email security solutions are designed to identify and block phishing, ransomware, and business email compromise (BEC) attacks."
                   group="Email Security" 
                   section="Spam Filters"
                   position="right"/>
                 <CollapsiblePoints data={spamProofpointFeatures} />
           
                 <ThreePoints points={spamProofpointBenefits} />
           
           
                 {/* Email Encryption */}
                 <Header title="Email Encryption" />
           
                 <SubHeader
                   title="Proofpoint"
                   description="Proofpoint is a leader in cybersecurity, offering advanced email encryption solutions designed to protect sensitive communications and ensure regulatory compliance. Proofpoint’s encryption technology uses policy-based encryption to automatically secure messages containing sensitive information, reducing the risk of human error. Messages are encrypted in transit and can only be accessed by authorized recipients through secure portals or direct decryption."
                    group="Email Security" 
                   section="Email Encryption"
                   position="right" />
                 <CollapsiblePoints data={emailProofpointFeatures} />
           
                 <ThreePoints points={emailProofpointBenefits} />
           
                 {/* Data Loss Prevention for Email */}
                 <Header title="Data Loss Prevention (DLP) for Email" />
           
                 <SubHeader
                   title="Proofpoint"
                   description="Proofpoint is a leading cybersecurity company specializing in protecting organizations from advanced threats and compliance risks. Its email encryption solution ensures secure communication by encrypting emails containing sensitive data."
                    group="Email Security" 
                   section="DLP"
                   position="right"  />
                 <CollapsiblePoints data={dataProofpointFeatures} />
           
               </Section>
           
        </>
    );
}