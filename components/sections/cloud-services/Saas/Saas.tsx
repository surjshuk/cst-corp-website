import React from 'react'
import Header from '../components/Header'
import { Subhero } from '../components/subhero'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'
import { adobeDesc, adobeFeature, adobeTabData, hubDesc, hubFeature, hubTabData, ibmDesc, ibmFeature, ibmTabData, redhatDesc, redHatFeature, redHatTabData, saleData, saleDesc, saleFeature, whyAdobe, whyHub, whyIbm, whyRedHat } from './data'
import { cyberSecBG3 } from '@/app/assets'

const Saas = () => {
  return (
    <div id="saas" data-id="saas">
      <Header title={"SaaS"}/> 
       <Subhero
      subtitle='Adobe Acrobat'
      description={adobeDesc}
      />
       <Subhero
      subtitle='What is Adobe Acrobat?'
      description={whyAdobe}   
      position='left'  />

      
        <CloudSpecial tabData={adobeTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of Palo Alto Networks GlobalProtect Cloud Services" features={adobeFeature}/>
       

        <Subhero
      subtitle='IBM Enterprise Licensing Agreement'
      description={ibmDesc}
      />
       <Subhero
      subtitle='What is the IBM Enterprise Licensing Agreement?'
      description={whyIbm}   
      position='left'  />

      
        <CloudSpecial tabData={ibmTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of the IBM Enterprise Licensing Agreement" features={ibmFeature}/>
       

 <Subhero
      subtitle='Red Hat Linux'
      intro='The Industry-Leading Enterprise Operating System for Performance, Security, and Scalability'
      description={redhatDesc}
      />
       <Subhero
      subtitle='What is Red Hat Linux?'
      description={whyRedHat}   
      position='left'  />

      
        <CloudSpecial tabData={redHatTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of Red Hat Linux" features={redHatFeature}/>
       


 <Subhero
      subtitle='HubSpot'
      intro='The Industry-Leading CRM and Marketing Automation Platform for Growth, Efficiency, and Scalability'
      description={hubDesc}
      />
       <Subhero
      subtitle='What is HubSpot?'
      description={whyHub}   
      position='left'  />

      
        <CloudSpecial tabData={hubTabData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of HubSpot" features={hubFeature}/>
       

       
 <Subhero
      subtitle='Salesforce'
      intro='The Industry-Leading CRM and Cloud Platform for Sales, Marketing, and Customer Service'
      description={saleDesc}
      />
       <Subhero
      subtitle='What is Salesforce?'
      description={whyHub}   
      position='left'  />

      
        <CloudSpecial tabData={saleData} className="h-[400vh]" imageSrc={cyberSecBG3}  mask="black/80" progressMultiplierHorizontal={14}/>
        
        <KeyFeaturesSection title="Key Features of Salesforce" features={saleFeature}/>
       

    </div>
  )
}

export default Saas
