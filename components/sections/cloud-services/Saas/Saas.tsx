import React from 'react'
import Header from '../components/Header'
import { SubHeader } from '../components/SubHeader'
import CloudSpecial from '../components/Special'
import { KeyFeaturesSection } from '../key-features'
import { adobeDesc, adobeFeature, adobeTabData, hubDesc, hubFeature, hubTabData, ibmDesc, ibmFeature, ibmTabData, redhatDesc, redHatFeature, redHatTabData, saleData, saleDesc, saleFeature, whyAdobe, whyHub, whyIbm, whyRedHat } from './data'
import Section from '@/components/Section'

const Saas = () => {
  return (
    <Section id="saas" data-id="saas">
      <Header title={"SaaS"}/> 
       <SubHeader
      title='Adobe Acrobat'
      description={adobeDesc}
      position='right'
            group='SaaS'
            website='dsd'
      />
       <SubHeader
      title='What is Adobe Acrobat?'
      description={whyAdobe}   
      position='left'  />

      
        <CloudSpecial tabData={adobeTabData}/>
        
        <KeyFeaturesSection title="Key Features of Palo Alto Networks GlobalProtect Cloud Services" features={adobeFeature}/>
       

        <SubHeader
      title='IBM Enterprise Licensing Agreement'
      description={ibmDesc}
      position='right'
            group='SaaS'
            website='dsd'
      />
       <SubHeader
      title='What is the IBM Enterprise Licensing Agreement?'
      description={whyIbm}   
      position='left'  />

      
        <CloudSpecial tabData={ibmTabData} />
        
        <KeyFeaturesSection title="Key Features of the IBM Enterprise Licensing Agreement" features={ibmFeature}/>
       

 <SubHeader
      title='Red Hat Linux'
      subtitle='The Industry-Leading Enterprise Operating System for Performance, Security, and Scalability'
      description={redhatDesc}
      />
       <SubHeader
      title='What is Red Hat Linux?'
      description={whyRedHat}   
      position='left'  />

      
        <CloudSpecial tabData={redHatTabData} />
        
        <KeyFeaturesSection title="Key Features of Red Hat Linux" features={redHatFeature}/>
       


 <SubHeader
      title='HubSpot'
      subtitle='The Industry-Leading CRM and Marketing Automation Platform for Growth, Efficiency, and Scalability'
      description={hubDesc}
      />
       <SubHeader
      title='What is HubSpot?'
      description={whyHub}   
      position='left'  />

      
        <CloudSpecial tabData={hubTabData} />
      
        <KeyFeaturesSection title="Key Features of HubSpot" features={hubFeature}/>
       

       
 <SubHeader
      title='Salesforce'
      subtitle='The Industry-Leading CRM and Cloud Platform for Sales, Marketing, and Customer Service'
      description={saleDesc}
      />
       <SubHeader
      title='What is Salesforce?'
      description={whyHub}   
      position='left'  />

      
        <CloudSpecial tabData={saleData} />
        
        <KeyFeaturesSection title="Key Features of Salesforce" features={saleFeature}/>
       

    </Section>
  )
}

export default Saas
